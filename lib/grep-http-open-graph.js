const _ = require('lodash');
const axios = require('axios');
const Iconv = require('iconv').Iconv;
const grepOpenGraph = require('./grep-open-graph');

/**
 * ArrayBuffer 타입의 response.data를 charset에 맞춰서 문자열로 반환한다.
 * @param {string} optional srcCharset ex) 'CP949', 'EUC-KR'
 * @returns {string} HTML
 */
function getHtmlWithCharset(srcCharset) {
    return (response) => {
        const passConvert = (srcCharset === undefined || srcCharset === 'UTF-8');

        if (passConvert) {
            return (response.data).toString();
        } else {
            const iconv = new Iconv(srcCharset, 'UTF-8');
            return iconv.convert(response.data).toString();
        }
    };
}

function grepHttpOpenGraph(url, customFields, charset) {
    return axios
        .get(url, { responseType: 'arraybuffer' })
        .then(getHtmlWithCharset(charset))
        .then(grepOpenGraph(customFields));
}

module.exports = grepHttpOpenGraph;
