!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON"),a=document.querySelector(".form"),u={};function l(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.5?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.addEventListener("change",(function(e){u[e.target.name]=Number(e.target.value)})),a.addEventListener("submit",(function(n){n.preventDefault();var t=u.delay,o=u.step,r=u.amount;if(t<0||o<0||r<0)return e(i).Report.failure("failed","Typed number must be greater than 0","try again"),void console.log("");for(var a=1;a<=r;a+=1)l(a,t+o*a).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.960233fd.js.map
