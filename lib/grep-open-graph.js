const _ = require('lodash');
const cheerio = require('cheerio');
const ogFields = require('./fields');

function getFieldValue(field, $el) {
    let value;
    if (!field.valueType) {
        value = $el.attr('content');
    } else if (field.valueType === 'text') {
        value = $el.text();
    } else if (field.valueType === 'html') {
        value = $el.html();
    }

    if (_.isFunction(field.formatter)) {
        value = field.formatter(value);
    }
    return value;
}

/**
 * open graph 값을 추출하는 함수를 반환한다.
 * 
 * @param {array} grepFields 추출할 필드 정의
 * @returns {function} cheerio를 인자로 받아서 open graph 값을 추출하는 함수
 */
function grepOpenGraph(customFields) {
    const grepFields = _.isArray(customFields) ? _.concat(ogFields, customFields) : ogFields;

    return (html) => {
        const $ = cheerio.load(html);
        const openGraphObj = {};
        
        _.each(grepFields, (field) => {
            const $el = $(field.selector);
            const name = field.name;
            
            // TODO fields.multiple === true인 경우 best object를 찾아서 리턴해주도록... 여기 참고 -> https://github.com/jshemas/openGraphScraper/blob/master/lib/media.js
            // 현재는 무조건 첫 번째 값을 리턴함 HJ.Park 2017-11-02
            const $firstEl = $el.eq(0);
            const value = getFieldValue(field, $firstEl);
            
            if (!value) return;

            openGraphObj[name] = value;
        });
        return openGraphObj;
    };
}

module.exports = grepOpenGraph;
