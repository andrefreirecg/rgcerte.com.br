// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nOP5":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d7816104991d218c";
module.bundle.HMR_BUNDLE_ID = "40cf3b303b20f003";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9ALdu":[function(require,module,exports) {
var _index = require("./theme/scripts/index");
var _indexScss = require("./theme/styles/index.scss");

},{"./theme/scripts/index":"sXquk","./theme/styles/index.scss":"9qjgi"}],"sXquk":[function(require,module,exports) {
var _reactAliceCarousel = require("react-alice-carousel");
console.log("aqui");

},{"react-alice-carousel":"inYOM"}],"inYOM":[function(require,module,exports) {
"use strict";
var __extends = function() {
    var n = function(t, e) {
        return (n = Object.setPrototypeOf || (({
            __proto__: []
        }) instanceof Array ? function(t, e) {
            t.__proto__ = e;
        } : function(t, e) {
            for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        }))(t, e);
    };
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function i() {
            this.constructor = t;
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
    };
}(), __assign = function() {
    return (__assign = Object.assign || function(t) {
        for(var e, i = 1, n = arguments.length; i < n; i++)for(var o in e = arguments[i])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
    }).apply(this, arguments);
}, __createBinding = Object.create ? function(t, e, i, n) {
    void 0 === n && (n = i);
    var o = Object.getOwnPropertyDescriptor(e, i);
    o && ("get" in o ? e.__esModule : !o.writable && !o.configurable) || (o = {
        enumerable: !0,
        get: function() {
            return e[i];
        }
    }), Object.defineProperty(t, n, o);
} : function(t, e, i, n) {
    t[n = void 0 === n ? i : n] = e[i];
}, __setModuleDefault = Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
}, __importStar = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for(var i in t)"default" !== i && Object.prototype.hasOwnProperty.call(t, i) && __createBinding(e, t, i);
    return __setModuleDefault(e, t), e;
}, __exportStar = function(t, e) {
    for(var i in t)"default" === i || Object.prototype.hasOwnProperty.call(e, i) || __createBinding(e, t, i);
}, __awaiter = function(t, a, r, l) {
    return new (r = r || Promise)(function(i, e) {
        function n(t) {
            try {
                s(l.next(t));
            } catch (t) {
                e(t);
            }
        }
        function o(t) {
            try {
                s(l.throw(t));
            } catch (t) {
                e(t);
            }
        }
        function s(t) {
            var e;
            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                t(e);
            })).then(n, o);
        }
        s((l = l.apply(t, a || [])).next());
    });
}, __generator = function(n, o) {
    var s, a, r, l = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    }, t = {
        next: e(0),
        throw: e(1),
        return: e(2)
    };
    return "function" == typeof Symbol && (t[Symbol.iterator] = function() {
        return this;
    }), t;
    function e(i) {
        return function(t) {
            var e = [
                i,
                t
            ];
            if (s) throw new TypeError("Generator is already executing.");
            for(; l;)try {
                if (s = 1, a && (r = 2 & e[0] ? a.return : e[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, e[1])).done) return r;
                switch(a = 0, (e = r ? [
                    2 & e[0],
                    r.value
                ] : e)[0]){
                    case 0:
                    case 1:
                        r = e;
                        break;
                    case 4:
                        return l.label++, {
                            value: e[1],
                            done: !1
                        };
                    case 5:
                        l.label++, a = e[1], e = [
                            0
                        ];
                        continue;
                    case 7:
                        e = l.ops.pop(), l.trys.pop();
                        continue;
                    default:
                        if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (6 === e[0] || 2 === e[0])) {
                            l = 0;
                            continue;
                        }
                        if (3 === e[0] && (!r || e[1] > r[0] && e[1] < r[3])) l.label = e[1];
                        else if (6 === e[0] && l.label < r[1]) l.label = r[1], r = e;
                        else {
                            if (!(r && l.label < r[2])) {
                                r[2] && l.ops.pop(), l.trys.pop();
                                continue;
                            }
                            l.label = r[2], l.ops.push(e);
                        }
                }
                e = o.call(n, l);
            } catch (t) {
                e = [
                    6,
                    t
                ], a = 0;
            } finally{
                s = r = 0;
            }
            if (5 & e[0]) throw e[1];
            return {
                value: e[0] ? e[1] : void 0,
                done: !0
            };
        };
    }
}, __importDefault = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}, react_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), __importDefault(require("d4541c4857da09a9"))), vanilla_swipe_1 = __importDefault(require("cd82896031bea160")), defaultProps_1 = require("d0d2c900c1f15746"), Views = __importStar(require("b538378db94900a7")), Utils = __importStar(require("fbbc12ed9ea6538f")), types_1 = require("170633ecc25d3199"), AliceCarousel = (__exportStar(require("170633ecc25d3199"), exports), function(e) {
    function t(t) {
        var s = e.call(this, t) || this;
        return s.swipeListener = null, s._handleKeyboardEvents = function(t) {
            switch(t.code){
                case "Space":
                    return s.props.autoPlay && s._handlePlayPauseToggle();
                case "ArrowLeft":
                    return s.slidePrev(t);
                case "ArrowRight":
                    return s.slideNext(t);
            }
        }, s._handleBeforeSlideEnd = function(o) {
            return __awaiter(s, void 0, void 0, function() {
                var e, i, n;
                return __generator(this, function(t) {
                    switch(t.label){
                        case 0:
                            return (i = this.state, n = i.activeIndex, e = i.itemsCount, i = i.fadeoutAnimationProcessing, Utils.shouldRecalculateSlideIndex(n, e)) ? (n = Utils.getUpdateSlidePositionIndex(n, e), [
                                4,
                                this._handleUpdateSlidePosition(n)
                            ]) : [
                                3,
                                2
                            ];
                        case 1:
                            return t.sent(), [
                                3,
                                4
                            ];
                        case 2:
                            return i ? [
                                4,
                                this.setState({
                                    fadeoutAnimationIndex: null,
                                    fadeoutAnimationPosition: null,
                                    fadeoutAnimationProcessing: !1
                                })
                            ] : [
                                3,
                                4
                            ];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return this._handleSlideChanged(o), [
                                2
                            ];
                    }
                });
            });
        }, s._handleMouseEnter = function() {
            var t = s.props.autoPlayStrategy;
            Utils.shouldCancelAutoPlayOnHover(t) && s.state.isAutoPlaying && (s.isHovered = !0, s._handlePause());
        }, s._handleMouseLeave = function() {
            s.state.isAutoPlaying && (s.isHovered = !1, s._handlePlay());
        }, s._handlePause = function() {
            s._clearAutoPlayTimeout();
        }, s._handlePlayPauseToggle = function() {
            return __awaiter(s, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                    switch(t.label){
                        case 0:
                            return e = this.state.isAutoPlaying, this.hasUserAction = !0, [
                                4,
                                this.setState({
                                    isAutoPlaying: !e,
                                    isAutoPlayCanceledOnAction: !0
                                })
                            ];
                        case 1:
                            return t.sent(), e ? this._handlePause() : this._handlePlay(), [
                                2
                            ];
                    }
                });
            });
        }, s._setRootComponentRef = function(t) {
            return s.rootElement = t;
        }, s._setStageComponentRef = function(t) {
            return s.stageComponent = t;
        }, s._renderStageItem = function(t, e) {
            var i = Utils.getRenderStageItemStyles(e, s.state), n = Utils.getRenderStageItemClasses(e, s.state);
            return react_1.default.createElement(Views.StageItem, {
                styles: i,
                className: n,
                key: "stage-item-".concat(e),
                item: t
            });
        }, s._renderSlideInfo = function() {
            var t = s.props.renderSlideInfo, e = s.state, i = e.activeIndex, e = e.itemsCount;
            return react_1.default.createElement(Views.SlideInfo, {
                itemsCount: e,
                activeIndex: i,
                renderSlideInfo: t
            });
        }, s.state = Utils.calculateInitialState(t, null), s.isHovered = !1, s.isAnimationDisabled = !1, s.isTouchMoveProcessStarted = !1, s.cancelTouchAnimations = !1, s.hasUserAction = !1, s.rootElement = null, s.rootComponentDimensions = {}, s.stageComponent = null, s.startTouchmovePosition = void 0, s.slideTo = s.slideTo.bind(s), s.slidePrev = s.slidePrev.bind(s), s.slideNext = s.slideNext.bind(s), s._handleTouchmove = s._handleTouchmove.bind(s), s._handleTouchend = s._handleTouchend.bind(s), s._handleDotClick = s._handleDotClick.bind(s), s._handleResize = s._handleResize.bind(s), t = Utils.debounce(s._handleResize, 100), s._handleResizeDebounced = t[0], s._cancelResizeDebounced = t[1], s;
    }
    return __extends(t, e), t.prototype.componentDidMount = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch(t.label){
                    case 0:
                        return [
                            4,
                            this._setInitialState()
                        ];
                    case 1:
                        return t.sent(), this._addEventListeners(), this._setupSwipeHandlers(), this.props.autoPlay && this._handlePlay(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype.componentDidUpdate = function(t) {
        var e = this.props, i = e.activeIndex, n = e.animationDuration, o = e.autoWidth, s = e.children, a = e.infinite, r = e.items, l = e.paddingLeft, u = e.paddingRight, d = e.responsive, c = e.swipeExtraPadding, h = e.mouseTracking, p = e.swipeDelta, _ = e.touchTracking, e = e.touchMoveDefaultEvents;
        s && t.children !== s || t.autoWidth !== o || t.infinite !== a || t.items !== r || t.paddingLeft !== l || t.paddingRight !== u || t.responsive !== d || t.swipeExtraPadding !== c ? this._updateComponent() : (t.animationDuration !== n && this.setState({
            animationDuration: n
        }), t.activeIndex !== i && this.slideTo(i, types_1.EventType.UPDATE)), t.swipeDelta === p && t.mouseTracking === h && t.touchTracking === _ && t.touchMoveDefaultEvents === e || this._updateSwipeProps(), this.props.keyboardNavigation !== t.keyboardNavigation && this._updateEventListeners();
    }, t.prototype.componentWillUnmount = function() {
        this._cancelResizeDebounced(), this._cancelTimeoutAnimations(), this._removeEventListeners();
    }, Object.defineProperty(t.prototype, "eventObject", {
        get: function() {
            var t = this.state, e = t.itemsInSlide, t = t.activeIndex, i = Utils.getSlideItemInfo(this.state), n = i.isNextSlideDisabled, i = i.isPrevSlideDisabled;
            return {
                item: t,
                slide: Utils.getActiveSlideIndex(n, this.state),
                itemsInSlide: e,
                isNextSlideDisabled: n,
                isPrevSlideDisabled: i,
                type: types_1.EventType.ACTION
            };
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isFadeoutAnimationAllowed", {
        get: function() {
            var t = this.state.itemsInSlide, e = this.props, i = e.animationType, n = e.paddingLeft, o = e.paddingRight, e = e.autoWidth;
            return 1 === t && i === types_1.AnimationType.FADEOUT && !(n || o || e);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "touchmovePosition", {
        get: function() {
            return void 0 !== this.startTouchmovePosition ? this.startTouchmovePosition : this.state.translate3d;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.slideTo = function(t, e) {
        var i, n, o;
        void 0 === t && (t = 0), this._handlePause(), this.isFadeoutAnimationAllowed ? (i = Utils.getUpdateSlidePositionIndex(t, this.state.itemsCount), n = Utils.getFadeoutAnimationPosition(i, this.state), o = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
            activeIndex: i,
            fadeoutAnimationIndex: o,
            fadeoutAnimationPosition: n,
            eventType: e
        })) : this._handleSlideTo({
            activeIndex: t,
            eventType: e
        });
    }, t.prototype.slidePrev = function(t) {
        this._handlePause(), t && t.isTrusted && (this.hasUserAction = !0);
        var e, i, t = this.state.activeIndex - 1;
        this.isFadeoutAnimationAllowed ? (e = -this.state.stageWidth, i = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
            activeIndex: t,
            fadeoutAnimationIndex: i,
            fadeoutAnimationPosition: e
        })) : this._handleSlideTo({
            activeIndex: t
        });
    }, t.prototype.slideNext = function(t) {
        this._handlePause(), t && t.isTrusted && (this.hasUserAction = !0);
        var e, i, t = this.state.activeIndex + 1;
        this.isFadeoutAnimationAllowed ? (e = this.state.stageWidth, i = Utils.getFadeoutAnimationIndex(this.state), this._handleSlideTo({
            activeIndex: t,
            fadeoutAnimationIndex: i,
            fadeoutAnimationPosition: e
        })) : this._handleSlideTo({
            activeIndex: t
        });
    }, t.prototype._addEventListeners = function() {
        window.addEventListener("resize", this._handleResizeDebounced), this.props.keyboardNavigation && window.addEventListener("keyup", this._handleKeyboardEvents);
    }, t.prototype._removeEventListeners = function() {
        this.swipeListener && this.swipeListener.destroy(), window.removeEventListener("resize", this._handleResizeDebounced), window.removeEventListener("keyup", this._handleKeyboardEvents);
    }, t.prototype._updateEventListeners = function() {
        this.props.keyboardNavigation ? window.addEventListener("keyup", this._handleKeyboardEvents) : window.removeEventListener("keyup", this._handleKeyboardEvents);
    }, t.prototype._handleResize = function(o) {
        return __awaiter(this, void 0, void 0, function() {
            var e, i, n;
            return __generator(this, function(t) {
                switch(t.label){
                    case 0:
                        return (i = this.props.onResizeEvent, n = Utils.getElementDimensions(this.rootElement), (i || Utils.shouldHandleResizeEvent)(o, this.rootComponentDimensions, n)) ? (this._cancelTimeoutAnimations(), this.rootComponentDimensions = n, i = this.state, n = i.itemsCount, e = i.isAutoPlaying, i = Utils.getUpdateSlidePositionIndex(this.state.activeIndex, n), n = Utils.calculateInitialState(__assign(__assign({}, this.props), {
                            activeIndex: i
                        }), this.stageComponent), i = Utils.getTranslate3dProperty(n.activeIndex, n), n = __assign(__assign({}, n), {
                            translate3d: i,
                            isAutoPlaying: e
                        }), Utils.animate(this.stageComponent, {
                            position: -i
                        }), [
                            4,
                            this.setState(n)
                        ]) : [
                            3,
                            2
                        ];
                    case 1:
                        t.sent(), this._handleResized(), this.isAnimationDisabled = !1, e && this._handlePlay(), t.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        });
    }, t.prototype._handleTouchmove = function(t, e) {
        var i = e.absY, n = e.absX, o = e.deltaX, e = this.props.swipeDelta, s = this.state, a = s.swipeShiftValue, r = s.swipeLimitMin, l = s.swipeLimitMax, u = s.infinite, s = s.fadeoutAnimationProcessing;
        if (this.hasUserAction = !0, !(s || !this.isTouchMoveProcessStarted && Utils.isVerticalTouchmoveDetected(n, i, e))) {
            this.isTouchMoveProcessStarted || (this._cancelTimeoutAnimations(), this._setTouchmovePosition(), this.isAnimationDisabled = !0, this.isTouchMoveProcessStarted = !0, this._handleSlideChange());
            var d = Utils.getTouchmoveTranslatePosition(o, this.touchmovePosition);
            if (!1 === u) return r < d || d < -l ? void 0 : void Utils.animate(this.stageComponent, {
                position: d
            });
            if (Utils.shouldRecalculateSwipePosition(d, r, l)) try {
                !function t() {
                    Utils.getIsLeftDirection(o) ? d += a : d += -a;
                    Utils.shouldRecalculateSwipePosition(d, r, l) && t();
                }();
            } catch (t) {
                Utils.debug(t);
            }
            Utils.animate(this.stageComponent, {
                position: d
            });
        }
    }, t.prototype._handleTouchend = function(t, e) {
        var i, n, o, e = e.deltaX;
        this._clearTouchmovePosition(), this.isTouchMoveProcessStarted && (this.isTouchMoveProcessStarted = !1, i = this.state.animationDuration, n = this.props.animationEasingFunction, o = Utils.getTranslateXProperty(this.stageComponent), e = Utils.getSwipeTouchendPosition(this.state, e, o), Utils.animate(this.stageComponent, {
            position: e,
            animationDuration: i,
            animationEasingFunction: n
        }), this._handleBeforeTouchEnd(e));
    }, t.prototype._handleBeforeTouchEnd = function(s) {
        var t = this, e = this.state.animationDuration;
        this.touchEndTimeoutId = window.setTimeout(function() {
            return __awaiter(t, void 0, void 0, function() {
                var e, i, n, o = this;
                return __generator(this, function(t) {
                    switch(t.label){
                        case 0:
                            return e = Utils.getSwipeTouchendIndex(s, this.state), i = Utils.getTranslate3dProperty(e, this.state), Utils.animate(this.stageComponent, {
                                position: -i
                            }), n = Utils.getTransitionProperty(), [
                                4,
                                this.setState({
                                    activeIndex: e,
                                    translate3d: i,
                                    transition: n
                                })
                            ];
                        case 1:
                            return t.sent(), requestAnimationFrame(function() {
                                return o._handleSlideChanged();
                            }), [
                                2
                            ];
                    }
                });
            });
        }, e);
    }, t.prototype._handleSlideTo = function(t) {
        var e = t.activeIndex, a = void 0 === e ? 0 : e, e = t.fadeoutAnimationIndex, r = void 0 === e ? null : e, e = t.fadeoutAnimationPosition, l = void 0 === e ? null : e, u = t.eventType;
        return __awaiter(this, void 0, void 0, function() {
            var e, i, n, o, s = this;
            return __generator(this, function(t) {
                switch(t.label){
                    case 0:
                        return (i = this.props, n = i.infinite, i = i.animationEasingFunction, e = this.state, o = e.itemsCount, e = e.animationDuration, this.isAnimationDisabled || this.state.activeIndex === a || !n && Utils.shouldCancelSlideAnimation(a, o)) ? [
                            2
                        ] : (this.isAnimationDisabled = !0, this._cancelTimeoutAnimations(), this._handleSlideChange(u), n = !1, o = Utils.getTranslate3dProperty(a, this.state), i = null !== r && null !== l ? (n = !0, Utils.getTransitionProperty()) : Utils.getTransitionProperty({
                            animationDuration: e,
                            animationEasingFunction: i
                        }), [
                            4,
                            this.setState({
                                activeIndex: a,
                                transition: i,
                                translate3d: o,
                                animationDuration: e,
                                fadeoutAnimationIndex: r,
                                fadeoutAnimationPosition: l,
                                fadeoutAnimationProcessing: n
                            })
                        ]);
                    case 1:
                        return t.sent(), this.slideEndTimeoutId = window.setTimeout(function() {
                            return s._handleBeforeSlideEnd(u);
                        }, e), [
                            2
                        ];
                }
            });
        });
    }, t.prototype._handleUpdateSlidePosition = function(o) {
        return __awaiter(this, void 0, void 0, function() {
            var e, i, n;
            return __generator(this, function(t) {
                switch(t.label){
                    case 0:
                        return e = this.state.animationDuration, i = Utils.getTranslate3dProperty(o, this.state), n = Utils.getTransitionProperty({
                            animationDuration: 0
                        }), [
                            4,
                            this.setState({
                                activeIndex: o,
                                translate3d: i,
                                transition: n,
                                animationDuration: e,
                                fadeoutAnimationIndex: null,
                                fadeoutAnimationPosition: null,
                                fadeoutAnimationProcessing: !1
                            })
                        ];
                    case 1:
                        return t.sent(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype._handleUpdated = function() {
        this.props.onUpdated && this.props.onUpdated(__assign(__assign({}, this.eventObject), {
            type: types_1.EventType.UPDATE
        }));
    }, t.prototype._handleResized = function() {
        this.props.onResized && this.props.onResized(__assign(__assign({}, this.eventObject), {
            type: types_1.EventType.RESIZE
        }));
    }, t.prototype._handleSlideChange = function(t) {
        this.props.onSlideChange && (t = t ? __assign(__assign({}, this.eventObject), {
            type: t
        }) : this.eventObject, this.props.onSlideChange(t));
    }, t.prototype._handleSlideChanged = function(s) {
        return __awaiter(this, void 0, void 0, function() {
            var e, i, n, o;
            return __generator(this, function(t) {
                switch(t.label){
                    case 0:
                        return (i = this.state, e = i.isAutoPlaying, i = i.isAutoPlayCanceledOnAction, n = this.props, o = n.autoPlayStrategy, n = n.onSlideChanged, Utils.shouldCancelAutoPlayOnAction(o) && this.hasUserAction && !i) ? [
                            4,
                            this.setState({
                                isAutoPlayCanceledOnAction: !0,
                                isAutoPlaying: !1
                            })
                        ] : [
                            3,
                            2
                        ];
                    case 1:
                        return t.sent(), [
                            3,
                            3
                        ];
                    case 2:
                        e && this._handlePlay(), t.label = 3;
                    case 3:
                        return this.isAnimationDisabled = !1, n && (o = s ? __assign(__assign({}, this.eventObject), {
                            type: s
                        }) : this.eventObject, n(o)), s === types_1.EventType.UPDATE && this._handleUpdated(), [
                            2
                        ];
                }
            });
        });
    }, t.prototype._handleDotClick = function(t) {
        this.hasUserAction = !0, this.slideTo(t);
    }, t.prototype._handlePlay = function() {
        this._setAutoPlayInterval();
    }, t.prototype._cancelTimeoutAnimations = function() {
        this._clearAutoPlayTimeout(), this._clearSlideEndTimeout(), this.clearTouchendTimeout();
    }, t.prototype._clearAutoPlayTimeout = function() {
        window.clearTimeout(this.autoPlayTimeoutId), this.autoPlayTimeoutId = void 0;
    }, t.prototype._clearSlideEndTimeout = function() {
        clearTimeout(this.slideEndTimeoutId), this.slideEndTimeoutId = void 0;
    }, t.prototype.clearTouchendTimeout = function() {
        clearTimeout(this.touchEndTimeoutId), this.touchEndTimeoutId = void 0;
    }, t.prototype._clearTouchmovePosition = function() {
        this.startTouchmovePosition = void 0;
    }, t.prototype._setTouchmovePosition = function() {
        var t = Utils.getTranslateXProperty(this.stageComponent);
        this.startTouchmovePosition = -t;
    }, t.prototype._setInitialState = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch(t.label){
                    case 0:
                        return e = Utils.calculateInitialState(this.props, this.stageComponent), this.rootComponentDimensions = Utils.getElementDimensions(this.rootElement), [
                            4,
                            this.setState(e)
                        ];
                    case 1:
                        return t.sent(), this.props.onInitialized && this.props.onInitialized(__assign(__assign({}, this.eventObject), {
                            type: types_1.EventType.INIT
                        })), [
                            2
                        ];
                }
            });
        });
    }, t.prototype._setAutoPlayInterval = function() {
        var t = this, e = this.props, i = e.autoPlayDirection, e = e.autoPlayInterval;
        this.autoPlayTimeoutId = window.setTimeout(function() {
            t.isHovered || (i === types_1.AutoplayDirection.RTL ? t.slidePrev() : t.slideNext());
        }, e);
    }, t.prototype._setupSwipeHandlers = function() {
        this.swipeListener = new vanilla_swipe_1.default({
            element: this.rootElement,
            delta: this.props.swipeDelta,
            onSwiping: this._handleTouchmove,
            onSwiped: this._handleTouchend,
            rotationAngle: 5,
            mouseTrackingEnabled: this.props.mouseTracking,
            touchTrackingEnabled: this.props.touchTracking,
            preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents,
            preventTrackingOnMouseleave: !0
        }), this.swipeListener.init();
    }, t.prototype._updateComponent = function() {
        var t = this, e = (this.props.syncStateOnPropsUpdate ? this.state : this.props).activeIndex, i = __assign(__assign({}, this.props), {
            activeIndex: e
        });
        this._cancelTimeoutAnimations(), this.isAnimationDisabled = !1, this.state.isAutoPlaying && this._handlePlay(), this.setState({
            clones: Utils.createClones(i)
        }), requestAnimationFrame(function() {
            t.setState(Utils.calculateInitialState(i, t.stageComponent), function() {
                return t._handleUpdated();
            });
        });
    }, t.prototype._updateSwipeProps = function() {
        this.swipeListener && this.swipeListener.update({
            delta: this.props.swipeDelta,
            mouseTrackingEnabled: this.props.mouseTracking,
            touchTrackingEnabled: this.props.touchTracking,
            preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents
        });
    }, t.prototype._renderDotsNavigation = function() {
        var t = this.props, e = t.renderDotsItem, t = t.controlsStrategy;
        return react_1.default.createElement(Views.DotsNavigation, {
            state: this.state,
            onClick: this._handleDotClick,
            renderDotsItem: e,
            controlsStrategy: t
        });
    }, t.prototype._renderPrevButton = function() {
        var t = this.props.renderPrevButton, e = Utils.getSlideItemInfo(this.state).isPrevSlideDisabled;
        return react_1.default.createElement(Views.PrevNextButton, {
            name: "prev",
            onClick: this.slidePrev,
            isDisabled: e,
            renderPrevButton: t
        });
    }, t.prototype._renderNextButton = function() {
        var t = this.props.renderNextButton, e = Utils.getSlideItemInfo(this.state).isNextSlideDisabled;
        return react_1.default.createElement(Views.PrevNextButton, {
            name: "next",
            onClick: this.slideNext,
            isDisabled: e,
            renderNextButton: t
        });
    }, t.prototype._renderPlayPauseButton = function() {
        var t = this.props.renderPlayPauseButton, e = this.state.isAutoPlaying;
        return react_1.default.createElement(Views.PlayPauseButton, {
            isPlaying: e,
            onClick: this._handlePlayPauseToggle,
            renderPlayPauseButton: t
        });
    }, t.prototype.render = function() {
        var t = this.state, e = t.translate3d, i = t.clones, n = t.transition, t = t.canUseDom, o = Utils.shouldDisableDots(this.props, this.state), s = Utils.shouldDisableButtons(this.props, this.state), a = Utils.getRenderWrapperStyles(this.props, this.state, this.stageComponent), e = Utils.getRenderStageStyles({
            translate3d: e
        }, {
            transition: n
        }), n = this.props.ssrSilentMode || t ? "" : types_1.Modifiers.SSR, t = Utils.concatClassnames(types_1.Classnames.ROOT, n);
        return react_1.default.createElement("div", {
            className: t
        }, react_1.default.createElement("div", {
            ref: this._setRootComponentRef
        }, react_1.default.createElement("div", {
            style: a,
            className: types_1.Classnames.WRAPPER,
            onMouseEnter: this._handleMouseEnter,
            onMouseLeave: this._handleMouseLeave
        }, react_1.default.createElement("ul", {
            style: e,
            className: types_1.Classnames.STAGE,
            ref: this._setStageComponentRef
        }, i.map(this._renderStageItem)))), o ? null : this._renderDotsNavigation(), s ? null : this._renderPrevButton(), s ? null : this._renderNextButton(), this.props.disableSlideInfo ? null : this._renderSlideInfo(), this.props.autoPlayControls ? this._renderPlayPauseButton() : null);
    }, t.defaultProps = defaultProps_1.defaultProps, t;
}(react_1.default.PureComponent));
exports.default = AliceCarousel;

},{"d4541c4857da09a9":"3P2Ti","cd82896031bea160":"7sasu","d0d2c900c1f15746":"2iEja","b538378db94900a7":"6mmRM","fbbc12ed9ea6538f":"4ihI3","170633ecc25d3199":"dTtVn"}],"3P2Ti":[function(require,module,exports) {
"use strict";
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"QYsfA"}],"QYsfA":[function(require,module,exports) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ReactVersion = "18.2.0";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: null
    };
    var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame.getCurrentStack = null;
    ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = ""; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) stack += impl() || "";
        return stack;
    };
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning("warn", format, args);
    }
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
        }
    };
    var assign = Object.assign;
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || "Context";
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = "" + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = "" + config.key;
            } // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = ".";
    var SUBSEPARATOR = ":";
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return "$" + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === "object" && element !== null && element.key != null) {
            checkKeyStringCoercion(element.key);
            return escape("" + element.key);
        } // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case "string":
            case "number":
                invokeCallback = true;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                    // The `if` statement here prevents auto-disabling of the safe
                    // coercion ESLint rule, so we must manually disable it below.
                    // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
                    mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                    escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === "object") {
                // eslint-disable-next-line react-internal/safe-string-coercion
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw new Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
    function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.
            thenable.then(function(moduleObject) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject;
                }
            }, function(error) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
            if (payload._status === Uninitialized) {
                // In case, we're still uninitialized, then we're waiting for the thenable
                // to resolve. Set it as pending in the meantime.
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
            }
        }
        if (payload._status === Resolved) {
            var moduleObject = payload._result;
            if (moduleObject === undefined) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
            if (!("default" in moduleObject)) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
            return moduleObject.default;
        } else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "defaultProps", {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "propTypes", {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== "function") error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
        else if (render.length !== 0 && render.length !== 2) error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!render.name && !render.displayName) render.displayName = name;
            }
        });
        return elementType;
    }
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!type.name && !type.displayName) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null) error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.
        return dispatcher;
    }
    function useContext(Context) {
        var dispatcher = resolveDispatcher();
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
    }
    function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at "); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
        try {
            scope();
        } finally{
            ReactCurrentBatchConfig.transition = prevTransition;
            if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                currentTransition._updatedFibers.clear();
            }
        }
    }
    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
        if (enqueueTaskImpl === null) try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ("require" + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.
            enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
        } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function(callback) {
                if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
            };
        }
        return enqueueTaskImpl(task);
    }
    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        if (ReactCurrentActQueue.current === null) // This is the outermost `act` scope. Initialize the queue. The reconciler
        // will detect the queue and use it instead of Scheduler.
        ReactCurrentActQueue.current = [];
        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;
        try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                }
            }
        } catch (error) {
            popActScope(prevActScopeDepth);
            throw error;
        } finally{
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
            var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.
            var wasAwaited = false;
            var thenable = {
                then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) // We've exited the outermost act scope. Recursively flush the
                        // queue until there's no remaining work.
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        else resolve(returnValue);
                    }, function(error) {
                        // The callback threw an error.
                        popActScope(prevActScopeDepth);
                        reject(error);
                    });
                }
            };
            if (!didWarnNoAwaitAct && typeof Promise !== "undefined") // eslint-disable-next-line no-undef
            Promise.resolve().then(function() {}).then(function() {
                if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                }
            });
            return thenable;
        } else {
            var returnValue = result; // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.
                var _thenable = {
                    then: function(resolve, reject) {
                        // Confirm we haven't re-entered another `act` scope, in case
                        // the user does something weird like await the thenable
                        // multiple times.
                        if (ReactCurrentActQueue.current === null) {
                            // Recursively flush the queue until there's no remaining work.
                            ReactCurrentActQueue.current = [];
                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        } else resolve(returnValue);
                    }
                };
                return _thenable;
            } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                    then: function(resolve, reject) {
                        resolve(returnValue);
                    }
                };
                return _thenable2;
            }
        }
    }
    function popActScope(prevActScopeDepth) {
        if (prevActScopeDepth !== actScopeDepth - 1) error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactCurrentActQueue.current;
        if (queue !== null) try {
            flushActQueue(queue);
            enqueueTask(function() {
                if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                } else // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
        } catch (error) {
            reject(error);
        }
        else resolve(returnValue);
    }
    var isFlushing = false;
    function flushActQueue(queue) {
        if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do callback = callback(true);
                    while (callback !== null);
                }
                queue.length = 0;
            } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
            } finally{
                isFlushing = false;
            }
        }
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();

},{}],"7sasu":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _exportNames = {};
exports["default"] = void 0;
var Utils = _interopRequireWildcard(require("669fadff6fb28f6f"));
var _types = require("6fd0a2913dec26da");
Object.keys(_types).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _types[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _types[key];
        }
    });
});
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var VanillaSwipe = /*#__PURE__*/ function() {
    function VanillaSwipe(props) {
        _classCallCheck(this, VanillaSwipe);
        _defineProperty(this, "state", void 0);
        _defineProperty(this, "props", void 0);
        this.state = Utils.getInitialState();
        this.props = Utils.getInitialProps(props);
        this.handleSwipeStart = this.handleSwipeStart.bind(this);
        this.handleSwipeMove = this.handleSwipeMove.bind(this);
        this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    _createClass(VanillaSwipe, [
        {
            key: "init",
            value: function init() {
                this.setupTouchListeners();
                this.setupMouseListeners();
            }
        },
        {
            key: "update",
            value: function update(props) {
                var prevProps = this.props;
                var nextProps = Object.assign({}, prevProps, props);
                if (prevProps.element !== nextProps.element || prevProps.target !== nextProps.target) {
                    this.destroy();
                    this.props = nextProps;
                    this.init();
                    return;
                }
                this.props = nextProps;
                if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled || prevProps.preventTrackingOnMouseleave !== nextProps.preventTrackingOnMouseleave) {
                    this.cleanupMouseListeners();
                    nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
                }
                if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
                    this.cleanupTouchListeners();
                    nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
                }
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.cleanupMouseListeners();
                this.cleanupTouchListeners();
                this.state = Utils.getInitialState();
                this.props = Utils.getInitialProps();
            }
        },
        {
            key: "setupTouchListeners",
            value: function setupTouchListeners() {
                var _this$props = this.props, element = _this$props.element, target = _this$props.target, touchTrackingEnabled = _this$props.touchTrackingEnabled;
                if (element && touchTrackingEnabled) {
                    var listener = target || element;
                    var isPassiveSupported = Utils.checkIsPassiveSupported();
                    var options = Utils.getOptions(isPassiveSupported);
                    listener.addEventListener("touchstart", this.handleSwipeStart, options);
                    listener.addEventListener("touchmove", this.handleSwipeMove, options);
                    listener.addEventListener("touchend", this.handleSwipeEnd, options);
                }
            }
        },
        {
            key: "cleanupTouchListeners",
            value: function cleanupTouchListeners() {
                var _this$props2 = this.props, element = _this$props2.element, target = _this$props2.target;
                var listener = target || element;
                if (listener) {
                    listener.removeEventListener("touchstart", this.handleSwipeStart);
                    listener.removeEventListener("touchmove", this.handleSwipeMove);
                    listener.removeEventListener("touchend", this.handleSwipeEnd);
                }
            }
        },
        {
            key: "setupMouseListeners",
            value: function setupMouseListeners() {
                var _this$props3 = this.props, element = _this$props3.element, mouseTrackingEnabled = _this$props3.mouseTrackingEnabled, preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;
                if (mouseTrackingEnabled && element) {
                    element.addEventListener("mousedown", this.handleMouseDown);
                    element.addEventListener("mousemove", this.handleMouseMove);
                    element.addEventListener("mouseup", this.handleMouseUp);
                    if (preventTrackingOnMouseleave) element.addEventListener("mouseleave", this.handleMouseLeave);
                }
            }
        },
        {
            key: "cleanupMouseListeners",
            value: function cleanupMouseListeners() {
                var element = this.props.element;
                if (element) {
                    element.removeEventListener("mousedown", this.handleMouseDown);
                    element.removeEventListener("mousemove", this.handleMouseMove);
                    element.removeEventListener("mouseup", this.handleMouseUp);
                    element.removeEventListener("mouseleave", this.handleMouseLeave);
                }
            }
        },
        {
            key: "getEventData",
            value: function getEventData(e) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                    directionDelta: 0
                };
                var rotationAngle = this.props.rotationAngle;
                var directionDelta = options.directionDelta;
                var movingPosition = Utils.calculateMovingPosition(e);
                var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
                return Utils.calculatePosition(this.state, {
                    rotatePosition: rotatePosition,
                    directionDelta: directionDelta
                });
            }
        },
        {
            key: "handleSwipeStart",
            value: function handleSwipeStart(e) {
                if (Utils.checkIsMoreThanSingleTouches(e)) return;
                var rotationAngle = this.props.rotationAngle;
                var movingPosition = Utils.calculateMovingPosition(e);
                var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle), x = _Utils$rotateByAngle.x, y = _Utils$rotateByAngle.y;
                this.state = Utils.getInitialState({
                    isSwiping: false,
                    start: Date.now(),
                    x: x,
                    y: y
                });
            }
        },
        {
            key: "handleSwipeMove",
            value: function handleSwipeMove(e) {
                var _this$state = this.state, x = _this$state.x, y = _this$state.y, isSwiping = _this$state.isSwiping;
                if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;
                var directionDelta = this.props.directionDelta || 0;
                var _this$getEventData = this.getEventData(e, {
                    directionDelta: directionDelta
                }), absX = _this$getEventData.absX, absY = _this$getEventData.absY, deltaX = _this$getEventData.deltaX, deltaY = _this$getEventData.deltaY, directionX = _this$getEventData.directionX, directionY = _this$getEventData.directionY, duration = _this$getEventData.duration, velocity = _this$getEventData.velocity;
                var _this$props4 = this.props, delta = _this$props4.delta, preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent, onSwipeStart = _this$props4.onSwipeStart, onSwiping = _this$props4.onSwiping;
                if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
                if (absX < Number(delta) && absY < Number(delta) && !isSwiping) return;
                if (onSwipeStart && !isSwiping) onSwipeStart(e, {
                    deltaX: deltaX,
                    deltaY: deltaY,
                    absX: absX,
                    absY: absY,
                    directionX: directionX,
                    directionY: directionY,
                    duration: duration,
                    velocity: velocity
                });
                this.state.isSwiping = true;
                if (onSwiping) onSwiping(e, {
                    deltaX: deltaX,
                    deltaY: deltaY,
                    absX: absX,
                    absY: absY,
                    directionX: directionX,
                    directionY: directionY,
                    duration: duration,
                    velocity: velocity
                });
            }
        },
        {
            key: "handleSwipeEnd",
            value: function handleSwipeEnd(e) {
                var _this$props5 = this.props, onSwiped = _this$props5.onSwiped, onTap = _this$props5.onTap;
                if (this.state.isSwiping) {
                    var directionDelta = this.props.directionDelta || 0;
                    var position = this.getEventData(e, {
                        directionDelta: directionDelta
                    });
                    onSwiped && onSwiped(e, position);
                } else {
                    var _position = this.getEventData(e);
                    onTap && onTap(e, _position);
                }
                this.state = Utils.getInitialState();
            }
        },
        {
            key: "handleMouseDown",
            value: function handleMouseDown(e) {
                var target = this.props.target;
                if (target) {
                    if (target === e.target) this.handleSwipeStart(e);
                } else this.handleSwipeStart(e);
            }
        },
        {
            key: "handleMouseMove",
            value: function handleMouseMove(e) {
                this.handleSwipeMove(e);
            }
        },
        {
            key: "handleMouseUp",
            value: function handleMouseUp(e) {
                var isSwiping = this.state.isSwiping;
                var target = this.props.target;
                if (target) {
                    if (target === e.target || isSwiping) this.handleSwipeEnd(e);
                } else this.handleSwipeEnd(e);
            }
        },
        {
            key: "handleMouseLeave",
            value: function handleMouseLeave(e) {
                var isSwiping = this.state.isSwiping;
                if (isSwiping) this.handleSwipeEnd(e);
            }
        }
    ], [
        {
            key: "isTouchEventsSupported",
            value: function isTouchEventsSupported() {
                return Utils.checkIsTouchEventsSupported();
            }
        }
    ]);
    return VanillaSwipe;
}();
exports["default"] = VanillaSwipe;

},{"669fadff6fb28f6f":"jIOvs","6fd0a2913dec26da":"i5u50"}],"jIOvs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _calculateDirection = require("fa9f4e7480df0395");
Object.keys(_calculateDirection).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateDirection[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculateDirection[key];
        }
    });
});
var _calculateDirectionDelta = require("35da6d7c4643fc1c");
Object.keys(_calculateDirectionDelta).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateDirectionDelta[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculateDirectionDelta[key];
        }
    });
});
var _calculateDuration = require("f69d53d0a9703ad9");
Object.keys(_calculateDuration).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateDuration[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculateDuration[key];
        }
    });
});
var _calculateMovingPosition = require("eead4e9095c165c6");
Object.keys(_calculateMovingPosition).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateMovingPosition[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculateMovingPosition[key];
        }
    });
});
var _calculatePosition = require("24133fd4fd2d048");
Object.keys(_calculatePosition).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculatePosition[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculatePosition[key];
        }
    });
});
var _calculateTraceDirections = require("64b283006e633c52");
Object.keys(_calculateTraceDirections).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateTraceDirections[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculateTraceDirections[key];
        }
    });
});
var _calculateVelocity = require("a55dee2f5a506fee");
Object.keys(_calculateVelocity).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateVelocity[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _calculateVelocity[key];
        }
    });
});
var _checkIsMoreThanSingleTouches = require("f817d7ac53ad88c5");
Object.keys(_checkIsMoreThanSingleTouches).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _checkIsMoreThanSingleTouches[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _checkIsMoreThanSingleTouches[key];
        }
    });
});
var _checkIsPassiveSupported = require("311812944fc20451");
Object.keys(_checkIsPassiveSupported).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _checkIsPassiveSupported[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _checkIsPassiveSupported[key];
        }
    });
});
var _checkIsTouchEventsSupported = require("9f52663fe3b5e529");
Object.keys(_checkIsTouchEventsSupported).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _checkIsTouchEventsSupported[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _checkIsTouchEventsSupported[key];
        }
    });
});
var _common = require("bd39fba61ab6bc64");
Object.keys(_common).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _common[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _common[key];
        }
    });
});
var _createOptions = require("d171b3abe7fa2e18");
Object.keys(_createOptions).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _createOptions[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _createOptions[key];
        }
    });
});
var _getInitialState = require("f6e6316c2f2019f7");
Object.keys(_getInitialState).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _getInitialState[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _getInitialState[key];
        }
    });
});
var _getInitialProps = require("4fca8831eebe50f6");
Object.keys(_getInitialProps).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _getInitialProps[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _getInitialProps[key];
        }
    });
});
var _getOptions = require("3557181513d4e153");
Object.keys(_getOptions).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _getOptions[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _getOptions[key];
        }
    });
});
var _resolveDirection = require("40d70078f49dc404");
Object.keys(_resolveDirection).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _resolveDirection[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _resolveDirection[key];
        }
    });
});
var _rotateByAngle = require("5aca41d7b94ecf1a");
Object.keys(_rotateByAngle).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _rotateByAngle[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _rotateByAngle[key];
        }
    });
});
var _updateTrace = require("cbb6f5ea8e9b6151");
Object.keys(_updateTrace).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _updateTrace[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _updateTrace[key];
        }
    });
});

},{"fa9f4e7480df0395":"7jZtf","35da6d7c4643fc1c":"6eNWu","f69d53d0a9703ad9":"bbPqR","eead4e9095c165c6":"etZdv","24133fd4fd2d048":"kBwVJ","64b283006e633c52":"bMbCv","a55dee2f5a506fee":"dbQED","f817d7ac53ad88c5":"2FPPw","311812944fc20451":"frfv8","9f52663fe3b5e529":"bZT2e","bd39fba61ab6bc64":"bpnGq","d171b3abe7fa2e18":"2Bge6","f6e6316c2f2019f7":"45FxB","4fca8831eebe50f6":"kRJtn","3557181513d4e153":"gpLH6","40d70078f49dc404":"8oXtb","5aca41d7b94ecf1a":"aijti","cbb6f5ea8e9b6151":"eNbeF"}],"7jZtf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDirection = calculateDirection;
var _types = require("3c1f12ac6a593073");
function calculateDirection(trace) {
    var direction;
    var negative = _types.TraceDirectionKey.NEGATIVE;
    var positive = _types.TraceDirectionKey.POSITIVE;
    var current = trace[trace.length - 1];
    var previous = trace[trace.length - 2] || 0;
    if (trace.every(function(i) {
        return i === 0;
    })) return _types.TraceDirectionKey.NONE;
    direction = current > previous ? positive : negative;
    if (current === 0) direction = previous < 0 ? positive : negative;
    return direction;
}

},{"3c1f12ac6a593073":"i5u50"}],"i5u50":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TraceDirectionKey = exports.Direction = exports.Axis = void 0;
var TraceDirectionKey;
exports.TraceDirectionKey = TraceDirectionKey;
(function(TraceDirectionKey) {
    TraceDirectionKey["NEGATIVE"] = "NEGATIVE";
    TraceDirectionKey["POSITIVE"] = "POSITIVE";
    TraceDirectionKey["NONE"] = "NONE";
})(TraceDirectionKey || (exports.TraceDirectionKey = TraceDirectionKey = {}));
var Direction;
exports.Direction = Direction;
(function(Direction) {
    Direction["TOP"] = "TOP";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
    Direction["BOTTOM"] = "BOTTOM";
    Direction["NONE"] = "NONE";
})(Direction || (exports.Direction = Direction = {}));
var Axis;
exports.Axis = Axis;
(function(Axis) {
    Axis["X"] = "x";
    Axis["Y"] = "y";
})(Axis || (exports.Axis = Axis = {}));

},{}],"6eNWu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDirectionDelta = calculateDirectionDelta;
var _types = require("832dec3852ea7254");
var _common = require("60b897fb04099747");
function calculateDirectionDelta(traceDirections) {
    var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var length = traceDirections.length;
    var i = length - 1;
    var direction = _types.TraceDirectionKey.NONE;
    for(; i >= 0; i--){
        var current = traceDirections[i];
        var currentKey = (0, _common.getDirectionKey)(current);
        var currentValue = (0, _common.getDirectionValue)(current[currentKey]);
        var prev = traceDirections[i - 1] || {};
        var prevKey = (0, _common.getDirectionKey)(prev);
        var prevValue = (0, _common.getDirectionValue)(prev[prevKey]);
        var difference = (0, _common.getDifference)(currentValue, prevValue);
        if (difference >= delta) {
            direction = currentKey;
            break;
        } else direction = prevKey;
    }
    return direction;
}

},{"832dec3852ea7254":"i5u50","60b897fb04099747":"bpnGq"}],"bpnGq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolveAxisDirection = exports.getDirectionValue = exports.getDirectionKey = exports.getDifference = void 0;
var _types = require("6fe584ac892b0c0c");
var getDirectionKey = function getDirectionKey() {
    var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var key = Object.keys(object).toString();
    switch(key){
        case _types.TraceDirectionKey.POSITIVE:
            return _types.TraceDirectionKey.POSITIVE;
        case _types.TraceDirectionKey.NEGATIVE:
            return _types.TraceDirectionKey.NEGATIVE;
        default:
            return _types.TraceDirectionKey.NONE;
    }
};
exports.getDirectionKey = getDirectionKey;
var getDirectionValue = function getDirectionValue() {
    var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return values[values.length - 1] || 0;
};
exports.getDirectionValue = getDirectionValue;
var getDifference = function getDifference() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Math.abs(x - y);
};
exports.getDifference = getDifference;
var resolveAxisDirection = function resolveAxisDirection(axis, key) {
    var negative = _types.Direction.LEFT;
    var positive = _types.Direction.RIGHT;
    var direction = _types.Direction.NONE;
    if (axis === _types.Axis.Y) {
        negative = _types.Direction.BOTTOM;
        positive = _types.Direction.TOP;
    }
    if (key === _types.TraceDirectionKey.NEGATIVE) direction = negative;
    if (key === _types.TraceDirectionKey.POSITIVE) direction = positive;
    return direction;
};
exports.resolveAxisDirection = resolveAxisDirection;

},{"6fe584ac892b0c0c":"i5u50"}],"bbPqR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateDuration = calculateDuration;
function calculateDuration() {
    var prevTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var nextTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return prevTime ? nextTime - prevTime : 0;
}

},{}],"etZdv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateMovingPosition = calculateMovingPosition;
function calculateMovingPosition(e) {
    if ("changedTouches" in e) {
        var touches = e.changedTouches && e.changedTouches[0];
        return {
            x: touches && touches.clientX,
            y: touches && touches.clientY
        };
    }
    return {
        x: e.clientX,
        y: e.clientY
    };
}

},{}],"kBwVJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculatePosition = calculatePosition;
var _updateTrace = require("8dc6e5bffdba7b2d");
var _resolveDirection = require("c4977fbd1dc80316");
var _calculateDuration = require("600cb8be559615b2");
var _calculateVelocity = require("51bfe80dd6d80d66");
var _types = require("3a613ea26bf28866");
function calculatePosition(state, options) {
    var start = state.start, x = state.x, y = state.y, traceX = state.traceX, traceY = state.traceY;
    var rotatePosition = options.rotatePosition, directionDelta = options.directionDelta;
    var deltaX = rotatePosition.x - x;
    var deltaY = y - rotatePosition.y;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    (0, _updateTrace.updateTrace)(traceX, deltaX);
    (0, _updateTrace.updateTrace)(traceY, deltaY);
    var directionX = (0, _resolveDirection.resolveDirection)(traceX, _types.Axis.X, directionDelta);
    var directionY = (0, _resolveDirection.resolveDirection)(traceY, _types.Axis.Y, directionDelta);
    var duration = (0, _calculateDuration.calculateDuration)(start, Date.now());
    var velocity = (0, _calculateVelocity.calculateVelocity)(absX, absY, duration);
    return {
        absX: absX,
        absY: absY,
        deltaX: deltaX,
        deltaY: deltaY,
        directionX: directionX,
        directionY: directionY,
        duration: duration,
        positionX: rotatePosition.x,
        positionY: rotatePosition.y,
        velocity: velocity
    };
}

},{"8dc6e5bffdba7b2d":"eNbeF","c4977fbd1dc80316":"8oXtb","600cb8be559615b2":"bbPqR","51bfe80dd6d80d66":"dbQED","3a613ea26bf28866":"i5u50"}],"eNbeF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateTrace = updateTrace;
function updateTrace(trace, value) {
    var last = trace[trace.length - 1];
    if (last !== value) trace.push(value);
    return trace;
}

},{}],"8oXtb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolveDirection = resolveDirection;
var _calculateDirection = require("41cfc5074468fef3");
var _calculateTraceDirections = require("765690108c5f6240");
var _calculateDirectionDelta = require("cf0fc8b70ac9a064");
var _common = require("f989c88eec226ae5");
var _types = require("22cb1dd5653ff343");
function resolveDirection(trace) {
    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types.Axis.X;
    var directionDelta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (directionDelta) {
        var directions = (0, _calculateTraceDirections.calculateTraceDirections)(trace);
        var _direction = (0, _calculateDirectionDelta.calculateDirectionDelta)(directions, directionDelta);
        return (0, _common.resolveAxisDirection)(axis, _direction);
    }
    var direction = (0, _calculateDirection.calculateDirection)(trace);
    return (0, _common.resolveAxisDirection)(axis, direction);
}

},{"41cfc5074468fef3":"7jZtf","765690108c5f6240":"bMbCv","cf0fc8b70ac9a064":"6eNWu","f989c88eec226ae5":"bpnGq","22cb1dd5653ff343":"i5u50"}],"bMbCv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateTraceDirections = calculateTraceDirections;
var _types = require("d3bc90fec4a51a9f");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function calculateTraceDirections() {
    var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var ticks = [];
    var positive = _types.TraceDirectionKey.POSITIVE;
    var negative = _types.TraceDirectionKey.NEGATIVE;
    var i = 0;
    var tick = [];
    var direction = _types.TraceDirectionKey.NONE;
    for(; i < trace.length; i++){
        var current = trace[i];
        var prev = trace[i - 1];
        if (tick.length) {
            var currentDirection = current > prev ? positive : negative;
            if (direction === _types.TraceDirectionKey.NONE) direction = currentDirection;
            if (currentDirection === direction) tick.push(current);
            else {
                ticks.push(_defineProperty({}, direction, tick.slice()));
                tick = [];
                tick.push(current);
                direction = currentDirection;
            }
        } else {
            if (current !== 0) direction = current > 0 ? positive : negative;
            tick.push(current);
        }
    }
    if (tick.length) ticks.push(_defineProperty({}, direction, tick));
    return ticks;
}

},{"d3bc90fec4a51a9f":"i5u50"}],"dbQED":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateVelocity = calculateVelocity;
function calculateVelocity(x, y, time) {
    var magnitude = Math.sqrt(x * x + y * y);
    return magnitude / (time || 1);
}

},{}],"2FPPw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkIsMoreThanSingleTouches = void 0;
var checkIsMoreThanSingleTouches = function checkIsMoreThanSingleTouches(e) {
    return Boolean(e.touches && e.touches.length > 1);
};
exports.checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches;

},{}],"frfv8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkIsPassiveSupported = checkIsPassiveSupported;
exports.noop = void 0;
var _createOptions = require("7a4a3f24395a2106");
function checkIsPassiveSupported(isPassiveSupported) {
    if (typeof isPassiveSupported === "boolean") return isPassiveSupported;
    var proxy = {
        isPassiveSupported: isPassiveSupported
    };
    try {
        var options = (0, _createOptions.createOptions)(proxy);
        window.addEventListener("checkIsPassiveSupported", noop, options);
        window.removeEventListener("checkIsPassiveSupported", noop, options);
    } catch (err) {}
    return proxy.isPassiveSupported;
}
var noop = function noop() {};
exports.noop = noop;

},{"7a4a3f24395a2106":"2Bge6"}],"2Bge6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createOptions = createOptions;
function createOptions() {
    var proxy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Object.defineProperty(proxy, "passive", {
        get: function get() {
            this.isPassiveSupported = true;
            return true;
        },
        enumerable: true
    });
    return proxy;
}

},{}],"bZT2e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkIsTouchEventsSupported = void 0;
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var checkIsTouchEventsSupported = function checkIsTouchEventsSupported() {
    return (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && ("ontouchstart" in window || Boolean(window.navigator.maxTouchPoints));
};
exports.checkIsTouchEventsSupported = checkIsTouchEventsSupported;

},{}],"45FxB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInitialState = void 0;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var getInitialState = function getInitialState() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread({
        x: 0,
        y: 0,
        start: 0,
        isSwiping: false,
        traceX: [],
        traceY: []
    }, options);
};
exports.getInitialState = getInitialState;

},{}],"kRJtn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInitialProps = void 0;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var getInitialProps = function getInitialProps() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread({
        element: null,
        target: null,
        delta: 10,
        directionDelta: 0,
        rotationAngle: 0,
        mouseTrackingEnabled: false,
        touchTrackingEnabled: true,
        preventDefaultTouchmoveEvent: false,
        preventTrackingOnMouseleave: false
    }, props);
};
exports.getInitialProps = getInitialProps;

},{}],"gpLH6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOptions = getOptions;
function getOptions() {
    var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (isPassiveSupported) return {
        passive: false
    };
    return {};
}

},{}],"aijti":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rotateByAngle = rotateByAngle;
function rotateByAngle(position) {
    var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (angle === 0) return position;
    var x = position.x, y = position.y;
    var angleInRadians = Math.PI / 180 * angle;
    var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
    var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
    return {
        x: rotatedX,
        y: rotatedY
    };
}

},{}],"2iEja":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.defaultProps = void 0;
var types_1 = require("c54523a327670559");
exports.defaultProps = {
    activeIndex: 0,
    animationDuration: 400,
    animationEasingFunction: "ease",
    animationType: types_1.AnimationType.SLIDE,
    autoHeight: !1,
    autoWidth: !1,
    autoPlay: !1,
    autoPlayControls: !1,
    autoPlayDirection: types_1.AutoplayDirection.LTR,
    autoPlayInterval: 400,
    autoPlayStrategy: types_1.AutoPlayStrategy.DEFAULT,
    children: void 0,
    controlsStrategy: types_1.ControlsStrategy.DEFAULT,
    disableButtonsControls: !1,
    disableDotsControls: !1,
    disableSlideInfo: !0,
    infinite: !1,
    innerWidth: void 0,
    items: void 0,
    keyboardNavigation: !1,
    mouseTracking: !1,
    syncStateOnPropsUpdate: !0,
    name: "",
    paddingLeft: 0,
    paddingRight: 0,
    responsive: void 0,
    swipeDelta: 20,
    swipeExtraPadding: 200,
    ssrSilentMode: !0,
    touchTracking: !0,
    touchMoveDefaultEvents: !0,
    onInitialized: function() {},
    onResized: function() {},
    onUpdated: function() {},
    onResizeEvent: void 0,
    onSlideChange: function() {},
    onSlideChanged: function() {}
};

},{"c54523a327670559":"dTtVn"}],"dTtVn":[function(require,module,exports) {
"use strict";
var EventType, AnimationType, AutoPlayStrategy, ControlsStrategy, AutoplayDirection, Classnames, Modifiers;
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Modifiers = exports.Classnames = exports.AutoplayDirection = exports.ControlsStrategy = exports.AutoPlayStrategy = exports.AnimationType = exports.EventType = void 0, function(e) {
    e.ACTION = "action", e.INIT = "init", e.RESIZE = "resize", e.UPDATE = "update";
}(EventType = exports.EventType || (exports.EventType = {})), function(e) {
    e.FADEOUT = "fadeout", e.SLIDE = "slide";
}(AnimationType = exports.AnimationType || (exports.AnimationType = {})), function(e) {
    e.DEFAULT = "default", e.ALL = "all", e.ACTION = "action", e.NONE = "none";
}(AutoPlayStrategy = exports.AutoPlayStrategy || (exports.AutoPlayStrategy = {})), function(e) {
    e.DEFAULT = "default", e.ALTERNATE = "alternate", e.RESPONSIVE = "responsive";
}(ControlsStrategy = exports.ControlsStrategy || (exports.ControlsStrategy = {})), function(e) {
    e.RTL = "rtl", e.LTR = "ltr";
}(AutoplayDirection = exports.AutoplayDirection || (exports.AutoplayDirection = {})), function(e) {
    e.ANIMATED = "animated animated-out fadeOut", e.ROOT = "alice-carousel", e.WRAPPER = "alice-carousel__wrapper", e.STAGE = "alice-carousel__stage", e.STAGE_ITEM = "alice-carousel__stage-item", e.DOTS = "alice-carousel__dots", e.DOTS_ITEM = "alice-carousel__dots-item", e.PLAY_BTN = "alice-carousel__play-btn", e.PLAY_BTN_ITEM = "alice-carousel__play-btn-item", e.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper", e.SLIDE_INFO = "alice-carousel__slide-info", e.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item", e.BUTTON_PREV = "alice-carousel__prev-btn", e.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper", e.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item", e.BUTTON_NEXT = "alice-carousel__next-btn", e.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper", e.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item";
}(Classnames = exports.Classnames || (exports.Classnames = {})), function(e) {
    e.ACTIVE = "__active", e.INACTIVE = "__inactive", e.CLONED = "__cloned", e.CUSTOM = "__custom", e.PAUSE = "__pause", e.SEPARATOR = "__separator", e.SSR = "__ssr", e.TARGET = "__target";
}(Modifiers = exports.Modifiers || (exports.Modifiers = {}));

},{}],"6mmRM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PrevNextButton = exports.PlayPauseButton = exports.DotsNavigation = exports.StageItem = exports.SlideInfo = void 0;
var SlideInfo_1 = require("2b6234113815c795"), StageItem_1 = (Object.defineProperty(exports, "SlideInfo", {
    enumerable: !0,
    get: function() {
        return SlideInfo_1.SlideInfo;
    }
}), require("ad83a96bb4160ba")), DotsNavigation_1 = (Object.defineProperty(exports, "StageItem", {
    enumerable: !0,
    get: function() {
        return StageItem_1.StageItem;
    }
}), require("7719b899e1be5031")), PlayPauseButton_1 = (Object.defineProperty(exports, "DotsNavigation", {
    enumerable: !0,
    get: function() {
        return DotsNavigation_1.DotsNavigation;
    }
}), require("34e02cd0d959a885")), PrevNextButton_1 = (Object.defineProperty(exports, "PlayPauseButton", {
    enumerable: !0,
    get: function() {
        return PlayPauseButton_1.PlayPauseButton;
    }
}), require("f97b9faa4feb195b"));
Object.defineProperty(exports, "PrevNextButton", {
    enumerable: !0,
    get: function() {
        return PrevNextButton_1.PrevNextButton;
    }
});

},{"2b6234113815c795":"6bIBj","ad83a96bb4160ba":"8ZW1n","7719b899e1be5031":"9nL9k","34e02cd0d959a885":"gbqHf","f97b9faa4feb195b":"eRQ6a"}],"6bIBj":[function(require,module,exports) {
"use strict";
var __importDefault = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}, react_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SlideInfo = void 0, __importDefault(require("ebb26b494ec47e3"))), types_1 = require("175ae4e0dfdefb8f"), utils_1 = require("73e0dbeda8629e40"), SlideInfo = function(e) {
    var t = e.activeIndex, s = e.itemsCount, e = e.renderSlideInfo, t = (0, utils_1.getSlideInfo)(t, s).item;
    return "function" == typeof e ? react_1.default.createElement("div", {
        className: types_1.Classnames.SLIDE_INFO
    }, e({
        item: t,
        itemsCount: s
    })) : (e = (0, utils_1.concatClassnames)(types_1.Classnames.SLIDE_INFO_ITEM, types_1.Modifiers.SEPARATOR), react_1.default.createElement("div", {
        className: types_1.Classnames.SLIDE_INFO
    }, react_1.default.createElement("span", {
        className: types_1.Classnames.SLIDE_INFO_ITEM
    }, t), react_1.default.createElement("span", {
        className: e
    }, "/"), react_1.default.createElement("span", {
        className: types_1.Classnames.SLIDE_INFO_ITEM
    }, s)));
};
exports.SlideInfo = SlideInfo;

},{"ebb26b494ec47e3":"3P2Ti","175ae4e0dfdefb8f":"dTtVn","73e0dbeda8629e40":"4ihI3"}],"4ihI3":[function(require,module,exports) {
"use strict";
var __createBinding = Object.create ? function(e, r, t, o) {
    void 0 === o && (o = t);
    var p = Object.getOwnPropertyDescriptor(r, t);
    p && ("get" in p ? r.__esModule : !p.writable && !p.configurable) || (p = {
        enumerable: !0,
        get: function() {
            return r[t];
        }
    }), Object.defineProperty(e, o, p);
} : function(e, r, t, o) {
    e[o = void 0 === o ? t : o] = r[t];
}, __exportStar = function(e, r) {
    for(var t in e)"default" === t || Object.prototype.hasOwnProperty.call(r, t) || __createBinding(r, e, t);
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), __exportStar(require("efc3ae84cae5130c"), exports), __exportStar(require("c9f3281c683932ea"), exports), __exportStar(require("5c9a1a3ac6d3e541"), exports), __exportStar(require("2b681042a751faec"), exports), __exportStar(require("e8ccff720e23c4d8"), exports), __exportStar(require("2f52c45d4c155d08"), exports), __exportStar(require("15bd71a8cf0f2b92"), exports), __exportStar(require("a9eda04938db8fab"), exports), __exportStar(require("1d9cedc7c74e0ec3"), exports);

},{"efc3ae84cae5130c":"2gLUe","c9f3281c683932ea":"jD1IX","5c9a1a3ac6d3e541":"hOEcv","2b681042a751faec":"88h30","e8ccff720e23c4d8":"P5Mlp","2f52c45d4c155d08":"eItUZ","15bd71a8cf0f2b92":"ir8D8","a9eda04938db8fab":"cvX30","1d9cedc7c74e0ec3":"9fb7k"}],"2gLUe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.calculateInitialState = exports.getIsStageContentPartial = exports.concatClassnames = void 0;
var elements_1 = require("88ec60ff3d13da07"), math_1 = require("c35af055f64c0f48"), concatClassnames = function() {
    for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
    return t.filter(Boolean).join(" ");
}, getIsStageContentPartial = (exports.concatClassnames = concatClassnames, function(t, e, i) {
    return void 0 === e && (e = 0), void 0 === i && (i = 0), !(t = void 0 !== t && t) && i <= e;
}), calculateInitialState = (exports.getIsStageContentPartial = getIsStageContentPartial, function(t, e, i) {
    void 0 === i && (i = (0, elements_1.canUseDOM)());
    var n, a, o = t.animationDuration, o = void 0 === o ? 0 : o, s = t.infinite, s = void 0 !== s && s, l = t.autoPlay, l = void 0 !== l && l, r = t.autoWidth, r = void 0 !== r && r, m = (0, elements_1.createClones)(t), d = (0, elements_1.getTransitionProperty)(), c = (0, elements_1.getItemsCount)(t), u = (0, elements_1.getItemsOffset)(t), f = (0, elements_1.getItemsInSlide)(c, t), g = (0, math_1.getStartIndex)(t.activeIndex, c), g = (0, math_1.getActiveIndex)({
        startIndex: g,
        itemsCount: c,
        infinite: s
    }), S = (0, elements_1.getElementDimensions)(e).width, I = (a = (e = (r ? (n = (e = (0, elements_1.createAutowidthTransformationSet)(e, S, s)).coords, a = e.content, e) : (n = (e = (0, elements_1.createDefaultTransformationSet)(m, S, f, s)).coords, a = e.content, e)).partial, a), (0, math_1.getItemCoords)(-f, n).position), _ = (0, math_1.getSwipeLimitMin)({
        itemsOffset: u,
        transformationSet: n
    }, t), t = (0, math_1.getSwipeLimitMax)({
        itemsCount: c,
        itemsOffset: u,
        itemsInSlide: f,
        transformationSet: n
    }, t), h = (0, math_1.getSwipeShiftValue)(c, n);
    return {
        activeIndex: g,
        autoWidth: r,
        animationDuration: o,
        clones: m,
        infinite: s,
        itemsCount: c,
        itemsInSlide: f,
        itemsOffset: u,
        translate3d: (0, elements_1.getTranslate3dProperty)(g, {
            itemsInSlide: f,
            itemsOffset: u,
            transformationSet: n,
            autoWidth: r,
            infinite: s
        }),
        stageWidth: S,
        stageContentWidth: a,
        initialStageHeight: 0,
        isStageContentPartial: e,
        isAutoPlaying: l,
        isAutoPlayCanceledOnAction: !1,
        transformationSet: n,
        transition: d,
        fadeoutAnimationIndex: null,
        fadeoutAnimationPosition: null,
        fadeoutAnimationProcessing: !1,
        swipeLimitMin: _,
        swipeLimitMax: t,
        swipeAllowedPositionMax: I,
        swipeShiftValue: h,
        canUseDom: i
    };
});
exports.calculateInitialState = calculateInitialState;

},{"88ec60ff3d13da07":"jD1IX","c35af055f64c0f48":"P5Mlp"}],"jD1IX":[function(require,module,exports) {
"use strict";
var __assign = function() {
    return (__assign = Object.assign || function(t) {
        for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
    }).apply(this, arguments);
}, mappers_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getItemsInSlide = exports.canUseDOM = exports.getTransformMatrix = exports.getTranslateXProperty = exports.getTouchmoveTranslatePosition = exports.getTranslate3dProperty = exports.getRenderStageItemStyles = exports.getRenderStageStyles = exports.getTransitionProperty = exports.getRenderWrapperStyles = exports.animate = exports.shouldHandleResizeEvent = exports.getElementFirstChild = exports.getElementCursor = exports.getAutoheightProperty = exports.getElementDimensions = exports.getItemWidth = exports.createDefaultTransformationSet = exports.createAutowidthTransformationSet = exports.isElement = exports.createClones = exports.getItemsOffset = exports.getItemsCount = exports.getSlides = void 0, require("f50064bea264925c")), math_1 = require("cd62e976a4d40827"), getSlides = function(t) {
    var e = t.children, t = t.items;
    return e ? e.length ? e : [
        e
    ] : void 0 === t ? [] : t;
}, getItemsCount = (exports.getSlides = getSlides, function(t) {
    return (0, exports.getSlides)(t).length;
}), getItemsOffset = (exports.getItemsCount = getItemsCount, function(t) {
    var e = t.infinite, n = t.paddingRight, t = t.paddingLeft;
    return e && (t || n) ? 1 : 0;
}), createClones = (exports.getItemsOffset = getItemsOffset, function(t) {
    var e, n, r, o, i = (0, exports.getSlides)(t);
    return t.infinite ? (e = (0, exports.getItemsCount)(t), o = (0, exports.getItemsOffset)(t), t = (0, exports.getItemsInSlide)(e, t), r = Math.min(t, e) + o, n = i.slice(0, r), r = i.slice(-r), o && t === e && (o = i[0], t = i.slice(-1)[0], r.unshift(t), n.push(o)), r.concat(i, n)) : i;
}), isElement = (exports.createClones = createClones, function(t) {
    try {
        return t instanceof Element || t instanceof HTMLDocument;
    } catch (t) {
        return !1;
    }
}), createAutowidthTransformationSet = (exports.isElement = isElement, function(t, i, e) {
    void 0 === i && (i = 0), void 0 === e && (e = !1);
    var s = 0, a = !0, n = [];
    return (0, exports.isElement)(t) && (n = Array.from((null == t ? void 0 : t.children) || []).reduce(function(t, e, n) {
        var r = 0, n = n - 1, o = t[n], e = getElementDimensions(null == e ? void 0 : e.firstChild).width, e = void 0 === e ? 0 : e;
        return a = (s += e) <= i, o && (r = 0 == n ? o.width : o.width + o.position), t.push({
            position: r,
            width: e
        }), t;
    }, []), e || (n = a ? (0, mappers_1.mapPartialCoords)(n) : (t = s - i, (0, mappers_1.mapPositionCoords)(n, t)))), {
        coords: n,
        content: s,
        partial: a
    };
}), createDefaultTransformationSet = (exports.createAutowidthTransformationSet = createAutowidthTransformationSet, function(t, o, e, n) {
    void 0 === n && (n = !1);
    var i = 0, s = !0, r = [], a = (0, exports.getItemWidth)(o, e);
    return r = t.reduce(function(t, e, n) {
        var r = 0, n = t[n - 1];
        return s = (i += a) <= o, n && (r = a + n.position || 0), t.push({
            width: a,
            position: r
        }), t;
    }, []), {
        coords: r = n ? r : s ? (0, mappers_1.mapPartialCoords)(r) : (e = i - o, (0, mappers_1.mapPositionCoords)(r, e)),
        content: i,
        partial: s
    };
}), getItemWidth = (exports.createDefaultTransformationSet = createDefaultTransformationSet, function(t, e) {
    return 0 < e ? t / e : t;
});
function getElementDimensions(t) {
    return t && t.getBoundingClientRect ? {
        width: (t = t.getBoundingClientRect()).width,
        height: t.height
    } : {
        width: 0,
        height: 0
    };
}
exports.getItemWidth = getItemWidth, exports.getElementDimensions = getElementDimensions;
var getAutoheightProperty = function(t, e, n) {
    var e = (0, exports.getElementCursor)(e, n), n = (0, exports.getElementFirstChild)(t, e);
    if ((0, exports.isElement)(n)) return t = window.getComputedStyle(n), e = parseFloat(t.marginTop), t = parseFloat(t.marginBottom), Math.ceil(n.offsetHeight + e + t);
}, getElementCursor = (exports.getAutoheightProperty = getAutoheightProperty, function(t, e) {
    var n = e.activeIndex, e = e.itemsInSlide;
    return t.infinite ? n + e + (0, exports.getItemsOffset)(t) : n;
}), getElementFirstChild = (exports.getElementCursor = getElementCursor, function(t, e) {
    t = t && t.children || [];
    return t[e] && t[e].firstChild || null;
});
function shouldHandleResizeEvent(t, e, n) {
    return (e = void 0 === e ? {} : e).width !== (n = void 0 === n ? {} : n).width;
}
function animate(t, e) {
    var e = e || {}, n = e.position, n = void 0 === n ? 0 : n, r = e.animationDuration, r = void 0 === r ? 0 : r, e = e.animationEasingFunction, e = void 0 === e ? "ease" : e;
    return t && (0, exports.isElement)(t) && (t.style.transition = "transform ".concat(r, "ms ").concat(e, " 0ms"), t.style.transform = "translate3d(".concat(n, "px, 0, 0)")), t;
}
exports.getElementFirstChild = getElementFirstChild, exports.shouldHandleResizeEvent = shouldHandleResizeEvent, exports.animate = animate;
var getRenderWrapperStyles = function(t, e, n) {
    var r = t || {}, o = r.paddingLeft, i = r.paddingRight, s = r.autoHeight, r = r.animationDuration, s = s ? (0, exports.getAutoheightProperty)(n, t, e) : void 0;
    return {
        height: s,
        transition: s ? "height ".concat(r, "ms") : void 0,
        paddingLeft: "".concat(o, "px"),
        paddingRight: "".concat(i, "px")
    };
}, getTransitionProperty = (exports.getRenderWrapperStyles = getRenderWrapperStyles, function(t) {
    var t = t || {}, e = t.animationDuration, t = t.animationEasingFunction, t = void 0 === t ? "ease" : t;
    return "transform ".concat(void 0 === e ? 0 : e, "ms ").concat(t, " 0ms");
}), getRenderStageStyles = (exports.getTransitionProperty = getTransitionProperty, function(t, e) {
    t = (t || {}).translate3d, t = "translate3d(".concat(-(void 0 === t ? 0 : t), "px, 0, 0)");
    return __assign(__assign({}, e), {
        transform: t
    });
}), getRenderStageItemStyles = (exports.getRenderStageStyles = getRenderStageStyles, function(t, e) {
    var n = e.transformationSet, r = e.fadeoutAnimationIndex, o = e.fadeoutAnimationPosition, i = e.fadeoutAnimationProcessing, e = e.animationDuration, n = (n[t] || {}).width;
    return i && r === t ? {
        transform: "translateX(".concat(o, "px)"),
        animationDuration: "".concat(e, "ms"),
        width: "".concat(n, "px")
    } : {
        width: n
    };
}), getTranslate3dProperty = (exports.getRenderStageItemStyles = getRenderStageItemStyles, function(t, e) {
    var n = t, r = e.infinite, o = e.itemsOffset, i = e.itemsInSlide, e = e.transformationSet;
    return ((void 0 === e ? [] : e)[n = r ? t + (0, math_1.getShiftIndex)(void 0 === i ? 0 : i, void 0 === o ? 0 : o) : n] || {}).position || 0;
}), getTouchmoveTranslatePosition = (exports.getTranslate3dProperty = getTranslate3dProperty, function(t, e) {
    return -(e - Math.floor(t));
});
function getTranslateXProperty(t) {
    t = getTransformMatrix(t), t = t && t[4] || "";
    return Number(t);
}
function getTransformMatrix(t) {
    return t && (0, exports.isElement)(t) && window.getComputedStyle(t).transform.match(/(-?[0-9.]+)/g) || [];
}
exports.getTouchmoveTranslatePosition = getTouchmoveTranslatePosition, exports.getTranslateXProperty = getTranslateXProperty, exports.getTransformMatrix = getTransformMatrix;
var canUseDOM = function() {
    var t;
    try {
        return Boolean(null == (t = null === window || void 0 === window ? void 0 : window.document) ? void 0 : t.createElement);
    } catch (t) {
        return !1;
    }
}, getItemsInSlide = (exports.canUseDOM = canUseDOM, function(n, t) {
    var r, o = 1, i = t.responsive, e = t.autoWidth, s = t.infinite, t = t.innerWidth;
    return void 0 !== e && e ? void 0 !== s && s ? n : o : (i && (e = Object.keys(i)).length && (t || (0, exports.canUseDOM)()) && (r = void 0 === t ? window.innerWidth : t, e.forEach(function(t) {
        var e;
        Number(t) <= r && (e = (t = i[t]).items, t = t.itemsFit, o = "contain" === (void 0 === t ? "fill" : t) ? e : Math.min(e, n));
    })), o || 1);
});
exports.getItemsInSlide = getItemsInSlide;

},{"f50064bea264925c":"9fb7k","cd62e976a4d40827":"P5Mlp"}],"9fb7k":[function(require,module,exports) {
"use strict";
var __assign = function() {
    return (__assign = Object.assign || function(o) {
        for(var t, r = 1, i = arguments.length; r < i; r++)for(var s in t = arguments[r])Object.prototype.hasOwnProperty.call(t, s) && (o[s] = t[s]);
        return o;
    }).apply(this, arguments);
}, mapPartialCoords = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mapPositionCoords = exports.mapPartialCoords = void 0, function(o) {
    return o.map(function(o) {
        return {
            width: o.width,
            position: 0
        };
    });
}), mapPositionCoords = (exports.mapPartialCoords = mapPartialCoords, function(o, t) {
    return void 0 === t && (t = 0), o.map(function(o) {
        return o.position > t ? __assign(__assign({}, o), {
            position: t
        }) : o;
    });
});
exports.mapPositionCoords = mapPositionCoords;

},{}],"P5Mlp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isVerticalTouchmoveDetected = exports.getFadeoutAnimationPosition = exports.getFadeoutAnimationIndex = exports.getSwipeTouchendIndex = exports.getSwipeTouchendPosition = exports.getSwipeTransformationCursor = exports.getTransformationItemIndex = exports.getSwipeShiftValue = exports.getItemCoords = exports.getIsLeftDirection = exports.shouldRecalculateSwipePosition = exports.getSwipeLimitMax = exports.getSwipeLimitMin = exports.shouldCancelSlideAnimation = exports.shouldRecalculateSlideIndex = exports.getUpdateSlidePositionIndex = exports.getActiveIndex = exports.getStartIndex = exports.getShiftIndex = void 0;
var getShiftIndex = function(e, t) {
    return (e = void 0 === e ? 0 : e) + (t = void 0 === t ? 0 : t);
}, getStartIndex = (exports.getShiftIndex = getShiftIndex, function(e, t) {
    if (void 0 === e && (e = 0), t = void 0 === t ? 0 : t) {
        if (t <= e) return t - 1;
        if (0 < e) return e;
    }
    return 0;
}), getActiveIndex = (exports.getStartIndex = getStartIndex, function(e) {
    var t = e.startIndex, t = void 0 === t ? 0 : t, i = e.itemsCount, e = e.infinite;
    return void 0 !== e && e ? t : (0, exports.getStartIndex)(t, void 0 === i ? 0 : i);
}), getUpdateSlidePositionIndex = (exports.getActiveIndex = getActiveIndex, function(e, t) {
    return e < 0 ? t - 1 : t <= e ? 0 : e;
}), shouldRecalculateSlideIndex = (exports.getUpdateSlidePositionIndex = getUpdateSlidePositionIndex, function(e, t) {
    return e < 0 || t <= e;
}), shouldCancelSlideAnimation = (exports.shouldRecalculateSlideIndex = shouldRecalculateSlideIndex, function(e, t) {
    return e < 0 || t <= e;
}), getSwipeLimitMin = (exports.shouldCancelSlideAnimation = shouldCancelSlideAnimation, function(e, t) {
    var i = e.itemsOffset, e = e.transformationSet, e = void 0 === e ? [] : e, o = t.infinite, t = t.swipeExtraPadding;
    return o ? (e[void 0 === i ? 0 : i] || {}).position : (o = (e[0] || {}).width, Math.min(void 0 === t ? 0 : t, void 0 === o ? 0 : o));
}), getSwipeLimitMax = (exports.getSwipeLimitMin = getSwipeLimitMin, function(e, t) {
    var i = t.infinite, t = t.swipeExtraPadding, t = void 0 === t ? 0 : t, o = e.itemsCount, n = e.itemsOffset, r = e.itemsInSlide, r = void 0 === r ? 1 : r, e = e.transformationSet, e = void 0 === e ? [] : e;
    return i ? (e[(void 0 === o ? 1 : o) + (0, exports.getShiftIndex)(r, void 0 === n ? 0 : n)] || {}).position || 0 : (0, exports.getItemCoords)(-r, e).position + t;
}), shouldRecalculateSwipePosition = (exports.getSwipeLimitMax = getSwipeLimitMax, function(e, t, i) {
    return -t <= e || Math.abs(e) >= i;
}), getIsLeftDirection = (exports.shouldRecalculateSwipePosition = shouldRecalculateSwipePosition, function(e) {
    return (e = void 0 === e ? 0 : e) < 0;
}), getItemCoords = (exports.getIsLeftDirection = getIsLeftDirection, function(e, t) {
    return (t = void 0 === t ? [] : t).slice(e = void 0 === e ? 0 : e)[0] || {
        position: 0,
        width: 0
    };
}), getSwipeShiftValue = (exports.getItemCoords = getItemCoords, function(e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = []), (0, exports.getItemCoords)(e, t).position;
}), getTransformationItemIndex = (exports.getSwipeShiftValue = getSwipeShiftValue, function(e, t) {
    return void 0 === t && (t = 0), (e = void 0 === e ? [] : e).findIndex(function(e) {
        return e.position >= Math.abs(t);
    });
}), getSwipeTransformationCursor = (exports.getTransformationItemIndex = getTransformationItemIndex, function(e, t, i) {
    void 0 === e && (e = []), void 0 === t && (t = 0), void 0 === i && (i = 0);
    e = (0, exports.getTransformationItemIndex)(e, t);
    return (0, exports.getIsLeftDirection)(i) ? e : e - 1;
}), getSwipeTouchendPosition = (exports.getSwipeTransformationCursor = getSwipeTransformationCursor, function(e, t, i) {
    void 0 === i && (i = 0);
    var o = e.infinite, n = e.autoWidth, r = e.isStageContentPartial, s = e.swipeAllowedPositionMax, e = e.transformationSet, i = (0, exports.getSwipeTransformationCursor)(e, i, t), t = (0, exports.getItemCoords)(i, e).position;
    if (!o) {
        if (n && r) return 0;
        if (s < t) return -s;
    }
    return -t;
}), getSwipeTouchendIndex = (exports.getSwipeTouchendPosition = getSwipeTouchendPosition, function(e, t) {
    var i = t.transformationSet, o = t.itemsInSlide, n = t.itemsOffset, r = t.itemsCount, s = t.infinite, d = t.isStageContentPartial, a = t.activeIndex, t = t.translate3d;
    return s || !d && t !== Math.abs(e) ? (d = (0, exports.getTransformationItemIndex)(i, e), s ? d < (t = (0, exports.getShiftIndex)(o, n)) ? r - o - n + d : t + r <= d ? d - (t + r) : d - t : d) : a;
}), getFadeoutAnimationIndex = (exports.getSwipeTouchendIndex = getSwipeTouchendIndex, function(e) {
    var t = e.infinite, i = e.activeIndex, e = e.itemsInSlide;
    return t ? i + e : i;
}), getFadeoutAnimationPosition = (exports.getFadeoutAnimationIndex = getFadeoutAnimationIndex, function(e, t) {
    var i = t.activeIndex, t = t.stageWidth;
    return e < i ? (i - e) * -t || 0 : (e - i) * t || 0;
}), isVerticalTouchmoveDetected = (exports.getFadeoutAnimationPosition = getFadeoutAnimationPosition, function(e, t, i) {
    return e < (i = void 0 === i ? 0 : i) || e < .1 * t;
});
exports.isVerticalTouchmoveDetected = isVerticalTouchmoveDetected;

},{}],"hOEcv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isClonedItem = exports.isTargetItem = exports.isActiveItem = exports.getRenderStageItemClasses = void 0;
var types_1 = require("d28492f53fcf3e01"), common_1 = require("47baec961ce52897"), math_1 = require("ab5c27d0f74b42ae"), getRenderStageItemClasses = function(e, t) {
    void 0 === e && (e = 0);
    var s = t.fadeoutAnimationIndex, i = (0, exports.isActiveItem)(e, t) ? types_1.Modifiers.ACTIVE : "", n = (0, exports.isClonedItem)(e, t) ? types_1.Modifiers.CLONED : "", t = (0, exports.isTargetItem)(e, t) ? types_1.Modifiers.TARGET : "", e = e === s ? types_1.Classnames.ANIMATED : "";
    return (0, common_1.concatClassnames)(types_1.Classnames.STAGE_ITEM, i, n, t, e);
}, isActiveItem = (exports.getRenderStageItemClasses = getRenderStageItemClasses, function(e, t) {
    void 0 === e && (e = 0);
    var s = t.activeIndex, i = t.itemsInSlide, n = t.itemsOffset, r = t.infinite, t = t.autoWidth, o = (0, math_1.getShiftIndex)(i, n);
    return t && r ? e - o === s + n : (t = s + o, r ? t <= e && e < t + i : s <= e && e < t);
}), isTargetItem = (exports.isActiveItem = isActiveItem, function(e, t) {
    void 0 === e && (e = 0);
    var s = t.activeIndex, i = t.itemsInSlide, n = t.itemsOffset, r = t.infinite, t = t.autoWidth, i = (0, math_1.getShiftIndex)(i, n);
    return r ? t && r ? e - i === s + n : e === s + i : e === s;
}), isClonedItem = (exports.isTargetItem = isTargetItem, function(e, t) {
    void 0 === e && (e = 0);
    var s = t.itemsInSlide, i = t.itemsOffset, n = t.itemsCount, r = t.infinite, t = t.autoWidth;
    return !!r && (t && r ? e < s || n - 1 + s < e : e < (t = (0, math_1.getShiftIndex)(s, i)) || n - 1 + t < e);
});
exports.isClonedItem = isClonedItem;

},{"d28492f53fcf3e01":"dTtVn","47baec961ce52897":"2gLUe","ab5c27d0f74b42ae":"P5Mlp"}],"88h30":[function(require,module,exports) {
"use strict";
function debounce(n, i) {
    void 0 === i && (i = 0);
    function u() {
        d && (clearTimeout(d), d = void 0);
    }
    var d = void 0;
    return [
        function() {
            for(var e = this, o = [], t = 0; t < arguments.length; t++)o[t] = arguments[t];
            u(), d = window.setTimeout(function() {
                n.apply(e, o), d = void 0;
            }, i);
        },
        u
    ];
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debounce = void 0, exports.debounce = debounce;

},{}],"eItUZ":[function(require,module,exports) {
"use strict";
function debug() {
    for(var e = [], o = 0; o < arguments.length; o++)e[o] = arguments[o];
    console.debug.apply(console, e);
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.debug = void 0, exports.debug = debug;

},{}],"ir8D8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSlideItemInfo = exports.getSlideInfo = exports.getSlideIndexForMultipleItems = exports.getSlideIndexForNonMultipleItems = exports.getActiveSlideDotsLength = exports.getActiveSlideIndex = void 0;
var getActiveSlideIndex = function(e, t) {
    var t = t || {}, i = t.activeIndex, o = t.itemsInSlide, t = t.itemsCount, i = i + o;
    return 1 === o ? (0, exports.getSlideIndexForNonMultipleItems)(i, o, t) : (0, exports.getSlideIndexForMultipleItems)(i, o, t, e);
}, getActiveSlideDotsLength = (exports.getActiveSlideIndex = getActiveSlideIndex, function(e, t) {
    var i;
    return void 0 === t && (t = 1), (e = void 0 === e ? 0 : e) && t ? (i = Math.floor(e / t), e % t == 0 ? i - 1 : i) : 0;
}), getSlideIndexForNonMultipleItems = (exports.getActiveSlideDotsLength = getActiveSlideDotsLength, function(e, t, i) {
    return e < t ? i - t : i < e ? 0 : e - 1;
}), getSlideIndexForMultipleItems = (exports.getSlideIndexForNonMultipleItems = getSlideIndexForNonMultipleItems, function(e, t, i, o) {
    var l = (0, exports.getActiveSlideDotsLength)(i, t);
    return e === i + t ? 0 : o || e < t && 0 !== e ? l : 0 === e ? i % t == 0 ? l : l - 1 : 0 < t ? Math.floor(e / t) - 1 : 0;
}), getSlideInfo = (exports.getSlideIndexForMultipleItems = getSlideIndexForMultipleItems, function(e, t) {
    void 0 === t && (t = 0);
    e = (e = void 0 === e ? 0 : e) + 1;
    return e < 1 ? e = t : t < e && (e = 1), {
        item: e,
        itemsCount: t
    };
}), getSlideItemInfo = (exports.getSlideInfo = getSlideInfo, function(e) {
    var e = e || {}, t = e.itemsInSlide, i = e.activeIndex, o = e.infinite, l = e.itemsCount;
    return e.isStageContentPartial ? {
        isPrevSlideDisabled: !0,
        isNextSlideDisabled: !0
    } : {
        isPrevSlideDisabled: !1 === o && 0 === i,
        isNextSlideDisabled: !1 === o && l - t <= i
    };
});
exports.getSlideItemInfo = getSlideItemInfo;

},{}],"cvX30":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shouldCancelAutoPlayOnHover = exports.shouldCancelAutoPlayOnAction = exports.getItemIndexForDotNavigation = exports.checkIsTheLastDotIndex = exports.getDotsNavigationLength = exports.hasDotForEachSlide = exports.isStrategy = exports.shouldDisableButtons = exports.shouldDisableDots = exports.shouldDisableControls = void 0;
var types_1 = require("b5c3fa7e5aff73c2");
function shouldDisableControls(t, o) {
    var t = (t || {}).controlsStrategy, o = o || {}, e = o.itemsInSlide, s = o.itemsCount, o = o.autoWidth;
    if ((0, exports.isStrategy)(t, types_1.ControlsStrategy.RESPONSIVE)) return !o && e === s;
}
function shouldDisableDots(t, o) {
    return t.disableDotsControls || shouldDisableControls(t, o);
}
function shouldDisableButtons(t, o) {
    return t.disableButtonsControls || !t.infinite && shouldDisableControls(t, o);
}
exports.shouldDisableControls = shouldDisableControls, exports.shouldDisableDots = shouldDisableDots, exports.shouldDisableButtons = shouldDisableButtons;
var isStrategy = function(t, o) {
    return void 0 === t && (t = ""), void 0 === o && (o = ""), Boolean(t && t.includes(o));
}, hasDotForEachSlide = (exports.isStrategy = isStrategy, function(t, o) {
    return t || (0, exports.isStrategy)(o, types_1.ControlsStrategy.ALTERNATE);
}), getDotsNavigationLength = (exports.hasDotForEachSlide = hasDotForEachSlide, function(t, o, e) {
    return void 0 === t && (t = 0), void 0 === o && (o = 1), (e = void 0 !== e && e) ? t : 0 !== Number(o) && Math.ceil(t / o) || 0;
}), checkIsTheLastDotIndex = (exports.getDotsNavigationLength = getDotsNavigationLength, function(t, o, e) {
    return !o && t === e - 1;
}), getItemIndexForDotNavigation = (exports.checkIsTheLastDotIndex = checkIsTheLastDotIndex, function(t, o, e, s) {
    return (o ? e - s : t * s) || 0;
}), shouldCancelAutoPlayOnAction = (exports.getItemIndexForDotNavigation = getItemIndexForDotNavigation, function(t) {
    return (t = void 0 === t ? "" : t) === types_1.AutoPlayStrategy.ACTION || t === types_1.AutoPlayStrategy.ALL;
}), shouldCancelAutoPlayOnHover = (exports.shouldCancelAutoPlayOnAction = shouldCancelAutoPlayOnAction, function(t) {
    return (t = void 0 === t ? "" : t) === types_1.AutoPlayStrategy.DEFAULT || t === types_1.AutoPlayStrategy.ALL;
});
exports.shouldCancelAutoPlayOnHover = shouldCancelAutoPlayOnHover;

},{"b5c3fa7e5aff73c2":"dTtVn"}],"8ZW1n":[function(require,module,exports) {
"use strict";
var __importDefault = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}, react_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.StageItem = void 0, __importDefault(require("5c3b097692db66a7"))), StageItem = function(e) {
    var t = e.item, r = e.className, e = e.styles;
    return react_1.default.createElement("li", {
        style: e,
        className: r
    }, t);
};
exports.StageItem = StageItem;

},{"5c3b097692db66a7":"3P2Ti"}],"9nL9k":[function(require,module,exports) {
"use strict";
var __importDefault = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}, react_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DotsNavigation = void 0, __importDefault(require("2355594baf9bd3af"))), types_1 = require("a63937c5ef38a18b"), utils_1 = require("ab7e4bb44b143c6a"), DotsNavigation = function(e) {
    var a = e.state, n = e.onClick, r = e.onMouseEnter, l = e.onMouseLeave, t = e.controlsStrategy, u = e.renderDotsItem, c = a.itemsCount, _ = a.itemsInSlide, d = a.infinite, e = a.autoWidth, m = a.activeIndex, v = (0, utils_1.getSlideItemInfo)(a).isNextSlideDisabled, f = (0, utils_1.hasDotForEachSlide)(e, t), D = (0, utils_1.getDotsNavigationLength)(c, _, f);
    return react_1.default.createElement("ul", {
        className: types_1.Classnames.DOTS
    }, Array.from({
        length: c
    }).map(function(e, t) {
        var i, s, o;
        if (t < D) return s = (0, utils_1.checkIsTheLastDotIndex)(t, Boolean(d), D), i = (0, utils_1.getItemIndexForDotNavigation)(t, s, c, _), s = (0, utils_1.getActiveSlideIndex)(v, a), f && ((s = m) < 0 ? s = c - 1 : c <= m && (s = 0), i = t), s = s === t ? types_1.Modifiers.ACTIVE : "", o = u ? types_1.Modifiers.CUSTOM : "", o = (0, utils_1.concatClassnames)(types_1.Classnames.DOTS_ITEM, s, o), react_1.default.createElement("li", {
            key: "dot-item-".concat(t),
            onMouseEnter: r,
            onMouseLeave: l,
            onClick: function() {
                return n(i);
            },
            className: o
        }, u && u({
            isActive: Boolean(s),
            activeIndex: t
        }));
    }));
};
exports.DotsNavigation = DotsNavigation;

},{"2355594baf9bd3af":"3P2Ti","a63937c5ef38a18b":"dTtVn","ab7e4bb44b143c6a":"4ihI3"}],"gbqHf":[function(require,module,exports) {
"use strict";
var __importDefault = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}, react_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PlayPauseButton = void 0, __importDefault(require("f1c4190b1fdc23b2"))), types_1 = require("af3b765aede9cef3"), utils_1 = require("39e64c397a8683b2"), PlayPauseButton = function(e) {
    var t = e.isPlaying, a = e.onClick, e = e.renderPlayPauseButton;
    return "function" == typeof e ? react_1.default.createElement("div", {
        className: types_1.Classnames.PLAY_BTN,
        onClick: a
    }, e({
        isPlaying: t
    })) : (e = t ? types_1.Modifiers.PAUSE : "", t = (0, utils_1.concatClassnames)(types_1.Classnames.PLAY_BTN_ITEM, e), react_1.default.createElement("div", {
        className: types_1.Classnames.PLAY_BTN
    }, react_1.default.createElement("div", {
        className: types_1.Classnames.PLAY_BTN_WRAPPER
    }, react_1.default.createElement("div", {
        onClick: a,
        className: t
    }))));
};
exports.PlayPauseButton = PlayPauseButton;

},{"f1c4190b1fdc23b2":"3P2Ti","af3b765aede9cef3":"dTtVn","39e64c397a8683b2":"4ihI3"}],"eRQ6a":[function(require,module,exports) {
"use strict";
var __importDefault = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}, react_1 = (Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PrevNextButton = void 0, __importDefault(require("faab412b3b2a2855"))), types_1 = require("510455514028948"), utils_1 = require("c0f153541059e6b0"), PrevNextButton = function(e) {
    var t, s = e.name, a = e.isDisabled, r = e.onClick, n = e.renderPrevButton, e = e.renderNextButton;
    return "function" == typeof n ? react_1.default.createElement("div", {
        className: types_1.Classnames.BUTTON_PREV,
        onClick: r
    }, n({
        isDisabled: a
    })) : "function" == typeof e ? react_1.default.createElement("div", {
        className: types_1.Classnames.BUTTON_NEXT,
        onClick: r
    }, e({
        isDisabled: a
    })) : (e = (n = "prev" === s) ? "<" : ">", s = n ? types_1.Classnames.BUTTON_PREV : types_1.Classnames.BUTTON_NEXT, t = n ? types_1.Classnames.BUTTON_PREV_WRAPPER : types_1.Classnames.BUTTON_NEXT_WRAPPER, n = n ? types_1.Classnames.BUTTON_PREV_ITEM : types_1.Classnames.BUTTON_NEXT_ITEM, a = a ? types_1.Modifiers.INACTIVE : "", n = (0, utils_1.concatClassnames)(n, a), react_1.default.createElement("div", {
        className: s
    }, react_1.default.createElement("div", {
        className: t
    }, react_1.default.createElement("p", {
        className: n,
        onClick: function(e) {
            return r(e);
        }
    }, react_1.default.createElement("span", {
        "data-area": e
    })))));
};
exports.PrevNextButton = PrevNextButton;

},{"faab412b3b2a2855":"3P2Ti","510455514028948":"dTtVn","c0f153541059e6b0":"4ihI3"}],"9qjgi":[function() {},{}]},["7nOP5","9ALdu"], "9ALdu", "parcelRequire5e55")

//# sourceMappingURL=theme.js.map
