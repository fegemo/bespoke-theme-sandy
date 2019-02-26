(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const bespoke = require('bespoke'),
  sandy = require('../../lib/bespoke-theme-sandy.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  overview = require('bespoke-simple-overview'),
  // search = require('bespoke-search'),
  hash = require('bespoke-hash'),
  state = require('bespoke-state');

bespoke.from('article', [
  sandy({ insertFonts: false }),
  keys(),
  touch(),
  state(),
  scale('transform'),
  progress(),
  hash(),
  overview({ insertStyles: false }),
  bullets('.bullet'),
  // search(),
  deck => {
    // makes the content visible to avoid FoUC
    deck.parent.style.visibility = 'visible';
  }
]);

},{"../../lib/bespoke-theme-sandy.js":2,"bespoke":12,"bespoke-bullets":3,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-simple-overview":9,"bespoke-state":10,"bespoke-touch":11}],2:[function(require,module,exports){

var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function(options) {
  options = options || { insertFonts: true };
  var theme = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\n@-webkit-keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@-webkit-keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@-webkit-keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@-webkit-keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}@keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.figure-slides>p,body,figure.embedded-caption p{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,ol,section,summary,ul{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0;color:#209934;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:initial}b{font-weight:700}dfn{font-style:italic}h1,mark{color:#000}h1{font-family:'Maitree',times,serif;font-size:2.5em}mark{background:#ff0}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre,samp{font-size:1em}pre{overflow:auto}samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend,pre>code{border:0;padding:0}textarea{overflow:auto}optgroup,strong{font-weight:700}table{border-collapse:collapse;border-spacing:0;border:2px solid gray;max-width:100%}td,th{border:1px solid gray}*{-webkit-box-sizing:border-box;box-sizing:border-box}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:#f7f9fb;color:#333;font-size:24px}.bespoke-parent:not(.emphatic){-webkit-transition:background-color 400ms ease;transition:background-color 400ms ease}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{-webkit-transition:opacity .4s ease;transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2){display:none}.emphatic{background-color:#3507a3}.emphatic,.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#fff}.emphatic strong{color:#38088e}}h2{font-size:1.5em}h3,ol.columns-3>li>h1,ol.columns-3>li>h2,ol.columns-3>li>h3,ol.columns-3>li>h4,ol.columns-3>li>h5,ol.columns-3>li>h6,ul.columns-3>li>h1,ul.columns-3>li>h2,ul.columns-3>li>h3,ul.columns-3>li>h4,ul.columns-3>li>h5,ul.columns-3>li>h6{font-size:1.25em}h4,h5,h6{font-size:1em}code,h2,h3,h4,h5,h6,pre{font-family:'Roboto','San Francisco',helvetica,arial,sans-serif;color:#000}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em;line-height:1em}li,p{font-size:24px;line-height:1.5em}strong{color:#3507a3}strong .alternate-color{color:#7b9c02}article{font-family:'Roboto','San Francisco',helvetica,arial,sans-serif}a:hover{text-decoration:underline}code,pre{border:1px solid rgba(0,20,80,.1);border-radius:.15em;background:#fff;font-family:'Cousine',monospace;-webkit-transition:-webkit-box-shadow 200ms ease;transition:box-shadow 200ms ease;transition:box-shadow 200ms ease,-webkit-box-shadow 200ms ease}pre{max-width:1026.6666666666665px;padding:1em;-webkit-box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078);box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078)}pre:hover{-webkit-box-shadow:0 8px 32px rgba(0,20,80,.078),0 4px 24px rgba(0,0,0,.078);box-shadow:0 8px 32px rgba(0,20,80,.078),0 4px 24px rgba(0,0,0,.078)}code{font-size:.75em;background-color:#fff;padding:.25em;-webkit-box-shadow:0 4px 8px rgba(0,20,80,.039),0 2px 8px rgba(0,0,0,.078);box-shadow:0 4px 8px rgba(0,20,80,.039),0 2px 8px rgba(0,0,0,.078)}code:hover{-webkit-box-shadow:0 4px 24px rgba(0,20,80,.078),0 2px 24px rgba(0,0,0,.078);box-shadow:0 4px 24px rgba(0,20,80,.078),0 2px 24px rgba(0,0,0,.078)}pre>code{font-size:.83333em;background-color:transparent;border:initial}pre>code,pre>code:hover{-webkit-box-shadow:initial;box-shadow:initial}pre code span{word-wrap:break-word;word-break:break-all}pre.hljs{margin:auto}pre.hljs+pre.hljs{margin-top:1em}ol.no-list-icon,ul.no-list-icon{list-style-type:none}ol.columns-3,ul.columns-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}ol.columns-3>li,ul.columns-3>li{-webkit-box-flex:1;-ms-flex:1;flex:1}ol.columns-3>li:not(:last-of-type),ul.columns-3>li:not(:last-of-type){margin-right:1em}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:10.5em}dl.width-40>dt{width:40%}dl.width-40>dd{margin-left:42%}dl.width-50>dt{width:50%}dl.width-50>dd{margin-left:52%}del{color:gray}tr{background-color:rgba(255,255,255,.7);border:1px solid rgba(0,0,0,.4)}tr:nth-of-type(even)>td{background-color:rgba(255,255,255,.4)}td{padding:6px}th{color:#fff;padding:10px;background-color:#333}td:not(:last-child),th:not(:last-child){border-right:1px solid rgba(0,0,0,.2)}thead>tr{background-color:#555;color:#fff}blockquote{margin:.25em 0;padding:.25em 40px;background:#f5f5f5;-webkit-box-shadow:4px 4px 4px silver;box-shadow:4px 4px 4px silver;line-height:1.45;font-size:18px;font-family:Georgia,serif;font-style:italic;color:#383838;border:1px solid silver}blockquote.centered{margin-left:auto;margin-right:auto}blockquote>p{margin:.5em auto}blockquote::before{content:\"\\201C\";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:#7a7a7a}blockquote cite{display:block;margin-top:5px;font-size:75%;color:#999}blockquote cite::before{content:\"\\2014 \\2009\"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;-webkit-box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;-webkit-transition:top 40ms ease-out,-webkit-box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out,-webkit-box-shadow 40ms ease-out}kbd:hover{top:4px;-webkit-box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset}figcaption{background-color:#f5f5f5;padding:5px;margin-bottom:3px}blockquote,figure.embedded-caption,kbd{position:relative}figure.embedded-caption figcaption{position:absolute;background-color:rgba(0,0,0,.25)}figure.embedded-caption figcaption.caption-bottom{bottom:1em}figure.embedded-caption figcaption.caption-top{top:1em;left:0;right:0}figure.embedded-caption figcaption.caption-bottom{left:0;right:0}.push-code-right>code,img[alt$=right]{float:right}.push-code-left>code,img[alt$=left]{float:left}.push-right{float:right;margin-left:20px}.push-left{float:left;margin-right:20px}.push-code-right pre{float:right;clear:right}.push-code-left pre{float:left;clear:left}.figure-slides{position:relative}.figure-slides.clean .bespoke-bullet:not(.bespoke-bullet-current){visibility:hidden}.figure-step:not(:first-child){position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}input.switch:empty{display:block;margin-left:-999px}input.switch:empty~label{position:relative;float:left;line-height:1.6em;text-indent:4em;margin:.2em 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input.switch:empty~label:after,input.switch:empty~label:before{position:absolute;display:block;top:0;bottom:0;left:0;content:' ';width:3.6em;background-color:#c33;border-radius:.3em;-webkit-box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);-webkit-transition:all 100ms ease-in;transition:all 100ms ease-in}input.switch:empty~label:after{width:1.4em;top:.1em;bottom:.1em;margin-left:.1em;background-color:#fff;border-radius:.15em;-webkit-box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2);box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2)}input.switch:checked~label:before{background-color:#393}input.switch:checked~label:after{margin-left:2.1em}img.full-width{width:100%}img.large-width{width:80%}img.medium-width{width:60%}img.small-width{width:40%}img.full-height{height:100%}img.huge-height{height:80%}img.large-height{height:60%}img.medium-height{height:40%}img.small-height{height:20%}img.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;-webkit-animation:floating 2s ease-in-out 0s infinite alternate;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:\" \";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0%,rgba(255,255,255,0) 100%);z-index:-1;-webkit-animation:floated-element-shadow 2s ease-in-out 0s infinite alternate;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{-webkit-transition:-webkit-transform 600ms ease-out;transition:transform 600ms ease-out;transition:transform 600ms ease-out,-webkit-transform 600ms ease-out}.flips *{margin:0}.flips:hover{-webkit-transform:rotateY(720deg);transform:rotateY(720deg)}.portrait{shape-outside:circle(50%)}.contain{max-width:100%;max-height:100%}.half-width{width:50%}.three-quarter-width{width:75%}img.centered{display:block;margin-left:auto;margin-right:auto}.full-width{width:100%}.center-aligned{text-align:center}.centered{margin-left:auto;margin-right:auto}.emoji{height:1em;width:1em;vertical-align:middle}.on-line{height:1em;line-height:1em}.no-margin{margin:0}.no-padding{padding:0}.full-page-video-caption{position:absolute;bottom:30px;font-size:.75em;left:50%;width:16em;text-align:center;margin-left:-8em;padding:0;background-color:rgba(255,255,8,.65);border-radius:.25em;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2);box-shadow:3px 3px 3px rgba(0,0,0,.2)}.bullet-no-anim{-webkit-transition:none!important;transition:none!important}.full-width-slides,.full-width-slides img{max-width:100%}.bordered{border:1px solid rgba(0,0,0,.5)}.rounded{border-radius:4px}.clearer{clear:both}.compact-code pre,.compact-code~pre{line-height:1em}.compact-code-more pre,.compact-code-more~pre{line-height:1em;font-size:75%}.code-split-2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.code-split-2 pre.hljs{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:0;margin-bottom:0}.code-split-2 pre.hljs:not(:last-of-type){border-right:3px double #fff}.code-split-2 pre.hljs+pre.hljs{margin-top:0}.horizontal-list{list-style:none}.horizontal-list>li{display:inline-block;width:25%;margin:0 4.5% 0 0;vertical-align:middle}.horizontal-list>li:last-of-type{margin:0}.multi-column-list-2,.multi-column-list-3{padding-left:0;-webkit-column-count:2;column-count:2;list-style-position:inside}.multi-column-list-3{-webkit-column-count:3;column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;-webkit-column-count:4;column-count:4;list-style-position:inside}.multi-column-list-5{-webkit-column-count:5;column-count:5}.horizontal-list-flex,.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.horizontal-list-flex{-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.layout-split-2>section{width:50%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-3>section,.layout-split-4>section,.layout-split-5>section{width:33.33333333333333%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-4>section,.layout-split-5>section{width:25%}.layout-split-5>section{width:20%}.item-code-with-image,.item-code-with-result{padding-left:0;list-style-type:none}.item-code-with-image li,.item-code-with-result li{clear:right;margin-bottom:1em}.item-code-with-image li>.result,.item-code-with-image li>img,.item-code-with-result li>.result,.item-code-with-result li>img{float:right;margin-left:1em}.note{border:1px solid #b8860b;list-style-type:none;border-radius:5px;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2);box-shadow:3px 3px 3px rgba(0,0,0,.2);padding:.3em .5em;background:-webkit-gradient(linear,left top,right bottom,from(#ffffe0),to(#fff176));background:linear-gradient(to right bottom,#ffffe0,#fff176)}.note::before{content:\"\\26A0\";margin-right:1rem;color:#000;border:inherit;border-radius:50%;width:1em;height:1em;display:inline-block;text-align:center;line-height:.75em;background:#fff;font-size:2em;-webkit-box-shadow:inherit;box-shadow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.note strong{color:#b8860b}.badge{display:inline-block;background-color:#fff;border-radius:4px;border:1px solid #333;color:#666;font-size:75%;line-height:1em;padding:.1em .2em}.badge.type1{color:teal;border-color:teal}.badge.type2{color:#6495ed;border-color:#6495ed}.bouncing-left{-webkit-animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate;animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate}.delay-1{-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-transition-delay:.2s;transition-delay:.2s}.delay-2{-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-transition-delay:.4s;transition-delay:.4s}.delay-3{-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-transition-delay:.6s;transition-delay:.6s}.delay-4{-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-transition-delay:.8s;transition-delay:.8s}.delay-5{-webkit-animation-delay:1s;animation-delay:1s;-webkit-transition-delay:1s;transition-delay:1s}.delay-6{-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-transition-delay:1.2s;transition-delay:1.2s}@media screen{.transition-sliding,.transition-subtle{overflow:hidden}.transition-sliding .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity .4s ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity .4s ease;transition:transform 400ms ease,opacity .4s ease,-webkit-transform 400ms ease}.transition-sliding .bespoke-before{-webkit-transform:translate3d(-101%,0,0);transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{-webkit-transform:translate3d(101%,0,0);transform:translate3d(101%,0,0)}.bespoke-slide,.transition-giant-wheel .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity 400ms ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity 400ms ease;transition:transform 400ms ease,opacity 400ms ease,-webkit-transform 400ms ease}.bespoke-before{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}.bespoke-after{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}.transition-book,.transition-giant-wheel{overflow:hidden}.transition-giant-wheel .bespoke-slide{-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:50% -100%;transform-origin:50% -100%}.transition-giant-wheel .bespoke-before{-webkit-transform:rotateZ(15deg);transform:rotateZ(15deg)}.transition-giant-wheel .bespoke-after{-webkit-transform:rotateZ(-15deg);transform:rotateZ(-15deg)}.transition-book .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:0 0;transform-origin:0 0}.transition-book .bespoke-before{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}.transition-book .bespoke-after{-webkit-transform:rotateY(10deg);transform:rotateY(10deg)}}.layout-title.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.layout-title.bespoke-slide h1{-webkit-box-flex:.65;-ms-flex:.65;flex:.65;margin:0;padding:.25em;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#fff;text-align:left;text-shadow:.025em .025em #000}.layout-title.bespoke-slide h1::before{content:\"\";position:absolute;left:0;right:0;top:0;bottom:35%;background-size:cover;background-position:50% 100%;z-index:-1}.layout-title.bespoke-slide h2{-webkit-box-flex:.25;-ms-flex:.25;flex:.25;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;padding:.25em;text-align:right;color:#000}.layout-section-header.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-section-header.bespoke-slide::after,.layout-section-header.bespoke-slide::before{content:\"\";position:absolute;top:0;bottom:0;width:50%}.layout-section-header.bespoke-slide::after{z-index:-1}.layout-section-header.bespoke-slide::before{left:0;-webkit-box-shadow:10px 0 10px rgba(0,0,0,.2);box-shadow:10px 0 10px rgba(0,0,0,.2);z-index:0}.layout-section-header.bespoke-slide::after{right:0;background-color:#fff;background-size:cover}.layout-section-header.bespoke-slide h1+:not(h2),.layout-section-header.bespoke-slide h1+h2~:not(.content){-webkit-box-flex:1;-ms-flex:1;flex:1}.layout-section-header.bespoke-slide .content{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;text-shadow:.05em .05em #000}.layout-section-header.bespoke-slide .content strong{color:#8a5cf8}.layout-section-header.bespoke-slide .content>img{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;justify-self:center;-ms-flex-item-align:center;align-self:center}.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{display:inline}.layout-section-header.bespoke-slide .content p::after{content:\" \";display:block;margin-bottom:.5em}.layout-section-header.bespoke-slide .content li::before{content:\" \";display:list-item;float:left}.layout-section-header.bespoke-slide .content li::after{content:\" \";display:block}.layout-section-header.bespoke-slide>*{width:50%;padding:0 1em}.layout-section-header.bespoke-slide>ol,.layout-section-header.bespoke-slide>ul{padding-left:2em}.layout-section-header.bespoke-slide h1,.layout-section-header.bespoke-slide h2{margin:0;padding:.25em;text-align:left}.layout-section-header.bespoke-slide h1{-webkit-box-flex:.25;-ms-flex:.25;flex:.25;font-weight:700}.layout-section-header.bespoke-slide h2{-webkit-box-flex:.75;-ms-flex:.75;flex:.75;color:inherit}.layout-2-column-content.bespoke-slide,.layout-regular.bespoke-slide,.layout-stripe.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem}.layout-regular.bespoke-slide>h1,.layout-regular.bespoke-slide>h2{font-size:2em}.layout-regular.bespoke-slide h1,.layout-regular.bespoke-slide h2,.layout-regular.bespoke-slide h3,.layout-regular.bespoke-slide h4,.layout-regular.bespoke-slide h5,.layout-regular.bespoke-slide h6{margin:0 0 .75em;padding:0}.layout-stripe.bespoke-slide>h1,.layout-stripe.bespoke-slide>h2{font-size:2em}.layout-stripe.bespoke-slide .stripe{width:100%;height:3em;-o-object-fit:contain;object-fit:contain;background-size:5em;background-repeat:repeat-x;margin-bottom:2em}.layout-stripe.bespoke-slide h1,.layout-stripe.bespoke-slide h2,.layout-stripe.bespoke-slide h3,.layout-stripe.bespoke-slide h4,.layout-stripe.bespoke-slide h5,.layout-stripe.bespoke-slide h6{-ms-flex-item-align:center;align-self:center}.layout-2-column-content.bespoke-slide{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content.bespoke-slide>h1,.layout-2-column-content.bespoke-slide>h2{font-size:2em}.layout-2-column-content.bespoke-slide h1,.layout-2-column-content.bespoke-slide h2,.layout-2-column-content.bespoke-slide h3,.layout-2-column-content.bespoke-slide h4,.layout-2-column-content.bespoke-slide h5,.layout-2-column-content.bespoke-slide h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-content.bespoke-slide>*+*{width:49%;margin-left:1%;margin-right:0}.layout-2-column-content.bespoke-slide>*+::last-child,.layout-2-column-highlight-and-list>*+::last-child{margin-left:0}.layout-centered-horizontal.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1.5rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-2-column-content-zigzag.bespoke-slide>h1,.layout-2-column-content-zigzag.bespoke-slide>h2,.layout-centered-horizontal.bespoke-slide>h1,.layout-centered-horizontal.bespoke-slide>h2,.layout-regular-block.bespoke-slide>h1,.layout-regular-block.bespoke-slide>h2,.layout-regular-horizontal.bespoke-slide>h1,.layout-regular-horizontal.bespoke-slide>h2{font-size:2em}.layout-regular-horizontal.bespoke-slide{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content-zigzag.bespoke-slide,.layout-regular-block.bespoke-slide,.layout-regular-horizontal.bespoke-slide,[class*=layout-2-column-content-]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;padding:1.5rem;align-items:flex-start}.layout-regular-block.bespoke-slide{display:block}.layout-2-column-content-zigzag.bespoke-slide,[class*=layout-2-column-content-]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-2-column-content-zigzag.bespoke-slide h1,.layout-2-column-content-zigzag.bespoke-slide h2{width:100%}.layout-2-column-content-zigzag.bespoke-slide>:not(:first-child){width:48%}.layout-2-column-content-result.bespoke-slide{display:-webkit-box;display:-ms-flexbox;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1.5rem;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.layout-2-column-content-result.bespoke-slide>h1,.layout-2-column-content-result.bespoke-slide>h2,.layout-2-column-highlight-and-list>h1,.layout-2-column-highlight-and-list>h2,[class*=layout-2-column-content-]>h1,[class*=layout-2-column-content-]>h2{font-size:2em}.layout-2-column-content-result.bespoke-slide>*{width:48%}[class*=layout-2-column-content-]>:first-child{width:100%;-ms-flex-item-align:end;align-self:flex-end}[class*=layout-2-column-content-]>pre{max-height:calc(100% - .25em - 1.5em - 24px - 4em)}.layout-2-column-highlight-and-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-perspective:900px;perspective:900px}.layout-2-column-highlight-and-list h1,.layout-2-column-highlight-and-list h2,.layout-2-column-highlight-and-list h3,.layout-2-column-highlight-and-list h4,.layout-2-column-highlight-and-list h5,.layout-2-column-highlight-and-list h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-highlight-and-list>:nth-child(2){width:30%;-webkit-box-shadow:20px 20px 20px rgba(0,0,0,.2);box-shadow:20px 20px 20px rgba(0,0,0,.2);-webkit-transition:all 500ms ease 400ms;transition:all 500ms ease 400ms;opacity:.5;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:right;transform-origin:right;margin-top:1em}.layout-2-column-highlight-and-list>:nth-child(2)>img,.layout-tall-figure-left>:nth-child(2)>img,.layout-tall-figure-right>:nth-child(2)>img{max-width:100%;max-height:100%}.layout-2-column-highlight-and-list.bespoke-active>:nth-child(2){-webkit-transform:rotateY(30deg) scale(1);transform:rotateY(30deg) scale(1);opacity:1}.layout-2-column-highlight-and-list>*+*{width:60%;margin-left:1%;margin-right:0}.layout-3-column-element-with-titles-expansible{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.layout-3-column-element-with-titles-expansible>*{width:calc(33% - 1rem)}.layout-3-column-element-with-titles-expansible h1,.layout-3-column-element-with-titles-expansible h2,.layout-3-column-element-with-titles-expansible h3,.layout-3-column-element-with-titles-expansible h4,.layout-3-column-element-with-titles-expansible h5,.layout-3-column-element-with-titles-expansible h6{margin:auto 0}.layout-3-column-element-with-titles-expansible h1:not(:last-of-type),.layout-3-column-element-with-titles-expansible h2:not(:last-of-type),.layout-3-column-element-with-titles-expansible h3:not(:last-of-type),.layout-3-column-element-with-titles-expansible h4:not(:last-of-type),.layout-3-column-element-with-titles-expansible h5:not(:last-of-type),.layout-3-column-element-with-titles-expansible h6:not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n){height:calc(100% - 2.5em);margin:0;-webkit-transition:all 100ms ease;transition:all 100ms ease;position:relative}.layout-3-column-element-with-titles-expansible>:nth-child(2n):not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n):hover{left:0;width:100%;z-index:1}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2){-webkit-transition-duration:50ms;transition-duration:50ms}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2):hover{left:-33%}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3){-webkit-transition:none;transition:none}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3):hover{left:-67%}.layout-main-point.bespoke-slide{background-image:-webkit-gradient(linear,left top,right bottom,from(#3507a3),to(#1d045a));background-image:linear-gradient(to right bottom,#3507a3,#1d045a)}.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6{color:#fff}.layout-circling-balloons h1,.layout-circling-balloons h2,.layout-circling-balloons h3,.layout-circling-balloons h4,.layout-circling-balloons h5,.layout-circling-balloons h6{z-index:1}.layout-circling-balloons>ul{position:absolute;left:0;top:0;width:100%;height:100%;margin:0}.layout-circling-balloons>ul>li{position:absolute;width:200px;height:200px;left:calc(50% - 100px);top:calc(50% - 100px);padding:0;margin:0;border-radius:50%;background:gold;overflow:hidden;list-style-type:none;-webkit-transition:all 250ms ease;transition:all 250ms ease;-webkit-animation:circling 36s linear 0s infinite;animation:circling 36s linear 0s infinite}.layout-circling-balloons>ul>li:nth-of-type(1){-webkit-animation-delay:0s;animation-delay:0s}.layout-circling-balloons>ul>li:nth-of-type(2){-webkit-animation-delay:-12s;animation-delay:-12s}.layout-circling-balloons>ul>li:nth-of-type(3){-webkit-animation-delay:-24s;animation-delay:-24s}.layout-circling-balloons>ul>li>p:first-child{margin:0}.layout-circling-balloons>ul>li>img:first-child,.layout-circling-balloons>ul>li>p:first-child{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transition:all 250ms ease;transition:all 250ms ease}.layout-circling-balloons>ul>li>img:first-child,.layout-circling-balloons>ul>li>img:first-child img,.layout-circling-balloons>ul>li>p:first-child img{display:block;width:125px;height:125px;margin:37.5px auto}.layout-circling-balloons>ul>li>:nth-child(2){margin-top:200px;padding:1em}.layout-circling-balloons>ul>li:hover{width:26em;height:10em;top:calc(50% - 5em);left:calc(50% - 13em);border-radius:2em;overflow:visible;z-index:2}.layout-circling-balloons>ul>li:hover>:first-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.layout-circling-balloons>ul>li:hover>:nth-child(2){margin-top:1em}.layout-circling-balloons>ul:hover>li{-webkit-animation-play-state:paused;animation-play-state:paused}.layout-tall-figure-left,.layout-tall-figure-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-tall-figure-left>h1,.layout-tall-figure-left>h2,.layout-tall-figure-right>h1,.layout-tall-figure-right>h2{font-size:2em}.layout-tall-figure-left h1,.layout-tall-figure-left h2,.layout-tall-figure-left h3,.layout-tall-figure-left h4,.layout-tall-figure-left h5,.layout-tall-figure-left h6,.layout-tall-figure-right h1,.layout-tall-figure-right h2,.layout-tall-figure-right h3,.layout-tall-figure-right h4,.layout-tall-figure-right h5,.layout-tall-figure-right h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(2){-ms-flex-preferred-size:30%;flex-basis:30%}.layout-tall-figure-left>:nth-child(3),.layout-tall-figure-right>:nth-child(3){-ms-flex-preferred-size:70%;flex-basis:70%}.layout-tall-figure-right>:nth-child(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(3){-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.layout-tall-figure-left>:nth-child(3){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.show-active-slide-and-previous .bespoke-before-1{-webkit-transform:translate3d(-30%,0,-250px) rotateY(10deg);transform:translate3d(-30%,0,-250px) rotateY(10deg);opacity:1}.show-active-slide-and-previous .bespoke-active{-webkit-transform:translate3d(30%,0,-250px) rotateY(-10deg);transform:translate3d(30%,0,-250px) rotateY(-10deg)}[data-bespoke-state=show-active-slide-and-previous].bespoke-before-1{-webkit-transform:translate3d(-30%,0,-250px) rotateY(10deg);transform:translate3d(-30%,0,-250px) rotateY(10deg);opacity:0}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-bullet{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .4s ease;transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);-webkit-transition:all .2s ease;transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bullet-old{color:gray}.bullet-no-anim{-webkit-transition-property:opacity;transition-property:opacity}.bullet-no-anim.bespoke-bullet-inactive{-webkit-transform:none;transform:none}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:3px;z-index:2}.bespoke-progress-parent::after{content:attr(slide-no);position:absolute;font-size:10px;border-radius:5px;width:2em;height:2.5em;left:1em;top:-1em;padding:1em .5em 0;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#83a2c1;color:#fff}.bespoke-progress-bar{position:absolute;height:100%;-webkit-transition:width .3s ease;transition:width .3s ease}.bespoke-progress-bar:before{content:\" \";position:absolute;display:block;width:100%;height:100%;background:#83a2c1}.bespoke-progress-bar::after{content:\" \";position:absolute;right:-1em;border-top:0 solid transparent;border-bottom:3px solid transparent;border-left:1em solid #83a2c1}.bespoke-parent,.bespoke-scale-parent{-webkit-perspective:900px;perspective:900px}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4):not(.bespoke-after-5):not(.bespoke-after-6){-webkit-transform:translate3d(7634.667338669354px,0,-2000px);transform:translate3d(7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4):not(.bespoke-before-5):not(.bespoke-before-6){-webkit-transform:translate3d(-7634.667338669354px,0,-2000px);transform:translate3d(-7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-1{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(1090.6667626670505px,0,-2000px);transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-1090.6667626670505px,0,-2000px);transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-2{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(2181.333525334101px,0,-2000px);transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-2181.333525334101px,0,-2000px);transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-3{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(3272.0002880011516px,0,-2000px);transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-3272.0002880011516px,0,-2000px);transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-4{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(4362.667050668202px,0,-2000px);transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-4362.667050668202px,0,-2000px);transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(5453.333813335253px,0,-2000px);transform:translate3d(5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-5453.333813335253px,0,-2000px);transform:translate3d(-5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-6,.bespoke-simple-overview .bespoke-slide.bespoke-before-6{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(6544.000576002303px,0,-2000px);transform:translate3d(6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-6{-webkit-transform:translate3d(-6544.000576002303px,0,-2000px);transform:translate3d(-6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);-webkit-transition:opacity 100ms ease-out;transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:0;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:0;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);-webkit-transition:bottom 140ms ease-out;transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:orange}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:0 0!important}body,html{overflow:visible!important}body{margin:0!important;padding:.1in!important;height:auto!important}body,code{line-height:1em!important}code,ol,pre,ul{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{-webkit-box-sizing:border-box!important;box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;transform:none!important;-webkit-transition:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-column-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */\n/*# sourceMappingURL=theme.css.map */\n";
  var fonts = (fonts = "@import url(https://fonts.googleapis.com/css?family=Maitree:400,700|Roboto:400,700|Cousine);\n/*# sourceMappingURL=fonts.css.map */\n/*# sourceMappingURL=fonts.css.map */\n");

  if (!!options.insertFonts) {
    insertCss(fonts, { prepend: true });
  }
  insertCss(theme, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};


},{"bespoke-classes":4,"insert-css":13}],3:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1;

        if (activeSlideHasBulletByOffset(1)) {
          activateBullet(activeSlideIndex, activeBulletIndex + 1);
          return false;
        } else if (bullets[nextSlideIndex]) {
          activateBullet(nextSlideIndex, 0);
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1;

        if (activeSlideHasBulletByOffset(-1)) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        } else if (bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    activateBullet(0, 0);
  };
};

},{}],4:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],5:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var activateSlide = function(index) {
      var indexToActivate = -1 < index && index < deck.slides.length ? index : 0;
      if (indexToActivate !== deck.slide()) {
        deck.slide(indexToActivate);
      }
    };

    var parseHash = function() {
      var hash = window.location.hash.slice(1),
        slideNumberOrName = parseInt(hash, 10);

      if (hash) {
        if (slideNumberOrName) {
          activateSlide(slideNumberOrName - 1);
        } else {
          deck.slides.forEach(function(slide, i) {
            if (slide.getAttribute('data-bespoke-hash') === hash || slide.id === hash) {
              activateSlide(i);
            }
          });
        }
      }
    };

    setTimeout(function() {
      parseHash();

      deck.on('activate', function(e) {
        var slideName = e.slide.getAttribute('data-bespoke-hash') || e.slide.id;
        window.location.hash = slideName || e.index + 1;
      });

      window.addEventListener('hashchange', parseHash);
    }, 0);
  };
};

},{}],6:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical';

    document.addEventListener('keydown', function(e) {
      if (e.which == 34 || // PAGE DOWN
        (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
        (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
        (isHorizontal && e.which == 37) || // LEFT
        (!isHorizontal && e.which == 38) // UP
      ) { deck.prev(); }
    });
  };
};

},{}],7:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressParent.appendChild(progressBar);
    deck.parent.appendChild(progressParent);

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
    });
  };
};

},{}],8:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      currentSlide = deck.slides[deck.slide()],
      slideHeight = currentSlide.offsetHeight,
      slideWidth = currentSlide.offsetWidth,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform'),

      innerWrap = function(element) {
        var innerWrapper = document.createElement('div');
        innerWrapper.className = 'bespoke-scale-parent';
        while (element.children.length > 0) {
          innerWrapper.appendChild(element.children[0]);
        }
        element.appendChild(innerWrapper);
        return innerWrapper;
      },

      element = useZoom ? parent : innerWrap(parent),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = (parent.offsetHeight / slideHeight) || 0;

        scale(Math.min(xScale, yScale), element);
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};

},{}],9:[function(require,module,exports){
(function (global){
/*! bespoke-simple-overview v1.0.0 © 2016 Flávio Coutinho, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s;s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,s=s.bespoke||(s.bespoke={}),s=s.plugins||(s.plugins={}),s.simpleOverview=e()}}(function(){return function e(s,o,t){function r(n,p){if(!o[n]){if(!s[n]){var a="function"==typeof require&&require;if(!p&&a)return a(n,!0);if(i)return i(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var b=o[n]={exports:{}};s[n][0].call(b.exports,function(e){var o=s[n][1][e];return r(o?o:e)},b,b.exports,e,s,o,t)}return o[n].exports}for(var i="function"==typeof require&&require,n=0;n<t.length;n++)r(t[n]);return r}({1:[function(e,s,o){var t=e("insert-css"),r=function(e,s){return s="object"==typeof s?s:{},Object.keys(e).forEach(function(o){s[o]=s[o]||e[o]}),s},i=function(e){return"string"==typeof e?e.toUpperCase().charCodeAt(0):e};s.exports=function(e){return e=r({activationKey:27,insertStyles:!0},e),e.activationKey=i(e.activationKey),function(s){var o,r,i,n,p,a;o=function(){s.on("activate",o)(),window.addEventListener("keydown",r,!1);var i=".bespoke-parent{-webkit-perspective:900px;perspective:900px}.bespoke-parent .bespoke-slide{transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.bespoke-simple-overview .bespoke-slide{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline:4px solid silver;background-color:rgba(255,255,255,.2);opacity:initial}.bespoke-simple-overview .bespoke-slide.bespoke-active,.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-before{display:none;-webkit-transform:translate3d(-630%,0,-2000px);transform:translate3d(-630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after{display:none;-webkit-transform:translate3d(630%,0,-2000px);transform:translate3d(630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-flex;display:-ms-flexbox;display:flex}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-105%,0,-2000px);transform:translate3d(-105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-210%,0,-2000px);transform:translate3d(-210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-315%,0,-2000px);transform:translate3d(-315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-420%,0,-2000px);transform:translate3d(-420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-525%,0,-2000px);transform:translate3d(-525%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{-webkit-transform:translate3d(105%,0,-2000px);transform:translate3d(105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{-webkit-transform:translate3d(210%,0,-2000px);transform:translate3d(210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{-webkit-transform:translate3d(315%,0,-2000px);transform:translate3d(315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{-webkit-transform:translate3d(420%,0,-2000px);transform:translate3d(420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5{-webkit-transform:translate3d(525%,0,-2000px);transform:translate3d(525%,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}";e.insertStyles&&t(i),a=s.parent.classList.contains("bespoke-simple-overview"),a&&SimpleOverview()},i=function(){window.removeEventListener("keydown",r,!1)},n=function(e){var o;return a?(o=s.slide()+e,o>=0&&o<s.slides.length&&s.slide(o),!1):void 0},r=function(s){switch(s.which){case e.activationKey:p()}},p=function(e){a="boolean"==typeof e?e:!a,s.parent.classList.toggle("bespoke-simple-overview",a)},s.on("activate",o),s.on("destroy",i),s.on("simple-overview.enable",p.bind(null,!0)),s.on("simple-overview.disable",p.bind(null,!1)),s.on("simple-overview.toggle",p.bind(null)),s.on("prev",n.bind(null,-1)),s.on("next",n.bind(null,1))}}},{"insert-css":2}],2:[function(e,s,o){var t={};s.exports=function(e,s){if(!t[e]){t[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];s&&s.prepend?r.insertBefore(o,r.childNodes[0]):r.appendChild(o)}}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var modifyState = function(method, event) {
      var attr = event.slide.getAttribute('data-bespoke-state');

      if (attr) {
        attr.split(' ').forEach(function(state) {
          deck.parent.classList[method](state);
        });
      }
    };

    deck.on('activate', modifyState.bind(null, 'add'));
    deck.on('deactivate', modifyState.bind(null, 'remove'));
  };
};

},{}],11:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var axis = options == 'vertical' ? 'Y' : 'X',
      startPosition,
      delta;

    deck.parent.addEventListener('touchstart', function(e) {
      if (e.touches.length == 1) {
        startPosition = e.touches[0]['page' + axis];
        delta = 0;
      }
    });

    deck.parent.addEventListener('touchmove', function(e) {
      if (e.touches.length == 1) {
        e.preventDefault();
        delta = e.touches[0]['page' + axis] - startPosition;
      }
    });

    deck.parent.addEventListener('touchend', function() {
      if (Math.abs(delta) > 50) {
        deck[delta > 0 ? 'prev' : 'next']();
      }
    });
  };
};

},{}],12:[function(require,module,exports){
var from = function(opts, plugins) {
  var parent = (opts.parent || opts).nodeType === 1 ? (opts.parent || opts) : document.querySelector(opts.parent || opts),
    slides = [].filter.call(typeof opts.slides === 'string' ? parent.querySelectorAll(opts.slides) : (opts.slides || parent.children), function(el) { return el.nodeName !== 'SCRIPT'; }),
    activeSlide = slides[0],
    listeners = {},

    activate = function(index, customData) {
      if (!slides[index]) {
        return;
      }

      fire('deactivate', createEventData(activeSlide, customData));
      activeSlide = slides[index];
      fire('activate', createEventData(activeSlide, customData));
    },

    slide = function(index, customData) {
      if (arguments.length) {
        fire('slide', createEventData(slides[index], customData)) && activate(index, customData);
      } else {
        return slides.indexOf(activeSlide);
      }
    },

    step = function(offset, customData) {
      var slideIndex = slides.indexOf(activeSlide) + offset;

      fire(offset > 0 ? 'next' : 'prev', createEventData(activeSlide, customData)) && activate(slideIndex, customData);
    },

    on = function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
      return off.bind(null, eventName, callback);
    },

    off = function(eventName, callback) {
      listeners[eventName] = (listeners[eventName] || []).filter(function(listener) { return listener !== callback; });
    },

    fire = function(eventName, eventData) {
      return (listeners[eventName] || [])
        .reduce(function(notCancelled, callback) {
          return notCancelled && callback(eventData) !== false;
        }, true);
    },

    createEventData = function(el, eventData) {
      eventData = eventData || {};
      eventData.index = slides.indexOf(el);
      eventData.slide = el;
      return eventData;
    },

    deck = {
      on: on,
      off: off,
      fire: fire,
      slide: slide,
      next: step.bind(null, 1),
      prev: step.bind(null, -1),
      parent: parent,
      slides: slides
    };

  (plugins || []).forEach(function(plugin) {
    plugin(deck);
  });

  activate(0);

  return deck;
};

module.exports = {
  from: from
};

},{}],13:[function(require,module,exports){
var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9tYWluLmpzIiwiL2hvbWUvZmVnZW1vL1Byb2pldG9zL2Jlc3Bva2UtdGhlbWUtc2FuZHkvbGliL2Jlc3Bva2UtdGhlbWUtc2FuZHkuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1idWxsZXRzL2xpYi9iZXNwb2tlLWJ1bGxldHMuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1jbGFzc2VzL2xpYi9iZXNwb2tlLWNsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1oYXNoL2xpYi9iZXNwb2tlLWhhc2guanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1rZXlzL2xpYi9iZXNwb2tlLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1wcm9ncmVzcy9saWIvYmVzcG9rZS1wcm9ncmVzcy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXNjYWxlL2xpYi9iZXNwb2tlLXNjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3L2Rpc3QvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcubWluLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc3RhdGUvbGliL2Jlc3Bva2Utc3RhdGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS10b3VjaC9saWIvYmVzcG9rZS10b3VjaC5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlL2xpYi9iZXNwb2tlLmpzIiwibm9kZV9tb2R1bGVzL2luc2VydC1jc3MvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCdUI7QUFDdkIsSUFBSSxVQUFVLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLElBQUksWUFBWSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRXRDLE1BQU0sUUFBUSxHQUFHLGtCQUFrQjtFQUNqQyxVQUFVLE9BQU8sSUFBSSxFQUFFLGFBQWEsSUFBSSxFQUFFLENBQUM7RUFDM0MsSUFBSSxRQUFRLHk1ekNBQXFELENBQUM7RUFDbEUsSUFBSSxTQUFTLFFBQVEsOEtBQXFELENBQUMsQ0FBQzs7RUFFNUUsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLEVBQUU7SUFDekIsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztHQUNyQztFQUNELFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7O0VBRXBDLE9BQU8sZUFBZTtJQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUNqQixDQUFDO0NBQ0gsQ0FBQzs7OztBQ2pCRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL0NBO0FBQ0E7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJlc3Bva2UgPSByZXF1aXJlKCdiZXNwb2tlJyksXG4gIHNhbmR5ID0gcmVxdWlyZSgnLi4vLi4vbGliL2Jlc3Bva2UtdGhlbWUtc2FuZHkuanMnKSxcbiAga2V5cyA9IHJlcXVpcmUoJ2Jlc3Bva2Uta2V5cycpLFxuICB0b3VjaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtdG91Y2gnKSxcbiAgYnVsbGV0cyA9IHJlcXVpcmUoJ2Jlc3Bva2UtYnVsbGV0cycpLFxuICBzY2FsZSA9IHJlcXVpcmUoJ2Jlc3Bva2Utc2NhbGUnKSxcbiAgcHJvZ3Jlc3MgPSByZXF1aXJlKCdiZXNwb2tlLXByb2dyZXNzJyksXG4gIG92ZXJ2aWV3ID0gcmVxdWlyZSgnYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcnKSxcbiAgLy8gc2VhcmNoID0gcmVxdWlyZSgnYmVzcG9rZS1zZWFyY2gnKSxcbiAgaGFzaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtaGFzaCcpLFxuICBzdGF0ZSA9IHJlcXVpcmUoJ2Jlc3Bva2Utc3RhdGUnKTtcblxuYmVzcG9rZS5mcm9tKCdhcnRpY2xlJywgW1xuICBzYW5keSh7IGluc2VydEZvbnRzOiBmYWxzZSB9KSxcbiAga2V5cygpLFxuICB0b3VjaCgpLFxuICBzdGF0ZSgpLFxuICBzY2FsZSgndHJhbnNmb3JtJyksXG4gIHByb2dyZXNzKCksXG4gIGhhc2goKSxcbiAgb3ZlcnZpZXcoeyBpbnNlcnRTdHlsZXM6IGZhbHNlIH0pLFxuICBidWxsZXRzKCcuYnVsbGV0JyksXG4gIC8vIHNlYXJjaCgpLFxuICBkZWNrID0+IHtcbiAgICAvLyBtYWtlcyB0aGUgY29udGVudCB2aXNpYmxlIHRvIGF2b2lkIEZvVUNcbiAgICBkZWNrLnBhcmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9XG5dKTtcbiIsInZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgY2xhc3NlcyA9IHJlcXVpcmUoJ2Jlc3Bva2UtY2xhc3NlcycpO1xudmFyIGluc2VydENzcyA9IHJlcXVpcmUoJ2luc2VydC1jc3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHsgaW5zZXJ0Rm9udHM6IHRydWUgfTtcbiAgdmFyIHRoZW1lID0gZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvdG1wL3RoZW1lLmNzcycsICd1dGY4Jyk7XG4gIHZhciBmb250cyA9IChmb250cyA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3RtcC9mb250cy5jc3MnLCAndXRmOCcpKTtcblxuICBpZiAoISFvcHRpb25zLmluc2VydEZvbnRzKSB7XG4gICAgaW5zZXJ0Q3NzKGZvbnRzLCB7IHByZXBlbmQ6IHRydWUgfSk7XG4gIH1cbiAgaW5zZXJ0Q3NzKHRoZW1lLCB7IHByZXBlbmQ6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICBjbGFzc2VzKCkoZGVjayk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgICBhY3RpdmVCdWxsZXRJbmRleCxcblxuICAgICAgYnVsbGV0cyA9IGRlY2suc2xpZGVzLm1hcChmdW5jdGlvbihzbGlkZSkge1xuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogJ1tkYXRhLWJlc3Bva2UtYnVsbGV0XScpKSwgMCk7XG4gICAgICB9KSxcblxuICAgICAgbmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4ICsgMTtcblxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCgxKSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KGFjdGl2ZVNsaWRlSW5kZXgsIGFjdGl2ZUJ1bGxldEluZGV4ICsgMSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1bGxldHNbbmV4dFNsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQobmV4dFNsaWRlSW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBwcmV2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2U2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXggLSAxO1xuXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0KC0xKSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KGFjdGl2ZVNsaWRlSW5kZXgsIGFjdGl2ZUJ1bGxldEluZGV4IC0gMSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1bGxldHNbcHJldlNsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQocHJldlNsaWRlSW5kZXgsIGJ1bGxldHNbcHJldlNsaWRlSW5kZXhdLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBhY3RpdmF0ZUJ1bGxldCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGJ1bGxldEluZGV4KSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgICBhY3RpdmVCdWxsZXRJbmRleCA9IGJ1bGxldEluZGV4O1xuXG4gICAgICAgIGJ1bGxldHMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgcykge1xuICAgICAgICAgIHNsaWRlLmZvckVhY2goZnVuY3Rpb24oYnVsbGV0LCBiKSB7XG4gICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQnKTtcblxuICAgICAgICAgICAgaWYgKHMgPCBzbGlkZUluZGV4IHx8IHMgPT09IHNsaWRlSW5kZXggJiYgYiA8PSBidWxsZXRJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWluYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHMgPT09IHNsaWRlSW5kZXggJiYgYiA9PT0gYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gYnVsbGV0c1thY3RpdmVTbGlkZUluZGV4XVthY3RpdmVCdWxsZXRJbmRleCArIG9mZnNldF0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICBkZWNrLm9uKCduZXh0JywgbmV4dCk7XG4gICAgZGVjay5vbigncHJldicsIHByZXYpO1xuXG4gICAgZGVjay5vbignc2xpZGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBhY3RpdmF0ZUJ1bGxldChlLmluZGV4LCAwKTtcbiAgICB9KTtcblxuICAgIGFjdGl2YXRlQnVsbGV0KDAsIDApO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLScgKyBjbHMpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZVxuICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ2Jlc3Bva2UtJyArIGNscyArJyhcXFxcc3wkKScsICdnJyksICcgJylcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfSxcblxuICAgICAgZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBkZWNrLnNsaWRlc1tkZWNrLnNsaWRlKCldLFxuICAgICAgICAgIG9mZnNldCA9IGluZGV4IC0gZGVjay5zbGlkZSgpLFxuICAgICAgICAgIG9mZnNldENsYXNzID0gb2Zmc2V0ID4gMCA/ICdhZnRlcicgOiAnYmVmb3JlJztcblxuICAgICAgICBbJ2JlZm9yZSgtXFxcXGQrKT8nLCAnYWZ0ZXIoLVxcXFxkKyk/JywgJ2FjdGl2ZScsICdpbmFjdGl2ZSddLm1hcChyZW1vdmVDbGFzcy5iaW5kKG51bGwsIGVsKSk7XG5cbiAgICAgICAgaWYgKGVsICE9PSBhY3RpdmVTbGlkZSkge1xuICAgICAgICAgIFsnaW5hY3RpdmUnLCBvZmZzZXRDbGFzcywgb2Zmc2V0Q2xhc3MgKyAnLScgKyBNYXRoLmFicyhvZmZzZXQpXS5tYXAoYWRkQ2xhc3MuYmluZChudWxsLCBlbCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgYWRkQ2xhc3MoZGVjay5wYXJlbnQsICdwYXJlbnQnKTtcbiAgICBkZWNrLnNsaWRlcy5tYXAoZnVuY3Rpb24oZWwpIHsgYWRkQ2xhc3MoZWwsICdzbGlkZScpOyB9KTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgZGVjay5zbGlkZXMubWFwKGRlYWN0aXZhdGUpO1xuICAgICAgYWRkQ2xhc3MoZS5zbGlkZSwgJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQ2xhc3MoZS5zbGlkZSwgJ2luYWN0aXZlJyk7XG4gICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWN0aXZhdGVTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgaW5kZXhUb0FjdGl2YXRlID0gLTEgPCBpbmRleCAmJiBpbmRleCA8IGRlY2suc2xpZGVzLmxlbmd0aCA/IGluZGV4IDogMDtcbiAgICAgIGlmIChpbmRleFRvQWN0aXZhdGUgIT09IGRlY2suc2xpZGUoKSkge1xuICAgICAgICBkZWNrLnNsaWRlKGluZGV4VG9BY3RpdmF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwYXJzZUhhc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSksXG4gICAgICAgIHNsaWRlTnVtYmVyT3JOYW1lID0gcGFyc2VJbnQoaGFzaCwgMTApO1xuXG4gICAgICBpZiAoaGFzaCkge1xuICAgICAgICBpZiAoc2xpZGVOdW1iZXJPck5hbWUpIHtcbiAgICAgICAgICBhY3RpdmF0ZVNsaWRlKHNsaWRlTnVtYmVyT3JOYW1lIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVjay5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgaSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLWhhc2gnKSA9PT0gaGFzaCB8fCBzbGlkZS5pZCA9PT0gaGFzaCkge1xuICAgICAgICAgICAgICBhY3RpdmF0ZVNsaWRlKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwYXJzZUhhc2goKTtcblxuICAgICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBzbGlkZU5hbWUgPSBlLnNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLWhhc2gnKSB8fCBlLnNsaWRlLmlkO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHNsaWRlTmFtZSB8fCBlLmluZGV4ICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHBhcnNlSGFzaCk7XG4gICAgfSwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IG9wdGlvbnMgIT09ICd2ZXJ0aWNhbCc7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMzQgfHwgLy8gUEFHRSBET1dOXG4gICAgICAgIChlLndoaWNoID09IDMyICYmICFlLnNoaWZ0S2V5KSB8fCAvLyBTUEFDRSBXSVRIT1VUIFNISUZUXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOSkgfHwgLy8gUklHSFRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSA0MCkgLy8gRE9XTlxuICAgICAgKSB7IGRlY2submV4dCgpOyB9XG5cbiAgICAgIGlmIChlLndoaWNoID09IDMzIHx8IC8vIFBBR0UgVVBcbiAgICAgICAgKGUud2hpY2ggPT0gMzIgJiYgZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgKyBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzcpIHx8IC8vIExFRlRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOCkgLy8gVVBcbiAgICAgICkgeyBkZWNrLnByZXYoKTsgfVxuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRlY2spIHtcbiAgICB2YXIgcHJvZ3Jlc3NQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBwcm9wID0gb3B0aW9ucyA9PT0gJ3ZlcnRpY2FsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHByb2dyZXNzUGFyZW50LmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLXBhcmVudCc7XG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtcHJvZ3Jlc3MtYmFyJztcbiAgICBwcm9ncmVzc1BhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XG4gICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NQYXJlbnQpO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZVtwcm9wXSA9IChlLmluZGV4ICogMTAwIC8gKGRlY2suc2xpZGVzLmxlbmd0aCAtIDEpKSArICclJztcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgcGFyZW50ID0gZGVjay5wYXJlbnQsXG4gICAgICBjdXJyZW50U2xpZGUgPSBkZWNrLnNsaWRlc1tkZWNrLnNsaWRlKCldLFxuICAgICAgc2xpZGVIZWlnaHQgPSBjdXJyZW50U2xpZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgc2xpZGVXaWR0aCA9IGN1cnJlbnRTbGlkZS5vZmZzZXRXaWR0aCxcbiAgICAgIHVzZVpvb20gPSBvcHRpb25zID09PSAnem9vbScgfHwgKCd6b29tJyBpbiBwYXJlbnQuc3R5bGUgJiYgb3B0aW9ucyAhPT0gJ3RyYW5zZm9ybScpLFxuXG4gICAgICBpbm5lcldyYXAgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBpbm5lcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdiZXNwb2tlLXNjYWxlLXBhcmVudCc7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbm5lcldyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgICAgICByZXR1cm4gaW5uZXJXcmFwcGVyO1xuICAgICAgfSxcblxuICAgICAgZWxlbWVudCA9IHVzZVpvb20gPyBwYXJlbnQgOiBpbm5lcldyYXAocGFyZW50KSxcblxuICAgICAgdHJhbnNmb3JtUHJvcGVydHkgPSAoZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHByZWZpeGVzID0gJ01veiBXZWJraXQgTyBtcycuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHByZWZpeGVzLnJlZHVjZShmdW5jdGlvbihjdXJyZW50UHJvcGVydHksIHByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIHByb3BlcnR5IGluIHBhcmVudC5zdHlsZSA/IHByZWZpeCArIHByb3BlcnR5IDogY3VycmVudFByb3BlcnR5O1xuICAgICAgICAgIH0sIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSgnVHJhbnNmb3JtJykpLFxuXG4gICAgICBzY2FsZSA9IHVzZVpvb20gP1xuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuem9vbSA9IHJhdGlvO1xuICAgICAgICB9IDpcbiAgICAgICAgZnVuY3Rpb24ocmF0aW8sIGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICdzY2FsZSgnICsgcmF0aW8gKyAnKSc7XG4gICAgICAgIH0sXG5cbiAgICAgIHNjYWxlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB4U2NhbGUgPSBwYXJlbnQub2Zmc2V0V2lkdGggLyBzbGlkZVdpZHRoLFxuICAgICAgICAgIHlTY2FsZSA9IChwYXJlbnQub2Zmc2V0SGVpZ2h0IC8gc2xpZGVIZWlnaHQpIHx8IDA7XG5cbiAgICAgICAgc2NhbGUoTWF0aC5taW4oeFNjYWxlLCB5U2NhbGUpLCBlbGVtZW50KTtcbiAgICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2NhbGVBbGwpO1xuICAgIHNjYWxlQWxsKCk7XG4gIH07XG5cbn07XG4iLCIvKiEgYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgdjEuMC4wIMKpIDIwMTYgRmzDoXZpbyBDb3V0aW5obywgTUlUIExpY2Vuc2UgKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIHM7cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMscz1zLmJlc3Bva2V8fChzLmJlc3Bva2U9e30pLHM9cy5wbHVnaW5zfHwocy5wbHVnaW5zPXt9KSxzLnNpbXBsZU92ZXJ2aWV3PWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUocyxvLHQpe2Z1bmN0aW9uIHIobixwKXtpZighb1tuXSl7aWYoIXNbbl0pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXAmJmEpcmV0dXJuIGEobiwhMCk7aWYoaSlyZXR1cm4gaShuLCEwKTt2YXIgbD1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK24rXCInXCIpO3Rocm93IGwuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixsfXZhciBiPW9bbl09e2V4cG9ydHM6e319O3Nbbl1bMF0uY2FsbChiLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG89c1tuXVsxXVtlXTtyZXR1cm4gcihvP286ZSl9LGIsYi5leHBvcnRzLGUscyxvLHQpfXJldHVybiBvW25dLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbj0wO248dC5sZW5ndGg7bisrKXIodFtuXSk7cmV0dXJuIHJ9KHsxOltmdW5jdGlvbihlLHMsbyl7dmFyIHQ9ZShcImluc2VydC1jc3NcIikscj1mdW5jdGlvbihlLHMpe3JldHVybiBzPVwib2JqZWN0XCI9PXR5cGVvZiBzP3M6e30sT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihvKXtzW29dPXNbb118fGVbb119KSxzfSxpPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2UudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApOmV9O3MuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZT1yKHthY3RpdmF0aW9uS2V5OjI3LGluc2VydFN0eWxlczohMH0sZSksZS5hY3RpdmF0aW9uS2V5PWkoZS5hY3RpdmF0aW9uS2V5KSxmdW5jdGlvbihzKXt2YXIgbyxyLGksbixwLGE7bz1mdW5jdGlvbigpe3Mub24oXCJhY3RpdmF0ZVwiLG8pKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsciwhMSk7dmFyIGk9XCIuYmVzcG9rZS1wYXJlbnR7LXdlYmtpdC1wZXJzcGVjdGl2ZTo5MDBweDtwZXJzcGVjdGl2ZTo5MDBweH0uYmVzcG9rZS1wYXJlbnQgLmJlc3Bva2Utc2xpZGV7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwtMjAwMHB4KTtvdXRsaW5lOjRweCBzb2xpZCBzaWx2ZXI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4yKTtvcGFjaXR5OmluaXRpYWx9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWN0aXZlLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZTpob3ZlcntvdXRsaW5lLWNvbG9yOiM0NjgyYjR9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3Jle2Rpc3BsYXk6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjMwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjMwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVye2Rpc3BsYXk6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg2MzAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDYzMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0xLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMywuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci00LC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTUsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTEsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTMsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTQsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTV7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTF7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwNSUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjEwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjEwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0zey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMTUlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMTUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQyMCUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQyMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTI1JSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTI1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTF7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTA1JSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMTAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIxMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0zey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMxNSUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzE1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNDIwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MjAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MjUlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUyNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDstd2Via2l0LXRyYW5zZm9ybTppbml0aWFsO3RyYW5zZm9ybTppbml0aWFsfVwiO2UuaW5zZXJ0U3R5bGVzJiZ0KGkpLGE9cy5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXdcIiksYSYmU2ltcGxlT3ZlcnZpZXcoKX0saT1mdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHIsITEpfSxuPWZ1bmN0aW9uKGUpe3ZhciBvO3JldHVybiBhPyhvPXMuc2xpZGUoKStlLG8+PTAmJm88cy5zbGlkZXMubGVuZ3RoJiZzLnNsaWRlKG8pLCExKTp2b2lkIDB9LHI9ZnVuY3Rpb24ocyl7c3dpdGNoKHMud2hpY2gpe2Nhc2UgZS5hY3RpdmF0aW9uS2V5OnAoKX19LHA9ZnVuY3Rpb24oZSl7YT1cImJvb2xlYW5cIj09dHlwZW9mIGU/ZTohYSxzLnBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXdcIixhKX0scy5vbihcImFjdGl2YXRlXCIsbykscy5vbihcImRlc3Ryb3lcIixpKSxzLm9uKFwic2ltcGxlLW92ZXJ2aWV3LmVuYWJsZVwiLHAuYmluZChudWxsLCEwKSkscy5vbihcInNpbXBsZS1vdmVydmlldy5kaXNhYmxlXCIscC5iaW5kKG51bGwsITEpKSxzLm9uKFwic2ltcGxlLW92ZXJ2aWV3LnRvZ2dsZVwiLHAuYmluZChudWxsKSkscy5vbihcInByZXZcIixuLmJpbmQobnVsbCwtMSkpLHMub24oXCJuZXh0XCIsbi5iaW5kKG51bGwsMSkpfX19LHtcImluc2VydC1jc3NcIjoyfV0sMjpbZnVuY3Rpb24oZSxzLG8pe3ZhciB0PXt9O3MuZXhwb3J0cz1mdW5jdGlvbihlLHMpe2lmKCF0W2VdKXt0W2VdPSEwO3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtvLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHQvY3NzXCIpLFwidGV4dENvbnRlbnRcImluIG8/by50ZXh0Q29udGVudD1lOm8uc3R5bGVTaGVldC5jc3NUZXh0PWU7dmFyIHI9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO3MmJnMucHJlcGVuZD9yLmluc2VydEJlZm9yZShvLHIuY2hpbGROb2Rlc1swXSk6ci5hcHBlbmRDaGlsZChvKX19fSx7fV19LHt9LFsxXSkoMSl9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBtb2RpZnlTdGF0ZSA9IGZ1bmN0aW9uKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgIHZhciBhdHRyID0gZXZlbnQuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2Utc3RhdGUnKTtcblxuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgYXR0ci5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICBkZWNrLnBhcmVudC5jbGFzc0xpc3RbbWV0aG9kXShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIG1vZGlmeVN0YXRlLmJpbmQobnVsbCwgJ2FkZCcpKTtcbiAgICBkZWNrLm9uKCdkZWFjdGl2YXRlJywgbW9kaWZ5U3RhdGUuYmluZChudWxsLCAncmVtb3ZlJykpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBheGlzID0gb3B0aW9ucyA9PSAndmVydGljYWwnID8gJ1knIDogJ1gnLFxuICAgICAgc3RhcnRQb3NpdGlvbixcbiAgICAgIGRlbHRhO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGUudG91Y2hlc1swXVsncGFnZScgKyBheGlzXTtcbiAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRlbHRhID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdIC0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGEpID4gNTApIHtcbiAgICAgICAgZGVja1tkZWx0YSA+IDAgPyAncHJldicgOiAnbmV4dCddKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuIiwidmFyIGZyb20gPSBmdW5jdGlvbihvcHRzLCBwbHVnaW5zKSB7XG4gIHZhciBwYXJlbnQgPSAob3B0cy5wYXJlbnQgfHwgb3B0cykubm9kZVR5cGUgPT09IDEgPyAob3B0cy5wYXJlbnQgfHwgb3B0cykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMucGFyZW50IHx8IG9wdHMpLFxuICAgIHNsaWRlcyA9IFtdLmZpbHRlci5jYWxsKHR5cGVvZiBvcHRzLnNsaWRlcyA9PT0gJ3N0cmluZycgPyBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNsaWRlcykgOiAob3B0cy5zbGlkZXMgfHwgcGFyZW50LmNoaWxkcmVuKSwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsLm5vZGVOYW1lICE9PSAnU0NSSVBUJzsgfSksXG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbMF0sXG4gICAgbGlzdGVuZXJzID0ge30sXG5cbiAgICBhY3RpdmF0ZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoIXNsaWRlc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlKCdkZWFjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1tpbmRleF07XG4gICAgICBmaXJlKCdhY3RpdmF0ZScsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpO1xuICAgIH0sXG5cbiAgICBzbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBmaXJlKCdzbGlkZScsIGNyZWF0ZUV2ZW50RGF0YShzbGlkZXNbaW5kZXhdLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoaW5kZXgsIGN1c3RvbURhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RlcCA9IGZ1bmN0aW9uKG9mZnNldCwgY3VzdG9tRGF0YSkge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBzbGlkZXMuaW5kZXhPZihhY3RpdmVTbGlkZSkgKyBvZmZzZXQ7XG5cbiAgICAgIGZpcmUob2Zmc2V0ID4gMCA/ICduZXh0JyA6ICdwcmV2JywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoc2xpZGVJbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgfSxcblxuICAgIG9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IChsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gb2ZmLmJpbmQobnVsbCwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9mZiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdID0gKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyICE9PSBjYWxsYmFjazsgfSk7XG4gICAgfSxcblxuICAgIGZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihub3RDYW5jZWxsZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIG5vdENhbmNlbGxlZCAmJiBjYWxsYmFjayhldmVudERhdGEpICE9PSBmYWxzZTtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUV2ZW50RGF0YSA9IGZ1bmN0aW9uKGVsLCBldmVudERhdGEpIHtcbiAgICAgIGV2ZW50RGF0YSA9IGV2ZW50RGF0YSB8fCB7fTtcbiAgICAgIGV2ZW50RGF0YS5pbmRleCA9IHNsaWRlcy5pbmRleE9mKGVsKTtcbiAgICAgIGV2ZW50RGF0YS5zbGlkZSA9IGVsO1xuICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcbiAgICB9LFxuXG4gICAgZGVjayA9IHtcbiAgICAgIG9uOiBvbixcbiAgICAgIG9mZjogb2ZmLFxuICAgICAgZmlyZTogZmlyZSxcbiAgICAgIHNsaWRlOiBzbGlkZSxcbiAgICAgIG5leHQ6IHN0ZXAuYmluZChudWxsLCAxKSxcbiAgICAgIHByZXY6IHN0ZXAuYmluZChudWxsLCAtMSksXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfTtcblxuICAocGx1Z2lucyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICBwbHVnaW4oZGVjayk7XG4gIH0pO1xuXG4gIGFjdGl2YXRlKDApO1xuXG4gIHJldHVybiBkZWNrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZyb206IGZyb21cbn07XG4iLCJ2YXIgY29udGFpbmVycyA9IFtdOyAvLyB3aWxsIHN0b3JlIGNvbnRhaW5lciBIVE1MRWxlbWVudCByZWZlcmVuY2VzXG52YXIgc3R5bGVFbGVtZW50cyA9IFtdOyAvLyB3aWxsIHN0b3JlIHtwcmVwZW5kOiBIVE1MRWxlbWVudCwgYXBwZW5kOiBIVE1MRWxlbWVudH1cblxudmFyIHVzYWdlID0gJ2luc2VydC1jc3M6IFlvdSBuZWVkIHRvIHByb3ZpZGUgYSBDU1Mgc3RyaW5nLiBVc2FnZTogaW5zZXJ0Q3NzKGNzc1N0cmluZ1ssIG9wdGlvbnNdKS4nO1xuXG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVzYWdlKTtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb24gPSBvcHRpb25zLnByZXBlbmQgPT09IHRydWUgPyAncHJlcGVuZCcgOiAnYXBwZW5kJztcbiAgICB2YXIgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIHZhciBjb250YWluZXJJZCA9IGNvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpO1xuXG4gICAgLy8gZmlyc3QgdGltZSB3ZSBzZWUgdGhpcyBjb250YWluZXIsIGNyZWF0ZSB0aGUgbmVjZXNzYXJ5IGVudHJpZXNcbiAgICBpZiAoY29udGFpbmVySWQgPT09IC0xKSB7XG4gICAgICAgIGNvbnRhaW5lcklkID0gY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcikgLSAxO1xuICAgICAgICBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXSA9IHt9O1xuICAgIH1cblxuICAgIC8vIHRyeSB0byBnZXQgdGhlIGNvcnJlcG9uZGluZyBjb250YWluZXIgKyBwb3NpdGlvbiBzdHlsZUVsZW1lbnQsIGNyZWF0ZSBpdCBvdGhlcndpc2VcbiAgICB2YXIgc3R5bGVFbGVtZW50O1xuXG4gICAgaWYgKHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdICE9PSB1bmRlZmluZWQgJiYgc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF1bcG9zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF1bcG9zaXRpb25dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdW3Bvc2l0aW9uXSA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3ByZXBlbmQnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdHJpcCBwb3RlbnRpYWwgVVRGLTggQk9NIGlmIGNzcyB3YXMgcmVhZCBmcm9tIGEgZmlsZVxuICAgIGlmIChjc3MuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7IGNzcyA9IGNzcy5zdWJzdHIoMSwgY3NzLmxlbmd0aCk7IH1cblxuICAgIC8vIGFjdHVhbGx5IGFkZCB0aGUgc3R5bGVzaGVldFxuICAgIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCArPSBjc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcbiAgICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRDc3M7XG5tb2R1bGUuZXhwb3J0cy5pbnNlcnRDc3MgPSBpbnNlcnRDc3M7XG4iXX0=
