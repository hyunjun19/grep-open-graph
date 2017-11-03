/**
 * origin => https://github.com/jshemas/openGraphScraper
 */
const ogFields = [
    {
      multiple: false,
      selector: 'meta[property="og:title"]',
      name: 'ogTitle'
    },
    {
      multiple: false,
      selector: 'meta[property="og:type"]',
      name: 'ogType'
    },
    {
      multiple: true,
      selector: 'meta[property="og:image"]',
      name: 'ogImage'
    },
    {
      multiple: true,
      selector: 'meta[property="og:image:url"]',
      name: 'ogImageURL'
    },
    {
      multiple: true,
      selector: 'meta[property="og:image:secure_url"]',
      name: 'ogImageSecureURL'
    },
    {
      multiple: true,
      selector: 'meta[property="og:image:width"]',
      name: 'ogImageWidth'
    },
    {
      multiple: true,
      selector: 'meta[property="og:image:height"]',
      name: 'ogImageHeight'
    },
    {
      multiple: true,
      selector: 'meta[property="og:image:type"]',
      name: 'ogImageType'
    },
    {
      multiple: false,
      selector: 'meta[property="og:url"]',
      name: 'ogUrl'
    },
    {
      multiple: false,
      selector: 'meta[property="og:audio"]',
      name: 'ogAudio'
    },
    {
      multiple: false,
      selector: 'meta[property="og:audio:url"]',
      name: 'ogAudioURL'
    },
    {
      multiple: false,
      selector: 'meta[property="og:audio:secure_url"]',
      name: 'ogAudioSecureURL'
    },
    {
      multiple: false,
      selector: 'meta[property="og:audio:type"]',
      name: 'ogAudioType'
    },
    {
      multiple: false,
      selector: 'meta[property="og:description"]',
      name: 'ogDescription'
    },
    {
      multiple: false,
      selector: 'meta[property="og:determiner"]',
      name: 'ogDeterminer'
    },
    {
      multiple: false,
      selector: 'meta[property="og:locale"]',
      name: 'ogLocale'
    },
    {
      multiple: false,
      selector: 'meta[property="og:locale:alternate"]',
      name: 'ogLocaleAlternate'
    },
    {
      multiple: false,
      selector: 'meta[property="og:site_name"]',
      name: 'ogSiteName'
    },
    {
      multiple: false,
      selector: 'meta[property="og:product:retailer_item_id"]',
      name: 'ogProductRetailerItemId'
    },
    {
      multiple: false,
      selector: 'meta[property="og:product:price:amount"]',
      name: 'ogProductPriceAmount'
    },
    {
      multiple: false,
      selector: 'meta[property="og:product:price:currency"]',
      name: 'ogProductPriceCurrency'
    },
    {
      multiple: false,
      selector: 'meta[property="og:product:availability"]',
      name: 'ogProductAvailability'
    },
    {
      multiple: false,
      selector: 'meta[property="og:product:condition"]',
      name: 'ogProductCondition'
    },
    {
      multiple: true,
      selector: 'meta[property="og:video"]',
      name: 'ogVideo'
    },
    {
      multiple: true,
      selector: 'meta[property="og:video:url"]', // An alternative to 'og:video'
      name: 'ogVideo'
    },
    {
      multiple: true,
      selector: 'meta[property="og:video:secure_url"]',
      name: 'ogVideoSecureURL'
    },
    {
      multiple: true,
      selector: 'meta[property="og:video:width"]',
      name: 'ogVideoWidth'
    },
    {
      multiple: true,
      selector: 'meta[property="og:video:height"]',
      name: 'ogVideoHeight'
    },
    {
      multiple: true,
      selector: 'meta[property="og:video:type"]',
      name: 'ogVideoType'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:card"]',
      name: 'twitterCard'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:site"]',
      name: 'twitterSite'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:site:id"]',
      name: 'twitterSiteId'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:creator"]',
      name: 'twitterCreator'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:creator:id"]',
      name: 'twitterCreatorId'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:title"]',
      name: 'twitterTitle'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:description"]',
      name: 'twitterDescription'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:image"]',
      name: 'twitterImage'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:image:height"]',
      name: 'twitterImageHeight'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:image:width"]',
      name: 'twitterImageWidth'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:image:src"]',
      name: 'twitterImageSrc'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:image:alt"]',
      name: 'twitterImageAlt'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:player"]',
      name: 'twitterPlayer'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:player:width"]',
      name: 'twitterPlayerWidth'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:player:height"]',
      name: 'twitterPlayerHeight'
    },
    {
      multiple: true,
      selector: 'meta[property="twitter:player:stream"]',
      name: 'twitterPlayerStream'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:name:iphone"]',
      name: 'twitterAppNameiPhone'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:id:iphone"]',
      name: 'twitterAppIdiPhone'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:url:iphone"]',
      name: 'twitterAppUrliPhone'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:name:ipad"]',
      name: 'twitterAppNameiPad'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:id:ipad"]',
      name: 'twitterAppIdiPad'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:url:ipad"]',
      name: 'twitterAppUrliPad'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:name:googleplay"]',
      name: 'twitterAppNameGooglePlay'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:id:googleplay"]',
      name: 'twitterAppIdGooglePlay'
    },
    {
      multiple: false,
      selector: 'meta[property="twitter:app:url:googleplay"]',
      name: 'twitterAppUrlGooglePlay'
    }
];

module.exports = ogFields;
