// ==UserScript==
// @name         FulpTube+
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       You
// @match        https://www.fulptube.org/*
// @match        https://fulptube.org/*
// @match        https://fulp.byteemail.com/*
// @match        https://frogtube.cf/*
// @icon         https://www.google.com/s2/favicons?domain=fulptube.org
// @grant        none
// ==/UserScript==
// LIBRARY
function $addStyle(a){var b;if(b=document.getElementsByTagName("head")[0]){var c=document.createElement("style");c.type="text/css";c.innerHTML=a;b.appendChild(c)}}function $addScript(a){var b;if(b=document.getElementsByTagName("head")[0]){var c=document.createElement("script");c.type="text/javascript";c.innerHTML=a;b.appendChild(c)}}function $Remove(a){a=document.querySelector(a);a.parentNode.removeChild(a);return!1}
function $addElement(a,b){document.createElement("div").innerHTML=b;document.querySelector(a).outerHTML+=b};function $addElement2(a,b){document.createElement("div").innerHTML=b;document.querySelector(a).outerHTML+=b};
// GUIDE AND FOOTER FIX
$addStyle(`#channels-fo-yo{color: gray !important;}#guide-section-title.ytd-guide-section-renderer {
    font-size: 14px !important;
    letter-spacing: 0.2px;
}
<style>
#guide-section-title.ytd-guide-section-renderer {
    padding: 1px 0 8px!important;
    margin: 0 5px!important;
}`);
$addElement('.guide-toplevel',`
        <h2 id="channels-fo-yo">Channels For You</h2>
<ul id="guide-channels" class="guide-channels-list guide-item-container yt-uix-scroller filter-has-matches">



    <a class="guide-item " href="/channel?n=FulpTube" title="FulpTube" data-channel-id="UCBR8-60-B28hp2BmDPdntcQ">
        <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="/dynamic/pfp/default.png" alt="Thumbnail" data-thumb-manual="1" src="/dynamic/pfp/ed057497093e033471520332fb3ad392.jpg" width="18"><span class="vertical-align"></span></span></span></span></span>
      <span class="display-name">
        <span>FulpTube</span>
      </span>
    </a>


            <a class="guide-item " href="/channel?n=john" title="john" data-channel-id="UCBR8-60-B28hp2BmDPdntcQ">
        <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="/dynamic/pfp/default.png" alt="Thumbnail" data-thumb-manual="1" src="/dynamic/pfp/9f8f115266d309c89c8289b5f76ed887.png" width="18"><span class="vertical-align"></span></span></span></span></span>
      <span class="display-name">
        <span>john</span>
      </span>
    </a>

    <a class="guide-item " href="/channel?n=KSPortalcraft" title="KSPortalcraft" data-channel-id="UCBR8-60-B28hp2BmDPdntcQ">
        <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="/dynamic/pfp/default.png" alt="Thumbnail" data-thumb-manual="1" src="/dynamic/pfp/4b3e232cd613fa4150f3ce44b4d11c0b.png" width="18"><span class="vertical-align"></span></span></span></span></span>
      <span class="display-name">
        <span>KSPortalcraft</span>
      </span>
    </a>

    <a class="guide-item " href="/channel?n=Geodashplayer" title="Geodashplayer" data-channel-id="UCBR8-60-B28hp2BmDPdntcQ">
        <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="/dynamic/pfp/default.png" alt="Thumbnail" data-thumb-manual="1" src="/dynamic/pfp/45748751c4ecbe481cf794e01014fa38.jpeg" width="18"><span class="vertical-align"></span></span></span></span></span>
      <span class="display-name">
        <span>Geodashplayer</span>
      </span>
    </a>



          <li id="guide-filter-no-results">
No channels found
          </li>
      </ul><hr class="guide-section-separator subscriptions-text-holder">
      <h2 id="channels-fo-yo">Subscriptions</h2>`);
$addStyle('.html5-volume-panel {display:none !important}');
if (window.location.href.includes('channel') && window.location.href.includes('?n=')) {
     $addStyle(`#footer-hh-container {display:none !important}
p#padding {color:transparent !important}
body #footer-hh-container2 {
    background-color: #f2f2f2!important;
    border-top: 1px solid #e2e2e2;
}`);
$addElement('#footer-hh-container','<p id="padding">2</p><p id="padding">2</p>');

}
// USER MENU
$addElement('[href="/watchlater"]',`<a href="/history" style="
    margin-left: 10px;
    background-color: #f8f8f8!important;
    padding: 7px;
    display: inline-block;
    border: 1px solid #c6c6c6!important;
    color: #333!important;
    font-weight: bold!important;
    font-size: 12px!important;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none!important;
">Watch History</a>`);
$addStyle(`.acct-box {margin: 12px 0 0;
    padding: 20px 25px 15px;
    width: 334px !important;
    background: #f1f1f1;
    border: 2px solid #e5e5e5;
}
.html5-title-text {
    float:left;
        color:white
}`);
