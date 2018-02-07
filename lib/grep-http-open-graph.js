const _ = require('lodash');
const axios = require('axios');
const Iconv = require('iconv').Iconv;
const grepOpenGraph = require('./grep-open-graph');

function appendHttpProtocal(srcUrl) {
    const lowerSrcUrl = _.toLower(srcUrl);
    if (_.startsWith(lowerSrcUrl, 'http')) return srcUrl;

    return `http://${srcUrl}`;
}

/**
 * ArrayBuffer 타입의 response.data를 charset에 맞춰서 문자열로 반환한다.
 * @param {string} optional srcCharset ex) 'CP949', 'EUC-KR'
 * @returns {string} HTML
 */
function getHtmlWithCharset(srcCharset) {
    // iconv는 MS949가 아니라 CP949로 변환해야 한다.
    const charsetMap = {
        'MS949': 'CP949'
    };

    return (response) => {
        let charset = srcCharset;
        if (!charset) {
            const contentType = response.headers['content-type'];
            if (_.isEmpty(contentType) === false) {
                const regex = /charset=(.*)/gi;
                const matches = regex.exec(contentType)
                if (matches != null) {
                    charset = matches[1];
                }
            }
        }

        const passConvert = (charset === undefined || charset === 'UTF-8');

        if (passConvert) {
            return (response.data).toString();
        } else {
            charset = charsetMap[charset] || 'UTF-8';

            const iconv = new Iconv(charset, 'UTF-8//translit//ignore');
            return iconv.convert(response.data).toString('UTF-8');
        }
    };
}

function grepHttpOpenGraph(url, customFields, charset) {
    return axios
        .get(appendHttpProtocal(url), { responseType: 'arraybuffer' })
        .then(getHtmlWithCharset(charset))
        .then(grepOpenGraph(customFields));
}

module.exports = grepHttpOpenGraph;
