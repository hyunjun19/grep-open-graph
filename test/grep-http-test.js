const _ = require('lodash');
const axios = require('axios');
const assert = require('assert');
const Iconv = require('iconv').Iconv;
const moment = require('moment');
const grepHttpOpenGraph = require('../lib/grep-http-open-graph');

const naverBlogUrl = 'http://blog.naver.com/PostView.nhn?blogId=natur_herz&logNo=221021152411';
const gajagoDealUrl = 'https://www.thegajago.com/deals/22008';

const customFields = [
    {
        multiple: false,
        selector: '._postAddDate',
        name: 'postAddDate',
        valueType: 'text',
        formatter: (text) => {
            const postDate = moment(text, 'YYYY.M.D.H:m');
            if (postDate.isValid() === false) return '';

            return postDate.format();
        }
    },
    {
        multiple: false,
        selector: '.social',
        name: 'social',
        valueType: 'html'
    }
];

describe('HTTP TEST', () => {
    it('네이버 블로그 HTTP(MS949) 테스트', (done) => {
        grepHttpOpenGraph(naverBlogUrl, customFields, 'CP949')
            .then((openGraphObj) => {
                // console.log('\n\n### NaverBlog ###\n', openGraphObj);

                assert.equal(openGraphObj.ogTitle, '[평창 여행] 조나단 패러글라이딩 - 하늘을 날다, 바람을 느끼다', '타이틀이 틀렸어...');
                assert.equal(openGraphObj.postAddDate, '2017-06-04T02:29:00+09:00', '포스트 작성일을 못가져왔네...');

                done();
            })
            .catch((err) => done(err));
    });

    it('가자고 딜뷰 HTTP(UTF-8) 테스트', (done) => {
        grepHttpOpenGraph(gajagoDealUrl, customFields)
            .then((openGraphObj) => {
                // console.log('\n\n### GajagoDeal ###\n', openGraphObj);

                assert.equal(openGraphObj.ogTitle, '[충남] 태안투어패스 (구매 후 익일 사용가능) 4,000원 - 대한민국 어디든, 가자고!', '타이틀이 틀렸어...');
                assert.equal(openGraphObj.social, '<a data-href="https://www.facebook.com/thegajago/" title="facebook"><i class="icon-facebook"></i></a><a data-href="http://blog.naver.com/start1q" title="naver blog"><i class="icon-blog"></i></a><a data-href="https://www.youtube.com/channel/UC5GHZ6AL_yXpxnPcATCER7w" title="youtube"><i class="icon-youtube-line"></i></a><a data-href="https://www.instagram.com/gajago_insta/" title="instagram"><i class="icon-instagram-line"></i></a>', '소셜 HTML을 못가져왔네...');

                done();
            })
            .catch((err) => done(err));
    });
});
    