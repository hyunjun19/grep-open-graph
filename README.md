# grep-open-graph
grep open-graph lib

## Setup
```bash
$ npm install --save grep-open-graph
```

## How to use
### 기본 추출 필드
./lib/fields.js 파일 참조

### 사용자 정의 필드
```js
{
    multiple: false,     // 예약어. 아직 사용되지 않습니다.
    selector: '.social', // Target CSS selector
    name: 'social',      // output name
    valueType: 'html'    // output type. 'text'(default) | 'html'
}
```

### grepHttpOpenGraph 사용예제
```js
const customFields = [
    {
        multiple: false,
        selector: '.social',
        name: 'social',
        valueType: 'html'
    }
];

grepHttpOpenGraph('https://www.thegajago.com/deals/22008', customFields, 'UTF-8'/** charset optional parameter **/)
    .then((openGraphObj) => {
        console.log(openGraphObj);
    })
    .catch((err) => console.log(err));

/*
{
    ogTitle: '[충남] 태안투어패스 (구매 후 익일 사용가능) 4,000원 - 대한민국 어디든, 가자고!',
    ogType: 'article',
    ogImage: 'https://d1t4fn350b1qbw.cloudfront.net/4e098daa-b143-4372-800b-836f692dfa39.jpg',
    ogUrl: 'http://www.thegajago.com/deals/22008',
    ogDescription: '태안여행 자유이용권 태안투어패스 : 태안천리포수목원 / 태안 빛축제 / 태안 쥬라기박물관 / 팜카밀레 허브농원 / 청산수목원\n#공룡 #자유이용권   #쥬라기박물관   #천리포수목원  #청산수목원  #태안         #태안    #태안빛축제   #태안여행   #태안투어   #태안투어패스   #태안패스   #태투   #투어패스   #팜카밀레   ',
    ogLocale: 'ko_KR',
    ogSiteName: '대한민국 어디든, 가자고! - 우리나라 곳곳의 숨어있는 즐거움을 추천해드려요:)',
    social: '<a data-href="https://www.facebook.com/thegajago/" title="facebook"><i class="icon-facebook"></i></a><a data-href="http://blog.naver.com/start1q" title="naver blog"><i class="icon-blog"></i></a><a data-href="https://www.youtube.com/channel/UC5GHZ6AL_yXpxnPcATCER7w" title="youtube"><i class="icon-youtube-line"></i></a><a data-href="https://www.instagram.com/gajago_insta/" title="instagram"><i class="icon-instagram-line"></i></a>'
}
*/
```
