// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"77vMv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "21185a5c420d873a";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2NLUf":[function(require,module,exports) {
var _router = require("./router");
var _button = require("./components/button");
var _text = require("./components/text");
var _piedra = require("./components/piedra");
var _papel = require("./components/papel");
var _tijera = require("./components/tijera");
var _countDown = require("./components/count-down");
var _state = require("./state");
(function() {
    _button.initButton();
    _text.initCustomText();
    _piedra.initPiedra();
    _papel.initPapel();
    _tijera.initTijera();
    _countDown.initContadorComp();
    const root = document.querySelector(".root");
    _router.initRouter(root);
})();

},{"./router":"b2iia","./components/button":"3uBrB","./components/text":"8YEyP","./components/piedra":"2SW73","./components/papel":"ewwSI","./components/tijera":"5n8c0","./components/count-down":"aLvvz","./state":"28XHA"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _1Welcome = require("./pages/1-welcome");
var _2Instructions = require("./pages/2-instructions");
var _3Game = require("./pages/3-game");
var _4Result = require("./pages/4-result");
const routes = [
    {
        path: /\/welcome/,
        component: _1Welcome.initWelcomePage
    },
    {
        path: /\/instructions/,
        component: _2Instructions.initInstructionsPage
    },
    {
        path: /\/game/,
        component: _3Game.initGame
    },
    {
        path: /\/result/,
        component: _4Result.initResult
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("el handle recibio una nueva ruta", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/1-welcome":"1aoDa","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/2-instructions":"8jRO1","./pages/3-game":"cLCHE","./pages/4-result":"2U70V"}],"1aoDa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
const imgFondo = require("url:../../../src/img/fondo.png");
function initWelcomePage(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n    <section class="section">\n      <div class="container-title">\n        <custom-text variant="title">Piedra, Papel o Tijera</custom-text>\n      </div>\n      <div class="container-button">\n          <button-comp class="button">Comenzar</button-comp>\n      </div>\n\n      <div class="container-ppt">\n          <custom-piedra variant="small" class="elementos"></custom-piedra>\n          <custom-papel variant="small" class="elementos"></custom-papel>\n          <custom-tijera variant="small" class="elementos"></custom-tijera>\n\n      </div>\n\n    </section>\n  \n  `;
    const style = document.createElement("style");
    style.innerHTML = `\n    *{\n      box-sizing:border-box;\n    }\n    body{\n      margin:0;\n    }\n    .section{\n      background-image:url(${imgFondo});\n      display:flex;\n      width:100%;\n      height:100vh;\n      flex-direction:column;\n      justify-content:space-between;\n      align-items:center;\n      padding-top:100px;\n      padding-left: 20px;\n      padding-right:20px;\n    }\n    .container-ppt{\n      display:flex;\n      gap:40px;\n      flex-direction:row;\n      justify-content:space-evenly;\n      overflow:hidden;\n      \n  \n    }\n    .elementos {\n      padding: 10px;\n      position: relative;\n      top:25px;\n      width: fit-content;\n    }\n    @media (min-width:512px){\n      .elementos{\n        top:71px;\n      }\n    }\n    .container-title{\n        margin-top:50px;\n    }\n    .container-button{\n      text-align:center;\n      width:100%;\n      margin-top:50px;\n    }\n  `;
    div.appendChild(style);
    div.querySelector(".button").addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"url:../../../src/img/fondo.png":"84eiK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"84eiK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QacH') + "fondo.4c81efc4.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8jRO1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructionsPage", ()=>initInstructionsPage
);
const imgFondo = require("url:../../../src/img/fondo.png");
function initInstructionsPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n    <section class="instructions__section">\n      <div class="instructions__container-title">\n        <custom-text variant="subtitle">Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n      </div>\n      <div class="instructions__container-button">\n          <button-comp class="instructions__button">Jugar</button-comp>\n      </div>\n\n      <div class="instructions__container-ppt">\n          <custom-piedra variant="small" class="instructions__elementos"></custom-piedra>\n          <custom-papel variant="small" class="instructions__elementos"></custom-papel>\n          <custom-tijera variant="small" class="instructions__elementos"></custom-tijera>\n\n      </div>\n\n    </section>\n  \n  `;
    const style = document.createElement("style");
    style.innerHTML = `\n    *{\n      box-sizing:border-box;\n    }\n    body{\n      margin:0;\n    }\n    .instructions__section{\n      background-image:url(${imgFondo});\n      display:flex;\n      width:100%;\n      height:100vh;\n      flex-direction:column;\n      justify-content:space-between;\n      align-items:center;\n      padding-top:100px;\n      padding-left: 20px;\n      padding-right:20px;\n    }\n    .instructions__container-ppt{\n      display:flex;\n      gap:40px;\n      flex-direction:row;\n      justify-content:space-evenly;\n      overflow:hidden;\n      \n  \n    }\n    .instructions__elementos {\n      padding: 10px;\n      position: relative;\n      top:20px;\n      width: fit-content;\n    }\n    @media (min-width: 556px){\n        .instructions__elementos {\n            top:64px;\n          }\n    }\n    .instructions__container-title{\n        padding:20px;\n        max-width:650px;\n        margin-top:50px;\n    }\n    .instructions__container-button{\n      text-align:center;\n      width:100%;\n      margin-top:50px;\n    }\n  `;
    div.appendChild(style);
    div.querySelector(".instructions__button").addEventListener("click", ()=>{
        params.goTo("/game");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../../src/img/fondo.png":"84eiK"}],"cLCHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame
);
var _state = require("../../state");
const fondo = require("url:../../../src/img/fondo.png");
function initGame(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n    <section class="game__section">\n        <div class="game__container-contador">\n            <contador-comp class="contador"></contador-comp>\n        </div>\n        <div class="game__container-ppt">\n            <custom-piedra tipo="piedra"variant="small" id="pointer" class="elementos"></custom-piedra>\n            <custom-papel tipo="papel" variant="small" id="pointer" class="elementos"></custom-papel>\n            <custom-tijera tipo="tijera" variant="small" id="pointer" class="elementos"></custom-tijera>\n        </div>\n    </section>\n  \n  `;
    const style = document.createElement("style");
    style.innerHTML = `\n    *{\n      box-sizing:border-box;\n    }\n    body{\n      margin:0;\n    }\n    .game__section{\n      background-image:url(${fondo});\n      display:flex;\n      width:100%;\n      height:100vh;\n      flex-direction:column;\n      justify-content:space-between;\n      align-items:center;\n      padding-top:100px;\n      padding-left: 20px;\n      padding-right:20px;\n    }\n    .game__container-contador{\n      \n    }\n    .game__container-ppt{\n      display:flex;\n      gap:40px;\n      flex-direction:row;\n      overflow:hidden;\n\n    }\n    .elementos{\n      position:relative;\n      top:60px;\n      cursor:pointer;\n      padding:10px;\n    }\n\n  `;
    // console.log(state.setMove("piedra"));
    console.log(_state.state.getState());
    const handComponents = div.querySelectorAll(".elementos");
    let contador = div.querySelector(".contador");
    let boolean = false;
    // handComponents.forEach((hand) => {
    //   hand.addEventListener("click", (e: any) => {
    //     boolean = true;
    //     const evento = new CustomEvent("change", {
    //       detail: {
    //         myPlay: e.detail.myPlay,
    //       },
    //     });
    //     state.setMove(e.detail.myPlay);
    //     params.goTo("/result");
    //   });
    // });
    handComponents.forEach((hand)=>{
        hand.addEventListener("click", ()=>{
            boolean = true;
            const type = hand.getAttribute("tipo");
            if (type == "piedra") _state.state.setMove("piedra");
            if (type == "papel") _state.state.setMove("papel");
            if (type == "tijera") _state.state.setMove("tijera");
            params.goTo("/result");
        });
    });
    contador.addEventListener("change", (e)=>{
        // console.log("entro al if", e);
        handComponents.forEach((hand)=>{
            const type = hand.getAttribute("tipo");
            if (boolean == false) params.goTo("/instructions");
        });
    });
    const currentState = _state.state.getState();
    const computerPlay = currentState.currentGame.computerPlay;
    const myPlay = currentState.currentGame.myPlay;
    const winner = _state.state.whoWins(myPlay, computerPlay);
    console.log(winner);
    div.appendChild(style);
    return div;
}

},{"url:../../../src/img/fondo.png":"84eiK","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: [],
        listeners: []
    },
    init () {
        const localData = localStorage.getItem("saved-state");
        if (JSON.parse(localData) != null) this.data.history = JSON.parse(localData);
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        let random = Math.floor(Math.random() * 3);
        console.log(random, "random");
        if (random == 0) currentState.currentGame.computerPlay = "piedra";
        if (random == 1) currentState.currentGame.computerPlay = "papel";
        if (random == 2) currentState.currentGame.computerPlay = "tijera";
        console.log(currentState.currentGame.myPlay);
        this.pushToHistory(currentState.currentGame.myPlay, currentState.currentGame.computerPlay);
    // currentState.currentGame.myPlay;
    },
    getScore () {
        let myScore = 0;
        let computerScore = 0;
        let historyy = this.data.history;
        for (const s of historyy){
            if (this.whoWins(s.myPlay, s.computerPlay) == "ganaste") myScore++;
            if (this.whoWins(s.myPlay, s.computerPlay) == "perdiste") computerScore++;
        }
        return {
            myScore,
            computerScore
        };
    },
    whoWins (myPlay, computerPlay) {
        if (myPlay == "piedra") {
            if (computerPlay == "papel") return "perdiste";
            if (computerPlay == "tijera") return "ganaste";
            if (computerPlay == "piedra") return "empataste";
        }
        if (myPlay == "papel") {
            if (computerPlay == "tijera") return "perdiste";
            if (computerPlay == "piedra") return "ganaste";
            if (computerPlay == "papel") return "empataste";
        }
        if (myPlay == "tijera") {
            if (computerPlay == "piedra") return "perdiste";
            if (computerPlay == "papel") return "ganaste";
            if (computerPlay == "tijera") return "empataste";
        }
    },
    pushToHistory (myPlay, computerPlay) {
        const currentState = this.getState();
        currentState.history.push({
            myPlay,
            computerPlay
        });
        localStorage.setItem("saved-state", JSON.stringify(currentState.history));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2U70V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult
) //hasta ahora tengo todo la logica lista, pero cuando llego a result, despues del primer resultado, me aparece uno solo de las dos imagenes, no se por que
;
var _state = require("../../state");
const fondo = require("url:../../../src/img/fondo.png");
const imgWin = require("url:../../../src");
function initResult(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    const lastState = _state.state.getState();
    const myState = lastState.currentGame.myPlay;
    const computerState = lastState.currentGame.computerPlay;
    const myPlay = document.createElement("div");
    const computerPlay = document.createElement("div");
    if (myState == "piedra") myPlay.innerHTML = `\n         <custom-piedra variant= "big" class= "my-play"></custom-piedra>\n         `;
    if (myState == "papel") myPlay.innerHTML = `\n         <custom-papel variant="big" class= "my-play"></custom-papel>\n         `;
    if (myState == "tijeras") myPlay.innerHTML = `\n        <custom-tijera variant="big" class="my-play"></custom-tijera>\n        `;
    if (computerState == "piedra") computerPlay.innerHTML = `\n        <custom-piedra variant= "big" class= "computer-play"></custom-piedra>\n        `;
    if (computerState == "papel") computerPlay.innerHTML = `\n        <custom-papel variant= "big" class= "computer-play"></custom-papel>\n        `;
    if (computerState == "tijeras") computerPlay.innerHTML = `\n        <custom-tijera variant= "big" class= "computer-play"></custom-tijera>\n  `;
    div.innerHTML = `\n    <section class="result__section">\n    <div class="computer-play"></div>\n    <div class="my-play"></div>\n    </section>\n  \n  `;
    style.innerHTML = `\n    .result__section{\n      background-image:url(${fondo});\n      display:flex;\n      height:100vh;\n      flex-direction:column;\n    }\n  \n  \n  `;
    div.querySelector(".computer-play").appendChild(computerPlay);
    div.querySelector(".my-play").appendChild(myPlay);
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA","url:../../../src/img/fondo.png":"84eiK","url:../../../src":"eGYtm"}],"eGYtm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QacH') + "8-desafio-del-modulo.420d873a.js";

},{"./helpers/bundle-url":"8YnfL"}],"3uBrB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButton", ()=>initButton
);
function initButton() {
    class Button extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.className = "root";
            style.innerHTML = `\n        .root{\n            min-width:300px;\n            max-width: 332px;\n            height:87px;\n            color: #fff;\n            max-width: 500px;\n            height: 87px;\n            background-color: #006CFC;\n            border:solid 10px #001997;\n            border-radius:10px;\n            font-size: 45px;\n            font-family: var(--font-button);\n            text-align:center;\n        }\n      \n      `;
            button.textContent = this.textContent;
            shadow.appendChild(button);
            shadow.appendChild(style);
        }
    }
    customElements.define("button-comp", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8YEyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCustomText", ()=>initCustomText
);
function initCustomText() {
    class TextComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `\n        .title{\n            color: rgba(0, 144, 72, 1);\n            padding: 0px;\n            text-align: center;\n            font-family: var(--font-button);\n            font-size: 75px;\n            font-weight: normal;\n            font-weight: bold;\n            margin: 0;\n        }\n        .subtitle{\n          color: black;\n          text-align: center;\n          font-family: var(--font-button);\n          font-size: 40px;\n          font-weight: normal;\n        }\n        .body{\n            font-size:40px;\n        }\n      `;
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", TextComponent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2SW73":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPiedra", ()=>initPiedra
);
const piedra = require("url:../../../src/img/piedra.png");
function initPiedra() {
    class PiedraComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "small";
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n        <img variant="big" class="piedra" src="${piedra}">\n      `;
            style.innerHTML = `\n            .big{\n                width: 157px;\n                height:300px;\n            }\n            .small{\n                width:110px;\n                height:230px;\n            }\n            .piedra{\n                width: 100%;\n            }\n        `;
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-piedra", PiedraComponent);
}

},{"url:../../../src/img/piedra.png":"iAdno","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iAdno":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QacH') + "piedra.82766faa.png";

},{"./helpers/bundle-url":"8YnfL"}],"ewwSI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPapel", ()=>initPapel
);
const papel = require("url:../../../src/img/papel.png");
function initPapel() {
    class PapelComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "small";
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n        <img variant="big" class="papel" src="${papel}">\n      `;
            style.innerHTML = `\n            .big{\n                width: 157px;\n                height:300px;\n            }\n            .small{\n                width:110px;\n                height:230px;\n            }\n            .papel{\n                width: 100%;\n            }\n        `;
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-papel", PapelComponent);
}

},{"url:../../../src/img/papel.png":"frm0L","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"frm0L":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QacH') + "papel.bf73f8ac.png";

},{"./helpers/bundle-url":"8YnfL"}],"5n8c0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTijera", ()=>initTijera
);
const tijera = require("url:../../../src/img/tijera.png");
function initTijera() {
    class TijeraComponent extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "small";
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            div.innerHTML = `\n        <img variant="big" class="tijera" src="${tijera}">\n      `;
            style.innerHTML = `\n            .big{\n                width: 157px;\n                height:300px;\n            }\n            .small{\n                width:110px;\n                height:230px;\n            }\n            .tijera{\n                width: 100%;\n                object-fit: contain;\n            }\n        `;
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-tijera", TijeraComponent);
}

},{"url:../../../src/img/tijera.png":"bCcl2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bCcl2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QacH') + "tijera.dd5cc795.png";

},{"./helpers/bundle-url":"8YnfL"}],"aLvvz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initContadorComp", ()=>initContadorComp
);
function initContadorComp() {
    class ContadorComp extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let counter = 3;
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `\n        .counter{\n            color: black;\n            min-width:60px;\n            min-height:80px;\n            display:flex;\n            align-items:center;\n            justify-content:center;\n            font-size:100px;\n        }\n      \n      \n      `;
            const intervalo = setInterval(()=>{
                div.innerHTML = `\n            <div class="counter">${counter}</div>\n          `;
                if (counter <= 0) {
                    clearInterval(intervalo);
                    const contador = new CustomEvent("change", {
                        detail: {
                            numero: counter
                        }
                    });
                    this.dispatchEvent(contador);
                }
                counter--;
            }, 1000);
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("contador-comp", ContadorComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["77vMv","2NLUf"], "2NLUf", "parcelRequire7f7f")

//# sourceMappingURL=8-desafio-del-modulo.420d873a.js.map
