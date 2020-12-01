// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/prettier/standalone.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e149) { throw _e149; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e150) { didErr = true; err = _e150; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).prettier = t();
}(this, function () {
  "use strict";

  function e(e, t) {
    if (null == e) return {};
    var n,
        r,
        u = {},
        o = Object.keys(e);

    for (r = 0; r < o.length; r++) {
      n = o[r], t.indexOf(n) >= 0 || (u[n] = e[n]);
    }

    return u;
  }

  function t(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }

  var n = "Prettier is an opinionated code formatter",
      r = "./bin/prettier.js",
      u = {
    node: ">=10.13.0"
  },
      o = ["index.js", "standalone.js", "src", "bin"],
      a = {
    "@angular/compiler": "10.0.12",
    "@babel/code-frame": "7.10.4",
    "@babel/parser": "7.11.2",
    "@glimmer/syntax": "0.59.0",
    "@iarna/toml": "2.2.5",
    "@typescript-eslint/typescript-estree": "3.10.0",
    "angular-estree-parser": "2.2.0",
    "angular-html-parser": "1.7.1",
    camelcase: "6.0.0",
    chalk: "4.1.0",
    "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540",
    "cjk-regex": "2.0.0",
    cosmiconfig: "7.0.0",
    dashify: "2.0.0",
    diff: "4.0.2",
    editorconfig: "0.15.3",
    "editorconfig-to-prettier": "0.1.1",
    "escape-string-regexp": "4.0.0",
    esutils: "2.0.3",
    "fast-glob": "3.2.4",
    "fast-json-stable-stringify": "2.1.0",
    "find-parent-dir": "0.3.0",
    "flow-parser": "0.132.0",
    "get-stream": "6.0.0",
    globby: "11.0.1",
    graphql: "15.3.0",
    "html-element-attributes": "2.2.1",
    "html-styles": "1.0.0",
    "html-tag-names": "1.1.5",
    "html-void-elements": "1.0.5",
    ignore: "4.0.6",
    "jest-docblock": "26.0.0",
    json5: "2.1.3",
    leven: "3.1.0",
    "lines-and-columns": "1.1.6",
    "linguist-languages": "7.10.0",
    lodash: "4.17.20",
    mem: "6.1.0",
    minimatch: "3.0.4",
    minimist: "1.2.5",
    "n-readlines": "1.0.0",
    outdent: "0.7.1",
    "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee",
    "please-upgrade-node": "3.2.0",
    "postcss-less": "3.1.4",
    "postcss-media-query-parser": "0.2.3",
    "postcss-scss": "2.1.1",
    "postcss-selector-parser": "2.2.3",
    "postcss-values-parser": "2.0.1",
    "regexp-util": "1.2.2",
    "remark-footnotes": "2.0.0",
    "remark-math": "1.0.6",
    "remark-parse": "8.0.3",
    resolve: "1.17.0",
    semver: "7.3.2",
    "string-width": "4.2.0",
    typescript: "4.0.2",
    "unicode-regex": "3.0.0",
    unified: "9.2.0",
    vnopts: "1.0.2",
    "yaml-unist-parser": "1.3.0"
  },
      i = {
    "@babel/core": "7.11.4",
    "@babel/preset-env": "7.11.0",
    "@babel/types": "7.11.0",
    "@glimmer/reference": "0.59.0",
    "@rollup/plugin-alias": "3.1.1",
    "@rollup/plugin-babel": "5.2.0",
    "@rollup/plugin-commonjs": "14.0.0",
    "@rollup/plugin-json": "4.1.0",
    "@rollup/plugin-node-resolve": "9.0.0",
    "@rollup/plugin-replace": "2.3.3",
    "@types/estree": "0.0.45",
    "@types/node": "14.6.0",
    "@typescript-eslint/types": "3.10.0",
    "babel-loader": "8.1.0",
    benchmark: "2.1.4",
    "builtin-modules": "3.1.0",
    "cross-env": "7.0.2",
    cspell: "4.1.0",
    eslint: "7.7.0",
    "eslint-config-prettier": "6.11.0",
    "eslint-formatter-friendly": "7.0.0",
    "eslint-plugin-import": "2.22.0",
    "eslint-plugin-jest": "23.20.0",
    "eslint-plugin-prettier-internal-rules": "file:scripts/tools/eslint-plugin-prettier-internal-rules",
    "eslint-plugin-react": "7.20.6",
    "eslint-plugin-unicorn": "21.0.0",
    execa: "4.0.3",
    jest: "26.4.2",
    "jest-snapshot-serializer-ansi": "1.0.0",
    "jest-snapshot-serializer-raw": "1.1.0",
    "jest-watch-typeahead": "0.6.0",
    "npm-run-all": "4.1.5",
    prettier: "2.1.0",
    rimraf: "3.0.2",
    rollup: "2.26.5",
    "rollup-plugin-node-globals": "1.4.0",
    "rollup-plugin-terser": "7.0.0",
    shelljs: "0.8.4",
    "snapshot-diff": "0.8.1",
    "strip-ansi": "6.0.0",
    "synchronous-promise": "2.0.13",
    tempy: "0.6.0",
    "terser-webpack-plugin": "4.1.0",
    webpack: "4.44.1"
  },
      s = {
    prepublishOnly: 'echo "Error: must publish from dist/" && exit 1',
    "prepare-release": "yarn && yarn build && yarn test:dist",
    test: "jest",
    "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest",
    "test:dist": "cross-env NODE_ENV=production jest",
    "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest",
    "test:integration": "jest tests_integration",
    "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
    "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
    "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null",
    lint: "run-p lint:*",
    "lint:typecheck": "tsc",
    "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly",
    "lint:changelog": "node ./scripts/lint-changelog.js",
    "lint:prettier": 'prettier . "!test*" --check',
    "lint:dist": 'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2016 "dist/!(bin-prettier|index|third-party).js"',
    "lint:spellcheck": 'cspell "**/*" ".github/**/*"',
    "lint:deps": "node ./scripts/check-deps.js",
    fix: "run-s fix:eslint fix:prettier",
    "fix:eslint": "yarn lint:eslint --fix",
    "fix:prettier": "yarn lint:prettier --write",
    build: "node ./scripts/build/build.js",
    "build-docs": "node ./scripts/build-docs.js"
  },
      l = {
    name: "prettier",
    version: "2.1.1",
    description: n,
    bin: r,
    repository: "prettier/prettier",
    homepage: "https://prettier.io",
    author: "James Long",
    license: "MIT",
    main: "./index.js",
    browser: "./standalone.js",
    unpkg: "./standalone.js",
    engines: u,
    files: o,
    dependencies: a,
    devDependencies: i,
    scripts: s
  },
      c = Object.freeze({
    __proto__: null,
    name: "prettier",
    version: "2.1.1",
    description: n,
    bin: r,
    repository: "prettier/prettier",
    homepage: "https://prettier.io",
    author: "James Long",
    license: "MIT",
    main: "./index.js",
    browser: "./standalone.js",
    unpkg: "./standalone.js",
    engines: u,
    files: o,
    dependencies: a,
    devDependencies: i,
    scripts: s,
    default: l
  });

  function p() {}

  function d(e, t, n, r, u) {
    for (var o = 0, a = t.length, i = 0, s = 0; o < a; o++) {
      var l = t[o];

      if (l.removed) {
        if (l.value = e.join(r.slice(s, s + l.count)), s += l.count, o && t[o - 1].added) {
          var c = t[o - 1];
          t[o - 1] = t[o], t[o] = c;
        }
      } else {
        if (!l.added && u) {
          var p = n.slice(i, i + l.count);
          p = p.map(function (e, t) {
            var n = r[s + t];
            return n.length > e.length ? n : e;
          }), l.value = e.join(p);
        } else l.value = e.join(n.slice(i, i + l.count));

        i += l.count, l.added || (s += l.count);
      }
    }

    var d = t[a - 1];
    return a > 1 && "string" == typeof d.value && (d.added || d.removed) && e.equals("", d.value) && (t[a - 2].value += d.value, t.pop()), t;
  }

  function f(e) {
    return {
      newPos: e.newPos,
      components: e.components.slice(0)
    };
  }

  p.prototype = {
    diff: function diff(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.callback;
      "function" == typeof n && (r = n, n = {}), this.options = n;
      var u = this;

      function o(e) {
        return r ? (setTimeout(function () {
          r(void 0, e);
        }, 0), !0) : e;
      }

      e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e));
      var a = (t = this.removeEmpty(this.tokenize(t))).length,
          i = e.length,
          s = 1,
          l = a + i,
          c = [{
        newPos: -1,
        components: []
      }],
          p = this.extractCommon(c[0], t, e, 0);
      if (c[0].newPos + 1 >= a && p + 1 >= i) return o([{
        value: this.join(t),
        count: t.length
      }]);

      function h() {
        for (var n = -1 * s; n <= s; n += 2) {
          var r = void 0,
              l = c[n - 1],
              p = c[n + 1],
              h = (p ? p.newPos : 0) - n;
          l && (c[n - 1] = void 0);
          var m = l && l.newPos + 1 < a,
              g = p && 0 <= h && h < i;

          if (m || g) {
            if (!m || g && l.newPos < p.newPos ? (r = f(p), u.pushComponent(r.components, void 0, !0)) : ((r = l).newPos++, u.pushComponent(r.components, !0, void 0)), h = u.extractCommon(r, t, e, n), r.newPos + 1 >= a && h + 1 >= i) return o(d(u, r.components, t, e, u.useLongestToken));
            c[n] = r;
          } else c[n] = void 0;
        }

        s++;
      }

      if (r) !function e() {
        setTimeout(function () {
          if (s > l) return r();
          h() || e();
        }, 0);
      }();else for (; s <= l;) {
        var m = h();
        if (m) return m;
      }
    },
    pushComponent: function pushComponent(e, t, n) {
      var r = e[e.length - 1];
      r && r.added === t && r.removed === n ? e[e.length - 1] = {
        count: r.count + 1,
        added: t,
        removed: n
      } : e.push({
        count: 1,
        added: t,
        removed: n
      });
    },
    extractCommon: function extractCommon(e, t, n, r) {
      for (var u = t.length, o = n.length, a = e.newPos, i = a - r, s = 0; a + 1 < u && i + 1 < o && this.equals(t[a + 1], n[i + 1]);) {
        a++, i++, s++;
      }

      return s && e.components.push({
        count: s
      }), e.newPos = a, i;
    },
    equals: function equals(e, t) {
      return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
    },
    removeEmpty: function removeEmpty(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        e[n] && t.push(e[n]);
      }

      return t;
    },
    castInput: function castInput(e) {
      return e;
    },
    tokenize: function tokenize(e) {
      return e.split("");
    },
    join: function join(e) {
      return e.join("");
    }
  };
  var h = new p();

  function m(e, t) {
    if ("function" == typeof e) t.callback = e;else if (e) for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }
    return t;
  }

  var g = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
      D = /\S/,
      y = new p();
  y.equals = function (e, t) {
    return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !D.test(e) && !D.test(t);
  }, y.tokenize = function (e) {
    for (var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0; n < t.length - 1; n++) {
      !t[n + 1] && t[n + 2] && g.test(t[n]) && g.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--);
    }

    return t;
  };
  var E = new p();

  function C(e, t, n) {
    return E.diff(e, t, n);
  }

  E.tokenize = function (e) {
    var t = [],
        n = e.split(/(\n|\r\n)/);
    n[n.length - 1] || n.pop();

    for (var r = 0; r < n.length; r++) {
      var u = n[r];
      r % 2 && !this.options.newlineIsToken ? t[t.length - 1] += u : (this.options.ignoreWhitespace && (u = u.trim()), t.push(u));
    }

    return t;
  };

  var b = new p();

  b.tokenize = function (e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  var A = new p();

  function v(e) {
    return (v = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function F(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  A.tokenize = function (e) {
    return e.split(/([{}:;,]|\s+)/);
  };

  var x = Object.prototype.toString,
      S = new p();

  function w(e, t, n, r, u) {
    var o, a;

    for (t = t || [], n = n || [], r && (e = r(u, e)), o = 0; o < t.length; o += 1) {
      if (t[o] === e) return n[o];
    }

    if ("[object Array]" === x.call(e)) {
      for (t.push(e), a = new Array(e.length), n.push(a), o = 0; o < e.length; o += 1) {
        a[o] = w(e[o], t, n, r, u);
      }

      return t.pop(), n.pop(), a;
    }

    if (e && e.toJSON && (e = e.toJSON()), "object" === v(e) && null !== e) {
      t.push(e), a = {}, n.push(a);
      var i,
          s = [];

      for (i in e) {
        e.hasOwnProperty(i) && s.push(i);
      }

      for (s.sort(), o = 0; o < s.length; o += 1) {
        a[i = s[o]] = w(e[i], t, n, r, i);
      }

      t.pop(), n.pop();
    } else a = e;

    return a;
  }

  S.useLongestToken = !0, S.tokenize = E.tokenize, S.castInput = function (e) {
    var t = this.options,
        n = t.undefinedReplacement,
        r = t.stringifyReplacer,
        u = void 0 === r ? function (e, t) {
      return void 0 === t ? n : t;
    } : r;
    return "string" == typeof e ? e : JSON.stringify(w(e, null, null, u), u, "  ");
  }, S.equals = function (e, t) {
    return p.prototype.equals.call(S, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
  };
  var B = new p();

  function T(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e.split(/\r\n|[\n\v\f\r\x85]/),
        r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        u = [],
        o = 0;

    function a() {
      var e = {};

      for (u.push(e); o < n.length;) {
        var r = n[o];
        if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) break;
        var a = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);
        a && (e.index = a[1]), o++;
      }

      for (i(e), i(e), e.hunks = []; o < n.length;) {
        var l = n[o];
        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(l)) break;
        if (/^@@/.test(l)) e.hunks.push(s());else {
          if (l && t.strict) throw new Error("Unknown line " + (o + 1) + " " + JSON.stringify(l));
          o++;
        }
      }
    }

    function i(e) {
      var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[o]);

      if (t) {
        var r = "---" === t[1] ? "old" : "new",
            u = t[2].split("\t", 2),
            a = u[0].replace(/\\\\/g, "\\");
        /^".*"$/.test(a) && (a = a.substr(1, a.length - 2)), e[r + "FileName"] = a, e[r + "Header"] = (u[1] || "").trim(), o++;
      }
    }

    function s() {
      for (var e = o, u = n[o++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), a = {
        oldStart: +u[1],
        oldLines: +u[2] || 1,
        newStart: +u[3],
        newLines: +u[4] || 1,
        lines: [],
        linedelimiters: []
      }, i = 0, s = 0; o < n.length && !(0 === n[o].indexOf("--- ") && o + 2 < n.length && 0 === n[o + 1].indexOf("+++ ") && 0 === n[o + 2].indexOf("@@")); o++) {
        var l = 0 == n[o].length && o != n.length - 1 ? " " : n[o][0];
        if ("+" !== l && "-" !== l && " " !== l && "\\" !== l) break;
        a.lines.push(n[o]), a.linedelimiters.push(r[o] || "\n"), "+" === l ? i++ : "-" === l ? s++ : " " === l && (i++, s++);
      }

      if (i || 1 !== a.newLines || (a.newLines = 0), s || 1 !== a.oldLines || (a.oldLines = 0), t.strict) {
        if (i !== a.newLines) throw new Error("Added line count did not match for hunk at line " + (e + 1));
        if (s !== a.oldLines) throw new Error("Removed line count did not match for hunk at line " + (e + 1));
      }

      return a;
    }

    for (; o < n.length;) {
      a();
    }

    return u;
  }

  function k(e, t, n) {
    var r = !0,
        u = !1,
        o = !1,
        a = 1;
    return function i() {
      if (r && !o) {
        if (u ? a++ : r = !1, e + a <= n) return a;
        o = !0;
      }

      if (!u) return o || (r = !0), t <= e - a ? -a++ : (u = !0, i());
    };
  }

  function N(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

    if ("string" == typeof t && (t = T(t)), Array.isArray(t)) {
      if (t.length > 1) throw new Error("applyPatch only works with a single input.");
      t = t[0];
    }

    var r,
        u,
        o = e.split(/\r\n|[\n\v\f\r\x85]/),
        a = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        i = t.hunks,
        s = n.compareLine || function (e, t, n, r) {
      return t === r;
    },
        l = 0,
        c = n.fuzzFactor || 0,
        p = 0,
        d = 0;

    function f(e, t) {
      for (var n = 0; n < e.lines.length; n++) {
        var r = e.lines[n],
            u = r.length > 0 ? r[0] : " ",
            a = r.length > 0 ? r.substr(1) : r;

        if (" " === u || "-" === u) {
          if (!s(t + 1, o[t], u, a) && ++l > c) return !1;
          t++;
        }
      }

      return !0;
    }

    for (var h = 0; h < i.length; h++) {
      for (var m = i[h], g = o.length - m.oldLines, D = 0, y = d + m.oldStart - 1, E = k(y, p, g); void 0 !== D; D = E()) {
        if (f(m, y + D)) {
          m.offset = d += D;
          break;
        }
      }

      if (void 0 === D) return !1;
      p = m.offset + m.oldStart + m.oldLines;
    }

    for (var C = 0, b = 0; b < i.length; b++) {
      var A = i[b],
          v = A.oldStart + A.offset + C - 1;
      C += A.newLines - A.oldLines, v < 0 && (v = 0);

      for (var F = 0; F < A.lines.length; F++) {
        var x = A.lines[F],
            S = x.length > 0 ? x[0] : " ",
            w = x.length > 0 ? x.substr(1) : x,
            B = A.linedelimiters[F];
        if (" " === S) v++;else if ("-" === S) o.splice(v, 1), a.splice(v, 1);else if ("+" === S) o.splice(v, 0, w), a.splice(v, 0, B), v++;else if ("\\" === S) {
          var N = A.lines[F - 1] ? A.lines[F - 1][0] : null;
          "+" === N ? r = !0 : "-" === N && (u = !0);
        }
      }
    }

    if (r) for (; !o[o.length - 1];) {
      o.pop(), a.pop();
    } else u && (o.push(""), a.push("\n"));

    for (var O = 0; O < o.length - 1; O++) {
      o[O] = o[O] + a[O];
    }

    return o.join("");
  }

  function O(e, t, n, r, u, o, a) {
    a || (a = {}), void 0 === a.context && (a.context = 4);
    var i = C(n, r, a);

    function s(e) {
      return e.map(function (e) {
        return " " + e;
      });
    }

    i.push({
      value: "",
      lines: []
    });

    for (var l = [], c = 0, p = 0, d = [], f = 1, h = 1, m = function m(e) {
      var t = i[e],
          u = t.lines || t.value.replace(/\n$/, "").split("\n");

      if (t.lines = u, t.added || t.removed) {
        var o;

        if (!c) {
          var m = i[e - 1];
          c = f, p = h, m && (d = a.context > 0 ? s(m.lines.slice(-a.context)) : [], c -= d.length, p -= d.length);
        }

        (o = d).push.apply(o, F(u.map(function (e) {
          return (t.added ? "+" : "-") + e;
        }))), t.added ? h += u.length : f += u.length;
      } else {
        if (c) if (u.length <= 2 * a.context && e < i.length - 2) {
          var g;
          (g = d).push.apply(g, F(s(u)));
        } else {
          var D,
              y = Math.min(u.length, a.context);
          (D = d).push.apply(D, F(s(u.slice(0, y))));
          var E = {
            oldStart: c,
            oldLines: f - c + y,
            newStart: p,
            newLines: h - p + y,
            lines: d
          };

          if (e >= i.length - 2 && u.length <= a.context) {
            var C = /\n$/.test(n),
                b = /\n$/.test(r),
                A = 0 == u.length && d.length > E.oldLines;
            !C && A && d.splice(E.oldLines, 0, "\\ No newline at end of file"), (C || A) && b || d.push("\\ No newline at end of file");
          }

          l.push(E), c = 0, p = 0, d = [];
        }
        f += u.length, h += u.length;
      }
    }, g = 0; g < i.length; g++) {
      m(g);
    }

    return {
      oldFileName: e,
      newFileName: t,
      oldHeader: u,
      newHeader: o,
      hunks: l
    };
  }

  function P(e, t, n, r, u, o, a) {
    var i = O(e, t, n, r, u, o, a),
        s = [];
    e == t && s.push("Index: " + e), s.push("==================================================================="), s.push("--- " + i.oldFileName + (void 0 === i.oldHeader ? "" : "\t" + i.oldHeader)), s.push("+++ " + i.newFileName + (void 0 === i.newHeader ? "" : "\t" + i.newHeader));

    for (var l = 0; l < i.hunks.length; l++) {
      var c = i.hunks[l];
      s.push("@@ -" + c.oldStart + "," + c.oldLines + " +" + c.newStart + "," + c.newLines + " @@"), s.push.apply(s, c.lines);
    }

    return s.join("\n") + "\n";
  }

  function _(e, t) {
    if (t.length > e.length) return !1;

    for (var n = 0; n < t.length; n++) {
      if (t[n] !== e[n]) return !1;
    }

    return !0;
  }

  function I(e) {
    var t = function e(t) {
      var n = 0,
          r = 0;
      return t.forEach(function (t) {
        if ("string" != typeof t) {
          var u = e(t.mine),
              o = e(t.theirs);
          void 0 !== n && (u.oldLines === o.oldLines ? n += u.oldLines : n = void 0), void 0 !== r && (u.newLines === o.newLines ? r += u.newLines : r = void 0);
        } else void 0 === r || "+" !== t[0] && " " !== t[0] || r++, void 0 === n || "-" !== t[0] && " " !== t[0] || n++;
      }), {
        oldLines: n,
        newLines: r
      };
    }(e.lines),
        n = t.oldLines,
        r = t.newLines;

    void 0 !== n ? e.oldLines = n : delete e.oldLines, void 0 !== r ? e.newLines = r : delete e.newLines;
  }

  function j(e, t) {
    if ("string" == typeof e) {
      if (/^@@/m.test(e) || /^Index:/m.test(e)) return T(e)[0];
      if (!t) throw new Error("Must provide a base reference or pass in a patch");
      return O(void 0, void 0, t, e);
    }

    return e;
  }

  function M(e) {
    return e.newFileName && e.newFileName !== e.oldFileName;
  }

  function L(e, t, n) {
    return t === n ? t : (e.conflict = !0, {
      mine: t,
      theirs: n
    });
  }

  function R(e, t) {
    return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart;
  }

  function q(e, t) {
    return {
      oldStart: e.oldStart,
      oldLines: e.oldLines,
      newStart: e.newStart + t,
      newLines: e.newLines,
      lines: e.lines
    };
  }

  function V(e, t, n, r, u) {
    var o = {
      offset: t,
      lines: n,
      index: 0
    },
        a = {
      offset: r,
      lines: u,
      index: 0
    };

    for (z(e, o, a), z(e, a, o); o.index < o.lines.length && a.index < a.lines.length;) {
      var i = o.lines[o.index],
          s = a.lines[a.index];
      if ("-" !== i[0] && "+" !== i[0] || "-" !== s[0] && "+" !== s[0]) {
        if ("+" === i[0] && " " === s[0]) {
          var l;
          (l = e.lines).push.apply(l, F(G(o)));
        } else if ("+" === s[0] && " " === i[0]) {
          var c;
          (c = e.lines).push.apply(c, F(G(a)));
        } else "-" === i[0] && " " === s[0] ? $(e, o, a) : "-" === s[0] && " " === i[0] ? $(e, a, o, !0) : i === s ? (e.lines.push(i), o.index++, a.index++) : U(e, G(o), G(a));
      } else W(e, o, a);
    }

    J(e, o), J(e, a), I(e);
  }

  function W(e, t, n) {
    var r = G(t),
        u = G(n);

    if (H(r) && H(u)) {
      var o, a;
      if (_(r, u) && X(n, r, r.length - u.length)) return void (o = e.lines).push.apply(o, F(r));
      if (_(u, r) && X(t, u, u.length - r.length)) return void (a = e.lines).push.apply(a, F(u));
    } else if (function (e, t) {
      return e.length === t.length && _(e, t);
    }(r, u)) {
      var i;
      return void (i = e.lines).push.apply(i, F(r));
    }

    U(e, r, u);
  }

  function $(e, t, n, r) {
    var u,
        o = G(t),
        a = function (e, t) {
      var n = [],
          r = [],
          u = 0,
          o = !1,
          a = !1;

      for (; u < t.length && e.index < e.lines.length;) {
        var i = e.lines[e.index],
            s = t[u];
        if ("+" === s[0]) break;
        if (o = o || " " !== i[0], r.push(s), u++, "+" === i[0]) for (a = !0; "+" === i[0];) {
          n.push(i), i = e.lines[++e.index];
        }
        s.substr(1) === i.substr(1) ? (n.push(i), e.index++) : a = !0;
      }

      "+" === (t[u] || "")[0] && o && (a = !0);
      if (a) return n;

      for (; u < t.length;) {
        r.push(t[u++]);
      }

      return {
        merged: r,
        changes: n
      };
    }(n, o);

    a.merged ? (u = e.lines).push.apply(u, F(a.merged)) : U(e, r ? a : o, r ? o : a);
  }

  function U(e, t, n) {
    e.conflict = !0, e.lines.push({
      conflict: !0,
      mine: t,
      theirs: n
    });
  }

  function z(e, t, n) {
    for (; t.offset < n.offset && t.index < t.lines.length;) {
      var r = t.lines[t.index++];
      e.lines.push(r), t.offset++;
    }
  }

  function J(e, t) {
    for (; t.index < t.lines.length;) {
      var n = t.lines[t.index++];
      e.lines.push(n);
    }
  }

  function G(e) {
    for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length;) {
      var r = e.lines[e.index];
      if ("-" === n && "+" === r[0] && (n = "+"), n !== r[0]) break;
      t.push(r), e.index++;
    }

    return t;
  }

  function H(e) {
    return e.reduce(function (e, t) {
      return e && "-" === t[0];
    }, !0);
  }

  function X(e, t, n) {
    for (var r = 0; r < n; r++) {
      var u = t[t.length - n + r].substr(1);
      if (e.lines[e.index + r] !== " " + u) return !1;
    }

    return e.index += n, !0;
  }

  function Y(e) {
    var t = e;
    return t = (t = (t = (t = t.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
  }

  B.tokenize = function (e) {
    return e.slice();
  }, B.join = B.removeEmpty = function (e) {
    return e;
  };
  var K = Object.freeze({
    __proto__: null,
    Diff: p,
    diffChars: function diffChars(e, t, n) {
      return h.diff(e, t, n);
    },
    diffWords: function diffWords(e, t, n) {
      return n = m(n, {
        ignoreWhitespace: !0
      }), y.diff(e, t, n);
    },
    diffWordsWithSpace: function diffWordsWithSpace(e, t, n) {
      return y.diff(e, t, n);
    },
    diffLines: C,
    diffTrimmedLines: function diffTrimmedLines(e, t, n) {
      var r = m(n, {
        ignoreWhitespace: !0
      });
      return E.diff(e, t, r);
    },
    diffSentences: function diffSentences(e, t, n) {
      return b.diff(e, t, n);
    },
    diffCss: function diffCss(e, t, n) {
      return A.diff(e, t, n);
    },
    diffJson: function diffJson(e, t, n) {
      return S.diff(e, t, n);
    },
    diffArrays: function diffArrays(e, t, n) {
      return B.diff(e, t, n);
    },
    structuredPatch: O,
    createTwoFilesPatch: P,
    createPatch: function createPatch(e, t, n, r, u, o) {
      return P(e, e, t, n, r, u, o);
    },
    applyPatch: N,
    applyPatches: function applyPatches(e, t) {
      "string" == typeof e && (e = T(e));
      var n = 0;
      !function r() {
        var u = e[n++];
        if (!u) return t.complete();
        t.loadFile(u, function (e, n) {
          if (e) return t.complete(e);
          var o = N(n, u, t);
          t.patched(u, o, function (e) {
            if (e) return t.complete(e);
            r();
          });
        });
      }();
    },
    parsePatch: T,
    merge: function merge(e, t, n) {
      e = j(e, n), t = j(t, n);
      var r = {};
      (e.index || t.index) && (r.index = e.index || t.index), (e.newFileName || t.newFileName) && (M(e) ? M(t) ? (r.oldFileName = L(r, e.oldFileName, t.oldFileName), r.newFileName = L(r, e.newFileName, t.newFileName), r.oldHeader = L(r, e.oldHeader, t.oldHeader), r.newHeader = L(r, e.newHeader, t.newHeader)) : (r.oldFileName = e.oldFileName, r.newFileName = e.newFileName, r.oldHeader = e.oldHeader, r.newHeader = e.newHeader) : (r.oldFileName = t.oldFileName || e.oldFileName, r.newFileName = t.newFileName || e.newFileName, r.oldHeader = t.oldHeader || e.oldHeader, r.newHeader = t.newHeader || e.newHeader)), r.hunks = [];

      for (var u = 0, o = 0, a = 0, i = 0; u < e.hunks.length || o < t.hunks.length;) {
        var s = e.hunks[u] || {
          oldStart: 1 / 0
        },
            l = t.hunks[o] || {
          oldStart: 1 / 0
        };
        if (R(s, l)) r.hunks.push(q(s, a)), u++, i += s.newLines - s.oldLines;else if (R(l, s)) r.hunks.push(q(l, i)), o++, a += l.newLines - l.oldLines;else {
          var c = {
            oldStart: Math.min(s.oldStart, l.oldStart),
            oldLines: 0,
            newStart: Math.min(s.newStart + a, l.oldStart + i),
            newLines: 0,
            lines: []
          };
          V(c, s.oldStart, s.lines, l.oldStart, l.lines), o++, u++, r.hunks.push(c);
        }
      }

      return r;
    },
    convertChangesToDMP: function convertChangesToDMP(e) {
      for (var t, n, r = [], u = 0; u < e.length; u++) {
        n = (t = e[u]).added ? 1 : t.removed ? -1 : 0, r.push([n, t.value]);
      }

      return r;
    },
    convertChangesToXML: function convertChangesToXML(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        r.added ? t.push("<ins>") : r.removed && t.push("<del>"), t.push(Y(r.value)), r.added ? t.push("</ins>") : r.removed && t.push("</del>");
      }

      return t.join("");
    },
    canonicalize: w
  });

  function Q(e) {
    return {
      type: "concat",
      parts: e
    };
  }

  function Z(e) {
    return {
      type: "indent",
      contents: e
    };
  }

  function ee(e, t) {
    return {
      type: "align",
      contents: t,
      n: e
    };
  }

  function te(e, t) {
    return {
      type: "group",
      id: (t = t || {}).id,
      contents: e,
      break: !!t.shouldBreak,
      expandedStates: t.expandedStates
    };
  }

  var ne = {
    type: "break-parent"
  },
      re = Q([{
    type: "line",
    hard: !0
  }, ne]),
      ue = Q([{
    type: "line",
    hard: !0,
    literal: !0
  }, ne]);

  var oe = {
    concat: Q,
    join: function join(e, t) {
      var n = [];

      for (var _r2 = 0; _r2 < t.length; _r2++) {
        0 !== _r2 && n.push(e), n.push(t[_r2]);
      }

      return Q(n);
    },
    line: {
      type: "line"
    },
    softline: {
      type: "line",
      soft: !0
    },
    hardline: re,
    literalline: ue,
    group: te,
    conditionalGroup: function conditionalGroup(e, t) {
      return te(e[0], Object.assign({}, t, {
        expandedStates: e
      }));
    },
    fill: function fill(e) {
      return {
        type: "fill",
        parts: e
      };
    },
    lineSuffix: function lineSuffix(e) {
      return {
        type: "line-suffix",
        contents: e
      };
    },
    lineSuffixBoundary: {
      type: "line-suffix-boundary"
    },
    cursor: {
      type: "cursor",
      placeholder: Symbol("cursor")
    },
    breakParent: ne,
    ifBreak: function ifBreak(e, t, n) {
      return {
        type: "if-break",
        breakContents: e,
        flatContents: t,
        groupId: (n = n || {}).groupId
      };
    },
    trim: {
      type: "trim"
    },
    indent: Z,
    align: ee,
    addAlignmentToDoc: function addAlignmentToDoc(e, t, n) {
      var r = e;

      if (t > 0) {
        for (var _e2 = 0; _e2 < Math.floor(t / n); ++_e2) {
          r = Z(r);
        }

        r = ee(t % n, r), r = ee(-1 / 0, r);
      }

      return r;
    },
    markAsRoot: function markAsRoot(e) {
      return ee({
        type: "root"
      }, e);
    },
    dedentToRoot: function dedentToRoot(e) {
      return ee(-1 / 0, e);
    },
    dedent: function dedent(e) {
      return ee(-1, e);
    }
  },
      ae = function ae(e) {
    return "string" == typeof e ? e.replace(function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$onlyFirst = _ref.onlyFirst,
          e = _ref$onlyFirst === void 0 ? !1 : _ref$onlyFirst;

      var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? void 0 : "g");
    }(), "") : e;
  };

  var ie = function ie(e) {
    return !Number.isNaN(e) && e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141);
  };

  var se = ie,
      le = ie;
  se.default = le;

  var ce = function ce(e) {
    if ("string" != typeof (e = e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) || 0 === e.length) return 0;
    e = ae(e);
    var t = 0;

    for (var _n2 = 0; _n2 < e.length; _n2++) {
      var _r3 = e.codePointAt(_n2);

      _r3 <= 31 || _r3 >= 127 && _r3 <= 159 || _r3 >= 768 && _r3 <= 879 || (_r3 > 65535 && _n2++, t += se(_r3) ? 2 : 1);
    }

    return t;
  };

  var pe = ce,
      de = ce;
  pe.default = de;

  var fe = function fe(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  },
      he = function he(e) {
    return e[e.length - 1];
  },
      me = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

  function ge() {
    throw new Error("setTimeout has not been defined");
  }

  function De() {
    throw new Error("clearTimeout has not been defined");
  }

  var ye = ge,
      Ee = De;

  function Ce(e) {
    if (ye === setTimeout) return setTimeout(e, 0);
    if ((ye === ge || !ye) && setTimeout) return ye = setTimeout, setTimeout(e, 0);

    try {
      return ye(e, 0);
    } catch (t) {
      try {
        return ye.call(null, e, 0);
      } catch (t) {
        return ye.call(this, e, 0);
      }
    }
  }

  "function" == typeof me.setTimeout && (ye = setTimeout), "function" == typeof me.clearTimeout && (Ee = clearTimeout);
  var be,
      Ae = [],
      ve = !1,
      Fe = -1;

  function xe() {
    ve && be && (ve = !1, be.length ? Ae = be.concat(Ae) : Fe = -1, Ae.length && Se());
  }

  function Se() {
    if (!ve) {
      var e = Ce(xe);
      ve = !0;

      for (var t = Ae.length; t;) {
        for (be = Ae, Ae = []; ++Fe < t;) {
          be && be[Fe].run();
        }

        Fe = -1, t = Ae.length;
      }

      be = null, ve = !1, function (e) {
        if (Ee === clearTimeout) return clearTimeout(e);
        if ((Ee === De || !Ee) && clearTimeout) return Ee = clearTimeout, clearTimeout(e);

        try {
          Ee(e);
        } catch (t) {
          try {
            return Ee.call(null, e);
          } catch (t) {
            return Ee.call(this, e);
          }
        }
      }(e);
    }
  }

  function we(e, t) {
    this.fun = e, this.array = t;
  }

  we.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  function Be() {}

  var Te = Be,
      ke = Be,
      Ne = Be,
      Oe = Be,
      Pe = Be,
      _e = Be,
      Ie = Be;

  var je = me.performance || {},
      Me = je.now || je.mozNow || je.msNow || je.oNow || je.webkitNow || function () {
    return new Date().getTime();
  };

  var Le = new Date();
  var Re = {
    nextTick: function nextTick(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }
      Ae.push(new we(e, t)), 1 !== Ae.length || ve || Ce(Se);
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: Te,
    addListener: ke,
    once: Ne,
    off: Oe,
    removeListener: Pe,
    removeAllListeners: _e,
    emit: Ie,
    binding: function binding(e) {
      throw new Error("process.binding is not supported");
    },
    cwd: function cwd() {
      return "/";
    },
    chdir: function chdir(e) {
      throw new Error("process.chdir is not supported");
    },
    umask: function umask() {
      return 0;
    },
    hrtime: function hrtime(e) {
      var t = .001 * Me.call(je),
          n = Math.floor(t),
          r = Math.floor(t % 1 * 1e9);
      return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r];
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function uptime() {
      return (new Date() - Le) / 1e3;
    }
  };
  var qe = "object" == _typeof(Re) && Re.env && Re.env.NODE_DEBUG && /\bsemver\b/i.test(Re.env.NODE_DEBUG) ? function () {
    var _console;

    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }

    return (_console = console).error.apply(_console, ["SEMVER"].concat(e));
  } : function () {};
  var Ve = {
    SEMVER_SPEC_VERSION: "2.0.0",
    MAX_LENGTH: 256,
    MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
    MAX_SAFE_COMPONENT_LENGTH: 16
  },
      We = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function $e(e, t, n) {
    return e(n = {
      path: t,
      exports: {},
      require: function require(e, t) {
        return function () {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(null == t && n.path);
      }
    }, n.exports), n.exports;
  }

  function Ue(e) {
    return e && e.default || e;
  }

  var ze = $e(function (e, t) {
    var n = Ve.MAX_SAFE_COMPONENT_LENGTH,
        r = (t = e.exports = {}).re = [],
        u = t.src = [],
        o = t.t = {};
    var a = 0;

    var i = function i(e, t, n) {
      var i = a++;
      qe(i, t), o[e] = i, u[i] = t, r[i] = new RegExp(t, n ? "g" : void 0);
    };

    i("NUMERICIDENTIFIER", "0|[1-9]\\d*"), i("NUMERICIDENTIFIERLOOSE", "[0-9]+"), i("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), i("MAINVERSION", "(".concat(u[o.NUMERICIDENTIFIER], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIER], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIER], ")")), i("MAINVERSIONLOOSE", "(".concat(u[o.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u[o.NUMERICIDENTIFIERLOOSE], ")")), i("PRERELEASEIDENTIFIER", "(?:".concat(u[o.NUMERICIDENTIFIER], "|").concat(u[o.NONNUMERICIDENTIFIER], ")")), i("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(u[o.NUMERICIDENTIFIERLOOSE], "|").concat(u[o.NONNUMERICIDENTIFIER], ")")), i("PRERELEASE", "(?:-(".concat(u[o.PRERELEASEIDENTIFIER], "(?:\\.").concat(u[o.PRERELEASEIDENTIFIER], ")*))")), i("PRERELEASELOOSE", "(?:-?(".concat(u[o.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(u[o.PRERELEASEIDENTIFIERLOOSE], ")*))")), i("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), i("BUILD", "(?:\\+(".concat(u[o.BUILDIDENTIFIER], "(?:\\.").concat(u[o.BUILDIDENTIFIER], ")*))")), i("FULLPLAIN", "v?".concat(u[o.MAINVERSION]).concat(u[o.PRERELEASE], "?").concat(u[o.BUILD], "?")), i("FULL", "^".concat(u[o.FULLPLAIN], "$")), i("LOOSEPLAIN", "[v=\\s]*".concat(u[o.MAINVERSIONLOOSE]).concat(u[o.PRERELEASELOOSE], "?").concat(u[o.BUILD], "?")), i("LOOSE", "^".concat(u[o.LOOSEPLAIN], "$")), i("GTLT", "((?:<|>)?=?)"), i("XRANGEIDENTIFIERLOOSE", "".concat(u[o.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), i("XRANGEIDENTIFIER", "".concat(u[o.NUMERICIDENTIFIER], "|x|X|\\*")), i("XRANGEPLAIN", "[v=\\s]*(".concat(u[o.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIER], ")") + "(?:".concat(u[o.PRERELEASE], ")?").concat(u[o.BUILD], "?") + ")?)?"), i("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(u[o.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u[o.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(u[o.PRERELEASELOOSE], ")?").concat(u[o.BUILD], "?") + ")?)?"), i("XRANGE", "^".concat(u[o.GTLT], "\\s*").concat(u[o.XRANGEPLAIN], "$")), i("XRANGELOOSE", "^".concat(u[o.GTLT], "\\s*").concat(u[o.XRANGEPLAINLOOSE], "$")), i("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:$|[^\\d])"), i("COERCERTL", u[o.COERCE], !0), i("LONETILDE", "(?:~>?)"), i("TILDETRIM", "(\\s*)".concat(u[o.LONETILDE], "\\s+"), !0), t.tildeTrimReplace = "$1~", i("TILDE", "^".concat(u[o.LONETILDE]).concat(u[o.XRANGEPLAIN], "$")), i("TILDELOOSE", "^".concat(u[o.LONETILDE]).concat(u[o.XRANGEPLAINLOOSE], "$")), i("LONECARET", "(?:\\^)"), i("CARETTRIM", "(\\s*)".concat(u[o.LONECARET], "\\s+"), !0), t.caretTrimReplace = "$1^", i("CARET", "^".concat(u[o.LONECARET]).concat(u[o.XRANGEPLAIN], "$")), i("CARETLOOSE", "^".concat(u[o.LONECARET]).concat(u[o.XRANGEPLAINLOOSE], "$")), i("COMPARATORLOOSE", "^".concat(u[o.GTLT], "\\s*(").concat(u[o.LOOSEPLAIN], ")$|^$")), i("COMPARATOR", "^".concat(u[o.GTLT], "\\s*(").concat(u[o.FULLPLAIN], ")$|^$")), i("COMPARATORTRIM", "(\\s*)".concat(u[o.GTLT], "\\s*(").concat(u[o.LOOSEPLAIN], "|").concat(u[o.XRANGEPLAIN], ")"), !0), t.comparatorTrimReplace = "$1$2$3", i("HYPHENRANGE", "^\\s*(".concat(u[o.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(u[o.XRANGEPLAIN], ")") + "\\s*$"), i("HYPHENRANGELOOSE", "^\\s*(".concat(u[o.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(u[o.XRANGEPLAINLOOSE], ")") + "\\s*$"), i("STAR", "(<|>)?=?\\s*\\*"), i("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), i("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
  });

  var Je = /^[0-9]+$/,
      Ge = function Ge(e, t) {
    var n = Je.test(e),
        r = Je.test(t);
    return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
  };

  var He = {
    compareIdentifiers: Ge,
    rcompareIdentifiers: function rcompareIdentifiers(e, t) {
      return Ge(t, e);
    }
  };
  var Xe = Ve.MAX_LENGTH,
      Ye = Ve.MAX_SAFE_INTEGER,
      Ke = ze.re,
      Qe = ze.t,
      Ze = He.compareIdentifiers;

  var et = /*#__PURE__*/function () {
    function et(e, t) {
      _classCallCheck(this, et);

      if (t && "object" == _typeof(t) || (t = {
        loose: !!t,
        includePrerelease: !1
      }), e instanceof et) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if ("string" != typeof e) throw new TypeError("Invalid Version: ".concat(e));

      if (e.length > Xe) throw new TypeError("version is longer than ".concat(Xe, " characters"));
      qe("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      var n = e.trim().match(t.loose ? Ke[Qe.LOOSE] : Ke[Qe.FULL]);
      if (!n) throw new TypeError("Invalid Version: ".concat(e));
      if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Ye || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > Ye || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > Ye || this.patch < 0) throw new TypeError("Invalid patch version");
      n[4] ? this.prerelease = n[4].split(".").map(function (e) {
        if (/^[0-9]+$/.test(e)) {
          var _t2 = +e;

          if (_t2 >= 0 && _t2 < Ye) return _t2;
        }

        return e;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
    }

    _createClass(et, [{
      key: "format",
      value: function format() {
        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.version;
      }
    }, {
      key: "compare",
      value: function compare(e) {
        if (qe("SemVer.compare", this.version, this.options, e), !(e instanceof et)) {
          if ("string" == typeof e && e === this.version) return 0;
          e = new et(e, this.options);
        }

        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
      }
    }, {
      key: "compareMain",
      value: function compareMain(e) {
        return e instanceof et || (e = new et(e, this.options)), Ze(this.major, e.major) || Ze(this.minor, e.minor) || Ze(this.patch, e.patch);
      }
    }, {
      key: "comparePre",
      value: function comparePre(e) {
        if (e instanceof et || (e = new et(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;

        do {
          var _n3 = this.prerelease[t],
              _r4 = e.prerelease[t];
          if (qe("prerelease compare", t, _n3, _r4), void 0 === _n3 && void 0 === _r4) return 0;
          if (void 0 === _r4) return 1;
          if (void 0 === _n3) return -1;
          if (_n3 !== _r4) return Ze(_n3, _r4);
        } while (++t);
      }
    }, {
      key: "compareBuild",
      value: function compareBuild(e) {
        e instanceof et || (e = new et(e, this.options));
        var t = 0;

        do {
          var _n4 = this.build[t],
              _r5 = e.build[t];
          if (qe("prerelease compare", t, _n4, _r5), void 0 === _n4 && void 0 === _r5) return 0;
          if (void 0 === _r5) return 1;
          if (void 0 === _n4) return -1;
          if (_n4 !== _r5) return Ze(_n4, _r5);
        } while (++t);
      }
    }, {
      key: "inc",
      value: function inc(e, t) {
        switch (e) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
            break;

          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
            break;

          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
            break;

          case "prerelease":
            0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
            break;

          case "major":
            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;

          case "minor":
            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
            break;

          case "patch":
            0 === this.prerelease.length && this.patch++, this.prerelease = [];
            break;

          case "pre":
            if (0 === this.prerelease.length) this.prerelease = [0];else {
              var _e3 = this.prerelease.length;

              for (; --_e3 >= 0;) {
                "number" == typeof this.prerelease[_e3] && (this.prerelease[_e3]++, _e3 = -2);
              }

              -1 === _e3 && this.prerelease.push(0);
            }
            t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
            break;

          default:
            throw new Error("invalid increment argument: ".concat(e));
        }

        return this.format(), this.raw = this.version, this;
      }
    }]);

    return et;
  }();

  var tt = et;

  var nt = function nt(e, t, n) {
    return new tt(e, n).compare(new tt(t, n));
  };

  var rt = function rt(e, t, n) {
    return nt(e, t, n) < 0;
  };

  var ut = function ut(e, t, n) {
    return nt(e, t, n) >= 0;
  },
      ot = $e(function (e, t) {
    function n() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
    }

    function r() {
      return "undefined" != typeof WeakMap ? new WeakMap() : {
        add: n,
        delete: n,
        get: n,
        set: n,
        has: function has(e) {
          return !1;
        }
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = Object.prototype.hasOwnProperty,
        o = function o(e, t) {
      return u.call(e, t);
    };

    function a(e, t) {
      for (var n in t) {
        o(t, n) && (e[n] = t[n]);
      }

      return e;
    }

    var i = /^[ \t]*(?:\r\n|\r|\n)/,
        s = /(?:\r\n|\r|\n)[ \t]*$/,
        l = /^(?:[\r\n]|$)/,
        c = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/;

    function d(e, t, n) {
      var r = 0,
          u = e[0].match(c);
      u && (r = u[1].length);
      var o = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");
      t && (e = e.slice(1));
      var a = n.newline,
          l = n.trimLeadingNewline,
          p = n.trimTrailingNewline,
          d = "string" == typeof a,
          f = e.length;
      return e.map(function (e, t) {
        return e = e.replace(o, "$1"), 0 === t && l && (e = e.replace(i, "")), t === f - 1 && p && (e = e.replace(s, "")), d && (e = e.replace(/\r\n|\n|\r/g, function (e) {
          return a;
        })), e;
      });
    }

    function f(e, t) {
      for (var n = "", r = 0, u = e.length; r < u; r++) {
        n += e[r], r < u - 1 && (n += t[r]);
      }

      return n;
    }

    function h(e) {
      return o(e, "raw") && o(e, "length");
    }

    var m = function e(t) {
      var n = r(),
          u = r();
      return a(function r(o) {
        for (var i = [], s = 1; s < arguments.length; s++) {
          i[s - 1] = arguments[s];
        }

        if (h(o)) {
          var c = o,
              g = (i[0] === r || i[0] === m) && p.test(c[0]) && l.test(c[1]),
              D = g ? u : n,
              y = D.get(c);
          if (y || (y = d(c, g, t), D.set(c, y)), 0 === i.length) return y[0];
          var E = f(y, g ? i.slice(1) : i);
          return E;
        }

        return e(a(a({}, t), o || {}));
      }, {
        string: function string(e) {
          return d([e], !1, t)[0];
        }
      });
    }({
      trimLeadingNewline: !0,
      trimTrailingNewline: !0
    });

    t.outdent = m, t.default = m;

    try {
      e.exports = m, Object.defineProperty(m, "__esModule", {
        value: !0
      }), m.default = m, m.outdent = m;
    } catch (e) {}
  });

  function at() {
    var e = t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);
    return at = function at() {
      return e;
    }, e;
  }

  function it() {
    var e = t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
    return it = function it() {
      return e;
    }, e;
  }

  function st() {
    var e = t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
    return st = function st() {
      return e;
    }, e;
  }

  function lt() {
    var e = t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);
    return lt = function lt() {
      return e;
    }, e;
  }

  function ct() {
    var e = t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);
    return ct = function ct() {
      return e;
    }, e;
  }

  function pt() {
    var e = t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);
    return pt = function pt() {
      return e;
    }, e;
  }

  var dt = ot.outdent;
  var ft = {
    CATEGORY_CONFIG: "Config",
    CATEGORY_EDITOR: "Editor",
    CATEGORY_FORMAT: "Format",
    CATEGORY_OTHER: "Other",
    CATEGORY_OUTPUT: "Output",
    CATEGORY_GLOBAL: "Global",
    CATEGORY_SPECIAL: "Special",
    options: {
      cursorOffset: {
        since: "1.4.0",
        category: "Special",
        type: "int",
        default: -1,
        range: {
          start: -1,
          end: 1 / 0,
          step: 1
        },
        description: dt(pt()),
        cliCategory: "Editor"
      },
      endOfLine: {
        since: "1.15.0",
        category: "Global",
        type: "choice",
        default: [{
          since: "1.15.0",
          value: "auto"
        }, {
          since: "2.0.0",
          value: "lf"
        }],
        description: "Which end of line characters to apply.",
        choices: [{
          value: "lf",
          description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
        }, {
          value: "crlf",
          description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
        }, {
          value: "cr",
          description: "Carriage Return character only (\\r), used very rarely"
        }, {
          value: "auto",
          description: dt(ct())
        }]
      },
      filepath: {
        since: "1.4.0",
        category: "Special",
        type: "path",
        description: "Specify the input filepath. This will be used to do parser inference.",
        cliName: "stdin-filepath",
        cliCategory: "Other",
        cliDescription: "Path to the file to pretend that stdin comes from."
      },
      insertPragma: {
        since: "1.8.0",
        category: "Special",
        type: "boolean",
        default: !1,
        description: "Insert @format pragma into file's first docblock comment.",
        cliCategory: "Other"
      },
      parser: {
        since: "0.0.10",
        category: "Global",
        type: "choice",
        default: [{
          since: "0.0.10",
          value: "babylon"
        }, {
          since: "1.13.0",
          value: void 0
        }],
        description: "Which parser to use.",
        exception: function exception(e) {
          return "string" == typeof e || "function" == typeof e;
        },
        choices: [{
          value: "flow",
          description: "Flow"
        }, {
          value: "babel",
          since: "1.16.0",
          description: "JavaScript"
        }, {
          value: "babel-flow",
          since: "1.16.0",
          description: "Flow"
        }, {
          value: "babel-ts",
          since: "2.0.0",
          description: "TypeScript"
        }, {
          value: "typescript",
          since: "1.4.0",
          description: "TypeScript"
        }, {
          value: "css",
          since: "1.7.1",
          description: "CSS"
        }, {
          value: "less",
          since: "1.7.1",
          description: "Less"
        }, {
          value: "scss",
          since: "1.7.1",
          description: "SCSS"
        }, {
          value: "json",
          since: "1.5.0",
          description: "JSON"
        }, {
          value: "json5",
          since: "1.13.0",
          description: "JSON5"
        }, {
          value: "json-stringify",
          since: "1.13.0",
          description: "JSON.stringify"
        }, {
          value: "graphql",
          since: "1.5.0",
          description: "GraphQL"
        }, {
          value: "markdown",
          since: "1.8.0",
          description: "Markdown"
        }, {
          value: "mdx",
          since: "1.15.0",
          description: "MDX"
        }, {
          value: "vue",
          since: "1.10.0",
          description: "Vue"
        }, {
          value: "yaml",
          since: "1.14.0",
          description: "YAML"
        }, {
          value: "glimmer",
          since: null,
          description: "Handlebars"
        }, {
          value: "html",
          since: "1.15.0",
          description: "HTML"
        }, {
          value: "angular",
          since: "1.15.0",
          description: "Angular"
        }, {
          value: "lwc",
          since: "1.17.0",
          description: "Lightning Web Components"
        }]
      },
      plugins: {
        since: "1.10.0",
        type: "path",
        array: !0,
        default: [{
          value: []
        }],
        category: "Global",
        description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
        exception: function exception(e) {
          return "string" == typeof e || "object" == _typeof(e);
        },
        cliName: "plugin",
        cliCategory: "Config"
      },
      pluginSearchDirs: {
        since: "1.13.0",
        type: "path",
        array: !0,
        default: [{
          value: []
        }],
        category: "Global",
        description: dt(lt()),
        exception: function exception(e) {
          return "string" == typeof e || "object" == _typeof(e);
        },
        cliName: "plugin-search-dir",
        cliCategory: "Config"
      },
      printWidth: {
        since: "0.0.0",
        category: "Global",
        type: "int",
        default: 80,
        description: "The line length where Prettier will try wrap.",
        range: {
          start: 0,
          end: 1 / 0,
          step: 1
        }
      },
      rangeEnd: {
        since: "1.4.0",
        category: "Special",
        type: "int",
        default: 1 / 0,
        range: {
          start: 0,
          end: 1 / 0,
          step: 1
        },
        description: dt(st()),
        cliCategory: "Editor"
      },
      rangeStart: {
        since: "1.4.0",
        category: "Special",
        type: "int",
        default: 0,
        range: {
          start: 0,
          end: 1 / 0,
          step: 1
        },
        description: dt(it()),
        cliCategory: "Editor"
      },
      requirePragma: {
        since: "1.7.0",
        category: "Special",
        type: "boolean",
        default: !1,
        description: dt(at()),
        cliCategory: "Other"
      },
      tabWidth: {
        type: "int",
        category: "Global",
        default: 2,
        description: "Number of spaces per indentation level.",
        range: {
          start: 0,
          end: 1 / 0,
          step: 1
        }
      },
      useTabs: {
        since: "1.0.0",
        category: "Global",
        type: "boolean",
        default: !1,
        description: "Indent with tabs instead of spaces."
      },
      embeddedLanguageFormatting: {
        since: "2.1.0",
        category: "Global",
        type: "choice",
        default: [{
          since: "2.1.0",
          value: "auto"
        }],
        description: "Control how Prettier formats quoted code embedded in the file.",
        choices: [{
          value: "auto",
          description: "Format embedded code if Prettier can automatically identify it."
        }, {
          value: "off",
          description: "Never automatically format embedded code."
        }]
      }
    }
  },
      ht = Ue(c);
  var mt = {
    compare: nt,
    lt: rt,
    gte: ut
  },
      gt = ht.version,
      Dt = ft.options;
  var yt = {
    getSupportInfo: function getSupportInfo() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$plugins = _ref2.plugins,
          t = _ref2$plugins === void 0 ? [] : _ref2$plugins,
          _ref2$showUnreleased = _ref2.showUnreleased,
          n = _ref2$showUnreleased === void 0 ? !1 : _ref2$showUnreleased,
          _ref2$showDeprecated = _ref2.showDeprecated,
          r = _ref2$showDeprecated === void 0 ? !1 : _ref2$showDeprecated,
          _ref2$showInternal = _ref2.showInternal,
          u = _ref2$showInternal === void 0 ? !1 : _ref2$showInternal;

      var o = gt.split("-", 1)[0],
          a = t.reduce(function (e, t) {
        return e.concat(t.languages || []);
      }, []).filter(s),
          i = function (e, t) {
        return Object.entries(e).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              e = _ref4[0],
              n = _ref4[1];

          return Object.assign(_defineProperty({}, t, e), n);
        });
      }(Object.assign.apply(Object, [{}].concat(_toConsumableArray(t.map(function (_ref5) {
        var e = _ref5.options;
        return e;
      })), [Dt])), "name").filter(function (e) {
        return s(e) && l(e);
      }).sort(function (e, t) {
        return e.name === t.name ? 0 : e.name < t.name ? -1 : 1;
      }).map(function (t) {
        if (u) return t;
        return e(t, ["cliName", "cliCategory", "cliDescription"]);
      }).map(function (e) {
        e = Object.assign({}, e), Array.isArray(e.default) && (e.default = 1 === e.default.length ? e.default[0].value : e.default.filter(s).sort(function (e, t) {
          return mt.compare(t.since, e.since);
        })[0].value), Array.isArray(e.choices) && (e.choices = e.choices.filter(function (e) {
          return s(e) && l(e);
        }), "parser" === e.name && function (e, t, n) {
          var r = new Set(e.choices.map(function (e) {
            return e.value;
          }));

          var _iterator = _createForOfIteratorHelper(t),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _u2 = _step.value;

              if (_u2.parsers) {
                var _iterator2 = _createForOfIteratorHelper(_u2.parsers),
                    _step2;

                try {
                  var _loop = function _loop() {
                    var t = _step2.value;

                    if (!r.has(t)) {
                      r.add(t);

                      var _o2 = n.find(function (e) {
                        return e.parsers && e.parsers[t];
                      });

                      var _a2 = _u2.name;
                      _o2 && _o2.name && (_a2 += " (plugin: ".concat(_o2.name, ")")), e.choices.push({
                        value: t,
                        description: _a2
                      });
                    }
                  };

                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }(e, a, t));
        var n = t.filter(function (t) {
          return t.defaultOptions && void 0 !== t.defaultOptions[e.name];
        }).reduce(function (t, n) {
          return t[n.name] = n.defaultOptions[e.name], t;
        }, {});
        return Object.assign({}, e, {
          pluginDefaults: n
        });
      });

      return {
        languages: a,
        options: i
      };

      function s(e) {
        return n || !("since" in e) || e.since && mt.gte(o, e.since);
      }

      function l(e) {
        return r || !("deprecated" in e) || e.deprecated && mt.lt(o, e.deprecated);
      }
    }
  };
  var Et = /[^\x20-\x7F]/;

  function Ct(e) {
    return function (t, n, r) {
      var u = r && r.backwards;
      if (!1 === n) return !1;
      var o = t.length;
      var a = n;

      for (; a >= 0 && a < o;) {
        var _n5 = t.charAt(a);

        if (e instanceof RegExp) {
          if (!e.test(_n5)) return a;
        } else if (!e.includes(_n5)) return a;

        u ? a-- : a++;
      }

      return (-1 === a || a === o) && a;
    };
  }

  var bt = Ct(/\s/),
      At = Ct(" \t"),
      vt = Ct(",; \t"),
      Ft = Ct(/[^\n\r]/);

  function xt(e, t) {
    if (!1 === t) return !1;
    if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) for (var _n6 = t + 2; _n6 < e.length; ++_n6) {
      if ("*" === e.charAt(_n6) && "/" === e.charAt(_n6 + 1)) return _n6 + 2;
    }
    return t;
  }

  function St(e, t) {
    return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? Ft(e, t) : t);
  }

  function wt(e, t, n) {
    var r = n && n.backwards;
    if (!1 === t) return !1;
    var u = e.charAt(t);

    if (r) {
      if ("\r" === e.charAt(t - 1) && "\n" === u) return t - 2;
      if ("\n" === u || "\r" === u || "\u2028" === u || "\u2029" === u) return t - 1;
    } else {
      if ("\r" === u && "\n" === e.charAt(t + 1)) return t + 2;
      if ("\n" === u || "\r" === u || "\u2028" === u || "\u2029" === u) return t + 1;
    }

    return t;
  }

  function Bt(e, t, n) {
    var r = At(e, (n = n || {}).backwards ? t - 1 : t, n);
    return r !== wt(e, r, n);
  }

  function Tt(e, t) {
    var n = null,
        r = t;

    for (; r !== n;) {
      n = r, r = vt(e, r), r = xt(e, r), r = At(e, r);
    }

    return r = St(e, r), r = wt(e, r), !1 !== r && Bt(e, r);
  }

  function kt(e, t) {
    var n = null,
        r = t;

    for (; r !== n;) {
      n = r, r = At(e, r), r = xt(e, r), r = St(e, r), r = wt(e, r);
    }

    return r;
  }

  function Nt(e, t, n) {
    return kt(e, n(t));
  }

  function Ot(e, t, n) {
    var r = 0;

    for (var _u3 = n = n || 0; _u3 < e.length; ++_u3) {
      "\t" === e[_u3] ? r = r + t - r % t : r++;
    }

    return r;
  }

  function Pt(e, t) {
    var n = e.slice(1, -1),
        r = {
      quote: '"',
      regex: /"/g
    },
        u = {
      quote: "'",
      regex: /'/g
    },
        o = "'" === t ? u : r,
        a = o === u ? r : u;
    var i = o.quote;

    if (n.includes(o.quote) || n.includes(a.quote)) {
      i = (n.match(o.regex) || []).length > (n.match(a.regex) || []).length ? a.quote : o.quote;
    }

    return i;
  }

  function _t(e, t, n) {
    var r = '"' === t ? "'" : '"',
        u = e.replace(/\\([\S\s])|(["'])/g, function (e, u, o) {
      return u === r ? u : o === t ? "\\" + o : o || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(u) ? u : "\\" + u);
    });
    return t + u + t;
  }

  function It(e) {
    return e && (e.comments && e.comments.length > 0 && e.comments.some(function (e) {
      return jt(e) && !e.unignore;
    }) || e.prettierIgnore);
  }

  function jt(e) {
    return "prettier-ignore" === e.value.trim();
  }

  function Mt(e, t) {
    (e.comments || (e.comments = [])).push(t), t.printed = !1, "JSXText" === e.type && (t.printed = !0);
  }

  var Lt = {
    replaceEndOfLineWith: function replaceEndOfLineWith(e, t) {
      var n = [];

      var _iterator3 = _createForOfIteratorHelper(e.split("\n")),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _r6 = _step3.value;
          0 !== n.length && n.push(t), n.push(_r6);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return n;
    },
    getStringWidth: function getStringWidth(e) {
      return e ? Et.test(e) ? pe(e) : e.length : 0;
    },
    getMaxContinuousCount: function getMaxContinuousCount(e, t) {
      var n = e.match(new RegExp("(".concat(fe(t), ")+"), "g"));
      return null === n ? 0 : n.reduce(function (e, n) {
        return Math.max(e, n.length / t.length);
      }, 0);
    },
    getMinNotPresentContinuousCount: function getMinNotPresentContinuousCount(e, t) {
      var n = e.match(new RegExp("(".concat(fe(t), ")+"), "g"));
      if (null === n) return 0;
      var r = new Map();
      var u = 0;

      var _iterator4 = _createForOfIteratorHelper(n),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _e5 = _step4.value;

          var _n7 = _e5.length / t.length;

          r.set(_n7, !0), _n7 > u && (u = _n7);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      for (var _e4 = 1; _e4 < u; _e4++) {
        if (!r.get(_e4)) return _e4;
      }

      return u + 1;
    },
    getParserName: function getParserName(e, t) {
      var n = yt.getSupportInfo({
        plugins: t.plugins
      }).languages.find(function (t) {
        return t.name.toLowerCase() === e || t.aliases && t.aliases.includes(e) || t.extensions && t.extensions.some(function (t) {
          return t === ".".concat(e);
        });
      });
      return n ? n.parsers[0] : null;
    },
    getPenultimate: function getPenultimate(e) {
      return e[e.length - 2];
    },
    getLast: he,
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: kt,
    getNextNonSpaceNonCommentCharacterIndex: Nt,
    getNextNonSpaceNonCommentCharacter: function getNextNonSpaceNonCommentCharacter(e, t, n) {
      return e.charAt(Nt(e, t, n));
    },
    skip: Ct,
    skipWhitespace: bt,
    skipSpaces: At,
    skipToLineEnd: vt,
    skipEverythingButNewLine: Ft,
    skipInlineComment: xt,
    skipTrailingComment: St,
    skipNewline: wt,
    isNextLineEmptyAfterIndex: Tt,
    isNextLineEmpty: function isNextLineEmpty(e, t, n) {
      return Tt(e, n(t));
    },
    isPreviousLineEmpty: function isPreviousLineEmpty(e, t, n) {
      var r = n(t) - 1;
      return r = At(e, r, {
        backwards: !0
      }), r = wt(e, r, {
        backwards: !0
      }), r = At(e, r, {
        backwards: !0
      }), r !== wt(e, r, {
        backwards: !0
      });
    },
    hasNewline: Bt,
    hasNewlineInRange: function hasNewlineInRange(e, t, n) {
      for (var _r7 = t; _r7 < n; ++_r7) {
        if ("\n" === e.charAt(_r7)) return !0;
      }

      return !1;
    },
    hasSpaces: function hasSpaces(e, t, n) {
      return At(e, (n = n || {}).backwards ? t - 1 : t, n) !== t;
    },
    getAlignmentSize: Ot,
    getIndentSize: function getIndentSize(e, t) {
      var n = e.lastIndexOf("\n");
      return -1 === n ? 0 : Ot(e.slice(n + 1).match(/^[\t ]*/)[0], t);
    },
    getPreferredQuote: Pt,
    printString: function printString(e, t, n) {
      var r = e.slice(1, -1),
          u = !r.includes('"') && !r.includes("'"),
          o = "json" === t.parser ? '"' : t.__isInHtmlAttribute ? "'" : Pt(e, t.singleQuote ? "'" : '"');
      return n ? u ? o + r + o : e : _t(r, o, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.embeddedInHtml));
    },
    printNumber: function printNumber(e) {
      return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    },
    hasIgnoreComment: function hasIgnoreComment(e) {
      return It(e.getValue());
    },
    hasNodeIgnoreComment: It,
    isNodeIgnoreComment: jt,
    makeString: _t,
    addLeadingComment: function addLeadingComment(e, t) {
      t.leading = !0, t.trailing = !1, Mt(e, t);
    },
    addDanglingComment: function addDanglingComment(e, t, n) {
      t.leading = !1, t.trailing = !1, n && (t.marker = n), Mt(e, t);
    },
    addTrailingComment: function addTrailingComment(e, t) {
      t.leading = !1, t.trailing = !0, Mt(e, t);
    },
    isWithinParentArrayProperty: function isWithinParentArrayProperty(e, t) {
      var n = e.getValue(),
          r = e.getParentNode();
      if (null == r) return !1;
      if (!Array.isArray(r[t])) return !1;
      var u = e.getName();
      return r[t][u] === n;
    },
    isFrontMatterNode: function isFrontMatterNode(e) {
      return e && "front-matter" === e.type;
    },
    getShebang: function getShebang(e) {
      if (!e.startsWith("#!")) return "";
      var t = e.indexOf("\n");
      return -1 === t ? e : e.slice(0, t);
    }
  };
  var Rt = {
    guessEndOfLine: function guessEndOfLine(e) {
      var t = e.indexOf("\r");
      return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf";
    },
    convertEndOfLineToChars: function convertEndOfLineToChars(e) {
      switch (e) {
        case "cr":
          return "\r";

        case "crlf":
          return "\r\n";

        default:
          return "\n";
      }
    },
    countEndOfLineChars: function countEndOfLineChars(e, t) {
      var n;
      if ("\n" === t) n = /\n/g;else if ("\r" === t) n = /\r/g;else {
        if ("\r\n" !== t) throw new Error('Unexpected "eol" '.concat(JSON.stringify(t), "."));
        n = /\r\n/g;
      }
      var r = e.match(n);
      return r ? r.length : 0;
    },
    normalizeEndOfLine: function normalizeEndOfLine(e) {
      return e.replace(/\r\n?/g, "\n");
    }
  };
  var qt = Lt.getStringWidth,
      Vt = Rt.convertEndOfLineToChars,
      Wt = oe.concat,
      $t = oe.fill,
      Ut = oe.cursor;
  var zt;

  function Jt(e, t) {
    return Ht(e, {
      type: "indent"
    }, t);
  }

  function Gt(e, t, n) {
    if (t === -1 / 0) return e.root || {
      value: "",
      length: 0,
      queue: []
    };
    if (t < 0) return Ht(e, {
      type: "dedent"
    }, n);
    if (!t) return e;
    if ("root" === t.type) return Object.assign({}, e, {
      root: e
    });
    return Ht(e, {
      type: "string" == typeof t ? "stringAlign" : "numberAlign",
      n: t
    }, n);
  }

  function Ht(e, t, n) {
    var r = "dedent" === t.type ? e.queue.slice(0, -1) : e.queue.concat(t);
    var u = "",
        o = 0,
        a = 0,
        i = 0;

    var _iterator5 = _createForOfIteratorHelper(r),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e6 = _step5.value;

        switch (_e6.type) {
          case "indent":
            c(), n.useTabs ? s(1) : l(n.tabWidth);
            break;

          case "stringAlign":
            c(), u += _e6.n, o += _e6.n.length;
            break;

          case "numberAlign":
            a += 1, i += _e6.n;
            break;

          default:
            throw new Error("Unexpected type '".concat(_e6.type, "'"));
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    return p(), Object.assign({}, e, {
      value: u,
      length: o,
      queue: r
    });

    function s(e) {
      u += "\t".repeat(e), o += n.tabWidth * e;
    }

    function l(e) {
      u += " ".repeat(e), o += e;
    }

    function c() {
      n.useTabs ? function () {
        a > 0 && s(a);
        d();
      }() : p();
    }

    function p() {
      i > 0 && l(i), d();
    }

    function d() {
      a = 0, i = 0;
    }
  }

  function Xt(e) {
    if (0 === e.length) return 0;
    var t = 0;

    for (; e.length > 0 && "string" == typeof e[e.length - 1] && e[e.length - 1].match(/^[\t ]*$/);) {
      t += e.pop().length;
    }

    if (e.length && "string" == typeof e[e.length - 1]) {
      var _n8 = e[e.length - 1].replace(/[\t ]*$/, "");

      t += e[e.length - 1].length - _n8.length, e[e.length - 1] = _n8;
    }

    return t;
  }

  function Yt(e, t, n, r, u) {
    var o = t.length;
    var a = [e],
        i = [];

    for (; n >= 0;) {
      if (0 === a.length) {
        if (0 === o) return !0;
        a.push(t[o - 1]), o--;
        continue;
      }

      var _a$pop = a.pop(),
          _a$pop2 = _slicedToArray(_a$pop, 3),
          _e7 = _a$pop2[0],
          _s2 = _a$pop2[1],
          _l2 = _a$pop2[2];

      if ("string" == typeof _l2) i.push(_l2), n -= qt(_l2);else switch (_l2.type) {
        case "concat":
          for (var _t3 = _l2.parts.length - 1; _t3 >= 0; _t3--) {
            a.push([_e7, _s2, _l2.parts[_t3]]);
          }

          break;

        case "indent":
          a.push([Jt(_e7, r), _s2, _l2.contents]);
          break;

        case "align":
          a.push([Gt(_e7, _l2.n, r), _s2, _l2.contents]);
          break;

        case "trim":
          n += Xt(i);
          break;

        case "group":
          if (u && _l2.break) return !1;
          a.push([_e7, _l2.break ? 1 : _s2, _l2.contents]), _l2.id && (zt[_l2.id] = a[a.length - 1][1]);
          break;

        case "fill":
          for (var _t4 = _l2.parts.length - 1; _t4 >= 0; _t4--) {
            a.push([_e7, _s2, _l2.parts[_t4]]);
          }

          break;

        case "if-break":
          {
            var _t5 = _l2.groupId ? zt[_l2.groupId] : _s2;

            1 === _t5 && _l2.breakContents && a.push([_e7, _s2, _l2.breakContents]), 2 === _t5 && _l2.flatContents && a.push([_e7, _s2, _l2.flatContents]);
            break;
          }

        case "line":
          switch (_s2) {
            case 2:
              if (!_l2.hard) {
                _l2.soft || (i.push(" "), n -= 1);
                break;
              }

              return !0;

            case 1:
              return !0;
          }

      }
    }

    return !1;
  }

  var Kt = {};

  function Qt(e, t, n, r) {
    var u = [e];

    for (; 0 !== u.length;) {
      var _e8 = u.pop();

      if (_e8 !== Kt) {
        if (n && u.push(_e8, Kt), !t || !1 !== t(_e8)) if ("concat" === _e8.type || "fill" === _e8.type) for (var _t6 = _e8.parts.length - 1; _t6 >= 0; --_t6) {
          u.push(_e8.parts[_t6]);
        } else if ("if-break" === _e8.type) _e8.flatContents && u.push(_e8.flatContents), _e8.breakContents && u.push(_e8.breakContents);else if ("group" === _e8.type && _e8.expandedStates) {
          if (r) for (var _t7 = _e8.expandedStates.length - 1; _t7 >= 0; --_t7) {
            u.push(_e8.expandedStates[_t7]);
          } else u.push(_e8.contents);
        } else _e8.contents && u.push(_e8.contents);
      } else n(u.pop());
    }
  }

  function Zt(e, t) {
    if ("concat" === e.type || "fill" === e.type) {
      var _n9 = e.parts.map(function (e) {
        return Zt(e, t);
      });

      return t(Object.assign({}, e, {
        parts: _n9
      }));
    }

    if ("if-break" === e.type) {
      var _n10 = e.breakContents && Zt(e.breakContents, t),
          _r8 = e.flatContents && Zt(e.flatContents, t);

      return t(Object.assign({}, e, {
        breakContents: _n10,
        flatContents: _r8
      }));
    }

    if (e.contents) {
      var _n11 = Zt(e.contents, t);

      return t(Object.assign({}, e, {
        contents: _n11
      }));
    }

    return t(e);
  }

  function en(e, t, n) {
    var r = n,
        u = !1;
    return Qt(e, function (e) {
      var n = t(e);
      if (void 0 !== n && (u = !0, r = n), u) return !1;
    }), r;
  }

  function tn(e) {
    return "string" != typeof e && ("line" === e.type || void 0);
  }

  function nn(e) {
    return !("group" !== e.type || !e.break) || !("line" !== e.type || !e.hard) || "break-parent" === e.type || void 0;
  }

  function rn(e) {
    if (e.length > 0) {
      var _t8 = e[e.length - 1];
      _t8.expandedStates || (_t8.break = !0);
    }

    return null;
  }

  function un(e) {
    return "line" !== e.type || e.hard ? "if-break" === e.type ? e.flatContents || "" : e : e.soft ? "" : " ";
  }

  function on(e) {
    var t = [],
        n = e.filter(Boolean);

    for (; 0 !== n.length;) {
      var _e9 = n.shift();

      _e9 && ("concat" !== _e9.type ? 0 === t.length || "string" != typeof t[t.length - 1] || "string" != typeof _e9 ? t.push(_e9) : t[t.length - 1] += _e9 : n.unshift.apply(n, _toConsumableArray(_e9.parts)));
    }

    return t;
  }

  function an(e) {
    if ("concat" === e.type) {
      var _t9 = [];

      for (var _n12 = 0; _n12 < e.parts.length; ++_n12) {
        var _r9 = e.parts[_n12];
        if ("string" != typeof _r9 && "concat" === _r9.type) _t9.push.apply(_t9, _toConsumableArray(an(_r9).parts));else {
          var _e10 = an(_r9);

          "" !== _e10 && _t9.push(_e10);
        }
      }

      return Object.assign({}, e, {
        parts: _t9
      });
    }

    return "if-break" === e.type ? Object.assign({}, e, {
      breakContents: null != e.breakContents ? an(e.breakContents) : null,
      flatContents: null != e.flatContents ? an(e.flatContents) : null
    }) : "group" === e.type ? Object.assign({}, e, {
      contents: an(e.contents),
      expandedStates: e.expandedStates ? e.expandedStates.map(an) : e.expandedStates
    }) : e.contents ? Object.assign({}, e, {
      contents: an(e.contents)
    }) : e;
  }

  function sn(e) {
    if ("string" == typeof e) return JSON.stringify(e);
    if ("line" === e.type) return e.literal ? "literalline" : e.hard ? "hardline" : e.soft ? "softline" : "line";
    if ("break-parent" === e.type) return "breakParent";
    if ("trim" === e.type) return "trim";
    if ("concat" === e.type) return "[" + e.parts.map(sn).join(", ") + "]";
    if ("indent" === e.type) return "indent(" + sn(e.contents) + ")";
    if ("align" === e.type) return e.n === -1 / 0 ? "dedentToRoot(" + sn(e.contents) + ")" : e.n < 0 ? "dedent(" + sn(e.contents) + ")" : "root" === e.n.type ? "markAsRoot(" + sn(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + sn(e.contents) + ")";
    if ("if-break" === e.type) return "ifBreak(" + sn(e.breakContents) + (e.flatContents ? ", " + sn(e.flatContents) : "") + ")";
    if ("group" === e.type) return e.expandedStates ? "conditionalGroup([" + e.expandedStates.map(sn).join(",") + "])" : (e.break ? "wrappedGroup" : "group") + "(" + sn(e.contents) + ")";
    if ("fill" === e.type) return "fill(" + e.parts.map(sn).join(", ") + ")";
    if ("line-suffix" === e.type) return "lineSuffix(" + sn(e.contents) + ")";
    if ("line-suffix-boundary" === e.type) return "lineSuffixBoundary";
    throw new Error("Unknown doc type " + e.type);
  }

  var ln = {
    builders: oe,
    printer: {
      printDocToString: function printDocToString(e, t) {
        zt = {};
        var n = t.printWidth,
            r = Vt(t.endOfLine);
        var u = 0;
        var o = [[{
          value: "",
          length: 0,
          queue: []
        }, 1, e]],
            a = [];
        var i = !1,
            s = [];

        for (; 0 !== o.length;) {
          var _o$pop = o.pop(),
              _o$pop2 = _slicedToArray(_o$pop, 3),
              _e11 = _o$pop2[0],
              _l3 = _o$pop2[1],
              _c2 = _o$pop2[2];

          if ("string" == typeof _c2) {
            var _e12 = "\n" !== r && _c2.includes("\n") ? _c2.replace(/\n/g, r) : _c2;

            a.push(_e12), u += qt(_e12);
          } else switch (_c2.type) {
            case "cursor":
              a.push(Ut.placeholder);
              break;

            case "concat":
              for (var _t10 = _c2.parts.length - 1; _t10 >= 0; _t10--) {
                o.push([_e11, _l3, _c2.parts[_t10]]);
              }

              break;

            case "indent":
              o.push([Jt(_e11, t), _l3, _c2.contents]);
              break;

            case "align":
              o.push([Gt(_e11, _c2.n, t), _l3, _c2.contents]);
              break;

            case "trim":
              u -= Xt(a);
              break;

            case "group":
              switch (_l3) {
                case 2:
                  if (!i) {
                    o.push([_e11, _c2.break ? 1 : 2, _c2.contents]);
                    break;
                  }

                case 1:
                  {
                    i = !1;

                    var _r10 = [_e11, 2, _c2.contents],
                        _a3 = n - u;

                    if (!_c2.break && Yt(_r10, o, _a3, t)) o.push(_r10);else if (_c2.expandedStates) {
                      var _n13 = _c2.expandedStates[_c2.expandedStates.length - 1];

                      if (_c2.break) {
                        o.push([_e11, 1, _n13]);
                        break;
                      }

                      for (var _r11 = 1; _r11 < _c2.expandedStates.length + 1; _r11++) {
                        if (_r11 >= _c2.expandedStates.length) {
                          o.push([_e11, 1, _n13]);
                          break;
                        }

                        {
                          var _n14 = [_e11, 2, _c2.expandedStates[_r11]];

                          if (Yt(_n14, o, _a3, t)) {
                            o.push(_n14);
                            break;
                          }
                        }
                      }
                    } else o.push([_e11, 1, _c2.contents]);
                    break;
                  }
              }

              _c2.id && (zt[_c2.id] = o[o.length - 1][1]);
              break;

            case "fill":
              {
                var _r12 = n - u,
                    _a4 = _c2.parts;

                if (0 === _a4.length) break;

                var _a5 = _slicedToArray(_a4, 2),
                    _i2 = _a5[0],
                    _s3 = _a5[1],
                    _p2 = [_e11, 2, _i2],
                    _d2 = [_e11, 1, _i2],
                    _f2 = Yt(_p2, [], _r12, t, !0);

                if (1 === _a4.length) {
                  _f2 ? o.push(_p2) : o.push(_d2);
                  break;
                }

                var _h2 = [_e11, 2, _s3],
                    _m2 = [_e11, 1, _s3];

                if (2 === _a4.length) {
                  _f2 ? (o.push(_h2), o.push(_p2)) : (o.push(_m2), o.push(_d2));
                  break;
                }

                _a4.splice(0, 2);

                var _g2 = [_e11, _l3, $t(_a4)],
                    _D2 = _a4[0];
                Yt([_e11, 2, Wt([_i2, _s3, _D2])], [], _r12, t, !0) ? (o.push(_g2), o.push(_h2), o.push(_p2)) : _f2 ? (o.push(_g2), o.push(_m2), o.push(_p2)) : (o.push(_g2), o.push(_m2), o.push(_d2));
                break;
              }

            case "if-break":
              {
                var _t11 = _c2.groupId ? zt[_c2.groupId] : _l3;

                1 === _t11 && _c2.breakContents && o.push([_e11, _l3, _c2.breakContents]), 2 === _t11 && _c2.flatContents && o.push([_e11, _l3, _c2.flatContents]);
                break;
              }

            case "line-suffix":
              s.push([_e11, _l3, _c2.contents]);
              break;

            case "line-suffix-boundary":
              s.length > 0 && o.push([_e11, _l3, {
                type: "line",
                hard: !0
              }]);
              break;

            case "line":
              switch (_l3) {
                case 2:
                  if (!_c2.hard) {
                    _c2.soft || (a.push(" "), u += 1);
                    break;
                  }

                  i = !0;

                case 1:
                  if (s.length) {
                    o.push([_e11, _l3, _c2]), o.push.apply(o, _toConsumableArray(s.reverse())), s = [];
                    break;
                  }

                  _c2.literal ? _e11.root ? (a.push(r, _e11.root.value), u = _e11.root.length) : (a.push(r), u = 0) : (u -= Xt(a), a.push(r + _e11.value), u = _e11.length);
              }

          }
        }

        var l = a.indexOf(Ut.placeholder);

        if (-1 !== l) {
          var _e13 = a.indexOf(Ut.placeholder, l + 1),
              _t12 = a.slice(0, l).join(""),
              _n15 = a.slice(l + 1, _e13).join("");

          return {
            formatted: _t12 + _n15 + a.slice(_e13 + 1).join(""),
            cursorNodeStart: _t12.length,
            cursorNodeText: _n15
          };
        }

        return {
          formatted: a.join("")
        };
      }
    },
    utils: {
      isEmpty: function isEmpty(e) {
        return "string" == typeof e && 0 === e.length;
      },
      willBreak: function willBreak(e) {
        return en(e, nn, !1);
      },
      isLineNext: function isLineNext(e) {
        return en(e, tn, !1);
      },
      traverseDoc: Qt,
      findInDoc: en,
      mapDoc: Zt,
      propagateBreaks: function propagateBreaks(e) {
        var t = new Set(),
            n = [];
        Qt(e, function (e) {
          if ("break-parent" === e.type && rn(n), "group" === e.type) {
            if (n.push(e), t.has(e)) return !1;
            t.add(e);
          }
        }, function (e) {
          if ("group" === e.type) {
            n.pop().break && rn(n);
          }
        }, !0);
      },
      removeLines: function removeLines(e) {
        return Zt(e, un);
      },
      stripTrailingHardline: function e(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

        if ("concat" === t.type && 0 !== t.parts.length) {
          var _r13 = n ? function (e) {
            var t,
                n = e.parts;

            for (var _r14 = e.parts.length; _r14 > 0 && !t; _r14--) {
              t = n[_r14 - 1];
            }

            return "group" === t.type && (n = t.contents.parts), n;
          }(t) : t.parts,
              _u4 = _r13[_r13.length - 1];

          if ("concat" === _u4.type) return 2 === _u4.parts.length && _u4.parts[0].hard && "break-parent" === _u4.parts[1].type ? {
            type: "concat",
            parts: _r13.slice(0, -1)
          } : {
            type: "concat",
            parts: t.parts.slice(0, -1).concat(e(_u4))
          };
        }

        return t;
      },
      normalizeParts: on,
      normalizeDoc: function normalizeDoc(e) {
        return Zt(e, function (e) {
          return e.parts ? Object.assign({}, e, {
            parts: on(e.parts)
          }) : e;
        });
      }
    },
    debug: {
      printDocToDebug: function printDocToDebug(e) {
        return sn(an(e));
      }
    }
  },
      cn = Object.freeze({
    __proto__: null,
    default: {}
  });
  var pn = /[/\\]/;

  function dn(e) {
    return e.split(pn).pop();
  }

  var fn = Object.freeze({
    __proto__: null,
    extname: function extname(e) {
      var t = dn(e),
          n = t.lastIndexOf(".");
      return -1 === n ? "" : t.slice(n);
    },
    basename: dn,
    isAbsolute: function isAbsolute() {
      return !0;
    }
  }),
      hn = [],
      mn = [],
      gn = "undefined" != typeof Uint8Array ? Uint8Array : Array,
      Dn = !1;

  function yn() {
    Dn = !0;

    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) {
      hn[t] = e[t], mn[e.charCodeAt(t)] = t;
    }

    mn["-".charCodeAt(0)] = 62, mn["_".charCodeAt(0)] = 63;
  }

  function En(e, t, n) {
    for (var r, u, o = [], a = t; a < n; a += 3) {
      r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(hn[(u = r) >> 18 & 63] + hn[u >> 12 & 63] + hn[u >> 6 & 63] + hn[63 & u]);
    }

    return o.join("");
  }

  function Cn(e) {
    var t;
    Dn || yn();

    for (var n = e.length, r = n % 3, u = "", o = [], a = 0, i = n - r; a < i; a += 16383) {
      o.push(En(e, a, a + 16383 > i ? i : a + 16383));
    }

    return 1 === r ? (t = e[n - 1], u += hn[t >> 2], u += hn[t << 4 & 63], u += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], u += hn[t >> 10], u += hn[t >> 4 & 63], u += hn[t << 2 & 63], u += "="), o.push(u), o.join("");
  }

  function bn(e, t, n, r, u) {
    var o,
        a,
        i = 8 * u - r - 1,
        s = (1 << i) - 1,
        l = s >> 1,
        c = -7,
        p = n ? u - 1 : 0,
        d = n ? -1 : 1,
        f = e[t + p];

    for (p += d, o = f & (1 << -c) - 1, f >>= -c, c += i; c > 0; o = 256 * o + e[t + p], p += d, c -= 8) {
      ;
    }

    for (a = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; a = 256 * a + e[t + p], p += d, c -= 8) {
      ;
    }

    if (0 === o) o = 1 - l;else {
      if (o === s) return a ? NaN : 1 / 0 * (f ? -1 : 1);
      a += Math.pow(2, r), o -= l;
    }
    return (f ? -1 : 1) * a * Math.pow(2, o - r);
  }

  function An(e, t, n, r, u, o) {
    var a,
        i,
        s,
        l = 8 * o - u - 1,
        c = (1 << l) - 1,
        p = c >> 1,
        d = 23 === u ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        f = r ? 0 : o - 1,
        h = r ? 1 : -1,
        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + p >= 1 ? d / s : d * Math.pow(2, 1 - p)) * s >= 2 && (a++, s /= 2), a + p >= c ? (i = 0, a = c) : a + p >= 1 ? (i = (t * s - 1) * Math.pow(2, u), a += p) : (i = t * Math.pow(2, p - 1) * Math.pow(2, u), a = 0)); u >= 8; e[n + f] = 255 & i, f += h, i /= 256, u -= 8) {
      ;
    }

    for (a = a << u | i, l += u; l > 0; e[n + f] = 255 & a, f += h, a /= 256, l -= 8) {
      ;
    }

    e[n + f - h] |= 128 * m;
  }

  var vn = {}.toString,
      Fn = Array.isArray || function (e) {
    return "[object Array]" == vn.call(e);
  };

  function xn() {
    return wn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }

  function Sn(e, t) {
    if (xn() < t) throw new RangeError("Invalid typed array length");
    return wn.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = wn.prototype : (null === e && (e = new wn(t)), e.length = t), e;
  }

  function wn(e, t, n) {
    if (!(wn.TYPED_ARRAY_SUPPORT || this instanceof wn)) return new wn(e, t, n);

    if ("number" == typeof e) {
      if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
      return kn(this, e);
    }

    return Bn(this, e, t, n);
  }

  function Bn(e, t, n, r) {
    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, n, r) {
      if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
      if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
      t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
      wn.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = wn.prototype : e = Nn(e, t);
      return e;
    }(e, t, n, r) : "string" == typeof t ? function (e, t, n) {
      "string" == typeof n && "" !== n || (n = "utf8");
      if (!wn.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');

      var r = 0 | _n(t, n),
          u = (e = Sn(e, r)).write(t, n);

      u !== r && (e = e.slice(0, u));
      return e;
    }(e, t, n) : function (e, t) {
      if (Pn(t)) {
        var n = 0 | On(t.length);
        return 0 === (e = Sn(e, n)).length || t.copy(e, 0, 0, n), e;
      }

      if (t) {
        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? Sn(e, 0) : Nn(e, t);
        if ("Buffer" === t.type && Fn(t.data)) return Nn(e, t.data);
      }

      var r;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(e, t);
  }

  function Tn(e) {
    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
    if (e < 0) throw new RangeError('"size" argument must not be negative');
  }

  function kn(e, t) {
    if (Tn(t), e = Sn(e, t < 0 ? 0 : 0 | On(t)), !wn.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) {
      e[n] = 0;
    }
    return e;
  }

  function Nn(e, t) {
    var n = t.length < 0 ? 0 : 0 | On(t.length);
    e = Sn(e, n);

    for (var r = 0; r < n; r += 1) {
      e[r] = 255 & t[r];
    }

    return e;
  }

  function On(e) {
    if (e >= xn()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + xn().toString(16) + " bytes");
    return 0 | e;
  }

  function Pn(e) {
    return !(null == e || !e._isBuffer);
  }

  function _n(e, t) {
    if (Pn(e)) return e.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
    "string" != typeof e && (e = "" + e);
    var n = e.length;
    if (0 === n) return 0;

    for (var r = !1;;) {
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;

        case "utf8":
        case "utf-8":
        case void 0:
          return ar(e).length;

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;

        case "hex":
          return n >>> 1;

        case "base64":
          return ir(e).length;

        default:
          if (r) return ar(e).length;
          t = ("" + t).toLowerCase(), r = !0;
      }
    }
  }

  function In(e, t, n) {
    var r = !1;
    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
    if ((n >>>= 0) <= (t >>>= 0)) return "";

    for (e || (e = "utf8");;) {
      switch (e) {
        case "hex":
          return Xn(this, t, n);

        case "utf8":
        case "utf-8":
          return Jn(this, t, n);

        case "ascii":
          return Gn(this, t, n);

        case "latin1":
        case "binary":
          return Hn(this, t, n);

        case "base64":
          return zn(this, t, n);

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Yn(this, t, n);

        default:
          if (r) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), r = !0;
      }
    }
  }

  function jn(e, t, n) {
    var r = e[t];
    e[t] = e[n], e[n] = r;
  }

  function Mn(e, t, n, r, u) {
    if (0 === e.length) return -1;

    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = u ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
      if (u) return -1;
      n = e.length - 1;
    } else if (n < 0) {
      if (!u) return -1;
      n = 0;
    }

    if ("string" == typeof t && (t = wn.from(t, r)), Pn(t)) return 0 === t.length ? -1 : Ln(e, t, n, r, u);
    if ("number" == typeof t) return t &= 255, wn.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? u ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Ln(e, [t], n, r, u);
    throw new TypeError("val must be string, number or Buffer");
  }

  function Ln(e, t, n, r, u) {
    var o,
        a = 1,
        i = e.length,
        s = t.length;

    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
      if (e.length < 2 || t.length < 2) return -1;
      a = 2, i /= 2, s /= 2, n /= 2;
    }

    function l(e, t) {
      return 1 === a ? e[t] : e.readUInt16BE(t * a);
    }

    if (u) {
      var c = -1;

      for (o = n; o < i; o++) {
        if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
          if (-1 === c && (c = o), o - c + 1 === s) return c * a;
        } else -1 !== c && (o -= o - c), c = -1;
      }
    } else for (n + s > i && (n = i - s), o = n; o >= 0; o--) {
      for (var p = !0, d = 0; d < s; d++) {
        if (l(e, o + d) !== l(t, d)) {
          p = !1;
          break;
        }
      }

      if (p) return o;
    }

    return -1;
  }

  function Rn(e, t, n, r) {
    n = Number(n) || 0;
    var u = e.length - n;
    r ? (r = Number(r)) > u && (r = u) : r = u;
    var o = t.length;
    if (o % 2 != 0) throw new TypeError("Invalid hex string");
    r > o / 2 && (r = o / 2);

    for (var a = 0; a < r; ++a) {
      var i = parseInt(t.substr(2 * a, 2), 16);
      if (isNaN(i)) return a;
      e[n + a] = i;
    }

    return a;
  }

  function qn(e, t, n, r) {
    return sr(ar(t, e.length - n), e, n, r);
  }

  function Vn(e, t, n, r) {
    return sr(function (e) {
      for (var t = [], n = 0; n < e.length; ++n) {
        t.push(255 & e.charCodeAt(n));
      }

      return t;
    }(t), e, n, r);
  }

  function Wn(e, t, n, r) {
    return Vn(e, t, n, r);
  }

  function $n(e, t, n, r) {
    return sr(ir(t), e, n, r);
  }

  function Un(e, t, n, r) {
    return sr(function (e, t) {
      for (var n, r, u, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
        r = (n = e.charCodeAt(a)) >> 8, u = n % 256, o.push(u), o.push(r);
      }

      return o;
    }(t, e.length - n), e, n, r);
  }

  function zn(e, t, n) {
    return 0 === t && n === e.length ? Cn(e) : Cn(e.slice(t, n));
  }

  function Jn(e, t, n) {
    n = Math.min(e.length, n);

    for (var r = [], u = t; u < n;) {
      var o,
          a,
          i,
          s,
          l = e[u],
          c = null,
          p = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
      if (u + p <= n) switch (p) {
        case 1:
          l < 128 && (c = l);
          break;

        case 2:
          128 == (192 & (o = e[u + 1])) && (s = (31 & l) << 6 | 63 & o) > 127 && (c = s);
          break;

        case 3:
          o = e[u + 1], a = e[u + 2], 128 == (192 & o) && 128 == (192 & a) && (s = (15 & l) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (c = s);
          break;

        case 4:
          o = e[u + 1], a = e[u + 2], i = e[u + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & i) && (s = (15 & l) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & i) > 65535 && s < 1114112 && (c = s);
      }
      null === c ? (c = 65533, p = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), u += p;
    }

    return function (e) {
      var t = e.length;
      if (t <= 4096) return String.fromCharCode.apply(String, e);
      var n = "",
          r = 0;

      for (; r < t;) {
        n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
      }

      return n;
    }(r);
  }

  wn.TYPED_ARRAY_SUPPORT = void 0 === me.TYPED_ARRAY_SUPPORT || me.TYPED_ARRAY_SUPPORT, wn.poolSize = 8192, wn._augment = function (e) {
    return e.__proto__ = wn.prototype, e;
  }, wn.from = function (e, t, n) {
    return Bn(null, e, t, n);
  }, wn.TYPED_ARRAY_SUPPORT && (wn.prototype.__proto__ = Uint8Array.prototype, wn.__proto__ = Uint8Array), wn.alloc = function (e, t, n) {
    return function (e, t, n, r) {
      return Tn(t), t <= 0 ? Sn(e, t) : void 0 !== n ? "string" == typeof r ? Sn(e, t).fill(n, r) : Sn(e, t).fill(n) : Sn(e, t);
    }(null, e, t, n);
  }, wn.allocUnsafe = function (e) {
    return kn(null, e);
  }, wn.allocUnsafeSlow = function (e) {
    return kn(null, e);
  }, wn.isBuffer = function (e) {
    return null != e && (!!e._isBuffer || lr(e) || function (e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && lr(e.slice(0, 0));
    }(e));
  }, wn.compare = function (e, t) {
    if (!Pn(e) || !Pn(t)) throw new TypeError("Arguments must be Buffers");
    if (e === t) return 0;

    for (var n = e.length, r = t.length, u = 0, o = Math.min(n, r); u < o; ++u) {
      if (e[u] !== t[u]) {
        n = e[u], r = t[u];
        break;
      }
    }

    return n < r ? -1 : r < n ? 1 : 0;
  }, wn.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;

      default:
        return !1;
    }
  }, wn.concat = function (e, t) {
    if (!Fn(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === e.length) return wn.alloc(0);
    var n;
    if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) {
      t += e[n].length;
    }
    var r = wn.allocUnsafe(t),
        u = 0;

    for (n = 0; n < e.length; ++n) {
      var o = e[n];
      if (!Pn(o)) throw new TypeError('"list" argument must be an Array of Buffers');
      o.copy(r, u), u += o.length;
    }

    return r;
  }, wn.byteLength = _n, wn.prototype._isBuffer = !0, wn.prototype.swap16 = function () {
    var e = this.length;
    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

    for (var t = 0; t < e; t += 2) {
      jn(this, t, t + 1);
    }

    return this;
  }, wn.prototype.swap32 = function () {
    var e = this.length;
    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

    for (var t = 0; t < e; t += 4) {
      jn(this, t, t + 3), jn(this, t + 1, t + 2);
    }

    return this;
  }, wn.prototype.swap64 = function () {
    var e = this.length;
    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

    for (var t = 0; t < e; t += 8) {
      jn(this, t, t + 7), jn(this, t + 1, t + 6), jn(this, t + 2, t + 5), jn(this, t + 3, t + 4);
    }

    return this;
  }, wn.prototype.toString = function () {
    var e = 0 | this.length;
    return 0 === e ? "" : 0 === arguments.length ? Jn(this, 0, e) : In.apply(this, arguments);
  }, wn.prototype.equals = function (e) {
    if (!Pn(e)) throw new TypeError("Argument must be a Buffer");
    return this === e || 0 === wn.compare(this, e);
  }, wn.prototype.inspect = function () {
    var e = "";
    return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">";
  }, wn.prototype.compare = function (e, t, n, r, u) {
    if (!Pn(e)) throw new TypeError("Argument must be a Buffer");
    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === u && (u = this.length), t < 0 || n > e.length || r < 0 || u > this.length) throw new RangeError("out of range index");
    if (r >= u && t >= n) return 0;
    if (r >= u) return -1;
    if (t >= n) return 1;
    if (this === e) return 0;

    for (var o = (u >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), i = Math.min(o, a), s = this.slice(r, u), l = e.slice(t, n), c = 0; c < i; ++c) {
      if (s[c] !== l[c]) {
        o = s[c], a = l[c];
        break;
      }
    }

    return o < a ? -1 : a < o ? 1 : 0;
  }, wn.prototype.includes = function (e, t, n) {
    return -1 !== this.indexOf(e, t, n);
  }, wn.prototype.indexOf = function (e, t, n) {
    return Mn(this, e, t, n, !0);
  }, wn.prototype.lastIndexOf = function (e, t, n) {
    return Mn(this, e, t, n, !1);
  }, wn.prototype.write = function (e, t, n, r) {
    if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
      if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
    }
    var u = this.length - t;
    if ((void 0 === n || n > u) && (n = u), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");

    for (var o = !1;;) {
      switch (r) {
        case "hex":
          return Rn(this, e, t, n);

        case "utf8":
        case "utf-8":
          return qn(this, e, t, n);

        case "ascii":
          return Vn(this, e, t, n);

        case "latin1":
        case "binary":
          return Wn(this, e, t, n);

        case "base64":
          return $n(this, e, t, n);

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Un(this, e, t, n);

        default:
          if (o) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), o = !0;
      }
    }
  }, wn.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };

  function Gn(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);

    for (var u = t; u < n; ++u) {
      r += String.fromCharCode(127 & e[u]);
    }

    return r;
  }

  function Hn(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);

    for (var u = t; u < n; ++u) {
      r += String.fromCharCode(e[u]);
    }

    return r;
  }

  function Xn(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);

    for (var u = "", o = t; o < n; ++o) {
      u += or(e[o]);
    }

    return u;
  }

  function Yn(e, t, n) {
    for (var r = e.slice(t, n), u = "", o = 0; o < r.length; o += 2) {
      u += String.fromCharCode(r[o] + 256 * r[o + 1]);
    }

    return u;
  }

  function Kn(e, t, n) {
    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
  }

  function Qn(e, t, n, r, u, o) {
    if (!Pn(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > u || t < o) throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw new RangeError("Index out of range");
  }

  function Zn(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);

    for (var u = 0, o = Math.min(e.length - n, 2); u < o; ++u) {
      e[n + u] = (t & 255 << 8 * (r ? u : 1 - u)) >>> 8 * (r ? u : 1 - u);
    }
  }

  function er(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);

    for (var u = 0, o = Math.min(e.length - n, 4); u < o; ++u) {
      e[n + u] = t >>> 8 * (r ? u : 3 - u) & 255;
    }
  }

  function tr(e, t, n, r, u, o) {
    if (n + r > e.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }

  function nr(e, t, n, r, u) {
    return u || tr(e, 0, n, 4), An(e, t, n, r, 23, 4), n + 4;
  }

  function rr(e, t, n, r, u) {
    return u || tr(e, 0, n, 8), An(e, t, n, r, 52, 8), n + 8;
  }

  wn.prototype.slice = function (e, t) {
    var n,
        r = this.length;
    if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), wn.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = wn.prototype;else {
      var u = t - e;
      n = new wn(u, void 0);

      for (var o = 0; o < u; ++o) {
        n[o] = this[o + e];
      }
    }
    return n;
  }, wn.prototype.readUIntLE = function (e, t, n) {
    e |= 0, t |= 0, n || Kn(e, t, this.length);

    for (var r = this[e], u = 1, o = 0; ++o < t && (u *= 256);) {
      r += this[e + o] * u;
    }

    return r;
  }, wn.prototype.readUIntBE = function (e, t, n) {
    e |= 0, t |= 0, n || Kn(e, t, this.length);

    for (var r = this[e + --t], u = 1; t > 0 && (u *= 256);) {
      r += this[e + --t] * u;
    }

    return r;
  }, wn.prototype.readUInt8 = function (e, t) {
    return t || Kn(e, 1, this.length), this[e];
  }, wn.prototype.readUInt16LE = function (e, t) {
    return t || Kn(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, wn.prototype.readUInt16BE = function (e, t) {
    return t || Kn(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, wn.prototype.readUInt32LE = function (e, t) {
    return t || Kn(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
  }, wn.prototype.readUInt32BE = function (e, t) {
    return t || Kn(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, wn.prototype.readIntLE = function (e, t, n) {
    e |= 0, t |= 0, n || Kn(e, t, this.length);

    for (var r = this[e], u = 1, o = 0; ++o < t && (u *= 256);) {
      r += this[e + o] * u;
    }

    return r >= (u *= 128) && (r -= Math.pow(2, 8 * t)), r;
  }, wn.prototype.readIntBE = function (e, t, n) {
    e |= 0, t |= 0, n || Kn(e, t, this.length);

    for (var r = t, u = 1, o = this[e + --r]; r > 0 && (u *= 256);) {
      o += this[e + --r] * u;
    }

    return o >= (u *= 128) && (o -= Math.pow(2, 8 * t)), o;
  }, wn.prototype.readInt8 = function (e, t) {
    return t || Kn(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
  }, wn.prototype.readInt16LE = function (e, t) {
    t || Kn(e, 2, this.length);
    var n = this[e] | this[e + 1] << 8;
    return 32768 & n ? 4294901760 | n : n;
  }, wn.prototype.readInt16BE = function (e, t) {
    t || Kn(e, 2, this.length);
    var n = this[e + 1] | this[e] << 8;
    return 32768 & n ? 4294901760 | n : n;
  }, wn.prototype.readInt32LE = function (e, t) {
    return t || Kn(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, wn.prototype.readInt32BE = function (e, t) {
    return t || Kn(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, wn.prototype.readFloatLE = function (e, t) {
    return t || Kn(e, 4, this.length), bn(this, e, !0, 23, 4);
  }, wn.prototype.readFloatBE = function (e, t) {
    return t || Kn(e, 4, this.length), bn(this, e, !1, 23, 4);
  }, wn.prototype.readDoubleLE = function (e, t) {
    return t || Kn(e, 8, this.length), bn(this, e, !0, 52, 8);
  }, wn.prototype.readDoubleBE = function (e, t) {
    return t || Kn(e, 8, this.length), bn(this, e, !1, 52, 8);
  }, wn.prototype.writeUIntLE = function (e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || Qn(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var u = 1,
        o = 0;

    for (this[t] = 255 & e; ++o < n && (u *= 256);) {
      this[t + o] = e / u & 255;
    }

    return t + n;
  }, wn.prototype.writeUIntBE = function (e, t, n, r) {
    (e = +e, t |= 0, n |= 0, r) || Qn(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var u = n - 1,
        o = 1;

    for (this[t + u] = 255 & e; --u >= 0 && (o *= 256);) {
      this[t + u] = e / o & 255;
    }

    return t + n;
  }, wn.prototype.writeUInt8 = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 1, 255, 0), wn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
  }, wn.prototype.writeUInt16LE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 2, 65535, 0), wn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : Zn(this, e, t, !0), t + 2;
  }, wn.prototype.writeUInt16BE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 2, 65535, 0), wn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : Zn(this, e, t, !1), t + 2;
  }, wn.prototype.writeUInt32LE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 4, 4294967295, 0), wn.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : er(this, e, t, !0), t + 4;
  }, wn.prototype.writeUInt32BE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 4, 4294967295, 0), wn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : er(this, e, t, !1), t + 4;
  }, wn.prototype.writeIntLE = function (e, t, n, r) {
    if (e = +e, t |= 0, !r) {
      var u = Math.pow(2, 8 * n - 1);
      Qn(this, e, t, n, u - 1, -u);
    }

    var o = 0,
        a = 1,
        i = 0;

    for (this[t] = 255 & e; ++o < n && (a *= 256);) {
      e < 0 && 0 === i && 0 !== this[t + o - 1] && (i = 1), this[t + o] = (e / a >> 0) - i & 255;
    }

    return t + n;
  }, wn.prototype.writeIntBE = function (e, t, n, r) {
    if (e = +e, t |= 0, !r) {
      var u = Math.pow(2, 8 * n - 1);
      Qn(this, e, t, n, u - 1, -u);
    }

    var o = n - 1,
        a = 1,
        i = 0;

    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
      e < 0 && 0 === i && 0 !== this[t + o + 1] && (i = 1), this[t + o] = (e / a >> 0) - i & 255;
    }

    return t + n;
  }, wn.prototype.writeInt8 = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 1, 127, -128), wn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
  }, wn.prototype.writeInt16LE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 2, 32767, -32768), wn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : Zn(this, e, t, !0), t + 2;
  }, wn.prototype.writeInt16BE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 2, 32767, -32768), wn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : Zn(this, e, t, !1), t + 2;
  }, wn.prototype.writeInt32LE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 4, 2147483647, -2147483648), wn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : er(this, e, t, !0), t + 4;
  }, wn.prototype.writeInt32BE = function (e, t, n) {
    return e = +e, t |= 0, n || Qn(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), wn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : er(this, e, t, !1), t + 4;
  }, wn.prototype.writeFloatLE = function (e, t, n) {
    return nr(this, e, t, !0, n);
  }, wn.prototype.writeFloatBE = function (e, t, n) {
    return nr(this, e, t, !1, n);
  }, wn.prototype.writeDoubleLE = function (e, t, n) {
    return rr(this, e, t, !0, n);
  }, wn.prototype.writeDoubleBE = function (e, t, n) {
    return rr(this, e, t, !1, n);
  }, wn.prototype.copy = function (e, t, n, r) {
    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
    if (0 === e.length || 0 === this.length) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
    if (r < 0) throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
    var u,
        o = r - n;
    if (this === e && n < t && t < r) for (u = o - 1; u >= 0; --u) {
      e[u + t] = this[u + n];
    } else if (o < 1e3 || !wn.TYPED_ARRAY_SUPPORT) for (u = 0; u < o; ++u) {
      e[u + t] = this[u + n];
    } else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
    return o;
  }, wn.prototype.fill = function (e, t, n, r) {
    if ("string" == typeof e) {
      if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
        var u = e.charCodeAt(0);
        u < 256 && (e = u);
      }

      if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
      if ("string" == typeof r && !wn.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
    } else "number" == typeof e && (e &= 255);

    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    var o;
    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) {
      this[o] = e;
    } else {
      var a = Pn(e) ? e : ar(new wn(e, r).toString()),
          i = a.length;

      for (o = 0; o < n - t; ++o) {
        this[o + t] = a[o % i];
      }
    }
    return this;
  };
  var ur = /[^+\/0-9A-Za-z-_]/g;

  function or(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16);
  }

  function ar(e, t) {
    var n;
    t = t || 1 / 0;

    for (var r = e.length, u = null, o = [], a = 0; a < r; ++a) {
      if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
        if (!u) {
          if (n > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }

          if (a + 1 === r) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }

          u = n;
          continue;
        }

        if (n < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), u = n;
          continue;
        }

        n = 65536 + (u - 55296 << 10 | n - 56320);
      } else u && (t -= 3) > -1 && o.push(239, 191, 189);

      if (u = null, n < 128) {
        if ((t -= 1) < 0) break;
        o.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0) break;
        o.push(n >> 6 | 192, 63 & n | 128);
      } else if (n < 65536) {
        if ((t -= 3) < 0) break;
        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
      } else {
        if (!(n < 1114112)) throw new Error("Invalid code point");
        if ((t -= 4) < 0) break;
        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
      }
    }

    return o;
  }

  function ir(e) {
    return function (e) {
      var t, n, r, u, o, a;
      Dn || yn();
      var i = e.length;
      if (i % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      o = "=" === e[i - 2] ? 2 : "=" === e[i - 1] ? 1 : 0, a = new gn(3 * i / 4 - o), r = o > 0 ? i - 4 : i;
      var s = 0;

      for (t = 0, n = 0; t < r; t += 4, n += 3) {
        u = mn[e.charCodeAt(t)] << 18 | mn[e.charCodeAt(t + 1)] << 12 | mn[e.charCodeAt(t + 2)] << 6 | mn[e.charCodeAt(t + 3)], a[s++] = u >> 16 & 255, a[s++] = u >> 8 & 255, a[s++] = 255 & u;
      }

      return 2 === o ? (u = mn[e.charCodeAt(t)] << 2 | mn[e.charCodeAt(t + 1)] >> 4, a[s++] = 255 & u) : 1 === o && (u = mn[e.charCodeAt(t)] << 10 | mn[e.charCodeAt(t + 1)] << 4 | mn[e.charCodeAt(t + 2)] >> 2, a[s++] = u >> 8 & 255, a[s++] = 255 & u), a;
    }(function (e) {
      if ((e = function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }(e).replace(ur, "")).length < 2) return "";

      for (; e.length % 4 != 0;) {
        e += "=";
      }

      return e;
    }(e));
  }

  function sr(e, t, n, r) {
    for (var u = 0; u < r && !(u + n >= t.length || u >= e.length); ++u) {
      t[u + n] = e[u];
    }

    return u;
  }

  function lr(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }

  var cr = Ue(cn);

  var pr = /*#__PURE__*/function () {
    function pr(e, t) {
      _classCallCheck(this, pr);

      (t = t || {}).readChunk || (t.readChunk = 1024), t.newLineCharacter ? t.newLineCharacter = t.newLineCharacter.charCodeAt(0) : t.newLineCharacter = 10, this.fd = "number" == typeof e ? e : cr.openSync(e, "r"), this.options = t, this.newLineCharacter = t.newLineCharacter, this.reset();
    }

    _createClass(pr, [{
      key: "_searchInBuffer",
      value: function _searchInBuffer(e, t) {
        var n = -1;

        for (var _r15 = 0; _r15 <= e.length; _r15++) {
          if (e[_r15] === t) {
            n = _r15;
            break;
          }
        }

        return n;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.eofReached = !1, this.linesCache = [], this.fdPosition = 0;
      }
    }, {
      key: "close",
      value: function close() {
        cr.closeSync(this.fd), this.fd = null;
      }
    }, {
      key: "_extractLines",
      value: function _extractLines(e) {
        var t;
        var n = [];
        var r = 0,
            u = 0;

        for (;;) {
          var _o3 = e[r++];
          if (_o3 === this.newLineCharacter) t = e.slice(u, r), n.push(t), u = r;else if (!_o3) break;
        }

        var o = e.slice(u, r);
        return o.length && n.push(o), n;
      }
    }, {
      key: "_readChunk",
      value: function _readChunk(e) {
        var t,
            n = 0;
        var r = [];

        do {
          var _e14 = new wn(this.options.readChunk);

          t = cr.readSync(this.fd, _e14, 0, this.options.readChunk, this.fdPosition), n += t, this.fdPosition = this.fdPosition + t, r.push(_e14);
        } while (t && -1 === this._searchInBuffer(r[r.length - 1], this.options.newLineCharacter));

        var u = wn.concat(r);
        return t < this.options.readChunk && (this.eofReached = !0, u = u.slice(0, n)), n && (this.linesCache = this._extractLines(u), e && (this.linesCache[0] = wn.concat([e, this.linesCache[0]]))), n;
      }
    }, {
      key: "next",
      value: function next() {
        if (!this.fd) return !1;
        var e,
            t = !1;
        if (this.eofReached && 0 === this.linesCache.length) return t;

        if (this.linesCache.length || (e = this._readChunk()), this.linesCache.length) {
          t = this.linesCache.shift();
          10 !== t[t.length - 1] && (e = this._readChunk(t), e && (t = this.linesCache.shift()));
        }

        return this.eofReached && 0 === this.linesCache.length && this.close(), t && t[t.length - 1] === this.newLineCharacter && (t = t.slice(0, t.length - 1)), t;
      }
    }]);

    return pr;
  }();

  var dr = function dr(e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
      var u = e[t];
      r[u[0]] = u[1];
    }

    return r;
  };

  var fr = /*#__PURE__*/function (_Error) {
    _inherits(fr, _Error);

    var _super = _createSuper(fr);

    function fr() {
      _classCallCheck(this, fr);

      return _super.apply(this, arguments);
    }

    return fr;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var hr = /*#__PURE__*/function (_Error2) {
    _inherits(hr, _Error2);

    var _super2 = _createSuper(hr);

    function hr() {
      _classCallCheck(this, hr);

      return _super2.apply(this, arguments);
    }

    return hr;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var mr = /*#__PURE__*/function (_Error3) {
    _inherits(mr, _Error3);

    var _super3 = _createSuper(mr);

    function mr() {
      _classCallCheck(this, mr);

      return _super3.apply(this, arguments);
    }

    return mr;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var gr = {
    ConfigError: fr,
    DebugError: hr,
    UndefinedParserError: mr
  },
      _Dr = function Dr(e, t) {
    return (_Dr = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    })(e, t);
  };
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
  
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
  
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */


  var _yr = function yr() {
    return (_yr = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var u in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  function Er(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function Cr(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
        u,
        o = n.call(e),
        a = [];

    try {
      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done;) {
        a.push(r.value);
      }
    } catch (e) {
      u = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (u) throw u.error;
      }
    }

    return a;
  }

  function br(e) {
    return this instanceof br ? (this.v = e, this) : new br(e);
  }

  var Ar = Object.freeze({
    __proto__: null,
    __extends: function __extends(e, t) {
      function n() {
        this.constructor = e;
      }

      _Dr(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
    },

    get __assign() {
      return _yr;
    },

    __rest: function __rest(e, t) {
      var n = {};

      for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      }

      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var u = 0;

        for (r = Object.getOwnPropertySymbols(e); u < r.length; u++) {
          t.indexOf(r[u]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[u]) && (n[r[u]] = e[r[u]]);
        }
      }

      return n;
    },
    __decorate: function __decorate(e, t, n, r) {
      var u,
          o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);else for (var i = e.length - 1; i >= 0; i--) {
        (u = e[i]) && (a = (o < 3 ? u(a) : o > 3 ? u(t, n, a) : u(t, n)) || a);
      }
      return o > 3 && a && Object.defineProperty(t, n, a), a;
    },
    __param: function __param(e, t) {
      return function (n, r) {
        t(n, r, e);
      };
    },
    __metadata: function __metadata(e, t) {
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    },
    __awaiter: function __awaiter(e, t, n, r) {
      return new (n || (n = Promise))(function (u, o) {
        function a(e) {
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        }

        function i(e) {
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        }

        function s(e) {
          var t;
          e.done ? u(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, i);
        }

        s((r = r.apply(e, t || [])).next());
      });
    },
    __generator: function __generator(e, t) {
      var n,
          r,
          u,
          o,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & u[0]) throw u[1];
          return u[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: i(0),
        throw: i(1),
        return: i(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function i(o) {
        return function (i) {
          return function (o) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (n = 1, r && (u = 2 & o[0] ? r.return : o[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, o[1])).done) return u;

                switch (r = 0, u && (o = [2 & o[0], u.value]), o[0]) {
                  case 0:
                  case 1:
                    u = o;
                    break;

                  case 4:
                    return a.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    a.label++, r = o[1], o = [0];
                    continue;

                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(u = a.trys, (u = u.length > 0 && u[u.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
                      a.label = o[1];
                      break;
                    }

                    if (6 === o[0] && a.label < u[1]) {
                      a.label = u[1], u = o;
                      break;
                    }

                    if (u && a.label < u[2]) {
                      a.label = u[2], a.ops.push(o);
                      break;
                    }

                    u[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                o = t.call(e, a);
              } catch (e) {
                o = [6, e], r = 0;
              } finally {
                n = u = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, i]);
        };
      }
    },
    __createBinding: function __createBinding(e, t, n, r) {
      void 0 === r && (r = n), e[r] = t[n];
    },
    __exportStar: function __exportStar(e, t) {
      for (var n in e) {
        "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
      }
    },
    __values: Er,
    __read: Cr,
    __spread: function __spread() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e = e.concat(Cr(arguments[t]));
      }

      return e;
    },
    __spreadArrays: function __spreadArrays() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
        e += arguments[t].length;
      }

      var r = Array(e),
          u = 0;

      for (t = 0; t < n; t++) {
        for (var o = arguments[t], a = 0, i = o.length; a < i; a++, u++) {
          r[u] = o[a];
        }
      }

      return r;
    },
    __await: br,
    __asyncGenerator: function __asyncGenerator(e, t, n) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var r,
          u = n.apply(e, t || []),
          o = [];
      return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function () {
        return this;
      }, r;

      function a(e) {
        u[e] && (r[e] = function (t) {
          return new Promise(function (n, r) {
            o.push([e, t, n, r]) > 1 || i(e, t);
          });
        });
      }

      function i(e, t) {
        try {
          (n = u[e](t)).value instanceof br ? Promise.resolve(n.value.v).then(s, l) : c(o[0][2], n);
        } catch (e) {
          c(o[0][3], e);
        }

        var n;
      }

      function s(e) {
        i("next", e);
      }

      function l(e) {
        i("throw", e);
      }

      function c(e, t) {
        e(t), o.shift(), o.length && i(o[0][0], o[0][1]);
      }
    },
    __asyncDelegator: function __asyncDelegator(e) {
      var t, n;
      return t = {}, r("next"), r("throw", function (e) {
        throw e;
      }), r("return"), t[Symbol.iterator] = function () {
        return this;
      }, t;

      function r(r, u) {
        t[r] = e[r] ? function (t) {
          return (n = !n) ? {
            value: br(e[r](t)),
            done: "return" === r
          } : u ? u(t) : t;
        } : u;
      }
    },
    __asyncValues: function __asyncValues(e) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t,
          n = e[Symbol.asyncIterator];
      return n ? n.call(e) : (e = Er(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
        return this;
      }, t);

      function r(n) {
        t[n] = e[n] && function (t) {
          return new Promise(function (r, u) {
            (function (e, t, n, r) {
              Promise.resolve(r).then(function (t) {
                e({
                  value: t,
                  done: n
                });
              }, t);
            })(r, u, (t = e[n](t)).done, t.value);
          });
        };
      }
    },
    __makeTemplateObject: function __makeTemplateObject(e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    },
    __importStar: function __importStar(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) {
        Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
      return t.default = e, t;
    },
    __importDefault: function __importDefault(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    },
    __classPrivateFieldGet: function __classPrivateFieldGet(e, t) {
      if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    },
    __classPrivateFieldSet: function __classPrivateFieldSet(e, t, n) {
      if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, n), n;
    }
  }),
      vr = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.apiDescriptor = {
      key: function key(e) {
        return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e);
      },
      value: function value(e) {
        if (null === e || "object" != _typeof(e)) return JSON.stringify(e);
        if (Array.isArray(e)) return "[".concat(e.map(function (e) {
          return t.apiDescriptor.value(e);
        }).join(", "), "]");
        var n = Object.keys(e);
        return 0 === n.length ? "{}" : "{ ".concat(n.map(function (n) {
          return "".concat(t.apiDescriptor.key(n), ": ").concat(t.apiDescriptor.value(e[n]));
        }).join(", "), " }");
      },
      pair: function pair(_ref6) {
        var e = _ref6.key,
            n = _ref6.value;
        return t.apiDescriptor.value(_defineProperty({}, e, n));
      }
    };
  }),
      Fr = Ue(Ar),
      xr = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(vr, t);
  }),
      Sr = /[|\\{}()[\]^$+*?.]/g,
      wr = function wr(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(Sr, "\\$&");
  },
      Br = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      Tr = $e(function (e) {
    var t = {};

    for (var n in Br) {
      Br.hasOwnProperty(n) && (t[Br[n]] = n);
    }

    var r = e.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };

    for (var u in r) {
      if (r.hasOwnProperty(u)) {
        if (!("channels" in r[u])) throw new Error("missing channels property: " + u);
        if (!("labels" in r[u])) throw new Error("missing channel labels property: " + u);
        if (r[u].labels.length !== r[u].channels) throw new Error("channel and label counts mismatch: " + u);
        var o = r[u].channels,
            a = r[u].labels;
        delete r[u].channels, delete r[u].labels, Object.defineProperty(r[u], "channels", {
          value: o
        }), Object.defineProperty(r[u], "labels", {
          value: a
        });
      }
    }

    r.rgb.hsl = function (e) {
      var t,
          n,
          r = e[0] / 255,
          u = e[1] / 255,
          o = e[2] / 255,
          a = Math.min(r, u, o),
          i = Math.max(r, u, o),
          s = i - a;
      return i === a ? t = 0 : r === i ? t = (u - o) / s : u === i ? t = 2 + (o - r) / s : o === i && (t = 4 + (r - u) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + i) / 2, [t, 100 * (i === a ? 0 : n <= .5 ? s / (i + a) : s / (2 - i - a)), 100 * n];
    }, r.rgb.hsv = function (e) {
      var t,
          n,
          r,
          u,
          o,
          a = e[0] / 255,
          i = e[1] / 255,
          s = e[2] / 255,
          l = Math.max(a, i, s),
          c = l - Math.min(a, i, s),
          p = function p(e) {
        return (l - e) / 6 / c + .5;
      };

      return 0 === c ? u = o = 0 : (o = c / l, t = p(a), n = p(i), r = p(s), a === l ? u = r - n : i === l ? u = 1 / 3 + t - r : s === l && (u = 2 / 3 + n - t), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * o, 100 * l];
    }, r.rgb.hwb = function (e) {
      var t = e[0],
          n = e[1],
          u = e[2];
      return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, u))), 100 * (u = 1 - 1 / 255 * Math.max(t, Math.max(n, u)))];
    }, r.rgb.cmyk = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          u = e[2] / 255;
      return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - u))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - u - t) / (1 - t) || 0), 100 * t];
    }, r.rgb.keyword = function (e) {
      var n = t[e];
      if (n) return n;
      var r,
          u,
          o,
          a = 1 / 0;

      for (var i in Br) {
        if (Br.hasOwnProperty(i)) {
          var s = Br[i],
              l = (u = e, o = s, Math.pow(u[0] - o[0], 2) + Math.pow(u[1] - o[1], 2) + Math.pow(u[2] - o[2], 2));
          l < a && (a = l, r = i);
        }
      }

      return r;
    }, r.keyword.rgb = function (e) {
      return Br[e];
    }, r.rgb.xyz = function (e) {
      var t = e[0] / 255,
          n = e[1] / 255,
          r = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
    }, r.rgb.lab = function (e) {
      var t = r.rgb.xyz(e),
          n = t[0],
          u = t[1],
          o = t[2];
      return u /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116) - 16, 500 * (n - u), 200 * (u - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))];
    }, r.hsl.rgb = function (e) {
      var t,
          n,
          r,
          u,
          o,
          a = e[0] / 360,
          i = e[1] / 100,
          s = e[2] / 100;
      if (0 === i) return [o = 255 * s, o, o];
      t = 2 * s - (n = s < .5 ? s * (1 + i) : s + i - s * i), u = [0, 0, 0];

      for (var l = 0; l < 3; l++) {
        (r = a + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, u[l] = 255 * o;
      }

      return u;
    }, r.hsl.hsv = function (e) {
      var t = e[0],
          n = e[1] / 100,
          r = e[2] / 100,
          u = n,
          o = Math.max(r, .01);
      return n *= (r *= 2) <= 1 ? r : 2 - r, u *= o <= 1 ? o : 2 - o, [t, 100 * (0 === r ? 2 * u / (o + u) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
    }, r.hsv.rgb = function (e) {
      var t = e[0] / 60,
          n = e[1] / 100,
          r = e[2] / 100,
          u = Math.floor(t) % 6,
          o = t - Math.floor(t),
          a = 255 * r * (1 - n),
          i = 255 * r * (1 - n * o),
          s = 255 * r * (1 - n * (1 - o));

      switch (r *= 255, u) {
        case 0:
          return [r, s, a];

        case 1:
          return [i, r, a];

        case 2:
          return [a, r, s];

        case 3:
          return [a, i, r];

        case 4:
          return [s, a, r];

        case 5:
          return [r, a, i];
      }
    }, r.hsv.hsl = function (e) {
      var t,
          n,
          r,
          u = e[0],
          o = e[1] / 100,
          a = e[2] / 100,
          i = Math.max(a, .01);
      return r = (2 - o) * a, n = o * i, [u, 100 * (n = (n /= (t = (2 - o) * i) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
    }, r.hwb.rgb = function (e) {
      var t,
          n,
          r,
          u,
          o,
          a,
          i,
          s = e[0] / 360,
          l = e[1] / 100,
          c = e[2] / 100,
          p = l + c;

      switch (p > 1 && (l /= p, c /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), u = l + r * ((n = 1 - c) - l), t) {
        default:
        case 6:
        case 0:
          o = n, a = u, i = l;
          break;

        case 1:
          o = u, a = n, i = l;
          break;

        case 2:
          o = l, a = n, i = u;
          break;

        case 3:
          o = l, a = u, i = n;
          break;

        case 4:
          o = u, a = l, i = n;
          break;

        case 5:
          o = n, a = l, i = u;
      }

      return [255 * o, 255 * a, 255 * i];
    }, r.cmyk.rgb = function (e) {
      var t = e[0] / 100,
          n = e[1] / 100,
          r = e[2] / 100,
          u = e[3] / 100;
      return [255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u)), 255 * (1 - Math.min(1, r * (1 - u) + u))];
    }, r.xyz.rgb = function (e) {
      var t,
          n,
          r,
          u = e[0] / 100,
          o = e[1] / 100,
          a = e[2] / 100;
      return n = -.9689 * u + 1.8758 * o + .0415 * a, r = .0557 * u + -.204 * o + 1.057 * a, t = (t = 3.2406 * u + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
    }, r.xyz.lab = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
    }, r.lab.xyz = function (e) {
      var t,
          n,
          r,
          u = e[0];
      t = e[1] / 500 + (n = (u + 16) / 116), r = n - e[2] / 200;
      var o = Math.pow(n, 3),
          a = Math.pow(t, 3),
          i = Math.pow(r, 3);
      return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = a > .008856 ? a : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883];
    }, r.lab.lch = function (e) {
      var t,
          n = e[0],
          r = e[1],
          u = e[2];
      return (t = 360 * Math.atan2(u, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + u * u), t];
    }, r.lch.lab = function (e) {
      var t,
          n = e[0],
          r = e[1];
      return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)];
    }, r.rgb.ansi16 = function (e) {
      var t = e[0],
          n = e[1],
          u = e[2],
          o = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
      if (0 === (o = Math.round(o / 50))) return 30;
      var a = 30 + (Math.round(u / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
      return 2 === o && (a += 60), a;
    }, r.hsv.ansi16 = function (e) {
      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
    }, r.rgb.ansi256 = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, r.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
      var n = .5 * (1 + ~~(e > 50));
      return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
    }, r.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t];
      }

      var n;
      return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
    }, r.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
      return "000000".substring(t.length) + t;
    }, r.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      var n = t[0];
      3 === t[0].length && (n = n.split("").map(function (e) {
        return e + e;
      }).join(""));
      var r = parseInt(n, 16);
      return [r >> 16 & 255, r >> 8 & 255, 255 & r];
    }, r.rgb.hcg = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          u = e[2] / 255,
          o = Math.max(Math.max(n, r), u),
          a = Math.min(Math.min(n, r), u),
          i = o - a;
      return t = i <= 0 ? 0 : o === n ? (r - u) / i % 6 : o === r ? 2 + (u - n) / i : 4 + (n - r) / i + 4, t /= 6, [360 * (t %= 1), 100 * i, 100 * (i < 1 ? a / (1 - i) : 0)];
    }, r.hsl.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = 1,
          u = 0;
      return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (u = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * u];
    }, r.hsv.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = t * n,
          u = 0;
      return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
    }, r.hcg.rgb = function (e) {
      var t = e[0] / 360,
          n = e[1] / 100,
          r = e[2] / 100;
      if (0 === n) return [255 * r, 255 * r, 255 * r];
      var u,
          o = [0, 0, 0],
          a = t % 1 * 6,
          i = a % 1,
          s = 1 - i;

      switch (Math.floor(a)) {
        case 0:
          o[0] = 1, o[1] = i, o[2] = 0;
          break;

        case 1:
          o[0] = s, o[1] = 1, o[2] = 0;
          break;

        case 2:
          o[0] = 0, o[1] = 1, o[2] = i;
          break;

        case 3:
          o[0] = 0, o[1] = s, o[2] = 1;
          break;

        case 4:
          o[0] = i, o[1] = 0, o[2] = 1;
          break;

        default:
          o[0] = 1, o[1] = 0, o[2] = s;
      }

      return u = (1 - n) * r, [255 * (n * o[0] + u), 255 * (n * o[1] + u), 255 * (n * o[2] + u)];
    }, r.hcg.hsv = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t),
          r = 0;
      return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
    }, r.hcg.hsl = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100 * (1 - t) + .5 * t,
          r = 0;
      return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
    }, r.hcg.hwb = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (n - t), 100 * (1 - n)];
    }, r.hwb.hcg = function (e) {
      var t = e[1] / 100,
          n = 1 - e[2] / 100,
          r = n - t,
          u = 0;
      return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
    }, r.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    }, r.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    }, r.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    }, r.gray.hsl = r.gray.hsv = function (e) {
      return [0, 0, e[0]];
    }, r.gray.hwb = function (e) {
      return [0, 100, e[0]];
    }, r.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    }, r.gray.lab = function (e) {
      return [e[0], 0, 0];
    }, r.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255),
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    }, r.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    };
  });

  function kr(e) {
    var t = function () {
      for (var e = {}, t = Object.keys(Tr), n = t.length, r = 0; r < n; r++) {
        e[t[r]] = {
          distance: -1,
          parent: null
        };
      }

      return e;
    }(),
        n = [e];

    for (t[e].distance = 0; n.length;) {
      for (var r = n.pop(), u = Object.keys(Tr[r]), o = u.length, a = 0; a < o; a++) {
        var i = u[a],
            s = t[i];
        -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(i));
      }
    }

    return t;
  }

  function Nr(e, t) {
    return function (n) {
      return t(e(n));
    };
  }

  function Or(e, t) {
    for (var n = [t[e].parent, e], r = Tr[t[e].parent][e], u = t[e].parent; t[u].parent;) {
      n.unshift(t[u].parent), r = Nr(Tr[t[u].parent][u], r), u = t[u].parent;
    }

    return r.conversion = n, r;
  }

  var Pr = {};
  Object.keys(Tr).forEach(function (e) {
    Pr[e] = {}, Object.defineProperty(Pr[e], "channels", {
      value: Tr[e].channels
    }), Object.defineProperty(Pr[e], "labels", {
      value: Tr[e].labels
    });

    var t = function (e) {
      for (var t = kr(e), n = {}, r = Object.keys(t), u = r.length, o = 0; o < u; o++) {
        var a = r[o];
        null !== t[a].parent && (n[a] = Or(a, t));
      }

      return n;
    }(e);

    Object.keys(t).forEach(function (n) {
      var r = t[n];
      Pr[e][n] = function (e) {
        var t = function t(_t13) {
          if (null == _t13) return _t13;
          arguments.length > 1 && (_t13 = Array.prototype.slice.call(arguments));
          var n = e(_t13);
          if ("object" == _typeof(n)) for (var r = n.length, u = 0; u < r; u++) {
            n[u] = Math.round(n[u]);
          }
          return n;
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r), Pr[e][n].raw = function (e) {
        var t = function t(_t14) {
          return null == _t14 ? _t14 : (arguments.length > 1 && (_t14 = Array.prototype.slice.call(arguments)), e(_t14));
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r);
    });
  });

  var _r = Pr,
      Ir = $e(function (e) {
    var t = function t(e, _t15) {
      return function () {
        var n = e.apply(_r, arguments);
        return "[".concat(n + _t15, "m");
      };
    },
        n = function n(e, t) {
      return function () {
        var n = e.apply(_r, arguments);
        return "[".concat(38 + t, ";5;").concat(n, "m");
      };
    },
        r = function r(e, t) {
      return function () {
        var n = e.apply(_r, arguments);
        return "[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
      };
    };

    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function get() {
        var e = new Map(),
            u = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        u.color.grey = u.color.gray;

        for (var _i3 = 0, _Object$keys = Object.keys(u); _i3 < _Object$keys.length; _i3++) {
          var _t16 = _Object$keys[_i3];
          var _n16 = u[_t16];

          for (var _i4 = 0, _Object$keys2 = Object.keys(_n16); _i4 < _Object$keys2.length; _i4++) {
            var _t17 = _Object$keys2[_i4];
            var _r16 = _n16[_t17];
            u[_t17] = {
              open: "[".concat(_r16[0], "m"),
              close: "[".concat(_r16[1], "m")
            }, _n16[_t17] = u[_t17], e.set(_r16[0], _r16[1]);
          }

          Object.defineProperty(u, _t16, {
            value: _n16,
            enumerable: !1
          }), Object.defineProperty(u, "codes", {
            value: e,
            enumerable: !1
          });
        }

        var o = function o(e) {
          return e;
        },
            a = function a(e, t, n) {
          return [e, t, n];
        };

        u.color.close = "[39m", u.bgColor.close = "[49m", u.color.ansi = {
          ansi: t(o, 0)
        }, u.color.ansi256 = {
          ansi256: n(o, 0)
        }, u.color.ansi16m = {
          rgb: r(a, 0)
        }, u.bgColor.ansi = {
          ansi: t(o, 10)
        }, u.bgColor.ansi256 = {
          ansi256: n(o, 10)
        }, u.bgColor.ansi16m = {
          rgb: r(a, 10)
        };

        for (var _i5 = 0, _Object$keys3 = Object.keys(_r); _i5 < _Object$keys3.length; _i5++) {
          var _e15 = _Object$keys3[_i5];
          if ("object" != _typeof(_r[_e15])) continue;
          var _o4 = _r[_e15];
          "ansi16" === _e15 && (_e15 = "ansi"), "ansi16" in _o4 && (u.color.ansi[_e15] = t(_o4.ansi16, 0), u.bgColor.ansi[_e15] = t(_o4.ansi16, 10)), "ansi256" in _o4 && (u.color.ansi256[_e15] = n(_o4.ansi256, 0), u.bgColor.ansi256[_e15] = n(_o4.ansi256, 10)), "rgb" in _o4 && (u.color.ansi16m[_e15] = r(_o4.rgb, 0), u.bgColor.ansi16m[_e15] = r(_o4.rgb, 10));
        }

        return u;
      }
    });
  }),
      jr = {
    EOL: "\n"
  },
      Mr = function Mr(e, t) {
    t = t || Re.argv;
    var n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
        r = t.indexOf(n + e),
        u = t.indexOf("--");
    return -1 !== r && (-1 === u || r < u);
  };

  var Lr = Re.env;
  var Rr;

  function qr(e) {
    return function (e) {
      return 0 !== e && {
        level: e,
        hasBasic: !0,
        has256: e >= 2,
        has16m: e >= 3
      };
    }(function (e) {
      if (!1 === Rr) return 0;
      if (Mr("color=16m") || Mr("color=full") || Mr("color=truecolor")) return 3;
      if (Mr("color=256")) return 2;
      if (e && !e.isTTY && !0 !== Rr) return 0;
      var t = Rr ? 1 : 0;

      if ("win32" === Re.platform) {
        var _e16 = jr.release().split(".");

        return Number(Re.versions.node.split(".")[0]) >= 8 && Number(_e16[0]) >= 10 && Number(_e16[2]) >= 10586 ? Number(_e16[2]) >= 14931 ? 3 : 2 : 1;
      }

      if ("CI" in Lr) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
        return e in Lr;
      }) || "codeship" === Lr.CI_NAME ? 1 : t;
      if ("TEAMCITY_VERSION" in Lr) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Lr.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === Lr.COLORTERM) return 3;

      if ("TERM_PROGRAM" in Lr) {
        var _e17 = parseInt((Lr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);

        switch (Lr.TERM_PROGRAM) {
          case "iTerm.app":
            return _e17 >= 3 ? 3 : 2;

          case "Apple_Terminal":
            return 2;
        }
      }

      return /-256(color)?$/i.test(Lr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Lr.TERM) || "COLORTERM" in Lr ? 1 : (Lr.TERM, t);
    }(e));
  }

  Mr("no-color") || Mr("no-colors") || Mr("color=false") ? Rr = !1 : (Mr("color") || Mr("colors") || Mr("color=true") || Mr("color=always")) && (Rr = !0), "FORCE_COLOR" in Lr && (Rr = 0 === Lr.FORCE_COLOR.length || 0 !== parseInt(Lr.FORCE_COLOR, 10));
  var Vr = {
    supportsColor: qr,
    stdout: qr(Re.stdout),
    stderr: qr(Re.stderr)
  };
  var Wr = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      $r = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      Ur = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      zr = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
      Jr = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);

  function Gr(e) {
    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Jr.get(e) || e;
  }

  function Hr(e, t) {
    var n = [],
        r = t.trim().split(/\s*,\s*/g);
    var u;

    var _iterator6 = _createForOfIteratorHelper(r),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _t18 = _step6.value;

        if (isNaN(_t18)) {
          if (!(u = _t18.match(Ur))) throw new Error("Invalid Chalk template style argument: ".concat(_t18, " (in style '").concat(e, "')"));
          n.push(u[2].replace(zr, function (e, t, n) {
            return t ? Gr(t) : n;
          }));
        } else n.push(Number(_t18));
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    return n;
  }

  function Xr(e) {
    $r.lastIndex = 0;
    var t = [];
    var n;

    for (; null !== (n = $r.exec(e));) {
      var _e18 = n[1];

      if (n[2]) {
        var _r17 = Hr(_e18, n[2]);

        t.push([_e18].concat(_r17));
      } else t.push([_e18]);
    }

    return t;
  }

  function Yr(e, t) {
    var n = {};

    var _iterator7 = _createForOfIteratorHelper(t),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _e20 = _step7.value;

        var _iterator8 = _createForOfIteratorHelper(_e20.styles),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t19 = _step8.value;
            n[_t19[0]] = _e20.inverse ? null : _t19.slice(1);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    var r = e;

    for (var _i6 = 0, _Object$keys4 = Object.keys(n); _i6 < _Object$keys4.length; _i6++) {
      var _e19 = _Object$keys4[_i6];

      if (Array.isArray(n[_e19])) {
        if (!(_e19 in r)) throw new Error("Unknown Chalk style: ".concat(_e19));
        r = n[_e19].length > 0 ? r[_e19].apply(r, n[_e19]) : r[_e19];
      }
    }

    return r;
  }

  var Kr = function Kr(e, t) {
    var n = [],
        r = [];
    var u = [];

    if (t.replace(Wr, function (t, o, a, i, s, l) {
      if (o) u.push(Gr(o));else if (i) {
        var _t20 = u.join("");

        u = [], r.push(0 === n.length ? _t20 : Yr(e, n)(_t20)), n.push({
          inverse: a,
          styles: Xr(i)
        });
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        r.push(Yr(e, n)(u.join(""))), u = [], n.pop();
      } else u.push(l);
    }), r.push(u.join("")), n.length > 0) {
      var _e21 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");

      throw new Error(_e21);
    }

    return r.join("");
  },
      Qr = $e(function (e) {
    var t = Vr.stdout,
        n = "win32" === Re.platform && !(Re.env.TERM || "").toLowerCase().startsWith("xterm"),
        r = ["ansi", "ansi", "ansi256", "ansi16m"],
        u = new Set(["gray"]),
        o = Object.create(null);

    function a(e, n) {
      n = n || {};
      var r = t ? t.level : 0;
      e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0;
    }

    function i(e) {
      if (!this || !(this instanceof i) || this.template) {
        var _t21 = {};
        return a(_t21, e), _t21.template = function () {
          var e = [].slice.call(arguments);
          return p.apply(null, [_t21.template].concat(e));
        }, Object.setPrototypeOf(_t21, i.prototype), Object.setPrototypeOf(_t21.template, _t21), _t21.template.constructor = i, _t21.template;
      }

      a(this, e);
    }

    n && (Ir.blue.open = "[94m");

    var _loop2 = function _loop2() {
      var e = _Object$keys5[_i7];
      Ir[e].closeRe = new RegExp(wr(Ir[e].close), "g"), o[e] = {
        get: function get() {
          var t = Ir[e];
          return l.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
        }
      };
    };

    for (var _i7 = 0, _Object$keys5 = Object.keys(Ir); _i7 < _Object$keys5.length; _i7++) {
      _loop2();
    }

    o.visible = {
      get: function get() {
        return l.call(this, this._styles || [], !0, "visible");
      }
    }, Ir.color.closeRe = new RegExp(wr(Ir.color.close), "g");

    var _loop3 = function _loop3() {
      var e = _Object$keys6[_i8];
      u.has(e) || (o[e] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = Ir.color[r[t]][e].apply(null, arguments),
                u = {
              open: n,
              close: Ir.color.close,
              closeRe: Ir.color.closeRe
            };
            return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
          };
        }
      });
    };

    for (var _i8 = 0, _Object$keys6 = Object.keys(Ir.color.ansi); _i8 < _Object$keys6.length; _i8++) {
      _loop3();
    }

    Ir.bgColor.closeRe = new RegExp(wr(Ir.bgColor.close), "g");

    var _loop4 = function _loop4() {
      var e = _Object$keys7[_i9];
      if (u.has(e)) return "continue";
      o["bg" + e[0].toUpperCase() + e.slice(1)] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = Ir.bgColor[r[t]][e].apply(null, arguments),
                u = {
              open: n,
              close: Ir.bgColor.close,
              closeRe: Ir.bgColor.closeRe
            };
            return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
          };
        }
      };
    };

    for (var _i9 = 0, _Object$keys7 = Object.keys(Ir.bgColor.ansi); _i9 < _Object$keys7.length; _i9++) {
      var _ret = _loop4();

      if (_ret === "continue") continue;
    }

    var s = Object.defineProperties(function () {}, o);

    function l(e, t, n) {
      var r = function e() {
        return c.apply(e, arguments);
      };

      r._styles = e, r._empty = t;
      var u = this;
      return Object.defineProperty(r, "level", {
        enumerable: !0,
        get: function get() {
          return u.level;
        },
        set: function set(e) {
          u.level = e;
        }
      }), Object.defineProperty(r, "enabled", {
        enumerable: !0,
        get: function get() {
          return u.enabled;
        },
        set: function set(e) {
          u.enabled = e;
        }
      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r;
    }

    function c() {
      var e = arguments,
          t = e.length;
      var r = String(arguments[0]);
      if (0 === t) return "";
      if (t > 1) for (var _n17 = 1; _n17 < t; _n17++) {
        r += " " + e[_n17];
      }
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
      var u = Ir.dim.open;
      n && this.hasGrey && (Ir.dim.open = "");

      var _iterator9 = _createForOfIteratorHelper(this._styles.slice().reverse()),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _e22 = _step9.value;
          r = _e22.open + r.replace(_e22.closeRe, _e22.open) + _e22.close, r = r.replace(/\r?\n/g, "".concat(_e22.close, "$&").concat(_e22.open));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return Ir.dim.open = u, r;
    }

    function p(e, t) {
      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
      var n = [].slice.call(arguments, 2),
          r = [t.raw[0]];

      for (var _e23 = 1; _e23 < t.length; _e23++) {
        r.push(String(n[_e23 - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[_e23]));
      }

      return Kr(e, r.join(""));
    }

    Object.defineProperties(i.prototype, o), e.exports = i(), e.exports.supportsColor = t, e.exports.default = e.exports;
  }),
      Zr = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.commonDeprecatedHandler = function (e, t, _ref7) {
      var n = _ref7.descriptor;
      var r = ["".concat(Qr.default.yellow("string" == typeof e ? n.key(e) : n.pair(e)), " is deprecated")];
      return t && r.push("we now treat it as ".concat(Qr.default.blue("string" == typeof t ? n.key(t) : n.pair(t)))), r.join("; ") + ".";
    };
  }),
      eu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(Zr, t);
  }),
      tu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.commonInvalidHandler = function (e, t, n) {
      return ["Invalid ".concat(Qr.default.red(n.descriptor.key(e)), " value."), "Expected ".concat(Qr.default.blue(n.schemas[e].expected(n)), ","), "but received ".concat(Qr.default.red(n.descriptor.value(t)), ".")].join(" ");
    };
  }),
      nu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(tu, t);
  }),
      ru = [],
      uu = [],
      ou = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.levenUnknownHandler = function (e, t, _ref8) {
      var n = _ref8.descriptor,
          r = _ref8.logger,
          u = _ref8.schemas;
      var o = ["Ignored unknown option ".concat(Qr.default.yellow(n.pair({
        key: e,
        value: t
      })), ".")],
          a = Object.keys(u).sort().find(function (t) {
        return function (e, t) {
          if (e === t) return 0;
          var n = e;
          e.length > t.length && (e = t, t = n);
          var r = e.length,
              u = t.length;
          if (0 === r) return u;
          if (0 === u) return r;

          for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-u);) {
            r--, u--;
          }

          if (0 === r) return u;

          for (var o, a, i, s, l = 0; l < r && e.charCodeAt(l) === t.charCodeAt(l);) {
            l++;
          }

          if (u -= l, 0 == (r -= l)) return u;

          for (var c = 0, p = 0; c < r;) {
            uu[l + c] = e.charCodeAt(l + c), ru[c] = ++c;
          }

          for (; p < u;) {
            for (o = t.charCodeAt(l + p), i = p++, a = p, c = 0; c < r; c++) {
              s = o === uu[l + c] ? i : i + 1, i = ru[c], a = ru[c] = i > a ? s > a ? a + 1 : s : s > i ? i + 1 : s;
            }
          }

          return a;
        }(e, t) < 3;
      });
      a && o.push("Did you mean ".concat(Qr.default.blue(n.key(a)), "?")), r.warn(o.join(" "));
    };
  }),
      au = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(ou, t);
  }),
      iu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(eu, t), Fr.__exportStar(nu, t), Fr.__exportStar(au, t);
  }),
      su = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];

    function r(e, t) {
      var r = new e(t),
          a = Object.create(r);

      var _iterator10 = _createForOfIteratorHelper(n),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _e24 = _step10.value;
          _e24 in t && (a[_e24] = o(t[_e24], r, u.prototype[_e24].length));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return a;
    }

    t.createSchema = r;

    var u = /*#__PURE__*/function () {
      function u(e) {
        _classCallCheck(this, u);

        this.name = e.name;
      }

      _createClass(u, [{
        key: "default",
        value: function _default(e) {}
      }, {
        key: "expected",
        value: function expected(e) {
          return "nothing";
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return !1;
        }
      }, {
        key: "deprecated",
        value: function deprecated(e, t) {
          return !1;
        }
      }, {
        key: "forward",
        value: function forward(e, t) {}
      }, {
        key: "redirect",
        value: function redirect(e, t) {}
      }, {
        key: "overlap",
        value: function overlap(e, t, n) {
          return e;
        }
      }, {
        key: "preprocess",
        value: function preprocess(e, t) {
          return e;
        }
      }, {
        key: "postprocess",
        value: function postprocess(e, t) {
          return e;
        }
      }], [{
        key: "create",
        value: function create(e) {
          return r(this, e);
        }
      }]);

      return u;
    }();

    function o(e, t, n) {
      return "function" == typeof e ? function () {
        for (var _len2 = arguments.length, r = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          r[_key2] = arguments[_key2];
        }

        return e.apply(void 0, _toConsumableArray(r.slice(0, n - 1)).concat([t], _toConsumableArray(r.slice(n - 1))));
      } : function () {
        return e;
      };
    }

    t.Schema = u;
  }),
      lu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema) {
      _inherits(n, _su$Schema);

      var _super4 = _createSuper(n);

      function n(e) {
        var _this;

        _classCallCheck(this, n);

        _this = _super4.call(this, e), _this._sourceName = e.sourceName;
        return _this;
      }

      _createClass(n, [{
        key: "expected",
        value: function expected(e) {
          return e.schemas[this._sourceName].expected(e);
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return t.schemas[this._sourceName].validate(e, t);
        }
      }, {
        key: "redirect",
        value: function redirect(e, t) {
          return this._sourceName;
        }
      }]);

      return n;
    }(su.Schema);

    t.AliasSchema = n;
  }),
      cu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema2) {
      _inherits(n, _su$Schema2);

      var _super5 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super5.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "anything";
        }
      }, {
        key: "validate",
        value: function validate() {
          return !0;
        }
      }]);

      return n;
    }(su.Schema);

    t.AnySchema = n;
  }),
      pu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema3) {
      _inherits(n, _su$Schema3);

      var _super6 = _createSuper(n);

      function n(e) {
        var _this2;

        _classCallCheck(this, n);

        var t = e.valueSchema,
            _e$name = e.name,
            _n18 = _e$name === void 0 ? t.name : _e$name,
            r = Fr.__rest(e, ["valueSchema", "name"]);

        _this2 = _super6.call(this, Object.assign({}, r, {
          name: _n18
        })), _this2._valueSchema = t;
        return _this2;
      }

      _createClass(n, [{
        key: "expected",
        value: function expected(e) {
          return "an array of ".concat(this._valueSchema.expected(e));
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          if (!Array.isArray(e)) return !1;
          var n = [];

          var _iterator11 = _createForOfIteratorHelper(e),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _r18 = _step11.value;

              var _e25 = t.normalizeValidateResult(this._valueSchema.validate(_r18, t), _r18);

              !0 !== _e25 && n.push(_e25.value);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }

          return 0 === n.length || {
            value: n
          };
        }
      }, {
        key: "deprecated",
        value: function deprecated(e, t) {
          var n = [];

          var _iterator12 = _createForOfIteratorHelper(e),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _r19 = _step12.value;

              var _e26 = t.normalizeDeprecatedResult(this._valueSchema.deprecated(_r19, t), _r19);

              !1 !== _e26 && n.push.apply(n, _toConsumableArray(_e26.map(function (_ref9) {
                var e = _ref9.value;
                return {
                  value: [e]
                };
              })));
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          return n;
        }
      }, {
        key: "forward",
        value: function forward(e, t) {
          var n = [];

          var _iterator13 = _createForOfIteratorHelper(e),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _u5 = _step13.value;

              var _e27 = t.normalizeForwardResult(this._valueSchema.forward(_u5, t), _u5);

              n.push.apply(n, _toConsumableArray(_e27.map(r)));
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          return n;
        }
      }, {
        key: "redirect",
        value: function redirect(e, t) {
          var n = [],
              u = [];

          var _iterator14 = _createForOfIteratorHelper(e),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _o5 = _step14.value;

              var _e28 = t.normalizeRedirectResult(this._valueSchema.redirect(_o5, t), _o5);

              "remain" in _e28 && n.push(_e28.remain), u.push.apply(u, _toConsumableArray(_e28.redirect.map(r)));
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return 0 === n.length ? {
            redirect: u
          } : {
            redirect: u,
            remain: n
          };
        }
      }, {
        key: "overlap",
        value: function overlap(e, t) {
          return e.concat(t);
        }
      }]);

      return n;
    }(su.Schema);

    function r(_ref10) {
      var e = _ref10.from,
          t = _ref10.to;
      return {
        from: [e],
        to: t
      };
    }

    t.ArraySchema = n;
  }),
      du = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema4) {
      _inherits(n, _su$Schema4);

      var _super7 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super7.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "true or false";
        }
      }, {
        key: "validate",
        value: function validate(e) {
          return "boolean" == typeof e;
        }
      }]);

      return n;
    }(su.Schema);

    t.BooleanSchema = n;
  }),
      fu = $e(function (e, t) {
    function n(e, t) {
      return "string" == typeof e || "key" in e ? {
        from: t,
        to: e
      } : "from" in e ? {
        from: e.from,
        to: e.to
      } : {
        from: t,
        to: e.to
      };
    }

    function r(e, t) {
      return void 0 === e ? [] : Array.isArray(e) ? e.map(function (e) {
        return n(e, t);
      }) : [n(e, t)];
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.recordFromArray = function (e, t) {
      var n = Object.create(null);

      var _iterator15 = _createForOfIteratorHelper(e),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _r20 = _step15.value;
          var _e29 = _r20[t];
          if (n[_e29]) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(_e29)));
          n[_e29] = _r20;
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      return n;
    }, t.mapFromArray = function (e, t) {
      var n = new Map();

      var _iterator16 = _createForOfIteratorHelper(e),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _r21 = _step16.value;
          var _e30 = _r21[t];
          if (n.has(_e30)) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(_e30)));
          n.set(_e30, _r21);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return n;
    }, t.createAutoChecklist = function () {
      var e = Object.create(null);
      return function (t) {
        var n = JSON.stringify(t);
        return !!e[n] || (e[n] = !0, !1);
      };
    }, t.partition = function (e, t) {
      var n = [],
          r = [];

      var _iterator17 = _createForOfIteratorHelper(e),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var _u6 = _step17.value;
          t(_u6) ? n.push(_u6) : r.push(_u6);
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return [n, r];
    }, t.isInt = function (e) {
      return e === Math.floor(e);
    }, t.comparePrimitive = function (e, t) {
      if (e === t) return 0;

      var n = _typeof(e),
          r = _typeof(t),
          u = ["undefined", "object", "boolean", "number", "string"];

      return n !== r ? u.indexOf(n) - u.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t);
    }, t.normalizeDefaultResult = function (e) {
      return void 0 === e ? {} : e;
    }, t.normalizeValidateResult = function (e, t) {
      return !0 === e || (!1 === e ? {
        value: t
      } : e);
    }, t.normalizeDeprecatedResult = function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return !1 !== e && (!0 === e ? !!n || [{
        value: t
      }] : "value" in e ? [e] : 0 !== e.length && e);
    }, t.normalizeTransferResult = n, t.normalizeForwardResult = r, t.normalizeRedirectResult = function (e, t) {
      var n = r("object" == _typeof(e) && "redirect" in e ? e.redirect : e, t);
      return 0 === n.length ? {
        remain: t,
        redirect: n
      } : "object" == _typeof(e) && "remain" in e ? {
        remain: e.remain,
        redirect: n
      } : {
        redirect: n
      };
    };
  }),
      hu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema5) {
      _inherits(n, _su$Schema5);

      var _super8 = _createSuper(n);

      function n(e) {
        var _this3;

        _classCallCheck(this, n);

        _this3 = _super8.call(this, e), _this3._choices = fu.mapFromArray(e.choices.map(function (e) {
          return e && "object" == _typeof(e) ? e : {
            value: e
          };
        }), "value");
        return _this3;
      }

      _createClass(n, [{
        key: "expected",
        value: function expected(_ref11) {
          var _this4 = this;

          var e = _ref11.descriptor;
          var t = Array.from(this._choices.keys()).map(function (e) {
            return _this4._choices.get(e);
          }).filter(function (e) {
            return !e.deprecated;
          }).map(function (e) {
            return e.value;
          }).sort(fu.comparePrimitive).map(e.value),
              n = t.slice(0, -2),
              r = t.slice(-2);
          return n.concat(r.join(" or ")).join(", ");
        }
      }, {
        key: "validate",
        value: function validate(e) {
          return this._choices.has(e);
        }
      }, {
        key: "deprecated",
        value: function deprecated(e) {
          var t = this._choices.get(e);

          return !(!t || !t.deprecated) && {
            value: e
          };
        }
      }, {
        key: "forward",
        value: function forward(e) {
          var t = this._choices.get(e);

          return t ? t.forward : void 0;
        }
      }, {
        key: "redirect",
        value: function redirect(e) {
          var t = this._choices.get(e);

          return t ? t.redirect : void 0;
        }
      }]);

      return n;
    }(su.Schema);

    t.ChoiceSchema = n;
  }),
      mu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema6) {
      _inherits(n, _su$Schema6);

      var _super9 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super9.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "a number";
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return "number" == typeof e;
        }
      }]);

      return n;
    }(su.Schema);

    t.NumberSchema = n;
  }),
      gu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_mu$NumberSchema) {
      _inherits(n, _mu$NumberSchema);

      var _super10 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super10.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "an integer";
        }
      }, {
        key: "validate",
        value: function validate(e, t) {
          return !0 === t.normalizeValidateResult(_get(_getPrototypeOf(n.prototype), "validate", this).call(this, e, t), e) && fu.isInt(e);
        }
      }]);

      return n;
    }(mu.NumberSchema);

    t.IntegerSchema = n;
  }),
      Du = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = /*#__PURE__*/function (_su$Schema7) {
      _inherits(n, _su$Schema7);

      var _super11 = _createSuper(n);

      function n() {
        _classCallCheck(this, n);

        return _super11.apply(this, arguments);
      }

      _createClass(n, [{
        key: "expected",
        value: function expected() {
          return "a string";
        }
      }, {
        key: "validate",
        value: function validate(e) {
          return "string" == typeof e;
        }
      }]);

      return n;
    }(su.Schema);

    t.StringSchema = n;
  }),
      yu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(lu, t), Fr.__exportStar(cu, t), Fr.__exportStar(pu, t), Fr.__exportStar(du, t), Fr.__exportStar(hu, t), Fr.__exportStar(gu, t), Fr.__exportStar(mu, t), Fr.__exportStar(Du, t);
  }),
      Eu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.defaultDescriptor = vr.apiDescriptor, t.defaultUnknownHandler = ou.levenUnknownHandler, t.defaultInvalidHandler = nu.commonInvalidHandler, t.defaultDeprecatedHandler = Zr.commonDeprecatedHandler;
  }),
      Cu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.normalize = function (e, t, r) {
      return new n(t, r).normalize(e);
    };

    var n = /*#__PURE__*/function () {
      function n(e, t) {
        _classCallCheck(this, n);

        var _ref12 = t || {},
            _ref12$logger = _ref12.logger,
            _n19 = _ref12$logger === void 0 ? console : _ref12$logger,
            _ref12$descriptor = _ref12.descriptor,
            r = _ref12$descriptor === void 0 ? Eu.defaultDescriptor : _ref12$descriptor,
            _ref12$unknown = _ref12.unknown,
            u = _ref12$unknown === void 0 ? Eu.defaultUnknownHandler : _ref12$unknown,
            _ref12$invalid = _ref12.invalid,
            o = _ref12$invalid === void 0 ? Eu.defaultInvalidHandler : _ref12$invalid,
            _ref12$deprecated = _ref12.deprecated,
            a = _ref12$deprecated === void 0 ? Eu.defaultDeprecatedHandler : _ref12$deprecated;

        this._utils = {
          descriptor: r,
          logger: _n19 || {
            warn: function warn() {}
          },
          schemas: fu.recordFromArray(e, "name"),
          normalizeDefaultResult: fu.normalizeDefaultResult,
          normalizeDeprecatedResult: fu.normalizeDeprecatedResult,
          normalizeForwardResult: fu.normalizeForwardResult,
          normalizeRedirectResult: fu.normalizeRedirectResult,
          normalizeValidateResult: fu.normalizeValidateResult
        }, this._unknownHandler = u, this._invalidHandler = o, this._deprecatedHandler = a, this.cleanHistory();
      }

      _createClass(n, [{
        key: "cleanHistory",
        value: function cleanHistory() {
          this._hasDeprecationWarned = fu.createAutoChecklist();
        }
      }, {
        key: "normalize",
        value: function normalize(e) {
          var _this5 = this;

          var t = {},
              n = [e],
              r = function r() {
            for (; 0 !== n.length;) {
              var _e31 = n.shift(),
                  _r22 = _this5._applyNormalization(_e31, t);

              n.push.apply(n, _toConsumableArray(_r22));
            }
          };

          r();

          for (var _i10 = 0, _Object$keys8 = Object.keys(this._utils.schemas); _i10 < _Object$keys8.length; _i10++) {
            var _e32 = _Object$keys8[_i10];
            var _r23 = this._utils.schemas[_e32];

            if (!(_e32 in t)) {
              var _t22 = fu.normalizeDefaultResult(_r23.default(this._utils));

              "value" in _t22 && n.push(_defineProperty({}, _e32, _t22.value));
            }
          }

          r();

          for (var _i11 = 0, _Object$keys9 = Object.keys(this._utils.schemas); _i11 < _Object$keys9.length; _i11++) {
            var _e33 = _Object$keys9[_i11];
            var _n20 = this._utils.schemas[_e33];
            _e33 in t && (t[_e33] = _n20.postprocess(t[_e33], this._utils));
          }

          return t;
        }
      }, {
        key: "_applyNormalization",
        value: function _applyNormalization(e, t) {
          var _this6 = this;

          var n = [],
              _fu$partition = fu.partition(Object.keys(e), function (e) {
            return e in _this6._utils.schemas;
          }),
              _fu$partition2 = _slicedToArray(_fu$partition, 2),
              r = _fu$partition2[0],
              u = _fu$partition2[1];

          var _iterator18 = _createForOfIteratorHelper(r),
              _step18;

          try {
            var _loop5 = function _loop5() {
              var u = _step18.value;
              var r = _this6._utils.schemas[u],
                  o = r.preprocess(e[u], _this6._utils),
                  a = fu.normalizeValidateResult(r.validate(o, _this6._utils), o);

              if (!0 !== a) {
                var _e34 = a.value,
                    _t23 = _this6._invalidHandler(u, _e34, _this6._utils);

                throw "string" == typeof _t23 ? new Error(_t23) : _t23;
              }

              var i = function i(_ref13) {
                var e = _ref13.from,
                    t = _ref13.to;
                n.push("string" == typeof t ? _defineProperty({}, t, e) : _defineProperty({}, t.key, t.value));
              },
                  s = function s(_ref16) {
                var e = _ref16.value,
                    t = _ref16.redirectTo;
                var n = fu.normalizeDeprecatedResult(r.deprecated(e, _this6._utils), o, !0);
                if (!1 !== n) if (!0 === n) _this6._hasDeprecationWarned(u) || _this6._utils.logger.warn(_this6._deprecatedHandler(u, t, _this6._utils));else {
                  var _iterator20 = _createForOfIteratorHelper(n),
                      _step20;

                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _e35 = _step20.value.value;
                      var _n21 = {
                        key: u,
                        value: _e35
                      };

                      if (!_this6._hasDeprecationWarned(_n21)) {
                        var _r24 = "string" == typeof t ? {
                          key: t,
                          value: _e35
                        } : t;

                        _this6._utils.logger.warn(_this6._deprecatedHandler(_n21, _r24, _this6._utils));
                      }
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                }
              };

              fu.normalizeForwardResult(r.forward(o, _this6._utils), o).forEach(i);
              var l = fu.normalizeRedirectResult(r.redirect(o, _this6._utils), o);

              if (l.redirect.forEach(i), "remain" in l) {
                var _e36 = l.remain;
                t[u] = u in t ? r.overlap(t[u], _e36, _this6._utils) : _e36, s({
                  value: _e36
                });
              }

              var _iterator21 = _createForOfIteratorHelper(l.redirect),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var _step21$value = _step21.value,
                      _e37 = _step21$value.from,
                      _t24 = _step21$value.to;
                  s({
                    value: _e37,
                    redirectTo: _t24
                  });
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
            };

            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              _loop5();
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          var _iterator19 = _createForOfIteratorHelper(u),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _r25 = _step19.value;

              var _u7 = e[_r25],
                  _o6 = this._unknownHandler(_r25, _u7, this._utils);

              if (_o6) for (var _i12 = 0, _Object$keys10 = Object.keys(_o6); _i12 < _Object$keys10.length; _i12++) {
                var _e38 = _Object$keys10[_i12];

                var _r26 = _defineProperty({}, _e38, _o6[_e38]);

                _e38 in this._utils.schemas ? n.push(_r26) : Object.assign(t, _r26);
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          return n;
        }
      }]);

      return n;
    }();

    t.Normalizer = n;
  }),
      bu = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Fr.__exportStar(xr, t), Fr.__exportStar(iu, t), Fr.__exportStar(yu, t), Fr.__exportStar(Cu, t), Fr.__exportStar(su, t);
  });

  var Au = [],
      vu = [],
      Fu = function Fu(e, t) {
    if (e === t) return 0;
    var n = e;
    e.length > t.length && (e = t, t = n);
    var r = e.length,
        u = t.length;

    for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-u);) {
      r--, u--;
    }

    var o,
        a,
        i,
        s,
        l = 0;

    for (; l < r && e.charCodeAt(l) === t.charCodeAt(l);) {
      l++;
    }

    if (r -= l, u -= l, 0 === r) return u;
    var c = 0,
        p = 0;

    for (; c < r;) {
      vu[c] = e.charCodeAt(l + c), Au[c] = ++c;
    }

    for (; p < u;) {
      for (o = t.charCodeAt(l + p), i = p++, a = p, c = 0; c < r; c++) {
        s = o === vu[c] ? i : i + 1, i = Au[c], a = Au[c] = i > a ? s > a ? a + 1 : s : s > i ? i + 1 : s;
      }
    }

    return a;
  };

  var xu = Fu,
      Su = Fu;
  xu.default = Su;
  var wu = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  var Bu = {};

  for (var _i13 = 0, _Object$keys11 = Object.keys(wu); _i13 < _Object$keys11.length; _i13++) {
    var _e39 = _Object$keys11[_i13];
    Bu[wu[_e39]] = _e39;
  }

  var Tu = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  var ku = Tu;

  for (var _i14 = 0, _Object$keys12 = Object.keys(Tu); _i14 < _Object$keys12.length; _i14++) {
    var _e40 = _Object$keys12[_i14];
    if (!("channels" in Tu[_e40])) throw new Error("missing channels property: " + _e40);
    if (!("labels" in Tu[_e40])) throw new Error("missing channel labels property: " + _e40);
    if (Tu[_e40].labels.length !== Tu[_e40].channels) throw new Error("channel and label counts mismatch: " + _e40);
    var _Tu$_e = Tu[_e40],
        _t25 = _Tu$_e.channels,
        _n22 = _Tu$_e.labels;
    delete Tu[_e40].channels, delete Tu[_e40].labels, Object.defineProperty(Tu[_e40], "channels", {
      value: _t25
    }), Object.defineProperty(Tu[_e40], "labels", {
      value: _n22
    });
  }

  function Nu(e) {
    var t = function () {
      var e = {},
          t = Object.keys(ku);

      for (var _n23 = t.length, _r28 = 0; _r28 < _n23; _r28++) {
        e[t[_r28]] = {
          distance: -1,
          parent: null
        };
      }

      return e;
    }(),
        n = [e];

    for (t[e].distance = 0; n.length;) {
      var _e41 = n.pop(),
          _r29 = Object.keys(ku[_e41]);

      for (var _u8 = _r29.length, _o7 = 0; _o7 < _u8; _o7++) {
        var _u9 = _r29[_o7],
            _a6 = t[_u9];
        -1 === _a6.distance && (_a6.distance = t[_e41].distance + 1, _a6.parent = _e41, n.unshift(_u9));
      }
    }

    return t;
  }

  function Ou(e, t) {
    return function (n) {
      return t(e(n));
    };
  }

  function Pu(e, t) {
    var n = [t[e].parent, e];
    var r = ku[t[e].parent][e],
        u = t[e].parent;

    for (; t[u].parent;) {
      n.unshift(t[u].parent), r = Ou(ku[t[u].parent][u], r), u = t[u].parent;
    }

    return r.conversion = n, r;
  }

  Tu.rgb.hsl = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        u = Math.min(t, n, r),
        o = Math.max(t, n, r),
        a = o - u;
    var i, s;
    o === u ? i = 0 : t === o ? i = (n - r) / a : n === o ? i = 2 + (r - t) / a : r === o && (i = 4 + (t - n) / a), i = Math.min(60 * i, 360), i < 0 && (i += 360);
    var l = (u + o) / 2;
    return s = o === u ? 0 : l <= .5 ? a / (o + u) : a / (2 - o - u), [i, 100 * s, 100 * l];
  }, Tu.rgb.hsv = function (e) {
    var t, n, r, u, o;

    var a = e[0] / 255,
        i = e[1] / 255,
        s = e[2] / 255,
        l = Math.max(a, i, s),
        c = l - Math.min(a, i, s),
        p = function p(e) {
      return (l - e) / 6 / c + .5;
    };

    return 0 === c ? (u = 0, o = 0) : (o = c / l, t = p(a), n = p(i), r = p(s), a === l ? u = r - n : i === l ? u = 1 / 3 + t - r : s === l && (u = 2 / 3 + n - t), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * o, 100 * l];
  }, Tu.rgb.hwb = function (e) {
    var t = e[0],
        n = e[1];
    var r = e[2];
    var u = Tu.rgb.hsl(e)[0],
        o = 1 / 255 * Math.min(t, Math.min(n, r));
    return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [u, 100 * o, 100 * r];
  }, Tu.rgb.cmyk = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        u = Math.min(1 - t, 1 - n, 1 - r);
    return [100 * ((1 - t - u) / (1 - u) || 0), 100 * ((1 - n - u) / (1 - u) || 0), 100 * ((1 - r - u) / (1 - u) || 0), 100 * u];
  }, Tu.rgb.keyword = function (e) {
    var t = Bu[e];
    if (t) return t;
    var n,
        r = 1 / 0;

    for (var _i15 = 0, _Object$keys13 = Object.keys(wu); _i15 < _Object$keys13.length; _i15++) {
      var _t26 = _Object$keys13[_i15];

      var _a7 = (o = wu[_t26], Math.pow((u = e)[0] - o[0], 2) + Math.pow(u[1] - o[1], 2) + Math.pow(u[2] - o[2], 2));

      _a7 < r && (r = _a7, n = _t26);
    }

    var u, o;
    return n;
  }, Tu.keyword.rgb = function (e) {
    return wu[e];
  }, Tu.rgb.xyz = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255;
    t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;
    return [100 * (.4124 * t + .3576 * n + .1805 * r), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
  }, Tu.rgb.lab = function (e) {
    var t = Tu.rgb.xyz(e);
    var n = t[0],
        r = t[1],
        u = t[2];
    n /= 95.047, r /= 100, u /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116;
    return [116 * r - 16, 500 * (n - r), 200 * (r - u)];
  }, Tu.hsl.rgb = function (e) {
    var t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    var u, o, a;
    if (0 === n) return a = 255 * r, [a, a, a];
    u = r < .5 ? r * (1 + n) : r + n - r * n;
    var i = 2 * r - u,
        s = [0, 0, 0];

    for (var _e42 = 0; _e42 < 3; _e42++) {
      o = t + 1 / 3 * -(_e42 - 1), o < 0 && o++, o > 1 && o--, a = 6 * o < 1 ? i + 6 * (u - i) * o : 2 * o < 1 ? u : 3 * o < 2 ? i + (u - i) * (2 / 3 - o) * 6 : i, s[_e42] = 255 * a;
    }

    return s;
  }, Tu.hsl.hsv = function (e) {
    var t = e[0];
    var n = e[1] / 100,
        r = e[2] / 100,
        u = n;
    var o = Math.max(r, .01);
    r *= 2, n *= r <= 1 ? r : 2 - r, u *= o <= 1 ? o : 2 - o;
    return [t, 100 * (0 === r ? 2 * u / (o + u) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
  }, Tu.hsv.rgb = function (e) {
    var t = e[0] / 60,
        n = e[1] / 100;
    var r = e[2] / 100;
    var u = Math.floor(t) % 6,
        o = t - Math.floor(t),
        a = 255 * r * (1 - n),
        i = 255 * r * (1 - n * o),
        s = 255 * r * (1 - n * (1 - o));

    switch (r *= 255, u) {
      case 0:
        return [r, s, a];

      case 1:
        return [i, r, a];

      case 2:
        return [a, r, s];

      case 3:
        return [a, i, r];

      case 4:
        return [s, a, r];

      case 5:
        return [r, a, i];
    }
  }, Tu.hsv.hsl = function (e) {
    var t = e[0],
        n = e[1] / 100,
        r = e[2] / 100,
        u = Math.max(r, .01);
    var o, a;
    a = (2 - n) * r;
    var i = (2 - n) * u;
    return o = n * u, o /= i <= 1 ? i : 2 - i, o = o || 0, a /= 2, [t, 100 * o, 100 * a];
  }, Tu.hwb.rgb = function (e) {
    var t = e[0] / 360;
    var n = e[1] / 100,
        r = e[2] / 100;
    var u = n + r;
    var o;
    u > 1 && (n /= u, r /= u);
    var a = Math.floor(6 * t),
        i = 1 - r;
    o = 6 * t - a, 0 != (1 & a) && (o = 1 - o);
    var s = n + o * (i - n);
    var l, c, p;

    switch (a) {
      default:
      case 6:
      case 0:
        l = i, c = s, p = n;
        break;

      case 1:
        l = s, c = i, p = n;
        break;

      case 2:
        l = n, c = i, p = s;
        break;

      case 3:
        l = n, c = s, p = i;
        break;

      case 4:
        l = s, c = n, p = i;
        break;

      case 5:
        l = i, c = n, p = s;
    }

    return [255 * l, 255 * c, 255 * p];
  }, Tu.cmyk.rgb = function (e) {
    var t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100,
        u = e[3] / 100;
    return [255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u)), 255 * (1 - Math.min(1, r * (1 - u) + u))];
  }, Tu.xyz.rgb = function (e) {
    var t = e[0] / 100,
        n = e[1] / 100,
        r = e[2] / 100;
    var u, o, a;
    return u = 3.2406 * t + -1.5372 * n + -.4986 * r, o = -.9689 * t + 1.8758 * n + .0415 * r, a = .0557 * t + -.204 * n + 1.057 * r, u = u > .0031308 ? 1.055 * Math.pow(u, 1 / 2.4) - .055 : 12.92 * u, o = o > .0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - .055 : 12.92 * o, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a, u = Math.min(Math.max(0, u), 1), o = Math.min(Math.max(0, o), 1), a = Math.min(Math.max(0, a), 1), [255 * u, 255 * o, 255 * a];
  }, Tu.xyz.lab = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2];
    t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116;
    return [116 * n - 16, 500 * (t - n), 200 * (n - r)];
  }, Tu.lab.xyz = function (e) {
    var t, n, r;
    n = (e[0] + 16) / 116, t = e[1] / 500 + n, r = n - e[2] / 200;
    var u = Math.pow(n, 3),
        o = Math.pow(t, 3),
        a = Math.pow(r, 3);
    return n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = o > .008856 ? o : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [t, n, r];
  }, Tu.lab.lch = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2];
    var u;
    u = 360 * Math.atan2(r, n) / 2 / Math.PI, u < 0 && (u += 360);
    return [t, Math.sqrt(n * n + r * r), u];
  }, Tu.lch.lab = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2] / 360 * 2 * Math.PI;
    return [t, n * Math.cos(r), n * Math.sin(r)];
  }, Tu.rgb.ansi16 = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var _e43 = _slicedToArray(e, 3),
        n = _e43[0],
        r = _e43[1],
        u = _e43[2];

    var o = null === t ? Tu.rgb.hsv(e)[2] : t;
    if (o = Math.round(o / 50), 0 === o) return 30;
    var a = 30 + (Math.round(u / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
    return 2 === o && (a += 60), a;
  }, Tu.hsv.ansi16 = function (e) {
    return Tu.rgb.ansi16(Tu.hsv.rgb(e), e[2]);
  }, Tu.rgb.ansi256 = function (e) {
    var t = e[0],
        n = e[1],
        r = e[2];
    if (t === n && n === r) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
    return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
  }, Tu.ansi16.rgb = function (e) {
    var t = e % 10;
    if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
    var n = .5 * (1 + ~~(e > 50));
    return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
  }, Tu.ansi256.rgb = function (e) {
    if (e >= 232) {
      var _t27 = 10 * (e - 232) + 8;

      return [_t27, _t27, _t27];
    }

    var t;
    e -= 16;
    return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255];
  }, Tu.rgb.hex = function (e) {
    var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
    return "000000".substring(t.length) + t;
  }, Tu.hex.rgb = function (e) {
    var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    var n = t[0];
    3 === t[0].length && (n = n.split("").map(function (e) {
      return e + e;
    }).join(""));
    var r = parseInt(n, 16);
    return [r >> 16 & 255, r >> 8 & 255, 255 & r];
  }, Tu.rgb.hcg = function (e) {
    var t = e[0] / 255,
        n = e[1] / 255,
        r = e[2] / 255,
        u = Math.max(Math.max(t, n), r),
        o = Math.min(Math.min(t, n), r),
        a = u - o;
    var i, s;
    return i = a < 1 ? o / (1 - a) : 0, s = a <= 0 ? 0 : u === t ? (n - r) / a % 6 : u === n ? 2 + (r - t) / a : 4 + (t - n) / a, s /= 6, s %= 1, [360 * s, 100 * a, 100 * i];
  }, Tu.hsl.hcg = function (e) {
    var t = e[1] / 100,
        n = e[2] / 100,
        r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
    var u = 0;
    return r < 1 && (u = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * u];
  }, Tu.hsv.hcg = function (e) {
    var t = e[1] / 100,
        n = e[2] / 100,
        r = t * n;
    var u = 0;
    return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
  }, Tu.hcg.rgb = function (e) {
    var t = e[0] / 360,
        n = e[1] / 100,
        r = e[2] / 100;
    if (0 === n) return [255 * r, 255 * r, 255 * r];
    var u = [0, 0, 0],
        o = t % 1 * 6,
        a = o % 1,
        i = 1 - a;
    var s = 0;

    switch (Math.floor(o)) {
      case 0:
        u[0] = 1, u[1] = a, u[2] = 0;
        break;

      case 1:
        u[0] = i, u[1] = 1, u[2] = 0;
        break;

      case 2:
        u[0] = 0, u[1] = 1, u[2] = a;
        break;

      case 3:
        u[0] = 0, u[1] = i, u[2] = 1;
        break;

      case 4:
        u[0] = a, u[1] = 0, u[2] = 1;
        break;

      default:
        u[0] = 1, u[1] = 0, u[2] = i;
    }

    return s = (1 - n) * r, [255 * (n * u[0] + s), 255 * (n * u[1] + s), 255 * (n * u[2] + s)];
  }, Tu.hcg.hsv = function (e) {
    var t = e[1] / 100,
        n = t + e[2] / 100 * (1 - t);
    var r = 0;
    return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
  }, Tu.hcg.hsl = function (e) {
    var t = e[1] / 100,
        n = e[2] / 100 * (1 - t) + .5 * t;
    var r = 0;
    return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
  }, Tu.hcg.hwb = function (e) {
    var t = e[1] / 100,
        n = t + e[2] / 100 * (1 - t);
    return [e[0], 100 * (n - t), 100 * (1 - n)];
  }, Tu.hwb.hcg = function (e) {
    var t = e[1] / 100,
        n = 1 - e[2] / 100,
        r = n - t;
    var u = 0;
    return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
  }, Tu.apple.rgb = function (e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  }, Tu.rgb.apple = function (e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  }, Tu.gray.rgb = function (e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  }, Tu.gray.hsl = function (e) {
    return [0, 0, e[0]];
  }, Tu.gray.hsv = Tu.gray.hsl, Tu.gray.hwb = function (e) {
    return [0, 100, e[0]];
  }, Tu.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  }, Tu.gray.lab = function (e) {
    return [e[0], 0, 0];
  }, Tu.gray.hex = function (e) {
    var t = 255 & Math.round(e[0] / 100 * 255),
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  }, Tu.rgb.gray = function (e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  };
  var _u = {};
  Object.keys(ku).forEach(function (e) {
    _u[e] = {}, Object.defineProperty(_u[e], "channels", {
      value: ku[e].channels
    }), Object.defineProperty(_u[e], "labels", {
      value: ku[e].labels
    });

    var t = function (e) {
      var t = Nu(e),
          n = {},
          r = Object.keys(t);

      for (var _e44 = r.length, _u10 = 0; _u10 < _e44; _u10++) {
        var _e45 = r[_u10];
        null !== t[_e45].parent && (n[_e45] = Pu(_e45, t));
      }

      return n;
    }(e);

    Object.keys(t).forEach(function (n) {
      var r = t[n];
      _u[e][n] = function (e) {
        var t = function t() {
          for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            t[_key3] = arguments[_key3];
          }

          var n = t[0];
          if (null == n) return n;
          n.length > 1 && (t = n);
          var r = e(t);
          if ("object" == _typeof(r)) for (var _e46 = r.length, _t28 = 0; _t28 < _e46; _t28++) {
            r[_t28] = Math.round(r[_t28]);
          }
          return r;
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r), _u[e][n].raw = function (e) {
        var t = function t() {
          for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            t[_key4] = arguments[_key4];
          }

          var n = t[0];
          return null == n ? n : (n.length > 1 && (t = n), e(t));
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r);
    });
  });

  var Iu = _u,
      ju = $e(function (e) {
    var t = function t(e, _t29) {
      return function () {
        var r = e.apply(void 0, arguments);
        return "[".concat(r + _t29, "m");
      };
    },
        n = function n(e, t) {
      return function () {
        var r = e.apply(void 0, arguments);
        return "[".concat(38 + t, ";5;").concat(r, "m");
      };
    },
        r = function r(e, t) {
      return function () {
        var r = e.apply(void 0, arguments);
        return "[".concat(38 + t, ";2;").concat(r[0], ";").concat(r[1], ";").concat(r[2], "m");
      };
    },
        u = function u(e) {
      return e;
    },
        o = function o(e, t, n) {
      return [e, t, n];
    },
        a = function a(e, t, n) {
      Object.defineProperty(e, t, {
        get: function get() {
          var r = n();
          return Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0
          }), r;
        },
        enumerable: !0,
        configurable: !0
      });
    };

    var i;

    var s = function s(e, t, n, r) {
      void 0 === i && (i = Iu);
      var u = r ? 10 : 0,
          o = {};

      for (var _i16 = 0, _Object$entries = Object.entries(i); _i16 < _Object$entries.length; _i16++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i16], 2),
            _r30 = _Object$entries$_i[0],
            _a8 = _Object$entries$_i[1];

        var _i17 = "ansi16" === _r30 ? "ansi" : _r30;

        _r30 === t ? o[_i17] = e(n, u) : "object" == _typeof(_a8) && (o[_i17] = e(_a8[t], u));
      }

      return o;
    };

    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function get() {
        var e = new Map(),
            i = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;

        for (var _i18 = 0, _Object$entries2 = Object.entries(i); _i18 < _Object$entries2.length; _i18++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i18], 2),
              _t30 = _Object$entries2$_i[0],
              _n24 = _Object$entries2$_i[1];

          for (var _i19 = 0, _Object$entries3 = Object.entries(_n24); _i19 < _Object$entries3.length; _i19++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i19], 2),
                _t31 = _Object$entries3$_i[0],
                _r31 = _Object$entries3$_i[1];

            i[_t31] = {
              open: "[".concat(_r31[0], "m"),
              close: "[".concat(_r31[1], "m")
            }, _n24[_t31] = i[_t31], e.set(_r31[0], _r31[1]);
          }

          Object.defineProperty(i, _t30, {
            value: _n24,
            enumerable: !1
          });
        }

        return Object.defineProperty(i, "codes", {
          value: e,
          enumerable: !1
        }), i.color.close = "[39m", i.bgColor.close = "[49m", a(i.color, "ansi", function () {
          return s(t, "ansi16", u, !1);
        }), a(i.color, "ansi256", function () {
          return s(n, "ansi256", u, !1);
        }), a(i.color, "ansi16m", function () {
          return s(r, "rgb", o, !1);
        }), a(i.bgColor, "ansi", function () {
          return s(t, "ansi16", u, !0);
        }), a(i.bgColor, "ansi256", function () {
          return s(n, "ansi256", u, !0);
        }), a(i.bgColor, "ansi16m", function () {
          return s(r, "rgb", o, !0);
        }), i;
      }
    });
  }),
      Mu = {
    isatty: function isatty() {
      return !1;
    }
  },
      Lu = function Lu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Re.argv;
    var n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
        r = t.indexOf(n + e),
        u = t.indexOf("--");
    return -1 !== r && (-1 === u || r < u);
  };

  var Ru = Re.env;
  var qu;

  function Vu(e) {
    return 0 !== e && {
      level: e,
      hasBasic: !0,
      has256: e >= 2,
      has16m: e >= 3
    };
  }

  function Wu(e, t) {
    if (0 === qu) return 0;
    if (Lu("color=16m") || Lu("color=full") || Lu("color=truecolor")) return 3;
    if (Lu("color=256")) return 2;
    if (e && !t && void 0 === qu) return 0;
    var n = qu || 0;
    if ("dumb" === Ru.TERM) return n;

    if ("win32" === Re.platform) {
      var _e47 = jr.release().split(".");

      return Number(_e47[0]) >= 10 && Number(_e47[2]) >= 10586 ? Number(_e47[2]) >= 14931 ? 3 : 2 : 1;
    }

    if ("CI" in Ru) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
      return e in Ru;
    }) || "codeship" === Ru.CI_NAME ? 1 : n;
    if ("TEAMCITY_VERSION" in Ru) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Ru.TEAMCITY_VERSION) ? 1 : 0;
    if ("GITHUB_ACTIONS" in Ru) return 1;
    if ("truecolor" === Ru.COLORTERM) return 3;

    if ("TERM_PROGRAM" in Ru) {
      var _e48 = parseInt((Ru.TERM_PROGRAM_VERSION || "").split(".")[0], 10);

      switch (Ru.TERM_PROGRAM) {
        case "iTerm.app":
          return _e48 >= 3 ? 3 : 2;

        case "Apple_Terminal":
          return 2;
      }
    }

    return /-256(color)?$/i.test(Ru.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Ru.TERM) || "COLORTERM" in Ru ? 1 : n;
  }

  Lu("no-color") || Lu("no-colors") || Lu("color=false") || Lu("color=never") ? qu = 0 : (Lu("color") || Lu("colors") || Lu("color=true") || Lu("color=always")) && (qu = 1), "FORCE_COLOR" in Ru && (qu = "true" === Ru.FORCE_COLOR ? 1 : "false" === Ru.FORCE_COLOR ? 0 : 0 === Ru.FORCE_COLOR.length ? 1 : Math.min(parseInt(Ru.FORCE_COLOR, 10), 3));
  var $u = {
    supportsColor: function supportsColor(e) {
      return Vu(Wu(e, e && e.isTTY));
    },
    stdout: Vu(Wu(!0, Mu.isatty(1))),
    stderr: Vu(Wu(!0, Mu.isatty(2)))
  };
  var Uu = {
    stringReplaceAll: function stringReplaceAll(e, t, n) {
      var r = e.indexOf(t);
      if (-1 === r) return e;
      var u = t.length;
      var o = 0,
          a = "";

      do {
        a += e.substr(o, r - o) + t + n, o = r + u, r = e.indexOf(t, o);
      } while (-1 !== r);

      return a += e.substr(o), a;
    },
    stringEncaseCRLFWithFirstIndex: function stringEncaseCRLFWithFirstIndex(e, t, n, r) {
      var u = 0,
          o = "";

      do {
        var _a9 = "\r" === e[r - 1];

        o += e.substr(u, (_a9 ? r - 1 : r) - u) + t + (_a9 ? "\r\n" : "\n") + n, u = r + 1, r = e.indexOf("\n", u);
      } while (-1 !== r);

      return o += e.substr(u), o;
    }
  };
  var zu = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      Ju = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      Gu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      Hu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
      Xu = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);

  function Yu(e) {
    var t = "u" === e[0],
        n = "{" === e[1];
    return t && !n && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : Xu.get(e) || e;
  }

  function Ku(e, t) {
    var n = [],
        r = t.trim().split(/\s*,\s*/g);
    var u;

    var _iterator22 = _createForOfIteratorHelper(r),
        _step22;

    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var _t32 = _step22.value;

        var _r32 = Number(_t32);

        if (Number.isNaN(_r32)) {
          if (!(u = _t32.match(Gu))) throw new Error("Invalid Chalk template style argument: ".concat(_t32, " (in style '").concat(e, "')"));
          n.push(u[2].replace(Hu, function (e, t, n) {
            return t ? Yu(t) : n;
          }));
        } else n.push(_r32);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }

    return n;
  }

  function Qu(e) {
    Ju.lastIndex = 0;
    var t = [];
    var n;

    for (; null !== (n = Ju.exec(e));) {
      var _e49 = n[1];

      if (n[2]) {
        var _r33 = Ku(_e49, n[2]);

        t.push([_e49].concat(_r33));
      } else t.push([_e49]);
    }

    return t;
  }

  function Zu(e, t) {
    var n = {};

    var _iterator23 = _createForOfIteratorHelper(t),
        _step23;

    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var _e51 = _step23.value;

        var _iterator24 = _createForOfIteratorHelper(_e51.styles),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t34 = _step24.value;
            n[_t34[0]] = _e51.inverse ? null : _t34.slice(1);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }

    var r = e;

    for (var _i20 = 0, _Object$entries4 = Object.entries(n); _i20 < _Object$entries4.length; _i20++) {
      var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i20], 2),
          _e50 = _Object$entries4$_i[0],
          _t33 = _Object$entries4$_i[1];

      if (Array.isArray(_t33)) {
        var _r34;

        if (!(_e50 in r)) throw new Error("Unknown Chalk style: ".concat(_e50));
        r = _t33.length > 0 ? (_r34 = r)[_e50].apply(_r34, _toConsumableArray(_t33)) : r[_e50];
      }
    }

    return r;
  }

  var eo = function eo(e, t) {
    var n = [],
        r = [];
    var u = [];

    if (t.replace(zu, function (t, o, a, i, s, l) {
      if (o) u.push(Yu(o));else if (i) {
        var _t35 = u.join("");

        u = [], r.push(0 === n.length ? _t35 : Zu(e, n)(_t35)), n.push({
          inverse: a,
          styles: Qu(i)
        });
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        r.push(Zu(e, n)(u.join(""))), u = [], n.pop();
      } else u.push(l);
    }), r.push(u.join("")), n.length > 0) {
      var _e52 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");

      throw new Error(_e52);
    }

    return r.join("");
  };

  var to = $u.stdout,
      no = $u.stderr,
      ro = Uu.stringReplaceAll,
      uo = Uu.stringEncaseCRLFWithFirstIndex,
      oo = Array.isArray,
      ao = ["ansi", "ansi", "ansi256", "ansi16m"],
      io = Object.create(null);

  var so = function so(e) {
    _classCallCheck(this, so);

    return lo(e);
  };

  var lo = function lo(e) {
    var t = {};
    return function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
      var n = to ? to.level : 0;
      e.level = void 0 === t.level ? n : t.level;
    }(t, e), t.template = function () {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }

      return yo.apply(void 0, [t.template].concat(e));
    }, Object.setPrototypeOf(t, co.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = function () {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
    }, t.template.Instance = so, t.template;
  };

  function co(e) {
    return lo(e);
  }

  var _loop6 = function _loop6() {
    var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i21], 2),
        e = _Object$entries5$_i[0],
        t = _Object$entries5$_i[1];

    io[e] = {
      get: function get() {
        var n = mo(this, ho(t.open, t.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, e, {
          value: n
        }), n;
      }
    };
  };

  for (var _i21 = 0, _Object$entries5 = Object.entries(ju); _i21 < _Object$entries5.length; _i21++) {
    _loop6();
  }

  io.visible = {
    get: function get() {
      var e = mo(this, this._styler, !0);
      return Object.defineProperty(this, "visible", {
        value: e
      }), e;
    }
  };
  var po = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];

  var _loop7 = function _loop7() {
    var e = _po[_i22];
    io[e] = {
      get: function get() {
        var t = this.level;
        return function () {
          var _ju$color$ao$t;

          var r = ho((_ju$color$ao$t = ju.color[ao[t]])[e].apply(_ju$color$ao$t, arguments), ju.color.close, this._styler);
          return mo(this, r, this._isEmpty);
        };
      }
    };
  };

  for (var _i22 = 0, _po = po; _i22 < _po.length; _i22++) {
    _loop7();
  }

  var _loop8 = function _loop8() {
    var e = _po2[_i23];
    io["bg" + e[0].toUpperCase() + e.slice(1)] = {
      get: function get() {
        var t = this.level;
        return function () {
          var _ju$bgColor$ao$t;

          var r = ho((_ju$bgColor$ao$t = ju.bgColor[ao[t]])[e].apply(_ju$bgColor$ao$t, arguments), ju.bgColor.close, this._styler);
          return mo(this, r, this._isEmpty);
        };
      }
    };
  };

  for (var _i23 = 0, _po2 = po; _i23 < _po2.length; _i23++) {
    _loop8();
  }

  var fo = Object.defineProperties(function () {}, Object.assign({}, io, {
    level: {
      enumerable: !0,
      get: function get() {
        return this._generator.level;
      },
      set: function set(e) {
        this._generator.level = e;
      }
    }
  })),
      ho = function ho(e, t, n) {
    var r, u;
    return void 0 === n ? (r = e, u = t) : (r = n.openAll + e, u = t + n.closeAll), {
      open: e,
      close: t,
      openAll: r,
      closeAll: u,
      parent: n
    };
  },
      mo = function mo(e, t, n) {
    var r = function r() {
      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      return oo(e[0]) && oo(e[0].raw) ? go(r, yo.apply(void 0, [r].concat(e))) : go(r, 1 === e.length ? "" + e[0] : e.join(" "));
    };

    return Object.setPrototypeOf(r, fo), r._generator = e, r._styler = t, r._isEmpty = n, r;
  },
      go = function go(e, t) {
    if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
    var n = e._styler;
    if (void 0 === n) return t;
    var _n25 = n,
        r = _n25.openAll,
        u = _n25.closeAll;
    if (-1 !== t.indexOf("")) for (; void 0 !== n;) {
      t = ro(t, n.close, n.open), n = n.parent;
    }
    var o = t.indexOf("\n");
    return -1 !== o && (t = uo(t, u, r, o)), r + t + u;
  };

  var Do;

  var yo = function yo(e) {
    for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      t[_key7 - 1] = arguments[_key7];
    }

    var n = t[0];
    if (!oo(n) || !oo(n.raw)) return t.join(" ");
    var r = t.slice(1),
        u = [n.raw[0]];

    for (var _e53 = 1; _e53 < n.length; _e53++) {
      u.push(String(r[_e53 - 1]).replace(/[{}\\]/g, "\\$&"), String(n.raw[_e53]));
    }

    return void 0 === Do && (Do = eo), Do(e, u.join(""));
  };

  Object.defineProperties(co.prototype, io);
  var Eo = co();
  Eo.supportsColor = to, Eo.stderr = co({
    level: no ? no.level : 0
  }), Eo.stderr.supportsColor = no;
  var Co = Eo;

  var bo = function bo(e, t) {
    for (var n = -1, r = t.length, u = e.length; ++n < r;) {
      e[u + n] = t[n];
    }

    return e;
  },
      Ao = "object" == _typeof(We) && We && We.Object === Object && We,
      vo = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      Fo = (Ao || vo || Function("return this")()).Symbol,
      xo = Object.prototype,
      So = xo.hasOwnProperty,
      wo = xo.toString,
      Bo = Fo ? Fo.toStringTag : void 0;

  var To = function To(e) {
    var t = So.call(e, Bo),
        n = e[Bo];

    try {
      e[Bo] = void 0;
      var r = !0;
    } catch (e) {}

    var u = wo.call(e);
    return r && (t ? e[Bo] = n : delete e[Bo]), u;
  },
      ko = Object.prototype.toString;

  var No = function No(e) {
    return ko.call(e);
  },
      Oo = Fo ? Fo.toStringTag : void 0;

  var Po = function Po(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Oo && Oo in Object(e) ? To(e) : No(e);
  };

  var _o = function _o(e) {
    return null != e && "object" == _typeof(e);
  };

  var Io = function Io(e) {
    return _o(e) && "[object Arguments]" == Po(e);
  },
      jo = Object.prototype,
      Mo = jo.hasOwnProperty,
      Lo = jo.propertyIsEnumerable,
      Ro = Io(function () {
    return arguments;
  }()) ? Io : function (e) {
    return _o(e) && Mo.call(e, "callee") && !Lo.call(e, "callee");
  },
      qo = Array.isArray,
      Vo = Fo ? Fo.isConcatSpreadable : void 0;

  var Wo = function Wo(e) {
    return qo(e) || Ro(e) || !!(Vo && e && e[Vo]);
  };

  var $o = function e(t, n, r, u, o) {
    var a = -1,
        i = t.length;

    for (r || (r = Wo), o || (o = []); ++a < i;) {
      var s = t[a];
      n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, u, o) : bo(o, s) : u || (o[o.length] = s);
    }

    return o;
  };

  var Uo = function Uo(e) {
    return (null == e ? 0 : e.length) ? $o(e, 1) : [];
  };

  var zo = {
    key: function key(e) {
      return 1 === e.length ? "-".concat(e) : "--".concat(e);
    },
    value: function value(e) {
      return bu.apiDescriptor.value(e);
    },
    pair: function pair(_ref17) {
      var e = _ref17.key,
          t = _ref17.value;
      return !1 === t ? "--no-".concat(e) : !0 === t ? zo.key(e) : "" === t ? "".concat(zo.key(e), " without an argument") : "".concat(zo.key(e), "=").concat(t);
    }
  };

  var Jo = /*#__PURE__*/function (_bu$ChoiceSchema) {
    _inherits(Jo, _bu$ChoiceSchema);

    var _super12 = _createSuper(Jo);

    function Jo(_ref18) {
      var _this7;

      var e = _ref18.name,
          t = _ref18.flags;

      _classCallCheck(this, Jo);

      _this7 = _super12.call(this, {
        name: e,
        choices: t
      }), _this7._flags = t.slice().sort();
      return _this7;
    }

    _createClass(Jo, [{
      key: "preprocess",
      value: function preprocess(e, t) {
        if ("string" == typeof e && 0 !== e.length && !this._flags.includes(e)) {
          var _n26 = this._flags.find(function (t) {
            return xu(t, e) < 3;
          });

          if (_n26) return t.logger.warn(["Unknown flag ".concat(Co.yellow(t.descriptor.value(e)), ","), "did you mean ".concat(Co.blue(t.descriptor.value(_n26)), "?")].join(" ")), _n26;
        }

        return e;
      }
    }, {
      key: "expected",
      value: function expected() {
        return "a flag";
      }
    }]);

    return Jo;
  }(bu.ChoiceSchema);

  var Go;

  function Ho(t, n) {
    var _ref19 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        r = _ref19.logger,
        _ref19$isCLI = _ref19.isCLI,
        u = _ref19$isCLI === void 0 ? !1 : _ref19$isCLI,
        _ref19$passThrough = _ref19.passThrough,
        o = _ref19$passThrough === void 0 ? !1 : _ref19$passThrough;

    var a = o ? Array.isArray(o) ? function (e, t) {
      return o.includes(e) ? _defineProperty({}, e, t) : void 0;
    } : function (e, t) {
      return _defineProperty({}, e, t);
    } : function (t, n, r) {
      var u = e(r.schemas, ["_"]);
      return bu.levenUnknownHandler(t, n, Object.assign({}, r, {
        schemas: u
      }));
    },
        i = u ? zo : bu.apiDescriptor,
        s = function (e, _ref22) {
      var t = _ref22.isCLI;
      var n = [];
      t && n.push(bu.AnySchema.create({
        name: "_"
      }));

      var _iterator25 = _createForOfIteratorHelper(e),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var _r35 = _step25.value;
          n.push(Xo(_r35, {
            isCLI: t,
            optionInfos: e
          })), _r35.alias && t && n.push(bu.AliasSchema.create({
            name: _r35.alias,
            sourceName: _r35.name
          }));
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }

      return n;
    }(n, {
      isCLI: u
    }),
        l = new bu.Normalizer(s, {
      logger: r,
      unknown: a,
      descriptor: i
    }),
        c = !1 !== r;

    c && Go && (l._hasDeprecationWarned = Go);
    var p = l.normalize(t);
    return c && (Go = l._hasDeprecationWarned), p;
  }

  function Xo(e, _ref23) {
    var t = _ref23.isCLI,
        n = _ref23.optionInfos;
    var r;
    var u = {
      name: e.name
    },
        o = {};

    switch (e.type) {
      case "int":
        r = bu.IntegerSchema, t && (u.preprocess = function (e) {
          return Number(e);
        });
        break;

      case "string":
        r = bu.StringSchema;
        break;

      case "choice":
        r = bu.ChoiceSchema, u.choices = e.choices.map(function (t) {
          return "object" == _typeof(t) && t.redirect ? Object.assign({}, t, {
            redirect: {
              to: {
                key: e.name,
                value: t.redirect
              }
            }
          }) : t;
        });
        break;

      case "boolean":
        r = bu.BooleanSchema;
        break;

      case "flag":
        r = Jo, u.flags = Uo(n.map(function (e) {
          return [e.alias, e.description && e.name, e.oppositeDescription && "no-".concat(e.name)].filter(Boolean);
        }));
        break;

      case "path":
        r = bu.StringSchema;
        break;

      default:
        throw new Error("Unexpected type ".concat(e.type));
    }

    if (e.exception ? u.validate = function (t, n, r) {
      return e.exception(t) || n.validate(t, r);
    } : u.validate = function (e, t, n) {
      return void 0 === e || t.validate(e, n);
    }, e.redirect && (o.redirect = function (t) {
      return t ? {
        to: {
          key: e.redirect.option,
          value: e.redirect.value
        }
      } : void 0;
    }), e.deprecated && (o.deprecated = !0), t && !e.array) {
      var _e54 = u.preprocess || function (e) {
        return e;
      };

      u.preprocess = function (t, n, r) {
        return n.preprocess(_e54(Array.isArray(t) ? t[t.length - 1] : t), r);
      };
    }

    return e.array ? bu.ArraySchema.create(Object.assign({}, t ? {
      preprocess: function preprocess(e) {
        return [].concat(e);
      }
    } : {}, o, {
      valueSchema: r.create(u)
    })) : r.create(Object.assign({}, u, o));
  }

  var Yo = {
    normalizeApiOptions: function normalizeApiOptions(e, t, n) {
      return Ho(e, t, n);
    },
    normalizeCliOptions: function normalizeCliOptions(e, t, n) {
      return Ho(e, t, Object.assign({
        isCLI: !0
      }, n));
    }
  };

  function Ko(e, t) {
    var _ref24 = t || {},
        n = _ref24.ignoreDecorators;

    if (!n) {
      var _t36 = e.declaration && e.declaration.decorators || e.decorators;

      if (_t36 && _t36.length > 0) return Ko(_t36[0]);
    }

    return e.range ? e.range[0] : e.start;
  }

  function Qo(e) {
    var t = e.range ? e.range[1] : e.end;
    return e.typeAnnotation ? Math.max(t, Qo(e.typeAnnotation)) : t;
  }

  var Zo = {
    locStart: Ko,
    locEnd: Qo,
    composeLoc: function composeLoc(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
      var n = Ko(e);
      return [n, "number" == typeof t ? n + t : Qo(t)];
    }
  },
      ea = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function (e) {
      var t = {
        type: "invalid",
        value: e[0],
        closed: void 0
      };
      return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t;
    };
  }),
      ta = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isIdentifierStart = l, t.isIdentifierChar = c, t.isIdentifierName = function (e) {
      var t = !0;

      for (var _n27 = 0, _r36 = Array.from(e); _n27 < _r36.length; _n27++) {
        var _e55 = _r36[_n27].codePointAt(0);

        if (t) {
          if (!l(_e55)) return !1;
          t = !1;
        } else if (!c(_e55)) return !1;
      }

      return !t;
    };
    var n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        r = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
    var u = new RegExp("[" + n + "]"),
        o = new RegExp("[" + n + r + "]");
    n = r = null;
    var a = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
        i = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

    function s(e, t) {
      var n = 65536;

      for (var _r37 = 0, _u11 = t.length; _r37 < _u11; _r37 += 2) {
        if (n += t[_r37], n > e) return !1;
        if (n += t[_r37 + 1], n >= e) return !0;
      }

      return !1;
    }

    function l(e) {
      return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : s(e, a)));
    }

    function c(e) {
      return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : s(e, a) || s(e, i))));
    }
  }),
      na = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isReservedWord = i, t.isStrictReservedWord = s, t.isStrictBindOnlyReservedWord = l, t.isStrictBindReservedWord = function (e, t) {
      return s(e, t) || l(e);
    }, t.isKeyword = function (e) {
      return u.has(e);
    };
    var n = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
        r = ["eval", "arguments"],
        u = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]),
        o = new Set(n),
        a = new Set(r);

    function i(e, t) {
      return t && "await" === e || "enum" === e;
    }

    function s(e, t) {
      return i(e, t) || o.has(e);
    }

    function l(e) {
      return a.has(e);
    }
  }),
      ra = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isIdentifierName", {
      enumerable: !0,
      get: function get() {
        return ta.isIdentifierName;
      }
    }), Object.defineProperty(t, "isIdentifierChar", {
      enumerable: !0,
      get: function get() {
        return ta.isIdentifierChar;
      }
    }), Object.defineProperty(t, "isIdentifierStart", {
      enumerable: !0,
      get: function get() {
        return ta.isIdentifierStart;
      }
    }), Object.defineProperty(t, "isReservedWord", {
      enumerable: !0,
      get: function get() {
        return na.isReservedWord;
      }
    }), Object.defineProperty(t, "isStrictBindOnlyReservedWord", {
      enumerable: !0,
      get: function get() {
        return na.isStrictBindOnlyReservedWord;
      }
    }), Object.defineProperty(t, "isStrictBindReservedWord", {
      enumerable: !0,
      get: function get() {
        return na.isStrictBindReservedWord;
      }
    }), Object.defineProperty(t, "isStrictReservedWord", {
      enumerable: !0,
      get: function get() {
        return na.isStrictReservedWord;
      }
    }), Object.defineProperty(t, "isKeyword", {
      enumerable: !0,
      get: function get() {
        return na.isKeyword;
      }
    });
  }),
      ua = /[|\\{}()[\]^$+*?.]/g,
      oa = function oa(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    return e.replace(ua, "\\$&");
  },
      aa = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  },
      ia = $e(function (e) {
    var t = {};

    for (var n in aa) {
      aa.hasOwnProperty(n) && (t[aa[n]] = n);
    }

    var r = e.exports = {
      rgb: {
        channels: 3,
        labels: "rgb"
      },
      hsl: {
        channels: 3,
        labels: "hsl"
      },
      hsv: {
        channels: 3,
        labels: "hsv"
      },
      hwb: {
        channels: 3,
        labels: "hwb"
      },
      cmyk: {
        channels: 4,
        labels: "cmyk"
      },
      xyz: {
        channels: 3,
        labels: "xyz"
      },
      lab: {
        channels: 3,
        labels: "lab"
      },
      lch: {
        channels: 3,
        labels: "lch"
      },
      hex: {
        channels: 1,
        labels: ["hex"]
      },
      keyword: {
        channels: 1,
        labels: ["keyword"]
      },
      ansi16: {
        channels: 1,
        labels: ["ansi16"]
      },
      ansi256: {
        channels: 1,
        labels: ["ansi256"]
      },
      hcg: {
        channels: 3,
        labels: ["h", "c", "g"]
      },
      apple: {
        channels: 3,
        labels: ["r16", "g16", "b16"]
      },
      gray: {
        channels: 1,
        labels: ["gray"]
      }
    };

    for (var u in r) {
      if (r.hasOwnProperty(u)) {
        if (!("channels" in r[u])) throw new Error("missing channels property: " + u);
        if (!("labels" in r[u])) throw new Error("missing channel labels property: " + u);
        if (r[u].labels.length !== r[u].channels) throw new Error("channel and label counts mismatch: " + u);
        var o = r[u].channels,
            a = r[u].labels;
        delete r[u].channels, delete r[u].labels, Object.defineProperty(r[u], "channels", {
          value: o
        }), Object.defineProperty(r[u], "labels", {
          value: a
        });
      }
    }

    r.rgb.hsl = function (e) {
      var t,
          n,
          r = e[0] / 255,
          u = e[1] / 255,
          o = e[2] / 255,
          a = Math.min(r, u, o),
          i = Math.max(r, u, o),
          s = i - a;
      return i === a ? t = 0 : r === i ? t = (u - o) / s : u === i ? t = 2 + (o - r) / s : o === i && (t = 4 + (r - u) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + i) / 2, [t, 100 * (i === a ? 0 : n <= .5 ? s / (i + a) : s / (2 - i - a)), 100 * n];
    }, r.rgb.hsv = function (e) {
      var t,
          n,
          r,
          u,
          o,
          a = e[0] / 255,
          i = e[1] / 255,
          s = e[2] / 255,
          l = Math.max(a, i, s),
          c = l - Math.min(a, i, s),
          p = function p(e) {
        return (l - e) / 6 / c + .5;
      };

      return 0 === c ? u = o = 0 : (o = c / l, t = p(a), n = p(i), r = p(s), a === l ? u = r - n : i === l ? u = 1 / 3 + t - r : s === l && (u = 2 / 3 + n - t), u < 0 ? u += 1 : u > 1 && (u -= 1)), [360 * u, 100 * o, 100 * l];
    }, r.rgb.hwb = function (e) {
      var t = e[0],
          n = e[1],
          u = e[2];
      return [r.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, u))), 100 * (u = 1 - 1 / 255 * Math.max(t, Math.max(n, u)))];
    }, r.rgb.cmyk = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          u = e[2] / 255;
      return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - u))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - u - t) / (1 - t) || 0), 100 * t];
    }, r.rgb.keyword = function (e) {
      var n = t[e];
      if (n) return n;
      var r,
          u,
          o,
          a = 1 / 0;

      for (var i in aa) {
        if (aa.hasOwnProperty(i)) {
          var s = aa[i],
              l = (u = e, o = s, Math.pow(u[0] - o[0], 2) + Math.pow(u[1] - o[1], 2) + Math.pow(u[2] - o[2], 2));
          l < a && (a = l, r = i);
        }
      }

      return r;
    }, r.keyword.rgb = function (e) {
      return aa[e];
    }, r.rgb.xyz = function (e) {
      var t = e[0] / 255,
          n = e[1] / 255,
          r = e[2] / 255;
      return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)];
    }, r.rgb.lab = function (e) {
      var t = r.rgb.xyz(e),
          n = t[0],
          u = t[1],
          o = t[2];
      return u /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116) - 16, 500 * (n - u), 200 * (u - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))];
    }, r.hsl.rgb = function (e) {
      var t,
          n,
          r,
          u,
          o,
          a = e[0] / 360,
          i = e[1] / 100,
          s = e[2] / 100;
      if (0 === i) return [o = 255 * s, o, o];
      t = 2 * s - (n = s < .5 ? s * (1 + i) : s + i - s * i), u = [0, 0, 0];

      for (var l = 0; l < 3; l++) {
        (r = a + 1 / 3 * -(l - 1)) < 0 && r++, r > 1 && r--, o = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, u[l] = 255 * o;
      }

      return u;
    }, r.hsl.hsv = function (e) {
      var t = e[0],
          n = e[1] / 100,
          r = e[2] / 100,
          u = n,
          o = Math.max(r, .01);
      return n *= (r *= 2) <= 1 ? r : 2 - r, u *= o <= 1 ? o : 2 - o, [t, 100 * (0 === r ? 2 * u / (o + u) : 2 * n / (r + n)), 100 * ((r + n) / 2)];
    }, r.hsv.rgb = function (e) {
      var t = e[0] / 60,
          n = e[1] / 100,
          r = e[2] / 100,
          u = Math.floor(t) % 6,
          o = t - Math.floor(t),
          a = 255 * r * (1 - n),
          i = 255 * r * (1 - n * o),
          s = 255 * r * (1 - n * (1 - o));

      switch (r *= 255, u) {
        case 0:
          return [r, s, a];

        case 1:
          return [i, r, a];

        case 2:
          return [a, r, s];

        case 3:
          return [a, i, r];

        case 4:
          return [s, a, r];

        case 5:
          return [r, a, i];
      }
    }, r.hsv.hsl = function (e) {
      var t,
          n,
          r,
          u = e[0],
          o = e[1] / 100,
          a = e[2] / 100,
          i = Math.max(a, .01);
      return r = (2 - o) * a, n = o * i, [u, 100 * (n = (n /= (t = (2 - o) * i) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)];
    }, r.hwb.rgb = function (e) {
      var t,
          n,
          r,
          u,
          o,
          a,
          i,
          s = e[0] / 360,
          l = e[1] / 100,
          c = e[2] / 100,
          p = l + c;

      switch (p > 1 && (l /= p, c /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), u = l + r * ((n = 1 - c) - l), t) {
        default:
        case 6:
        case 0:
          o = n, a = u, i = l;
          break;

        case 1:
          o = u, a = n, i = l;
          break;

        case 2:
          o = l, a = n, i = u;
          break;

        case 3:
          o = l, a = u, i = n;
          break;

        case 4:
          o = u, a = l, i = n;
          break;

        case 5:
          o = n, a = l, i = u;
      }

      return [255 * o, 255 * a, 255 * i];
    }, r.cmyk.rgb = function (e) {
      var t = e[0] / 100,
          n = e[1] / 100,
          r = e[2] / 100,
          u = e[3] / 100;
      return [255 * (1 - Math.min(1, t * (1 - u) + u)), 255 * (1 - Math.min(1, n * (1 - u) + u)), 255 * (1 - Math.min(1, r * (1 - u) + u))];
    }, r.xyz.rgb = function (e) {
      var t,
          n,
          r,
          u = e[0] / 100,
          o = e[1] / 100,
          a = e[2] / 100;
      return n = -.9689 * u + 1.8758 * o + .0415 * a, r = .0557 * u + -.204 * o + 1.057 * a, t = (t = 3.2406 * u + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
    }, r.xyz.lab = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
    }, r.lab.xyz = function (e) {
      var t,
          n,
          r,
          u = e[0];
      t = e[1] / 500 + (n = (u + 16) / 116), r = n - e[2] / 200;
      var o = Math.pow(n, 3),
          a = Math.pow(t, 3),
          i = Math.pow(r, 3);
      return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = a > .008856 ? a : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883];
    }, r.lab.lch = function (e) {
      var t,
          n = e[0],
          r = e[1],
          u = e[2];
      return (t = 360 * Math.atan2(u, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + u * u), t];
    }, r.lch.lab = function (e) {
      var t,
          n = e[0],
          r = e[1];
      return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)];
    }, r.rgb.ansi16 = function (e) {
      var t = e[0],
          n = e[1],
          u = e[2],
          o = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
      if (0 === (o = Math.round(o / 50))) return 30;
      var a = 30 + (Math.round(u / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
      return 2 === o && (a += 60), a;
    }, r.hsv.ansi16 = function (e) {
      return r.rgb.ansi16(r.hsv.rgb(e), e[2]);
    }, r.rgb.ansi256 = function (e) {
      var t = e[0],
          n = e[1],
          r = e[2];
      return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5);
    }, r.ansi16.rgb = function (e) {
      var t = e % 10;
      if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
      var n = .5 * (1 + ~~(e > 50));
      return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255];
    }, r.ansi256.rgb = function (e) {
      if (e >= 232) {
        var t = 10 * (e - 232) + 8;
        return [t, t, t];
      }

      var n;
      return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255];
    }, r.rgb.hex = function (e) {
      var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
      return "000000".substring(t.length) + t;
    }, r.hex.rgb = function (e) {
      var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      var n = t[0];
      3 === t[0].length && (n = n.split("").map(function (e) {
        return e + e;
      }).join(""));
      var r = parseInt(n, 16);
      return [r >> 16 & 255, r >> 8 & 255, 255 & r];
    }, r.rgb.hcg = function (e) {
      var t,
          n = e[0] / 255,
          r = e[1] / 255,
          u = e[2] / 255,
          o = Math.max(Math.max(n, r), u),
          a = Math.min(Math.min(n, r), u),
          i = o - a;
      return t = i <= 0 ? 0 : o === n ? (r - u) / i % 6 : o === r ? 2 + (u - n) / i : 4 + (n - r) / i + 4, t /= 6, [360 * (t %= 1), 100 * i, 100 * (i < 1 ? a / (1 - i) : 0)];
    }, r.hsl.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = 1,
          u = 0;
      return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (u = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * u];
    }, r.hsv.hcg = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100,
          r = t * n,
          u = 0;
      return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
    }, r.hcg.rgb = function (e) {
      var t = e[0] / 360,
          n = e[1] / 100,
          r = e[2] / 100;
      if (0 === n) return [255 * r, 255 * r, 255 * r];
      var u,
          o = [0, 0, 0],
          a = t % 1 * 6,
          i = a % 1,
          s = 1 - i;

      switch (Math.floor(a)) {
        case 0:
          o[0] = 1, o[1] = i, o[2] = 0;
          break;

        case 1:
          o[0] = s, o[1] = 1, o[2] = 0;
          break;

        case 2:
          o[0] = 0, o[1] = 1, o[2] = i;
          break;

        case 3:
          o[0] = 0, o[1] = s, o[2] = 1;
          break;

        case 4:
          o[0] = i, o[1] = 0, o[2] = 1;
          break;

        default:
          o[0] = 1, o[1] = 0, o[2] = s;
      }

      return u = (1 - n) * r, [255 * (n * o[0] + u), 255 * (n * o[1] + u), 255 * (n * o[2] + u)];
    }, r.hcg.hsv = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t),
          r = 0;
      return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n];
    }, r.hcg.hsl = function (e) {
      var t = e[1] / 100,
          n = e[2] / 100 * (1 - t) + .5 * t,
          r = 0;
      return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n];
    }, r.hcg.hwb = function (e) {
      var t = e[1] / 100,
          n = t + e[2] / 100 * (1 - t);
      return [e[0], 100 * (n - t), 100 * (1 - n)];
    }, r.hwb.hcg = function (e) {
      var t = e[1] / 100,
          n = 1 - e[2] / 100,
          r = n - t,
          u = 0;
      return r < 1 && (u = (n - r) / (1 - r)), [e[0], 100 * r, 100 * u];
    }, r.apple.rgb = function (e) {
      return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
    }, r.rgb.apple = function (e) {
      return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
    }, r.gray.rgb = function (e) {
      return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
    }, r.gray.hsl = r.gray.hsv = function (e) {
      return [0, 0, e[0]];
    }, r.gray.hwb = function (e) {
      return [0, 100, e[0]];
    }, r.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    }, r.gray.lab = function (e) {
      return [e[0], 0, 0];
    }, r.gray.hex = function (e) {
      var t = 255 & Math.round(e[0] / 100 * 255),
          n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return "000000".substring(n.length) + n;
    }, r.rgb.gray = function (e) {
      return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
    };
  });

  function sa(e) {
    var t = function () {
      for (var e = {}, t = Object.keys(ia), n = t.length, r = 0; r < n; r++) {
        e[t[r]] = {
          distance: -1,
          parent: null
        };
      }

      return e;
    }(),
        n = [e];

    for (t[e].distance = 0; n.length;) {
      for (var r = n.pop(), u = Object.keys(ia[r]), o = u.length, a = 0; a < o; a++) {
        var i = u[a],
            s = t[i];
        -1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(i));
      }
    }

    return t;
  }

  function la(e, t) {
    return function (n) {
      return t(e(n));
    };
  }

  function ca(e, t) {
    for (var n = [t[e].parent, e], r = ia[t[e].parent][e], u = t[e].parent; t[u].parent;) {
      n.unshift(t[u].parent), r = la(ia[t[u].parent][u], r), u = t[u].parent;
    }

    return r.conversion = n, r;
  }

  var pa = {};
  Object.keys(ia).forEach(function (e) {
    pa[e] = {}, Object.defineProperty(pa[e], "channels", {
      value: ia[e].channels
    }), Object.defineProperty(pa[e], "labels", {
      value: ia[e].labels
    });

    var t = function (e) {
      for (var t = sa(e), n = {}, r = Object.keys(t), u = r.length, o = 0; o < u; o++) {
        var a = r[o];
        null !== t[a].parent && (n[a] = ca(a, t));
      }

      return n;
    }(e);

    Object.keys(t).forEach(function (n) {
      var r = t[n];
      pa[e][n] = function (e) {
        var t = function t(_t37) {
          if (null == _t37) return _t37;
          arguments.length > 1 && (_t37 = Array.prototype.slice.call(arguments));
          var n = e(_t37);
          if ("object" == _typeof(n)) for (var r = n.length, u = 0; u < r; u++) {
            n[u] = Math.round(n[u]);
          }
          return n;
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r), pa[e][n].raw = function (e) {
        var t = function t(_t38) {
          return null == _t38 ? _t38 : (arguments.length > 1 && (_t38 = Array.prototype.slice.call(arguments)), e(_t38));
        };

        return "conversion" in e && (t.conversion = e.conversion), t;
      }(r);
    });
  });
  var da = pa,
      fa = $e(function (e) {
    var t = function t(e, _t39) {
      return function () {
        var n = e.apply(da, arguments);
        return "[".concat(n + _t39, "m");
      };
    },
        n = function n(e, t) {
      return function () {
        var n = e.apply(da, arguments);
        return "[".concat(38 + t, ";5;").concat(n, "m");
      };
    },
        r = function r(e, t) {
      return function () {
        var n = e.apply(da, arguments);
        return "[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m");
      };
    };

    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: function get() {
        var e = new Map(),
            u = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        u.color.grey = u.color.gray;

        for (var _i24 = 0, _Object$keys14 = Object.keys(u); _i24 < _Object$keys14.length; _i24++) {
          var _t40 = _Object$keys14[_i24];
          var _n28 = u[_t40];

          for (var _i25 = 0, _Object$keys15 = Object.keys(_n28); _i25 < _Object$keys15.length; _i25++) {
            var _t41 = _Object$keys15[_i25];
            var _r38 = _n28[_t41];
            u[_t41] = {
              open: "[".concat(_r38[0], "m"),
              close: "[".concat(_r38[1], "m")
            }, _n28[_t41] = u[_t41], e.set(_r38[0], _r38[1]);
          }

          Object.defineProperty(u, _t40, {
            value: _n28,
            enumerable: !1
          }), Object.defineProperty(u, "codes", {
            value: e,
            enumerable: !1
          });
        }

        var o = function o(e) {
          return e;
        },
            a = function a(e, t, n) {
          return [e, t, n];
        };

        u.color.close = "[39m", u.bgColor.close = "[49m", u.color.ansi = {
          ansi: t(o, 0)
        }, u.color.ansi256 = {
          ansi256: n(o, 0)
        }, u.color.ansi16m = {
          rgb: r(a, 0)
        }, u.bgColor.ansi = {
          ansi: t(o, 10)
        }, u.bgColor.ansi256 = {
          ansi256: n(o, 10)
        }, u.bgColor.ansi16m = {
          rgb: r(a, 10)
        };

        for (var _i26 = 0, _Object$keys16 = Object.keys(da); _i26 < _Object$keys16.length; _i26++) {
          var _e56 = _Object$keys16[_i26];
          if ("object" != _typeof(da[_e56])) continue;
          var _o8 = da[_e56];
          "ansi16" === _e56 && (_e56 = "ansi"), "ansi16" in _o8 && (u.color.ansi[_e56] = t(_o8.ansi16, 0), u.bgColor.ansi[_e56] = t(_o8.ansi16, 10)), "ansi256" in _o8 && (u.color.ansi256[_e56] = n(_o8.ansi256, 0), u.bgColor.ansi256[_e56] = n(_o8.ansi256, 10)), "rgb" in _o8 && (u.color.ansi16m[_e56] = r(_o8.rgb, 0), u.bgColor.ansi16m[_e56] = r(_o8.rgb, 10));
        }

        return u;
      }
    });
  });
  var ha = Re.env;
  var ma;

  function ga(e) {
    return function (e) {
      return 0 !== e && {
        level: e,
        hasBasic: !0,
        has256: e >= 2,
        has16m: e >= 3
      };
    }(function (e) {
      if (!1 === ma) return 0;
      if (Mr("color=16m") || Mr("color=full") || Mr("color=truecolor")) return 3;
      if (Mr("color=256")) return 2;
      if (e && !e.isTTY && !0 !== ma) return 0;
      var t = ma ? 1 : 0;

      if ("win32" === Re.platform) {
        var _e57 = jr.release().split(".");

        return Number(Re.versions.node.split(".")[0]) >= 8 && Number(_e57[0]) >= 10 && Number(_e57[2]) >= 10586 ? Number(_e57[2]) >= 14931 ? 3 : 2 : 1;
      }

      if ("CI" in ha) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function (e) {
        return e in ha;
      }) || "codeship" === ha.CI_NAME ? 1 : t;
      if ("TEAMCITY_VERSION" in ha) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ha.TEAMCITY_VERSION) ? 1 : 0;
      if ("truecolor" === ha.COLORTERM) return 3;

      if ("TERM_PROGRAM" in ha) {
        var _e58 = parseInt((ha.TERM_PROGRAM_VERSION || "").split(".")[0], 10);

        switch (ha.TERM_PROGRAM) {
          case "iTerm.app":
            return _e58 >= 3 ? 3 : 2;

          case "Apple_Terminal":
            return 2;
        }
      }

      return /-256(color)?$/i.test(ha.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(ha.TERM) || "COLORTERM" in ha ? 1 : (ha.TERM, t);
    }(e));
  }

  Mr("no-color") || Mr("no-colors") || Mr("color=false") ? ma = !1 : (Mr("color") || Mr("colors") || Mr("color=true") || Mr("color=always")) && (ma = !0), "FORCE_COLOR" in ha && (ma = 0 === ha.FORCE_COLOR.length || 0 !== parseInt(ha.FORCE_COLOR, 10));
  var Da = {
    supportsColor: ga,
    stdout: ga(Re.stdout),
    stderr: ga(Re.stderr)
  };
  var ya = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
      Ea = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
      Ca = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
      ba = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
      Aa = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);

  function va(e) {
    return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Aa.get(e) || e;
  }

  function Fa(e, t) {
    var n = [],
        r = t.trim().split(/\s*,\s*/g);
    var u;

    var _iterator26 = _createForOfIteratorHelper(r),
        _step26;

    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var _t42 = _step26.value;

        if (isNaN(_t42)) {
          if (!(u = _t42.match(Ca))) throw new Error("Invalid Chalk template style argument: ".concat(_t42, " (in style '").concat(e, "')"));
          n.push(u[2].replace(ba, function (e, t, n) {
            return t ? va(t) : n;
          }));
        } else n.push(Number(_t42));
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }

    return n;
  }

  function xa(e) {
    Ea.lastIndex = 0;
    var t = [];
    var n;

    for (; null !== (n = Ea.exec(e));) {
      var _e59 = n[1];

      if (n[2]) {
        var _r39 = Fa(_e59, n[2]);

        t.push([_e59].concat(_r39));
      } else t.push([_e59]);
    }

    return t;
  }

  function Sa(e, t) {
    var n = {};

    var _iterator27 = _createForOfIteratorHelper(t),
        _step27;

    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var _e61 = _step27.value;

        var _iterator28 = _createForOfIteratorHelper(_e61.styles),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _t43 = _step28.value;
            n[_t43[0]] = _e61.inverse ? null : _t43.slice(1);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }

    var r = e;

    for (var _i27 = 0, _Object$keys17 = Object.keys(n); _i27 < _Object$keys17.length; _i27++) {
      var _e60 = _Object$keys17[_i27];

      if (Array.isArray(n[_e60])) {
        if (!(_e60 in r)) throw new Error("Unknown Chalk style: ".concat(_e60));
        r = n[_e60].length > 0 ? r[_e60].apply(r, n[_e60]) : r[_e60];
      }
    }

    return r;
  }

  var wa = function wa(e, t) {
    var n = [],
        r = [];
    var u = [];

    if (t.replace(ya, function (t, o, a, i, s, l) {
      if (o) u.push(va(o));else if (i) {
        var _t44 = u.join("");

        u = [], r.push(0 === n.length ? _t44 : Sa(e, n)(_t44)), n.push({
          inverse: a,
          styles: xa(i)
        });
      } else if (s) {
        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
        r.push(Sa(e, n)(u.join(""))), u = [], n.pop();
      } else u.push(l);
    }), r.push(u.join("")), n.length > 0) {
      var _e62 = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)");

      throw new Error(_e62);
    }

    return r.join("");
  },
      Ba = $e(function (e) {
    var t = Da.stdout,
        n = "win32" === Re.platform && !(Re.env.TERM || "").toLowerCase().startsWith("xterm"),
        r = ["ansi", "ansi", "ansi256", "ansi16m"],
        u = new Set(["gray"]),
        o = Object.create(null);

    function a(e, n) {
      n = n || {};
      var r = t ? t.level : 0;
      e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0;
    }

    function i(e) {
      if (!this || !(this instanceof i) || this.template) {
        var _t45 = {};
        return a(_t45, e), _t45.template = function () {
          var e = [].slice.call(arguments);
          return p.apply(null, [_t45.template].concat(e));
        }, Object.setPrototypeOf(_t45, i.prototype), Object.setPrototypeOf(_t45.template, _t45), _t45.template.constructor = i, _t45.template;
      }

      a(this, e);
    }

    n && (fa.blue.open = "[94m");

    var _loop9 = function _loop9() {
      var e = _Object$keys18[_i28];
      fa[e].closeRe = new RegExp(oa(fa[e].close), "g"), o[e] = {
        get: function get() {
          var t = fa[e];
          return l.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e);
        }
      };
    };

    for (var _i28 = 0, _Object$keys18 = Object.keys(fa); _i28 < _Object$keys18.length; _i28++) {
      _loop9();
    }

    o.visible = {
      get: function get() {
        return l.call(this, this._styles || [], !0, "visible");
      }
    }, fa.color.closeRe = new RegExp(oa(fa.color.close), "g");

    var _loop10 = function _loop10() {
      var e = _Object$keys19[_i29];
      u.has(e) || (o[e] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = fa.color[r[t]][e].apply(null, arguments),
                u = {
              open: n,
              close: fa.color.close,
              closeRe: fa.color.closeRe
            };
            return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
          };
        }
      });
    };

    for (var _i29 = 0, _Object$keys19 = Object.keys(fa.color.ansi); _i29 < _Object$keys19.length; _i29++) {
      _loop10();
    }

    fa.bgColor.closeRe = new RegExp(oa(fa.bgColor.close), "g");

    var _loop11 = function _loop11() {
      var e = _Object$keys20[_i30];
      if (u.has(e)) return "continue";
      o["bg" + e[0].toUpperCase() + e.slice(1)] = {
        get: function get() {
          var t = this.level;
          return function () {
            var n = fa.bgColor[r[t]][e].apply(null, arguments),
                u = {
              open: n,
              close: fa.bgColor.close,
              closeRe: fa.bgColor.closeRe
            };
            return l.call(this, this._styles ? this._styles.concat(u) : [u], this._empty, e);
          };
        }
      };
    };

    for (var _i30 = 0, _Object$keys20 = Object.keys(fa.bgColor.ansi); _i30 < _Object$keys20.length; _i30++) {
      var _ret2 = _loop11();

      if (_ret2 === "continue") continue;
    }

    var s = Object.defineProperties(function () {}, o);

    function l(e, t, n) {
      var r = function e() {
        return c.apply(e, arguments);
      };

      r._styles = e, r._empty = t;
      var u = this;
      return Object.defineProperty(r, "level", {
        enumerable: !0,
        get: function get() {
          return u.level;
        },
        set: function set(e) {
          u.level = e;
        }
      }), Object.defineProperty(r, "enabled", {
        enumerable: !0,
        get: function get() {
          return u.enabled;
        },
        set: function set(e) {
          u.enabled = e;
        }
      }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r;
    }

    function c() {
      var e = arguments,
          t = e.length;
      var r = String(arguments[0]);
      if (0 === t) return "";
      if (t > 1) for (var _n29 = 1; _n29 < t; _n29++) {
        r += " " + e[_n29];
      }
      if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
      var u = fa.dim.open;
      n && this.hasGrey && (fa.dim.open = "");

      var _iterator29 = _createForOfIteratorHelper(this._styles.slice().reverse()),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var _e63 = _step29.value;
          r = _e63.open + r.replace(_e63.closeRe, _e63.open) + _e63.close, r = r.replace(/\r?\n/g, "".concat(_e63.close, "$&").concat(_e63.open));
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      return fa.dim.open = u, r;
    }

    function p(e, t) {
      if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
      var n = [].slice.call(arguments, 2),
          r = [t.raw[0]];

      for (var _e64 = 1; _e64 < t.length; _e64++) {
        r.push(String(n[_e64 - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[_e64]));
      }

      return wa(e, r.join(""));
    }

    Object.defineProperties(i.prototype, o), e.exports = i(), e.exports.supportsColor = t, e.exports.default = e.exports;
  }),
      Ta = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.shouldHighlight = l, t.getChalk = c, t.default = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (l(t)) {
        var _n30 = c(t);

        return function (e, t) {
          return t.replace(r.default, function () {
            for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              t[_key8] = arguments[_key8];
            }

            var n = function (e) {
              var _e$slice = e.slice(-2),
                  _e$slice2 = _slicedToArray(_e$slice, 2),
                  t = _e$slice2[0],
                  n = _e$slice2[1],
                  u = (0, r.matchToToken)(e);

              if ("name" === u.type) {
                if ((0, ra.isKeyword)(u.value) || (0, ra.isReservedWord)(u.value)) return "keyword";
                if (i.test(u.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) return "jsx_tag";
                if (u.value[0] !== u.value[0].toLowerCase()) return "capitalized";
              }

              if ("punctuator" === u.type && s.test(u.value)) return "bracket";
              if ("invalid" === u.type && ("@" === u.value || "#" === u.value)) return "punctuator";
              return u.type;
            }(t),
                u = e[n];

            return u ? t[0].split(a).map(function (e) {
              return u(e);
            }).join("\n") : t[0];
          });
        }(function (e) {
          return {
            keyword: e.cyan,
            capitalized: e.yellow,
            jsx_tag: e.yellow,
            punctuator: e.yellow,
            number: e.magenta,
            string: e.green,
            regex: e.magenta,
            comment: e.grey,
            invalid: e.white.bgRed.bold
          };
        }(_n30), e);
      }

      return e;
    };

    var n,
        r = function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = o();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) {
        if (Object.prototype.hasOwnProperty.call(e, u)) {
          var a = r ? Object.getOwnPropertyDescriptor(e, u) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, u, a) : n[u] = e[u];
        }
      }

      n.default = e, t && t.set(e, n);
      return n;
    }(ea),
        u = (n = Ba) && n.__esModule ? n : {
      default: n
    };

    function o() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return o = function o() {
        return e;
      }, e;
    }

    var a = /\r\n|[\n\r\u2028\u2029]/,
        i = /^[a-z][\w-]*$/i,
        s = /^[()[\]{}]$/;

    function l(e) {
      return u.default.supportsColor || e.forceColor;
    }

    function c(e) {
      var t = u.default;
      return e.forceColor && (t = new u.default.constructor({
        enabled: !0,
        level: 1
      })), t;
    }
  }),
      ka = $e(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.codeFrameColumns = a, t.default = function (e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (!u) {
        u = !0;
        var _e65 = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        if (Re.emitWarning) Re.emitWarning(_e65, "DeprecationWarning");else {
          new Error(_e65).name = "DeprecationWarning", console.warn(new Error(_e65));
        }
      }

      n = Math.max(n, 0);
      return a(e, {
        start: {
          column: n,
          line: t
        }
      }, r);
    };

    var n = function (e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var a = u ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o];
        }
      }

      n.default = e, t && t.set(e, n);
      return n;
    }(Ta);

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    var u = !1;
    var o = /\r\n|[\n\r\u2028\u2029]/;

    function a(e, t) {
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var u = (r.highlightCode || r.forceColor) && (0, n.shouldHighlight)(r),
          a = (0, n.getChalk)(r),
          i = function (e) {
        return {
          gutter: e.grey,
          marker: e.red.bold,
          message: e.red.bold
        };
      }(a),
          s = function s(e, t) {
        return u ? e(t) : t;
      },
          l = e.split(o),
          _ref25 = function (e, t, n) {
        var r = Object.assign({
          column: 0,
          line: -1
        }, e.start),
            u = Object.assign({}, r, e.end),
            _ref26 = n || {},
            _ref26$linesAbove = _ref26.linesAbove,
            o = _ref26$linesAbove === void 0 ? 2 : _ref26$linesAbove,
            _ref26$linesBelow = _ref26.linesBelow,
            a = _ref26$linesBelow === void 0 ? 3 : _ref26$linesBelow,
            i = r.line,
            s = r.column,
            l = u.line,
            c = u.column;

        var p = Math.max(i - (o + 1), 0),
            d = Math.min(t.length, l + a);
        -1 === i && (p = 0), -1 === l && (d = t.length);
        var f = l - i,
            h = {};
        if (f) for (var _e66 = 0; _e66 <= f; _e66++) {
          var _n31 = _e66 + i;

          if (s) {
            if (0 === _e66) {
              var _e67 = t[_n31 - 1].length;
              h[_n31] = [s, _e67 - s + 1];
            } else if (_e66 === f) h[_n31] = [0, c];else {
              var _r40 = t[_n31 - _e66].length;
              h[_n31] = [0, _r40];
            }
          } else h[_n31] = !0;
        } else h[i] = s === c ? !s || [s, 0] : [s, c - s];
        return {
          start: p,
          end: d,
          markerLines: h
        };
      }(t, l, r),
          c = _ref25.start,
          p = _ref25.end,
          d = _ref25.markerLines,
          f = t.start && "number" == typeof t.start.column,
          h = String(p).length;

      var m = (u ? (0, n.default)(e, r) : e).split(o).slice(c, p).map(function (e, t) {
        var n = c + 1 + t,
            u = " ".concat(n).slice(-h),
            o = " ".concat(u, " | "),
            a = d[n],
            l = !d[n + 1];

        if (a) {
          var _t46 = "";

          if (Array.isArray(a)) {
            var _n32 = e.slice(0, Math.max(a[0] - 1, 0)).replace(/[^\t]/g, " "),
                _u12 = a[1] || 1;

            _t46 = ["\n ", s(i.gutter, o.replace(/\d/g, " ")), _n32, s(i.marker, "^").repeat(_u12)].join(""), l && r.message && (_t46 += " " + s(i.message, r.message));
          }

          return [s(i.marker, ">"), s(i.gutter, o), e, _t46].join("");
        }

        return " ".concat(s(i.gutter, o)).concat(e);
      }).join("\n");
      return r.message && !f && (m = "".concat(" ".repeat(h + 1)).concat(r.message, "\n").concat(m)), u ? a.reset(m) : m;
    }
  });

  var Na = gr.ConfigError,
      Oa = Zo.locStart,
      Pa = Zo.locEnd,
      _a = Object.getOwnPropertyNames,
      Ia = Object.getOwnPropertyDescriptor;

  function ja(e) {
    var t = {};

    var _iterator30 = _createForOfIteratorHelper(e.plugins),
        _step30;

    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _n33 = _step30.value;

        if (_n33.parsers) {
          var _iterator31 = _createForOfIteratorHelper(_a(_n33.parsers)),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _e68 = _step31.value;
              Object.defineProperty(t, _e68, Ia(_n33.parsers, _e68));
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
        }
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }

    return t;
  }

  function Ma(e, t) {
    if (t = t || ja(e), "function" == typeof e.parser) return {
      parse: e.parser,
      astFormat: "estree",
      locStart: Oa,
      locEnd: Pa
    };

    if ("string" == typeof e.parser) {
      if (Object.prototype.hasOwnProperty.call(t, e.parser)) return t[e.parser];
      throw new Na("Couldn't resolve parser \"".concat(e.parser, '". Parsers must be explicitly added to the standalone bundle.'));
    }
  }

  var La = {
    parse: function parse(e, t) {
      var n = ja(t),
          r = Object.keys(n).reduce(function (e, t) {
        return Object.defineProperty(e, t, {
          enumerable: !0,
          get: function get() {
            return n[t].parse;
          }
        });
      }, {}),
          u = Ma(t, n);

      try {
        return u.preprocess && (e = u.preprocess(e, t)), {
          text: e,
          ast: u.parse(e, r, t)
        };
      } catch (t) {
        var _n34 = t.loc;

        if (_n34) {
          var _r41 = ka;
          throw t.codeFrame = _r41.codeFrameColumns(e, _n34, {
            highlightCode: !0
          }), t.message += "\n" + t.codeFrame, t;
        }

        throw t.stack;
      }
    },
    resolveParser: Ma
  };
  var Ra = gr.UndefinedParserError,
      qa = yt.getSupportInfo,
      Va = La.resolveParser,
      Wa = {
    astFormat: "estree",
    printer: {},
    originalText: void 0,
    locStart: null,
    locEnd: null
  };

  function $a(e, t) {
    var n = fn.basename(e).toLowerCase(),
        r = qa({
      plugins: t
    }).languages.filter(function (e) {
      return null !== e.since;
    });
    var u = r.find(function (e) {
      return e.extensions && e.extensions.some(function (e) {
        return n.endsWith(e);
      }) || e.filenames && e.filenames.some(function (e) {
        return e.toLowerCase() === n;
      });
    });

    if (!u && !n.includes(".")) {
      var _t47 = function (e) {
        if ("string" != typeof e) return "";
        var t;

        try {
          t = cr.openSync(e, "r");
        } catch (e) {
          return "";
        }

        try {
          var _e69 = new pr(t).next().toString("utf8"),
              _n35 = _e69.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);

          if (_n35) return _n35[1];

          var _r42 = _e69.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);

          return _r42 ? _r42[1] : "";
        } catch (e) {
          return "";
        } finally {
          try {
            cr.closeSync(t);
          } catch (e) {}
        }
      }(e);

      u = r.find(function (e) {
        return e.interpreters && e.interpreters.includes(_t47);
      });
    }

    return u && u.parsers[0];
  }

  var Ua = {
    normalize: function normalize(e, t) {
      t = t || {};
      var n = Object.assign({}, e),
          r = qa({
        plugins: e.plugins,
        showUnreleased: !0,
        showDeprecated: !0
      }).options,
          u = Object.assign({}, Wa, dr(r.filter(function (e) {
        return void 0 !== e.default;
      }).map(function (e) {
        return [e.name, e.default];
      })));
      if (!n.parser) if (n.filepath) {
        if (n.parser = $a(n.filepath, n.plugins), !n.parser) throw new Ra("No parser could be inferred for file: ".concat(n.filepath));
      } else {
        (t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n.parser = "babel";
      }
      var o = Va(Yo.normalizeApiOptions(n, [r.find(function (e) {
        return "parser" === e.name;
      })], {
        passThrough: !0,
        logger: !1
      }));
      n.astFormat = o.astFormat, n.locEnd = o.locEnd, n.locStart = o.locStart;

      var a = function (e) {
        var t = e.astFormat;
        if (!t) throw new Error("getPlugin() requires astFormat to be set");
        var n = e.plugins.find(function (e) {
          return e.printers && e.printers[t];
        });
        if (!n) throw new Error("Couldn't find plugin for AST format \"".concat(t, '"'));
        return n;
      }(n);

      n.printer = a.printers[n.astFormat];
      var i = r.filter(function (e) {
        return e.pluginDefaults && void 0 !== e.pluginDefaults[a.name];
      }).reduce(function (e, t) {
        return Object.assign(e, _defineProperty({}, t.name, t.pluginDefaults[a.name]));
      }, {}),
          s = Object.assign({}, u, i);
      return Object.keys(s).forEach(function (e) {
        null == n[e] && (n[e] = s[e]);
      }), "json" === n.parser && (n.trailingComma = "none"), Yo.normalizeApiOptions(n, r, Object.assign({
        passThrough: Object.keys(Wa)
      }, t));
    },
    hiddenDefaults: Wa,
    inferParser: $a
  };

  var za = function e(t, n, r) {
    if (Array.isArray(t)) return t.map(function (t) {
      return e(t, n, r);
    }).filter(Boolean);
    if (!t || "object" != _typeof(t)) return t;
    var u = {};

    for (var _i31 = 0, _Object$keys21 = Object.keys(t); _i31 < _Object$keys21.length; _i31++) {
      var _r43 = _Object$keys21[_i31];
      "function" != typeof t[_r43] && (u[_r43] = e(t[_r43], n, t));
    }

    if (n.printer.massageAstNode) {
      var _e70 = n.printer.massageAstNode(t, u, r);

      if (null === _e70) return;
      if (_e70) return _e70;
    }

    return u;
  };

  function Ja() {}

  Ja.ok = function () {}, Ja.strictEqual = function () {};
  var _ln$builders = ln.builders,
      Ga = _ln$builders.concat,
      Ha = _ln$builders.line,
      Xa = _ln$builders.hardline,
      Ya = _ln$builders.breakParent,
      Ka = _ln$builders.indent,
      Qa = _ln$builders.lineSuffix,
      Za = _ln$builders.join,
      ei = _ln$builders.cursor,
      ti = Lt.hasNewline,
      ni = Lt.skipNewline,
      ri = Lt.skipSpaces,
      ui = Lt.isPreviousLineEmpty,
      oi = Lt.addLeadingComment,
      ai = Lt.addDanglingComment,
      ii = Lt.addTrailingComment,
      si = Symbol("child-nodes");

  function li(e, t, n) {
    if (!e) return;
    var r = t.printer,
        u = t.locStart,
        o = t.locEnd;

    if (n) {
      if (r.canAttachComment && r.canAttachComment(e)) {
        var _t48;

        for (_t48 = n.length - 1; _t48 >= 0 && !(u(n[_t48]) <= u(e) && o(n[_t48]) <= o(e)); --_t48) {
          ;
        }

        return void n.splice(_t48 + 1, 0, e);
      }
    } else if (e[si]) return e[si];

    var a = r.getCommentChildNodes && r.getCommentChildNodes(e, t) || "object" == _typeof(e) && Object.keys(e).filter(function (e) {
      return "enclosingNode" !== e && "precedingNode" !== e && "followingNode" !== e && "tokens" !== e && "comments" !== e;
    }).map(function (t) {
      return e[t];
    });
    return a ? (n || Object.defineProperty(e, si, {
      value: n = [],
      enumerable: !1
    }), a.forEach(function (e) {
      li(e, t, n);
    }), n) : void 0;
  }

  function ci(e, t, n) {
    var r = e.length;
    if (0 === r) return;
    var _e$ = e[0],
        u = _e$.precedingNode,
        o = _e$.followingNode,
        a = _e$.enclosingNode,
        i = n.printer.getGapRegex && n.printer.getGapRegex(a) || /^[\s(]*$/;
    var s,
        l = n.locStart(o);

    for (s = r; s > 0; --s) {
      var _r44 = e[s - 1];
      Ja.strictEqual(_r44.precedingNode, u), Ja.strictEqual(_r44.followingNode, o);

      var _a10 = t.slice(n.locEnd(_r44), l);

      if (!i.test(_a10)) break;
      l = n.locStart(_r44);
    }

    e.forEach(function (e, t) {
      t < s ? ii(u, e) : oi(o, e);
    });

    for (var _i32 = 0, _arr2 = [u, o]; _i32 < _arr2.length; _i32++) {
      var _e71 = _arr2[_i32];
      _e71.comments && _e71.comments.length > 1 && _e71.comments.sort(function (e, t) {
        return n.locStart(e) - n.locStart(t);
      });
    }

    e.length = 0;
  }

  function pi(e, t) {
    return e.getValue().printed = !0, t.printer.printComment(e, t);
  }

  function di(e, t, n) {
    var r = n.locStart(t) - 1;

    for (var _t49 = 1; _t49 < e.length; ++_t49) {
      if (r < n.locStart(e[_t49])) return _t49 - 1;
    }

    return 0;
  }

  function fi(e, t, n) {
    return e.getNode() === t.cursorNode && e.getValue() ? Ga([ei, n, ei]) : n;
  }

  var hi = {
    attach: function attach(e, t, n, r) {
      if (!Array.isArray(e)) return;
      var u = [],
          o = r.locStart,
          a = r.locEnd;
      e.forEach(function (i, s) {
        if ("json" === r.parser || "json5" === r.parser || "__js_expression" === r.parser || "__vue_expression" === r.parser) {
          if (o(i) - o(t) <= 0) return void oi(t, i);
          if (a(i) - a(t) >= 0) return void ii(t, i);
        }

        !function e(t, n, r) {
          var u = r.locStart,
              o = r.locEnd,
              a = li(t, r);
          var i,
              s,
              l = 0,
              c = a.length;

          for (; l < c;) {
            var _t50 = l + c >> 1,
                _p3 = a[_t50];

            if (u(_p3) - u(n) <= 0 && o(n) - o(_p3) <= 0) return n.enclosingNode = _p3, void e(_p3, n, r);
            if (o(_p3) - u(n) <= 0) i = _p3, l = _t50 + 1;else {
              if (!(o(n) - u(_p3) <= 0)) throw new Error("Comment location overlaps with node location");
              s = _p3, c = _t50;
            }
          }

          if (n.enclosingNode && "TemplateLiteral" === n.enclosingNode.type) {
            var _e72 = n.enclosingNode.quasis,
                _t51 = di(_e72, n, r);

            i && di(_e72, i, r) !== _t51 && (i = null), s && di(_e72, s, r) !== _t51 && (s = null);
          }

          i && (n.precedingNode = i), s && (n.followingNode = s);
        }(t, i, r);
        var l = i.precedingNode,
            c = i.enclosingNode,
            p = i.followingNode,
            d = r.printer.handleComments && r.printer.handleComments.ownLine ? r.printer.handleComments.ownLine : function () {
          return !1;
        },
            f = r.printer.handleComments && r.printer.handleComments.endOfLine ? r.printer.handleComments.endOfLine : function () {
          return !1;
        },
            h = r.printer.handleComments && r.printer.handleComments.remaining ? r.printer.handleComments.remaining : function () {
          return !1;
        },
            m = e.length - 1 === s;
        if (ti(n, o(i), {
          backwards: !0
        })) d(i, n, r, t, m) || (p ? oi(p, i) : l ? ii(l, i) : ai(c || t, i));else if (ti(n, a(i))) f(i, n, r, t, m) || (l ? ii(l, i) : p ? oi(p, i) : ai(c || t, i));else if (h(i, n, r, t, m)) ;else if (l && p) {
          var _e73 = u.length;

          if (_e73 > 0) {
            u[_e73 - 1].followingNode !== i.followingNode && ci(u, n, r);
          }

          u.push(i);
        } else l ? ii(l, i) : p ? oi(p, i) : ai(c || t, i);
      }), ci(u, n, r), e.forEach(function (e) {
        delete e.precedingNode, delete e.enclosingNode, delete e.followingNode;
      });
    },
    printComments: function printComments(e, t, n, r) {
      var u = e.getValue(),
          o = t(e),
          a = u && u.comments;
      if (!a || 0 === a.length) return fi(e, n, o);
      var i = [],
          s = [r ? ";" : "", o];
      return e.each(function (e) {
        var t = e.getValue(),
            r = t.leading,
            u = t.trailing;

        if (r) {
          var _r45 = function (e, t) {
            var n = e.getValue(),
                r = pi(e, t);
            if (!r) return "";

            if (t.printer.isBlockComment && t.printer.isBlockComment(n)) {
              var _e74 = ti(t.originalText, t.locEnd(n)) ? ti(t.originalText, t.locStart(n), {
                backwards: !0
              }) ? Xa : Ha : " ";

              return Ga([r, _e74]);
            }

            return Ga([r, Xa]);
          }(e, n);

          if (!_r45) return;
          i.push(_r45);

          var _u13 = n.originalText,
              _o9 = ni(_u13, ri(_u13, n.locEnd(t)));

          !1 !== _o9 && ti(_u13, _o9) && i.push(Xa);
        } else u && s.push(function (e, t) {
          var n = e.getValue(),
              r = pi(e, t);
          if (!r) return "";
          var u = t.printer,
              o = t.originalText,
              a = t.locStart,
              i = u.isBlockComment && u.isBlockComment(n);

          if (ti(o, a(n), {
            backwards: !0
          })) {
            var _e75 = ui(o, n, a);

            return Qa(Ga([Xa, _e75 ? Xa : "", r]));
          }

          var s = Ga([" ", r]);
          return i || (s = Ga([Qa(s), Ya])), s;
        }(e, n));
      }, "comments"), fi(e, n, Ga(i.concat(s)));
    },
    printDanglingComments: function printDanglingComments(e, t, n, r) {
      var u = [],
          o = e.getValue();
      return o && o.comments ? (e.each(function (e) {
        var n = e.getValue();
        !n || n.leading || n.trailing || r && !r(n) || u.push(pi(e, t));
      }, "comments"), 0 === u.length ? "" : n ? Za(Xa, u) : Ka(Ga([Xa, Za(Xa, u)]))) : "";
    },
    getSortedChildNodes: li,
    ensureAllCommentsPrinted: function ensureAllCommentsPrinted(e) {
      e && e.forEach(function (e) {
        if (!e.printed) throw new Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
        delete e.printed;
      });
    }
  };

  function mi(e, t) {
    var n = gi(e.stack, t);
    return -1 === n ? null : e.stack[n];
  }

  function gi(e, t) {
    for (var _n36 = e.length - 1; _n36 >= 0; _n36 -= 2) {
      var _r46 = e[_n36];
      if (_r46 && !Array.isArray(_r46) && --t < 0) return _n36;
    }

    return -1;
  }

  var Di = /*#__PURE__*/function () {
    function Di(e) {
      _classCallCheck(this, Di);

      this.stack = [e];
    }

    _createClass(Di, [{
      key: "getName",
      value: function getName() {
        var e = this.stack,
            t = e.length;
        return t > 1 ? e[t - 2] : null;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return he(this.stack);
      }
    }, {
      key: "getNode",
      value: function getNode() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return mi(this, e);
      }
    }, {
      key: "getParentNode",
      value: function getParentNode() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return mi(this, e + 1);
      }
    }, {
      key: "call",
      value: function call(e) {
        var n = this.stack,
            r = n.length;
        var u = he(n);

        for (var _len9 = arguments.length, t = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          t[_key9 - 1] = arguments[_key9];
        }

        for (var _i33 = 0, _t52 = t; _i33 < _t52.length; _i33++) {
          var _e76 = _t52[_i33];
          u = u[_e76], n.push(_e76, u);
        }

        var o = e(this);
        return n.length = r, o;
      }
    }, {
      key: "callParent",
      value: function callParent(e) {
        var _this$stack;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var n = gi(this.stack, t + 1),
            r = this.stack.splice(n + 1),
            u = e(this);
        return (_this$stack = this.stack).push.apply(_this$stack, _toConsumableArray(r)), u;
      }
    }, {
      key: "each",
      value: function each(e) {
        var n = this.stack,
            r = n.length;
        var u = he(n);

        for (var _len10 = arguments.length, t = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
          t[_key10 - 1] = arguments[_key10];
        }

        for (var _i34 = 0, _t53 = t; _i34 < _t53.length; _i34++) {
          var _e77 = _t53[_i34];
          u = u[_e77], n.push(_e77, u);
        }

        for (var _t54 = 0; _t54 < u.length; ++_t54) {
          _t54 in u && (n.push(_t54, u[_t54]), e(this), n.length -= 2);
        }

        n.length = r;
      }
    }, {
      key: "map",
      value: function map(e) {
        var n = this.stack,
            r = n.length;
        var u = he(n);

        for (var _len11 = arguments.length, t = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
          t[_key11 - 1] = arguments[_key11];
        }

        for (var _i35 = 0, _t55 = t; _i35 < _t55.length; _i35++) {
          var _e78 = _t55[_i35];
          u = u[_e78], n.push(_e78, u);
        }

        var o = new Array(u.length);

        for (var _t56 = 0; _t56 < u.length; ++_t56) {
          _t56 in u && (n.push(_t56, u[_t56]), o[_t56] = e(this, _t56), n.length -= 2);
        }

        return n.length = r, o;
      }
    }, {
      key: "match",
      value: function match() {
        var t = this.stack.length - 1,
            n = null,
            r = this.stack[t--];

        for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          e[_key12] = arguments[_key12];
        }

        for (var _i36 = 0, _e79 = e; _i36 < _e79.length; _i36++) {
          var _u14 = _e79[_i36];
          if (void 0 === r) return !1;
          var _e80 = null;
          if ("number" == typeof n && (_e80 = n, n = this.stack[t--], r = this.stack[t--]), _u14 && !_u14(r, n, _e80)) return !1;
          n = this.stack[t--], r = this.stack[t--];
        }

        return !0;
      }
    }]);

    return Di;
  }();

  var yi = ln.utils.stripTrailingHardline,
      Ei = Ua.normalize;
  var Ci = {
    printSubtree: function printSubtree(e, t, n, r) {
      if (n.printer.embed && "auto" === n.embeddedLanguageFormatting) return n.printer.embed(e, t, function (e, t, u) {
        return function (e, t, n, r) {
          var _ref27 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
              _ref27$stripTrailingH = _ref27.stripTrailingHardline,
              u = _ref27$stripTrailingH === void 0 ? !1 : _ref27$stripTrailingH;

          var o = Ei(Object.assign({}, n, t, {
            parentParser: n.parser,
            embeddedInHtml: !(!n.embeddedInHtml && "html" !== n.parser && "vue" !== n.parser && "angular" !== n.parser && "lwc" !== n.parser),
            originalText: e
          }), {
            passThrough: !0
          }),
              a = La.parse(e, o),
              i = a.ast;
          e = a.text;
          var s = i.comments;
          delete i.comments, hi.attach(s, i, e, o), o[Symbol.for("comments")] = s || [], o[Symbol.for("tokens")] = i.tokens || [];
          var l = r(i, o);
          if (hi.ensureAllCommentsPrinted(s), u) return "string" == typeof l ? l.replace(/(?:\r?\n)*$/, "") : yi(l, !0);
          return l;
        }(e, t, n, r, u);
      }, n);
    }
  };
  var bi = ln,
      Ai = bi.builders,
      vi = Ai.concat,
      Fi = Ai.hardline,
      xi = Ai.addAlignmentToDoc,
      Si = bi.utils;

  function wi(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var r = t.printer;
    r.preprocess && (e = r.preprocess(e, t));
    var u = new Map();

    var o = function e(n, o) {
      var a = n.getValue(),
          i = a && "object" == _typeof(a) && void 0 === o;
      if (i && u.has(a)) return u.get(a);
      var s;
      return s = r.willPrintOwnComments && r.willPrintOwnComments(n, t) ? Bi(n, t, e, o) : hi.printComments(n, function (n) {
        return Bi(n, t, e, o);
      }, t, o && o.needsSemi), i && u.set(a, s), s;
    }(new Di(e));

    return n > 0 && (o = xi(vi([Fi, o]), n, t.tabWidth)), Si.propagateBreaks(o), o;
  }

  function Bi(e, t, n, r) {
    Ja.ok(e instanceof Di);
    var u = e.getValue(),
        o = t.printer;
    if (o.hasPrettierIgnore && o.hasPrettierIgnore(e)) return function (e, t) {
      var n = t.originalText,
          r = t[Symbol.for("comments")],
          u = t.locStart,
          o = t.locEnd,
          a = u(e),
          i = o(e);

      var _iterator32 = _createForOfIteratorHelper(r),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var _e81 = _step32.value;
          u(_e81) >= a && o(_e81) <= i && (_e81.printed = !0);
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }

      return n.slice(a, i);
    }(u, t);
    if (u) try {
      var _r47 = Ci.printSubtree(e, n, t, wi);

      if (_r47) return _r47;
    } catch (e) {
      if (We.PRETTIER_DEBUG) throw e;
    }
    return o.print(e, t, n, r);
  }

  var Ti = wi;

  function ki(e, t, n, r) {
    var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

    if (!(t < n.locStart(e) || t > n.locEnd(e))) {
      var _iterator33 = _createForOfIteratorHelper(hi.getSortedChildNodes(e, n)),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var _o10 = _step33.value;

          var _a11 = ki(_o10, t, n, r, [e].concat(_toConsumableArray(u)));

          if (_a11) return _a11;
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }

      return !r || r(e) ? {
        node: e,
        parentNodes: u
      } : void 0;
    }
  }

  var Ni = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"]),
      Oi = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);

  function Pi(e, t) {
    if (null == t) return !1;

    switch (e.parser) {
      case "flow":
      case "babel":
      case "babel-flow":
      case "babel-ts":
      case "typescript":
        return function (e) {
          return "Directive" === e || "TypeAlias" === e || "TSExportAssignment" === e || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration");
        }(t.type);

      case "json":
        return Ni.has(t.type);

      case "graphql":
        return Oi.has(t.kind);

      case "vue":
        return "root" !== t.tag;
    }

    return !1;
  }

  var _i = {
    calculateRange: function calculateRange(e, t, n) {
      var r = e.slice(t.rangeStart, t.rangeEnd),
          u = Math.max(t.rangeStart + r.search(/\S/), t.rangeStart);
      var o;

      for (o = t.rangeEnd; o > t.rangeStart && !/\S/.test(e[o - 1]); --o) {
        ;
      }

      var a = ki(n, u, t, function (e) {
        return Pi(t, e);
      }),
          i = ki(n, o, t, function (e) {
        return Pi(t, e);
      });
      if (!a || !i) return {
        rangeStart: 0,
        rangeEnd: 0
      };

      var _ref28 = function (e, t, n) {
        var r = e.node,
            u = t.node;
        if (r === u) return {
          startNode: r,
          endNode: u
        };

        var _iterator34 = _createForOfIteratorHelper(t.parentNodes),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var _r48 = _step34.value;
            if (!("Program" !== _r48.type && "File" !== _r48.type && n.locStart(_r48) >= n.locStart(e.node))) break;
            u = _r48;
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }

        var _iterator35 = _createForOfIteratorHelper(e.parentNodes),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var _u15 = _step35.value;
            if (!("Program" !== _u15.type && "File" !== _u15.type && n.locEnd(_u15) <= n.locEnd(t.node))) break;
            r = _u15;
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }

        return {
          startNode: r,
          endNode: u
        };
      }(a, i, t),
          s = _ref28.startNode,
          l = _ref28.endNode;

      return {
        rangeStart: Math.min(t.locStart(s), t.locStart(l)),
        rangeEnd: Math.max(t.locEnd(s), t.locEnd(l))
      };
    },
    findNodeAtOffset: ki
  },
      Ii = Ue(K);
  var ji = ln.printer.printDocToString,
      Mi = ln.debug.printDocToDebug,
      Li = Lt.getAlignmentSize,
      Ri = Rt.guessEndOfLine,
      qi = Rt.convertEndOfLineToChars,
      Vi = Rt.countEndOfLineChars,
      Wi = Rt.normalizeEndOfLine,
      $i = Ua.normalize,
      Ui = Symbol("cursor");

  function zi(e, t, n) {
    var r = t.comments;
    return r && (delete t.comments, hi.attach(r, t, e, n)), n[Symbol.for("comments")] = r || [], n[Symbol.for("tokens")] = t.tokens || [], n.originalText = e, r;
  }

  function Ji(e, t, n) {
    if (!e || !e.trim().length) return {
      formatted: "",
      cursorOffset: -1
    };
    n = n || 0;
    var r = La.parse(e, t),
        u = r.ast;

    if (e = r.text, t.cursorOffset >= 0) {
      var _e82 = _i.findNodeAtOffset(u, t.cursorOffset, t);

      _e82 && _e82.node && (t.cursorNode = _e82.node);
    }

    var o = zi(e, u, t),
        a = Ti(u, t, n),
        i = ji(a, t);

    if (hi.ensureAllCommentsPrinted(o), n > 0) {
      var _e83 = i.formatted.trim();

      void 0 !== i.cursorNodeStart && (i.cursorNodeStart -= i.formatted.indexOf(_e83)), i.formatted = _e83 + qi(t.endOfLine);
    }

    if (t.cursorOffset >= 0) {
      var _n37, _r49, _u16, _o11, _a12;

      if (t.cursorNode && i.cursorNodeText ? (_n37 = t.locStart(t.cursorNode), _r49 = e.slice(_n37, t.locEnd(t.cursorNode)), _u16 = t.cursorOffset - _n37, _o11 = i.cursorNodeStart, _a12 = i.cursorNodeText) : (_n37 = 0, _r49 = e, _u16 = t.cursorOffset, _o11 = 0, _a12 = i.formatted), _r49 === _a12) return {
        formatted: i.formatted,
        cursorOffset: _o11 + _u16
      };

      var _s4 = _r49.split("");

      _s4.splice(_u16, 0, Ui);

      var _l4 = _a12.split(""),
          _c3 = Ii.diffArrays(_s4, _l4);

      var _p4 = _o11;

      var _iterator36 = _createForOfIteratorHelper(_c3),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var _e84 = _step36.value;

          if (_e84.removed) {
            if (_e84.value.includes(Ui)) break;
          } else _p4 += _e84.count;
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }

      return {
        formatted: i.formatted,
        cursorOffset: _p4
      };
    }

    return {
      formatted: i.formatted,
      cursorOffset: -1
    };
  }

  function Gi(e, t) {
    var n = La.resolveParser(t),
        r = "\uFEFF" === e.charAt(0);
    var u = r ? e.slice(1) : e;
    var o = t.cursorOffset >= 0;
    o || (t.cursorOffset = -1);
    var a = !n.hasPragma || n.hasPragma(u);
    if (t.requirePragma && !a) return {
      formatted: e,
      cursorOffset: t.cursorOffset
    };
    "auto" === t.endOfLine && (t.endOfLine = Ri(u));
    var i = t.rangeStart > 0,
        s = t.rangeEnd < u.length;

    if (r && (o && t.cursorOffset--, i && t.rangeStart--, s && t.rangeEnd--), u.includes("\r")) {
      var _e85 = function _e85(e) {
        return Vi(u.slice(0, e), "\r\n");
      };

      o && (t.cursorOffset -= _e85(t.cursorOffset)), i && (t.rangeStart -= _e85(t.rangeStart)), s && (t.rangeEnd -= _e85(t.rangeEnd)), u = Wi(u);
    }

    var l;
    return t.rangeStart < 0 && (t.rangeStart = 0), t.rangeEnd > u.length && (t.rangeEnd = u.length), i || s ? l = function (e, t) {
      var n = La.parse(e, t),
          r = n.ast;
      e = n.text;

      var _i$calculateRange = _i.calculateRange(e, t, r),
          u = _i$calculateRange.rangeStart,
          o = _i$calculateRange.rangeEnd,
          a = e.slice(u, o),
          i = Math.min(u, e.lastIndexOf("\n", u) + 1),
          s = e.slice(i, u).match(/^\s*/)[0],
          l = Li(s, t.tabWidth),
          c = Ji(a, Object.assign({}, t, {
        rangeStart: 0,
        rangeEnd: 1 / 0,
        cursorOffset: t.cursorOffset > u && t.cursorOffset < o ? t.cursorOffset - u : -1,
        endOfLine: "lf"
      }), l),
          p = c.formatted.trimEnd();

      var d = t.cursorOffset;
      d >= o ? d = t.cursorOffset + (p.length - a.length) : c.cursorOffset >= 0 && (d = c.cursorOffset + u);
      var f = e.slice(0, u) + p + e.slice(o);

      if ("lf" !== t.endOfLine) {
        var _e86 = qi(t.endOfLine);

        d >= 0 && "\r\n" === _e86 && (d += Vi(f.slice(0, d), "\n")), f = f.replace(/\n/g, _e86);
      }

      return {
        formatted: f,
        cursorOffset: d
      };
    }(u, t) : (!a && t.insertPragma && t.printer.insertPragma && (u = t.printer.insertPragma(u)), l = Ji(u, t)), r && (l.formatted = "\uFEFF" + l.formatted, o && l.cursorOffset >= 0 && l.cursorOffset++), l;
  }

  var Hi = {
    formatWithCursor: function formatWithCursor(e, t) {
      return Gi(e, t = $i(t));
    },
    parse: function parse(e, t, n) {
      t = $i(t), e = Wi("\uFEFF" === e.charAt(0) ? e.slice(1) : e);
      var r = La.parse(e, t);
      return n && (r.ast = za(r.ast, t)), r;
    },
    formatAST: function formatAST(e, t) {
      t = $i(t);
      var n = Ti(e, t);
      return ji(n, t);
    },
    formatDoc: function formatDoc(e, t) {
      t = $i(Object.assign({}, t, {
        parser: "babel"
      }));
      return Gi(Mi(e), t).formatted;
    },
    printToDoc: function printToDoc(e, t) {
      t = $i(t);
      var n = La.parse(e, t),
          r = n.ast,
          u = n.text;
      return zi(u, r, t), Ti(r, t);
    },
    printDocToString: function printDocToString(e, t) {
      return ji(e, $i(t));
    }
  };
  var Xi = Lt.getMaxContinuousCount,
      Yi = Lt.getStringWidth,
      Ki = Lt.getAlignmentSize,
      Qi = Lt.getIndentSize,
      Zi = Lt.skip,
      es = Lt.skipWhitespace,
      ts = Lt.skipSpaces,
      ns = Lt.skipNewline,
      rs = Lt.skipToLineEnd,
      us = Lt.skipEverythingButNewLine,
      os = Lt.skipInlineComment,
      as = Lt.skipTrailingComment,
      is = Lt.hasNewline,
      ss = Lt.hasNewlineInRange,
      ls = Lt.hasSpaces,
      cs = Lt.isNextLineEmpty,
      ps = Lt.isNextLineEmptyAfterIndex,
      ds = Lt.isPreviousLineEmpty,
      fs = Lt.getNextNonSpaceNonCommentCharacterIndex,
      hs = Lt.makeString,
      ms = Lt.addLeadingComment,
      gs = Lt.addDanglingComment,
      Ds = Lt.addTrailingComment;

  var ys = {
    getMaxContinuousCount: Xi,
    getStringWidth: Yi,
    getAlignmentSize: Ki,
    getIndentSize: Qi,
    skip: Zi,
    skipWhitespace: es,
    skipSpaces: ts,
    skipNewline: ns,
    skipToLineEnd: rs,
    skipEverythingButNewLine: us,
    skipInlineComment: os,
    skipTrailingComment: as,
    hasNewline: is,
    hasNewlineInRange: ss,
    hasSpaces: ls,
    isNextLineEmpty: cs,
    isNextLineEmptyAfterIndex: ps,
    isPreviousLineEmpty: ds,
    getNextNonSpaceNonCommentCharacterIndex: fs,
    makeString: hs,
    addLeadingComment: ms,
    addDanglingComment: gs,
    addTrailingComment: Ds
  },
      Es = function Es(t, n) {
    var r = t.languageId,
        u = e(t, ["languageId"]);
    return Object.assign({
      linguistLanguageId: r
    }, u, n(t));
  };

  var Cs = Lt.getLast,
      bs = Lt.hasNewline,
      As = Lt.getNextNonSpaceNonCommentCharacterIndexWithStartIndex,
      vs = Lt.getNextNonSpaceNonCommentCharacter,
      Fs = Lt.hasNewlineInRange,
      xs = Lt.isNodeIgnoreComment,
      Ss = Lt.addLeadingComment,
      ws = Lt.addTrailingComment,
      Bs = Lt.addDanglingComment,
      Ts = Lt.getNextNonSpaceNonCommentCharacterIndex;

  function ks(e, t) {
    var n = (e.body || e.properties).filter(function (e) {
      return "EmptyStatement" !== e.type;
    });
    0 === n.length ? Bs(e, t) : Ss(n[0], t);
  }

  function Ns(e, t) {
    "BlockStatement" === e.type ? ks(e, t) : Ss(e, t);
  }

  function Os(e, t, n, r, u, o) {
    if (!n || "IfStatement" !== n.type || !r) return !1;
    return ")" === vs(e, u, o.locEnd) ? (ws(t, u), !0) : t === n.consequent && r === n.alternate ? ("BlockStatement" === t.type ? ws(t, u) : Bs(n, u), !0) : "BlockStatement" === r.type ? (ks(r, u), !0) : "IfStatement" === r.type ? (Ns(r.consequent, u), !0) : n.consequent === r && (Ss(r, u), !0);
  }

  function Ps(e, t, n, r, u, o) {
    if (!n || "WhileStatement" !== n.type || !r) return !1;
    return ")" === vs(e, u, o.locEnd) ? (ws(t, u), !0) : "BlockStatement" === r.type && (ks(r, u), !0);
  }

  function _s(e, t, n, r) {
    return !(!e || "TryStatement" !== e.type && "CatchClause" !== e.type || !n) && ("CatchClause" === e.type && t ? (ws(t, r), !0) : "BlockStatement" === n.type ? (ks(n, r), !0) : "TryStatement" === n.type ? (Ns(n.finalizer, r), !0) : "CatchClause" === n.type && (Ns(n.body, r), !0));
  }

  function Is(e, t, n, r) {
    if (e && ("ClassDeclaration" === e.type || "ClassExpression" === e.type || "DeclareClass" === e.type || "DeclareInterface" === e.type || "InterfaceDeclaration" === e.type || "TSInterfaceDeclaration" === e.type)) {
      if (e.decorators && e.decorators.length > 0 && (!n || "Decorator" !== n.type)) return ws(e.decorators[e.decorators.length - 1], r), !0;
      if (e.body && n === e.body) return ks(e.body, r), !0;
      if (n) for (var _i37 = 0, _arr3 = ["implements", "extends", "mixins"]; _i37 < _arr3.length; _i37++) {
        var _u17 = _arr3[_i37];
        if (e[_u17] && n === e[_u17][0]) return !t || t !== e.id && t !== e.typeParameters && t !== e.superClass ? Bs(e, r, _u17) : ws(t, r), !0;
      }
    }

    return !1;
  }

  function js(e, t, n, r, u) {
    return (t && n && ("Property" === t.type || "TSDeclareMethod" === t.type || "TSAbstractMethodDefinition" === t.type) && "Identifier" === n.type && t.key === n && ":" !== vs(e, n, u.locEnd) || !(!n || !t || "Decorator" !== n.type || "ClassMethod" !== t.type && "ClassProperty" !== t.type && "TSAbstractClassProperty" !== t.type && "TSAbstractMethodDefinition" !== t.type && "TSDeclareMethod" !== t.type && "MethodDefinition" !== t.type)) && (ws(n, r), !0);
  }

  function Ms(e, t, n, r, u, o) {
    if (t && "FunctionTypeParam" === t.type && n && "FunctionTypeAnnotation" === n.type && r && "FunctionTypeParam" !== r.type) return ws(t, u), !0;
    if (t && ("Identifier" === t.type || "AssignmentPattern" === t.type) && n && Ws(n) && ")" === vs(e, u, o.locEnd)) return ws(t, u), !0;

    if (n && "FunctionDeclaration" === n.type && r && "BlockStatement" === r.type) {
      var _t57 = function () {
        if (0 !== (n.params || n.parameters).length) return As(e, o.locEnd(Cs(n.params || n.parameters)));
        var t = As(e, o.locEnd(n.id));
        return !1 !== t && As(e, t + 1);
      }();

      if (o.locStart(u) > _t57) return ks(r, u), !0;
    }

    return !1;
  }

  function Ls(e, t) {
    return !(!e || "ImportSpecifier" !== e.type) && (Ss(e, t), !0);
  }

  function Rs(e, t) {
    return !(!e || "LabeledStatement" !== e.type) && (Ss(e, t), !0);
  }

  function qs(e, t, n, r) {
    return t && t.body && 0 === t.body.length ? (r ? Bs(t, n) : Ss(t, n), !0) : !(!e || "Program" !== e.type || 0 !== e.body.length || !e.directives || 0 !== e.directives.length) && (r ? Bs(e, n) : Ss(e, n), !0);
  }

  function Vs(e) {
    return "Block" === e.type || "CommentBlock" === e.type;
  }

  function Ws(e) {
    return "ArrowFunctionExpression" === e.type || "FunctionExpression" === e.type || "FunctionDeclaration" === e.type || "ObjectMethod" === e.type || "ClassMethod" === e.type || "TSDeclareFunction" === e.type || "TSCallSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSMethodSignature" === e.type || "TSConstructorType" === e.type || "TSFunctionType" === e.type || "TSDeclareMethod" === e.type;
  }

  function $s(e) {
    return Vs(e) && "*" === e.value[0] && /@type\b/.test(e.value);
  }

  var Us = {
    handleOwnLineComment: function handleOwnLineComment(e, t, n, r, u) {
      var o = e.precedingNode,
          a = e.enclosingNode,
          i = e.followingNode;
      return Ms(t, o, a, i, e, n) || function (e, t, n) {
        if (e && ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) && t && "Identifier" === t.type) return Ss(e, n), !0;
        return !1;
      }(a, i, e) || Os(t, o, a, i, e, n) || Ps(t, o, a, i, e, n) || _s(a, o, i, e) || Is(a, o, i, e) || Ls(a, e) || function (e, t, n) {
        if (e && ("ForInStatement" === e.type || "ForOfStatement" === e.type)) return Ss(e, n), !0;
        return !1;
      }(a, 0, e) || function (e, t, n, r) {
        if (t && ("UnionTypeAnnotation" === t.type || "TSUnionType" === t.type)) return xs(r) && (n.prettierIgnore = !0, r.unignore = !0), !!e && (ws(e, r), !0);
        n && ("UnionTypeAnnotation" === n.type || "TSUnionType" === n.type) && xs(r) && (n.types[0].prettierIgnore = !0, r.unignore = !0);
        return !1;
      }(o, a, i, e) || qs(a, r, e, u) || function (e, t, n, r, u) {
        if (n && "ImportSpecifier" === n.type && t && "ImportDeclaration" === t.type && bs(e, u.locEnd(r))) return ws(n, r), !0;
        return !1;
      }(t, a, o, e, n) || function (e, t) {
        if (e && "AssignmentPattern" === e.type) return Ss(e, t), !0;
        return !1;
      }(a, e) || js(t, a, o, e, n) || Rs(a, e);
    },
    handleEndOfLineComment: function handleEndOfLineComment(e, t, n, r, u) {
      var o = e.precedingNode,
          a = e.enclosingNode,
          i = e.followingNode;
      return function (e, t) {
        if (e && $s(t)) return Ss(e, t), !0;
        return !1;
      }(i, e) || Ms(t, o, a, i, e, n) || function (e, t, n, r, u, o) {
        var a = t && !Fs(u, o.locEnd(t), o.locStart(r));
        if ((!t || !a) && e && ("ConditionalExpression" === e.type || "TSConditionalType" === e.type) && n) return Ss(n, r), !0;
        return !1;
      }(a, o, i, e, t, n) || Ls(a, e) || Os(t, o, a, i, e, n) || Ps(t, o, a, i, e, n) || _s(a, o, i, e) || Is(a, o, i, e) || Rs(a, e) || function (e, t, n) {
        if (t && ("CallExpression" === t.type || "OptionalCallExpression" === t.type) && e && t.callee === e && t.arguments.length > 0) return Ss(t.arguments[0], n), !0;
        return !1;
      }(o, a, e) || function (e, t) {
        if (e && ("Property" === e.type || "ObjectProperty" === e.type)) return Ss(e, t), !0;
        return !1;
      }(a, e) || qs(a, r, e, u) || function (e, t, n) {
        if (e && "TypeAlias" === e.type) return Ss(e, n), !0;
        return !1;
      }(a, 0, e) || function (e, t, n) {
        if (e && ("VariableDeclarator" === e.type || "AssignmentExpression" === e.type) && t && ("ObjectExpression" === t.type || "ArrayExpression" === t.type || "TemplateLiteral" === t.type || "TaggedTemplateExpression" === t.type || Vs(n))) return Ss(t, n), !0;
        return !1;
      }(a, i, e);
    },
    handleRemainingComment: function handleRemainingComment(e, t, n, r, u) {
      var o = e.precedingNode,
          a = e.enclosingNode,
          i = e.followingNode;
      return !!(Os(t, o, a, i, e, n) || Ps(t, o, a, i, e, n) || function (e, t, n) {
        if (e && ("ObjectProperty" === e.type || "Property" === e.type) && e.shorthand && e.key === t && "AssignmentPattern" === e.value.type) return ws(e.value.left, n), !0;
        return !1;
      }(a, o, e) || function (e, t, n, r) {
        if (")" !== vs(e, n, r.locEnd)) return !1;
        if (t && (Ws(t) && 0 === (t.params || t.parameters).length || ("CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type) && 0 === t.arguments.length)) return Bs(t, n), !0;
        if (t && "MethodDefinition" === t.type && 0 === t.value.params.length) return Bs(t.value, n), !0;
        return !1;
      }(t, a, e, n) || js(t, a, o, e, n) || qs(a, r, e, u) || function (e, t, n, r) {
        if (!t || "ArrowFunctionExpression" !== t.type) return !1;
        var u = Ts(e, n, r.locEnd);
        if (!1 !== u && "=>" === e.slice(u, u + 2)) return Bs(t, n), !0;
        return !1;
      }(t, a, e, n) || function (e, t, n, r, u) {
        if ("(" !== vs(e, r, u.locEnd)) return !1;
        if (n && t && ("FunctionDeclaration" === t.type || "FunctionExpression" === t.type || "ClassMethod" === t.type || "MethodDefinition" === t.type || "ObjectMethod" === t.type)) return ws(n, r), !0;
        return !1;
      }(t, a, o, e, n) || function (e, t, n, r, u) {
        if (!t || "TSMappedType" !== t.type) return !1;
        if (r && "TSTypeParameter" === r.type && r.name) return Ss(r.name, u), !0;
        if (n && "TSTypeParameter" === n.type && n.constraint) return ws(n.constraint, u), !0;
        return !1;
      }(0, a, o, i, e) || function (e, t) {
        if (e && ("ContinueStatement" === e.type || "BreakStatement" === e.type) && !e.label) return ws(e, t), !0;
        return !1;
      }(a, e) || function (e, t, n, r, u) {
        if (!n && t && ("TSMethodSignature" === t.type || "TSDeclareFunction" === t.type || "TSAbstractMethodDefinition" === t.type) && ";" === vs(e, r, u.locEnd)) return ws(t, r), !0;
        return !1;
      }(t, a, i, e, n));
    },
    hasLeadingComment: function hasLeadingComment(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return !0;
      };
      return e.leadingComments ? e.leadingComments.some(t) : !!e.comments && e.comments.some(function (e) {
        return e.leading && t(e);
      });
    },
    isBlockComment: Vs,
    isTypeCastComment: $s,
    getGapRegex: function getGapRegex(e) {
      if (e && "BinaryExpression" !== e.type && "LogicalExpression" !== e.type) return /^[\s&(|]*$/;
    },
    getCommentChildNodes: function getCommentChildNodes(e, t) {
      if (("typescript" === t.parser || "flow" === t.parser) && "MethodDefinition" === e.type && e.value && "FunctionExpression" === e.value.type && 0 === e.value.params.length && !e.value.returnType && (!e.value.typeParameters || 0 === e.value.typeParameters.length) && e.value.body) return [].concat(_toConsumableArray(e.decorators || []), [e.key, e.value.body]);
    }
  };
  var _ln$builders2 = ln.builders,
      zs = _ln$builders2.indent,
      Js = _ln$builders2.join,
      Gs = _ln$builders2.line,
      Hs = _ln$builders2.hardline,
      Xs = _ln$builders2.softline,
      Ys = _ln$builders2.literalline,
      Ks = _ln$builders2.concat,
      Qs = _ln$builders2.group,
      Zs = _ln$builders2.dedentToRoot,
      el = ln.utils.mapDoc,
      tl = Us.isBlockComment,
      nl = Us.hasLeadingComment;

  function rl(e) {
    return e.replace(/([\\`]|\${)/g, "\\$1");
  }

  function ul(e, t) {
    return el(e, function (e) {
      if (!e.parts) return e;
      var n = e.parts.map(function (e) {
        return "string" == typeof e ? t ? e.replace(/(\\*)`/g, "$1$1\\`") : rl(e) : e;
      });
      return Object.assign({}, e, {
        parts: n
      });
    });
  }

  function ol(e) {
    var t = [];
    var n = !1;
    return e.map(function (e) {
      return e.trim();
    }).forEach(function (e, r, u) {
      "" !== e && ("" === u[r - 1] && n ? t.push(Ks([Hs, e])) : t.push(e), n = !0);
    }), 0 === t.length ? null : Js(Hs, t);
  }

  function al(e) {
    var t = e.getValue(),
        n = e.getParentNode(),
        r = e.getParentNode(1);
    return r && t.quasis && "JSXExpressionContainer" === n.type && "JSXElement" === r.type && "style" === r.openingElement.name.name && r.openingElement.attributes.some(function (e) {
      return "jsx" === e.name.name;
    }) || n && "TaggedTemplateExpression" === n.type && "Identifier" === n.tag.type && "css" === n.tag.name || n && "TaggedTemplateExpression" === n.type && "MemberExpression" === n.tag.type && "css" === n.tag.object.name && ("global" === n.tag.property.name || "resolve" === n.tag.property.name);
  }

  function il(e) {
    return e.match.apply(e, [function (e) {
      return "TemplateLiteral" === e.type;
    }, function (e, t) {
      return "ArrayExpression" === e.type && "elements" === t;
    }, function (e, t) {
      return ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t;
    }].concat(sl));
  }

  var sl = [function (e, t) {
    return "ObjectExpression" === e.type && "properties" === t;
  }, function (e, t) {
    return "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t;
  }, function (e, t) {
    return "Decorator" === e.type && "expression" === t;
  }];

  function ll(e) {
    var t = e.getParentNode();
    if (!t || "TaggedTemplateExpression" !== t.type) return !1;
    var n = t.tag;

    switch (n.type) {
      case "MemberExpression":
        return pl(n.object) || dl(n);

      case "CallExpression":
        return pl(n.callee) || "MemberExpression" === n.callee.type && ("MemberExpression" === n.callee.object.type && (pl(n.callee.object.object) || dl(n.callee.object)) || "CallExpression" === n.callee.object.type && pl(n.callee.object.callee));

      case "Identifier":
        return "css" === n.name;

      default:
        return !1;
    }
  }

  function cl(e) {
    var t = e.getParentNode(),
        n = e.getParentNode(1);
    return n && "JSXExpressionContainer" === t.type && "JSXAttribute" === n.type && "JSXIdentifier" === n.name.type && "css" === n.name.name;
  }

  function pl(e) {
    return "Identifier" === e.type && "styled" === e.name;
  }

  function dl(e) {
    return /^[A-Z]/.test(e.object.name) && "extend" === e.property.name;
  }

  function fl(e, t) {
    return nl(e, function (e) {
      return tl(e) && e.value === " ".concat(t, " ");
    });
  }

  var hl = 0;

  var ml = function ml(e, t, n, r) {
    var u = e.getValue(),
        o = e.getParentNode(),
        a = e.getParentNode(1);

    switch (u.type) {
      case "TemplateLiteral":
        {
          if ([al, ll, cl, il].some(function (t) {
            return t(e);
          })) {
            var _r50 = u.quasis.map(function (e) {
              return e.value.raw;
            });

            var _o13 = 0;

            var _a13 = _r50.reduce(function (e, t, n) {
              return 0 === n ? t : e + "@prettier-placeholder-" + _o13++ + "-id" + t;
            }, "");

            return function (e, t, n) {
              var r = t.getValue();
              if (1 === r.quasis.length && !r.quasis[0].value.raw.trim()) return "``";

              var u = r.expressions ? t.map(n, "expressions") : [],
                  o = function (e, t) {
                if (!t || !t.length) return e;
                var n = 0;
                var r = el(e, function (e) {
                  if (!e || !e.parts || !e.parts.length) return e;
                  var r = e.parts;
                  var u = r.indexOf("@"),
                      o = u + 1;

                  if (u > -1 && "string" == typeof r[o] && r[o].startsWith("prettier-placeholder")) {
                    var _e87 = r[u],
                        _t58 = r[o],
                        _n38 = r.slice(o + 1);

                    r = r.slice(0, u).concat([_e87 + _t58]).concat(_n38);
                  }

                  var a = [];
                  return r.forEach(function (e) {
                    "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).forEach(function (e, r) {
                      r % 2 != 0 ? (a.push("${", t[e], "}"), n++) : a.push(e);
                    }) : a.push(e);
                  }), Object.assign({}, e, {
                    parts: a
                  });
                });
                return t.length === n ? r : null;
              }(e, u);

              if (!o) throw new Error("Couldn't insert all the expressions");
              return Ks(["`", zs(Ks([Hs, o])), Xs, "`"]);
            }(n(_a13, {
              parser: "scss"
            }, {
              stripTrailingHardline: !0
            }), e, t);
          }

          if (function (e) {
            var t = e.getValue(),
                n = e.getParentNode();
            return fl(t, "GraphQL") || n && ("TaggedTemplateExpression" === n.type && ("MemberExpression" === n.tag.type && "graphql" === n.tag.object.name && "experimental" === n.tag.property.name || "Identifier" === n.tag.type && ("gql" === n.tag.name || "graphql" === n.tag.name)) || "CallExpression" === n.type && "Identifier" === n.callee.type && "graphql" === n.callee.name);
          }(e)) {
            var _r51 = u.expressions ? e.map(t, "expressions") : [],
                _o14 = u.quasis.length;

            if (1 === _o14 && "" === u.quasis[0].value.raw.trim()) return "``";
            var _a14 = [];

            for (var _e88 = 0; _e88 < _o14; _e88++) {
              var _t59 = 0 === _e88,
                  _i38 = _e88 === _o14 - 1,
                  _s5 = u.quasis[_e88].value.cooked;

              if ("string" != typeof _s5) return null;

              var _l5 = _s5.split("\n"),
                  _c4 = _l5.length,
                  _p5 = _r51[_e88],
                  _d3 = _c4 > 2 && "" === _l5[0].trim() && "" === _l5[1].trim(),
                  _f3 = _c4 > 2 && "" === _l5[_c4 - 1].trim() && "" === _l5[_c4 - 2].trim(),
                  _h3 = _l5.every(function (e) {
                return /^\s*(?:#[^\n\r]*)?$/.test(e);
              });

              if (!_i38 && /#[^\n\r]*$/.test(_l5[_c4 - 1])) return null;
              var _m3 = null;
              _m3 = _h3 ? ol(_l5) : n(_s5, {
                parser: "graphql"
              }, {
                stripTrailingHardline: !0
              }), _m3 ? (_m3 = ul(_m3, !1), !_t59 && _d3 && _a14.push(""), _a14.push(_m3), !_i38 && _f3 && _a14.push("")) : _t59 || _i38 || !_d3 || _a14.push(""), _p5 && _a14.push(Ks(["${", _p5, "}"]));
            }

            return Ks(["`", zs(Ks([Hs, Js(Hs, _a14)])), Hs, "`"]);
          }

          var _o12 = function (e) {
            return fl(e.getValue(), "HTML") || e.match(function (e) {
              return "TemplateLiteral" === e.type;
            }, function (e, t) {
              return "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t;
            });
          }(e) ? "html" : function (e) {
            return e.match.apply(e, [function (e) {
              return "TemplateLiteral" === e.type;
            }, function (e, t) {
              return ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "template" === e.key.name && "value" === t;
            }].concat(sl));
          }(e) ? "angular" : void 0;

          if (_o12) return function (e, t, n, r, u) {
            var o = e.getValue(),
                a = hl;
            hl = hl + 1 >>> 0;

            var i = function i(e) {
              return "PRETTIER_HTML_PLACEHOLDER_".concat(e, "_").concat(a, "_IN_JS");
            },
                s = o.quasis.map(function (e, t, n) {
              return t === n.length - 1 ? e.value.cooked : e.value.cooked + i(t);
            }).join(""),
                l = e.map(t, "expressions");

            if (0 === l.length && 0 === s.trim().length) return "``";
            var c = new RegExp(i("(\\d+)"), "g");
            var p = 0;
            var d = el(n(s, {
              parser: r,
              __onHtmlRoot: function __onHtmlRoot(e) {
                p = e.children.length;
              }
            }, {
              stripTrailingHardline: !0
            }), function (e) {
              if ("string" != typeof e) return e;
              var t = [],
                  n = e.split(c);

              for (var _e89 = 0; _e89 < n.length; _e89++) {
                var _r52 = n[_e89];

                if (_e89 % 2 == 0) {
                  _r52 && (_r52 = rl(_r52), u.embeddedInHtml && (_r52 = _r52.replace(/<\/(script)\b/gi, "<\\/$1")), t.push(_r52));
                  continue;
                }

                var _o15 = +_r52;

                t.push(Ks(["${", Qs(l[_o15]), "}"]));
              }

              return Ks(t);
            }),
                f = /^\s/.test(s) ? " " : "",
                h = /\s$/.test(s) ? " " : "",
                m = "ignore" === u.htmlWhitespaceSensitivity ? Hs : f && h ? Gs : null;
            if (m) return Qs(Ks(["`", zs(Ks([m, Qs(d)])), m, "`"]));
            return Qs(Ks(["`", f, p > 1 ? zs(Qs(d)) : Qs(d), h, "`"]));
          }(e, t, n, _o12, r);
          break;
        }

      case "TemplateElement":
        if (a && "TaggedTemplateExpression" === a.type && 1 === o.quasis.length && "Identifier" === a.tag.type && ("md" === a.tag.name || "markdown" === a.tag.name)) {
          var _e90 = o.quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, function (e, t) {
            return "\\".repeat(t.length / 2) + "`";
          }),
              _t60 = function (e) {
            var t = e.match(/^([^\S\n]*)\S/m);
            return null === t ? "" : t[1];
          }(_e90);

          return Ks(["" !== _t60 ? zs(Ks([Xs, i(_e90.replace(new RegExp("^".concat(_t60), "gm"), ""))])) : Ks([Ys, Zs(i(_e90))]), Xs]);
        }

    }

    function i(e) {
      return ul(n(e, {
        parser: "markdown",
        __inJsTemplate: !0
      }, {
        stripTrailingHardline: !0
      }), !0);
    }
  };

  var gl = function gl(e, t, n) {
    if (["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"].forEach(function (e) {
      delete t[e];
    }), "Program" === e.type && delete t.sourceType, "BigIntLiteral" === e.type && (t.value && (t.value = t.value.toLowerCase()), t.bigint && (t.bigint = t.bigint.toLowerCase())), "DecimalLiteral" === e.type && (t.value = Number(t.value)), "EmptyStatement" === e.type) return null;
    if ("JSXText" === e.type) return null;
    if ("JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;

    if ("Property" !== e.type && "ObjectProperty" !== e.type && "MethodDefinition" !== e.type && "ClassProperty" !== e.type && "ClassMethod" !== e.type && "TSDeclareMethod" !== e.type && "TSPropertySignature" !== e.type && "ObjectTypeProperty" !== e.type || "object" != _typeof(e.key) || !e.key || "Literal" !== e.key.type && "NumericLiteral" !== e.key.type && "StringLiteral" !== e.key.type && "Identifier" !== e.key.type || delete t.key, "OptionalMemberExpression" === e.type && !1 === e.optional && (t.type = "MemberExpression", delete t.optional), "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some(function (e) {
      return "jsx" === e.name.name;
    })) {
      t.children.filter(function (e) {
        return "JSXExpressionContainer" === e.type && "TemplateLiteral" === e.expression.type;
      }).map(function (e) {
        return e.expression;
      }).reduce(function (e, t) {
        return e.concat(t.quasis);
      }, []).forEach(function (e) {
        return delete e.value;
      });
    }

    "JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && t.value.expression.quasis.forEach(function (e) {
      return delete e.value;
    }), "JSXAttribute" === e.type && e.value && "Literal" === e.value.type && /["']|&quot;|&apos;/.test(e.value.value) && (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"'));
    var r = e.expression || e.callee;

    if ("Decorator" === e.type && "CallExpression" === r.type && "Component" === r.callee.name && 1 === r.arguments.length) {
      var _n39 = e.expression.arguments[0].properties;
      t.expression.arguments[0].properties.forEach(function (e, t) {
        var r = null;

        switch (_n39[t].key.name) {
          case "styles":
            "ArrayExpression" === e.value.type && (r = e.value.elements[0]);
            break;

          case "template":
            "TemplateLiteral" === e.value.type && (r = e.value);
        }

        r && r.quasis.forEach(function (e) {
          return delete e.value;
        });
      });
    }

    if ("TaggedTemplateExpression" !== e.type || "MemberExpression" !== e.tag.type && ("Identifier" !== e.tag.type || "gql" !== e.tag.name && "graphql" !== e.tag.name && "css" !== e.tag.name && "md" !== e.tag.name && "markdown" !== e.tag.name && "html" !== e.tag.name) && "CallExpression" !== e.tag.type || t.quasi.quasis.forEach(function (e) {
      return delete e.value;
    }), "TemplateLiteral" === e.type) {
      (e.leadingComments && e.leadingComments.some(function (e) {
        return "CommentBlock" === e.type && ["GraphQL", "HTML"].some(function (t) {
          return e.value === " ".concat(t, " ");
        });
      }) || "CallExpression" === n.type && "graphql" === n.callee.name) && t.quasis.forEach(function (e) {
        return delete e.value;
      }), e.leadingComments || t.quasis.forEach(function (e) {
        e.value && delete e.value.cooked;
      });
    }

    "InterpreterDirective" === e.type && (t.value = t.value.trimEnd());
  };

  var Dl = function Dl(e) {
    if ("string" != typeof e) throw new TypeError("Expected a string");
    var t = e.match(/(?:\r?\n)/g) || [];
    if (0 === t.length) return;
    var n = t.filter(function (e) {
      return "\r\n" === e;
    }).length;
    return n > t.length - n ? "\r\n" : "\n";
  };

  var yl = Dl;

  yl.graceful = function (e) {
    return "string" == typeof e && Dl(e) || "\n";
  };

  var El = $e(function (e, t) {
    function n() {
      var e = jr;
      return n = function n() {
        return e;
      }, e;
    }

    function r() {
      var e = (t = yl) && t.__esModule ? t : {
        default: t
      };
      var t;
      return r = function r() {
        return e;
      }, e;
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.extract = function (e) {
      var t = e.match(a);
      return t ? t[0].trimLeft() : "";
    }, t.strip = function (e) {
      var t = e.match(a);
      return t && t[0] ? e.substring(t[0].length) : e;
    }, t.parse = function (e) {
      return f(e).pragmas;
    }, t.parseWithComments = f, t.print = function (_ref29) {
      var _ref29$comments = _ref29.comments,
          e = _ref29$comments === void 0 ? "" : _ref29$comments,
          _ref29$pragmas = _ref29.pragmas,
          t = _ref29$pragmas === void 0 ? {} : _ref29$pragmas;
      var u = (0, r().default)(e) || n().EOL,
          o = Object.keys(t),
          a = o.map(function (e) {
        return h(e, t[e]);
      }).reduce(function (e, t) {
        return e.concat(t);
      }, []).map(function (e) {
        return " * " + e + u;
      }).join("");

      if (!e) {
        if (0 === o.length) return "";

        if (1 === o.length && !Array.isArray(t[o[0]])) {
          var _e91 = t[o[0]];
          return "".concat("/**", " ").concat(h(o[0], _e91)[0]).concat(" */");
        }
      }

      var i = e.split(u).map(function (e) {
        return "".concat(" *", " ").concat(e);
      }).join(u) + u;
      return "/**" + u + (e ? i : "") + (e && o.length ? " *" + u : "") + a + " */";
    };
    var u = /\*\/$/,
        o = /^\/\*\*/,
        a = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
        i = /(^|\s+)\/\/([^\r\n]*)/g,
        s = /^(\r?\n)+/,
        l = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
        c = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
        p = /(\r?\n|^) *\* ?/g,
        d = [];

    function f(e) {
      var t = (0, r().default)(e) || n().EOL;
      e = e.replace(o, "").replace(u, "").replace(p, "$1");
      var a = "";

      for (; a !== e;) {
        a = e, e = e.replace(l, "".concat(t, "$1 $2").concat(t));
      }

      e = e.replace(s, "").trimRight();
      var f = Object.create(null),
          h = e.replace(c, "").replace(s, "").trimRight();
      var m;

      for (; m = c.exec(e);) {
        var _e92 = m[2].replace(i, "");

        "string" == typeof f[m[1]] || Array.isArray(f[m[1]]) ? f[m[1]] = d.concat(f[m[1]], _e92) : f[m[1]] = _e92;
      }

      return {
        comments: h,
        pragmas: f
      };
    }

    function h(e, t) {
      return d.concat(t).map(function (t) {
        return "@".concat(e, " ").concat(t).trim();
      });
    }
  });
  var Cl = El.parseWithComments,
      bl = El.strip,
      Al = El.extract,
      vl = El.print,
      Fl = Lt.getShebang,
      xl = Rt.normalizeEndOfLine;

  function Sl(e) {
    var t = Fl(e);
    t && (e = e.slice(t.length + 1));

    var n = Al(e),
        _Cl = Cl(n),
        r = _Cl.pragmas,
        u = _Cl.comments;

    return {
      shebang: t,
      text: e,
      pragmas: r,
      comments: u
    };
  }

  var wl = {
    hasPragma: function hasPragma(e) {
      var t = Object.keys(Sl(e).pragmas);
      return t.includes("prettier") || t.includes("format");
    },
    insertPragma: function insertPragma(e) {
      var _Sl = Sl(e),
          t = _Sl.shebang,
          n = _Sl.text,
          r = _Sl.pragmas,
          u = _Sl.comments,
          o = bl(n),
          a = vl({
        pragmas: Object.assign({
          format: ""
        }, r),
        comments: u.trimStart()
      });

      return (t ? "".concat(t, "\n") : "") + xl(a) + (o.startsWith("\n") ? "\n" : "\n\n") + o;
    }
  },
      Bl = $e(function (e) {
    !function () {
      function t(e) {
        if (null == e) return !1;

        switch (e.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return !0;
        }

        return !1;
      }

      function n(e) {
        switch (e.type) {
          case "IfStatement":
            return null != e.alternate ? e.alternate : e.consequent;

          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return e.body;
        }

        return null;
      }

      e.exports = {
        isExpression: function isExpression(e) {
          if (null == e) return !1;

          switch (e.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return !0;
          }

          return !1;
        },
        isStatement: t,
        isIterationStatement: function isIterationStatement(e) {
          if (null == e) return !1;

          switch (e.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return !0;
          }

          return !1;
        },
        isSourceElement: function isSourceElement(e) {
          return t(e) || null != e && "FunctionDeclaration" === e.type;
        },
        isProblematicIfStatement: function isProblematicIfStatement(e) {
          var t;
          if ("IfStatement" !== e.type) return !1;
          if (null == e.alternate) return !1;
          t = e.consequent;

          do {
            if ("IfStatement" === t.type && null == t.alternate) return !0;
            t = n(t);
          } while (t);

          return !1;
        },
        trailingStatement: n
      };
    }();
  }),
      Tl = $e(function (e) {
    !function () {
      var t, n, r, u, o, a;

      function i(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320);
      }

      for (n = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
      }, t = {
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      }, r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], u = new Array(128), a = 0; a < 128; ++a) {
        u[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || 36 === a || 95 === a;
      }

      for (o = new Array(128), a = 0; a < 128; ++a) {
        o[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || 36 === a || 95 === a;
      }

      e.exports = {
        isDecimalDigit: function isDecimalDigit(e) {
          return 48 <= e && e <= 57;
        },
        isHexDigit: function isHexDigit(e) {
          return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70;
        },
        isOctalDigit: function isOctalDigit(e) {
          return e >= 48 && e <= 55;
        },
        isWhiteSpace: function isWhiteSpace(e) {
          return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && r.indexOf(e) >= 0;
        },
        isLineTerminator: function isLineTerminator(e) {
          return 10 === e || 13 === e || 8232 === e || 8233 === e;
        },
        isIdentifierStartES5: function isIdentifierStartES5(e) {
          return e < 128 ? u[e] : n.NonAsciiIdentifierStart.test(i(e));
        },
        isIdentifierPartES5: function isIdentifierPartES5(e) {
          return e < 128 ? o[e] : n.NonAsciiIdentifierPart.test(i(e));
        },
        isIdentifierStartES6: function isIdentifierStartES6(e) {
          return e < 128 ? u[e] : t.NonAsciiIdentifierStart.test(i(e));
        },
        isIdentifierPartES6: function isIdentifierPartES6(e) {
          return e < 128 ? o[e] : t.NonAsciiIdentifierPart.test(i(e));
        }
      };
    }();
  }),
      kl = $e(function (e) {
    !function () {
      var t = Tl;

      function n(e, t) {
        return !(!t && "yield" === e) && r(e, t);
      }

      function r(e, t) {
        if (t && function (e) {
          switch (e) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return !0;

            default:
              return !1;
          }
        }(e)) return !0;

        switch (e.length) {
          case 2:
            return "if" === e || "in" === e || "do" === e;

          case 3:
            return "var" === e || "for" === e || "new" === e || "try" === e;

          case 4:
            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;

          case 5:
            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;

          case 6:
            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;

          case 7:
            return "default" === e || "finally" === e || "extends" === e;

          case 8:
            return "function" === e || "continue" === e || "debugger" === e;

          case 10:
            return "instanceof" === e;

          default:
            return !1;
        }
      }

      function u(e, t) {
        return "null" === e || "true" === e || "false" === e || n(e, t);
      }

      function o(e, t) {
        return "null" === e || "true" === e || "false" === e || r(e, t);
      }

      function a(e) {
        var n, r, u;
        if (0 === e.length) return !1;
        if (u = e.charCodeAt(0), !t.isIdentifierStartES5(u)) return !1;

        for (n = 1, r = e.length; n < r; ++n) {
          if (u = e.charCodeAt(n), !t.isIdentifierPartES5(u)) return !1;
        }

        return !0;
      }

      function i(e) {
        var n, r, u, o, a;
        if (0 === e.length) return !1;

        for (a = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
          if (55296 <= (u = e.charCodeAt(n)) && u <= 56319) {
            if (++n >= r) return !1;
            if (!(56320 <= (o = e.charCodeAt(n)) && o <= 57343)) return !1;
            u = 1024 * (u - 55296) + (o - 56320) + 65536;
          }

          if (!a(u)) return !1;
          a = t.isIdentifierPartES6;
        }

        return !0;
      }

      e.exports = {
        isKeywordES5: n,
        isKeywordES6: r,
        isReservedWordES5: u,
        isReservedWordES6: o,
        isRestrictedWord: function isRestrictedWord(e) {
          return "eval" === e || "arguments" === e;
        },
        isIdentifierNameES5: a,
        isIdentifierNameES6: i,
        isIdentifierES5: function isIdentifierES5(e, t) {
          return a(e) && !u(e, t);
        },
        isIdentifierES6: function isIdentifierES6(e, t) {
          return i(e) && !o(e, t);
        }
      };
    }();
  });
  var Nl = $e(function (e, t) {
    t.ast = Bl, t.code = Tl, t.keyword = kl;
  }).keyword.isIdentifierNameES5,
      Ol = Lt.getLast,
      Pl = Lt.hasNewline,
      _l = Lt.hasNewlineInRange,
      Il = Lt.hasIgnoreComment,
      jl = Lt.hasNodeIgnoreComment,
      Ml = Lt.skipWhitespace,
      Ll = new RegExp("^".concat("(?:(?=.)\\s)", "*:")),
      Rl = new RegExp("^".concat("(?:(?=.)\\s)", "*::"));

  function ql(e, t) {
    if (!e || "object" != _typeof(e)) return !1;
    if (Array.isArray(e)) return e.some(function (e) {
      return ql(e, t);
    });
    var n = t(e);
    return "boolean" == typeof n ? n : Object.keys(e).some(function (n) {
      return ql(e[n], t);
    });
  }

  function Vl(e) {
    return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || "CallExpression" === e.type || "OptionalCallExpression" === e.type || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || "TSAsExpression" === e.type || "TSNonNullExpression" === e.type;
  }

  var Wl = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);

  function $l(e) {
    return e && Wl.has(e.type);
  }

  function Ul(e) {
    return "BooleanLiteral" === e.type || "DirectiveLiteral" === e.type || "Literal" === e.type || "NullLiteral" === e.type || "NumericLiteral" === e.type || "BigIntLiteral" === e.type || "DecimalLiteral" === e.type || "RegExpLiteral" === e.type || "StringLiteral" === e.type || "TemplateLiteral" === e.type || "TSTypeLiteral" === e.type || "JSXText" === e.type;
  }

  function zl(e) {
    return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value;
  }

  function Jl(e) {
    return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value;
  }

  function Gl(e) {
    return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type;
  }

  function Hl(e) {
    return !("CallExpression" !== e.type && "OptionalCallExpression" !== e.type || "Identifier" !== e.callee.type || "async" !== e.callee.name && "inject" !== e.callee.name && "fakeAsync" !== e.callee.name);
  }

  function Xl(e) {
    return "JSXElement" === e.type || "JSXFragment" === e.type;
  }

  function Yl(e) {
    return "get" === e.kind || "set" === e.kind;
  }

  function Kl(e, t, n) {
    return n.locStart(e) === n.locStart(t);
  }

  function Ql(e, t) {
    return Yl(e) || Kl(e, e.value, t);
  }

  var Zl = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
  var ec = new Set(["AnyTypeAnnotation", "NullLiteralTypeAnnotation", "GenericTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation", "BooleanTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringTypeAnnotation"]);
  var tc = /^(skip|[fx]?(it|describe|test))$/;

  function nc(e) {
    return "CallExpression" === e.type || "OptionalCallExpression" === e.type;
  }

  var rc = new RegExp("([ \n\r\t]+)"),
      uc = new RegExp("[^ \n\r\t]");

  function oc(e) {
    return Ul(e) && (uc.test(lc(e)) || !/\n/.test(lc(e)));
  }

  function ac(e, t, n) {
    if (Xl(t)) return jl(t);
    return t.comments && t.comments.some(function (t) {
      return t.leading && Pl(e, n.locEnd(t));
    });
  }

  function ic(e) {
    return /^(\d+|\d+\.\d+)$/.test(e);
  }

  function sc(e) {
    return e.quasis.some(function (e) {
      return e.value.raw.includes("\n");
    });
  }

  function lc(e) {
    return e.extra ? e.extra.raw : e.raw;
  }

  var cc = {
    "==": !0,
    "!=": !0,
    "===": !0,
    "!==": !0
  },
      pc = {
    "*": !0,
    "/": !0,
    "%": !0
  },
      dc = {
    ">>": !0,
    ">>>": !0,
    "<<": !0
  };
  var fc = {};

  function hc(e) {
    return fc[e];
  }

  [["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].forEach(function (e, t) {
    e.forEach(function (e) {
      fc[e] = t;
    });
  });
  var mc = {
    classChildNeedsASIProtection: function classChildNeedsASIProtection(e) {
      if (e) {
        if (e.static || e.accessibility) return !1;

        if (!e.computed) {
          var _t61 = e.key && e.key.name;

          if ("in" === _t61 || "instanceof" === _t61) return !0;
        }

        switch (e.type) {
          case "ClassProperty":
          case "TSAbstractClassProperty":
            return e.computed;

          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "ClassMethod":
          case "ClassPrivateMethod":
            {
              var _t62 = e.value ? e.value.async : e.async,
                  _n40 = e.value ? e.value.generator : e.generator;

              return !_t62 && "get" !== e.kind && "set" !== e.kind && !(!e.computed && !_n40);
            }

          case "TSIndexSignature":
            return !0;

          default:
            return !1;
        }
      }
    },
    classPropMayCauseASIProblems: function classPropMayCauseASIProblems(e) {
      var t = e.getNode();
      if ("ClassProperty" !== t.type) return !1;
      var n = t.key && t.key.name;
      return !("static" !== n && "get" !== n && "set" !== n || t.value || t.typeAnnotation) || void 0;
    },
    getFlowVariance: function getFlowVariance(e) {
      if (!e.variance) return null;
      var t = e.variance.kind || e.variance;

      switch (t) {
        case "plus":
          return "+";

        case "minus":
          return "-";

        default:
          return t;
      }
    },
    getLeftSidePathName: function getLeftSidePathName(e, t) {
      if (t.expressions) return ["expressions", 0];
      if (t.left) return ["left"];
      if (t.test) return ["test"];
      if (t.object) return ["object"];
      if (t.callee) return ["callee"];
      if (t.tag) return ["tag"];
      if (t.argument) return ["argument"];
      if (t.expression) return ["expression"];
      throw new Error("Unexpected node has no left side.");
    },
    getParentExportDeclaration: function getParentExportDeclaration(e) {
      var t = e.getParentNode();
      return "declaration" === e.getName() && $l(t) ? t : null;
    },
    getTypeScriptMappedTypeModifier: function getTypeScriptMappedTypeModifier(e, t) {
      return "+" === e ? "+" + t : "-" === e ? "-" + t : t;
    },
    hasDanglingComments: function hasDanglingComments(e) {
      return e.comments && e.comments.some(function (e) {
        return !e.leading && !e.trailing;
      });
    },
    hasFlowAnnotationComment: function hasFlowAnnotationComment(e) {
      return e && Rl.test(e[0].value);
    },
    hasFlowShorthandAnnotationComment: function hasFlowShorthandAnnotationComment(e) {
      return e.extra && e.extra.parenthesized && e.trailingComments && Ll.test(e.trailingComments[0].value);
    },
    hasLeadingComment: function hasLeadingComment(e) {
      return e.comments && e.comments.some(function (e) {
        return e.leading;
      });
    },
    hasLeadingOwnLineComment: ac,
    hasNakedLeftSide: Vl,
    hasNewlineBetweenOrAfterDecorators: function hasNewlineBetweenOrAfterDecorators(e, t) {
      return _l(t.originalText, t.locStart(e.decorators[0]), t.locEnd(Ol(e.decorators))) || Pl(t.originalText, t.locEnd(Ol(e.decorators)));
    },
    hasNgSideEffect: function hasNgSideEffect(e) {
      return ql(e.getValue(), function (e) {
        switch (e.type) {
          case void 0:
            return !1;

          case "CallExpression":
          case "OptionalCallExpression":
          case "AssignmentExpression":
            return !0;
        }
      });
    },
    hasNode: ql,
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      return Il(e) || function (e) {
        var t = e.getValue(),
            n = e.getParentNode();
        if (!(n && t && Xl(t) && Xl(n))) return !1;
        var r = null;

        for (var _e93 = n.children.indexOf(t); _e93 > 0; _e93--) {
          var _t63 = n.children[_e93 - 1];

          if ("JSXText" !== _t63.type || oc(_t63)) {
            r = _t63;
            break;
          }
        }

        return r && "JSXExpressionContainer" === r.type && "JSXEmptyExpression" === r.expression.type && r.expression.comments && r.expression.comments.some(function (e) {
          return "prettier-ignore" === e.value.trim();
        });
      }(e);
    },
    hasTrailingComment: function hasTrailingComment(e) {
      return e.comments && e.comments.some(function (e) {
        return e.trailing;
      });
    },
    hasTrailingLineComment: function hasTrailingLineComment(e) {
      return e.comments && e.comments.some(function (e) {
        return e.trailing && !Us.isBlockComment(e);
      });
    },
    identity: function identity(e) {
      return e;
    },
    isBinaryish: function isBinaryish(e) {
      return Zl.has(e.type);
    },
    isCallOrOptionalCallExpression: nc,
    isEmptyJSXElement: function isEmptyJSXElement(e) {
      if (0 === e.children.length) return !0;
      if (e.children.length > 1) return !1;
      var t = e.children[0];
      return Ul(t) && !oc(t);
    },
    isExportDeclaration: $l,
    isFlowAnnotationComment: function isFlowAnnotationComment(e, t, n) {
      var r = n.locStart(t),
          u = Ml(e, n.locEnd(t));
      return !1 !== u && "/*" === e.slice(r, r + 2) && "*/" === e.slice(u, u + 2);
    },
    isFunctionCompositionArgs: function isFunctionCompositionArgs(e) {
      if (e.length <= 1) return !1;
      var t = 0;

      var _iterator37 = _createForOfIteratorHelper(e),
          _step37;

      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var _n41 = _step37.value;

          if (Gl(_n41)) {
            if (t += 1, t > 1) return !0;
          } else if (nc(_n41)) {
            var _iterator38 = _createForOfIteratorHelper(_n41.arguments),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _e94 = _step38.value;
                if (Gl(_e94)) return !0;
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }

      return !1;
    },
    isFunctionNotation: Ql,
    isFunctionOrArrowExpression: Gl,
    isGetterOrSetter: Yl,
    isJestEachTemplateLiteral: function isJestEachTemplateLiteral(e, t) {
      var n = /^[fx]?(describe|it|test)$/;
      return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name));
    },
    isJSXNode: Xl,
    isJSXWhitespaceExpression: function isJSXWhitespaceExpression(e) {
      return "JSXExpressionContainer" === e.type && Ul(e.expression) && " " === e.expression.value && !e.expression.comments;
    },
    isLastStatement: function isLastStatement(e) {
      var t = e.getParentNode();
      if (!t) return !0;
      var n = e.getValue(),
          r = (t.body || t.consequent).filter(function (e) {
        return "EmptyStatement" !== e.type;
      });
      return r[r.length - 1] === n;
    },
    isLiteral: Ul,
    isLongCurriedCallExpression: function isLongCurriedCallExpression(e) {
      var t = e.getValue(),
          n = e.getParentNode();
      return nc(t) && nc(n) && n.callee === t && t.arguments.length > n.arguments.length && n.arguments.length > 0;
    },
    isSimpleCallArgument: function e(t, n) {
      if (n >= 2) return !1;

      var r = function r(t) {
        return e(t, n + 1);
      },
          u = "Literal" === t.type && "regex" in t && t.regex.pattern || "RegExpLiteral" === t.type && t.pattern;

      return !(u && u.length > 5) && ("Literal" === t.type || "BigIntLiteral" === t.type || "DecimalLiteral" === t.type || "BooleanLiteral" === t.type || "NullLiteral" === t.type || "NumericLiteral" === t.type || "RegExpLiteral" === t.type || "StringLiteral" === t.type || "Identifier" === t.type || "ThisExpression" === t.type || "Super" === t.type || "PrivateName" === t.type || "ArgumentPlaceholder" === t.type || "Import" === t.type || ("TemplateLiteral" === t.type ? t.expressions.every(r) : "ObjectExpression" === t.type ? t.properties.every(function (e) {
        return !e.computed && (e.shorthand || e.value && r(e.value));
      }) : "ArrayExpression" === t.type ? t.elements.every(function (e) {
        return null === e || r(e);
      }) : "ImportExpression" === t.type ? r(t.source) : "CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type ? e(t.callee, n) && t.arguments.every(r) : "MemberExpression" === t.type || "OptionalMemberExpression" === t.type ? e(t.object, n) && e(t.property, n) : "UnaryExpression" !== t.type || "!" !== t.operator && "-" !== t.operator ? "TSNonNullExpression" === t.type && e(t.expression, n) : e(t.argument, n)));
    },
    isMeaningfulJSXText: oc,
    isMemberExpressionChain: function e(t) {
      return ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && ("Identifier" === t.object.type || e(t.object));
    },
    isMemberish: function isMemberish(e) {
      return "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "BindExpression" === e.type && Boolean(e.object);
    },
    isNgForOf: function isNgForOf(e, t, n) {
      return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t && "NGMicrosyntaxLet" === n.body[0].type && null === n.body[0].value;
    },
    isNumericLiteral: zl,
    isObjectType: function isObjectType(e) {
      return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type;
    },
    isObjectTypePropertyAFunction: function isObjectTypePropertyAFunction(e, t) {
      return !("ObjectTypeProperty" !== e.type && "ObjectTypeInternalSlot" !== e.type || "FunctionTypeAnnotation" !== e.value.type || e.static || Ql(e, t));
    },
    isSimpleFlowType: function isSimpleFlowType(e) {
      return e && ec.has(e.type) && !("GenericTypeAnnotation" === e.type && e.typeParameters);
    },
    isSimpleNumber: ic,
    isSimpleTemplateLiteral: function isSimpleTemplateLiteral(e) {
      return 0 !== e.expressions.length && e.expressions.every(function (e) {
        if (e.comments) return !1;
        if ("Identifier" === e.type || "ThisExpression" === e.type) return !0;

        if ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) {
          var _t64 = e;

          for (; "MemberExpression" === _t64.type || "OptionalMemberExpression" === _t64.type;) {
            if ("Identifier" !== _t64.property.type && "Literal" !== _t64.property.type && "StringLiteral" !== _t64.property.type && "NumericLiteral" !== _t64.property.type) return !1;
            if (_t64 = _t64.object, _t64.comments) return !1;
          }

          return "Identifier" === _t64.type || "ThisExpression" === _t64.type;
        }

        return !1;
      });
    },
    isStringLiteral: Jl,
    isStringPropSafeToUnquote: function isStringPropSafeToUnquote(e, t) {
      return "json" !== t.parser && Jl(e.key) && lc(e.key).slice(1, -1) === e.key.value && (Nl(e.key.value) && !(("typescript" === t.parser || "babel-ts" === t.parser) && "ClassProperty" === e.type) || ic(e.key.value) && String(Number(e.key.value)) === e.key.value && "babel" === t.parser);
    },
    isTemplateOnItsOwnLine: function isTemplateOnItsOwnLine(e, t, n) {
      return ("TemplateLiteral" === e.type && sc(e) || "TaggedTemplateExpression" === e.type && sc(e.quasi)) && !Pl(t, n.locStart(e), {
        backwards: !0
      });
    },
    isTestCall: function e(t, n) {
      if ("CallExpression" !== t.type) return !1;

      if (1 === t.arguments.length) {
        if (Hl(t) && n && e(n)) return Gl(t.arguments[0]);
        if ("Identifier" === (r = t).callee.type && /^(before|after)(Each|All)$/.test(r.callee.name) && 1 === r.arguments.length) return Hl(t.arguments[0]);
      } else if ((2 === t.arguments.length || 3 === t.arguments.length) && ("Identifier" === t.callee.type && tc.test(t.callee.name) || function (e) {
        return ("MemberExpression" === e.callee.type || "OptionalMemberExpression" === e.callee.type) && "Identifier" === e.callee.object.type && "Identifier" === e.callee.property.type && tc.test(e.callee.object.name) && ("only" === e.callee.property.name || "skip" === e.callee.property.name);
      }(t)) && (function (e) {
        return "TemplateLiteral" === e.type;
      }(t.arguments[0]) || Jl(t.arguments[0]))) return !(t.arguments[2] && !zl(t.arguments[2])) && ((2 === t.arguments.length ? Gl(t.arguments[1]) : function (e) {
        return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type;
      }(t.arguments[1]) && t.arguments[1].params.length <= 1) || Hl(t.arguments[1]));

      var r;
      return !1;
    },
    isTheOnlyJSXElementInMarkdown: function isTheOnlyJSXElementInMarkdown(e, t) {
      if ("markdown" !== e.parentParser && "mdx" !== e.parentParser) return !1;
      var n = t.getNode();
      if (!n.expression || !Xl(n.expression)) return !1;
      var r = t.getParentNode();
      return "Program" === r.type && 1 === r.body.length;
    },
    isTSXFile: function isTSXFile(e) {
      return e.filepath && /\.tsx$/i.test(e.filepath);
    },
    isTypeAnnotationAFunction: function isTypeAnnotationAFunction(e, t) {
      return !("TypeAnnotation" !== e.type && "TSTypeAnnotation" !== e.type || "FunctionTypeAnnotation" !== e.typeAnnotation.type || e.static || Kl(e, e.typeAnnotation, t));
    },
    matchJsxWhitespaceRegex: rc,
    needsHardlineAfterDanglingComment: function needsHardlineAfterDanglingComment(e) {
      if (!e.comments) return !1;
      var t = Ol(e.comments.filter(function (e) {
        return !e.leading && !e.trailing;
      }));
      return t && !Us.isBlockComment(t);
    },
    rawText: lc,
    returnArgumentHasLeadingComment: function returnArgumentHasLeadingComment(e, t) {
      if (ac(e.originalText, t, e)) return !0;

      if (Vl(t)) {
        var _r53,
            _u18 = t;

        for (; _r53 = (n = _u18).expressions ? n.expressions[0] : n.left || n.test || n.callee || n.object || n.tag || n.argument || n.expression;) {
          if (_u18 = _r53, ac(e.originalText, _u18, e)) return !0;
        }
      }

      var n;
      return !1;
    },
    shouldPrintComma: function shouldPrintComma(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "es5";
      return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t);
    },
    isBitwiseOperator: function isBitwiseOperator(e) {
      return !!dc[e] || "|" === e || "^" === e || "&" === e;
    },
    shouldFlatten: function shouldFlatten(e, t) {
      return hc(t) === hc(e) && "**" !== e && (!cc[e] || !cc[t]) && !("%" === t && pc[e] || "%" === e && pc[t]) && (t === e || !pc[t] || !pc[e]) && (!dc[e] || !dc[t]);
    },
    startsWithNoLookaheadToken: function e(t, n) {
      switch ((t = function (e) {
        for (; e.left;) {
          e = e.left;
        }

        return e;
      }(t)).type) {
        case "FunctionExpression":
        case "ClassExpression":
        case "DoExpression":
          return n;

        case "ObjectExpression":
          return !0;

        case "MemberExpression":
        case "OptionalMemberExpression":
          return e(t.object, n);

        case "TaggedTemplateExpression":
          return "FunctionExpression" !== t.tag.type && e(t.tag, n);

        case "CallExpression":
        case "OptionalCallExpression":
          return "FunctionExpression" !== t.callee.type && e(t.callee, n);

        case "ConditionalExpression":
          return e(t.test, n);

        case "UpdateExpression":
          return !t.prefix && e(t.argument, n);

        case "BindExpression":
          return t.object && e(t.object, n);

        case "SequenceExpression":
          return e(t.expressions[0], n);

        case "TSAsExpression":
          return e(t.expression, n);

        default:
          return !1;
      }
    },
    getPrecedence: hc
  };
  var gc = mc.getLeftSidePathName,
      Dc = mc.hasFlowShorthandAnnotationComment,
      yc = mc.hasNakedLeftSide,
      Ec = mc.hasNode,
      Cc = mc.isBitwiseOperator,
      bc = mc.startsWithNoLookaheadToken,
      Ac = mc.shouldFlatten,
      vc = mc.getPrecedence;

  function Fc(e, t) {
    var n = e.getParentNode();
    if (!n) return !1;
    var r = e.getName(),
        u = e.getNode();
    if (e.getValue() !== u) return !1;
    if (t.__isInHtmlInterpolation && !t.bracketSpacing && function (e) {
      switch (e.type) {
        case "ObjectExpression":
          return !0;

        default:
          return !1;
      }
    }(u) && xc(e)) return !0;
    if (function (e) {
      return "BlockStatement" === e.type || "BreakStatement" === e.type || "ClassBody" === e.type || "ClassDeclaration" === e.type || "ClassMethod" === e.type || "ClassProperty" === e.type || "ClassPrivateProperty" === e.type || "ContinueStatement" === e.type || "DebuggerStatement" === e.type || "DeclareClass" === e.type || "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type || "DeclareFunction" === e.type || "DeclareInterface" === e.type || "DeclareModule" === e.type || "DeclareModuleExports" === e.type || "DeclareVariable" === e.type || "DoWhileStatement" === e.type || "EnumDeclaration" === e.type || "ExportAllDeclaration" === e.type || "ExportDefaultDeclaration" === e.type || "ExportNamedDeclaration" === e.type || "ExpressionStatement" === e.type || "ForInStatement" === e.type || "ForOfStatement" === e.type || "ForStatement" === e.type || "FunctionDeclaration" === e.type || "IfStatement" === e.type || "ImportDeclaration" === e.type || "InterfaceDeclaration" === e.type || "LabeledStatement" === e.type || "MethodDefinition" === e.type || "ReturnStatement" === e.type || "SwitchStatement" === e.type || "ThrowStatement" === e.type || "TryStatement" === e.type || "TSDeclareFunction" === e.type || "TSEnumDeclaration" === e.type || "TSImportEqualsDeclaration" === e.type || "TSInterfaceDeclaration" === e.type || "TSModuleDeclaration" === e.type || "TSNamespaceExportDeclaration" === e.type || "TypeAlias" === e.type || "VariableDeclaration" === e.type || "WhileStatement" === e.type || "WithStatement" === e.type;
    }(u)) return !1;
    if ("flow" !== t.parser && Dc(e.getValue())) return !0;
    if ("Identifier" === u.type) return !!(u.extra && u.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(u.name));
    if ("ParenthesizedExpression" === n.type) return !1;
    if (!("ClassDeclaration" !== n.type && "ClassExpression" !== n.type || n.superClass !== u || "ArrowFunctionExpression" !== u.type && "AssignmentExpression" !== u.type && "AwaitExpression" !== u.type && "BinaryExpression" !== u.type && "ConditionalExpression" !== u.type && "LogicalExpression" !== u.type && "NewExpression" !== u.type && "ObjectExpression" !== u.type && "ParenthesizedExpression" !== u.type && "SequenceExpression" !== u.type && "TaggedTemplateExpression" !== u.type && "UnaryExpression" !== u.type && "UpdateExpression" !== u.type && "YieldExpression" !== u.type)) return !0;
    if ("ExportDefaultDeclaration" === n.type) return function e(t, n) {
      var r = t.getValue(),
          u = t.getParentNode();
      if ("FunctionExpression" === r.type || "ClassExpression" === r.type) return "ExportDefaultDeclaration" === u.type || !Fc(t, n);
      if (!yc(r) || "ExportDefaultDeclaration" !== u.type && Fc(t, n)) return !1;
      return t.call.apply(t, [function (t) {
        return e(t, n);
      }].concat(_toConsumableArray(gc(t, r))));
    }(e, t) || "SequenceExpression" === u.type;

    if ("Decorator" === n.type && n.expression === u) {
      var _e95 = !1,
          _t65 = !1,
          _n42 = u;

      for (; _n42;) {
        switch (_n42.type) {
          case "MemberExpression":
            _t65 = !0, _n42 = _n42.object;
            break;

          case "CallExpression":
            if (_t65 || _e95) return !0;
            _e95 = !0, _n42 = _n42.callee;
            break;

          case "Identifier":
            return !1;

          default:
            return !0;
        }
      }

      return !0;
    }

    if ("ArrowFunctionExpression" === n.type && n.body === u && "SequenceExpression" !== u.type && bc(u, !1) || "ExpressionStatement" === n.type && bc(u, !0)) return !0;

    switch (u.type) {
      case "SpreadElement":
      case "SpreadProperty":
        return "MemberExpression" === n.type && "object" === r && n.object === u;

      case "UpdateExpression":
        if ("UnaryExpression" === n.type) return u.prefix && ("++" === u.operator && "+" === n.operator || "--" === u.operator && "-" === n.operator);

      case "UnaryExpression":
        switch (n.type) {
          case "UnaryExpression":
            return u.operator === n.operator && ("+" === u.operator || "-" === u.operator);

          case "BindExpression":
            return !0;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "TaggedTemplateExpression":
            return !0;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "BinaryExpression":
            return "**" === n.operator && "left" === r;

          case "TSNonNullExpression":
            return !0;

          default:
            return !1;
        }

      case "BinaryExpression":
        {
          if ("UpdateExpression" === n.type || "PipelineTopicExpression" === n.type && "|>" === u.operator) return !0;

          var _t66 = function _t66(t) {
            var n = 0;

            for (; t;) {
              var _r54 = e.getParentNode(n++);

              if (!_r54) return !1;
              if ("ForStatement" === _r54.type && _r54.init === t) return !0;
              t = _r54;
            }

            return !1;
          };

          if ("in" === u.operator && _t66(u)) return !0;

          if ("|>" === u.operator && u.extra && u.extra.parenthesized) {
            var _t67 = e.getParentNode(1);

            if ("BinaryExpression" === _t67.type && "|>" === _t67.operator) return !0;
          }
        }

      case "TSTypeAssertion":
      case "TSAsExpression":
      case "LogicalExpression":
        switch (n.type) {
          case "ConditionalExpression":
            return "TSAsExpression" === u.type;

          case "CallExpression":
          case "NewExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "ClassExpression":
          case "ClassDeclaration":
            return "superClass" === r && n.superClass === u;

          case "TSTypeAssertion":
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "JSXSpreadAttribute":
          case "SpreadElement":
          case "SpreadProperty":
          case "BindExpression":
          case "AwaitExpression":
          case "TSAsExpression":
          case "TSNonNullExpression":
          case "UpdateExpression":
            return !0;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "AssignmentExpression":
            return n.left === u && ("TSTypeAssertion" === u.type || "TSAsExpression" === u.type);

          case "LogicalExpression":
            if ("LogicalExpression" === u.type) return n.operator !== u.operator;

          case "BinaryExpression":
            {
              if (!u.operator && "TSTypeAssertion" !== u.type) return !0;

              var _e96 = n.operator,
                  _t68 = vc(_e96),
                  _o16 = u.operator,
                  _a15 = vc(_o16);

              return _t68 > _a15 || (_t68 === _a15 && "right" === r ? (Ja.strictEqual(n.right, u), !0) : _t68 === _a15 && !Ac(_e96, _o16) || (_t68 < _a15 && "%" === _o16 ? "+" === _e96 || "-" === _e96 : !!Cc(_e96)));
            }

          default:
            return !1;
        }

      case "SequenceExpression":
        switch (n.type) {
          case "ReturnStatement":
          case "ForStatement":
            return !1;

          case "ExpressionStatement":
            return "expression" !== r;

          case "ArrowFunctionExpression":
            return "body" !== r;

          default:
            return !0;
        }

      case "YieldExpression":
        if ("UnaryExpression" === n.type || "AwaitExpression" === n.type || "TSAsExpression" === n.type || "TSNonNullExpression" === n.type) return !0;

      case "AwaitExpression":
        switch (n.type) {
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "LogicalExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "TSAsExpression":
          case "TSNonNullExpression":
          case "BindExpression":
            return !0;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "ConditionalExpression":
            return n.test === u;

          case "BinaryExpression":
            return !(!u.argument && "|>" === n.operator);

          default:
            return !1;
        }

      case "TSJSDocFunctionType":
      case "TSConditionalType":
        if ("TSConditionalType" === n.type && u === n.extendsType) return !0;

      case "TSFunctionType":
      case "TSConstructorType":
        if ("TSConditionalType" === n.type && u === n.checkType) return !0;

      case "TSUnionType":
      case "TSIntersectionType":
        if ("TSUnionType" === n.type || "TSIntersectionType" === n.type) return !0;

      case "TSInferType":
        if ("TSInferType" === u.type && "TSRestType" === n.type) return !1;

      case "TSTypeOperator":
        return "TSArrayType" === n.type || "TSOptionalType" === n.type || "TSRestType" === n.type || "TSIndexedAccessType" === n.type && u === n.objectType || "TSTypeOperator" === n.type || "TSTypeAnnotation" === n.type && /^TSJSDoc/.test(e.getParentNode(1).type);

      case "ArrayTypeAnnotation":
        return "NullableTypeAnnotation" === n.type;

      case "IntersectionTypeAnnotation":
      case "UnionTypeAnnotation":
        return "ArrayTypeAnnotation" === n.type || "NullableTypeAnnotation" === n.type || "IntersectionTypeAnnotation" === n.type || "UnionTypeAnnotation" === n.type;

      case "NullableTypeAnnotation":
        return "ArrayTypeAnnotation" === n.type;

      case "FunctionTypeAnnotation":
        {
          var _t69 = "NullableTypeAnnotation" === n.type ? e.getParentNode(1) : n;

          return "UnionTypeAnnotation" === _t69.type || "IntersectionTypeAnnotation" === _t69.type || "ArrayTypeAnnotation" === _t69.type || "NullableTypeAnnotation" === _t69.type || "FunctionTypeParam" === n.type && null === n.name && u.params && u.params.some(function (e) {
            return e.typeAnnotation && "NullableTypeAnnotation" === e.typeAnnotation.type;
          });
        }

      case "StringLiteral":
      case "NumericLiteral":
      case "Literal":
        if ("string" == typeof u.value && "ExpressionStatement" === n.type && !n.directive) {
          var _t70 = e.getParentNode(1);

          return "Program" === _t70.type || "BlockStatement" === _t70.type;
        }

        return "MemberExpression" === n.type && "number" == typeof u.value && "object" === r && n.object === u;

      case "AssignmentExpression":
        {
          var _t71 = e.getParentNode(1);

          return "ArrowFunctionExpression" === n.type && n.body === u || ("ClassProperty" !== n.type || n.key !== u || !n.computed) && ("TSPropertySignature" !== n.type || n.name !== u) && ("ForStatement" !== n.type || n.init !== u && n.update !== u) && ("ExpressionStatement" === n.type ? "ObjectPattern" === u.left.type : ("TSPropertySignature" !== n.type || n.key !== u) && "AssignmentExpression" !== n.type && ("SequenceExpression" !== n.type || !_t71 || "ForStatement" !== _t71.type || _t71.init !== n && _t71.update !== n) && ("Property" !== n.type || n.value !== u) && "NGChainedExpression" !== n.type);
        }

      case "ConditionalExpression":
        switch (n.type) {
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
          case "ExportDefaultDeclaration":
          case "AwaitExpression":
          case "JSXSpreadAttribute":
          case "TSTypeAssertion":
          case "TypeCastExpression":
          case "TSAsExpression":
          case "TSNonNullExpression":
            return !0;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "ConditionalExpression":
            return "test" === r && n.test === u;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          default:
            return !1;
        }

      case "FunctionExpression":
        switch (n.type) {
          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "TaggedTemplateExpression":
            return !0;

          default:
            return !1;
        }

      case "ArrowFunctionExpression":
        switch (n.type) {
          case "PipelineTopicExpression":
            return !(!u.extra || !u.extra.parenthesized);

          case "BinaryExpression":
            return "|>" !== n.operator || u.extra && u.extra.parenthesized;

          case "NewExpression":
          case "CallExpression":
          case "OptionalCallExpression":
            return "callee" === r;

          case "MemberExpression":
          case "OptionalMemberExpression":
            return "object" === r;

          case "TSAsExpression":
          case "BindExpression":
          case "TaggedTemplateExpression":
          case "UnaryExpression":
          case "LogicalExpression":
          case "AwaitExpression":
          case "TSTypeAssertion":
            return !0;

          case "ConditionalExpression":
            return "test" === r;

          default:
            return !1;
        }

      case "ClassExpression":
        switch (n.type) {
          case "NewExpression":
            return "callee" === r && n.callee === u;

          default:
            return !1;
        }

      case "OptionalMemberExpression":
      case "OptionalCallExpression":
        {
          var _t72 = e.getParentNode(1);

          if ("MemberExpression" === n.type && "object" === r || ("CallExpression" === n.type || "NewExpression" === n.type) && "callee" === r || "TSNonNullExpression" === n.type && "MemberExpression" === _t72.type && _t72.object === n) return !0;
        }

      case "CallExpression":
      case "MemberExpression":
      case "TaggedTemplateExpression":
      case "TSNonNullExpression":
        if (("BindExpression" === n.type || "NewExpression" === n.type) && "callee" === r) {
          var _e97 = u;

          for (; _e97;) {
            switch (_e97.type) {
              case "CallExpression":
              case "OptionalCallExpression":
                return !0;

              case "MemberExpression":
              case "OptionalMemberExpression":
              case "BindExpression":
                _e97 = _e97.object;
                break;

              case "TaggedTemplateExpression":
                _e97 = _e97.tag;
                break;

              case "TSNonNullExpression":
                _e97 = _e97.expression;
                break;

              default:
                return !1;
            }
          }
        }

        return !1;

      case "BindExpression":
        return ("BindExpression" === n.type || "NewExpression" === n.type) && "callee" === r || ("MemberExpression" === n.type || "OptionalMemberExpression" === n.type) && "object" === r;

      case "NGPipeExpression":
        return !("NGRoot" === n.type || "NGMicrosyntaxExpression" === n.type || !("ObjectProperty" !== n.type || u.extra && u.extra.parenthesized) || "ArrayExpression" === n.type || ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && n.arguments[r] === u || "NGPipeExpression" === n.type && "right" === r || "MemberExpression" === n.type && "property" === r || "AssignmentExpression" === n.type);

      case "JSXFragment":
      case "JSXElement":
        return "callee" === r || "BinaryExpression" === n.type && "<" === n.operator && "left" === r || "ArrayExpression" !== n.type && "ArrowFunctionExpression" !== n.type && "AssignmentExpression" !== n.type && "AssignmentPattern" !== n.type && "BinaryExpression" !== n.type && "CallExpression" !== n.type && "NewExpression" !== n.type && "ConditionalExpression" !== n.type && "ExpressionStatement" !== n.type && "JsExpressionRoot" !== n.type && "JSXAttribute" !== n.type && "JSXElement" !== n.type && "JSXExpressionContainer" !== n.type && "JSXFragment" !== n.type && "LogicalExpression" !== n.type && "ObjectProperty" !== n.type && "OptionalCallExpression" !== n.type && "Property" !== n.type && "ReturnStatement" !== n.type && "ThrowStatement" !== n.type && "TypeCastExpression" !== n.type && "VariableDeclarator" !== n.type;

      case "TypeAnnotation":
        return "returnType" === r && "ArrowFunctionExpression" === n.type && function (e) {
          return Ec(e, function (e) {
            return "ObjectTypeAnnotation" === e.type && Ec(e, function (e) {
              return "FunctionTypeAnnotation" === e.type || void 0;
            }) || void 0;
          });
        }(u);
    }

    return !1;
  }

  function xc(e) {
    var t = e.getValue(),
        n = e.getParentNode(),
        r = e.getName();

    switch (n.type) {
      case "NGPipeExpression":
        if ("number" == typeof r && n.arguments[r] === t && n.arguments.length - 1 === r) return e.callParent(xc);
        break;

      case "ObjectProperty":
        if ("value" === r) {
          var _t73 = e.getParentNode(1);

          return _t73.properties[_t73.properties.length - 1] === n;
        }

        break;

      case "BinaryExpression":
      case "LogicalExpression":
        if ("right" === r) return e.callParent(xc);
        break;

      case "ConditionalExpression":
        if ("alternate" === r) return e.callParent(xc);
        break;

      case "UnaryExpression":
        if (n.prefix) return e.callParent(xc);
    }

    return !1;
  }

  var Sc = Fc;
  var _ln$builders3 = ln.builders,
      wc = _ln$builders3.concat,
      Bc = _ln$builders3.join,
      Tc = _ln$builders3.line;
  var kc = {
    isVueEventBindingExpression: function e(t) {
      switch (t.type) {
        case "MemberExpression":
          switch (t.property.type) {
            case "Identifier":
            case "NumericLiteral":
            case "StringLiteral":
              return e(t.object);
          }

          return !1;

        case "Identifier":
          return !0;

        default:
          return !1;
      }
    },
    printHtmlBinding: function printHtmlBinding(e, t, n) {
      var r = e.getValue();
      if (t.__onHtmlBindingRoot && null === e.getName() && t.__onHtmlBindingRoot(r, t), "File" === r.type) return t.__isVueForBindingLeft ? e.call(function (e) {
        var _e$getValue = e.getValue(),
            t = _e$getValue.params;

        return wc([t.length > 1 ? "(" : "", Bc(wc([",", Tc]), e.map(n, "params")), t.length > 1 ? ")" : ""]);
      }, "program", "body", 0) : t.__isVueSlotScope ? e.call(function (e) {
        return Bc(wc([",", Tc]), e.map(n, "params"));
      }, "program", "body", 0) : void 0;
    }
  };

  var Nc = function Nc(e, t) {
    switch (t.parser) {
      case "json":
      case "json5":
      case "json-stringify":
      case "__js_expression":
      case "__vue_expression":
        return Object.assign({}, e, {
          type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot",
          node: e,
          comments: [],
          rootMarker: t.rootMarker
        });

      default:
        return e;
    }
  };

  var Oc = Lt.getLast,
      Pc = Lt.getPenultimate,
      _c = Lt.isNextLineEmpty,
      Ic = mc.hasLeadingComment,
      jc = mc.hasTrailingComment,
      Mc = mc.isFunctionCompositionArgs,
      Lc = mc.isJSXNode,
      Rc = mc.isLongCurriedCallExpression,
      qc = mc.shouldPrintComma,
      _ln$builders4 = ln.builders,
      Vc = _ln$builders4.concat,
      Wc = _ln$builders4.line,
      $c = _ln$builders4.hardline,
      Uc = _ln$builders4.softline,
      zc = _ln$builders4.group,
      Jc = _ln$builders4.indent,
      Gc = _ln$builders4.conditionalGroup,
      Hc = _ln$builders4.ifBreak,
      Xc = _ln$builders4.breakParent,
      Yc = ln.utils.willBreak;

  function Kc(e) {
    return "ObjectExpression" === e.type && (e.properties.length > 0 || e.comments) || "ArrayExpression" === e.type && (e.elements.length > 0 || e.comments) || "TSTypeAssertion" === e.type && Kc(e.expression) || "TSAsExpression" === e.type && Kc(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type || "ObjectExpression" === e.body.type || "ArrayExpression" === e.body.type || "CallExpression" === e.body.type || "OptionalCallExpression" === e.body.type || "ConditionalExpression" === e.body.type || Lc(e.body));
  }

  var Qc = function Qc(e, t, n) {
    var r = e.getValue(),
        u = "ImportExpression" === r.type,
        o = u ? [r.source] : r.arguments;
    if (0 === o.length) return Vc(["(", hi.printDanglingComments(e, t, !0), ")"]);
    if (2 === o.length && "ArrowFunctionExpression" === o[0].type && 0 === o[0].params.length && "BlockStatement" === o[0].body.type && "ArrayExpression" === o[1].type && !o.some(function (e) {
      return e.comments;
    })) return Vc(["(", e.call(n, "arguments", 0), ", ", e.call(n, "arguments", 1), ")"]);
    var a = !1,
        i = !1,
        s = !1;

    var l = o.length - 1,
        c = function c(e, r) {
      var u = e.getNode(),
          o = [n(e)];
      return r === l || (_c(t.originalText, u, t.locEnd) ? (0 === r && (s = !0), a = !0, o.push(",", $c, $c)) : o.push(",", Wc)), i = function (e, t) {
        if (!e || "ArrowFunctionExpression" !== e.type || !e.body || "BlockStatement" !== e.body.type || !e.params || e.params.length < 1) return !1;
        var r = !1;
        return t.each(function (e) {
          var t = Vc([n(e)]);
          r = r || Yc(t);
        }, "params"), r;
      }(u, e), Vc(o);
    },
        p = u ? [e.call(function (e) {
      return c(e, 0);
    }, "source")] : e.map(c, "arguments"),
        d = u || r.callee && "Import" === r.callee.type || !qc(t, "all") ? "" : ",";

    function f() {
      return zc(Vc(["(", Jc(Vc([Wc, Vc(p)])), d, Wc, ")"]), {
        shouldBreak: !0
      });
    }

    if ("Decorator" !== e.getParentNode().type && Mc(o)) return f();

    var h = function (e) {
      if (2 !== e.length) return !1;

      var _e98 = _slicedToArray(e, 2),
          t = _e98[0],
          n = _e98[1];

      return !(t.comments && t.comments.length || "FunctionExpression" !== t.type && ("ArrowFunctionExpression" !== t.type || "BlockStatement" !== t.body.type) || "FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type || "ConditionalExpression" === n.type || Kc(n));
    }(o),
        m = function (e) {
      var t = Oc(e),
          n = Pc(e);
      return !Ic(t) && !jc(t) && Kc(t) && (!n || n.type !== t.type);
    }(o);

    if (h || m) {
      var _t74 = (h ? p.slice(1).some(Yc) : p.slice(0, -1).some(Yc)) || a || i;

      var _l6 = [],
          _c5 = 0;

      var _d4 = function _d4(e) {
        h && 0 === _c5 && (_l6 = [Vc([e.call(function (e) {
          return n(e, {
            expandFirstArg: !0
          });
        }), p.length > 1 ? "," : "", s ? $c : Wc, s ? $c : ""])].concat(p.slice(1))), m && _c5 === o.length - 1 && (_l6 = p.slice(0, -1).concat(e.call(function (e) {
          return n(e, {
            expandLastArg: !0
          });
        }))), _c5++;
      };

      u ? e.call(_d4, "source") : e.each(_d4, "arguments");

      var _g3 = p.some(Yc),
          _D3 = Vc(["(", Vc(_l6), ")"]);

      return Vc([_g3 ? Xc : "", Gc([_g3 || r.typeArguments || r.typeParameters ? Hc(f(), _D3) : _D3, Vc(h ? ["(", zc(_l6[0], {
        shouldBreak: !0
      }), Vc(_l6.slice(1)), ")"] : ["(", Vc(p.slice(0, -1)), zc(Oc(_l6), {
        shouldBreak: !0
      }), ")"]), f()], {
        shouldBreak: _t74
      })]);
    }

    var g = Vc(["(", Jc(Vc([Uc, Vc(p)])), Hc(d), Uc, ")"]);
    return Rc(e) ? g : zc(g, {
      shouldBreak: p.some(Yc) || a
    });
  };

  var Zc = mc.isNumericLiteral,
      _ln$builders5 = ln.builders,
      ep = _ln$builders5.concat,
      tp = _ln$builders5.softline,
      np = _ln$builders5.group,
      rp = _ln$builders5.indent;

  function up(e) {
    var t = e.getValue();
    return !t.optional || "Identifier" === t.type && t === e.getParentNode().key ? "" : "OptionalCallExpression" === t.type || "OptionalMemberExpression" === t.type && t.computed ? "?." : "?";
  }

  var op = {
    printOptionalToken: up,
    printFunctionTypeParameters: function printFunctionTypeParameters(e, t, n) {
      var r = e.getValue();
      return r.typeArguments ? e.call(n, "typeArguments") : r.typeParameters ? e.call(n, "typeParameters") : "";
    },
    printMemberLookup: function printMemberLookup(e, t, n) {
      var r = e.call(n, "property"),
          u = e.getValue(),
          o = up(e);
      return u.computed ? !u.property || Zc(u.property) ? ep([o, "[", r, "]"]) : np(ep([o, "[", rp(ep([tp, r])), tp, "]"])) : ep([o, ".", r]);
    },
    printBindExpressionCallee: function printBindExpressionCallee(e, t, n) {
      return ep(["::", e.call(n, "callee")]);
    }
  };
  var ap = Lt.getLast,
      ip = Lt.isNextLineEmpty,
      sp = Lt.isNextLineEmptyAfterIndex,
      lp = Lt.getNextNonSpaceNonCommentCharacterIndex,
      cp = mc.hasLeadingComment,
      pp = mc.hasTrailingComment,
      dp = mc.isCallOrOptionalCallExpression,
      fp = mc.isFunctionOrArrowExpression,
      hp = mc.isLongCurriedCallExpression,
      mp = mc.isMemberish,
      gp = mc.isNumericLiteral,
      Dp = mc.isSimpleCallArgument,
      _ln$builders6 = ln.builders,
      yp = _ln$builders6.concat,
      Ep = _ln$builders6.join,
      Cp = _ln$builders6.hardline,
      bp = _ln$builders6.group,
      Ap = _ln$builders6.indent,
      vp = _ln$builders6.conditionalGroup,
      Fp = _ln$builders6.breakParent,
      xp = ln.utils.willBreak,
      Sp = op.printOptionalToken,
      wp = op.printFunctionTypeParameters,
      Bp = op.printMemberLookup,
      Tp = op.printBindExpressionCallee;

  var kp = function kp(e, t, n) {
    var r = e.getParentNode(),
        u = !r || "ExpressionStatement" === r.type,
        o = [];

    function a(e) {
      var n = t.originalText,
          r = lp(n, e, t.locEnd);
      return ")" === n.charAt(r) ? !1 !== r && sp(n, r + 1) : ip(n, e, t.locEnd);
    }

    var i = e.getValue();
    o.unshift({
      node: i,
      printed: yp([Sp(e), wp(e, t, n), Qc(e, t, n)])
    }), i.callee && e.call(function (e) {
      return function e(r) {
        var u = r.getValue();
        dp(u) && (mp(u.callee) || dp(u.callee)) ? (o.unshift({
          node: u,
          printed: yp([hi.printComments(r, function () {
            return yp([Sp(r), wp(r, t, n), Qc(r, t, n)]);
          }, t), a(u) ? Cp : ""])
        }), r.call(function (t) {
          return e(t);
        }, "callee")) : mp(u) ? (o.unshift({
          node: u,
          needsParens: Sc(r, t),
          printed: hi.printComments(r, function () {
            return "OptionalMemberExpression" === u.type || "MemberExpression" === u.type ? Bp(r, t, n) : Tp(r, t, n);
          }, t)
        }), r.call(function (t) {
          return e(t);
        }, "object")) : "TSNonNullExpression" === u.type ? (o.unshift({
          node: u,
          printed: hi.printComments(r, function () {
            return "!";
          }, t)
        }), r.call(function (t) {
          return e(t);
        }, "expression")) : o.unshift({
          node: u,
          printed: r.call(n)
        });
      }(e);
    }, "callee");
    var s = [];
    var l = [o[0]],
        c = 1;

    for (; c < o.length && ("TSNonNullExpression" === o[c].node.type || dp(o[c].node) || ("MemberExpression" === o[c].node.type || "OptionalMemberExpression" === o[c].node.type) && o[c].node.computed && gp(o[c].node.property)); ++c) {
      l.push(o[c]);
    }

    if (!dp(o[0].node)) for (; c + 1 < o.length && mp(o[c].node) && mp(o[c + 1].node); ++c) {
      l.push(o[c]);
    }
    s.push(l), l = [];
    var p = !1;

    for (; c < o.length; ++c) {
      if (p && mp(o[c].node)) {
        if (o[c].node.computed && gp(o[c].node.property)) {
          l.push(o[c]);
          continue;
        }

        s.push(l), l = [], p = !1;
      }

      (dp(o[c].node) || "ImportExpression" === o[c].node.type) && (p = !0), l.push(o[c]), o[c].node.comments && o[c].node.comments.some(function (e) {
        return e.trailing;
      }) && (s.push(l), l = [], p = !1);
    }

    function d(e) {
      return /^[A-Z]|^[$_]+$/.test(e);
    }

    l.length > 0 && s.push(l);

    var f = s.length >= 2 && !s[1][0].node.comments && function (e) {
      var n = e[1].length && e[1][0].node.computed;

      if (1 === e[0].length) {
        var _r55 = e[0][0].node;
        return "ThisExpression" === _r55.type || "Identifier" === _r55.type && (d(_r55.name) || u && function (e) {
          return e.length <= t.tabWidth;
        }(_r55.name) || n);
      }

      var r = ap(e[0]).node;
      return ("MemberExpression" === r.type || "OptionalMemberExpression" === r.type) && "Identifier" === r.property.type && (d(r.property.name) || n);
    }(s);

    function h(e) {
      var t = e.map(function (e) {
        return e.printed;
      });
      return e.length > 0 && e[e.length - 1].needsParens ? yp(["("].concat(_toConsumableArray(t), [")"])) : yp(t);
    }

    var m = s.map(h),
        g = yp(m),
        D = f ? 3 : 2,
        y = Uo(s),
        E = y.slice(1, -1).some(function (e) {
      return cp(e.node);
    }) || y.slice(0, -1).some(function (e) {
      return pp(e.node);
    }) || s[D] && cp(s[D][0].node);
    if (s.length <= D && !E) return hp(e) ? g : bp(g);
    var C = ap(s[f ? 1 : 0]).node,
        b = !dp(C) && a(C),
        A = yp([h(s[0]), f ? yp(s.slice(1, 2).map(h)) : "", b ? Cp : "", function (e) {
      return 0 === e.length ? "" : Ap(bp(yp([Cp, Ep(Cp, e.map(h))])));
    }(s.slice(f ? 2 : 1))]),
        v = o.map(function (_ref30) {
      var e = _ref30.node;
      return e;
    }).filter(dp);
    return E || v.length > 2 && v.some(function (e) {
      return !e.arguments.every(function (e) {
        return Dp(e, 0);
      });
    }) || m.slice(0, -1).some(xp) || function () {
      var e = ap(ap(s)).node,
          t = ap(m);
      return dp(e) && xp(t) && v.slice(0, -1).some(function (e) {
        return e.arguments.some(fp);
      });
    }() ? bp(A) : yp([xp(g) || b ? Fp : "", vp([g, A])]);
  };

  var _ln$builders7 = ln.builders,
      Np = _ln$builders7.concat,
      Op = _ln$builders7.softline,
      Pp = _ln$builders7.group,
      _p = _ln$builders7.indent,
      Ip = _ln$builders7.join,
      jp = _ln$builders7.line,
      Mp = _ln$builders7.ifBreak,
      Lp = mc.shouldPrintComma;
  var Rp = {
    printModuleSource: function printModuleSource(e, t, n) {
      return e.getValue().source ? Np([" from ", e.call(n, "source")]) : "";
    },
    printModuleSpecifiers: function printModuleSpecifiers(e, t, n) {
      var r = e.getValue(),
          u = ["ImportDeclaration" === r.type ? " " : ""];

      if (r.specifiers && r.specifiers.length > 0) {
        var _o17 = [],
            _a16 = [];

        if (e.each(function (t) {
          var r = e.getValue().type;
          if ("ExportNamespaceSpecifier" === r || "ExportDefaultSpecifier" === r || "ImportNamespaceSpecifier" === r || "ImportDefaultSpecifier" === r) _o17.push(n(t));else {
            if ("ExportSpecifier" !== r && "ImportSpecifier" !== r) throw new Error("Unknown specifier type ".concat(JSON.stringify(r)));

            _a16.push(n(t));
          }
        }, "specifiers"), u.push(Ip(", ", _o17)), 0 !== _a16.length) {
          0 !== _o17.length && u.push(", ");
          _a16.length > 1 || _o17.length > 0 || r.specifiers.some(function (e) {
            return e.comments;
          }) ? u.push(Pp(Np(["{", _p(Np([t.bracketSpacing ? jp : Op, Ip(Np([",", jp]), _a16)])), Mp(Lp(t) ? "," : ""), t.bracketSpacing ? jp : Op, "}"]))) : u.push(Np(["{", t.bracketSpacing ? " " : "", Np(_a16), t.bracketSpacing ? " " : "", "}"]));
        }
      } else u.push("{}");

      return Np(u);
    }
  };
  var qp = mc.isJSXNode,
      Vp = Lt.hasNewlineInRange,
      _ln$builders8 = ln.builders,
      Wp = _ln$builders8.concat,
      $p = _ln$builders8.line,
      Up = _ln$builders8.softline,
      zp = _ln$builders8.group,
      Jp = _ln$builders8.indent,
      Gp = _ln$builders8.align,
      Hp = _ln$builders8.ifBreak,
      Xp = _ln$builders8.dedent,
      Yp = _ln$builders8.breakParent;

  var Kp = function Kp(e, t, n, r) {
    var u = e.getValue(),
        o = u[r.consequentNodePropertyName],
        a = u[r.alternateNodePropertyName],
        i = [];
    var s = !1;
    var l = e.getParentNode(),
        c = l.type === r.conditionalNodeType && r.testNodePropertyNames.some(function (e) {
      return l[e] === u;
    });
    var p,
        d,
        f = l.type === r.conditionalNodeType && !c,
        h = 0;

    do {
      d = p || u, p = e.getParentNode(h), h++;
    } while (p && p.type === r.conditionalNodeType && r.testNodePropertyNames.every(function (e) {
      return p[e] !== d;
    }));

    var m = p || l,
        g = d;

    if (r.shouldCheckJsx && (qp(u[r.testNodePropertyNames[0]]) || qp(o) || qp(a) || function (e) {
      return function (e) {
        var t = [];
        return function e(n) {
          "ConditionalExpression" === n.type ? (e(n.test), e(n.consequent), e(n.alternate)) : t.push(n);
        }(e), t;
      }(e).some(qp);
    }(g))) {
      s = !0, f = !0;

      var _t75 = function _t75(e) {
        return Wp([Hp("(", ""), Jp(Wp([Up, e])), Up, Hp(")", "")]);
      },
          _u19 = function _u19(e) {
        return "NullLiteral" === e.type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name;
      };

      i.push(" ? ", _u19(o) ? e.call(n, r.consequentNodePropertyName) : _t75(e.call(n, r.consequentNodePropertyName)), " : ", a.type === r.conditionalNodeType || _u19(a) ? e.call(n, r.alternateNodePropertyName) : _t75(e.call(n, r.alternateNodePropertyName)));
    } else {
      var _s6 = Wp([$p, "? ", o.type === r.conditionalNodeType ? Hp("", "(") : "", Gp(2, e.call(n, r.consequentNodePropertyName)), o.type === r.conditionalNodeType ? Hp("", ")") : "", $p, ": ", a.type === r.conditionalNodeType ? e.call(n, r.alternateNodePropertyName) : Gp(2, e.call(n, r.alternateNodePropertyName))]);

      i.push(l.type !== r.conditionalNodeType || l[r.alternateNodePropertyName] === u || c ? _s6 : t.useTabs ? Xp(Jp(_s6)) : Gp(Math.max(0, t.tabWidth - 2), _s6));
    }

    var D = Uo([].concat(_toConsumableArray(r.testNodePropertyNames.map(function (e) {
      return u[e].comments;
    })), [o.comments, a.comments])).filter(Boolean).some(function (e) {
      return Us.isBlockComment(e) && Vp(t.originalText, t.locStart(e), t.locEnd(e));
    }),
        y = !s && ("MemberExpression" === l.type || "OptionalMemberExpression" === l.type || "NGPipeExpression" === l.type && l.left === u) && !l.computed,
        E = function (e) {
      return l === m ? zp(e, {
        shouldBreak: D
      }) : D ? Wp([e, Yp]) : e;
    }(Wp([].concat((C = Wp(r.beforeParts()), l.type === r.conditionalNodeType && l[r.alternateNodePropertyName] === u ? Gp(2, C) : C), f ? Wp(i) : Jp(Wp(i)), r.afterParts(y))));

    var C;
    return c ? zp(Wp([Jp(Wp([Up, E])), Up])) : E;
  };

  var Qp = Lt.getNextNonSpaceNonCommentCharacter,
      Zp = Lt.hasNewline,
      ed = Lt.hasNewlineInRange,
      td = Lt.getLast,
      nd = Lt.getStringWidth,
      rd = Lt.printString,
      ud = Lt.printNumber,
      od = Lt.hasIgnoreComment,
      ad = Lt.hasNodeIgnoreComment,
      id = Lt.getIndentSize,
      sd = Lt.getPreferredQuote,
      ld = ys.isNextLineEmpty,
      cd = ys.getNextNonSpaceNonCommentCharacterIndex,
      _ln$builders9 = ln.builders,
      pd = _ln$builders9.concat,
      dd = _ln$builders9.join,
      fd = _ln$builders9.line,
      hd = _ln$builders9.hardline,
      md = _ln$builders9.softline,
      gd = _ln$builders9.literalline,
      Dd = _ln$builders9.group,
      yd = _ln$builders9.indent,
      Ed = _ln$builders9.align,
      Cd = _ln$builders9.conditionalGroup,
      bd = _ln$builders9.fill,
      Ad = _ln$builders9.ifBreak,
      vd = _ln$builders9.lineSuffixBoundary,
      Fd = _ln$builders9.addAlignmentToDoc,
      _ln$utils = ln.utils,
      xd = _ln$utils.willBreak,
      Sd = _ln$utils.isLineNext,
      wd = _ln$utils.isEmpty,
      Bd = _ln$utils.removeLines,
      Td = _ln$utils.normalizeParts,
      kd = ln.printer.printDocToString,
      Nd = wl.insertPragma,
      Od = kc.printHtmlBinding,
      Pd = kc.isVueEventBindingExpression,
      _d = mc.classChildNeedsASIProtection,
      Id = mc.classPropMayCauseASIProblems,
      jd = mc.getFlowVariance,
      Md = mc.getLeftSidePathName,
      Ld = mc.getParentExportDeclaration,
      Rd = mc.getTypeScriptMappedTypeModifier,
      qd = mc.hasDanglingComments,
      Vd = mc.hasFlowAnnotationComment,
      Wd = mc.hasFlowShorthandAnnotationComment,
      $d = mc.hasLeadingOwnLineComment,
      Ud = mc.hasNakedLeftSide,
      zd = mc.hasNewlineBetweenOrAfterDecorators,
      Jd = mc.hasNgSideEffect,
      Gd = mc.hasPrettierIgnore,
      Hd = mc.hasTrailingComment,
      Xd = mc.hasTrailingLineComment,
      Yd = mc.identity,
      Kd = mc.isBinaryish,
      Qd = mc.isCallOrOptionalCallExpression,
      Zd = mc.isEmptyJSXElement,
      ef = mc.isExportDeclaration,
      tf = mc.isFlowAnnotationComment,
      nf = mc.isFunctionNotation,
      rf = mc.isGetterOrSetter,
      uf = mc.isJestEachTemplateLiteral,
      of = mc.isJSXNode,
      af = mc.isJSXWhitespaceExpression,
      sf = mc.isLastStatement,
      lf = mc.isLiteral,
      cf = mc.isMeaningfulJSXText,
      pf = mc.isMemberExpressionChain,
      df = mc.isMemberish,
      ff = mc.isNgForOf,
      hf = mc.isNumericLiteral,
      mf = mc.isObjectType,
      gf = mc.isObjectTypePropertyAFunction,
      Df = mc.isSimpleFlowType,
      yf = mc.isSimpleNumber,
      Ef = mc.isSimpleTemplateLiteral,
      Cf = mc.isStringLiteral,
      bf = mc.isStringPropSafeToUnquote,
      Af = mc.isTemplateOnItsOwnLine,
      vf = mc.isTestCall,
      Ff = mc.isTheOnlyJSXElementInMarkdown,
      xf = mc.isTSXFile,
      Sf = mc.isTypeAnnotationAFunction,
      wf = mc.matchJsxWhitespaceRegex,
      Bf = mc.needsHardlineAfterDanglingComment,
      Tf = mc.rawText,
      kf = mc.returnArgumentHasLeadingComment,
      Nf = mc.shouldPrintComma,
      Of = mc.shouldFlatten,
      Pf = mc.startsWithNoLookaheadToken,
      _f = op.printOptionalToken,
      If = op.printFunctionTypeParameters,
      jf = op.printMemberLookup,
      Mf = op.printBindExpressionCallee,
      Lf = Rp.printModuleSource,
      Rf = Rp.printModuleSpecifiers,
      qf = new WeakMap();
  var Vf = 0;

  function Wf(e, t, n) {
    var r = e.getValue();
    return Dd(pd([dd(fd, e.map(n, "decorators")), zd(r, t) ? hd : fd]));
  }

  function $f(e, t, n) {
    var r = [],
        u = e.getNode(),
        o = "ClassBody" === u.type;
    return e.map(function (e, a) {
      var i = e.getValue();
      if (!i) return;
      if ("EmptyStatement" === i.type) return;
      var s = n(e),
          l = t.originalText,
          c = [];
      if (t.semi || o || Ff(t, e) || !function (e, t) {
        if ("ExpressionStatement" !== e.getNode().type) return !1;
        return e.call(function (e) {
          return function e(t, n) {
            var r = t.getValue();
            if (Sc(t, n) || "ParenthesizedExpression" === r.type || "TypeCastExpression" === r.type || "ArrowFunctionExpression" === r.type && !Xf(t, n) || "ArrayExpression" === r.type || "ArrayPattern" === r.type || "UnaryExpression" === r.type && r.prefix && ("+" === r.operator || "-" === r.operator) || "TemplateLiteral" === r.type || "TemplateElement" === r.type || of(r) || "BindExpression" === r.type && !r.object || "RegExpLiteral" === r.type || "Literal" === r.type && r.pattern || "Literal" === r.type && r.regex) return !0;
            if (!Ud(r)) return !1;
            return t.call.apply(t, [function (t) {
              return e(t, n);
            }].concat(_toConsumableArray(Md(t, r))));
          }(e, t);
        }, "expression");
      }(e, t) ? c.push(s) : i.comments && i.comments.some(function (e) {
        return e.leading;
      }) ? c.push(n(e, {
        needsSemi: !0
      })) : c.push(";", s), !t.semi && o) if (Id(e)) c.push(";");else if ("ClassProperty" === i.type) {
        var _e99 = u.body[a + 1];
        _d(_e99) && c.push(";");
      }
      ld(l, i, t.locEnd) && !sf(e) && c.push(hd), r.push(pd(c));
    }), dd(hd, r);
  }

  function Uf(e, t, n) {
    var r = e.getNode();
    if (r.computed) return pd(["[", e.call(n, "key"), "]"]);
    var u = e.getParentNode(),
        o = r.key;
    if ("ClassPrivateProperty" === r.type && "Identifier" === o.type) return pd(["#", e.call(n, "key")]);

    if ("consistent" === t.quoteProps && !qf.has(u)) {
      var _e100 = (u.properties || u.body || u.members).some(function (e) {
        return !e.computed && e.key && Cf(e.key) && !bf(e, t);
      });

      qf.set(u, _e100);
    }

    if (("Identifier" === o.type || hf(o) && yf(ud(Tf(o))) && String(o.value) === ud(Tf(o)) && "typescript" !== t.parser && "babel-ts" !== t.parser) && ("json" === t.parser || "consistent" === t.quoteProps && qf.get(u))) {
      var _n43 = rd(JSON.stringify("Identifier" === o.type ? o.name : o.value.toString()), t);

      return e.call(function (e) {
        return hi.printComments(e, function () {
          return _n43;
        }, t);
      }, "key");
    }

    return bf(r, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !qf.get(u)) ? e.call(function (e) {
      return hi.printComments(e, function () {
        return /^\d/.test(o.value) ? ud(o.value) : o.value;
      }, t);
    }, "key") : e.call(n, "key");
  }

  function zf(e, t, n) {
    var r = e.getNode(),
        u = r.kind,
        o = r.value || r,
        a = [];
    return u && "init" !== u && "method" !== u && "constructor" !== u ? (Ja.ok("get" === u || "set" === u), a.push(u, " ")) : (o.async && a.push("async "), o.generator && a.push("*")), a.push(Uf(e, t, n), r.optional || r.key.optional ? "?" : "", r === o ? Jf(e, t, n) : e.call(function (e) {
      return Jf(e, t, n);
    }, "value")), pd(a);
  }

  function Jf(e, t, n) {
    var r = [If(e, t, n), Dd(pd([Hf(e, n, t), Kf(e, n, t)]))];
    return e.getNode().body ? r.push(" ", e.call(n, "body")) : r.push(t.semi ? ";" : ""), pd(r);
  }

  function Gf(e, t, n) {
    var r = e.getValue();
    if (!r.typeAnnotation) return "";
    var u = e.getParentNode(),
        o = r.definite || u && "VariableDeclarator" === u.type && u.definite,
        a = "DeclareFunction" === u.type && u.id === r;
    return tf(t.originalText, r.typeAnnotation, t) ? pd([" /*: ", e.call(n, "typeAnnotation"), " */"]) : pd([a ? "" : o ? "!: " : ": ", e.call(n, "typeAnnotation")]);
  }

  function Hf(e, t, n, r, u) {
    var o = e.getValue(),
        a = e.getParentNode(),
        i = o.parameters ? "parameters" : "params",
        s = vf(a),
        l = hh(o),
        c = r && !(o[i] && o[i].some(function (e) {
      return e.comments;
    })),
        p = u ? If(e, n, t) : "";
    var d = [];

    if (o[i]) {
      var _r56 = o[i].length - 1;

      d = e.map(function (e, u) {
        var a = [],
            i = e.getValue();
        return a.push(t(e)), u === _r56 ? o.rest && a.push(",", fd) : s || l || c ? a.push(", ") : ld(n.originalText, i, n.locEnd) ? a.push(",", hd, hd) : a.push(",", fd), pd(a);
      }, i);
    }

    if (o.rest && d.push(pd(["...", e.call(t, "rest")])), 0 === d.length) return pd([p, "(", hi.printDanglingComments(e, n, !0, function (e) {
      return ")" === Qp(n.originalText, e, n.locEnd);
    }), ")"]);
    var f = td(o[i]);
    if (c) return Dd(pd([Bd(p), "(", pd(d.map(Bd)), ")"]));
    var h = o[i].every(function (e) {
      return !e.decorators;
    });
    if (l && h) return pd([p, "(", pd(d), ")"]);
    if (s) return pd([p, "(", pd(d), ")"]);
    if ((gf(a, n) || Sf(a, n) || "TypeAlias" === a.type || "UnionTypeAnnotation" === a.type || "TSUnionType" === a.type || "IntersectionTypeAnnotation" === a.type || "FunctionTypeAnnotation" === a.type && a.returnType === o) && 1 === o[i].length && null === o[i][0].name && o[i][0].typeAnnotation && null === o.typeParameters && Df(o[i][0].typeAnnotation) && !o.rest) return "always" === n.arrowParens ? pd(["(", pd(d), ")"]) : pd(d);
    var m = !(f && "RestElement" === f.type || o.rest);
    return pd([p, "(", yd(pd([md, pd(d)])), Ad(m && Nf(n, "all") ? "," : ""), md, ")"]);
  }

  function Xf(e, t) {
    if ("always" === t.arrowParens) return !1;

    if ("avoid" === t.arrowParens) {
      return function (e) {
        return !(1 !== e.params.length || e.rest || e.typeParameters || qd(e) || "Identifier" !== e.params[0].type || e.params[0].typeAnnotation || e.params[0].comments || e.params[0].optional || e.predicate || e.returnType);
      }(e.getValue());
    }

    return !1;
  }

  function Yf(e, t, n) {
    var r = e.getValue(),
        u = [];
    return r.async && u.push("async "), r.generator ? u.push("function* ") : u.push("function "), r.id && u.push(e.call(t, "id")), u.push(If(e, n, t), Dd(pd([Hf(e, t, n), Kf(e, t, n)])), r.body ? " " : "", e.call(t, "body")), pd(u);
  }

  function Kf(e, t, n) {
    var r = e.getValue(),
        u = e.call(t, "returnType");
    if (r.returnType && tf(n.originalText, r.returnType, n)) return pd([" /*: ", u, " */"]);
    var o = [u];
    return r.returnType && r.returnType.typeAnnotation && o.unshift(": "), r.predicate && o.push(r.returnType ? " " : ": ", e.call(t, "predicate")), pd(o);
  }

  function Qf(e, t, n) {
    var r = e.getValue(),
        u = t.semi ? ";" : "",
        o = ["export "],
        a = r.default || "ExportDefaultDeclaration" === r.type;
    return a && o.push("default "), o.push(hi.printDanglingComments(e, t, !0)), Bf(r) && o.push(hd), r.declaration ? (o.push(e.call(n, "declaration")), a && "ClassDeclaration" !== r.declaration.type && "FunctionDeclaration" !== r.declaration.type && "TSInterfaceDeclaration" !== r.declaration.type && "DeclareClass" !== r.declaration.type && "DeclareFunction" !== r.declaration.type && "TSDeclareFunction" !== r.declaration.type && "EnumDeclaration" !== r.declaration.type && o.push(u)) : (o.push("type" === r.exportKind ? "type " : ""), o.push(Rf(e, t, n)), o.push(Lf(e, t, n)), o.push(u)), pd(o);
  }

  function Zf(e, t) {
    var n = Ld(e);
    return n ? Ja.strictEqual(n.type, "DeclareExportDeclaration") : t.unshift("declare "), pd(t);
  }

  function eh(e, t, n) {
    var r = e.getValue();
    return r.modifiers && r.modifiers.length ? pd([dd(" ", e.map(n, "modifiers")), " "]) : "";
  }

  var th = new WeakMap();

  function nh(e) {
    return th.has(e) || th.set(e, Symbol("typeParameters")), th.get(e);
  }

  function rh(e, t, n, r) {
    var u = e.getValue();
    if (!u[r]) return "";
    if (!Array.isArray(u[r])) return e.call(n, r);
    var o = e.getNode(2),
        a = e.getNode(3),
        i = e.getNode(4);
    return null != o && vf(o) || 0 === u[r].length || 1 === u[r].length && (fh(u[r][0]) || "GenericTypeAnnotation" === u[r][0].type && fh(u[r][0].id) || "TSTypeReference" === u[r][0].type && fh(u[r][0].typeName) || "NullableTypeAnnotation" === u[r][0].type || i && "VariableDeclarator" === i.type && "TSTypeAnnotation" === o.type && "ArrowFunctionExpression" !== a.type && "TSUnionType" !== u[r][0].type && "UnionTypeAnnotation" !== u[r][0].type && "TSIntersectionType" !== u[r][0].type && "IntersectionTypeAnnotation" !== u[r][0].type && "TSConditionalType" !== u[r][0].type && "TSMappedType" !== u[r][0].type && "TSTypeOperator" !== u[r][0].type && "TSIndexedAccessType" !== u[r][0].type && "TSArrayType" !== u[r][0].type) ? pd(["<", dd(", ", e.map(n, r)), function (n) {
      if (!qd(n)) return "";
      var r = n.comments.every(Us.isBlockComment),
          u = hi.printDanglingComments(e, t, r);
      return r ? u : pd([u, hd]);
    }(u), ">"]) : Dd(pd(["<", yd(pd([md, dd(pd([",", fd]), e.map(n, r))])), Ad("typescript" !== t.parser && "babel-ts" !== t.parser && Nf(t, "all") ? "," : ""), md, ">"]), {
      id: nh(u)
    });
  }

  function uh(e, t, n) {
    var r = e.getValue(),
        u = [];
    r.abstract && u.push("abstract "), u.push("class");
    var o = r.id && Hd(r.id) || r.superClass && r.superClass.comments && 0 !== r.superClass.comments.length || r.extends && 0 !== r.extends.length || r.mixins && 0 !== r.mixins.length || r.implements && 0 !== r.implements.length,
        a = [],
        i = [];
    r.id && a.push(" ", e.call(n, "id")), a.push(e.call(n, "typeParameters"));
    var s = ["superClass", "extends", "mixins", "implements"].filter(function (e) {
      return !!r[e];
    }).length > 1,
        l = r.typeParameters && !Xd(r.typeParameters) && !s;

    function c(u) {
      if (r[u] && 0 !== r[u].length) {
        var _o18 = hi.printDanglingComments(e, t, !0, function (_ref31) {
          var e = _ref31.marker;
          return e === u;
        });

        i.push(l ? Ad(" ", fd, {
          groupId: nh(r.typeParameters)
        }) : fd, _o18, _o18 && hd, u, Dd(yd(pd([fd, dd(pd([",", fd]), e.map(n, u))]))));
      }
    }

    if (r.superClass) {
      var _r57 = pd(["extends ", e.call(n, "superClass"), e.call(n, "superTypeParameters")]),
          _u20 = e.call(function (e) {
        return hi.printComments(e, function () {
          return _r57;
        }, t);
      }, "superClass");

      o ? i.push(fd, Dd(_u20)) : i.push(" ", _u20);
    } else c("extends");

    if (c("mixins"), c("implements"), o) {
      var _e101 = pd(i);

      l ? u.push(Dd(pd(a.concat(Ad(yd(_e101), _e101))))) : u.push(Dd(yd(pd(a.concat(_e101)))));
    } else u.push.apply(u, a.concat(i));

    return u.push(" ", e.call(n, "body")), u;
  }

  function oh(e, t, n, r) {
    return e ? "" : "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? 1 === t.length ? md : hd : md;
  }

  function ah(e, t, n, r) {
    return e ? hd : 1 === t.length ? "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? hd : md : hd;
  }

  function ih(e) {
    return "LogicalExpression" === e.type && ("ObjectExpression" === e.right.type && 0 !== e.right.properties.length || "ArrayExpression" === e.right.type && 0 !== e.right.elements.length || !!of(e.right));
  }

  function sh(e, t, n, r) {
    if ($d(r.originalText, t, r)) return yd(pd([fd, n]));
    return Kd(t) && !ih(t) || "ConditionalExpression" === t.type && Kd(t.test) && !ih(t.test) || "StringLiteralTypeAnnotation" === t.type || "ClassExpression" === t.type && t.decorators && t.decorators.length || ("Identifier" === e.type || Cf(e) || "MemberExpression" === e.type) && (Cf(t) || pf(t)) && "json" !== r.parser && "json5" !== r.parser || "SequenceExpression" === t.type ? Dd(yd(pd([fd, n]))) : pd([" ", n]);
  }

  function lh(e, t, n, r, u, o) {
    if (!r) return t;
    var a = sh(e, r, u, o);
    return Dd(pd([t, n, a]));
  }

  function ch(e, t, n) {
    return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? pd([" ", t]) : yd(pd([fd, t]));
  }

  function ph(e, t, n) {
    var r = Tf(e),
        u = n || "DirectiveLiteral" === e.type;
    return rd(r, t, u);
  }

  function dh(e) {
    var t = e.flags.split("").sort().join("");
    return "/".concat(e.pattern, "/").concat(t);
  }

  function fh(e) {
    if (Df(e) || mf(e)) return !0;

    if ("UnionTypeAnnotation" === e.type || "TSUnionType" === e.type) {
      var _t76 = e.types.filter(function (e) {
        return "VoidTypeAnnotation" === e.type || "TSVoidKeyword" === e.type || "NullLiteralTypeAnnotation" === e.type || "TSNullKeyword" === e.type;
      }).length,
          _n44 = e.types.some(function (e) {
        return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type;
      });

      if (e.types.length - 1 === _t76 && _n44) return !0;
    }

    return !1;
  }

  function hh(e) {
    if (!e || e.rest) return !1;
    var t = e.params || e.parameters;
    if (!t || 1 !== t.length) return !1;
    var n = t[0];
    return !n.comments && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && mf(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && mf(n.typeAnnotation) || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || "ObjectExpression" === n.right.type && 0 === n.right.properties.length || "ArrayExpression" === n.right.type && 0 === n.right.elements.length));
  }

  function mh(e, t, n, r) {
    var u = [];
    var o = [];
    return e.each(function (e) {
      u.push(pd(o)), u.push(Dd(r(e))), o = [",", fd], e.getValue() && ld(t.originalText, e.getValue(), t.locEnd) && o.push(md);
    }, n), pd(u);
  }

  function gh(e, t, n) {
    var r = e.getValue(),
        u = t.semi ? ";" : "",
        o = [];
    r.argument && (kf(t, r.argument) ? o.push(pd([" (", yd(pd([hd, e.call(n, "argument")])), hd, ")"])) : Kd(r.argument) || "SequenceExpression" === r.argument.type ? o.push(Dd(pd([Ad(" (", " "), yd(pd([md, e.call(n, "argument")])), md, Ad(")")]))) : o.push(" ", e.call(n, "argument")));
    var a = Array.isArray(r.comments) && r.comments[r.comments.length - 1],
        i = a && ("CommentLine" === a.type || "Line" === a.type);
    return i && o.push(u), qd(r) && o.push(" ", hi.printDanglingComments(e, t, !0)), i || o.push(u), pd(o);
  }

  function Dh(e) {
    var t = e.getValue(),
        n = e.getParentNode();
    return (t && (of(t) || Wd(t) || n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && (Vd(t.leadingComments) || Vd(t.trailingComments))) || n && ("JSXSpreadAttribute" === n.type || "JSXSpreadChild" === n.type || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type || ("ClassDeclaration" === n.type || "ClassExpression" === n.type) && n.superClass === t)) && (!od(e) || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type);
  }

  var yh = {
    preprocess: Nc,
    print: function print(e, t, n, r) {
      var u = e.getValue();
      var o = !1;

      var a = function (e, t, n, r) {
        var u = e.getValue(),
            o = t.semi ? ";" : "";
        if (!u) return "";
        if ("string" == typeof u) return u;
        var a = Od(e, t, n);
        if (a) return a;
        var i = [];

        switch (u.type) {
          case "JsExpressionRoot":
            return e.call(n, "node");

          case "JsonRoot":
            return pd([e.call(n, "node"), hd]);

          case "File":
            return u.program && u.program.interpreter && i.push(e.call(function (e) {
              return e.call(n, "interpreter");
            }, "program")), i.push(e.call(n, "program")), pd(i);

          case "Program":
            {
              var _r58 = !u.body.every(function (_ref32) {
                var e = _ref32.type;
                return "EmptyStatement" === e;
              }) || u.comments;

              if (u.directives) {
                var _a17 = u.directives.length;
                e.map(function (e, u) {
                  i.push(n(e), o, hd), (u < _a17 - 1 || _r58) && ld(t.originalText, e.getValue(), t.locEnd) && i.push(hd);
                }, "directives");
              }

              return i.push(e.call(function (e) {
                return $f(e, t, n);
              }, "body")), i.push(hi.printDanglingComments(e, t, !0)), _r58 && i.push(hd), pd(i);
            }

          case "EmptyStatement":
            return "";

          case "ExpressionStatement":
            if (u.directive) return pd([ph(u.expression, t, !0), o]);

            if ("__vue_event_binding" === t.parser) {
              var _t77 = e.getParentNode();

              if ("Program" === _t77.type && 1 === _t77.body.length && _t77.body[0] === u) return pd([e.call(n, "expression"), Pd(u.expression) ? ";" : ""]);
            }

            return pd([e.call(n, "expression"), Ff(t, e) ? "" : o]);

          case "ParenthesizedExpression":
            return !u.expression.comments ? pd(["(", e.call(n, "expression"), ")"]) : Dd(pd(["(", yd(pd([md, e.call(n, "expression")])), md, ")"]));

          case "AssignmentExpression":
            return lh(u.left, e.call(n, "left"), pd([" ", u.operator]), u.right, e.call(n, "right"), t);

          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
            {
              var _r59 = e.getParentNode(),
                  _o19 = e.getParentNode(1),
                  _a18 = u !== _r59.body && ("IfStatement" === _r59.type || "WhileStatement" === _r59.type || "SwitchStatement" === _r59.type || "DoWhileStatement" === _r59.type),
                  _i39 = function e(t, n, r, u, o) {
                var a = [];
                var i = t.getValue();

                if (Kd(i)) {
                  Of(i.operator, i.left.operator) ? a = a.concat(t.call(function (t) {
                    return e(t, n, r, !0, o);
                  }, "left")) : a.push(Dd(t.call(n, "left")));

                  var _s8 = ih(i),
                      _l8 = ("|>" === i.operator || "NGPipeExpression" === i.type || "|" === i.operator && "__vue_expression" === r.parser) && !$d(r.originalText, i.right, r),
                      _c7 = "NGPipeExpression" === i.type ? "|" : i.operator,
                      _p7 = "NGPipeExpression" === i.type && 0 !== i.arguments.length ? Dd(yd(pd([md, ": ", dd(pd([md, ":", Ad(" ")]), t.map(n, "arguments").map(function (e) {
                    return Ed(2, Dd(e));
                  }))]))) : "",
                      _d6 = pd(_s8 ? [_c7, " ", t.call(n, "right"), _p7] : [_l8 ? fd : "", _c7, _l8 ? " " : fd, t.call(n, "right"), _p7]),
                      _f5 = t.getParentNode(),
                      _h5 = Xd(i.left),
                      _m5 = _h5 || !(o && "LogicalExpression" === i.type) && _f5.type !== i.type && i.left.type !== i.type && i.right.type !== i.type;

                  a.push(_l8 ? "" : " ", _m5 ? Dd(_d6, {
                    shouldBreak: _h5
                  }) : _d6), u && i.comments && (a = Td(hi.printComments(t, function () {
                    return pd(a);
                  }, r).parts));
                } else a.push(Dd(t.call(n)));

                return a;
              }(e, n, t, !1, _a18);

              if (_a18) return pd(_i39);
              if (("CallExpression" === _r59.type || "OptionalCallExpression" === _r59.type) && _r59.callee === u || "UnaryExpression" === _r59.type || ("MemberExpression" === _r59.type || "OptionalMemberExpression" === _r59.type) && !_r59.computed) return Dd(pd([yd(pd([md, pd(_i39)])), md]));

              var _s7 = "ReturnStatement" === _r59.type || "ThrowStatement" === _r59.type || "JSXExpressionContainer" === _r59.type && "JSXAttribute" === _o19.type || "|" !== u.operator && "JsExpressionRoot" === _r59.type || "NGPipeExpression" !== u.type && ("NGRoot" === _r59.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === _r59.type && "NGMicrosyntax" === _o19.type && 1 === _o19.body.length) || u === _r59.body && "ArrowFunctionExpression" === _r59.type || u !== _r59.body && "ForStatement" === _r59.type || "ConditionalExpression" === _r59.type && "ReturnStatement" !== _o19.type && "ThrowStatement" !== _o19.type && "CallExpression" !== _o19.type && "OptionalCallExpression" !== _o19.type || "TemplateLiteral" === _r59.type,
                  _l7 = "AssignmentExpression" === _r59.type || "VariableDeclarator" === _r59.type || "ClassProperty" === _r59.type || "TSAbstractClassProperty" === _r59.type || "ClassPrivateProperty" === _r59.type || "ObjectProperty" === _r59.type || "Property" === _r59.type,
                  _c6 = Kd(u.left) && Of(u.operator, u.left.operator);

              if (_s7 || ih(u) && !_c6 || !ih(u) && _l7) return Dd(pd(_i39));
              if (0 === _i39.length) return "";

              var _p6 = of(u.right),
                  _d5 = _i39.findIndex(function (e) {
                return "string" != typeof e && "group" === e.type;
              }),
                  _f4 = _i39.slice(0, -1 === _d5 ? 1 : _d5 + 1),
                  _h4 = pd(_i39.slice(_f4.length, _p6 ? -1 : void 0)),
                  _m4 = Symbol("logicalChain-" + ++Vf),
                  _g4 = Dd(pd([].concat(_toConsumableArray(_f4), [yd(_h4)])), {
                id: _m4
              });

              if (!_p6) return _g4;

              var _D4 = td(_i39);

              return Dd(pd([_g4, Ad(yd(_D4), _D4, {
                groupId: _m4
              })]));
            }

          case "AssignmentPattern":
            return pd([e.call(n, "left"), " = ", e.call(n, "right")]);

          case "TSTypeAssertion":
            {
              var _t78 = !("ArrayExpression" === u.expression.type || "ObjectExpression" === u.expression.type),
                  _r60 = Dd(pd(["<", yd(pd([md, e.call(n, "typeAnnotation")])), md, ">"])),
                  _o20 = pd([Ad("("), yd(pd([md, e.call(n, "expression")])), md, Ad(")")]);

              return _t78 ? Cd([pd([_r60, e.call(n, "expression")]), pd([_r60, Dd(_o20, {
                shouldBreak: !0
              })]), pd([_r60, e.call(n, "expression")])]) : Dd(pd([_r60, e.call(n, "expression")]));
            }

          case "OptionalMemberExpression":
          case "MemberExpression":
            {
              var _r61 = e.getParentNode();

              var _o21,
                  _a19 = 0;

              do {
                _o21 = e.getParentNode(_a19), _a19++;
              } while (_o21 && ("MemberExpression" === _o21.type || "OptionalMemberExpression" === _o21.type || "TSNonNullExpression" === _o21.type));

              var _i40 = _o21 && ("NewExpression" === _o21.type || "BindExpression" === _o21.type || "VariableDeclarator" === _o21.type && "Identifier" !== _o21.id.type || "AssignmentExpression" === _o21.type && "Identifier" !== _o21.left.type) || u.computed || "Identifier" === u.object.type && "Identifier" === u.property.type && "MemberExpression" !== _r61.type && "OptionalMemberExpression" !== _r61.type;

              return pd([e.call(n, "object"), _i40 ? jf(e, t, n) : Dd(yd(pd([md, jf(e, t, n)])))]);
            }

          case "MetaProperty":
            return pd([e.call(n, "meta"), ".", e.call(n, "property")]);

          case "BindExpression":
            return u.object && i.push(e.call(n, "object")), i.push(Dd(yd(pd([md, Mf(e, t, n)])))), pd(i);

          case "Identifier":
            return pd([u.name, _f(e), Gf(e, t, n)]);

          case "V8IntrinsicIdentifier":
            return pd(["%", u.name]);

          case "SpreadElement":
          case "SpreadElementPattern":
          case "SpreadProperty":
          case "SpreadPropertyPattern":
          case "RestElement":
          case "ObjectTypeSpreadProperty":
            return pd(["...", e.call(n, "argument"), Gf(e, t, n)]);

          case "FunctionDeclaration":
          case "FunctionExpression":
            return i.push(Yf(e, n, t)), u.body || i.push(o), pd(i);

          case "ArrowFunctionExpression":
            {
              u.async && i.push("async "), Xf(e, t) ? i.push(e.call(n, "params", 0)) : i.push(Dd(pd([Hf(e, n, t, r && (r.expandLastArg || r.expandFirstArg), !0), Kf(e, n, t)])));

              var _o22 = hi.printDanglingComments(e, t, !0, function (e) {
                var n = cd(t.originalText, e, t.locEnd);
                return !1 !== n && "=>" === t.originalText.slice(n, n + 2);
              });

              _o22 && i.push(" ", _o22), i.push(" =>");

              var _a20 = e.call(function (e) {
                return n(e, r);
              }, "body");

              if (!$d(t.originalText, u.body, t) && ("ArrayExpression" === u.body.type || "ObjectExpression" === u.body.type || "BlockStatement" === u.body.type || of(u.body) || Af(u.body, t.originalText, t) || "ArrowFunctionExpression" === u.body.type || "DoExpression" === u.body.type)) return Dd(pd([pd(i), " ", _a20]));
              if ("SequenceExpression" === u.body.type) return Dd(pd([pd(i), Dd(pd([" (", yd(pd([md, _a20])), md, ")"]))]));

              var _s9 = (r && r.expandLastArg || "JSXExpressionContainer" === e.getParentNode().type) && !(u.comments && u.comments.length),
                  _l9 = r && r.expandLastArg && Nf(t, "all"),
                  _c8 = "ConditionalExpression" === u.body.type && !Pf(u.body, !1);

              return Dd(pd([pd(i), Dd(pd([yd(pd([fd, _c8 ? Ad("", "(") : "", _a20, _c8 ? Ad("", ")") : ""])), _s9 ? pd([Ad(_l9 ? "," : ""), md]) : ""]))]));
            }

          case "YieldExpression":
            return i.push("yield"), u.delegate && i.push("*"), u.argument && i.push(" ", e.call(n, "argument")), pd(i);

          case "AwaitExpression":
            {
              i.push("await"), u.argument && i.push(" ", e.call(n, "argument"));

              var _t79 = e.getParentNode();

              return ("CallExpression" === _t79.type || "OptionalCallExpression" === _t79.type) && _t79.callee === u || ("MemberExpression" === _t79.type || "OptionalMemberExpression" === _t79.type) && _t79.object === u ? Dd(pd([yd(pd([md, pd(i)])), md])) : pd(i);
            }

          case "ImportSpecifier":
            return u.importKind && i.push(e.call(n, "importKind"), " "), i.push(e.call(n, "imported")), u.local && u.local.name !== u.imported.name && i.push(" as ", e.call(n, "local")), pd(i);

          case "ExportSpecifier":
            return i.push(e.call(n, "local")), u.exported && u.exported.name !== u.local.name && i.push(" as ", e.call(n, "exported")), pd(i);

          case "ImportNamespaceSpecifier":
            return i.push("* as "), i.push(e.call(n, "local")), pd(i);

          case "ImportDefaultSpecifier":
            return e.call(n, "local");

          case "TSExportAssignment":
            return pd(["export = ", e.call(n, "expression"), o]);

          case "ExportDefaultDeclaration":
          case "ExportNamedDeclaration":
            return Qf(e, t, n);

          case "DeclareExportDeclaration":
            return pd(["declare ", Qf(e, t, n)]);

          case "ExportAllDeclaration":
            return i.push("export"), "type" === u.exportKind && i.push(" type"), i.push(" *"), u.exported && i.push(" as ", e.call(n, "exported")), i.push(Lf(e, t, n), o), pd(i);

          case "ExportNamespaceSpecifier":
            return pd(["* as ", e.call(n, "exported")]);

          case "ExportDefaultSpecifier":
            return e.call(n, "exported");

          case "ImportDeclaration":
            return i.push("import"), u.importKind && "value" !== u.importKind && i.push(" ", u.importKind), u.specifiers && u.specifiers.length > 0 ? (i.push(Rf(e, t, n)), i.push(Lf(e, t, n))) : u.importKind && "type" === u.importKind || /{\s*}/.test(t.originalText.slice(t.locStart(u), t.locStart(u.source))) ? i.push(" {}", Lf(e, t, n)) : i.push(" ", e.call(n, "source")), Array.isArray(u.attributes) && 0 !== u.attributes.length && i.push(" with ", pd(e.map(n, "attributes"))), i.push(o), pd(i);

          case "ImportAttribute":
            return pd([e.call(n, "key"), ": ", e.call(n, "value")]);

          case "Import":
            return "import";

          case "TSModuleBlock":
          case "BlockStatement":
            {
              var _r62 = e.call(function (e) {
                return $f(e, t, n);
              }, "body"),
                  _a21 = u.body.some(function (e) {
                return "EmptyStatement" !== e.type;
              }),
                  _s10 = u.directives && u.directives.length > 0,
                  _l10 = e.getParentNode(),
                  _c9 = e.getParentNode(1);

              return _a21 || _s10 || qd(u) || "ArrowFunctionExpression" !== _l10.type && "FunctionExpression" !== _l10.type && "FunctionDeclaration" !== _l10.type && "ObjectMethod" !== _l10.type && "ClassMethod" !== _l10.type && "ClassPrivateMethod" !== _l10.type && "ForStatement" !== _l10.type && "WhileStatement" !== _l10.type && "DoWhileStatement" !== _l10.type && "DoExpression" !== _l10.type && ("CatchClause" !== _l10.type || _c9.finalizer) && "TSModuleDeclaration" !== _l10.type ? (i.push("{"), _s10 && e.each(function (e) {
                i.push(yd(pd([hd, n(e), o]))), ld(t.originalText, e.getValue(), t.locEnd) && i.push(hd);
              }, "directives"), _a21 && i.push(yd(pd([hd, _r62]))), i.push(hi.printDanglingComments(e, t)), i.push(hd, "}"), pd(i)) : "{}";
            }

          case "ReturnStatement":
            return pd(["return", gh(e, t, n)]);

          case "NewExpression":
          case "ImportExpression":
          case "OptionalCallExpression":
          case "CallExpression":
            {
              var _r63 = "NewExpression" === u.type,
                  _o23 = "ImportExpression" === u.type,
                  _a22 = _f(e),
                  _i41 = _o23 ? [u.source] : u.arguments;

              if (!_o23 && !_r63 && "Identifier" === u.callee.type && ("require" === u.callee.name || "define" === u.callee.name) || 1 === _i41.length && Af(_i41[0], t.originalText, t) || !_r63 && vf(u, e.getParentNode())) return pd([_r63 ? "new " : "", e.call(n, "callee"), _a22, If(e, t, n), pd(["(", _o23 ? e.call(n, "source") : dd(", ", e.map(n, "arguments")), ")"])]);

              var _s11 = u.callee && "Identifier" === u.callee.type && Vd(u.callee.trailingComments);

              if (_s11 && (u.callee.trailingComments[0].printed = !0), !_o23 && !_r63 && df(u.callee) && !e.call(function (e) {
                return Sc(e, t);
              }, "callee")) return kp(e, t, n);

              var _l11 = pd([_r63 ? "new " : "", _o23 ? "import" : e.call(n, "callee"), _a22, _s11 ? "/*:: ".concat(u.callee.trailingComments[0].value.slice(2).trim(), " */") : "", If(e, t, n), Qc(e, t, n)]);

              return _o23 || Qd(u.callee) ? Dd(_l11) : _l11;
            }

          case "ObjectTypeInternalSlot":
            return pd([u.static ? "static " : "", "[[", e.call(n, "id"), "]]", _f(e), u.method ? "" : ": ", e.call(n, "value")]);

          case "ObjectExpression":
          case "ObjectPattern":
          case "ObjectTypeAnnotation":
          case "TSInterfaceBody":
          case "TSTypeLiteral":
          case "RecordExpression":
            {
              var _r64;

              _r64 = "TSTypeLiteral" === u.type ? "members" : "TSInterfaceBody" === u.type ? "body" : "properties";

              var _a23 = "ObjectTypeAnnotation" === u.type,
                  _i42 = [];

              _a23 && _i42.push("indexers", "callProperties", "internalSlots"), _i42.push(_r64);

              var _s12 = _i42.map(function (e) {
                return u[e][0];
              }).sort(function (e, n) {
                return t.locStart(e) - t.locStart(n);
              })[0],
                  _l12 = e.getParentNode(0),
                  _c10 = _a23 && _l12 && ("InterfaceDeclaration" === _l12.type || "DeclareInterface" === _l12.type || "DeclareClass" === _l12.type) && "body" === e.getName(),
                  _p8 = "TSInterfaceBody" === u.type || _c10 || "ObjectPattern" === u.type && "FunctionDeclaration" !== _l12.type && "FunctionExpression" !== _l12.type && "ArrowFunctionExpression" !== _l12.type && "ObjectMethod" !== _l12.type && "ClassMethod" !== _l12.type && "ClassPrivateMethod" !== _l12.type && "AssignmentPattern" !== _l12.type && "CatchClause" !== _l12.type && u.properties.some(function (e) {
                return e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type);
              }) || "ObjectPattern" !== u.type && _s12 && ed(t.originalText, t.locStart(u), t.locStart(_s12)),
                  _d7 = _c10 ? ";" : "TSInterfaceBody" === u.type || "TSTypeLiteral" === u.type ? Ad(o, ";") : ",",
                  _f6 = "RecordExpression" === u.type ? "#{" : u.exact ? "{|" : "{",
                  _h6 = u.exact ? "|}" : "}",
                  _m6 = [];

              _i42.forEach(function (r) {
                e.each(function (e) {
                  var r = e.getValue();

                  _m6.push({
                    node: r,
                    printed: n(e),
                    loc: t.locStart(r)
                  });
                }, r);
              });

              var _g5 = [];

              var _D5 = _m6.sort(function (e, t) {
                return e.loc - t.loc;
              }).map(function (e) {
                var n = pd(_g5.concat(Dd(e.printed)));
                return _g5 = [_d7, fd], "TSPropertySignature" !== e.node.type && "TSMethodSignature" !== e.node.type && "TSConstructSignatureDeclaration" !== e.node.type || !ad(e.node) || _g5.shift(), ld(t.originalText, e.node, t.locEnd) && _g5.push(hd), n;
              });

              if (u.inexact) {
                var _n45;

                if (qd(u)) {
                  var _r65 = !u.comments.every(Us.isBlockComment),
                      _o24 = hi.printDanglingComments(e, t, !0);

                  _n45 = pd([_o24, _r65 || Zp(t.originalText, t.locEnd(u.comments[u.comments.length - 1])) ? hd : fd, "..."]);
                } else _n45 = "...";

                _D5.push(pd(_g5.concat(_n45)));
              }

              var _y2 = td(u[_r64]),
                  _E2 = !(u.inexact || _y2 && "RestElement" === _y2.type);

              var _C2;

              if (0 === _D5.length) {
                if (!qd(u)) return pd([_f6, _h6, Gf(e, t, n)]);
                _C2 = Dd(pd([_f6, hi.printDanglingComments(e, t), md, _h6, _f(e), Gf(e, t, n)]));
              } else _C2 = pd([_f6, yd(pd([t.bracketSpacing ? fd : md, pd(_D5)])), Ad(_E2 && ("," !== _d7 || Nf(t)) ? _d7 : ""), pd([t.bracketSpacing ? fd : md, _h6]), _f(e), Gf(e, t, n)]);

              return e.match(function (e) {
                return "ObjectPattern" === e.type && !e.decorators;
              }, function (e, t, n) {
                return hh(e) && ("params" === t || "parameters" === t) && 0 === n;
              }) || e.match(fh, function (e, t) {
                return "typeAnnotation" === t;
              }, function (e, t) {
                return "typeAnnotation" === t;
              }, function (e, t, n) {
                return hh(e) && ("params" === t || "parameters" === t) && 0 === n;
              }) ? _C2 : Dd(_C2, {
                shouldBreak: _p8
              });
            }

          case "ObjectProperty":
          case "Property":
            return u.method || "get" === u.kind || "set" === u.kind ? zf(e, t, n) : (u.shorthand ? i.push(e.call(n, "value")) : i.push(lh(u.key, Uf(e, t, n), ":", u.value, e.call(n, "value"), t)), pd(i));

          case "ClassMethod":
          case "ClassPrivateMethod":
          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "TSDeclareMethod":
            return u.decorators && 0 !== u.decorators.length && i.push(Wf(e, t, n)), u.accessibility && i.push(u.accessibility + " "), u.static && i.push("static "), ("TSAbstractMethodDefinition" === u.type || u.abstract) && i.push("abstract "), i.push(zf(e, t, n)), pd(i);

          case "ObjectMethod":
            return zf(e, t, n);

          case "Decorator":
            return pd(["@", e.call(n, "expression"), e.call(n, "callee")]);

          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            {
              var _r66 = "TupleExpression" === u.type ? "#[" : "[",
                  _o25 = "]";

              if (0 === u.elements.length) qd(u) ? i.push(Dd(pd([_r66, hi.printDanglingComments(e, t), md, _o25]))) : i.push(_r66, _o25);else {
                var _a24 = td(u.elements),
                    _s13 = !(_a24 && "RestElement" === _a24.type),
                    _l13 = _s13 && null === _a24,
                    _c11 = !t.__inJestEach && u.elements.length > 1 && u.elements.every(function (e, t, n) {
                  var r = e && e.type;
                  if ("ArrayExpression" !== r && "ObjectExpression" !== r) return !1;
                  var u = n[t + 1];
                  if (u && r !== u.type) return !1;
                  var o = "ArrayExpression" === r ? "elements" : "properties";
                  return e[o] && e[o].length > 1;
                });

                i.push(Dd(pd([_r66, yd(pd([md, mh(e, t, "elements", n)])), _l13 ? "," : "", Ad(_s13 && !_l13 && Nf(t) ? "," : ""), hi.printDanglingComments(e, t, !0), md, _o25]), {
                  shouldBreak: _c11
                }));
              }
              return i.push(_f(e), Gf(e, t, n)), pd(i);
            }

          case "SequenceExpression":
            {
              var _t80 = e.getParentNode(0);

              if ("ExpressionStatement" === _t80.type || "ForStatement" === _t80.type) {
                var _t81 = [];
                return e.each(function (e) {
                  0 === e.getName() ? _t81.push(n(e)) : _t81.push(",", yd(pd([fd, n(e)])));
                }, "expressions"), Dd(pd(_t81));
              }

              return Dd(pd([dd(pd([",", fd]), e.map(n, "expressions"))]));
            }

          case "ThisExpression":
            return "this";

          case "Super":
            return "super";

          case "NullLiteral":
            return "null";

          case "RegExpLiteral":
            return dh(u);

          case "NumericLiteral":
            return ud(u.extra.raw);

          case "DecimalLiteral":
            return ud(u.value) + "m";

          case "BigIntLiteral":
            return (u.bigint || u.extra.raw).toLowerCase();

          case "BooleanLiteral":
          case "StringLiteral":
          case "Literal":
            return u.regex ? dh(u.regex) : u.bigint ? u.raw.toLowerCase() : "number" == typeof u.value ? ud(u.raw) : "string" != typeof u.value ? "" + u.value : ph(u, t);

          case "Directive":
            return e.call(n, "value");

          case "DirectiveLiteral":
            return ph(u, t);

          case "UnaryExpression":
            return i.push(u.operator), /[a-z]$/.test(u.operator) && i.push(" "), u.argument.comments && u.argument.comments.length > 0 ? i.push(Dd(pd(["(", yd(pd([md, e.call(n, "argument")])), md, ")"]))) : i.push(e.call(n, "argument")), pd(i);

          case "UpdateExpression":
            return i.push(e.call(n, "argument"), u.operator), u.prefix && i.reverse(), pd(i);

          case "ConditionalExpression":
            return Kp(e, t, n, {
              beforeParts: function beforeParts() {
                return [e.call(n, "test")];
              },
              afterParts: function afterParts(e) {
                return [e ? md : ""];
              },
              shouldCheckJsx: !0,
              conditionalNodeType: "ConditionalExpression",
              consequentNodePropertyName: "consequent",
              alternateNodePropertyName: "alternate",
              testNodePropertyNames: ["test"]
            });

          case "VariableDeclaration":
            {
              var _t82 = e.map(function (e) {
                return n(e);
              }, "declarations"),
                  _r67 = e.getParentNode(),
                  _a25 = "ForStatement" === _r67.type || "ForInStatement" === _r67.type || "ForOfStatement" === _r67.type,
                  _s14 = u.declarations.some(function (e) {
                return e.init;
              });

              var _l14;

              return 1 !== _t82.length || u.declarations[0].comments ? _t82.length > 0 && (_l14 = yd(_t82[0])) : _l14 = _t82[0], i = [u.declare ? "declare " : "", u.kind, _l14 ? pd([" ", _l14]) : "", yd(pd(_t82.slice(1).map(function (e) {
                return pd([",", _s14 && !_a25 ? hd : fd, e]);
              })))], _a25 && _r67.body !== u || i.push(o), Dd(pd(i));
            }

          case "TSTypeAliasDeclaration":
            {
              u.declare && i.push("declare ");

              var _r68 = sh(u.id, u.typeAnnotation, u.typeAnnotation && e.call(n, "typeAnnotation"), t);

              return i.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", _r68, o), Dd(pd(i));
            }

          case "VariableDeclarator":
            return lh(u.id, e.call(n, "id"), " =", u.init, u.init && e.call(n, "init"), t);

          case "WithStatement":
            return Dd(pd(["with (", e.call(n, "object"), ")", ch(u.body, e.call(n, "body"))]));

          case "IfStatement":
            {
              var _r69 = ch(u.consequent, e.call(n, "consequent")),
                  _o26 = Dd(pd(["if (", Dd(pd([yd(pd([md, e.call(n, "test")])), md])), ")", _r69]));

              if (i.push(_o26), u.alternate) {
                var _r70 = Hd(u.consequent) && u.consequent.comments.some(function (e) {
                  return e.trailing && !Us.isBlockComment(e);
                }) || Bf(u),
                    _o27 = "BlockStatement" === u.consequent.type && !_r70;

                i.push(_o27 ? " " : hd), qd(u) && i.push(hi.printDanglingComments(e, t, !0), _r70 ? hd : " "), i.push("else", Dd(ch(u.alternate, e.call(n, "alternate"), "IfStatement" === u.alternate.type)));
              }

              return pd(i);
            }

          case "ForStatement":
            {
              var _r71 = ch(u.body, e.call(n, "body")),
                  _o28 = hi.printDanglingComments(e, t, !0),
                  _a26 = _o28 ? pd([_o28, md]) : "";

              return u.init || u.test || u.update ? pd([_a26, Dd(pd(["for (", Dd(pd([yd(pd([md, e.call(n, "init"), ";", fd, e.call(n, "test"), ";", fd, e.call(n, "update")])), md])), ")", _r71]))]) : pd([_a26, Dd(pd(["for (;;)", _r71]))]);
            }

          case "WhileStatement":
            return Dd(pd(["while (", Dd(pd([yd(pd([md, e.call(n, "test")])), md])), ")", ch(u.body, e.call(n, "body"))]));

          case "ForInStatement":
            return Dd(pd([u.each ? "for each (" : "for (", e.call(n, "left"), " in ", e.call(n, "right"), ")", ch(u.body, e.call(n, "body"))]));

          case "ForOfStatement":
            return Dd(pd(["for", u.await ? " await" : "", " (", e.call(n, "left"), " of ", e.call(n, "right"), ")", ch(u.body, e.call(n, "body"))]));

          case "DoWhileStatement":
            {
              var _t83 = ch(u.body, e.call(n, "body")),
                  _r72 = Dd(pd(["do", _t83]));

              return i = [_r72], "BlockStatement" === u.body.type ? i.push(" ") : i.push(hd), i.push("while ("), i.push(Dd(pd([yd(pd([md, e.call(n, "test")])), md])), ")", o), pd(i);
            }

          case "DoExpression":
            return pd(["do ", e.call(n, "body")]);

          case "BreakStatement":
            return i.push("break"), u.label && i.push(" ", e.call(n, "label")), i.push(o), pd(i);

          case "ContinueStatement":
            return i.push("continue"), u.label && i.push(" ", e.call(n, "label")), i.push(o), pd(i);

          case "LabeledStatement":
            return "EmptyStatement" === u.body.type ? pd([e.call(n, "label"), ":;"]) : pd([e.call(n, "label"), ": ", e.call(n, "body")]);

          case "TryStatement":
            return pd(["try ", e.call(n, "block"), u.handler ? pd([" ", e.call(n, "handler")]) : "", u.finalizer ? pd([" finally ", e.call(n, "finalizer")]) : ""]);

          case "CatchClause":
            if (u.param) {
              var _r73 = u.param.comments && u.param.comments.some(function (e) {
                return !Us.isBlockComment(e) || e.leading && Zp(t.originalText, t.locEnd(e)) || e.trailing && Zp(t.originalText, t.locStart(e), {
                  backwards: !0
                });
              }),
                  _o29 = e.call(n, "param");

              return pd(["catch ", pd(_r73 ? ["(", yd(pd([md, _o29])), md, ") "] : ["(", _o29, ") "]), e.call(n, "body")]);
            }

            return pd(["catch ", e.call(n, "body")]);

          case "ThrowStatement":
            return pd(["throw", gh(e, t, n)]);

          case "SwitchStatement":
            return pd([Dd(pd(["switch (", yd(pd([md, e.call(n, "discriminant")])), md, ")"])), " {", u.cases.length > 0 ? yd(pd([hd, dd(hd, e.map(function (e) {
              var r = e.getValue();
              return pd([e.call(n), u.cases.indexOf(r) !== u.cases.length - 1 && ld(t.originalText, r, t.locEnd) ? hd : ""]);
            }, "cases"))])) : "", hd, "}"]);

          case "SwitchCase":
            {
              u.test ? i.push("case ", e.call(n, "test"), ":") : i.push("default:");

              var _r74 = u.consequent.filter(function (e) {
                return "EmptyStatement" !== e.type;
              });

              if (_r74.length > 0) {
                var _u21 = e.call(function (e) {
                  return $f(e, t, n);
                }, "consequent");

                i.push(1 === _r74.length && "BlockStatement" === _r74[0].type ? pd([" ", _u21]) : yd(pd([hd, _u21])));
              }

              return pd(i);
            }

          case "DebuggerStatement":
            return pd(["debugger", o]);

          case "JSXAttribute":
            if (i.push(e.call(n, "name")), u.value) {
              var _r75;

              if (Cf(u.value)) {
                var _e102 = Tf(u.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"');

                var _n46 = sd(_e102, t.jsxSingleQuote ? "'" : '"'),
                    _o30 = "'" === _n46 ? "&apos;" : "&quot;";

                _e102 = _e102.slice(1, -1).replace(new RegExp(_n46, "g"), _o30), _r75 = pd([_n46, _e102, _n46]);
              } else _r75 = e.call(n, "value");

              i.push("=", _r75);
            }

            return pd(i);

          case "JSXIdentifier":
            return "" + u.name;

          case "JSXNamespacedName":
            return dd(":", [e.call(n, "namespace"), e.call(n, "name")]);

          case "JSXMemberExpression":
            return dd(".", [e.call(n, "object"), e.call(n, "property")]);

          case "TSQualifiedName":
            return dd(".", [e.call(n, "left"), e.call(n, "right")]);

          case "JSXSpreadAttribute":
          case "JSXSpreadChild":
            return pd(["{", e.call(function (e) {
              var r = pd(["...", n(e)]),
                  u = e.getValue();
              return u.comments && u.comments.length && Dh(e) ? pd([yd(pd([md, hi.printComments(e, function () {
                return r;
              }, t)])), md]) : r;
            }, "JSXSpreadAttribute" === u.type ? "argument" : "expression"), "}"]);

          case "JSXExpressionContainer":
            {
              var _t84 = e.getParentNode(0),
                  _r76 = u.expression.comments && u.expression.comments.length > 0,
                  _o31 = "JSXEmptyExpression" === u.expression.type || !_r76 && ("ArrayExpression" === u.expression.type || "ObjectExpression" === u.expression.type || "ArrowFunctionExpression" === u.expression.type || "CallExpression" === u.expression.type || "OptionalCallExpression" === u.expression.type || "FunctionExpression" === u.expression.type || "TemplateLiteral" === u.expression.type || "TaggedTemplateExpression" === u.expression.type || "DoExpression" === u.expression.type || of(_t84) && ("ConditionalExpression" === u.expression.type || Kd(u.expression)));

              return Dd(_o31 ? pd(["{", e.call(n, "expression"), vd, "}"]) : pd(["{", yd(pd([md, e.call(n, "expression")])), md, vd, "}"]));
            }

          case "JSXFragment":
          case "JSXElement":
            {
              var _r77 = hi.printComments(e, function () {
                return function (e, t, n) {
                  var r = e.getValue();
                  if ("JSXElement" === r.type && Zd(r)) return pd([e.call(n, "openingElement"), e.call(n, "closingElement")]);
                  var u = "JSXElement" === r.type ? e.call(n, "openingElement") : e.call(n, "openingFragment"),
                      o = "JSXElement" === r.type ? e.call(n, "closingElement") : e.call(n, "closingFragment");
                  if (1 === r.children.length && "JSXExpressionContainer" === r.children[0].type && ("TemplateLiteral" === r.children[0].expression.type || "TaggedTemplateExpression" === r.children[0].expression.type)) return pd([u, pd(e.map(n, "children")), o]);
                  r.children = r.children.map(function (e) {
                    return af(e) ? {
                      type: "JSXText",
                      value: " ",
                      raw: " "
                    } : e;
                  });
                  var a = r.children.filter(of).length > 0,
                      i = r.children.filter(function (e) {
                    return "JSXExpressionContainer" === e.type;
                  }).length > 1,
                      s = "JSXElement" === r.type && r.openingElement.attributes.length > 1;
                  var l = xd(u) || a || s || i;

                  var c = "mdx" === e.getParentNode().rootMarker,
                      p = t.singleQuote ? "{' '}" : '{" "}',
                      d = c ? pd([" "]) : Ad(pd([p, md]), " "),
                      f = r.openingElement && r.openingElement.name && "fbt" === r.openingElement.name.name,
                      h = function (e, t, n, r, u) {
                    var o = e.getValue(),
                        a = [];
                    return e.map(function (e, t) {
                      var i = e.getValue();

                      if (lf(i)) {
                        var _e103 = Tf(i);

                        if (cf(i)) {
                          var _n47 = _e103.split(wf);

                          if ("" === _n47[0]) {
                            if (a.push(""), _n47.shift(), /\n/.test(_n47[0])) {
                              var _e104 = o.children[t + 1];
                              a.push(ah(u, _n47[1], i, _e104));
                            } else a.push(r);

                            _n47.shift();
                          }

                          var _s15;

                          if ("" === td(_n47) && (_n47.pop(), _s15 = _n47.pop()), 0 === _n47.length) return;
                          if (_n47.forEach(function (e, t) {
                            t % 2 == 1 ? a.push(fd) : a.push(e);
                          }), void 0 !== _s15) {
                            if (/\n/.test(_s15)) {
                              var _e105 = o.children[t + 1];
                              a.push(ah(u, td(a), i, _e105));
                            } else a.push(r);
                          } else {
                            var _e106 = o.children[t + 1];
                            a.push(oh(u, td(a), i, _e106));
                          }
                        } else /\n/.test(_e103) ? _e103.match(/\n/g).length > 1 && (a.push(""), a.push(hd)) : (a.push(""), a.push(r));
                      } else {
                        var _r78 = n(e);

                        a.push(_r78);
                        var _s16 = o.children[t + 1];

                        if (_s16 && cf(_s16)) {
                          var _e107 = Tf(_s16).trim().split(wf)[0];
                          a.push(oh(u, _e107, i, _s16));
                        } else a.push(hd);
                      }
                    }, "children"), a;
                  }(e, 0, n, d, f),
                      m = r.children.some(function (e) {
                    return cf(e);
                  });

                  for (var _e108 = h.length - 2; _e108 >= 0; _e108--) {
                    var _t85 = "" === h[_e108] && "" === h[_e108 + 1],
                        _n48 = h[_e108] === hd && "" === h[_e108 + 1] && h[_e108 + 2] === hd,
                        _r79 = (h[_e108] === md || h[_e108] === hd) && "" === h[_e108 + 1] && h[_e108 + 2] === d,
                        _u22 = h[_e108] === d && "" === h[_e108 + 1] && (h[_e108 + 2] === md || h[_e108 + 2] === hd),
                        _o32 = h[_e108] === d && "" === h[_e108 + 1] && h[_e108 + 2] === d,
                        _a27 = h[_e108] === md && "" === h[_e108 + 1] && h[_e108 + 2] === hd || h[_e108] === hd && "" === h[_e108 + 1] && h[_e108 + 2] === md;

                    _n48 && m || _t85 || _r79 || _o32 || _a27 ? h.splice(_e108, 2) : _u22 && h.splice(_e108 + 1, 2);
                  }

                  for (; h.length && (Sd(td(h)) || wd(td(h)));) {
                    h.pop();
                  }

                  for (; h.length && (Sd(h[0]) || wd(h[0])) && (Sd(h[1]) || wd(h[1]));) {
                    h.shift(), h.shift();
                  }

                  var g = [];
                  h.forEach(function (e, t) {
                    if (e === d) {
                      if (1 === t && "" === h[t - 1]) return 2 === h.length ? void g.push(p) : void g.push(pd([p, hd]));
                      if (t === h.length - 1) return void g.push(p);
                      if ("" === h[t - 1] && h[t - 2] === hd) return void g.push(p);
                    }

                    g.push(e), xd(e) && (l = !0);
                  });
                  var D = m ? bd(g) : Dd(pd(g), {
                    shouldBreak: !0
                  });
                  if (c) return D;
                  var y = Dd(pd([u, yd(pd([hd, D])), hd, o]));
                  if (l) return y;
                  return Cd([Dd(pd([u, pd(h), o])), y]);
                }(e, t, n);
              }, t);

              return function (e, t, n) {
                var r = e.getParentNode();
                if (!r) return t;
                if ({
                  ArrayExpression: !0,
                  JSXAttribute: !0,
                  JSXElement: !0,
                  JSXExpressionContainer: !0,
                  JSXFragment: !0,
                  ExpressionStatement: !0,
                  CallExpression: !0,
                  OptionalCallExpression: !0,
                  ConditionalExpression: !0,
                  JsExpressionRoot: !0
                }[r.type]) return t;
                var u = e.match(void 0, function (e) {
                  return "ArrowFunctionExpression" === e.type;
                }, Qd, function (e) {
                  return "JSXExpressionContainer" === e.type;
                }),
                    o = Sc(e, n);
                return Dd(pd([o ? "" : Ad("("), yd(pd([md, t])), md, o ? "" : Ad(")")]), {
                  shouldBreak: u
                });
              }(e, _r77, t);
            }

          case "JSXOpeningElement":
            {
              var _r80 = e.getValue(),
                  _u23 = _r80.name && _r80.name.comments && _r80.name.comments.length > 0 || _r80.typeParameters && _r80.typeParameters.comments && _r80.typeParameters.comments.length > 0;

              if (_r80.selfClosing && !_r80.attributes.length && !_u23) return pd(["<", e.call(n, "name"), e.call(n, "typeParameters"), " />"]);
              if (_r80.attributes && 1 === _r80.attributes.length && _r80.attributes[0].value && Cf(_r80.attributes[0].value) && !_r80.attributes[0].value.value.includes("\n") && !_u23 && (!_r80.attributes[0].comments || !_r80.attributes[0].comments.length)) return Dd(pd(["<", e.call(n, "name"), e.call(n, "typeParameters"), " ", pd(e.map(n, "attributes")), _r80.selfClosing ? " />" : ">"]));

              var _o33 = _r80.attributes.length && Hd(td(_r80.attributes)),
                  _a28 = !_r80.attributes.length && !_u23 || t.jsxBracketSameLine && (!_u23 || _r80.attributes.length) && !_o33,
                  _i43 = _r80.attributes && _r80.attributes.some(function (e) {
                return e.value && Cf(e.value) && e.value.value.includes("\n");
              });

              return Dd(pd(["<", e.call(n, "name"), e.call(n, "typeParameters"), pd([yd(pd(e.map(function (e) {
                return pd([fd, n(e)]);
              }, "attributes"))), _r80.selfClosing ? fd : _a28 ? ">" : md]), _r80.selfClosing ? "/>" : _a28 ? "" : ">"]), {
                shouldBreak: _i43
              });
            }

          case "JSXClosingElement":
            return pd(["</", e.call(n, "name"), ">"]);

          case "JSXOpeningFragment":
          case "JSXClosingFragment":
            {
              var _n49 = u.comments && u.comments.length,
                  _r81 = _n49 && !u.comments.every(Us.isBlockComment),
                  _o34 = "JSXOpeningFragment" === u.type;

              return pd([_o34 ? "<" : "</", yd(pd([_r81 ? hd : _n49 && !_o34 ? " " : "", hi.printDanglingComments(e, t, !0)])), _r81 ? hd : "", ">"]);
            }

          case "JSXText":
            throw new Error("JSXTest should be handled by JSXElement");

          case "JSXEmptyExpression":
            {
              var _n50 = u.comments && !u.comments.every(Us.isBlockComment);

              return pd([hi.printDanglingComments(e, t, !_n50), _n50 ? hd : ""]);
            }

          case "ClassBody":
            return u.comments || 0 !== u.body.length ? pd(["{", u.body.length > 0 ? yd(pd([hd, e.call(function (e) {
              return $f(e, t, n);
            }, "body")])) : hi.printDanglingComments(e, t), hd, "}"]) : "{}";

          case "ClassProperty":
          case "TSAbstractClassProperty":
          case "ClassPrivateProperty":
            {
              u.decorators && 0 !== u.decorators.length && i.push(Wf(e, t, n)), u.accessibility && i.push(u.accessibility + " "), u.declare && i.push("declare "), u.static && i.push("static "), ("TSAbstractClassProperty" === u.type || u.abstract) && i.push("abstract "), u.readonly && i.push("readonly ");

              var _r82 = jd(u);

              return _r82 && i.push(_r82), i.push(Uf(e, t, n), _f(e), Gf(e, t, n)), u.value && i.push(" =", sh(u.key, u.value, e.call(n, "value"), t)), i.push(o), Dd(pd(i));
            }

          case "ClassDeclaration":
          case "ClassExpression":
            return u.declare && i.push("declare "), i.push(pd(uh(e, t, n))), pd(i);

          case "TSInterfaceHeritage":
          case "TSExpressionWithTypeArguments":
            return i.push(e.call(n, "expression")), u.typeParameters && i.push(e.call(n, "typeParameters")), pd(i);

          case "TemplateElement":
            return dd(gd, u.value.raw.split(/\r?\n/g));

          case "TemplateLiteral":
            {
              var _r83 = e.getParentNode();

              if (uf(u, _r83)) {
                var _r84 = function (e, t, n) {
                  var r = e.getNode(),
                      u = r.quasis[0].value.raw.trim().split(/\s*\|\s*/);

                  if (u.length > 1 || u.some(function (e) {
                    return 0 !== e.length;
                  })) {
                    var _ret3 = function () {
                      t.__inJestEach = !0;
                      var o = e.map(n, "expressions");
                      t.__inJestEach = !1;
                      var a = [],
                          i = o.map(function (e) {
                        return "${" + kd(e, Object.assign({}, t, {
                          printWidth: 1 / 0,
                          endOfLine: "lf"
                        })).formatted + "}";
                      }),
                          s = [{
                        hasLineBreak: !1,
                        cells: []
                      }];

                      for (var _e109 = 1; _e109 < r.quasis.length; _e109++) {
                        var _t86 = s[s.length - 1],
                            _n51 = i[_e109 - 1];
                        _t86.cells.push(_n51), _n51.includes("\n") && (_t86.hasLineBreak = !0), r.quasis[_e109].value.raw.includes("\n") && s.push({
                          hasLineBreak: !1,
                          cells: []
                        });
                      }

                      var l = Math.max.apply(Math, [u.length].concat(_toConsumableArray(s.map(function (e) {
                        return e.cells.length;
                      })))),
                          c = Array.from({
                        length: l
                      }).fill(0),
                          p = [{
                        cells: u
                      }].concat(_toConsumableArray(s.filter(function (e) {
                        return 0 !== e.cells.length;
                      })));

                      var _iterator39 = _createForOfIteratorHelper(p.filter(function (e) {
                        return !e.hasLineBreak;
                      })),
                          _step39;

                      try {
                        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                          var _e110 = _step39.value.cells;

                          _e110.forEach(function (e, t) {
                            c[t] = Math.max(c[t], nd(e));
                          });
                        }
                      } catch (err) {
                        _iterator39.e(err);
                      } finally {
                        _iterator39.f();
                      }

                      return {
                        v: (a.push(vd, "`", yd(pd([hd, dd(hd, p.map(function (e) {
                          return dd(" | ", e.cells.map(function (t, n) {
                            return e.hasLineBreak ? t : t + " ".repeat(c[n] - nd(t));
                          }));
                        }))])), hd, "`"), pd(a))
                      };
                    }();

                    if (_typeof(_ret3) === "object") return _ret3.v;
                  }
                }(e, t, n);

                if (_r84) return _r84;
              }

              var _o35 = e.map(n, "expressions");

              var _a29 = Ef(u);

              return _a29 && (_o35 = _o35.map(function (e) {
                return kd(e, Object.assign({}, t, {
                  printWidth: 1 / 0
                })).formatted;
              })), i.push(vd, "`"), e.each(function (e) {
                var r = e.getName();

                if (i.push(n(e)), r < _o35.length) {
                  var _n52 = t.tabWidth,
                      _s17 = e.getValue(),
                      _l15 = id(_s17.value.raw, _n52);

                  var _c12 = _o35[r];
                  _a29 || (u.expressions[r].comments && u.expressions[r].comments.length || "MemberExpression" === u.expressions[r].type || "OptionalMemberExpression" === u.expressions[r].type || "ConditionalExpression" === u.expressions[r].type || "SequenceExpression" === u.expressions[r].type || "TSAsExpression" === u.expressions[r].type || Kd(u.expressions[r])) && (_c12 = pd([yd(pd([md, _c12])), md]));

                  var _p9 = 0 === _l15 && _s17.value.raw.endsWith("\n") ? Ed(-1 / 0, _c12) : Fd(_c12, _l15, _n52);

                  i.push(Dd(pd(["${", _p9, vd, "}"])));
                }
              }, "quasis"), i.push("`"), pd(i);
            }

          case "TaggedTemplateExpression":
            return pd([e.call(n, "tag"), e.call(n, "typeParameters"), e.call(n, "quasi")]);

          case "Node":
          case "Printable":
          case "SourceLocation":
          case "Position":
          case "Statement":
          case "Function":
          case "Pattern":
          case "Expression":
          case "Declaration":
          case "Specifier":
          case "NamedSpecifier":
          case "Comment":
          case "MemberTypeAnnotation":
          case "Type":
            throw new Error("unprintable type: " + JSON.stringify(u.type));

          case "TypeAnnotation":
          case "TSTypeAnnotation":
            return u.typeAnnotation ? e.call(n, "typeAnnotation") : "";

          case "TSNamedTupleMember":
            return pd([e.call(n, "label"), u.optional ? "?" : "", ": ", e.call(n, "elementType")]);

          case "TSTupleType":
          case "TupleTypeAnnotation":
            {
              var _r85 = "TSTupleType" === u.type ? "elementTypes" : "types",
                  _o36 = u[_r85].length > 0 && "TSRestType" === td(u[_r85]).type;

              return Dd(pd(["[", yd(pd([md, mh(e, t, _r85, n)])), Ad(Nf(t, "all") && !_o36 ? "," : ""), hi.printDanglingComments(e, t, !0), md, "]"]));
            }

          case "ExistsTypeAnnotation":
            return "*";

          case "EmptyTypeAnnotation":
            return "empty";

          case "AnyTypeAnnotation":
            return "any";

          case "MixedTypeAnnotation":
            return "mixed";

          case "ArrayTypeAnnotation":
            return pd([e.call(n, "elementType"), "[]"]);

          case "BooleanTypeAnnotation":
            return "boolean";

          case "BooleanLiteralTypeAnnotation":
            return "" + u.value;

          case "DeclareClass":
            return Zf(e, uh(e, t, n));

          case "TSDeclareFunction":
            return pd([u.declare ? "declare " : "", Yf(e, n, t), o]);

          case "DeclareFunction":
            return Zf(e, ["function ", e.call(n, "id"), u.predicate ? " " : "", e.call(n, "predicate"), o]);

          case "DeclareModule":
            return Zf(e, ["module ", e.call(n, "id"), " ", e.call(n, "body")]);

          case "DeclareModuleExports":
            return Zf(e, ["module.exports", ": ", e.call(n, "typeAnnotation"), o]);

          case "DeclareVariable":
            return Zf(e, ["var ", e.call(n, "id"), o]);

          case "DeclareExportAllDeclaration":
            return pd(["declare export *", Lf(e, t, n)]);

          case "DeclareOpaqueType":
          case "OpaqueType":
            return i.push("opaque type ", e.call(n, "id"), e.call(n, "typeParameters")), u.supertype && i.push(": ", e.call(n, "supertype")), u.impltype && i.push(" = ", e.call(n, "impltype")), i.push(o), "DeclareOpaqueType" === u.type ? Zf(e, i) : pd(i);

          case "EnumDeclaration":
            return pd(["enum ", e.call(n, "id"), " ", e.call(n, "body")]);

          case "EnumBooleanBody":
          case "EnumNumberBody":
          case "EnumStringBody":
          case "EnumSymbolBody":
            if ("EnumSymbolBody" === u.type || u.explicitType) {
              var _e111 = null;

              switch (u.type) {
                case "EnumBooleanBody":
                  _e111 = "boolean";
                  break;

                case "EnumNumberBody":
                  _e111 = "number";
                  break;

                case "EnumStringBody":
                  _e111 = "string";
                  break;

                case "EnumSymbolBody":
                  _e111 = "symbol";
              }

              i.push("of ", _e111, " ");
            }

            return 0 === u.members.length ? i.push(Dd(pd(["{", hi.printDanglingComments(e, t), md, "}"]))) : i.push(Dd(pd(["{", yd(pd([hd, mh(e, t, "members", n), Nf(t) ? "," : ""])), hi.printDanglingComments(e, t, !0), hd, "}"]))), pd(i);

          case "EnumBooleanMember":
          case "EnumNumberMember":
          case "EnumStringMember":
            return pd([e.call(n, "id"), " = ", "object" == _typeof(u.init) ? e.call(n, "init") : String(u.init)]);

          case "EnumDefaultedMember":
            return e.call(n, "id");

          case "FunctionTypeAnnotation":
          case "TSFunctionType":
            {
              var _r86 = e.getParentNode(0),
                  _o37 = e.getParentNode(1),
                  _a30 = e.getParentNode(2);

              var _s18 = "TSFunctionType" === u.type || !(("ObjectTypeProperty" === _r86.type || "ObjectTypeInternalSlot" === _r86.type) && !jd(_r86) && !_r86.optional && t.locStart(_r86) === t.locStart(u) || "ObjectTypeCallProperty" === _r86.type || _a30 && "DeclareFunction" === _a30.type),
                  _l16 = _s18 && ("TypeAnnotation" === _r86.type || "TSTypeAnnotation" === _r86.type);

              var _c13 = _l16 && _s18 && ("TypeAnnotation" === _r86.type || "TSTypeAnnotation" === _r86.type) && "ArrowFunctionExpression" === _o37.type;

              return gf(_r86, t) && (_s18 = !0, _l16 = !0), _c13 && i.push("("), i.push(Hf(e, n, t, !1, !0)), (u.returnType || u.predicate || u.typeAnnotation) && i.push(_s18 ? " => " : ": ", e.call(n, "returnType"), e.call(n, "predicate"), e.call(n, "typeAnnotation")), _c13 && i.push(")"), Dd(pd(i));
            }

          case "TSRestType":
            return pd(["...", e.call(n, "typeAnnotation")]);

          case "TSOptionalType":
            return pd([e.call(n, "typeAnnotation"), "?"]);

          case "FunctionTypeParam":
            return pd([e.call(n, "name"), _f(e), u.name ? ": " : "", e.call(n, "typeAnnotation")]);

          case "GenericTypeAnnotation":
            return pd([e.call(n, "id"), e.call(n, "typeParameters")]);

          case "DeclareInterface":
          case "InterfaceDeclaration":
          case "InterfaceTypeAnnotation":
          case "TSInterfaceDeclaration":
            {
              var _i44;

              ("DeclareInterface" === u.type || u.declare) && i.push("declare "), "TSInterfaceDeclaration" === u.type && i.push(u.abstract ? "abstract " : "", eh(e, t, n)), i.push("interface");
              var _r87 = [],
                  _o38 = [];
              "InterfaceTypeAnnotation" !== u.type && _r87.push(" ", e.call(n, "id"), e.call(n, "typeParameters"));

              var _a31 = u.typeParameters && !Xd(u.typeParameters);

              if (u.extends && 0 !== u.extends.length && _o38.push(_a31 ? Ad(" ", fd, {
                groupId: nh(u.typeParameters)
              }) : fd, "extends ", (1 === u.extends.length ? Yd : yd)(dd(pd([",", fd]), e.map(n, "extends")))), u.id && Hd(u.id) || u.extends && 0 !== u.extends.length) {
                var _e112 = pd(_o38);

                _a31 ? i.push(Dd(pd(_r87.concat(Ad(yd(_e112), _e112))))) : i.push(Dd(yd(pd(_r87.concat(_e112)))));
              } else (_i44 = i).push.apply(_i44, _r87.concat(_o38));

              return i.push(" ", e.call(n, "body")), Dd(pd(i));
            }

          case "ClassImplements":
          case "InterfaceExtends":
            return pd([e.call(n, "id"), e.call(n, "typeParameters")]);

          case "TSClassImplements":
            return pd([e.call(n, "expression"), e.call(n, "typeParameters")]);

          case "TSIntersectionType":
          case "IntersectionTypeAnnotation":
            {
              var _t87 = e.map(n, "types"),
                  _r88 = [];

              var _o39 = !1;

              for (var _e113 = 0; _e113 < _t87.length; ++_e113) {
                0 === _e113 ? _r88.push(_t87[_e113]) : mf(u.types[_e113 - 1]) && mf(u.types[_e113]) ? _r88.push(pd([" & ", _o39 ? yd(_t87[_e113]) : _t87[_e113]])) : mf(u.types[_e113 - 1]) || mf(u.types[_e113]) ? (_e113 > 1 && (_o39 = !0), _r88.push(" & ", _e113 > 1 ? yd(_t87[_e113]) : _t87[_e113])) : _r88.push(yd(pd([" &", fd, _t87[_e113]])));
              }

              return Dd(pd(_r88));
            }

          case "TSUnionType":
          case "UnionTypeAnnotation":
            {
              var _r89 = e.getParentNode(),
                  _o40 = !("TypeParameterInstantiation" === _r89.type || "TSTypeParameterInstantiation" === _r89.type || "GenericTypeAnnotation" === _r89.type || "TSTypeReference" === _r89.type || "TSTypeAssertion" === _r89.type || "TupleTypeAnnotation" === _r89.type || "TSTupleType" === _r89.type || "FunctionTypeParam" === _r89.type && !_r89.name || ("TypeAlias" === _r89.type || "VariableDeclarator" === _r89.type || "TSTypeAliasDeclaration" === _r89.type) && $d(t.originalText, u, t)),
                  _a32 = fh(u),
                  _i45 = e.map(function (e) {
                var r = e.call(n);
                return _a32 || (r = Ed(2, r)), hi.printComments(e, function () {
                  return r;
                }, t);
              }, "types");

              if (_a32) return dd(" | ", _i45);

              var _s19 = _o40 && !$d(t.originalText, u, t),
                  _l17 = pd([Ad(pd([_s19 ? fd : "", "| "])), dd(pd([fd, "| "]), _i45)]);

              return Sc(e, t) ? Dd(pd([yd(_l17), md])) : "TupleTypeAnnotation" === _r89.type && _r89.types.length > 1 || "TSTupleType" === _r89.type && _r89.elementTypes.length > 1 ? Dd(pd([yd(pd([Ad(pd(["(", md])), _l17])), md, Ad(")")])) : Dd(_o40 ? yd(_l17) : _l17);
            }

          case "NullableTypeAnnotation":
            return pd(["?", e.call(n, "typeAnnotation")]);

          case "TSNullKeyword":
          case "NullLiteralTypeAnnotation":
            return "null";

          case "ThisTypeAnnotation":
            return "this";

          case "NumberTypeAnnotation":
            return "number";

          case "SymbolTypeAnnotation":
            return "symbol";

          case "ObjectTypeCallProperty":
            return u.static && i.push("static "), i.push(e.call(n, "value")), pd(i);

          case "ObjectTypeIndexer":
            {
              var _t88 = jd(u);

              return pd([_t88 || "", "[", e.call(n, "id"), u.id ? ": " : "", e.call(n, "key"), "]: ", e.call(n, "value")]);
            }

          case "ObjectTypeProperty":
            {
              var _r90 = jd(u);

              var _o41 = "";
              return u.proto ? _o41 = "proto " : u.static && (_o41 = "static "), pd([_o41, rf(u) ? u.kind + " " : "", _r90 || "", Uf(e, t, n), _f(e), nf(u, t) ? "" : ": ", e.call(n, "value")]);
            }

          case "QualifiedTypeIdentifier":
            return pd([e.call(n, "qualification"), ".", e.call(n, "id")]);

          case "StringLiteralTypeAnnotation":
            return ph(u, t);

          case "NumberLiteralTypeAnnotation":
            return Ja.strictEqual(_typeof(u.value), "number"), null != u.extra ? ud(u.extra.raw) : ud(u.raw);

          case "StringTypeAnnotation":
            return "string";

          case "DeclareTypeAlias":
          case "TypeAlias":
            {
              ("DeclareTypeAlias" === u.type || u.declare) && i.push("declare ");

              var _r91 = sh(u.id, u.right, e.call(n, "right"), t);

              return i.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", _r91, o), Dd(pd(i));
            }

          case "TypeCastExpression":
            return pd(["(", e.call(n, "expression"), Gf(e, t, n), ")"]);

          case "TypeParameterDeclaration":
          case "TypeParameterInstantiation":
            {
              var _r92 = e.getValue(),
                  _u24 = t.originalText.slice(0, t.locStart(_r92)).lastIndexOf("/*");

              return _u24 >= 0 && t.originalText.slice(_u24).match(/^\/\*\s*::/) ? pd(["/*:: ", rh(e, t, n, "params"), " */"]) : rh(e, t, n, "params");
            }

          case "TSTypeParameterDeclaration":
          case "TSTypeParameterInstantiation":
            return rh(e, t, n, "params");

          case "TSTypeParameter":
          case "TypeParameter":
            {
              var _r93 = e.getParentNode();

              if ("TSMappedType" === _r93.type) return i.push("[", e.call(n, "name")), u.constraint && i.push(" in ", e.call(n, "constraint")), i.push("]"), pd(i);

              var _o42 = jd(u);

              _o42 && i.push(_o42), i.push(e.call(n, "name")), u.bound && (i.push(": "), i.push(e.call(n, "bound"))), u.constraint && i.push(" extends ", e.call(n, "constraint")), u.default && i.push(" = ", e.call(n, "default"));

              var _a33 = e.getNode(2);

              return _r93.params && 1 === _r93.params.length && xf(t) && !u.constraint && "ArrowFunctionExpression" === _a33.type && i.push(","), pd(i);
            }

          case "TypeofTypeAnnotation":
            return pd(["typeof ", e.call(n, "argument")]);

          case "VoidTypeAnnotation":
            return "void";

          case "InferredPredicate":
            return "%checks";

          case "DeclaredPredicate":
            return pd(["%checks(", e.call(n, "value"), ")"]);

          case "TSAbstractKeyword":
            return "abstract";

          case "TSAnyKeyword":
            return "any";

          case "TSAsyncKeyword":
            return "async";

          case "TSBooleanKeyword":
            return "boolean";

          case "TSBigIntKeyword":
            return "bigint";

          case "TSConstKeyword":
            return "const";

          case "TSDeclareKeyword":
            return "declare";

          case "TSExportKeyword":
            return "export";

          case "TSNeverKeyword":
            return "never";

          case "TSNumberKeyword":
            return "number";

          case "TSObjectKeyword":
            return "object";

          case "TSProtectedKeyword":
            return "protected";

          case "TSPrivateKeyword":
            return "private";

          case "TSPublicKeyword":
            return "public";

          case "TSReadonlyKeyword":
            return "readonly";

          case "TSSymbolKeyword":
            return "symbol";

          case "TSStaticKeyword":
            return "static";

          case "TSStringKeyword":
            return "string";

          case "TSUndefinedKeyword":
            return "undefined";

          case "TSUnknownKeyword":
            return "unknown";

          case "TSVoidKeyword":
            return "void";

          case "TSAsExpression":
            return pd([e.call(n, "expression"), " as ", e.call(n, "typeAnnotation")]);

          case "TSArrayType":
            return pd([e.call(n, "elementType"), "[]"]);

          case "TSPropertySignature":
            return u.export && i.push("export "), u.accessibility && i.push(u.accessibility + " "), u.static && i.push("static "), u.readonly && i.push("readonly "), i.push(Uf(e, t, n), _f(e)), u.typeAnnotation && (i.push(": "), i.push(e.call(n, "typeAnnotation"))), u.initializer && i.push(" = ", e.call(n, "initializer")), pd(i);

          case "TSParameterProperty":
            return u.accessibility && i.push(u.accessibility + " "), u.export && i.push("export "), u.static && i.push("static "), u.readonly && i.push("readonly "), i.push(e.call(n, "parameter")), pd(i);

          case "TSTypeReference":
            return pd([e.call(n, "typeName"), rh(e, t, n, "typeParameters")]);

          case "TSTypeQuery":
            return pd(["typeof ", e.call(n, "exprName")]);

          case "TSIndexSignature":
            {
              var _r94 = e.getParentNode(),
                  _a34 = u.parameters.length > 1 ? Ad(Nf(t) ? "," : "") : "",
                  _i46 = Dd(pd([yd(pd([md, dd(pd([", ", md]), e.map(n, "parameters"))])), _a34, md]));

              return pd([u.export ? "export " : "", u.accessibility ? pd([u.accessibility, " "]) : "", u.static ? "static " : "", u.readonly ? "readonly " : "", "[", u.parameters ? _i46 : "", u.typeAnnotation ? "]: " : "]", u.typeAnnotation ? e.call(n, "typeAnnotation") : "", "ClassBody" === _r94.type ? o : ""]);
            }

          case "TSTypePredicate":
            return pd([u.asserts ? "asserts " : "", e.call(n, "parameterName"), u.typeAnnotation ? pd([" is ", e.call(n, "typeAnnotation")]) : ""]);

          case "TSNonNullExpression":
            return pd([e.call(n, "expression"), "!"]);

          case "TSThisType":
            return "this";

          case "TSImportType":
            return pd([u.isTypeOf ? "typeof " : "", "import(", e.call(n, u.parameter ? "parameter" : "argument"), ")", u.qualifier ? pd([".", e.call(n, "qualifier")]) : "", rh(e, t, n, "typeParameters")]);

          case "TSLiteralType":
            return e.call(n, "literal");

          case "TSIndexedAccessType":
            return pd([e.call(n, "objectType"), "[", e.call(n, "indexType"), "]"]);

          case "TSConstructSignatureDeclaration":
          case "TSCallSignatureDeclaration":
          case "TSConstructorType":
            if ("TSCallSignatureDeclaration" !== u.type && i.push("new "), i.push(Dd(Hf(e, n, t, !1, !0))), u.returnType || u.typeAnnotation) {
              var _t89 = "TSConstructorType" === u.type;

              i.push(_t89 ? " => " : ": ", e.call(n, "returnType"), e.call(n, "typeAnnotation"));
            }

            return pd(i);

          case "TSTypeOperator":
            return pd([u.operator, " ", e.call(n, "typeAnnotation")]);

          case "TSMappedType":
            {
              var _r95 = ed(t.originalText, t.locStart(u), t.locEnd(u));

              return Dd(pd(["{", yd(pd([t.bracketSpacing ? fd : md, u.readonly ? pd([Rd(u.readonly, "readonly"), " "]) : "", eh(e, t, n), e.call(n, "typeParameter"), u.optional ? Rd(u.optional, "?") : "", u.typeAnnotation ? ": " : "", e.call(n, "typeAnnotation"), Ad(o, "")])), hi.printDanglingComments(e, t, !0), t.bracketSpacing ? fd : md, "}"]), {
                shouldBreak: _r95
              });
            }

          case "TSMethodSignature":
            return i.push(u.accessibility ? pd([u.accessibility, " "]) : "", u.export ? "export " : "", u.static ? "static " : "", u.readonly ? "readonly " : "", u.computed ? "[" : "", e.call(n, "key"), u.computed ? "]" : "", _f(e), Hf(e, n, t, !1, !0)), (u.returnType || u.typeAnnotation) && i.push(": ", e.call(n, "returnType"), e.call(n, "typeAnnotation")), Dd(pd(i));

          case "TSNamespaceExportDeclaration":
            return i.push("export as namespace ", e.call(n, "id")), t.semi && i.push(";"), Dd(pd(i));

          case "TSEnumDeclaration":
            return u.declare && i.push("declare "), u.modifiers && i.push(eh(e, t, n)), u.const && i.push("const "), i.push("enum ", e.call(n, "id"), " "), 0 === u.members.length ? i.push(Dd(pd(["{", hi.printDanglingComments(e, t), md, "}"]))) : i.push(Dd(pd(["{", yd(pd([hd, mh(e, t, "members", n), Nf(t, "es5") ? "," : ""])), hi.printDanglingComments(e, t, !0), hd, "}"]))), pd(i);

          case "TSEnumMember":
            return i.push(e.call(n, "id")), u.initializer && i.push(" = ", e.call(n, "initializer")), pd(i);

          case "TSImportEqualsDeclaration":
            return u.isExport && i.push("export "), i.push("import ", e.call(n, "id"), " = ", e.call(n, "moduleReference")), t.semi && i.push(";"), Dd(pd(i));

          case "TSExternalModuleReference":
            return pd(["require(", e.call(n, "expression"), ")"]);

          case "TSModuleDeclaration":
            {
              var _r96 = e.getParentNode(),
                  _a35 = lf(u.id),
                  _s20 = "TSModuleDeclaration" === _r96.type,
                  _l18 = u.body && "TSModuleDeclaration" === u.body.type;

              if (_s20) i.push(".");else {
                u.declare && i.push("declare "), i.push(eh(e, t, n));

                var _r97 = t.originalText.slice(t.locStart(u), t.locStart(u.id));

                "Identifier" === u.id.type && "global" === u.id.name && !/namespace|module/.test(_r97) || i.push(_a35 || /(^|\s)module(\s|$)/.test(_r97) ? "module " : "namespace ");
              }
              return i.push(e.call(n, "id")), _l18 ? i.push(e.call(n, "body")) : u.body ? i.push(" ", Dd(e.call(n, "body"))) : i.push(o), pd(i);
            }

          case "PrivateName":
            return pd(["#", e.call(n, "id")]);

          case "TSPrivateIdentifier":
            return u.escapedText;

          case "TSConditionalType":
            return Kp(e, t, n, {
              beforeParts: function beforeParts() {
                return [e.call(n, "checkType"), " ", "extends", " ", e.call(n, "extendsType")];
              },
              afterParts: function afterParts() {
                return [];
              },
              shouldCheckJsx: !1,
              conditionalNodeType: "TSConditionalType",
              consequentNodePropertyName: "trueType",
              alternateNodePropertyName: "falseType",
              testNodePropertyNames: ["checkType", "extendsType"]
            });

          case "TSInferType":
            return pd(["infer", " ", e.call(n, "typeParameter")]);

          case "InterpreterDirective":
            return i.push("#!", u.value, hd), ld(t.originalText, u, t.locEnd) && i.push(hd), pd(i);

          case "NGRoot":
            return pd([].concat(e.call(n, "node"), u.node.comments && 0 !== u.node.comments.length ? pd([" //", u.node.comments[0].value.trimEnd()]) : []));

          case "NGChainedExpression":
            return Dd(dd(pd([";", fd]), e.map(function (e) {
              return Jd(e) ? n(e) : pd(["(", n(e), ")"]);
            }, "expressions")));

          case "NGEmptyExpression":
            return "";

          case "NGQuotedExpression":
            return pd([u.prefix, ": ", u.value.trim()]);

          case "NGMicrosyntax":
            return pd(e.map(function (e, t) {
              return pd([0 === t ? "" : ff(e.getValue(), t, u) ? " " : pd([";", fd]), n(e)]);
            }, "body"));

          case "NGMicrosyntaxKey":
            return /^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(u.name) ? u.name : JSON.stringify(u.name);

          case "NGMicrosyntaxExpression":
            return pd([e.call(n, "expression"), null === u.alias ? "" : pd([" as ", e.call(n, "alias")])]);

          case "NGMicrosyntaxKeyedExpression":
            {
              var _t90 = e.getName(),
                  _r98 = e.getParentNode(),
                  _o43 = ff(u, _t90, _r98) || (1 === _t90 && ("then" === u.key.name || "else" === u.key.name) || 2 === _t90 && "else" === u.key.name && "NGMicrosyntaxKeyedExpression" === _r98.body[_t90 - 1].type && "then" === _r98.body[_t90 - 1].key.name) && "NGMicrosyntaxExpression" === _r98.body[0].type;

              return pd([e.call(n, "key"), _o43 ? " " : ": ", e.call(n, "expression")]);
            }

          case "NGMicrosyntaxLet":
            return pd(["let ", e.call(n, "key"), null === u.value ? "" : pd([" = ", e.call(n, "value")])]);

          case "NGMicrosyntaxAs":
            return pd([e.call(n, "key"), " as ", e.call(n, "alias")]);

          case "PipelineBareFunction":
            return e.call(n, "callee");

          case "PipelineTopicExpression":
            return e.call(n, "expression");

          case "PipelinePrimaryTopicReference":
            return i.push("#"), pd(i);

          case "ArgumentPlaceholder":
            return "?";

          case "TSJSDocAllType":
            return "*";

          case "TSJSDocUnknownType":
            return "?";

          case "TSJSDocNullableType":
            return pd(["?", e.call(n, "typeAnnotation")]);

          case "TSJSDocNonNullableType":
            return pd(["!", e.call(n, "typeAnnotation")]);

          case "TSJSDocFunctionType":
            return pd(["function(", "): ", e.call(n, "typeAnnotation")]);

          default:
            throw new Error("unknown type: " + JSON.stringify(u.type));
        }
      }(e, t, n, r);

      if (!u || wd(a)) return a;
      var i = Ld(e),
          s = [];
      if ("ClassMethod" === u.type || "ClassPrivateMethod" === u.type || "ClassProperty" === u.type || "TSAbstractClassProperty" === u.type || "ClassPrivateProperty" === u.type || "MethodDefinition" === u.type || "TSAbstractMethodDefinition" === u.type || "TSDeclareMethod" === u.type) ;else if (u.decorators && u.decorators.length > 0 && !(i && t.locStart(i, {
        ignoreDecorators: !0
      }) > t.locStart(u.decorators[0]))) {
        var _r99 = "ClassExpression" === u.type || "ClassDeclaration" === u.type || zd(u, t) ? hd : fd;

        e.each(function (e) {
          var t = e.getValue();
          t = t.expression ? t.expression : t.callee, s.push(n(e), _r99);
        }, "decorators"), i && s.unshift(hd);
      } else ef(u) && u.declaration && u.declaration.decorators && u.declaration.decorators.length > 0 && t.locStart(u, {
        ignoreDecorators: !0
      }) > t.locStart(u.declaration.decorators[0]) ? e.each(function (e) {
        var t = "Decorator" === e.getValue().type ? "" : "@";
        s.push(t, n(e), hd);
      }, "declaration", "decorators") : o = Sc(e, t);
      var l = [];

      if (o && l.unshift("("), l.push(a), o) {
        var _t91 = e.getValue();

        Wd(_t91) && (l.push(" /*"), l.push(_t91.trailingComments[0].value.trimStart()), l.push("*/"), _t91.trailingComments[0].printed = !0), l.push(")");
      }

      return s.length > 0 ? Dd(pd(s.concat(l))) : pd(l);
    },
    embed: ml,
    insertPragma: Nd,
    massageAstNode: gl,
    hasPrettierIgnore: Gd,
    willPrintOwnComments: Dh,
    canAttachComment: function canAttachComment(e) {
      return e.type && "CommentBlock" !== e.type && "CommentLine" !== e.type && "Line" !== e.type && "Block" !== e.type && "EmptyStatement" !== e.type && "TemplateElement" !== e.type && "Import" !== e.type;
    },
    printComment: function printComment(e, t) {
      var n = e.getValue();

      switch (n.type) {
        case "CommentBlock":
        case "Block":
          {
            if (function (e) {
              var t = "*".concat(e.value, "*").split("\n");
              return t.length > 1 && t.every(function (e) {
                return "*" === e.trim()[0];
              });
            }(n)) {
              var _e115 = function (e) {
                var t = e.value.split("\n");
                return pd(["/*", dd(hd, t.map(function (e, n) {
                  return 0 === n ? e.trimEnd() : " " + (n < t.length - 1 ? e.trim() : e.trimStart());
                })), "*/"]);
              }(n);

              return n.trailing && !Zp(t.originalText, t.locStart(n), {
                backwards: !0
              }) ? pd([hd, _e115]) : _e115;
            }

            var _e114 = t.locEnd(n),
                _r100 = "*-/" === t.originalText.slice(_e114 - 3, _e114);

            return "/*" + n.value + (_r100 ? "*-/" : "*/");
          }

        case "CommentLine":
        case "Line":
          return t.originalText.slice(t.locStart(n), t.locEnd(n)).trimEnd();

        default:
          throw new Error("Not a comment: " + JSON.stringify(n));
      }
    },
    isBlockComment: Us.isBlockComment,
    handleComments: {
      ownLine: Us.handleOwnLineComment,
      endOfLine: Us.handleEndOfLineComment,
      remaining: Us.handleRemainingComment
    },
    getGapRegex: Us.getGapRegex,
    getCommentChildNodes: Us.getCommentChildNodes
  };
  var _ln$builders10 = ln.builders,
      Eh = _ln$builders10.concat,
      Ch = _ln$builders10.hardline,
      bh = _ln$builders10.indent,
      Ah = _ln$builders10.join;
  var vh = {
    preprocess: Nc,
    print: function print(e, t, n) {
      var r = e.getValue();

      switch (r.type) {
        case "JsonRoot":
          return Eh([e.call(n, "node"), Ch]);

        case "ArrayExpression":
          return 0 === r.elements.length ? "[]" : Eh(["[", bh(Eh([Ch, Ah(Eh([",", Ch]), e.map(n, "elements"))])), Ch, "]"]);

        case "ObjectExpression":
          return 0 === r.properties.length ? "{}" : Eh(["{", bh(Eh([Ch, Ah(Eh([",", Ch]), e.map(n, "properties"))])), Ch, "}"]);

        case "ObjectProperty":
          return Eh([e.call(n, "key"), ": ", e.call(n, "value")]);

        case "UnaryExpression":
          return Eh(["+" === r.operator ? "" : r.operator, e.call(n, "argument")]);

        case "NullLiteral":
          return "null";

        case "BooleanLiteral":
          return r.value ? "true" : "false";

        case "StringLiteral":
        case "NumericLiteral":
          return JSON.stringify(r.value);

        case "Identifier":
          return JSON.stringify(r.name);

        default:
          throw new Error("unknown type: " + JSON.stringify(r.type));
      }
    },
    massageAstNode: function massageAstNode(e, t) {
      return delete t.start, delete t.end, delete t.extra, delete t.loc, delete t.comments, delete t.errors, delete t.range, "Identifier" === e.type ? {
        type: "StringLiteral",
        value: e.name
      } : "UnaryExpression" === e.type && "+" === e.operator ? t.argument : void 0;
    }
  };
  var Fh = {
    bracketSpacing: {
      since: "0.0.0",
      category: "Common",
      type: "boolean",
      default: !0,
      description: "Print spaces between brackets.",
      oppositeDescription: "Do not print spaces between brackets."
    },
    singleQuote: {
      since: "0.0.0",
      category: "Common",
      type: "boolean",
      default: !1,
      description: "Use single quotes instead of double quotes."
    },
    proseWrap: {
      since: "1.8.2",
      category: "Common",
      type: "choice",
      default: [{
        since: "1.8.2",
        value: !0
      }, {
        since: "1.9.0",
        value: "preserve"
      }],
      description: "How to wrap prose.",
      choices: [{
        since: "1.9.0",
        value: "always",
        description: "Wrap prose if it exceeds the print width."
      }, {
        since: "1.9.0",
        value: "never",
        description: "Do not wrap prose."
      }, {
        since: "1.9.0",
        value: "preserve",
        description: "Wrap prose as-is."
      }]
    }
  };

  var xh = {
    arrowParens: {
      since: "1.9.0",
      category: "JavaScript",
      type: "choice",
      default: [{
        since: "1.9.0",
        value: "avoid"
      }, {
        since: "2.0.0",
        value: "always"
      }],
      description: "Include parentheses around a sole arrow function parameter.",
      choices: [{
        value: "always",
        description: "Always include parens. Example: `(x) => x`"
      }, {
        value: "avoid",
        description: "Omit parens when possible. Example: `x => x`"
      }]
    },
    bracketSpacing: Fh.bracketSpacing,
    jsxBracketSameLine: {
      since: "0.17.0",
      category: "JavaScript",
      type: "boolean",
      default: !1,
      description: "Put > on the last line instead of at a new line."
    },
    semi: {
      since: "1.0.0",
      category: "JavaScript",
      type: "boolean",
      default: !0,
      description: "Print semicolons.",
      oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."
    },
    singleQuote: Fh.singleQuote,
    jsxSingleQuote: {
      since: "1.15.0",
      category: "JavaScript",
      type: "boolean",
      default: !1,
      description: "Use single quotes in JSX."
    },
    quoteProps: {
      since: "1.17.0",
      category: "JavaScript",
      type: "choice",
      default: "as-needed",
      description: "Change when properties in objects are quoted.",
      choices: [{
        value: "as-needed",
        description: "Only add quotes around object properties where required."
      }, {
        value: "consistent",
        description: "If at least one property in an object requires quotes, quote all properties."
      }, {
        value: "preserve",
        description: "Respect the input use of quotes in object properties."
      }]
    },
    trailingComma: {
      since: "0.0.0",
      category: "JavaScript",
      type: "choice",
      default: [{
        since: "0.0.0",
        value: !1
      }, {
        since: "0.19.0",
        value: "none"
      }, {
        since: "2.0.0",
        value: "es5"
      }],
      description: "Print trailing commas wherever possible when multi-line.",
      choices: [{
        value: "es5",
        description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"
      }, {
        value: "none",
        description: "No trailing commas."
      }, {
        value: "all",
        description: "Trailing commas wherever possible (including function arguments)."
      }]
    }
  },
      Sh = ["js", "node"],
      wh = [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"],
      Bh = ["Jakefile"],
      Th = ["chakra", "d8", "gjs", "js", "node", "qjs", "rhino", "v8", "v8-shell"],
      kh = {
    name: "JavaScript",
    type: "programming",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    color: "#f1e05a",
    aliases: Sh,
    extensions: wh,
    filenames: Bh,
    interpreters: Th,
    languageId: 183
  },
      Nh = Object.freeze({
    __proto__: null,
    name: "JavaScript",
    type: "programming",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    color: "#f1e05a",
    aliases: Sh,
    extensions: wh,
    filenames: Bh,
    interpreters: Th,
    languageId: 183,
    default: kh
  }),
      Oh = [".jsx"],
      Ph = {
    name: "JSX",
    type: "programming",
    group: "JavaScript",
    extensions: Oh,
    tmScope: "source.js.jsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 178
  },
      _h = Object.freeze({
    __proto__: null,
    name: "JSX",
    type: "programming",
    group: "JavaScript",
    extensions: Oh,
    tmScope: "source.js.jsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 178,
    default: Ph
  }),
      Ih = ["ts"],
      jh = ["deno", "ts-node"],
      Mh = [".ts"],
      Lh = {
    name: "TypeScript",
    type: "programming",
    color: "#2b7489",
    aliases: Ih,
    interpreters: jh,
    extensions: Mh,
    tmScope: "source.ts",
    aceMode: "typescript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/typescript",
    languageId: 378
  },
      Rh = Object.freeze({
    __proto__: null,
    name: "TypeScript",
    type: "programming",
    color: "#2b7489",
    aliases: Ih,
    interpreters: jh,
    extensions: Mh,
    tmScope: "source.ts",
    aceMode: "typescript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/typescript",
    languageId: 378,
    default: Lh
  }),
      qh = [".tsx"],
      Vh = {
    name: "TSX",
    type: "programming",
    group: "TypeScript",
    extensions: qh,
    tmScope: "source.tsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 94901924
  },
      Wh = Object.freeze({
    __proto__: null,
    name: "TSX",
    type: "programming",
    group: "TypeScript",
    extensions: qh,
    tmScope: "source.tsx",
    aceMode: "javascript",
    codemirrorMode: "jsx",
    codemirrorMimeType: "text/jsx",
    languageId: 94901924,
    default: Vh
  }),
      $h = [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
      Uh = [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "composer.lock", "mcmod.info"],
      zh = {
    name: "JSON",
    type: "data",
    tmScope: "source.json",
    aceMode: "json",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    searchable: false,
    extensions: $h,
    filenames: Uh,
    languageId: 174
  },
      Jh = Object.freeze({
    __proto__: null,
    name: "JSON",
    type: "data",
    tmScope: "source.json",
    aceMode: "json",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    searchable: false,
    extensions: $h,
    filenames: Uh,
    languageId: 174,
    default: zh
  }),
      Gh = ["jsonc"],
      Hh = [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
      Xh = [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "jsconfig.json", "language-configuration.json", "tsconfig.json"],
      Yh = {
    name: "JSON with Comments",
    type: "data",
    group: "JSON",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    aliases: Gh,
    extensions: Hh,
    filenames: Xh,
    languageId: 423
  },
      Kh = Object.freeze({
    __proto__: null,
    name: "JSON with Comments",
    type: "data",
    group: "JSON",
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "text/javascript",
    aliases: Gh,
    extensions: Hh,
    filenames: Xh,
    languageId: 423,
    default: Yh
  }),
      Qh = [".json5"],
      Zh = {
    name: "JSON5",
    type: "data",
    extensions: Qh,
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    languageId: 175
  },
      em = Object.freeze({
    __proto__: null,
    name: "JSON5",
    type: "data",
    extensions: Qh,
    tmScope: "source.js",
    aceMode: "javascript",
    codemirrorMode: "javascript",
    codemirrorMimeType: "application/json",
    languageId: 175,
    default: Zh
  }),
      tm = Ue(Nh),
      nm = Ue(_h),
      rm = Ue(Rh),
      um = Ue(Wh),
      om = Ue(Jh),
      am = Ue(Kh),
      im = Ue(em);

  var sm = {
    languages: [Es(tm, function (e) {
      return {
        since: "0.0.0",
        parsers: ["babel", "flow"],
        vscodeLanguageIds: ["javascript", "mongo"],
        interpreters: e.interpreters.concat(["nodejs"])
      };
    }), Es(tm, function () {
      return {
        name: "Flow",
        since: "0.0.0",
        parsers: ["babel", "flow"],
        vscodeLanguageIds: ["javascript"],
        aliases: [],
        filenames: [],
        extensions: [".js.flow"]
      };
    }), Es(nm, function () {
      return {
        since: "0.0.0",
        parsers: ["babel", "flow"],
        vscodeLanguageIds: ["javascriptreact"]
      };
    }), Es(rm, function () {
      return {
        since: "1.4.0",
        parsers: ["typescript", "babel-ts"],
        vscodeLanguageIds: ["typescript"]
      };
    }), Es(um, function () {
      return {
        since: "1.4.0",
        parsers: ["typescript", "babel-ts"],
        vscodeLanguageIds: ["typescriptreact"]
      };
    }), Es(om, function () {
      return {
        name: "JSON.stringify",
        since: "1.13.0",
        parsers: ["json-stringify"],
        vscodeLanguageIds: ["json"],
        extensions: [],
        filenames: ["package.json", "package-lock.json", "composer.json"]
      };
    }), Es(om, function (e) {
      return {
        since: "1.5.0",
        parsers: ["json"],
        vscodeLanguageIds: ["json"],
        filenames: e.filenames.concat([".prettierrc"])
      };
    }), Es(am, function (e) {
      return {
        since: "1.5.0",
        parsers: ["json"],
        vscodeLanguageIds: ["jsonc"],
        filenames: e.filenames.concat([".eslintrc"])
      };
    }), Es(im, function () {
      return {
        since: "1.13.0",
        parsers: ["json5"],
        vscodeLanguageIds: ["json5"]
      };
    })],
    options: xh,
    printers: {
      estree: yh,
      "estree-json": vh
    },
    parsers: {
      get babel() {
        return {}.parsers.babel;
      },

      get "babel-flow"() {
        return {}.parsers["babel-flow"];
      },

      get "babel-ts"() {
        return {}.parsers["babel-ts"];
      },

      get json() {
        return {}.parsers.json;
      },

      get json5() {
        return {}.parsers.json5;
      },

      get "json-stringify"() {
        return {}.parsers["json-stringify"];
      },

      get __js_expression() {
        return {}.parsers.__js_expression;
      },

      get __vue_expression() {
        return {}.parsers.__vue_expression;
      },

      get __vue_event_binding() {
        return {}.parsers.__vue_event_binding;
      },

      get flow() {
        return {}.parsers.flow;
      },

      get typescript() {
        return {}.parsers.typescript;
      },

      get __ng_action() {
        return {}.parsers.__ng_action;
      },

      get __ng_binding() {
        return {}.parsers.__ng_binding;
      },

      get __ng_interpolation() {
        return {}.parsers.__ng_interpolation;
      },

      get __ng_directive() {
        return {}.parsers.__ng_directive;
      }

    }
  };
  var lm = Lt.isFrontMatterNode;

  var cm = function cm(e, t, n) {
    if (["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"].forEach(function (e) {
      delete t[e];
    }), lm(e) && "yaml" === e.lang && delete t.value, "css-comment" === e.type && "css-root" === n.type && 0 !== n.nodes.length) {
      if ((n.nodes[0] === e || lm(n.nodes[0]) && n.nodes[1] === e) && (delete t.text, /^\*\s*@(format|prettier)\s*$/.test(e.text))) return null;
      if ("css-root" === n.type && he(n.nodes) === e) return null;
    }

    if ("value-root" === e.type && delete t.text, "media-query" !== e.type && "media-query-list" !== e.type && "media-feature-expression" !== e.type || delete t.value, "css-rule" === e.type && delete t.params, "selector-combinator" === e.type && (t.value = t.value.replace(/\s+/g, " ")), "media-feature" === e.type && (t.value = t.value.replace(/ /g, "")), ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.replace().toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()), "css-decl" === e.type && (t.prop = t.prop.toLowerCase()), "css-atrule" !== e.type && "css-import" !== e.type || (t.name = t.name.toLowerCase()), "value-number" === e.type && (t.unit = t.unit.toLowerCase()), "media-feature" !== e.type && "media-keyword" !== e.type && "media-type" !== e.type && "media-unknown" !== e.type && "media-url" !== e.type && "media-value" !== e.type && "selector-attribute" !== e.type && "selector-string" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "value-string" !== e.type || !t.value || (t.value = t.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), "selector-attribute" === e.type && (t.attribute = t.attribute.trim(), t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(), 0 === t.namespace.length && (t.namespace = !0)), t.value && (t.value = t.value.trim().replace(/^["']|["']$/g, ""), delete t.quoted)), "media-value" !== e.type && "media-type" !== e.type && "value-number" !== e.type && "selector-root-invalid" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "selector-tag" !== e.type || !t.value || (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, function (e, t, n) {
      var r = Number(t);
      return isNaN(r) ? e : r + n.toLowerCase();
    })), "selector-tag" === e.type) {
      var _n53 = e.value.toLowerCase();

      ["from", "to"].includes(_n53) && (t.value = _n53);
    }

    "css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value;
  };

  var _ln$builders11 = ln.builders,
      pm = _ln$builders11.hardline,
      dm = _ln$builders11.concat,
      fm = _ln$builders11.markAsRoot,
      hm = {
    "---": "yaml",
    "+++": "toml"
  };
  var mm = {
    parse: function parse(e) {
      var t = Object.keys(hm).map(fe).join("|"),
          n = e.match(new RegExp("^(".concat(t, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
      if (null === n) return {
        frontMatter: null,
        content: e
      };

      var _n54 = _slicedToArray(n, 4),
          r = _n54[0],
          u = _n54[1],
          o = _n54[2],
          a = _n54[3];

      var i = hm[u];
      return "toml" !== i && o && o.trim() && (i = o.trim()), {
        frontMatter: {
          type: "front-matter",
          lang: i,
          value: a,
          raw: r.replace(/\n$/, "")
        },
        content: r.replace(/[^\n]/g, " ") + e.slice(r.length)
      };
    },
    print: function print(e, t) {
      if ("yaml" === e.lang) {
        var _n55 = e.value.trim(),
            _r101 = _n55 ? t(_n55, {
          parser: "yaml"
        }, {
          stripTrailingHardline: !0
        }) : "";

        return fm(dm(["---", pm, _r101, _r101 ? pm : "", "---"]));
      }
    }
  };
  var _ln$builders12 = ln.builders,
      gm = _ln$builders12.hardline,
      Dm = _ln$builders12.concat,
      ym = mm.print;

  var Em = function Em(e, t, n) {
    var r = e.getValue();

    if ("front-matter" === r.type) {
      var _e116 = ym(r, n);

      return _e116 ? Dm([_e116, gm]) : "";
    }
  };

  var Cm = mm.parse;
  var bm = {
    hasPragma: function hasPragma(e) {
      return wl.hasPragma(Cm(e).content);
    },
    insertPragma: function insertPragma(e) {
      var _Cm = Cm(e),
          t = _Cm.frontMatter,
          n = _Cm.content;

      return (t ? t.raw + "\n\n" : "") + wl.insertPragma(n);
    }
  };
  var Am = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);

  function vm(e, t) {
    var n = [].concat(t);
    var r,
        u = -1;

    for (; r = e.getParentNode(++u);) {
      if (n.includes(r.type)) return u;
    }

    return -1;
  }

  function Fm(e, t) {
    var n = vm(e, t);
    return -1 === n ? null : e.getParentNode(n);
  }

  function xm(e) {
    return "value-operator" === e.type && "*" === e.value;
  }

  function Sm(e) {
    return "value-operator" === e.type && "/" === e.value;
  }

  function wm(e) {
    return "value-operator" === e.type && "+" === e.value;
  }

  function Bm(e) {
    return "value-operator" === e.type && "-" === e.value;
  }

  function Tm(e) {
    return "value-operator" === e.type && "%" === e.value;
  }

  function km(e) {
    return "value-comma_group" === e.type && e.groups && e.groups[1] && "value-colon" === e.groups[1].type;
  }

  function Nm(e) {
    return "value-paren_group" === e.type && e.groups && e.groups[0] && km(e.groups[0]);
  }

  var Om = {
    getAncestorCounter: vm,
    getAncestorNode: Fm,
    getPropOfDeclNode: function getPropOfDeclNode(e) {
      var t = Fm(e, "css-decl");
      return t && t.prop && t.prop.toLowerCase();
    },
    hasSCSSInterpolation: function hasSCSSInterpolation(e) {
      if (e && e.length) for (var _t92 = e.length - 1; _t92 > 0; _t92--) {
        if ("word" === e[_t92].type && "{" === e[_t92].value && "word" === e[_t92 - 1].type && e[_t92 - 1].value.endsWith("#")) return !0;
      }
      return !1;
    },
    hasStringOrFunction: function hasStringOrFunction(e) {
      if (e && e.length) for (var _t93 = 0; _t93 < e.length; _t93++) {
        if ("string" === e[_t93].type || "func" === e[_t93].type) return !0;
      }
      return !1;
    },
    maybeToLowerCase: function maybeToLowerCase(e) {
      return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
    },
    insideValueFunctionNode: function insideValueFunctionNode(e, t) {
      var n = Fm(e, "value-func");
      return n && n.value && n.value.toLowerCase() === t;
    },
    insideICSSRuleNode: function insideICSSRuleNode(e) {
      var t = Fm(e, "css-rule");
      return t && t.raws && t.raws.selector && (t.raws.selector.startsWith(":import") || t.raws.selector.startsWith(":export"));
    },
    insideAtRuleNode: function insideAtRuleNode(e, t) {
      var n = [].concat(t),
          r = Fm(e, "css-atrule");
      return r && n.includes(r.name.toLowerCase());
    },
    insideURLFunctionInImportAtRuleNode: function insideURLFunctionInImportAtRuleNode(e) {
      var t = e.getValue(),
          n = Fm(e, "css-atrule");
      return n && "import" === n.name && "url" === t.groups[0].value && 2 === t.groups.length;
    },
    isKeyframeAtRuleKeywords: function isKeyframeAtRuleKeywords(e, t) {
      var n = Fm(e, "css-atrule");
      return n && n.name && n.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase());
    },
    isWideKeywords: function isWideKeywords(e) {
      return ["initial", "inherit", "unset", "revert"].includes(e.toLowerCase());
    },
    isSCSS: function isSCSS(e, t) {
      return "less" === e || "scss" === e ? "scss" === e : /(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t);
    },
    isSCSSVariable: function isSCSSVariable(e) {
      return !(!e || "word" !== e.type || !e.value.startsWith("$"));
    },
    isLastNode: function isLastNode(e, t) {
      var n = e.getParentNode();
      if (!n) return !1;
      var r = n.nodes;
      return r && r.indexOf(t) === r.length - 1;
    },
    isLessParser: function isLessParser(e) {
      return "css" === e.parser || "less" === e.parser;
    },
    isSCSSControlDirectiveNode: function isSCSSControlDirectiveNode(e) {
      return "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name);
    },
    isDetachedRulesetDeclarationNode: function isDetachedRulesetDeclarationNode(e) {
      return !!e.selector && ("string" == typeof e.selector && /^@.+:.*$/.test(e.selector) || e.selector.value && /^@.+:.*$/.test(e.selector.value));
    },
    isRelationalOperatorNode: function isRelationalOperatorNode(e) {
      return "value-word" === e.type && ["<", ">", "<=", ">="].includes(e.value);
    },
    isEqualityOperatorNode: function isEqualityOperatorNode(e) {
      return "value-word" === e.type && ["==", "!="].includes(e.value);
    },
    isMultiplicationNode: xm,
    isDivisionNode: Sm,
    isAdditionNode: wm,
    isSubtractionNode: Bm,
    isModuloNode: Tm,
    isMathOperatorNode: function isMathOperatorNode(e) {
      return xm(e) || Sm(e) || wm(e) || Bm(e) || Tm(e);
    },
    isEachKeywordNode: function isEachKeywordNode(e) {
      return "value-word" === e.type && "in" === e.value;
    },
    isForKeywordNode: function isForKeywordNode(e) {
      return "value-word" === e.type && ["from", "through", "end"].includes(e.value);
    },
    isURLFunctionNode: function isURLFunctionNode(e) {
      return "value-func" === e.type && "url" === e.value.toLowerCase();
    },
    isIfElseKeywordNode: function isIfElseKeywordNode(e) {
      return "value-word" === e.type && ["and", "or", "not"].includes(e.value);
    },
    hasComposesNode: function hasComposesNode(e) {
      return e.value && "value-root" === e.value.type && e.value.group && "value-value" === e.value.group.type && "composes" === e.prop.toLowerCase();
    },
    hasParensAroundNode: function hasParensAroundNode(e) {
      return e.value && e.value.group && e.value.group.group && "value-paren_group" === e.value.group.group.type && null !== e.value.group.group.open && null !== e.value.group.group.close;
    },
    hasEmptyRawBefore: function hasEmptyRawBefore(e) {
      return e.raws && "" === e.raws.before;
    },
    isSCSSNestedPropertyNode: function isSCSSNestedPropertyNode(e) {
      return !!e.selector && e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
    },
    isDetachedRulesetCallNode: function isDetachedRulesetCallNode(e) {
      return e.raws && e.raws.params && /^\(\s*\)$/.test(e.raws.params);
    },
    isTemplatePlaceholderNode: function isTemplatePlaceholderNode(e) {
      return e.name.startsWith("prettier-placeholder");
    },
    isTemplatePropNode: function isTemplatePropNode(e) {
      return e.prop.startsWith("@prettier-placeholder");
    },
    isPostcssSimpleVarNode: function isPostcssSimpleVarNode(e, t) {
      return "$$" === e.value && "value-func" === e.type && t && "value-word" === t.type && !t.raws.before;
    },
    isKeyValuePairNode: km,
    isKeyValuePairInParenGroupNode: Nm,
    isSCSSMapItemNode: function isSCSSMapItemNode(e) {
      var t = e.getValue();
      if (0 === t.groups.length) return !1;
      var n = e.getParentNode(1);
      if (!(Nm(t) || n && Nm(n))) return !1;
      var r = Fm(e, "css-decl");
      return !!(r && r.prop && r.prop.startsWith("$")) || !!Nm(n) || "value-func" === n.type;
    },
    isInlineValueCommentNode: function isInlineValueCommentNode(e) {
      return "value-comment" === e.type && e.inline;
    },
    isHashNode: function isHashNode(e) {
      return "value-word" === e.type && "#" === e.value;
    },
    isLeftCurlyBraceNode: function isLeftCurlyBraceNode(e) {
      return "value-word" === e.type && "{" === e.value;
    },
    isRightCurlyBraceNode: function isRightCurlyBraceNode(e) {
      return "value-word" === e.type && "}" === e.value;
    },
    isWordNode: function isWordNode(e) {
      return ["value-word", "value-atword"].includes(e.type);
    },
    isColonNode: function isColonNode(e) {
      return "value-colon" === e.type;
    },
    isMediaAndSupportsKeywords: function isMediaAndSupportsKeywords(e) {
      return e.value && ["not", "and", "or"].includes(e.value.toLowerCase());
    },
    isColorAdjusterFuncNode: function isColorAdjusterFuncNode(e) {
      return "value-func" === e.type && Am.has(e.value.toLowerCase());
    },
    lastLineHasInlineComment: function lastLineHasInlineComment(e) {
      return /\/\//.test(e.split(/[\n\r]/).pop());
    },
    stringifyNode: function e(t) {
      if (t.groups) {
        return (t.open && t.open.value ? t.open.value : "") + t.groups.reduce(function (n, r, u) {
          return n + e(r) + ("comma_group" === t.groups[0].type && u !== t.groups.length - 1 ? "," : "");
        }, "") + (t.close && t.close.value ? t.close.value : "");
      }

      var n = t.raws && t.raws.before ? t.raws.before : "",
          r = t.raws && t.raws.quote ? t.raws.quote : "";
      return n + r + ("atword" === t.type ? "@" : "") + (t.value ? t.value : "") + r + (t.unit ? t.unit : "") + (t.group ? e(t.group) : "") + (t.raws && t.raws.after ? t.raws.after : "");
    }
  };
  var Pm = Lt.printNumber,
      _m = Lt.printString,
      Im = Lt.hasIgnoreComment,
      jm = Lt.hasNewline,
      Mm = Lt.isFrontMatterNode,
      Lm = Lt.isNextLineEmpty,
      _ln$builders13 = ln.builders,
      Rm = _ln$builders13.concat,
      qm = _ln$builders13.join,
      Vm = _ln$builders13.line,
      Wm = _ln$builders13.hardline,
      $m = _ln$builders13.softline,
      Um = _ln$builders13.group,
      zm = _ln$builders13.fill,
      Jm = _ln$builders13.indent,
      Gm = _ln$builders13.dedent,
      Hm = _ln$builders13.ifBreak,
      Xm = _ln$builders13.breakParent,
      Ym = ln.utils.removeLines,
      Km = bm.insertPragma,
      Qm = Om.getAncestorNode,
      Zm = Om.getPropOfDeclNode,
      eg = Om.maybeToLowerCase,
      tg = Om.insideValueFunctionNode,
      ng = Om.insideICSSRuleNode,
      rg = Om.insideAtRuleNode,
      ug = Om.insideURLFunctionInImportAtRuleNode,
      og = Om.isKeyframeAtRuleKeywords,
      ag = Om.isWideKeywords,
      ig = Om.isSCSS,
      sg = Om.isLastNode,
      lg = Om.isLessParser,
      cg = Om.isSCSSControlDirectiveNode,
      pg = Om.isDetachedRulesetDeclarationNode,
      dg = Om.isRelationalOperatorNode,
      fg = Om.isEqualityOperatorNode,
      hg = Om.isMultiplicationNode,
      mg = Om.isDivisionNode,
      gg = Om.isAdditionNode,
      Dg = Om.isSubtractionNode,
      yg = Om.isMathOperatorNode,
      Eg = Om.isEachKeywordNode,
      Cg = Om.isForKeywordNode,
      bg = Om.isURLFunctionNode,
      Ag = Om.isIfElseKeywordNode,
      vg = Om.hasComposesNode,
      Fg = Om.hasParensAroundNode,
      xg = Om.hasEmptyRawBefore,
      Sg = Om.isKeyValuePairNode,
      wg = Om.isDetachedRulesetCallNode,
      Bg = Om.isTemplatePlaceholderNode,
      Tg = Om.isTemplatePropNode,
      kg = Om.isPostcssSimpleVarNode,
      Ng = Om.isSCSSMapItemNode,
      Og = Om.isInlineValueCommentNode,
      Pg = Om.isHashNode,
      _g = Om.isLeftCurlyBraceNode,
      Ig = Om.isRightCurlyBraceNode,
      jg = Om.isWordNode,
      Mg = Om.isColonNode,
      Lg = Om.isMediaAndSupportsKeywords,
      Rg = Om.isColorAdjusterFuncNode,
      qg = Om.lastLineHasInlineComment;

  function Vg(e) {
    return "es5" === e.trailingComma || "all" === e.trailingComma;
  }

  function Wg(e, t, n) {
    var r = e.getValue(),
        u = [];
    var o = 0;
    return e.map(function (e) {
      var a = r.nodes[o - 1];

      if (a && "css-comment" === a.type && "prettier-ignore" === a.text.trim()) {
        var _n56 = e.getValue();

        u.push(t.originalText.slice(t.locStart(_n56), t.locEnd(_n56)));
      } else u.push(e.call(n));

      o !== r.nodes.length - 1 && ("css-comment" === r.nodes[o + 1].type && !jm(t.originalText, t.locStart(r.nodes[o + 1]), {
        backwards: !0
      }) && !Mm(r.nodes[o]) || "css-atrule" === r.nodes[o + 1].type && "else" === r.nodes[o + 1].name && "css-comment" !== r.nodes[o].type ? u.push(" ") : (u.push(t.__isHTMLStyleAttribute ? Vm : Wm), Lm(t.originalText, e.getValue(), t.locEnd) && !Mm(r.nodes[o]) && u.push(Wm))), o++;
    }, "nodes"), Rm(u);
  }

  var $g = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g,
      Ug = new RegExp($g.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");

  function zg(e, t) {
    return e.replace($g, function (e) {
      return _m(e, t);
    });
  }

  function Jg(e, t) {
    var n = t.singleQuote ? "'" : '"';
    return e.includes('"') || e.includes("'") ? e : n + e + n;
  }

  function Gg(e) {
    return e.replace(Ug, function (e, t, n, r, u) {
      return !n && r ? Hg(r) + eg(u || "") : e;
    });
  }

  function Hg(e) {
    return Pm(e).replace(/\.0(?=$|e)/, "");
  }

  var Xg = {
    print: function print(e, t, n) {
      var r = e.getValue();
      if (!r) return "";
      if ("string" == typeof r) return r;

      switch (r.type) {
        case "front-matter":
          return Rm([r.raw, Wm]);

        case "css-root":
          {
            var _u25 = Wg(e, t, n),
                _o44 = r.raws.after.trim();

            return Rm([_u25, _o44 ? " ".concat(_o44) : "", _u25.parts.length && !t.__isHTMLStyleAttribute ? Wm : ""]);
          }

        case "css-comment":
          {
            var _e117 = r.inline || r.raws.inline,
                _n57 = t.originalText.slice(t.locStart(r), t.locEnd(r));

            return _e117 ? _n57.trimEnd() : _n57;
          }

        case "css-rule":
          return Rm([e.call(n, "selector"), r.important ? " !important" : "", r.nodes ? Rm([r.selector && "selector-unknown" === r.selector.type && qg(r.selector.value) ? Vm : " ", "{", r.nodes.length > 0 ? Jm(Rm([Wm, Wg(e, t, n)])) : "", Wm, "}", pg(r) ? ";" : ""]) : ";"]);

        case "css-decl":
          {
            var _u26 = e.getParentNode(),
                _o45 = r.raws.between,
                _a36 = _o45.trim(),
                _i47 = ":" === _a36;

            var _s21 = vg(r) ? Ym(e.call(n, "value")) : e.call(n, "value");

            return !_i47 && qg(_a36) && (_s21 = Jm(Rm([Wm, Gm(_s21)]))), Rm([r.raws.before.replace(/[\s;]/g, ""), ng(e) ? r.prop : eg(r.prop), _a36.startsWith("//") ? " " : "", _a36, r.extend ? "" : " ", lg(t) && r.extend && r.selector ? Rm(["extend(", e.call(n, "selector"), ")"]) : "", _s21, r.raws.important ? r.raws.important.replace(/\s*!\s*important/i, " !important") : r.important ? " !important" : "", r.raws.scssDefault ? r.raws.scssDefault.replace(/\s*!default/i, " !default") : r.scssDefault ? " !default" : "", r.raws.scssGlobal ? r.raws.scssGlobal.replace(/\s*!global/i, " !global") : r.scssGlobal ? " !global" : "", r.nodes ? Rm([" {", Jm(Rm([$m, Wg(e, t, n)])), $m, "}"]) : Tg(r) && !_u26.raws.semicolon && ";" !== t.originalText[t.locEnd(r) - 1] ? "" : t.__isHTMLStyleAttribute && sg(e, r) ? Hm(";", "") : ";"]);
          }

        case "css-atrule":
          {
            var _u27 = e.getParentNode(),
                _o46 = Bg(r) && !_u27.raws.semicolon && ";" !== t.originalText[t.locEnd(r) - 1];

            if (lg(t)) {
              if (r.mixin) return Rm([e.call(n, "selector"), r.important ? " !important" : "", _o46 ? "" : ";"]);
              if (r.function) return Rm([r.name, Rm([e.call(n, "params")]), _o46 ? "" : ";"]);
              if (r.variable) return Rm(["@", r.name, ": ", r.value ? Rm([e.call(n, "value")]) : "", r.raws.between.trim() ? r.raws.between.trim() + " " : "", r.nodes ? Rm(["{", Jm(Rm([r.nodes.length > 0 ? $m : "", Wg(e, t, n)])), $m, "}"]) : "", _o46 ? "" : ";"]);
            }

            return Rm(["@", wg(r) || r.name.endsWith(":") ? r.name : eg(r.name), r.params ? Rm([wg(r) ? "" : Bg(r) ? "" === r.raws.afterName ? "" : r.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(r.raws.afterName) ? Rm([Wm, Wm]) : /^\s*\n/.test(r.raws.afterName) ? Wm : " " : " ", e.call(n, "params")]) : "", r.selector ? Jm(Rm([" ", e.call(n, "selector")])) : "", r.value ? Um(Rm([" ", e.call(n, "value"), cg(r) ? Fg(r) ? " " : Vm : ""])) : "else" === r.name ? " " : "", r.nodes ? Rm([cg(r) ? "" : r.selector && !r.selector.nodes && "string" == typeof r.selector.value && qg(r.selector.value) || !r.selector && "string" == typeof r.params && qg(r.params) ? Vm : " ", "{", Jm(Rm([r.nodes.length > 0 ? $m : "", Wg(e, t, n)])), $m, "}"]) : _o46 ? "" : ";"]);
          }

        case "media-query-list":
          {
            var _t94 = [];
            return e.each(function (e) {
              var r = e.getValue();
              "media-query" === r.type && "" === r.value || _t94.push(e.call(n));
            }, "nodes"), Um(Jm(qm(Vm, _t94)));
          }

        case "media-query":
          return Rm([qm(" ", e.map(n, "nodes")), sg(e, r) ? "" : ","]);

        case "media-type":
          return Gg(zg(r.value, t));

        case "media-feature-expression":
          return r.nodes ? Rm(["(", Rm(e.map(n, "nodes")), ")"]) : r.value;

        case "media-feature":
          return eg(zg(r.value.replace(/ +/g, " "), t));

        case "media-colon":
          return Rm([r.value, " "]);

        case "media-value":
          return Gg(zg(r.value, t));

        case "media-keyword":
          return zg(r.value, t);

        case "media-url":
          return zg(r.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t);

        case "media-unknown":
          return r.value;

        case "selector-root":
          return Um(Rm([rg(e, "custom-selector") ? Rm([Qm(e, "css-atrule").customSelector, Vm]) : "", qm(Rm([",", rg(e, ["extend", "custom-selector", "nest"]) ? Vm : Wm]), e.map(n, "nodes"))]));

        case "selector-selector":
          return Um(Jm(Rm(e.map(n, "nodes"))));

        case "selector-comment":
          return r.value;

        case "selector-string":
          return zg(r.value, t);

        case "selector-tag":
          {
            var _t95 = e.getParentNode(),
                _n58 = _t95 && _t95.nodes.indexOf(r),
                _u28 = _n58 && _t95.nodes[_n58 - 1];

            return Rm([r.namespace ? Rm([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", "selector-nesting" === _u28.type ? r.value : Gg(og(e, r.value) ? r.value.toLowerCase() : r.value)]);
          }

        case "selector-id":
          return Rm(["#", r.value]);

        case "selector-class":
          return Rm([".", Gg(zg(r.value, t))]);

        case "selector-attribute":
          return Rm(["[", r.namespace ? Rm([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.attribute.trim(), r.operator ? r.operator : "", r.value ? Jg(zg(r.value.trim(), t), t) : "", r.insensitive ? " i" : "", "]"]);

        case "selector-combinator":
          {
            if ("+" === r.value || ">" === r.value || "~" === r.value || ">>>" === r.value) {
              var _t96 = e.getParentNode(),
                  _n60 = "selector-selector" === _t96.type && _t96.nodes[0] === r ? "" : Vm;

              return Rm([_n60, r.value, sg(e, r) ? "" : " "]);
            }

            var _n59 = r.value.trim().startsWith("(") ? Vm : "",
                _u29 = Gg(zg(r.value.trim(), t)) || Vm;

            return Rm([_n59, _u29]);
          }

        case "selector-universal":
          return Rm([r.namespace ? Rm([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.value]);

        case "selector-pseudo":
          return Rm([eg(r.value), r.nodes && r.nodes.length > 0 ? Rm(["(", qm(", ", e.map(n, "nodes")), ")"]) : ""]);

        case "selector-nesting":
          return r.value;

        case "selector-unknown":
          {
            var _n61 = Qm(e, "css-rule");

            if (_n61 && _n61.isSCSSNesterProperty) return Gg(zg(eg(r.value), t));

            var _u30 = e.getParentNode();

            if (_u30.raws && _u30.raws.selector) {
              var _e118 = t.locStart(_u30),
                  _n62 = _e118 + _u30.raws.selector.length;

              return t.originalText.slice(_e118, _n62).trim();
            }

            var _o47 = e.getParentNode(1);

            if ("value-paren_group" === _u30.type && _o47 && "value-func" === _o47.type && "selector" === _o47.value) {
              var _e119 = t.locStart(_u30.open) + 1,
                  _n63 = t.locEnd(_u30.close) - 1,
                  _r102 = t.originalText.slice(_e119, _n63).trim();

              return qg(_r102) ? Rm([Xm, _r102]) : _r102;
            }

            return r.value;
          }

        case "value-value":
        case "value-root":
          return e.call(n, "group");

        case "value-comment":
          return t.originalText.slice(t.locStart(r), t.locEnd(r));

        case "value-comma_group":
          {
            var _t97 = e.getParentNode(),
                _u31 = e.getParentNode(1),
                _o48 = Zm(e),
                _a37 = _o48 && "value-value" === _t97.type && ("grid" === _o48 || _o48.startsWith("grid-template")),
                _i48 = Qm(e, "css-atrule"),
                _s22 = _i48 && cg(_i48),
                _l19 = e.map(n, "groups"),
                _c14 = [],
                _p10 = tg(e, "url");

            var _d8 = !1,
                _f7 = !1;

            for (var _n64 = 0; _n64 < r.groups.length; ++_n64) {
              _c14.push(_l19[_n64]);

              var _o49 = r.groups[_n64 - 1],
                  _h7 = r.groups[_n64],
                  _m7 = r.groups[_n64 + 1],
                  _g6 = r.groups[_n64 + 2];

              if (_p10) {
                (_m7 && gg(_m7) || gg(_h7)) && _c14.push(" ");
                continue;
              }

              if (!_m7) continue;
              if ("value-word" === _h7.type && _h7.value.endsWith("-") && "value-atword" === _m7.type && _m7.value.startsWith("prettier-placeholder-")) continue;

              var _D6 = "value-string" === _h7.type && _h7.value.startsWith("#{"),
                  _y3 = _d8 && "value-string" === _m7.type && _m7.value.endsWith("}");

              if (_D6 || _y3) {
                _d8 = !_d8;
                continue;
              }

              if (_d8) continue;
              if (Mg(_h7) || Mg(_m7)) continue;
              if ("value-atword" === _h7.type && "" === _h7.value) continue;
              if ("~" === _h7.value) continue;
              if (_h7.value && _h7.value.includes("\\") && _m7 && "value-comment" !== _m7.type) continue;
              if (_o49 && _o49.value && _o49.value.indexOf("\\") === _o49.value.length - 1 && "value-operator" === _h7.type && "/" === _h7.value) continue;
              if ("\\" === _h7.value) continue;
              if (kg(_h7, _m7)) continue;
              if (Pg(_h7) || _g(_h7) || Ig(_m7) || _g(_m7) && xg(_m7) || Ig(_h7) && xg(_m7)) continue;
              if ("--" === _h7.value && Pg(_m7)) continue;

              var _E3 = yg(_h7),
                  _C3 = yg(_m7);

              if ((_E3 && Pg(_m7) || _C3 && Ig(_h7)) && xg(_m7)) continue;
              if (tg(e, "calc") && (gg(_h7) || gg(_m7) || Dg(_h7) || Dg(_m7)) && xg(_m7)) continue;

              var _b2 = (gg(_h7) || Dg(_h7)) && 0 === _n64 && ("value-number" === _m7.type || _m7.isHex) && _u31 && Rg(_u31) && !xg(_m7),
                  _A2 = _g6 && "value-func" === _g6.type || _g6 && jg(_g6) || "value-func" === _h7.type || jg(_h7),
                  _v2 = "value-func" === _m7.type || jg(_m7) || _o49 && "value-func" === _o49.type || _o49 && jg(_o49);

              if (hg(_m7) || hg(_h7) || tg(e, "calc") || _b2 || !(mg(_m7) && !_A2 || mg(_h7) && !_v2 || gg(_m7) && !_A2 || gg(_h7) && !_v2 || Dg(_m7) || Dg(_h7)) || !(xg(_m7) || _E3 && (!_o49 || _o49 && yg(_o49)))) if (Og(_h7)) {
                if ("value-paren_group" === _t97.type) {
                  _c14.push(Gm(Wm));

                  continue;
                }

                _c14.push(Wm);
              } else _s22 && (fg(_m7) || dg(_m7) || Ag(_m7) || Eg(_h7) || Cg(_h7)) || _i48 && "namespace" === _i48.name.toLowerCase() ? _c14.push(" ") : _a37 ? _h7.source && _m7.source && _h7.source.start.line !== _m7.source.start.line ? (_c14.push(Wm), _f7 = !0) : _c14.push(" ") : _C3 ? _c14.push(" ") : _m7 && "..." === _m7.value || _c14.push(Vm);
            }

            return _f7 && _c14.unshift(Wm), _s22 ? Um(Jm(Rm(_c14))) : ug(e) ? Um(zm(_c14)) : Um(Jm(zm(_c14)));
          }

        case "value-paren_group":
          {
            var _u32 = e.getParentNode();

            if (_u32 && bg(_u32) && (1 === r.groups.length || r.groups.length > 0 && "value-comma_group" === r.groups[0].type && r.groups[0].groups.length > 0 && "value-word" === r.groups[0].groups[0].type && r.groups[0].groups[0].value.startsWith("data:"))) return Rm([r.open ? e.call(n, "open") : "", qm(",", e.map(n, "groups")), r.close ? e.call(n, "close") : ""]);

            if (!r.open) {
              var _t98 = e.map(n, "groups"),
                  _r103 = [];

              for (var _e120 = 0; _e120 < _t98.length; _e120++) {
                0 !== _e120 && _r103.push(Rm([",", Vm])), _r103.push(_t98[_e120]);
              }

              return Um(Jm(zm(_r103)));
            }

            var _o50 = Ng(e),
                _a38 = r.groups[r.groups.length - 1],
                _i49 = _a38 && "value-comment" === _a38.type;

            return Um(Rm([r.open ? e.call(n, "open") : "", Jm(Rm([$m, qm(Rm([",", Vm]), e.map(function (e) {
              var t = e.getValue(),
                  r = n(e);
              return Sg(t) && "value-comma_group" === t.type && t.groups && t.groups[2] && "value-paren_group" === t.groups[2].type ? (r.contents.contents.parts[1] = Um(r.contents.contents.parts[1]), Um(Gm(r))) : r;
            }, "groups"))])), Hm(!_i49 && ig(t.parser, t.originalText) && _o50 && Vg(t) ? "," : ""), $m, r.close ? e.call(n, "close") : ""]), {
              shouldBreak: _o50
            });
          }

        case "value-func":
          return Rm([r.value, rg(e, "supports") && Lg(r) ? " " : "", e.call(n, "group")]);

        case "value-paren":
          return r.value;

        case "value-number":
          return Rm([Hg(r.value), eg(r.unit)]);

        case "value-operator":
          return r.value;

        case "value-word":
          return r.isColor && r.isHex || ag(r.value) ? r.value.toLowerCase() : r.value;

        case "value-colon":
          {
            var _t99 = e.getParentNode(),
                _n65 = _t99 && _t99.groups.indexOf(r),
                _u33 = _n65 && _t99.groups[_n65 - 1];

            return Rm([r.value, _u33 && "\\" === _u33.value[_u33.value.length - 1] || tg(e, "url") ? "" : Vm]);
          }

        case "value-comma":
          return Rm([r.value, " "]);

        case "value-string":
          return _m(r.raws.quote + r.value + r.raws.quote, t);

        case "value-atword":
          return Rm(["@", r.value]);

        case "value-unicode-range":
        case "value-unknown":
          return r.value;

        default:
          throw new Error("Unknown postcss type ".concat(JSON.stringify(r.type)));
      }
    },
    embed: Em,
    insertPragma: Km,
    hasPrettierIgnore: Im,
    massageAstNode: cm
  },
      Yg = {
    singleQuote: Fh.singleQuote
  },
      Kg = [".css"],
      Qg = {
    name: "CSS",
    type: "markup",
    tmScope: "source.css",
    aceMode: "css",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    color: "#563d7c",
    extensions: Kg,
    languageId: 50
  },
      Zg = Object.freeze({
    __proto__: null,
    name: "CSS",
    type: "markup",
    tmScope: "source.css",
    aceMode: "css",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    color: "#563d7c",
    extensions: Kg,
    languageId: 50,
    default: Qg
  }),
      eD = [".pcss", ".postcss"],
      tD = {
    name: "PostCSS",
    type: "markup",
    tmScope: "source.postcss",
    group: "CSS",
    extensions: eD,
    aceMode: "text",
    languageId: 262764437
  },
      nD = Object.freeze({
    __proto__: null,
    name: "PostCSS",
    type: "markup",
    tmScope: "source.postcss",
    group: "CSS",
    extensions: eD,
    aceMode: "text",
    languageId: 262764437,
    default: tD
  }),
      rD = [".less"],
      uD = {
    name: "Less",
    type: "markup",
    group: "CSS",
    extensions: rD,
    tmScope: "source.css.less",
    aceMode: "less",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    languageId: 198
  },
      oD = Object.freeze({
    __proto__: null,
    name: "Less",
    type: "markup",
    group: "CSS",
    extensions: rD,
    tmScope: "source.css.less",
    aceMode: "less",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    languageId: 198,
    default: uD
  }),
      aD = [".scss"],
      iD = {
    name: "SCSS",
    type: "markup",
    tmScope: "source.css.scss",
    group: "CSS",
    aceMode: "scss",
    codemirrorMode: "css",
    codemirrorMimeType: "text/x-scss",
    extensions: aD,
    languageId: 329
  },
      sD = Object.freeze({
    __proto__: null,
    name: "SCSS",
    type: "markup",
    tmScope: "source.css.scss",
    group: "CSS",
    aceMode: "scss",
    codemirrorMode: "css",
    codemirrorMimeType: "text/x-scss",
    extensions: aD,
    languageId: 329,
    default: iD
  }),
      lD = Ue(Zg),
      cD = Ue(nD),
      pD = Ue(oD),
      dD = Ue(sD);
  var fD = {
    languages: [Es(lD, function () {
      return {
        since: "1.4.0",
        parsers: ["css"],
        vscodeLanguageIds: ["css"]
      };
    }), Es(cD, function () {
      return {
        since: "1.4.0",
        parsers: ["css"],
        vscodeLanguageIds: ["postcss"]
      };
    }), Es(pD, function () {
      return {
        since: "1.4.0",
        parsers: ["less"],
        vscodeLanguageIds: ["less"]
      };
    }), Es(dD, function () {
      return {
        since: "1.4.0",
        parsers: ["scss"],
        vscodeLanguageIds: ["scss"]
      };
    })],
    options: Yg,
    printers: {
      postcss: Xg
    },
    parsers: {
      get css() {
        return {}.parsers.css;
      },

      get less() {
        return {}.parsers.less;
      },

      get scss() {
        return {}.parsers.scss;
      }

    }
  },
      hD = Ue(Object.freeze({
    __proto__: null,
    default: ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]
  }));
  var mD = new Set(hD);

  function gD(e) {
    return DD(e, ["TextNode"]) && !/\S/.test(e.chars);
  }

  function DD(e, t) {
    return e && t.some(function (t) {
      return e.type === t;
    });
  }

  function yD(e, t) {
    var n = e.getValue(),
        r = e.getParentNode(0) || {},
        u = r.children || r.body || r.parts || [],
        o = u.indexOf(n);
    return -1 !== o && u[o + t];
  }

  function ED(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return yD(e, -t);
  }

  function CD(e) {
    return yD(e, 1);
  }

  function bD(e) {
    return DD(e, ["MustacheCommentStatement"]) && "string" == typeof e.value && "prettier-ignore" === e.value.trim();
  }

  var AD = {
    getNextNode: CD,
    getPreviousNode: ED,
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = e.getValue(),
          n = ED(e, 2);
      return bD(t) || bD(n);
    },
    isNextNodeOfSomeType: function isNextNodeOfSomeType(e, t) {
      return DD(CD(e), t);
    },
    isNodeOfSomeType: DD,
    isParentOfSomeType: function isParentOfSomeType(e, t) {
      return DD(e.getParentNode(0), t);
    },
    isPreviousNodeOfSomeType: function isPreviousNodeOfSomeType(e, t) {
      return DD(ED(e), t);
    },
    isVoid: function isVoid(e) {
      return function (e) {
        return DD(e, ["ElementNode"]) && "string" == typeof e.tag && (function (e) {
          return e.toUpperCase() === e;
        }(e.tag[0]) || e.tag.includes("."));
      }(e) && (0 === e.children || e.children.every(function (e) {
        return gD(e);
      })) || mD.has(e.tag);
    },
    isWhitespaceNode: gD
  };
  var _ln$builders14 = ln.builders,
      vD = _ln$builders14.concat,
      FD = _ln$builders14.group,
      xD = _ln$builders14.hardline,
      SD = _ln$builders14.ifBreak,
      wD = _ln$builders14.indent,
      BD = _ln$builders14.join,
      TD = _ln$builders14.line,
      kD = _ln$builders14.softline,
      ND = AD.getNextNode,
      OD = AD.getPreviousNode,
      PD = AD.hasPrettierIgnore,
      _D = AD.isNextNodeOfSomeType,
      ID = AD.isNodeOfSomeType,
      jD = AD.isParentOfSomeType,
      MD = AD.isPreviousNodeOfSomeType,
      LD = AD.isVoid,
      RD = AD.isWhitespaceNode;

  function qD(e, t) {
    var n = e.getValue();
    return vD(["<", n.tag, VD(e, t), fy(n), $D(n)]);
  }

  function VD(e, t) {
    var n = e.getValue();
    return wD(vD([n.attributes.length ? TD : "", BD(TD, e.map(t, "attributes")), n.modifiers.length ? TD : "", BD(TD, e.map(t, "modifiers")), n.comments.length ? TD : "", BD(TD, e.map(t, "comments"))]));
  }

  function WD(e, t, n) {
    return vD(e.map(function (e, r) {
      return 0 === r ? vD([kD, n(e, t, n)]) : n(e, t, n);
    }, "children"));
  }

  function $D(e) {
    return LD(e) ? SD(vD([kD, "/>"]), vD([" />", kD])) : SD(vD([kD, ">"]), ">");
  }

  function UD(e) {
    var t = !1 === e.escaped ? "{{{" : "{{",
        n = e.strip && e.strip.open ? "~" : "";
    return vD([t, n]);
  }

  function zD(e) {
    var t = !1 === e.escaped ? "}}}" : "}}",
        n = e.strip && e.strip.close ? "~" : "";
    return vD([n, t]);
  }

  function JD(e) {
    var t = UD(e),
        n = e.openStrip.open ? "~" : "";
    return vD([t, n, "#"]);
  }

  function GD(e) {
    var t = zD(e),
        n = e.openStrip.close ? "~" : "";
    return vD([n, t]);
  }

  function HD(e) {
    var t = UD(e),
        n = e.closeStrip.open ? "~" : "";
    return vD([t, n, "/"]);
  }

  function XD(e) {
    var t = zD(e),
        n = e.closeStrip.close ? "~" : "";
    return vD([n, t]);
  }

  function YD(e) {
    var t = UD(e),
        n = e.inverseStrip.open ? "~" : "";
    return vD([t, n]);
  }

  function KD(e) {
    var t = zD(e),
        n = e.inverseStrip.close ? "~" : "";
    return vD([n, t]);
  }

  function QD(e, t) {
    var n = e.getValue();
    return FD(vD([JD(n), cy(e, t), fy(n.program), kD, GD(n)]));
  }

  function ZD(e) {
    return vD([xD, YD(e), "else", KD(e)]);
  }

  function ey(e, t) {
    var n = e.getParentNode(1);
    return vD([YD(n), "else ", cy(e, t), KD(n)]);
  }

  function ty(e, t) {
    var n = e.getValue();
    return vD([ny(n) ? kD : xD, HD(n), e.call(t, "path"), XD(n)]);
  }

  function ny(e) {
    return ID(e, ["BlockStatement"]) && e.program.body.every(function (e) {
      return RD(e);
    });
  }

  function ry(e) {
    return ID(e, ["BlockStatement"]) && e.inverse;
  }

  function uy(e, t) {
    if (ny(e.getValue())) return "";
    var n = e.call(t, "program");
    return wD(vD([xD, n]));
  }

  function oy(e, t) {
    var n = e.getValue(),
        r = e.call(t, "inverse"),
        u = vD([xD, r]);
    return function (e) {
      return ry(e) && 1 === e.inverse.body.length && ID(e.inverse.body[0], ["BlockStatement"]) && "if" === e.inverse.body[0].path.parts[0];
    }(n) ? u : ry(n) ? vD([ZD(n), wD(u)]) : "";
  }

  function ay(e) {
    return (e = "string" == typeof e ? e : "").split("\n").length - 1;
  }

  function iy() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return new Array(Math.min(e, t)).fill(xD);
  }

  function sy(e, t) {
    var n = {
      quote: '"',
      regex: /"/g
    },
        r = {
      quote: "'",
      regex: /'/g
    },
        u = t.singleQuote ? r : n,
        o = u === r ? n : r;
    var a = !1;

    if (e.includes(u.quote) || e.includes(o.quote)) {
      a = (e.match(u.regex) || []).length > (e.match(o.regex) || []).length;
    }

    var i = a ? o : u,
        s = e.replace(i.regex, "\\".concat(i.quote));
    return vD([i.quote, s, i.quote]);
  }

  function ly(e, t) {
    var n = py(e, t),
        r = dy(e, t);
    return r ? wD(vD([n, TD, FD(r)])) : n;
  }

  function cy(e, t) {
    var n = py(e, t),
        r = dy(e, t);
    return r ? wD(FD(vD([n, TD, r]))) : n;
  }

  function py(e, t) {
    return e.call(t, "path");
  }

  function dy(e, t) {
    var n = e.getValue(),
        r = [];

    if (n.params.length) {
      var _n66 = e.map(t, "params");

      r.push.apply(r, _toConsumableArray(_n66));
    }

    if (n.hash && n.hash.pairs.length > 0) {
      var _n67 = e.call(t, "hash");

      r.push(_n67);
    }

    return r.length ? BD(TD, r) : "";
  }

  function fy(e) {
    return e && e.blockParams.length ? vD([" as |", e.blockParams.join(" "), "|"]) : "";
  }

  function hy(e, t, n) {
    var r = 0,
        u = 0;

    for (;;) {
      if (u === e.length) return null;

      var _o51 = e.indexOf("\n", u);

      if (-1 === _o51 && (_o51 = e.length), r === t) return u + n > _o51 ? null : u + n;
      if (-1 === _o51) return null;
      r += 1, u = _o51 + 1;
    }
  }

  var my = {
    print: function print(e, t, n) {
      var r = e.getValue();
      if (!r) return "";

      if (PD(e)) {
        var _e121 = hy(t.originalText, r.loc.start.line - 1, r.loc.start.column),
            _n68 = hy(t.originalText, r.loc.end.line - 1, r.loc.end.column);

        return t.originalText.slice(_e121, _n68);
      }

      switch (r.type) {
        case "Block":
        case "Program":
        case "Template":
          return FD(vD(e.map(n, "body")));

        case "ElementNode":
          {
            var _u34 = _D(e, ["ElementNode"]) ? xD : "";

            if (LD(r)) return vD([FD(qD(e, n)), _u34]);

            var _o52 = r.children.every(function (e) {
              return RD(e);
            });

            return vD([FD(qD(e, n)), FD(vD([_o52 ? "" : wD(WD(e, t, n)), r.children.length ? xD : "", vD(["</", r.tag, ">"])])), _u34]);
          }

        case "BlockStatement":
          {
            var _t100 = e.getParentNode(1),
                _u35 = _t100 && _t100.inverse && 1 === _t100.inverse.body.length && _t100.inverse.body[0] === r && "if" === _t100.inverse.body[0].path.parts[0];

            return vD(_u35 ? [ey(e, n), uy(e, n), oy(e, n)] : [QD(e, n), FD(vD([uy(e, n), oy(e, n), ty(e, n)]))]);
          }

        case "ElementModifierStatement":
          return FD(vD(["{{", cy(e, n), kD, "}}"]));

        case "MustacheStatement":
          {
            var _t101 = jD(e, ["AttrNode", "ConcatStatement"]),
                _u36 = jD(e, ["ElementNode"]) && 0 === r.hash.pairs.length && function (e) {
              return 0 === e.params.length;
            }(r),
                _o53 = _t101 || _u36;

            return FD(vD([UD(r), _o53 ? wD(kD) : "", cy(e, n), kD, zD(r)]));
          }

        case "SubExpression":
          return FD(vD(["(", ly(e, n), kD, ")"]));

        case "AttrNode":
          {
            var _u37 = "TextNode" === r.value.type;

            if (_u37 && "" === r.value.chars && r.value.loc.start.column === r.value.loc.end.column) return vD([r.name]);

            var _o54 = e.call(n, "value"),
                _a39 = _u37 ? sy(_o54.parts.join(), t) : _o54;

            return vD([r.name, "=", _a39]);
          }

        case "ConcatStatement":
          {
            var _r104 = t.singleQuote ? "'" : '"';

            return vD([_r104].concat(_toConsumableArray(e.map(function (e) {
              return n(e);
            }, "parts")), [_r104]));
          }

        case "Hash":
          return vD([BD(TD, e.map(n, "pairs"))]);

        case "HashPair":
          return vD([r.key, "=", e.call(n, "value")]);

        case "TextNode":
          {
            var _t102 = 2,
                _n69 = !OD(e),
                _u38 = !ND(e),
                _o55 = !/\S/.test(r.chars),
                _a40 = ay(r.chars);

            var _i50 = function (e) {
              return ay(((e = "string" == typeof e ? e : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
            }(r.chars),
                _s23 = function (e) {
              return ay(((e = "string" == typeof e ? e : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
            }(r.chars);

            if ((_n69 || _u38) && _o55 && jD(e, ["Block", "ElementNode", "Template"])) return "";
            _o55 && _a40 ? (_i50 = Math.min(_a40, _t102), _s23 = 0) : (_D(e, ["BlockStatement", "ElementNode"]) && (_s23 = Math.max(_s23, 1)), MD(e, ["BlockStatement", "ElementNode"]) && (_i50 = Math.max(_i50, 1)));

            if (e.stack.includes("attributes")) {
              if (!function (e, t) {
                return jD(e, ["AttrNode"]) && e.getParentNode().name.toLowerCase() === t || jD(e, ["ConcatStatement"]) && e.getParentNode(1).name.toLowerCase() === t;
              }(e, "class")) return vD([r.chars]);
              var _n70 = "",
                  _u39 = "";
              return jD(e, ["ConcatStatement"]) && (MD(e, ["MustacheStatement"]) && (_n70 = " "), _D(e, ["MustacheStatement"]) && (_u39 = " ")), vD([].concat(_toConsumableArray(iy(_i50, _t102)), [r.chars.replace(/^\s+/g, _n70).replace(/\s+$/, _u39)], _toConsumableArray(iy(_s23, _t102))));
            }

            var _l20 = "",
                _c15 = "";
            0 === _s23 && _D(e, ["MustacheStatement"]) && (_c15 = " "), 0 === _i50 && MD(e, ["MustacheStatement"]) && (_l20 = " "), _n69 && (_i50 = 0, _l20 = ""), _u38 && (_s23 = 0, _c15 = "");
            var _p11 = r.chars;
            return _p11.startsWith("{{") && _p11.includes("}}") && (_p11 = "\\" + _p11), vD([].concat(_toConsumableArray(iy(_i50, _t102)), [_p11.replace(/^\s+/g, _l20).replace(/\s+$/, _c15)], _toConsumableArray(iy(_s23, _t102))));
          }

        case "MustacheCommentStatement":
          {
            var _e122 = r.value.includes("}}") ? "--" : "";

            return vD(["{{!", _e122, r.value, _e122, "}}"]);
          }

        case "PathExpression":
          return r.original;

        case "BooleanLiteral":
          return String(r.value);

        case "CommentStatement":
          return vD(["\x3c!--", r.value, "--\x3e"]);

        case "StringLiteral":
          return sy(r.value, t);

        case "NumberLiteral":
          return String(r.value);

        case "UndefinedLiteral":
          return "undefined";

        case "NullLiteral":
          return "null";

        default:
          throw new Error("unknown glimmer type: " + JSON.stringify(r.type));
      }
    },
    massageAstNode: function massageAstNode(e, t) {
      if (delete t.loc, delete t.selfClosing, "TextNode" === e.type) {
        var _n71 = e.chars.trim();

        if (!_n71) return null;
        t.chars = _n71;
      }
    }
  },
      gy = ["hbs", "htmlbars"],
      Dy = [".handlebars", ".hbs"],
      yy = {
    name: "Handlebars",
    type: "markup",
    group: "HTML",
    aliases: gy,
    extensions: Dy,
    tmScope: "text.html.handlebars",
    aceMode: "handlebars",
    languageId: 155
  };
  var Ey = {
    languages: [Es(Ue(Object.freeze({
      __proto__: null,
      name: "Handlebars",
      type: "markup",
      group: "HTML",
      aliases: gy,
      extensions: Dy,
      tmScope: "text.html.handlebars",
      aceMode: "handlebars",
      languageId: 155,
      default: yy
    })), function () {
      return {
        since: null,
        parsers: ["glimmer"],
        vscodeLanguageIds: ["handlebars"]
      };
    })],
    printers: {
      glimmer: my
    },
    parsers: {
      get glimmer() {
        return {}.parsers.glimmer;
      }

    }
  };
  var Cy = {
    hasPragma: function hasPragma(e) {
      return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e);
    },
    insertPragma: function insertPragma(e) {
      return "# @format\n\n" + e;
    }
  };
  var _ln$builders15 = ln.builders,
      by = _ln$builders15.concat,
      Ay = _ln$builders15.join,
      vy = _ln$builders15.hardline,
      Fy = _ln$builders15.line,
      xy = _ln$builders15.softline,
      Sy = _ln$builders15.group,
      wy = _ln$builders15.indent,
      By = _ln$builders15.ifBreak,
      Ty = Lt.hasIgnoreComment,
      ky = Lt.isNextLineEmpty,
      Ny = Cy.insertPragma;

  function Oy(e, t, n) {
    return 0 === n.directives.length ? "" : Sy(by([Fy, Ay(Fy, e.map(t, "directives"))]));
  }

  function Py(e, t, n) {
    var r = e.getValue().length;
    return e.map(function (e, u) {
      var o = n(e);
      return ky(t.originalText, e.getValue(), t.locEnd) && u < r - 1 ? by([o, vy]) : o;
    });
  }

  function _y(e, t, n) {
    var r = e.getNode(),
        u = [],
        o = r.interfaces,
        a = e.map(function (e) {
      return n(e);
    }, "interfaces");

    for (var _e123 = 0; _e123 < o.length; _e123++) {
      var _n72 = o[_e123];
      u.push(a[_e123]);
      var _r105 = o[_e123 + 1];

      if (_r105) {
        var _e124 = t.originalText.slice(_n72.loc.end, _r105.loc.start),
            _o56 = _e124.includes("#"),
            _a41 = _e124.replace(/#.*/g, "").trim();

        u.push("," === _a41 ? "," : " &"), u.push(_o56 ? Fy : " ");
      }
    }

    return u;
  }

  var Iy = {
    print: function print(e, t, n) {
      var r = e.getValue();
      if (!r) return "";
      if ("string" == typeof r) return r;

      switch (r.kind) {
        case "Document":
          {
            var _u40 = [];
            return e.map(function (e, o) {
              _u40.push(by([e.call(n)])), o !== r.definitions.length - 1 && (_u40.push(vy), ky(t.originalText, e.getValue(), t.locEnd) && _u40.push(vy));
            }, "definitions"), by([by(_u40), vy]);
          }

        case "OperationDefinition":
          {
            var _u41 = "{" !== t.originalText[t.locStart(r)],
                _o57 = !!r.name;

            return by([_u41 ? r.operation : "", _u41 && _o57 ? by([" ", e.call(n, "name")]) : "", r.variableDefinitions && r.variableDefinitions.length ? Sy(by(["(", wy(by([xy, Ay(by([By("", ", "), xy]), e.map(n, "variableDefinitions"))])), xy, ")"])) : "", Oy(e, n, r), r.selectionSet && (_u41 || _o57) ? " " : "", e.call(n, "selectionSet")]);
          }

        case "FragmentDefinition":
          return by(["fragment ", e.call(n, "name"), r.variableDefinitions && r.variableDefinitions.length ? Sy(by(["(", wy(by([xy, Ay(by([By("", ", "), xy]), e.map(n, "variableDefinitions"))])), xy, ")"])) : "", " on ", e.call(n, "typeCondition"), Oy(e, n, r), " ", e.call(n, "selectionSet")]);

        case "SelectionSet":
          return by(["{", wy(by([vy, Ay(vy, e.call(function (e) {
            return Py(e, t, n);
          }, "selections"))])), vy, "}"]);

        case "Field":
          return Sy(by([r.alias ? by([e.call(n, "alias"), ": "]) : "", e.call(n, "name"), r.arguments.length > 0 ? Sy(by(["(", wy(by([xy, Ay(by([By("", ", "), xy]), e.call(function (e) {
            return Py(e, t, n);
          }, "arguments"))])), xy, ")"])) : "", Oy(e, n, r), r.selectionSet ? " " : "", e.call(n, "selectionSet")]));

        case "Name":
          return r.value;

        case "StringValue":
          return r.block ? by(['"""', vy, Ay(vy, r.value.replace(/"""/g, "\\$&").split("\n")), vy, '"""']) : by(['"', r.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);

        case "IntValue":
        case "FloatValue":
        case "EnumValue":
          return r.value;

        case "BooleanValue":
          return r.value ? "true" : "false";

        case "NullValue":
          return "null";

        case "Variable":
          return by(["$", e.call(n, "name")]);

        case "ListValue":
          return Sy(by(["[", wy(by([xy, Ay(by([By("", ", "), xy]), e.map(n, "values"))])), xy, "]"]));

        case "ObjectValue":
          return Sy(by(["{", t.bracketSpacing && r.fields.length > 0 ? " " : "", wy(by([xy, Ay(by([By("", ", "), xy]), e.map(n, "fields"))])), xy, By("", t.bracketSpacing && r.fields.length > 0 ? " " : ""), "}"]));

        case "ObjectField":
        case "Argument":
          return by([e.call(n, "name"), ": ", e.call(n, "value")]);

        case "Directive":
          return by(["@", e.call(n, "name"), r.arguments.length > 0 ? Sy(by(["(", wy(by([xy, Ay(by([By("", ", "), xy]), e.call(function (e) {
            return Py(e, t, n);
          }, "arguments"))])), xy, ")"])) : ""]);

        case "NamedType":
          return e.call(n, "name");

        case "VariableDefinition":
          return by([e.call(n, "variable"), ": ", e.call(n, "type"), r.defaultValue ? by([" = ", e.call(n, "defaultValue")]) : "", Oy(e, n, r)]);

        case "ObjectTypeExtension":
        case "ObjectTypeDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", "ObjectTypeExtension" === r.kind ? "extend " : "", "type ", e.call(n, "name"), r.interfaces.length > 0 ? by([" implements ", by(_y(e, t, n))]) : "", Oy(e, n, r), r.fields.length > 0 ? by([" {", wy(by([vy, Ay(vy, e.call(function (e) {
            return Py(e, t, n);
          }, "fields"))])), vy, "}"]) : ""]);

        case "FieldDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", e.call(n, "name"), r.arguments.length > 0 ? Sy(by(["(", wy(by([xy, Ay(by([By("", ", "), xy]), e.call(function (e) {
            return Py(e, t, n);
          }, "arguments"))])), xy, ")"])) : "", ": ", e.call(n, "type"), Oy(e, n, r)]);

        case "DirectiveDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", "directive ", "@", e.call(n, "name"), r.arguments.length > 0 ? Sy(by(["(", wy(by([xy, Ay(by([By("", ", "), xy]), e.call(function (e) {
            return Py(e, t, n);
          }, "arguments"))])), xy, ")"])) : "", r.repeatable ? " repeatable" : "", by([" on ", Ay(" | ", e.map(n, "locations"))])]);

        case "EnumTypeExtension":
        case "EnumTypeDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", "EnumTypeExtension" === r.kind ? "extend " : "", "enum ", e.call(n, "name"), Oy(e, n, r), r.values.length > 0 ? by([" {", wy(by([vy, Ay(vy, e.call(function (e) {
            return Py(e, t, n);
          }, "values"))])), vy, "}"]) : ""]);

        case "EnumValueDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", e.call(n, "name"), Oy(e, n, r)]);

        case "InputValueDefinition":
          return by([e.call(n, "description"), r.description ? r.description.block ? vy : Fy : "", e.call(n, "name"), ": ", e.call(n, "type"), r.defaultValue ? by([" = ", e.call(n, "defaultValue")]) : "", Oy(e, n, r)]);

        case "InputObjectTypeExtension":
        case "InputObjectTypeDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", "InputObjectTypeExtension" === r.kind ? "extend " : "", "input ", e.call(n, "name"), Oy(e, n, r), r.fields.length > 0 ? by([" {", wy(by([vy, Ay(vy, e.call(function (e) {
            return Py(e, t, n);
          }, "fields"))])), vy, "}"]) : ""]);

        case "SchemaDefinition":
          return by(["schema", Oy(e, n, r), " {", r.operationTypes.length > 0 ? wy(by([vy, Ay(vy, e.call(function (e) {
            return Py(e, t, n);
          }, "operationTypes"))])) : "", vy, "}"]);

        case "OperationTypeDefinition":
          return by([e.call(n, "operation"), ": ", e.call(n, "type")]);

        case "InterfaceTypeExtension":
        case "InterfaceTypeDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", "InterfaceTypeExtension" === r.kind ? "extend " : "", "interface ", e.call(n, "name"), r.interfaces.length > 0 ? by([" implements ", by(_y(e, t, n))]) : "", Oy(e, n, r), r.fields.length > 0 ? by([" {", wy(by([vy, Ay(vy, e.call(function (e) {
            return Py(e, t, n);
          }, "fields"))])), vy, "}"]) : ""]);

        case "FragmentSpread":
          return by(["...", e.call(n, "name"), Oy(e, n, r)]);

        case "InlineFragment":
          return by(["...", r.typeCondition ? by([" on ", e.call(n, "typeCondition")]) : "", Oy(e, n, r), " ", e.call(n, "selectionSet")]);

        case "UnionTypeExtension":
        case "UnionTypeDefinition":
          return Sy(by([e.call(n, "description"), r.description ? vy : "", Sy(by(["UnionTypeExtension" === r.kind ? "extend " : "", "union ", e.call(n, "name"), Oy(e, n, r), r.types.length > 0 ? by([" =", By("", " "), wy(by([By(by([Fy, "  "])), Ay(by([Fy, "| "]), e.map(n, "types"))]))]) : ""]))]));

        case "ScalarTypeExtension":
        case "ScalarTypeDefinition":
          return by([e.call(n, "description"), r.description ? vy : "", "ScalarTypeExtension" === r.kind ? "extend " : "", "scalar ", e.call(n, "name"), Oy(e, n, r)]);

        case "NonNullType":
          return by([e.call(n, "type"), "!"]);

        case "ListType":
          return by(["[", e.call(n, "type"), "]"]);

        default:
          throw new Error("unknown graphql type: " + JSON.stringify(r.kind));
      }
    },
    massageAstNode: function massageAstNode(e, t) {
      delete t.loc, delete t.comments;
    },
    hasPrettierIgnore: Ty,
    insertPragma: Ny,
    printComment: function printComment(e) {
      var t = e.getValue();
      if ("Comment" === t.kind) return "#" + t.value.trimEnd();
      throw new Error("Not a comment: " + JSON.stringify(t));
    },
    canAttachComment: function canAttachComment(e) {
      return e.kind && "Comment" !== e.kind;
    }
  },
      jy = {
    bracketSpacing: Fh.bracketSpacing
  },
      My = [".graphql", ".gql", ".graphqls"],
      Ly = {
    name: "GraphQL",
    type: "data",
    extensions: My,
    tmScope: "source.graphql",
    aceMode: "text",
    languageId: 139
  };
  var Ry = {
    languages: [Es(Ue(Object.freeze({
      __proto__: null,
      name: "GraphQL",
      type: "data",
      extensions: My,
      tmScope: "source.graphql",
      aceMode: "text",
      languageId: 139,
      default: Ly
    })), function () {
      return {
        since: "1.5.0",
        parsers: ["graphql"],
        vscodeLanguageIds: ["graphql"]
      };
    })],
    options: jy,
    printers: {
      graphql: Iy
    },
    parsers: {
      get graphql() {
        return {}.parsers.graphql;
      }

    }
  };
  var qy = Lt.getLast,
      _cjkPattern$kPattern$ = {
    cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?",
    kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]",
    punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"
  },
      Vy = _cjkPattern$kPattern$.cjkPattern,
      Wy = _cjkPattern$kPattern$.kPattern,
      $y = _cjkPattern$kPattern$.punctuationPattern,
      Uy = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"],
      zy = Uy.concat(["tableCell", "paragraph", "heading"]),
      Jy = new RegExp(Wy),
      Gy = new RegExp($y);

  function Hy(e, t) {
    var _t$slice$match = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/),
        _t$slice$match2 = _slicedToArray(_t$slice$match, 4),
        n = _t$slice$match2[1],
        r = _t$slice$match2[2],
        u = _t$slice$match2[3];

    return {
      numberText: n,
      marker: r,
      leadingSpaces: u
    };
  }

  var Xy = {
    mapAst: function mapAst(e, t) {
      return function e(n, r, u) {
        u = u || [];
        var o = Object.assign({}, t(n, r, u));
        return o.children && (o.children = o.children.map(function (t, n) {
          return e(t, n, [o].concat(u));
        })), o;
      }(e, null, null);
    },
    splitText: function splitText(e, t) {
      var n = [];
      return ("preserve" === t.proseWrap ? e : e.replace(new RegExp("(".concat(Vy, ")\n(").concat(Vy, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach(function (e, t, u) {
        t % 2 != 1 ? (0 !== t && t !== u.length - 1 || "" !== e) && e.split(new RegExp("(".concat(Vy, ")"))).forEach(function (e, t, n) {
          (0 !== t && t !== n.length - 1 || "" !== e) && (t % 2 != 0 ? r(Gy.test(e) ? {
            type: "word",
            value: e,
            kind: "cjk-punctuation",
            hasLeadingPunctuation: !0,
            hasTrailingPunctuation: !0
          } : {
            type: "word",
            value: e,
            kind: Jy.test(e) ? "k-letter" : "cj-letter",
            hasLeadingPunctuation: !1,
            hasTrailingPunctuation: !1
          }) : "" !== e && r({
            type: "word",
            value: e,
            kind: "non-cjk",
            hasLeadingPunctuation: Gy.test(e[0]),
            hasTrailingPunctuation: Gy.test(qy(e))
          }));
        }) : n.push({
          type: "whitespace",
          value: /\n/.test(e) ? "\n" : " "
        });
      }), n;

      function r(e) {
        var t = qy(n);
        var r, u;
        t && "word" === t.type && ("non-cjk" === t.kind && "cj-letter" === e.kind && !t.hasTrailingPunctuation || "cj-letter" === t.kind && "non-cjk" === e.kind && !e.hasLeadingPunctuation ? n.push({
          type: "whitespace",
          value: " "
        }) : (r = "non-cjk", u = "cjk-punctuation", t.kind === r && e.kind === u || t.kind === u && e.kind === r || [t.value, e.value].some(function (e) {
          return /\u3000/.test(e);
        }) || n.push({
          type: "whitespace",
          value: ""
        }))), n.push(e);
      }
    },
    punctuationPattern: $y,
    getFencedCodeBlockValue: function getFencedCodeBlockValue(e, t) {
      var n = t.trimEnd().slice(e.position.start.offset, e.position.end.offset),
          r = n.match(/^\s*/)[0].length,
          u = new RegExp("^\\s{0,".concat(r, "}")),
          o = n.split("\n"),
          a = n[r],
          i = n.slice(r).match(new RegExp("^[".concat(a, "]+")))[0],
          s = new RegExp("^\\s{0,3}".concat(i)).test(o[o.length - 1].slice(l(o.length - 1)));
      return o.slice(1, s ? -1 : void 0).map(function (e, t) {
        return e.slice(l(t + 1)).replace(u, "");
      }).join("\n");

      function l(t) {
        return e.position.indent[t - 1] - 1;
      }
    },
    getOrderedListItemInfo: Hy,
    hasGitDiffFriendlyOrderedList: function hasGitDiffFriendlyOrderedList(e, t) {
      if (!e.ordered) return !1;
      if (e.children.length < 2) return !1;
      var n = Number(Hy(e.children[0], t.originalText).numberText),
          r = Number(Hy(e.children[1], t.originalText).numberText);

      if (0 === n && e.children.length > 2) {
        var _n73 = Number(Hy(e.children[2], t.originalText).numberText);

        return 1 === r && 1 === _n73;
      }

      return 1 === r;
    },
    INLINE_NODE_TYPES: Uy,
    INLINE_NODE_WRAPPER_TYPES: zy,
    isAutolink: function isAutolink(e, t) {
      if (!e || "link" !== e.type || 1 !== e.children.length) return !1;
      var n = e.children[0];
      return n && t.locStart(e) === t.locStart(n) && t.locEnd(e) === t.locEnd(n);
    }
  };
  var Yy = Lt.getParserName,
      Ky = Lt.getMaxContinuousCount,
      _ln$builders16 = ln.builders,
      Qy = _ln$builders16.hardline,
      Zy = _ln$builders16.literalline,
      eE = _ln$builders16.concat,
      tE = _ln$builders16.markAsRoot,
      nE = ln.utils.mapDoc,
      rE = mm.print,
      uE = Xy.getFencedCodeBlockValue;

  var oE = function oE(e, t, n, r) {
    var u = e.getValue();

    if ("code" === u.type && null !== u.lang) {
      var _e125 = u.lang.match(/^[\w-]+/),
          _t103 = _e125 ? _e125[0] : "",
          _o58 = Yy(_t103, r);

      if (_o58) {
        var _e126 = r.__inJsTemplate ? "~" : "`",
            _t104 = _e126.repeat(Math.max(3, Ky(u.value, _e126) + 1)),
            _a42 = n(uE(u, r.originalText), {
          parser: _o58
        }, {
          stripTrailingHardline: !0
        });

        return tE(eE([_t104, u.lang, u.meta ? " " + u.meta : "", Qy, function (e) {
          return nE(e, function (e) {
            return "string" == typeof e && e.includes("\n") ? eE(e.split(/(\n)/g).map(function (e, t) {
              return t % 2 == 0 ? e : Zy;
            })) : e;
          });
        }(_a42), Qy, _t104]));
      }
    }

    switch (u.type) {
      case "front-matter":
        return rE(u, n);

      case "importExport":
        return eE([n(u.value, {
          parser: "babel"
        }, {
          stripTrailingHardline: !0
        }), Qy]);

      case "jsx":
        return n("<$>".concat(u.value, "</$>"), {
          parser: "__js_expression",
          rootMarker: "mdx"
        }, {
          stripTrailingHardline: !0
        });
    }

    return null;
  };

  var aE = mm.parse,
      iE = ["format", "prettier"];

  function sE(e) {
    var t = "@(".concat(iE.join("|"), ")"),
        n = new RegExp(["\x3c!--\\s*".concat(t, "\\s*--\x3e"), "\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t, "[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e")].join("|"), "m"),
        r = e.match(n);
    return r && 0 === r.index;
  }

  var lE = {
    startWithPragma: sE,
    hasPragma: function hasPragma(e) {
      return sE(aE(e).content.trimStart());
    },
    insertPragma: function insertPragma(e) {
      var t = aE(e),
          n = "\x3c!-- @".concat(iE[0], " --\x3e");
      return t.frontMatter ? "".concat(t.frontMatter.raw, "\n\n").concat(n, "\n\n").concat(t.content) : "".concat(n, "\n\n").concat(t.content);
    }
  };
  var cE = Xy.getOrderedListItemInfo,
      pE = Xy.mapAst,
      dE = Xy.splitText,
      fE = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;

  function hE(e, t, n) {
    return pE(e, function (e) {
      if (!e.children) return e;
      var r = e.children.reduce(function (e, r) {
        var u = e[e.length - 1];
        return u && t(u, r) ? e.splice(-1, 1, n(u, r)) : e.push(r), e;
      }, []);
      return Object.assign({}, e, {
        children: r
      });
    });
  }

  var mE = function mE(e, t) {
    return e = function (e) {
      return hE(e, function (e, t) {
        return "importExport" === e.type && "importExport" === t.type;
      }, function (e, t) {
        return {
          type: "importExport",
          value: e.value + "\n\n" + t.value,
          position: {
            start: e.position.start,
            end: t.position.end
          }
        };
      });
    }(e = function (e) {
      return pE(e, function (e) {
        return "import" !== e.type && "export" !== e.type ? e : Object.assign({}, e, {
          type: "importExport"
        });
      });
    }(e = function (e, t) {
      return pE(e, function (e, n, _ref33) {
        var _ref34 = _slicedToArray(_ref33, 1),
            r = _ref34[0];

        if ("text" !== e.type) return e;
        var u = e.value;
        return "paragraph" === r.type && (0 === n && (u = u.trimStart()), n === r.children.length - 1 && (u = u.trimEnd())), {
          type: "sentence",
          position: e.position,
          children: dE(u, t)
        };
      });
    }(e = function (e, t) {
      return pE(e, function (e, t, n) {
        if ("list" === e.type && 0 !== e.children.length) {
          for (var _t105 = 0; _t105 < n.length; _t105++) {
            var _r106 = n[_t105];
            if ("list" === _r106.type && !_r106.isAligned) return e.isAligned = !1, e;
          }

          e.isAligned = r(e);
        }

        return e;
      });

      function n(e) {
        return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1;
      }

      function r(e) {
        if (!e.ordered) return !0;

        var _e$children = _slicedToArray(e.children, 2),
            r = _e$children[0],
            u = _e$children[1];

        if (cE(r, t.originalText).leadingSpaces.length > 1) return !0;
        var o = n(r);
        if (-1 === o) return !1;
        if (1 === e.children.length) return o % t.tabWidth == 0;
        if (o !== n(u)) return !1;
        if (o % t.tabWidth == 0) return !0;
        return cE(u, t.originalText).leadingSpaces.length > 1;
      }
    }(e = function (e, t) {
      return pE(e, function (e, n, r) {
        if ("code" === e.type) {
          var _n74 = /^\n?( {4,}|\t)/.test(t.originalText.slice(e.position.start.offset, e.position.end.offset));

          if (e.isIndented = _n74, _n74) for (var _e127 = 0; _e127 < r.length; _e127++) {
            var _t106 = r[_e127];
            if (_t106.hasIndentedCodeblock) break;
            "list" === _t106.type && (_t106.hasIndentedCodeblock = !0);
          }
        }

        return e;
      });
    }(e = function (e) {
      return pE(e, function (e) {
        return "inlineCode" !== e.type ? e : Object.assign({}, e, {
          value: e.value.replace(/\s+/g, " ")
        });
      });
    }(e = function (e) {
      return hE(e, function (e, t) {
        return "text" === e.type && "text" === t.type;
      }, function (e, t) {
        return {
          type: "text",
          value: e.value + t.value,
          position: {
            start: e.position.start,
            end: t.position.end
          }
        };
      });
    }(e = function (e, t) {
      return pE(e, function (e) {
        return "text" !== e.type ? e : Object.assign({}, e, {
          value: "*" !== e.value && "_" !== e.value && "$" !== e.value && fE.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length ? t.originalText.slice(e.position.start.offset, e.position.end.offset) : e.value
        });
      });
    }(e, t))), t), t), t)));
  };

  var gE = Lt.getLast,
      DE = Lt.getMinNotPresentContinuousCount,
      yE = Lt.getMaxContinuousCount,
      EE = Lt.getStringWidth,
      _ln$builders17 = ln.builders,
      CE = _ln$builders17.breakParent,
      bE = _ln$builders17.concat,
      AE = _ln$builders17.join,
      vE = _ln$builders17.line,
      FE = _ln$builders17.literalline,
      xE = _ln$builders17.markAsRoot,
      SE = _ln$builders17.hardline,
      wE = _ln$builders17.softline,
      BE = _ln$builders17.ifBreak,
      TE = _ln$builders17.fill,
      kE = _ln$builders17.align,
      NE = _ln$builders17.indent,
      OE = _ln$builders17.group,
      PE = ln.utils.normalizeDoc,
      _E = ln.printer.printDocToString,
      IE = Lt.replaceEndOfLineWith,
      jE = Lt.isFrontMatterNode,
      ME = Xy.getFencedCodeBlockValue,
      LE = Xy.hasGitDiffFriendlyOrderedList,
      RE = Xy.splitText,
      qE = Xy.punctuationPattern,
      VE = Xy.INLINE_NODE_TYPES,
      WE = Xy.INLINE_NODE_WRAPPER_TYPES,
      $E = Xy.isAutolink,
      UE = new Set(["importExport"]),
      zE = ["heading", "tableCell", "link"],
      JE = new Set(["listItem", "definition", "footnoteDefinition"]);

  function GE(e, t, n, r) {
    var u = e.getValue(),
        o = null === u.checked ? "" : u.checked ? "[x] " : "[ ] ";
    return bE([o, ZE(e, t, n, {
      processor: function processor(e, u) {
        if (0 === u && "list" !== e.getValue().type) return kE(" ".repeat(o.length), e.call(n));
        var a = " ".repeat((i = t.tabWidth - r.length, l = 3, i < (s = 0) ? s : i > l ? l : i));
        var i, s, l;
        return bE([a, kE(a, e.call(n))]);
      }
    })]);
  }

  function HE(e, t) {
    return function (e, t, n) {
      n = n || function () {
        return !0;
      };

      var r = -1;

      var _iterator40 = _createForOfIteratorHelper(t.children),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var _u42 = _step40.value;
          if (_u42.type === e.type && n(_u42) ? r++ : r = -1, _u42 === e) return r;
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    }(e, t, function (t) {
      return t.ordered === e.ordered;
    });
  }

  function XE(e, t) {
    var n = [].concat(t);
    var r,
        u = -1;

    for (; r = e.getParentNode(++u);) {
      if (n.includes(r.type)) return u;
    }

    return -1;
  }

  function YE(e, t) {
    var n = XE(e, t);
    return -1 === n ? null : e.getParentNode(n);
  }

  function KE(e, t, n) {
    if ("preserve" === n.proseWrap && "\n" === t) return SE;
    var r = "always" === n.proseWrap && !YE(e, zE);
    return "" !== t ? r ? vE : " " : r ? wE : "";
  }

  function QE(e, t, n) {
    var r = [];
    var u = null;

    var _e$getValue2 = e.getValue(),
        o = _e$getValue2.children;

    return o.forEach(function (e, t) {
      switch (tC(e)) {
        case "start":
          null === u && (u = {
            index: t,
            offset: e.position.end.offset
          });
          break;

        case "end":
          null !== u && (r.push({
            start: u,
            end: {
              index: t,
              offset: e.position.start.offset
            }
          }), u = null);
      }
    }), ZE(e, t, n, {
      processor: function processor(e, u) {
        if (0 !== r.length) {
          var _e128 = r[0];
          if (u === _e128.start.index) return bE([o[_e128.start.index].value, t.originalText.slice(_e128.start.offset, _e128.end.offset), o[_e128.end.index].value]);
          if (_e128.start.index < u && u < _e128.end.index) return !1;
          if (u === _e128.end.index) return r.shift(), !1;
        }

        return e.call(n);
      }
    });
  }

  function ZE(e, t, n, r) {
    var u = (r = r || {}).postprocessor || bE,
        o = r.processor || function (e) {
      return e.call(n);
    },
        a = e.getValue(),
        i = [];

    var s;
    return e.map(function (e, n) {
      var r = e.getValue(),
          u = o(e, n);

      if (!1 !== u) {
        var _e129 = {
          parts: i,
          prevNode: s,
          parentNode: a,
          options: t
        };
        (function (e, t) {
          var n = 0 === t.parts.length,
              r = VE.includes(e.type),
              u = "html" === e.type && WE.includes(t.parentNode.type);
          return n || r || u;
        })(r, _e129) || (i.push(SE), s && UE.has(s.type) || (function (e, t) {
          var n = (t.prevNode && t.prevNode.type) === e.type && JE.has(e.type),
              r = "listItem" === t.parentNode.type && !t.parentNode.loose,
              u = t.prevNode && "listItem" === t.prevNode.type && t.prevNode.loose,
              o = "next" === tC(t.prevNode),
              a = "html" === e.type && t.prevNode && "html" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line,
              i = "html" === e.type && "listItem" === t.parentNode.type && t.prevNode && "paragraph" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line;
          return u || !(n || r || o || a || i);
        }(r, _e129) || nC(r, _e129)) && i.push(SE), nC(r, _e129) && i.push(SE)), i.push(u), s = r;
      }
    }, "children"), u(i);
  }

  function eC(e) {
    var t = e;

    for (; t.children && 0 !== t.children.length;) {
      t = t.children[t.children.length - 1];
    }

    return t;
  }

  function tC(e) {
    if ("html" !== e.type) return !1;
    var t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
    return null !== t && (t[1] ? t[1] : "next");
  }

  function nC(e, t) {
    var n = t.prevNode && "list" === t.prevNode.type,
        r = "code" === e.type && e.isIndented;
    return n && r;
  }

  function rC(e, t) {
    var n = [" "].concat(t || []);
    return new RegExp(n.map(function (e) {
      return "\\".concat(e);
    }).join("|")).test(e) ? "<".concat(e, ">") : e;
  }

  function uC(e, t, n) {
    if (null == n && (n = !0), !e) return "";
    if (n) return " " + uC(e, t, !1);
    if ((e = e.replace(/\\(["')])/g, "$1")).includes('"') && e.includes("'") && !e.includes(")")) return "(".concat(e, ")");
    var r = e.split("'").length - 1,
        u = e.split('"').length - 1,
        o = r > u ? '"' : u > r || t.singleQuote ? "'" : '"';
    return e = (e = e.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(o, ")"), "g"), "\\$1"), "".concat(o).concat(e).concat(o);
  }

  var oC = {
    preprocess: mE,
    print: function print(e, t, n) {
      var r = e.getValue();
      if (function (e) {
        var t = YE(e, ["linkReference", "imageReference"]);
        return t && ("linkReference" !== t.type || "full" !== t.referenceType);
      }(e)) return bE(RE(t.originalText.slice(r.position.start.offset, r.position.end.offset), t).map(function (n) {
        return "word" === n.type ? n.value : "" === n.value ? "" : KE(e, n.value, t);
      }));

      switch (r.type) {
        case "front-matter":
          return t.originalText.slice(r.position.start.offset, r.position.end.offset);

        case "root":
          return 0 === r.children.length ? "" : bE([PE(QE(e, t, n)), UE.has(eC(r).type) ? "" : SE]);

        case "paragraph":
          return ZE(e, t, n, {
            postprocessor: TE
          });

        case "sentence":
          return ZE(e, t, n);

        case "word":
          {
            var _n75 = r.value.replace(/[$*]/g, "\\$&").replace(new RegExp(["(^|".concat(qE, ")(_+)"), "(_+)(".concat(qE, "|$)")].join("|"), "g"), function (e, t, n, r, u) {
              return (n ? "".concat(t).concat(n) : "".concat(r).concat(u)).replace(/_/g, "\\_");
            });

            var _u43 = function _u43(e, t, n) {
              return "sentence" === e.type && 0 === n;
            },
                _o59 = function _o59(e, n, r) {
              return $E(e.children[r - 1], t);
            };

            return _n75 !== r.value && (e.match(void 0, _u43, _o59) || e.match(void 0, _u43, function (e, t, n) {
              return "emphasis" === e.type && 0 === n;
            }, _o59)) && (_n75 = _n75.replace(/^(\\?[*_])+/, function (e) {
              return e.replace(/\\/g, "");
            })), _n75;
          }

        case "whitespace":
          {
            var _n76 = e.getParentNode(),
                _u44 = _n76.children.indexOf(r),
                _o60 = _n76.children[_u44 + 1],
                _a43 = _o60 && /^>|^([*+-]|#{1,6}|\d+[).])$/.test(_o60.value) ? "never" : t.proseWrap;

            return KE(e, r.value, {
              proseWrap: _a43
            });
          }

        case "emphasis":
          {
            var _u45;

            if ($E(r.children[0], t)) _u45 = t.originalText[r.position.start.offset];else {
              var _t107 = e.getParentNode(),
                  _n77 = _t107.children.indexOf(r),
                  _o61 = _t107.children[_n77 - 1],
                  _a44 = _t107.children[_n77 + 1];

              _u45 = _o61 && "sentence" === _o61.type && _o61.children.length > 0 && "word" === gE(_o61.children).type && !gE(_o61.children).hasTrailingPunctuation || _a44 && "sentence" === _a44.type && _a44.children.length > 0 && "word" === _a44.children[0].type && !_a44.children[0].hasLeadingPunctuation || YE(e, "emphasis") ? "*" : "_";
            }
            return bE([_u45, ZE(e, t, n), _u45]);
          }

        case "strong":
          return bE(["**", ZE(e, t, n), "**"]);

        case "delete":
          return bE(["~~", ZE(e, t, n), "~~"]);

        case "inlineCode":
          {
            var _e130 = DE(r.value, "`"),
                _t108 = "`".repeat(_e130 || 1),
                _n78 = _e130 && !/^\s/.test(r.value) ? " " : "";

            return bE([_t108, _n78, r.value, _n78, _t108]);
          }

        case "link":
          switch (t.originalText[r.position.start.offset]) {
            case "<":
              {
                var _e131 = "mailto:",
                    _n79 = r.url.startsWith(_e131) && t.originalText.slice(r.position.start.offset + 1, r.position.start.offset + 1 + _e131.length) !== _e131 ? r.url.slice(_e131.length) : r.url;

                return bE(["<", _n79, ">"]);
              }

            case "[":
              return bE(["[", ZE(e, t, n), "](", rC(r.url, ")"), uC(r.title, t), ")"]);

            default:
              return t.originalText.slice(r.position.start.offset, r.position.end.offset);
          }

        case "image":
          return bE(["![", r.alt || "", "](", rC(r.url, ")"), uC(r.title, t), ")"]);

        case "blockquote":
          return bE(["> ", kE("> ", ZE(e, t, n))]);

        case "heading":
          return bE(["#".repeat(r.depth) + " ", ZE(e, t, n)]);

        case "code":
          {
            if (r.isIndented) {
              var _e133 = " ".repeat(4);

              return kE(_e133, bE([_e133, bE(IE(r.value, SE))]));
            }

            var _e132 = t.__inJsTemplate ? "~" : "`",
                _n80 = _e132.repeat(Math.max(3, yE(r.value, _e132) + 1));

            return bE([_n80, r.lang || "", r.meta ? " " + r.meta : "", SE, bE(IE(ME(r, t.originalText), SE)), SE, _n80]);
          }

        case "html":
          {
            var _t109 = e.getParentNode(),
                _n81 = "root" === _t109.type && gE(_t109.children) === r ? r.value.trimEnd() : r.value,
                _u46 = /^<!--[\S\s]*-->$/.test(_n81);

            return bE(IE(_n81, _u46 ? SE : xE(FE)));
          }

        case "list":
          {
            var _u47 = HE(r, e.getParentNode()),
                _o62 = LE(r, t);

            return ZE(e, t, n, {
              processor: function processor(e, a) {
                var i = function () {
                  var e = r.ordered ? (0 === a ? r.start : _o62 ? 1 : r.start + a) + (_u47 % 2 == 0 ? ". " : ") ") : _u47 % 2 == 0 ? "- " : "* ";
                  return r.isAligned || r.hasIndentedCodeblock ? function (e, t) {
                    var n = r();
                    return e + " ".repeat(n >= 4 ? 0 : n);

                    function r() {
                      var n = e.length % t.tabWidth;
                      return 0 === n ? 0 : t.tabWidth - n;
                    }
                  }(e, t) : e;
                }(),
                    s = e.getValue();

                return 2 === s.children.length && "html" === s.children[1].type && s.children[0].position.start.column !== s.children[1].position.start.column ? bE([i, GE(e, t, n, i)]) : bE([i, kE(" ".repeat(i.length), GE(e, t, n, i))]);
              }
            });
          }

        case "thematicBreak":
          {
            var _t110 = XE(e, "list");

            if (-1 === _t110) return "---";
            return HE(e.getParentNode(_t110), e.getParentNode(_t110 + 1)) % 2 == 0 ? "***" : "---";
          }

        case "linkReference":
          return bE(["[", ZE(e, t, n), "]", "full" === r.referenceType ? bE(["[", r.identifier, "]"]) : "collapsed" === r.referenceType ? "[]" : ""]);

        case "imageReference":
          switch (r.referenceType) {
            case "full":
              return bE(["![", r.alt || "", "][", r.identifier, "]"]);

            default:
              return bE(["![", r.alt, "]", "collapsed" === r.referenceType ? "[]" : ""]);
          }

        case "definition":
          {
            var _e134 = "always" === t.proseWrap ? vE : " ";

            return OE(bE([bE(["[", r.identifier, "]:"]), NE(bE([_e134, rC(r.url), null === r.title ? "" : bE([_e134, uC(r.title, t, !1)])]))]));
          }

        case "footnote":
          return bE(["[^", ZE(e, t, n), "]"]);

        case "footnoteReference":
          return bE(["[^", r.identifier, "]"]);

        case "footnoteDefinition":
          {
            var _u48 = e.getParentNode().children[e.getName() + 1],
                _o63 = 1 === r.children.length && "paragraph" === r.children[0].type && ("never" === t.proseWrap || "preserve" === t.proseWrap && r.children[0].position.start.line === r.children[0].position.end.line);

            return bE(["[^", r.identifier, "]: ", _o63 ? ZE(e, t, n) : OE(bE([kE(" ".repeat(4), ZE(e, t, n, {
              processor: function processor(e, t) {
                return 0 === t ? OE(bE([wE, e.call(n)])) : e.call(n);
              }
            })), _u48 && "footnoteDefinition" === _u48.type ? wE : ""]))]);
          }

        case "table":
          return function (e, t, n) {
            var r = SE.parts[0],
                u = e.getValue(),
                o = [];
            e.map(function (e) {
              var r = [];
              e.map(function (e) {
                r.push(_E(e.call(n), t).formatted);
              }, "children"), o.push(r);
            }, "children");
            var a = o.reduce(function (e, t) {
              return e.map(function (e, n) {
                return Math.max(e, EE(t[n]));
              });
            }, o[0].map(function () {
              return 3;
            })),
                i = AE(r, [c(o[0]), l(), AE(r, o.slice(1).map(function (e) {
              return c(e);
            }))]);
            if ("never" !== t.proseWrap) return bE([CE, i]);
            var s = AE(r, [c(o[0], !0), l(!0), AE(r, o.slice(1).map(function (e) {
              return c(e, !0);
            }))]);
            return bE([CE, OE(BE(s, i))]);

            function l(e) {
              return bE(["| ", AE(" | ", a.map(function (t, n) {
                var r = e ? 3 : t;

                switch (u.align[n]) {
                  case "left":
                    return ":" + "-".repeat(r - 1);

                  case "right":
                    return "-".repeat(r - 1) + ":";

                  case "center":
                    return ":" + "-".repeat(r - 2) + ":";

                  default:
                    return "-".repeat(r);
                }
              })), " |"]);
            }

            function c(e, t) {
              return bE(["| ", AE(" | ", t ? e : e.map(function (e, t) {
                switch (u.align[t]) {
                  case "right":
                    return d(e, a[t]);

                  case "center":
                    return f(e, a[t]);

                  default:
                    return p(e, a[t]);
                }
              })), " |"]);
            }

            function p(e, t) {
              var n = t - EE(e);
              return bE([e, " ".repeat(n)]);
            }

            function d(e, t) {
              var n = t - EE(e);
              return bE([" ".repeat(n), e]);
            }

            function f(e, t) {
              var n = t - EE(e),
                  r = Math.floor(n / 2),
                  u = n - r;
              return bE([" ".repeat(r), e, " ".repeat(u)]);
            }
          }(e, t, n);

        case "tableCell":
          return ZE(e, t, n);

        case "break":
          return /\s/.test(t.originalText[r.position.start.offset]) ? bE(["  ", xE(FE)]) : bE(["\\", SE]);

        case "liquidNode":
          return bE(IE(r.value, SE));

        case "importExport":
        case "jsx":
          return bE([r.value, SE]);

        case "math":
          return bE(["$$", SE, r.value ? bE([bE(IE(r.value, SE)), SE]) : "", "$$"]);

        case "inlineMath":
          return t.originalText.slice(t.locStart(r), t.locEnd(r));

        case "tableRow":
        case "listItem":
        default:
          throw new Error("Unknown markdown type ".concat(JSON.stringify(r.type)));
      }
    },
    embed: oE,
    massageAstNode: function massageAstNode(e, t, n) {
      return delete t.position, delete t.raw, "front-matter" !== e.type && "code" !== e.type && "yaml" !== e.type && "import" !== e.type && "export" !== e.type && "jsx" !== e.type || delete t.value, "list" === e.type && delete t.isAligned, "list" !== e.type && "listItem" !== e.type || (delete t.spread, delete t.loose), "text" === e.type ? null : ("inlineCode" === e.type && (t.value = e.value.replace(/[\t\n ]+/g, " ")), "definition" !== e.type && "linkReference" !== e.type || (t.label = e.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), "definition" !== e.type && "link" !== e.type && "image" !== e.type || !e.title || (t.title = e.title.replace(/\\(["')])/g, "$1")), n && "root" === n.type && n.children.length > 0 && (n.children[0] === e || jE(n.children[0]) && n.children[1] === e) && "html" === e.type && lE.startWithPragma(e.value) ? null : void 0);
    },
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = +e.getName();
      return 0 !== t && "next" === tC(e.getParentNode().children[t - 1]);
    },
    insertPragma: lE.insertPragma
  },
      aC = {
    proseWrap: Fh.proseWrap,
    singleQuote: Fh.singleQuote
  },
      iC = ["pandoc"],
      sC = [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"],
      lC = ["contents.lr"],
      cC = {
    name: "Markdown",
    type: "prose",
    aliases: iC,
    aceMode: "markdown",
    codemirrorMode: "gfm",
    codemirrorMimeType: "text/x-gfm",
    wrap: true,
    extensions: sC,
    filenames: lC,
    tmScope: "source.gfm",
    languageId: 222
  },
      pC = Ue(Object.freeze({
    __proto__: null,
    name: "Markdown",
    type: "prose",
    aliases: iC,
    aceMode: "markdown",
    codemirrorMode: "gfm",
    codemirrorMimeType: "text/x-gfm",
    wrap: true,
    extensions: sC,
    filenames: lC,
    tmScope: "source.gfm",
    languageId: 222,
    default: cC
  }));
  var dC = {
    languages: [Es(pC, function (e) {
      return {
        since: "1.8.0",
        parsers: ["markdown"],
        vscodeLanguageIds: ["markdown"],
        filenames: e.filenames.concat(["README"]),
        extensions: e.extensions.filter(function (e) {
          return ".mdx" !== e;
        })
      };
    }), Es(pC, function () {
      return {
        name: "MDX",
        since: "1.15.0",
        parsers: ["mdx"],
        vscodeLanguageIds: ["mdx"],
        filenames: [],
        extensions: [".mdx"]
      };
    })],
    options: aC,
    printers: {
      mdast: oC
    },
    parsers: {
      get remark() {
        return {}.parsers.remark;
      },

      get markdown() {
        return {}.parsers.remark;
      },

      get mdx() {
        return {}.parsers.mdx;
      }

    }
  };
  var fC = Lt.isFrontMatterNode;
  var hC = Object.freeze({
    __proto__: null,
    default: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]
  }),
      mC = ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"],
      gC = ["title"],
      DC = ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"],
      yC = ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"],
      EC = ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
      CC = ["href", "target"],
      bC = ["color", "face", "size"],
      AC = ["dir"],
      vC = ["cite"],
      FC = ["alink", "background", "bgcolor", "link", "text", "vlink"],
      xC = ["clear"],
      SC = ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"],
      wC = ["height", "width"],
      BC = ["align"],
      TC = ["align", "char", "charoff", "span", "valign", "width"],
      kC = ["align", "char", "charoff", "span", "valign", "width"],
      NC = ["value"],
      OC = ["cite", "datetime"],
      PC = ["open"],
      _C = ["title"],
      IC = ["open"],
      jC = ["compact"],
      MC = ["align"],
      LC = ["compact"],
      RC = ["height", "src", "type", "width"],
      qC = ["disabled", "form", "name"],
      VC = ["color", "face", "size"],
      WC = ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"],
      $C = ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"],
      UC = ["cols", "rows"],
      zC = ["align"],
      JC = ["align"],
      GC = ["align"],
      HC = ["align"],
      XC = ["align"],
      YC = ["align"],
      KC = ["profile"],
      QC = ["align", "noshade", "size", "width"],
      ZC = ["manifest", "version"],
      eb = ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"],
      tb = ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"],
      nb = ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"],
      rb = ["cite", "datetime"],
      ub = ["prompt"],
      ob = ["accesskey", "for", "form"],
      ab = ["accesskey", "align"],
      ib = ["type", "value"],
      sb = ["as", "charset", "color", "crossorigin", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"],
      lb = ["name"],
      cb = ["compact"],
      pb = ["charset", "content", "http-equiv", "name", "scheme"],
      db = ["high", "low", "max", "min", "optimum", "value"],
      fb = ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"],
      hb = ["compact", "reversed", "start", "type"],
      mb = ["disabled", "label"],
      gb = ["disabled", "label", "selected", "value"],
      Db = ["for", "form", "name"],
      yb = ["align"],
      Eb = ["name", "type", "value", "valuetype"],
      Cb = ["width"],
      bb = ["max", "value"],
      Ab = ["cite"],
      vb = ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"],
      Fb = ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"],
      xb = ["name"],
      Sb = ["media", "sizes", "src", "srcset", "type"],
      wb = ["media", "nonce", "title", "type"],
      Bb = ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"],
      Tb = ["align", "char", "charoff", "valign"],
      kb = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
      Nb = ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"],
      Ob = ["align", "char", "charoff", "valign"],
      Pb = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
      _b = ["align", "char", "charoff", "valign"],
      Ib = ["datetime"],
      jb = ["align", "bgcolor", "char", "charoff", "valign"],
      Mb = ["default", "kind", "label", "src", "srclang"],
      Lb = ["compact", "type"],
      Rb = ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"],
      qb = {
    "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"],
    a: mC,
    abbr: gC,
    applet: DC,
    area: yC,
    audio: EC,
    base: CC,
    basefont: bC,
    bdo: AC,
    blockquote: vC,
    body: FC,
    br: xC,
    button: SC,
    canvas: wC,
    caption: BC,
    col: TC,
    colgroup: kC,
    data: NC,
    del: OC,
    details: PC,
    dfn: _C,
    dialog: IC,
    dir: jC,
    div: MC,
    dl: LC,
    embed: RC,
    fieldset: qC,
    font: VC,
    form: WC,
    frame: $C,
    frameset: UC,
    h1: zC,
    h2: JC,
    h3: GC,
    h4: HC,
    h5: XC,
    h6: YC,
    head: KC,
    hr: QC,
    html: ZC,
    iframe: eb,
    img: tb,
    input: nb,
    ins: rb,
    isindex: ub,
    label: ob,
    legend: ab,
    li: ib,
    link: sb,
    map: lb,
    menu: cb,
    meta: pb,
    meter: db,
    object: fb,
    ol: hb,
    optgroup: mb,
    option: gb,
    output: Db,
    p: yb,
    param: Eb,
    pre: Cb,
    progress: bb,
    q: Ab,
    script: vb,
    select: Fb,
    slot: xb,
    source: Sb,
    style: wb,
    table: Bb,
    tbody: Tb,
    td: kb,
    textarea: Nb,
    tfoot: Ob,
    th: Pb,
    thead: _b,
    time: Ib,
    tr: jb,
    track: Mb,
    ul: Lb,
    video: Rb
  },
      Vb = Object.freeze({
    __proto__: null,
    a: mC,
    abbr: gC,
    applet: DC,
    area: yC,
    audio: EC,
    base: CC,
    basefont: bC,
    bdo: AC,
    blockquote: vC,
    body: FC,
    br: xC,
    button: SC,
    canvas: wC,
    caption: BC,
    col: TC,
    colgroup: kC,
    data: NC,
    del: OC,
    details: PC,
    dfn: _C,
    dialog: IC,
    dir: jC,
    div: MC,
    dl: LC,
    embed: RC,
    fieldset: qC,
    font: VC,
    form: WC,
    frame: $C,
    frameset: UC,
    h1: zC,
    h2: JC,
    h3: GC,
    h4: HC,
    h5: XC,
    h6: YC,
    head: KC,
    hr: QC,
    html: ZC,
    iframe: eb,
    img: tb,
    input: nb,
    ins: rb,
    isindex: ub,
    label: ob,
    legend: ab,
    li: ib,
    link: sb,
    map: lb,
    menu: cb,
    meta: pb,
    meter: db,
    object: fb,
    ol: hb,
    optgroup: mb,
    option: gb,
    output: Db,
    p: yb,
    param: Eb,
    pre: Cb,
    progress: bb,
    q: Ab,
    script: vb,
    select: Fb,
    slot: xb,
    source: Sb,
    style: wb,
    table: Bb,
    tbody: Tb,
    td: kb,
    textarea: Nb,
    tfoot: Ob,
    th: Pb,
    thead: _b,
    time: Ib,
    tr: jb,
    track: Mb,
    ul: Lb,
    video: Rb,
    default: qb
  }),
      Wb = Ue(hC),
      $b = Ue(Vb);

  var Ub = Lt.getParserName,
      zb = Lt.isFrontMatterNode,
      _CSS_DISPLAY_TAGS$CSS = {
    CSS_DISPLAY_TAGS: {
      area: "none",
      base: "none",
      basefont: "none",
      datalist: "none",
      head: "none",
      link: "none",
      meta: "none",
      noembed: "none",
      noframes: "none",
      param: "block",
      rp: "none",
      script: "block",
      source: "block",
      style: "none",
      template: "inline",
      track: "block",
      title: "none",
      html: "block",
      body: "block",
      address: "block",
      blockquote: "block",
      center: "block",
      div: "block",
      figure: "block",
      figcaption: "block",
      footer: "block",
      form: "block",
      header: "block",
      hr: "block",
      legend: "block",
      listing: "block",
      main: "block",
      p: "block",
      plaintext: "block",
      pre: "block",
      xmp: "block",
      slot: "contents",
      ruby: "ruby",
      rt: "ruby-text",
      article: "block",
      aside: "block",
      h1: "block",
      h2: "block",
      h3: "block",
      h4: "block",
      h5: "block",
      h6: "block",
      hgroup: "block",
      nav: "block",
      section: "block",
      dir: "block",
      dd: "block",
      dl: "block",
      dt: "block",
      ol: "block",
      ul: "block",
      li: "list-item",
      table: "table",
      caption: "table-caption",
      colgroup: "table-column-group",
      col: "table-column",
      thead: "table-header-group",
      tbody: "table-row-group",
      tfoot: "table-footer-group",
      tr: "table-row",
      td: "table-cell",
      th: "table-cell",
      fieldset: "block",
      button: "inline-block",
      details: "block",
      summary: "block",
      dialog: "block",
      meter: "inline-block",
      progress: "inline-block",
      object: "inline-block",
      video: "inline-block",
      audio: "inline-block",
      select: "inline-block",
      option: "block",
      optgroup: "block"
    },
    CSS_DISPLAY_DEFAULT: "inline",
    CSS_WHITE_SPACE_TAGS: {
      listing: "pre",
      plaintext: "pre",
      pre: "pre",
      xmp: "pre",
      nobr: "nowrap",
      table: "initial",
      textarea: "pre-wrap"
    },
    CSS_WHITE_SPACE_DEFAULT: "normal"
  },
      Jb = _CSS_DISPLAY_TAGS$CSS.CSS_DISPLAY_TAGS,
      Gb = _CSS_DISPLAY_TAGS$CSS.CSS_DISPLAY_DEFAULT,
      Hb = _CSS_DISPLAY_TAGS$CSS.CSS_WHITE_SPACE_TAGS,
      Xb = _CSS_DISPLAY_TAGS$CSS.CSS_WHITE_SPACE_DEFAULT,
      Yb = tA(Wb),
      Kb = function (e, t) {
    var n = Object.create(null);

    for (var _i51 = 0, _Object$keys22 = Object.keys(e); _i51 < _Object$keys22.length; _i51++) {
      var _r107 = _Object$keys22[_i51];
      n[_r107] = t(e[_r107], _r107);
    }

    return n;
  }($b, tA),
      Qb = new Set(["\t", "\n", "\f", "\r", " "]),
      Zb = function Zb(e) {
    return e.replace(/[\t\n\f\r ]+$/, "");
  },
      eA = function eA(e) {
    return e.match(/^[\t\n\f\r ]*/)[0];
  };

  function tA(e) {
    var t = Object.create(null);

    var _iterator41 = _createForOfIteratorHelper(e),
        _step41;

    try {
      for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
        var _n82 = _step41.value;
        t[_n82] = !0;
      }
    } catch (err) {
      _iterator41.e(err);
    } finally {
      _iterator41.f();
    }

    return t;
  }

  function nA(e, t) {
    return !("ieConditionalComment" !== e.type || !e.lastChild || e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) || "ieConditionalComment" === e.type && !e.complete || !(!hA(e) || !e.children.some(function (e) {
      return "text" !== e.type && "interpolation" !== e.type;
    })) || !(!CA(e, t) || uA(e) || "interpolation" === e.type);
  }

  function rA(e) {
    if ("attribute" === e.type) return !1;
    if (!e.parent) return !1;
    if ("number" != typeof e.index || 0 === e.index) return !1;
    return function (e) {
      return "comment" === e.type && "prettier-ignore" === e.value.trim();
    }(e.parent.children[e.index - 1]);
  }

  function uA(e) {
    return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || mA(e) && ("script" === e.name || "style" === e.name));
  }

  function oA(e) {
    return gA(e).startsWith("pre");
  }

  function aA(e) {
    return "element" === e.type && 0 !== e.children.length && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay);
  }

  function iA(e) {
    return pA(e) || "element" === e.type && "br" === e.fullName || sA(e);
  }

  function sA(e) {
    return lA(e) && cA(e);
  }

  function lA(e) {
    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
  }

  function cA(e) {
    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
  }

  function pA(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "comment":
      case "directive":
        return !0;

      case "element":
        return ["script", "select"].includes(e.name);
    }

    return !1;
  }

  function dA(e) {
    var _e$attrMap = e.attrMap,
        t = _e$attrMap.type,
        n = _e$attrMap.lang;
    return "module" === t || "text/javascript" === t || "text/babel" === t || "application/javascript" === t || "jsx" === n ? "babel" : "application/x-typescript" === t || "ts" === n || "tsx" === n ? "typescript" : "text/markdown" === t ? "markdown" : "text/html" === t ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) ? "json" : "text/x-handlebars-template" === t ? "glimmer" : void 0;
  }

  function fA(e) {
    return "block" === e || "list-item" === e || e.startsWith("table");
  }

  function hA(e) {
    return gA(e).startsWith("pre");
  }

  function mA(e) {
    return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
  }

  function gA(e) {
    return "element" === e.type && (!e.namespace || mA(e)) && Hb[e.name] || Xb;
  }

  var DA = new Set(["template", "style", "script"]);

  function yA(e, t) {
    return EA(e, t) && !DA.has(e.fullName);
  }

  function EA(e, t) {
    return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
  }

  function CA(e, t) {
    return EA(e, t) && (yA(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang);
  }

  var bA = {
    HTML_ELEMENT_ATTRIBUTES: Kb,
    HTML_TAGS: Yb,
    htmlTrim: function htmlTrim(e) {
      return function (e) {
        return e.replace(/^[\t\n\f\r ]+/, "");
      }(Zb(e));
    },
    htmlTrimPreserveIndentation: function htmlTrimPreserveIndentation(e) {
      return function (e) {
        return e.replace(/^[\t\f\r ]*?\n/g, "");
      }(Zb(e));
    },
    splitByHtmlWhitespace: function splitByHtmlWhitespace(e) {
      return e.split(/[\t\n\f\r ]+/);
    },
    hasHtmlWhitespace: function hasHtmlWhitespace(e) {
      return /[\t\n\f\r ]/.test(e);
    },
    getLeadingAndTrailingHtmlWhitespace: function getLeadingAndTrailingHtmlWhitespace(e) {
      var _e$match = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/),
          _e$match2 = _slicedToArray(_e$match, 4),
          t = _e$match2[1],
          n = _e$match2[2],
          r = _e$match2[3];

      return {
        leadingWhitespace: t,
        trailingWhitespace: r,
        text: n
      };
    },
    canHaveInterpolation: function canHaveInterpolation(e) {
      return e.children && !uA(e);
    },
    countChars: function countChars(e, t) {
      var n = 0;

      for (var _r108 = 0; _r108 < e.length; _r108++) {
        e[_r108] === t && n++;
      }

      return n;
    },
    countParents: function countParents(e, t) {
      var n = 0;

      for (var _r109 = e.stack.length - 1; _r109 >= 0; _r109--) {
        var _u49 = e.stack[_r109];
        _u49 && "object" == _typeof(_u49) && !Array.isArray(_u49) && t(_u49) && n++;
      }

      return n;
    },
    dedentString: function dedentString(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {
        var t = 1 / 0;

        var _iterator42 = _createForOfIteratorHelper(e.split("\n")),
            _step42;

        try {
          for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
            var _n83 = _step42.value;
            if (0 === _n83.length) continue;
            if (!Qb.has(_n83[0])) return 0;
            var _e135 = eA(_n83).length;
            _n83.length !== _e135 && _e135 < t && (t = _e135);
          }
        } catch (err) {
          _iterator42.e(err);
        } finally {
          _iterator42.f();
        }

        return t === 1 / 0 ? 0 : t;
      }(e);
      return 0 === t ? e : e.split("\n").map(function (e) {
        return e.slice(t);
      }).join("\n");
    },
    forceBreakChildren: aA,
    forceBreakContent: function forceBreakContent(e) {
      return aA(e) || "element" === e.type && 0 !== e.children.length && (["body", "script", "style"].includes(e.name) || e.children.some(function (e) {
        return function (e) {
          return e.children && e.children.some(function (e) {
            return "text" !== e.type;
          });
        }(e);
      })) || e.firstChild && e.firstChild === e.lastChild && "text" !== e.firstChild.type && lA(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || cA(e.lastChild));
    },
    forceNextEmptyLine: function forceNextEmptyLine(e) {
      return zb(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
    },
    getLastDescendant: function e(t) {
      return t.lastChild ? e(t.lastChild) : t;
    },
    getNodeCssStyleDisplay: function getNodeCssStyleDisplay(e, t) {
      if (e.prev && "comment" === e.prev.type) {
        var _t111 = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);

        if (_t111) return _t111[1];
      }

      var n = !1;

      if ("element" === e.type && "svg" === e.namespace) {
        if (!function (e, t) {
          var n = e;

          for (; n;) {
            if (t(n)) return !0;
            n = n.parent;
          }

          return !1;
        }(e, function (e) {
          return "svg:foreignObject" === e.fullName;
        })) return "svg" === e.name ? "inline-block" : "block";
        n = !0;
      }

      switch (t.htmlWhitespaceSensitivity) {
        case "strict":
          return "inline";

        case "ignore":
          return "block";

        default:
          return "vue" === t.parser && e.parent && "root" === e.parent.type ? "block" : "element" === e.type && (!e.namespace || n || mA(e)) && Jb[e.name] || Gb;
      }
    },
    getNodeCssStyleWhiteSpace: gA,
    getPrettierIgnoreAttributeCommentData: function getPrettierIgnoreAttributeCommentData(e) {
      var t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
      return !!t && (!t[1] || t[1].split(/\s+/));
    },
    hasPrettierIgnore: rA,
    inferScriptParser: function inferScriptParser(e, t) {
      return "script" !== e.name || e.attrMap.src ? "style" === e.name ? function (e) {
        var t = e.attrMap.lang;
        return t && "postcss" !== t && "css" !== t ? "scss" === t ? "scss" : "less" === t ? "less" : void 0 : "css";
      }(e) : t && CA(e, t) ? dA(e) || !("src" in e.attrMap) && Ub(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? dA(e) : "babel";
    },
    isVueCustomBlock: yA,
    isVueNonHtmlBlock: CA,
    isDanglingSpaceSensitiveNode: function isDanglingSpaceSensitiveNode(e) {
      return !(t = e.cssDisplay, fA(t) || "inline-block" === t || uA(e));
      var t;
    },
    isIndentationSensitiveNode: oA,
    isLeadingSpaceSensitiveNode: function isLeadingSpaceSensitiveNode(e, t) {
      var n = function () {
        if (zb(e)) return !1;
        if (("text" === e.type || "interpolation" === e.type) && e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type)) return !0;
        if (!e.parent || "none" === e.parent.cssDisplay) return !1;
        if (hA(e.parent)) return !0;
        if (!e.prev && ("root" === e.parent.type || hA(e) && e.parent || uA(e.parent) || yA(e.parent, t) || (n = e.parent.cssDisplay, fA(n) || "inline-block" === n))) return !1;
        var n;
        if (e.prev && !function (e) {
          return !fA(e);
        }(e.prev.cssDisplay)) return !1;
        return !0;
      }();

      return n && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : n;
    },
    isPreLikeNode: hA,
    isScriptLikeTag: uA,
    isTextLikeNode: function isTextLikeNode(e) {
      return "text" === e.type || "comment" === e.type;
    },
    isTrailingSpaceSensitiveNode: function isTrailingSpaceSensitiveNode(e, t) {
      return !zb(e) && (!("text" !== e.type && "interpolation" !== e.type || !e.next || "text" !== e.next.type && "interpolation" !== e.next.type) || !(!e.parent || "none" === e.parent.cssDisplay) && (!!hA(e.parent) || !(!e.next && ("root" === e.parent.type || hA(e) && e.parent || uA(e.parent) || yA(e.parent, t) || (n = e.parent.cssDisplay, fA(n) || "inline-block" === n))) && !(e.next && !function (e) {
        return !fA(e);
      }(e.next.cssDisplay))));
      var n;
    },
    isWhitespaceSensitiveNode: function isWhitespaceSensitiveNode(e) {
      return uA(e) || "interpolation" === e.type || oA(e);
    },
    isUnknownNamespace: mA,
    preferHardlineAsLeadingSpaces: function preferHardlineAsLeadingSpaces(e) {
      return pA(e) || e.prev && iA(e.prev) || sA(e);
    },
    preferHardlineAsTrailingSpaces: iA,
    shouldNotPrintClosingTag: function shouldNotPrintClosingTag(e, t) {
      return !e.isSelfClosing && !e.endSourceSpan && (rA(e) || nA(e.parent, t));
    },
    shouldPreserveContent: nA,
    unescapeQuoteEntities: function unescapeQuoteEntities(e) {
      return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
    }
  };
  var AA = bA.htmlTrim,
      vA = bA.getLeadingAndTrailingHtmlWhitespace,
      FA = bA.hasHtmlWhitespace,
      xA = bA.canHaveInterpolation,
      SA = bA.getNodeCssStyleDisplay,
      wA = bA.isDanglingSpaceSensitiveNode,
      BA = bA.isIndentationSensitiveNode,
      TA = bA.isLeadingSpaceSensitiveNode,
      kA = bA.isTrailingSpaceSensitiveNode,
      NA = bA.isWhitespaceSensitiveNode,
      OA = [function (e) {
    return e.map(function (e) {
      if ("element" === e.type && e.tagDefinition.ignoreFirstLf && 0 !== e.children.length && "text" === e.children[0].type && "\n" === e.children[0].value[0]) {
        var _e$children2 = _toArray(e.children),
            _t112 = _e$children2[0],
            _n84 = _e$children2.slice(1);

        return e.clone({
          children: 1 === _t112.value.length ? _n84 : [_t112.clone({
            value: _t112.value.slice(1)
          })].concat(_toConsumableArray(_n84))
        });
      }

      return e;
    });
  }, function (e) {
    var t = function t(e) {
      return "element" === e.type && e.prev && "ieConditionalStartComment" === e.prev.type && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild && "ieConditionalEndComment" === e.firstChild.type && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
    };

    return e.map(function (e) {
      if (e.children) {
        var _n85 = e.children.map(t);

        if (_n85.some(Boolean)) {
          var _t113 = [];

          for (var _r110 = 0; _r110 < e.children.length; _r110++) {
            var _u50 = e.children[_r110];
            if (!_n85[_r110 + 1]) if (_n85[_r110]) {
              var _e136 = _u50.prev,
                  _n86 = _u50.firstChild,
                  _r111 = _u50.sourceSpan.constructor,
                  _o64 = new _r111(_e136.sourceSpan.start, _n86.sourceSpan.end),
                  _a45 = new _r111(_o64.start, _u50.sourceSpan.end);

              _t113.push(_u50.clone({
                condition: _e136.condition,
                sourceSpan: _a45,
                startSourceSpan: _o64,
                children: _u50.children.slice(1)
              }));
            } else _t113.push(_u50);
          }

          return e.clone({
            children: _t113
          });
        }
      }

      return e;
    });
  }, function (e) {
    return function (e, t, n) {
      return e.map(function (e) {
        if (e.children) {
          var _r112 = e.children.map(t);

          if (_r112.some(Boolean)) {
            var _t114 = [];

            for (var _u51 = 0; _u51 < e.children.length; _u51++) {
              var _o65 = e.children[_u51];

              if ("text" !== _o65.type && !_r112[_u51]) {
                _t114.push(_o65);

                continue;
              }

              var _a46 = "text" === _o65.type ? _o65 : _o65.clone({
                type: "text",
                value: n(_o65)
              });

              if (0 === _t114.length || "text" !== _t114[_t114.length - 1].type) {
                _t114.push(_a46);

                continue;
              }

              var _i52 = _t114.pop(),
                  _s24 = _i52.sourceSpan.constructor;

              _t114.push(_i52.clone({
                value: _i52.value + _a46.value,
                sourceSpan: new _s24(_i52.sourceSpan.start, _a46.sourceSpan.end)
              }));
            }

            return e.clone({
              children: _t114
            });
          }
        }

        return e;
      });
    }(e, function (e) {
      return "cdata" === e.type;
    }, function (e) {
      return "<![CDATA[".concat(e.value, "]]>");
    });
  }, function (e, t) {
    if ("html" === t.parser) return e;
    var n = /{{([\S\s]+?)}}/g;
    return e.map(function (e) {
      if (!xA(e)) return e;
      var t = [];

      var _iterator43 = _createForOfIteratorHelper(e.children),
          _step43;

      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var _r113 = _step43.value;

          if ("text" !== _r113.type) {
            t.push(_r113);
            continue;
          }

          var _e137 = _r113.sourceSpan.constructor;
          var _u52 = _r113.sourceSpan.start,
              _o66 = null;

          var _a47 = _r113.value.split(n);

          for (var _n87 = 0; _n87 < _a47.length; _n87++, _u52 = _o66) {
            var _r114 = _a47[_n87];
            _n87 % 2 != 0 ? (_o66 = _u52.moveBy(_r114.length + 4), t.push({
              type: "interpolation",
              sourceSpan: new _e137(_u52, _o66),
              children: 0 === _r114.length ? [] : [{
                type: "text",
                value: _r114,
                sourceSpan: new _e137(_u52.moveBy(2), _o66.moveBy(-2))
              }]
            })) : (_o66 = _u52.moveBy(_r114.length), 0 !== _r114.length && t.push({
              type: "text",
              value: _r114,
              sourceSpan: new _e137(_u52, _o66)
            }));
          }
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }

      return e.clone({
        children: t
      });
    });
  }, function (e) {
    return e.map(function (e) {
      if (!e.children) return e;
      if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === AA(e.children[0].value).length) return e.clone({
        children: [],
        hasDanglingSpaces: 0 !== e.children.length
      });
      var t = NA(e),
          n = BA(e);
      return e.clone({
        isWhitespaceSensitive: t,
        isIndentationSensitive: n,
        children: e.children.reduce(function (e, n) {
          if ("text" !== n.type || t) return e.concat(n);

          var r = [],
              _vA = vA(n.value),
              u = _vA.leadingWhitespace,
              o = _vA.text,
              a = _vA.trailingWhitespace;

          u && r.push({
            type: "whitespace"
          });
          var i = n.sourceSpan.constructor;
          return o && r.push({
            type: "text",
            value: o,
            sourceSpan: new i(n.sourceSpan.start.moveBy(u.length), n.sourceSpan.end.moveBy(-a.length))
          }), a && r.push({
            type: "whitespace"
          }), e.concat(r);
        }, []).reduce(function (e, t, n, r) {
          if ("whitespace" === t.type) return e;
          var u = 0 !== n && "whitespace" === r[n - 1].type,
              o = n !== r.length - 1 && "whitespace" === r[n + 1].type;
          return e.concat(Object.assign({}, t, {
            hasLeadingSpaces: u,
            hasTrailingSpaces: o
          }));
        }, [])
      });
    });
  }, function (e, t) {
    return e.map(function (e) {
      return Object.assign(e, {
        cssDisplay: SA(e, t)
      });
    });
  }, function (e) {
    return e.map(function (e) {
      return Object.assign(e, {
        isSelfClosing: !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan)
      });
    });
  }, function (e, t) {
    return e.map(function (e) {
      return "element" !== e.type ? e : Object.assign(e, {
        hasHtmComponentClosingTag: e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset))
      });
    });
  }, function (e, t) {
    return e.map(function (e) {
      return e.children ? 0 === e.children.length ? e.clone({
        isDanglingSpaceSensitive: wA(e)
      }) : e.clone({
        children: e.children.map(function (e) {
          return Object.assign({}, e, {
            isLeadingSpaceSensitive: TA(e, t),
            isTrailingSpaceSensitive: kA(e, t)
          });
        }).map(function (e, t, n) {
          return Object.assign({}, e, {
            isLeadingSpaceSensitive: (0 === t || n[t - 1].isTrailingSpaceSensitive) && e.isLeadingSpaceSensitive,
            isTrailingSpaceSensitive: (t === n.length - 1 || n[t + 1].isLeadingSpaceSensitive) && e.isTrailingSpaceSensitive
          });
        })
      }) : e;
    });
  }, function (e) {
    var t = function t(e) {
      return "element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !FA(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev && "text" === e.prev.type && e.next && "text" === e.next.type;
    };

    return e.map(function (e) {
      if (e.children) {
        var _n88 = e.children.map(t);

        if (_n88.some(Boolean)) {
          var _t115 = [];

          for (var _r115 = 0; _r115 < e.children.length; _r115++) {
            var _u53 = e.children[_r115];

            if (_n88[_r115]) {
              var _n89 = _t115.pop(),
                  _o67 = e.children[++_r115],
                  _a48 = e.sourceSpan.constructor,
                  _i53 = _o67.isTrailingSpaceSensitive,
                  _s25 = _o67.hasTrailingSpaces;

              _t115.push(_n89.clone({
                value: _n89.value + "<".concat(_u53.rawName, ">") + _u53.firstChild.value + "</".concat(_u53.rawName, ">") + _o67.value,
                sourceSpan: new _a48(_n89.sourceSpan.start, _o67.sourceSpan.end),
                isTrailingSpaceSensitive: _i53,
                hasTrailingSpaces: _s25
              }));
            } else _t115.push(_u53);
          }

          return e.clone({
            children: _t115
          });
        }
      }

      return e;
    });
  }];

  var PA = function PA(e, t) {
    var _iterator44 = _createForOfIteratorHelper(OA),
        _step44;

    try {
      for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
        var _n90 = _step44.value;
        e = _n90(e, t);
      }
    } catch (err) {
      _iterator44.e(err);
    } finally {
      _iterator44.f();
    }

    return e;
  };

  var _A = {
    hasPragma: function hasPragma(e) {
      return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e);
    },
    insertPragma: function insertPragma(e) {
      return "\x3c!-- @format --\x3e\n\n" + e.replace(/^\s*\n/, "");
    }
  };
  var _ln$builders18 = ln.builders,
      IA = _ln$builders18.concat,
      jA = _ln$builders18.group;
  var MA = {
    isVueEventBindingExpression: function isVueEventBindingExpression(e) {
      var t = e.trim();
      return /^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t);
    },
    printVueFor: function printVueFor(e, t) {
      var _ref35 = function (e) {
        var t = /([^]*?)\s+(in|of)\s+([^]*)/,
            n = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
            r = /^\(|\)$/g,
            u = e.match(t);
        if (!u) return;
        var o = {};
        o.for = u[3].trim();
        var a = u[1].trim().replace(r, ""),
            i = a.match(n);
        i ? (o.alias = a.replace(n, ""), o.iterator1 = i[1].trim(), i[2] && (o.iterator2 = i[2].trim())) : o.alias = a;
        return {
          left: "".concat([o.alias, o.iterator1, o.iterator2].filter(Boolean).join(",")),
          operator: u[2],
          right: o.for
        };
      }(e),
          n = _ref35.left,
          r = _ref35.operator,
          u = _ref35.right;

      return IA([jA(t("function _(".concat(n, ") {}"), {
        parser: "babel",
        __isVueForBindingLeft: !0
      })), " ", r, " ", t(u, {
        parser: "__js_expression"
      }, {
        stripTrailingHardline: !0
      })]);
    },
    printVueSlotScope: function printVueSlotScope(e, t) {
      return t("function _(".concat(e, ") {}"), {
        parser: "babel",
        __isVueSlotScope: !0
      }, {
        stripTrailingHardline: !0
      });
    }
  },
      LA = $e(function (e) {
    !function (t, n) {
      e.exports ? e.exports = n() : t.parseSrcset = n();
    }(We, function () {
      return function (e, t) {
        var n = t && t.logger || console;

        function r(e) {
          return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
        }

        function u(t) {
          var n,
              r = t.exec(e.substring(D));
          if (r) return n = r[0], D += n.length, n;
        }

        for (var o, a, i, s, l, c = e.length, p = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, f = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, m = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D = 0, y = [];;) {
          if (u(d), D >= c) return y;
          o = u(f), a = [], "," === o.slice(-1) ? (o = o.replace(h, ""), C()) : E();
        }

        function E() {
          for (u(p), i = "", s = "in descriptor";;) {
            if (l = e.charAt(D), "in descriptor" === s) {
              if (r(l)) i && (a.push(i), i = "", s = "after descriptor");else {
                if ("," === l) return D += 1, i && a.push(i), void C();
                if ("(" === l) i += l, s = "in parens";else {
                  if ("" === l) return i && a.push(i), void C();
                  i += l;
                }
              }
            } else if ("in parens" === s) {
              if (")" === l) i += l, s = "in descriptor";else {
                if ("" === l) return a.push(i), void C();
                i += l;
              }
            } else if ("after descriptor" === s) if (r(l)) ;else {
              if ("" === l) return void C();
              s = "in descriptor", D -= 1;
            }
            D += 1;
          }
        }

        function C() {
          var t,
              r,
              u,
              i,
              s,
              l,
              c,
              p,
              d,
              f = !1,
              h = {};

          for (i = 0; i < a.length; i++) {
            l = (s = a[i])[s.length - 1], c = s.substring(0, s.length - 1), p = parseInt(c, 10), d = parseFloat(c), m.test(c) && "w" === l ? ((t || r) && (f = !0), 0 === p ? f = !0 : t = p) : g.test(c) && "x" === l ? ((t || r || u) && (f = !0), d < 0 ? f = !0 : r = d) : m.test(c) && "h" === l ? ((u || r) && (f = !0), 0 === p ? f = !0 : u = p) : f = !0;
          }

          f ? n && n.error && n.error("Invalid srcset descriptor found in '" + e + "' at '" + s + "'.") : (h.url = o, t && (h.w = t), r && (h.d = r), u && (h.h = u), y.push(h));
        }
      };
    });
  });
  var _ln$builders19 = ln.builders,
      RA = _ln$builders19.concat,
      qA = _ln$builders19.ifBreak,
      VA = _ln$builders19.join,
      WA = _ln$builders19.line;
  var $A = {
    printImgSrcset: function printImgSrcset(e) {
      var t = LA(e, {
        logger: {
          error: function error(e) {
            throw new Error(e);
          }
        }
      }),
          n = t.some(function (_ref36) {
        var e = _ref36.w;
        return e;
      }),
          r = t.some(function (_ref37) {
        var e = _ref37.h;
        return e;
      });
      if (n + r + t.some(function (_ref38) {
        var e = _ref38.d;
        return e;
      }) > 1) throw new Error("Mixed descriptor in srcset is not supported");

      var u = n ? "w" : r ? "h" : "d",
          o = n ? "w" : r ? "h" : "x",
          a = function a(e) {
        return Math.max.apply(Math, _toConsumableArray(e));
      },
          i = t.map(function (e) {
        return e.url;
      }),
          s = a(i.map(function (e) {
        return e.length;
      })),
          l = t.map(function (e) {
        return e[u];
      }).map(function (e) {
        return e ? e.toString() : "";
      }),
          c = l.map(function (e) {
        var t = e.indexOf(".");
        return -1 === t ? e.length : t;
      }),
          p = a(c);

      return VA(RA([",", WA]), i.map(function (e, t) {
        var n = [e],
            r = l[t];

        if (r) {
          var _u54 = s - e.length + 1,
              _a49 = p - c[t],
              _i54 = " ".repeat(_u54 + _a49);

          n.push(qA(_i54, " "), r + o);
        }

        return RA(n);
      }));
    },
    printClassNames: function printClassNames(e) {
      return e.trim().split(/\s+/).join(" ");
    }
  };
  var UA = ln.builders,
      _ln$utils2 = ln.utils,
      zA = _ln$utils2.mapDoc,
      JA = _ln$utils2.normalizeParts,
      GA = Lt.replaceEndOfLineWith,
      HA = mm.print,
      XA = UA.breakParent,
      YA = UA.dedentToRoot,
      KA = UA.fill,
      QA = UA.group,
      ZA = UA.hardline,
      ev = UA.ifBreak,
      tv = UA.indent,
      nv = UA.join,
      rv = UA.line,
      uv = UA.literalline,
      ov = UA.softline,
      av = bA.htmlTrimPreserveIndentation,
      iv = bA.splitByHtmlWhitespace,
      sv = bA.countChars,
      lv = bA.countParents,
      cv = bA.dedentString,
      pv = bA.forceBreakChildren,
      dv = bA.forceBreakContent,
      fv = bA.forceNextEmptyLine,
      hv = bA.getLastDescendant,
      mv = bA.getPrettierIgnoreAttributeCommentData,
      gv = bA.hasPrettierIgnore,
      Dv = bA.inferScriptParser,
      yv = bA.isVueCustomBlock,
      Ev = bA.isVueNonHtmlBlock,
      Cv = bA.isScriptLikeTag,
      bv = bA.isTextLikeNode,
      Av = bA.preferHardlineAsLeadingSpaces,
      vv = bA.shouldNotPrintClosingTag,
      Fv = bA.shouldPreserveContent,
      xv = bA.unescapeQuoteEntities,
      Sv = bA.isPreLikeNode,
      wv = _A.insertPragma,
      Bv = MA.printVueFor,
      Tv = MA.printVueSlotScope,
      kv = MA.isVueEventBindingExpression,
      Nv = $A.printImgSrcset,
      Ov = $A.printClassNames;

  function Pv(e) {
    var t = JA(e);
    return 0 === t.length ? "" : 1 === t.length ? t[0] : UA.concat(t);
  }

  function _v(e, t, n) {
    var r = e.getValue();
    if (pv(r)) return Pv([XA, Pv(e.map(function (e) {
      var t = e.getValue(),
          n = t.prev ? a(t.prev, t) : "";
      return Pv([n ? Pv([n, fv(t.prev) ? ZA : ""]) : "", o(e)]);
    }, "children"))]);
    var u = r.children.map(function () {
      return Symbol("");
    });
    return Pv(e.map(function (e, t) {
      var n = e.getValue();

      if (bv(n)) {
        if (n.prev && bv(n.prev)) {
          var _t116 = a(n.prev, n);

          if (_t116) return fv(n.prev) ? Pv([ZA, ZA, o(e)]) : Pv([_t116, o(e)]);
        }

        return o(e);
      }

      var r = [],
          i = [],
          s = [],
          l = [],
          c = n.prev ? a(n.prev, n) : "",
          p = n.next ? a(n, n.next) : "";
      return c && (fv(n.prev) ? r.push(ZA, ZA) : c === ZA ? r.push(ZA) : bv(n.prev) ? i.push(c) : i.push(ev("", ov, {
        groupId: u[t - 1]
      }))), p && (fv(n) ? bv(n.next) && l.push(ZA, ZA) : p === ZA ? bv(n.next) && l.push(ZA) : s.push(p)), Pv([].concat(r, QA(Pv([Pv(i), QA(Pv([o(e), Pv(s)]), {
        id: u[t]
      })])), l));
    }, "children"));

    function o(e) {
      var r = e.getValue();
      return gv(r) ? Pv([].concat(Hv(r, t), GA(t.originalText.slice(t.locStart(r) + (r.prev && $v(r.prev) ? Kv(r).length : 0), t.locEnd(r) - (r.next && zv(r.next) ? eF(r, t).length : 0)), uv), Yv(r, t))) : n(e);
    }

    function a(e, t) {
      return bv(e) && bv(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Av(t) ? ZA : rv : "" : Av(t) ? ZA : ov : $v(e) && (gv(t) || t.firstChild || t.isSelfClosing || "element" === t.type && 0 !== t.attrs.length) || "element" === e.type && e.isSelfClosing && zv(t) ? "" : !t.isLeadingSpaceSensitive || Av(t) || zv(t) && e.lastChild && Gv(e.lastChild) && e.lastChild.lastChild && Gv(e.lastChild.lastChild) ? ZA : t.hasLeadingSpaces ? rv : ov;
    }
  }

  function Iv(e, t) {
    var n = e.startSourceSpan.end.offset;
    e.firstChild && Uv(e.firstChild) && (n -= Qv(e).length);
    var r = e.endSourceSpan.start.offset;
    return e.lastChild && Gv(e.lastChild) ? r += Zv(e, t).length : Jv(e) && (r -= eF(e.lastChild, t).length), t.originalText.slice(n, r);
  }

  function jv(e, t, n) {
    var r = e.getValue();
    if (!r.attrs || 0 === r.attrs.length) return r.isSelfClosing ? " " : "";
    var u = r.prev && "comment" === r.prev.type && mv(r.prev.value),
        o = "boolean" == typeof u ? function () {
      return u;
    } : Array.isArray(u) ? function (e) {
      return u.includes(e.rawName);
    } : function () {
      return !1;
    },
        a = e.map(function (e) {
      var r = e.getValue();
      return o(r) ? Pv(GA(t.originalText.slice(t.locStart(r), t.locEnd(r)), uv)) : n(e);
    }, "attrs"),
        i = "element" === r.type && "script" === r.fullName && 1 === r.attrs.length && "src" === r.attrs[0].fullName && 0 === r.children.length,
        s = [tv(Pv([i ? " " : rv, nv(rv, a)]))];
    return r.firstChild && Uv(r.firstChild) || r.isSelfClosing && Jv(r.parent) || i ? s.push(r.isSelfClosing ? " " : "") : s.push(r.isSelfClosing ? rv : ov), Pv(s);
  }

  function Mv(e, t, n) {
    var r = e.getValue();
    return Pv([Lv(r, t), jv(e, t, n), r.isSelfClosing ? "" : Rv(r)]);
  }

  function Lv(e, t) {
    return e.prev && $v(e.prev) ? "" : Pv([Hv(e, t), Kv(e)]);
  }

  function Rv(e) {
    return e.firstChild && Uv(e.firstChild) ? "" : Qv(e);
  }

  function qv(e, t) {
    return Pv([e.isSelfClosing ? "" : Vv(e, t), Wv(e, t)]);
  }

  function Vv(e, t) {
    return e.lastChild && Gv(e.lastChild) ? "" : Pv([Xv(e, t), Zv(e, t)]);
  }

  function Wv(e, t) {
    return (e.next ? zv(e.next) : Jv(e.parent)) ? "" : Pv([eF(e, t), Yv(e, t)]);
  }

  function $v(e) {
    return e.next && !bv(e.next) && bv(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
  }

  function Uv(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }

  function zv(e) {
    return e.prev && "docType" !== e.prev.type && !bv(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }

  function Jv(e) {
    return e.lastChild && e.lastChild.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !bv(hv(e.lastChild)) && !Sv(e);
  }

  function Gv(e) {
    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && bv(hv(e));
  }

  function Hv(e, t) {
    return Uv(e) ? Qv(e.parent) : zv(e) ? eF(e.prev, t) : "";
  }

  function Xv(e, t) {
    return Jv(e) ? eF(e.lastChild, t) : "";
  }

  function Yv(e, t) {
    return Gv(e) ? Zv(e.parent, t) : $v(e) ? Kv(e.next) : "";
  }

  function Kv(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalStartComment":
        return "\x3c!--[if ".concat(e.condition);

      case "ieConditionalEndComment":
        return "\x3c!--<!";

      case "interpolation":
        return "{{";

      case "docType":
        return "<!DOCTYPE";

      case "element":
        if (e.condition) return "\x3c!--[if ".concat(e.condition, "]>\x3c!--\x3e<").concat(e.rawName);

      default:
        return "<".concat(e.rawName);
    }
  }

  function Qv(e) {
    switch (e.isSelfClosing, e.type) {
      case "ieConditionalComment":
        return "]>";

      case "element":
        if (e.condition) return ">\x3c!--<![endif]--\x3e";

      default:
        return ">";
    }
  }

  function Zv(e, t) {
    if (e.isSelfClosing, vv(e, t)) return "";

    switch (e.type) {
      case "ieConditionalComment":
        return "<!";

      case "element":
        if (e.hasHtmComponentClosingTag) return "<//";

      default:
        return "</".concat(e.rawName);
    }
  }

  function eF(e, t) {
    if (vv(e, t)) return "";

    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalEndComment":
        return "[endif]--\x3e";

      case "ieConditionalStartComment":
        return "]>\x3c!--\x3e";

      case "interpolation":
        return "}}";

      case "element":
        if (e.isSelfClosing) return "/>";

      default:
        return ">";
    }
  }

  function tF(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.value;
    return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? GA(t, uv) : GA(cv(av(t)), ZA) : nv(rv, iv(t)).parts;
  }

  var nF = {
    preprocess: PA,
    print: function print(e, t, n) {
      var r = e.getValue();

      switch (r.type) {
        case "front-matter":
          return Pv(GA(r.raw, uv));

        case "root":
          return t.__onHtmlRoot && t.__onHtmlRoot(r), UA.concat([QA(_v(e, t, n)), ZA]);

        case "element":
        case "ieConditionalComment":
          {
            if (Fv(r, t)) return Pv([].concat(Hv(r, t), QA(Mv(e, t, n)), GA(Iv(r, t), uv), qv(r, t), Yv(r, t)));

            var _o68 = 1 === r.children.length && "interpolation" === r.firstChild.type && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces,
                _a50 = Symbol("element-attr-group-id");

            return Pv([QA(Pv([QA(Mv(e, t, n), {
              id: _a50
            }), 0 === r.children.length ? r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? rv : "" : Pv([dv(r) ? XA : "", (u = Pv([_o68 ? ev(ov, "", {
              groupId: _a50
            }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? rv : "text" === r.firstChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive ? YA(ov) : ov, _v(e, t, n)]), _o68 ? ev(tv(u), u, {
              groupId: _a50
            }) : !Cv(r) && !yv(r, t) || "root" !== r.parent.type || "vue" !== t.parser || t.vueIndentScriptAndStyle ? tv(u) : u), (r.next ? zv(r.next) : Jv(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : _o68 ? ev(ov, "", {
              groupId: _a50
            }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? rv : ("comment" === r.lastChild.type || "text" === r.lastChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t.tabWidth * lv(e, function (e) {
              return e.parent && "root" !== e.parent.type;
            }), "}$")).test(r.lastChild.value) ? "" : ov])])), qv(r, t)]);
          }

        case "ieConditionalStartComment":
        case "ieConditionalEndComment":
          return Pv([Lv(r), Wv(r)]);

        case "interpolation":
          return Pv([Lv(r, t), Pv(e.map(n, "children")), Wv(r, t)]);

        case "text":
          if ("interpolation" === r.parent.type) {
            var _e138 = /\n[^\S\n]*?$/,
                _t117 = _e138.test(r.value),
                _n91 = _t117 ? r.value.replace(_e138, "") : r.value;

            return Pv([Pv(GA(_n91, uv)), _t117 ? ZA : ""]);
          }

          return KA(JA([].concat(Hv(r, t), tF(r), Yv(r, t))));

        case "docType":
          return Pv([QA(Pv([Lv(r, t), " ", r.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), Wv(r, t)]);

        case "comment":
          return Pv([Hv(r, t), Pv(GA(t.originalText.slice(t.locStart(r), t.locEnd(r)), uv)), Yv(r, t)]);

        case "attribute":
          {
            if (null === r.value) return r.rawName;

            var _e139 = xv(r.value),
                _t118 = sv(_e139, "'") < sv(_e139, '"') ? "'" : '"';

            return Pv([r.rawName, Pv(["=", _t118, Pv(GA('"' === _t118 ? _e139.replace(/"/g, "&quot;") : _e139.replace(/'/g, "&apos;"), uv)), _t118])]);
          }

        default:
          throw new Error("Unexpected node type ".concat(r.type));
      }

      var u;
    },
    insertPragma: wv,
    massageAstNode: function massageAstNode(e, t) {
      return delete t.sourceSpan, delete t.startSourceSpan, delete t.endSourceSpan, delete t.nameSpan, delete t.valueSpan, "text" === e.type || "comment" === e.type || fC(e) || "yaml" === e.type || "toml" === e.type ? null : ("attribute" === e.type && delete t.value, void ("docType" === e.type && delete t.value));
    },
    embed: function embed(e, t, n, r) {
      var u = e.getValue();

      switch (u.type) {
        case "element":
          if (Cv(u) || "interpolation" === u.type) return;

          if (!u.isSelfClosing && Ev(u, r)) {
            var _o69 = Dv(u, r);

            if (!_o69) return;

            var _a51 = Iv(u, r);

            var _i55 = /^\s*$/.test(_a51),
                _s26 = "";

            return _i55 || (_s26 = n(av(_a51), {
              parser: _o69
            }, {
              stripTrailingHardline: !0
            }), _i55 = "" === _s26), Pv([Hv(u, r), QA(Mv(e, r, t)), _i55 ? "" : ZA, _s26, _i55 ? "" : ZA, qv(u, r), Yv(u, r)]);
          }

          break;

        case "text":
          if (Cv(u.parent)) {
            var _e140 = Dv(u.parent);

            if (_e140) {
              var _t119 = "markdown" === _e140 ? cv(u.value.replace(/^[^\S\n]*?\n/, "")) : u.value,
                  _o70 = {
                parser: _e140
              };

              if ("html" === r.parser && "babel" === _e140) {
                var _e141 = "script";
                var _t120 = u.parent.attrMap;
                _t120 && ("module" === _t120.type || "text/babel" === _t120.type && "module" === _t120["data-type"]) && (_e141 = "module"), _o70.__babelSourceType = _e141;
              }

              return UA.concat([Pv([XA, Hv(u, r), n(_t119, _o70, {
                stripTrailingHardline: !0
              }), Yv(u, r)])]);
            }
          } else if ("interpolation" === u.parent.type) return Pv([tv(Pv([rv, n(u.value, Object.assign({
            __isInHtmlInterpolation: !0
          }, "angular" === r.parser ? {
            parser: "__ng_interpolation",
            trailingComma: "none"
          } : "vue" === r.parser ? {
            parser: "__vue_expression"
          } : {
            parser: "__js_expression"
          }), {
            stripTrailingHardline: !0
          })])), u.parent.next && zv(u.parent.next) ? " " : rv]);

          break;

        case "attribute":
          {
            if (!u.value) break;
            if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r.originalText.slice(u.valueSpan.start.offset, u.valueSpan.end.offset))) return Pv([u.rawName, "=", u.value]);

            if ("lwc" === r.parser) {
              if (/^{[\S\s]*}$/.test(r.originalText.slice(u.valueSpan.start.offset, u.valueSpan.end.offset))) return Pv([u.rawName, "=", u.value]);
            }

            var _e142 = function (e, t, n) {
              var r = function r(t) {
                return new RegExp(t.join("|")).test(e.fullName);
              },
                  u = function u() {
                return xv(e.value);
              };

              var o = !1;

              var a = function a(e, t) {
                var n = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;
                !n || "ObjectExpression" !== n.type && "ArrayExpression" !== n.type && ("__vue_expression" !== t.parser || "TemplateLiteral" !== n.type && "StringLiteral" !== n.type) || (o = !0);
              },
                  i = function i(e) {
                return QA(e);
              },
                  s = function s(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                return QA(Pv([tv(Pv([ov, e])), t ? ov : ""]));
              },
                  l = function l(e) {
                return o ? i(e) : s(e);
              },
                  c = function c(e, n) {
                return t(e, Object.assign({
                  __onHtmlBindingRoot: a
                }, n), {
                  stripTrailingHardline: !0
                });
              };

              if ("srcset" === e.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName)) return s(Nv(u()));

              if ("class" === e.fullName && !n.parentParser) {
                var _e143 = u();

                if (!_e143.includes("{{")) return Ov(_e143);
              }

              if ("style" === e.fullName && !n.parentParser) {
                var _e144 = u();

                if (!_e144.includes("{{")) return s(c(_e144, {
                  parser: "css",
                  __isHTMLStyleAttribute: !0
                }));
              }

              if ("vue" === n.parser) {
                if ("v-for" === e.fullName) return Bv(u(), c);
                if ("slot-scope" === e.fullName) return Tv(u(), c);
                var _t121 = ["^:", "^v-bind:"],
                    _n92 = ["^v-", "^#"];

                if (r(["^@", "^v-on:"])) {
                  var _e145 = u();

                  return l(c(_e145, {
                    parser: kv(_e145) ? "__js_expression" : "__vue_event_binding"
                  }));
                }

                if (r(_t121)) return l(c(u(), {
                  parser: "__vue_expression"
                }));
                if (r(_n92)) return l(c(u(), {
                  parser: "__js_expression"
                }));
              }

              if ("angular" === n.parser) {
                var _t122 = function _t122(e, t) {
                  return c(e, Object.assign({}, t, {
                    trailingComma: "none"
                  }));
                },
                    _n93 = ["^\\*"],
                    _o71 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"],
                    _a52 = ["^i18n(-.+)?$"];

                if (r(["^\\(.+\\)$", "^on-"])) return l(_t122(u(), {
                  parser: "__ng_action"
                }));
                if (r(_o71)) return l(_t122(u(), {
                  parser: "__ng_binding"
                }));

                if (r(_a52)) {
                  var _t123 = u().trim();

                  return s(KA(tF(e, _t123)), !_t123.includes("@@"));
                }

                if (r(_n93)) return l(_t122(u(), {
                  parser: "__ng_directive"
                }));

                var _i56 = /{{([\S\s]+?)}}/g,
                    _p12 = u();

                if (_i56.test(_p12)) {
                  var _e146 = [];
                  return _p12.split(_i56).forEach(function (n, r) {
                    if (r % 2 == 0) _e146.push(Pv(GA(n, uv)));else try {
                      _e146.push(QA(Pv(["{{", tv(Pv([rv, _t122(n, {
                        parser: "__ng_interpolation",
                        __isInHtmlInterpolation: !0
                      })])), rv, "}}"])));
                    } catch (t) {
                      _e146.push("{{", Pv(GA(n, uv)), "}}");
                    }
                  }), QA(Pv(_e146));
                }
              }

              return null;
            }(u, function (e, t) {
              return n(e, Object.assign({
                __isInHtmlAttribute: !0
              }, t), {
                stripTrailingHardline: !0
              });
            }, r);

            if (_e142) return Pv([u.rawName, '="', QA(zA(_e142, function (e) {
              return "string" == typeof e ? e.replace(/"/g, "&quot;") : e;
            })), '"']);
            break;
          }

        case "front-matter":
          return HA(u, n);
      }
    }
  };
  var rF = {
    htmlWhitespaceSensitivity: {
      since: "1.15.0",
      category: "HTML",
      type: "choice",
      default: "css",
      description: "How to handle whitespaces in HTML.",
      choices: [{
        value: "css",
        description: "Respect the default value of CSS display property."
      }, {
        value: "strict",
        description: "Whitespaces are considered sensitive."
      }, {
        value: "ignore",
        description: "Whitespaces are considered insensitive."
      }]
    },
    vueIndentScriptAndStyle: {
      since: "1.19.0",
      category: "HTML",
      type: "boolean",
      default: !1,
      description: "Indent script and style tags in Vue files."
    }
  },
      uF = ["xhtml"],
      oF = [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"],
      aF = {
    name: "HTML",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: uF,
    extensions: oF,
    languageId: 146
  },
      iF = Object.freeze({
    __proto__: null,
    name: "HTML",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: uF,
    extensions: oF,
    languageId: 146,
    default: aF
  }),
      sF = [".vue"],
      lF = {
    name: "Vue",
    type: "markup",
    color: "#2c3e50",
    extensions: sF,
    tmScope: "text.html.vue",
    aceMode: "html",
    languageId: 391
  },
      cF = Object.freeze({
    __proto__: null,
    name: "Vue",
    type: "markup",
    color: "#2c3e50",
    extensions: sF,
    tmScope: "text.html.vue",
    aceMode: "html",
    languageId: 391,
    default: lF
  }),
      pF = Ue(iF),
      dF = Ue(cF);
  var fF = {
    languages: [Es(pF, function () {
      return {
        name: "Angular",
        since: "1.15.0",
        parsers: ["angular"],
        vscodeLanguageIds: ["html"],
        extensions: [".component.html"],
        filenames: []
      };
    }), Es(pF, function (e) {
      return {
        since: "1.15.0",
        parsers: ["html"],
        vscodeLanguageIds: ["html"],
        extensions: e.extensions.concat([".mjml"])
      };
    }), Es(pF, function () {
      return {
        name: "Lightning Web Components",
        since: "1.17.0",
        parsers: ["lwc"],
        vscodeLanguageIds: ["html"],
        extensions: [],
        filenames: []
      };
    }), Es(dF, function () {
      return {
        since: "1.10.0",
        parsers: ["vue"],
        vscodeLanguageIds: ["vue"]
      };
    })],
    printers: {
      html: nF
    },
    options: rF,
    parsers: {
      get html() {
        return {}.parsers.html;
      },

      get vue() {
        return {}.parsers.vue;
      },

      get angular() {
        return {}.parsers.angular;
      },

      get lwc() {
        return {}.parsers.lwc;
      }

    }
  };
  var hF = {
    isPragma: function isPragma(e) {
      return /^\s*@(prettier|format)\s*$/.test(e);
    },
    hasPragma: function hasPragma(e) {
      return /^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e);
    },
    insertPragma: function insertPragma(e) {
      return "# @format\n\n".concat(e);
    }
  };
  var mF = Lt.getLast;

  function gF(e, t) {
    return e && "string" == typeof e.type && (!t || t.includes(e.type));
  }

  function DF(e) {
    return "prettier-ignore" === e.value.trim();
  }

  function yF(e) {
    return e && e.leadingComments && 0 !== e.leadingComments.length;
  }

  function EF(e) {
    return e && e.middleComments && 0 !== e.middleComments.length;
  }

  function CF(e) {
    return e && e.indicatorComment;
  }

  function bF(e) {
    return e && e.trailingComment;
  }

  function AF(e) {
    return e && e.endComments && 0 !== e.endComments.length;
  }

  function vF(e) {
    var t = [];
    var n;

    var _iterator45 = _createForOfIteratorHelper(e.split(/( +)/g)),
        _step45;

    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var _r116 = _step45.value;
        " " !== _r116 ? " " === n ? t.push(_r116) : t.push((t.pop() || "") + _r116) : void 0 === n && t.unshift(""), n = _r116;
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }

    return " " === n && t.push((t.pop() || "") + " "), "" === t[0] && (t.shift(), t.unshift(" " + (t.shift() || ""))), t;
  }

  var FF = {
    getLast: mF,
    getAncestorCount: function getAncestorCount(e, t) {
      var n = 0;
      var r = e.stack.length - 1;

      for (var _u55 = 0; _u55 < r; _u55++) {
        var _r117 = e.stack[_u55];
        gF(_r117) && t(_r117) && n++;
      }

      return n;
    },
    isNode: gF,
    isEmptyNode: function isEmptyNode(e) {
      return !(e.children && 0 !== e.children.length || function (e) {
        return yF(e) || EF(e) || CF(e) || bF(e) || AF(e);
      }(e));
    },
    mapNode: function e(t, n, r) {
      return n("children" in t ? Object.assign({}, t, {
        children: t.children.map(function (r) {
          return e(r, n, t);
        })
      }) : t, r);
    },
    defineShortcut: function defineShortcut(e, t, n) {
      Object.defineProperty(e, t, {
        get: n,
        enumerable: !1
      });
    },
    isNextLineEmpty: function isNextLineEmpty(e, t) {
      var n = 0;
      var r = t.length;

      for (var _u56 = e.position.end.offset - 1; _u56 < r; _u56++) {
        var _e147 = t[_u56];
        if ("\n" === _e147 && n++, 1 === n && /\S/.test(_e147)) return !1;
        if (2 === n) return !0;
      }

      return !1;
    },
    isLastDescendantNode: function isLastDescendantNode(e) {
      switch (e.getValue().type) {
        case "tag":
        case "anchor":
        case "comment":
          return !1;
      }

      var t = e.stack.length;

      for (var _n94 = 1; _n94 < t; _n94++) {
        var _t124 = e.stack[_n94],
            _r118 = e.stack[_n94 - 1];
        if (Array.isArray(_r118) && "number" == typeof _t124 && _t124 !== _r118.length - 1) return !1;
      }

      return !0;
    },
    getBlockValueLineContents: function getBlockValueLineContents(e, _ref39) {
      var t = _ref39.parentIndent,
          n = _ref39.isLastDescendant,
          r = _ref39.options;
      var u = e.position.start.line === e.position.end.line ? "" : r.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1],
          o = null === e.indent ? (a = u.match(/^( *)\S/m)) ? a[1].length : 1 / 0 : e.indent - 1 + t;
      var a;
      var i = u.split("\n").map(function (e) {
        return e.slice(o);
      });
      return "preserve" === r.proseWrap || "blockLiteral" === e.type ? s(i.map(function (e) {
        return 0 === e.length ? [] : [e];
      })) : s(i.map(function (e) {
        return 0 === e.length ? [] : vF(e);
      }).reduce(function (e, t, n) {
        return 0 === n || 0 === i[n - 1].length || 0 === t.length || /^\s/.test(t[0]) || /^\s|\s$/.test(mF(e)) ? e.concat([t]) : e.concat([e.pop().concat(t)]);
      }, []).map(function (e) {
        return e.reduce(function (e, t) {
          return 0 !== e.length && /\s$/.test(mF(e)) ? e.concat(e.pop() + " " + t) : e.concat(t);
        }, []);
      }).map(function (e) {
        return "never" === r.proseWrap ? [e.join(" ")] : e;
      }));

      function s(t) {
        if ("keep" === e.chomping) return 0 === mF(t).length ? t.slice(0, -1) : t;
        var r = 0;

        for (var _e148 = t.length - 1; _e148 >= 0 && 0 === t[_e148].length; _e148--) {
          r++;
        }

        return 0 === r ? t : r >= 2 && !n ? t.slice(0, -(r - 1)) : t.slice(0, -r);
      }
    },
    getFlowScalarLineContents: function getFlowScalarLineContents(e, t, n) {
      var r = t.split("\n").map(function (e, t, n) {
        return 0 === t && t === n.length - 1 ? e : 0 !== t && t !== n.length - 1 ? e.trim() : 0 === t ? e.trimEnd() : e.trimStart();
      });
      return "preserve" === n.proseWrap ? r.map(function (e) {
        return 0 === e.length ? [] : [e];
      }) : r.map(function (e) {
        return 0 === e.length ? [] : vF(e);
      }).reduce(function (t, n, u) {
        return 0 === u || 0 === r[u - 1].length || 0 === n.length || "quoteDouble" === e && mF(mF(t)).endsWith("\\") ? t.concat([n]) : t.concat([t.pop().concat(n)]);
      }, []).map(function (e) {
        return "never" === n.proseWrap ? [e.join(" ")] : e;
      });
    },
    getLastDescendantNode: function e(t) {
      return "children" in t && 0 !== t.children.length ? e(mF(t.children)) : t;
    },
    hasPrettierIgnore: function hasPrettierIgnore(e) {
      var t = e.getValue();

      if ("documentBody" === t.type) {
        var _t125 = e.getParentNode();

        return AF(_t125.head) && DF(mF(_t125.head.endComments));
      }

      return yF(t) && DF(mF(t.leadingComments));
    },
    hasLeadingComments: yF,
    hasMiddleComments: EF,
    hasIndicatorComment: CF,
    hasTrailingComment: bF,
    hasEndComments: AF
  };
  var xF = ln.builders,
      SF = xF.conditionalGroup,
      wF = xF.breakParent,
      BF = xF.concat,
      TF = xF.dedent,
      kF = xF.dedentToRoot,
      NF = xF.fill,
      OF = xF.group,
      PF = xF.hardline,
      _F = xF.ifBreak,
      IF = xF.join,
      jF = xF.line,
      MF = xF.lineSuffix,
      LF = xF.literalline,
      RF = xF.markAsRoot,
      qF = xF.softline,
      VF = Lt.replaceEndOfLineWith,
      WF = Lt.isPreviousLineEmpty,
      $F = hF.insertPragma,
      UF = hF.isPragma,
      zF = FF.getAncestorCount,
      JF = FF.getBlockValueLineContents,
      GF = FF.getFlowScalarLineContents,
      HF = FF.getLast,
      XF = FF.getLastDescendantNode,
      YF = FF.hasLeadingComments,
      KF = FF.hasMiddleComments,
      QF = FF.hasIndicatorComment,
      ZF = FF.hasTrailingComment,
      ex = FF.hasEndComments,
      tx = FF.hasPrettierIgnore,
      nx = FF.isLastDescendantNode,
      rx = FF.isNextLineEmpty,
      ux = FF.isNode,
      ox = FF.isEmptyNode,
      ax = FF.defineShortcut,
      ix = FF.mapNode;

  function sx(e) {
    switch (e.type) {
      case "document":
        ax(e, "head", function () {
          return e.children[0];
        }), ax(e, "body", function () {
          return e.children[1];
        });
        break;

      case "documentBody":
      case "sequenceItem":
      case "flowSequenceItem":
      case "mappingKey":
      case "mappingValue":
        ax(e, "content", function () {
          return e.children[0];
        });
        break;

      case "mappingItem":
      case "flowMappingItem":
        ax(e, "key", function () {
          return e.children[0];
        }), ax(e, "value", function () {
          return e.children[1];
        });
    }

    return e;
  }

  function lx(e, t, n, r, u) {
    switch (e.type) {
      case "root":
        return BF([IF(PF, n.map(function (t, r) {
          var o = e.children[r],
              a = e.children[r + 1];
          return BF([u(t), fx(o, a) ? BF([PF, "...", ZF(o) ? BF([" ", n.call(u, "trailingComment")]) : ""]) : !a || ZF(a.head) ? "" : BF([PF, "---"])]);
        }, "children")), 0 === e.children.length || (a = XF(e), ux(a, ["blockLiteral", "blockFolded"]) && "keep" === a.chomping) ? "" : PF]);

      case "document":
        {
          var _o72 = t.children[n.getName() + 1];
          return IF(PF, ["head" === hx(e, _o72, t, r) ? IF(PF, [0 === e.head.children.length && 0 === e.head.endComments.length ? "" : n.call(u, "head"), BF(["---", ZF(e.head) ? BF([" ", n.call(u, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", dx(e) ? n.call(u, "body") : ""].filter(Boolean));
        }

      case "documentHead":
        return IF(PF, [].concat(n.map(u, "children"), n.map(u, "endComments")));

      case "documentBody":
        {
          var _t126 = IF(PF, n.map(u, "children")).parts,
              _r119 = IF(PF, n.map(u, "endComments")).parts,
              _o73 = 0 === _t126.length || 0 === _r119.length ? "" : function (e) {
            return ux(e, ["blockFolded", "blockLiteral"]) ? "keep" === e.chomping ? "" : BF([PF, PF]) : PF;
          }(XF(e));

          return BF([].concat(_t126, _o73, _r119));
        }

      case "directive":
        return BF(["%", IF(" ", [e.name].concat(e.parameters))]);

      case "comment":
        return BF(["#", e.value]);

      case "alias":
        return BF(["*", e.value]);

      case "tag":
        return r.originalText.slice(e.position.start.offset, e.position.end.offset);

      case "anchor":
        return BF(["&", e.value]);

      case "plain":
        return yx(e.type, r.originalText.slice(e.position.start.offset, e.position.end.offset), r);

      case "quoteDouble":
      case "quoteSingle":
        {
          var _t127 = "'",
              _n95 = '"',
              _u57 = r.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);

          if ("quoteSingle" === e.type && _u57.includes("\\") || "quoteDouble" === e.type && /\\[^"]/.test(_u57)) {
            var _o75 = "quoteDouble" === e.type ? _n95 : _t127;

            return BF([_o75, yx(e.type, _u57, r), _o75]);
          }

          if (_u57.includes(_n95)) return BF([_t127, yx(e.type, "quoteDouble" === e.type ? _u57.replace(/\\"/g, _n95).replace(/'/g, _t127.repeat(2)) : _u57, r), _t127]);
          if (_u57.includes(_t127)) return BF([_n95, yx(e.type, "quoteSingle" === e.type ? _u57.replace(/''/g, _t127) : _u57, r), _n95]);

          var _o74 = r.singleQuote ? _t127 : _n95;

          return BF([_o74, yx(e.type, _u57, r), _o74]);
        }

      case "blockFolded":
      case "blockLiteral":
        {
          var _t128 = zF(n, function (e) {
            return ux(e, ["sequence", "mapping"]);
          }),
              _o76 = nx(n);

          return BF(["blockFolded" === e.type ? ">" : "|", null === e.indent ? "" : e.indent.toString(), "clip" === e.chomping ? "" : "keep" === e.chomping ? "+" : "-", QF(e) ? BF([" ", n.call(u, "indicatorComment")]) : "", (null === e.indent ? TF : kF)(cx(null === e.indent ? r.tabWidth : e.indent - 1 + _t128, BF(JF(e, {
            parentIndent: _t128,
            isLastDescendant: _o76,
            options: r
          }).reduce(function (t, n, r, u) {
            return t.concat(0 === r ? PF : "", NF(IF(jF, n).parts), r !== u.length - 1 ? 0 === n.length ? PF : RF(LF) : "keep" === e.chomping && _o76 ? 0 === n.length ? kF(PF) : kF(LF) : "");
          }, []))))]);
        }

      case "sequence":
        return IF(PF, n.map(u, "children"));

      case "sequenceItem":
        return BF(["- ", cx(2, e.content ? n.call(u, "content") : "")]);

      case "mappingKey":
      case "mappingValue":
        return e.content ? n.call(u, "content") : "";

      case "mapping":
        return IF(PF, n.map(u, "children"));

      case "mappingItem":
      case "flowMappingItem":
        {
          var _o77 = ox(e.key),
              _a53 = ox(e.value);

          if (_o77 && _a53) return BF([": "]);

          var _s27 = n.call(u, "key"),
              _l21 = n.call(u, "value");

          if (_a53) return "flowMappingItem" === e.type && "flowMapping" === t.type ? _s27 : "mappingItem" !== e.type || !mx(e.key.content, r) || ZF(e.key.content) || t.tag && "tag:yaml.org,2002:set" === t.tag.value ? BF(["? ", cx(2, _s27)]) : BF([_s27, gx(e) ? " " : "", ":"]);
          if (_o77) return BF([": ", cx(2, _l21)]);

          var _c16 = Symbol("mappingKey");

          return YF(e.value) || !px(e.key.content) ? BF(["? ", cx(2, _s27), PF, IF("", n.map(u, "value", "leadingComments").map(function (e) {
            return BF([e, PF]);
          })), ": ", cx(2, _l21)]) : !function (e) {
            if (!e) return !0;

            switch (e.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
                return e.position.start.line === e.position.end.line;

              case "alias":
                return !0;

              default:
                return !1;
            }
          }(e.key.content) || YF(e.key.content) || KF(e.key.content) || ZF(e.key.content) || ex(e.key) || YF(e.value.content) || KF(e.value.content) || ex(e.value) || !mx(e.value.content, r) ? SF([BF([OF(BF([_F("? "), OF(cx(2, _s27), {
            id: _c16
          })])), _F(BF([PF, ": ", cx(2, _l21)]), i(BF([gx(e) ? " " : "", ":", YF(e.value.content) || ex(e.value) && e.value.content && !ux(e.value.content, ["mapping", "sequence"]) || "mapping" === t.type && ZF(e.key.content) && px(e.value.content) || ux(e.value.content, ["mapping", "sequence"]) && null === e.value.content.tag && null === e.value.content.anchor ? PF : e.value.content ? jF : "", _l21])), {
            groupId: _c16
          })])]) : BF([_s27, gx(e) ? " " : "", ": ", _l21]);
        }

      case "flowMapping":
      case "flowSequence":
        {
          var _t129 = "flowMapping" === e.type ? "{" : "[",
              _a54 = "flowMapping" === e.type ? "}" : "]",
              _s28 = "flowMapping" === e.type && 0 !== e.children.length && r.bracketSpacing ? jF : qF,
              _l22 = 0 !== e.children.length && "flowMappingItem" === (o = HF(e.children)).type && ox(o.key) && ox(o.value);

          return BF([_t129, i(BF([_s28, BF(n.map(function (t, n) {
            return BF([u(t), n === e.children.length - 1 ? "" : BF([",", jF, e.children[n].position.start.line !== e.children[n + 1].position.start.line ? Dx(t, r.originalText) : ""])]);
          }, "children")), _F(",", "")])), _l22 ? "" : _s28, _a54]);
        }

      case "flowSequenceItem":
        return n.call(u, "content");

      default:
        throw new Error("Unexpected node type ".concat(e.type));
    }

    var o, a;

    function i(e) {
      return xF.align(" ".repeat(r.tabWidth), e);
    }
  }

  function cx(e, t) {
    return "number" == typeof e && e > 0 ? xF.align(" ".repeat(e), t) : xF.align(e, t);
  }

  function px(e) {
    if (!e) return !0;

    switch (e.type) {
      case "plain":
      case "quoteDouble":
      case "quoteSingle":
      case "alias":
      case "flowMapping":
      case "flowSequence":
        return !0;

      default:
        return !1;
    }
  }

  function dx(e) {
    return 0 !== e.body.children.length || ex(e.body);
  }

  function fx(e, t) {
    return ZF(e) || t && (0 !== t.head.children.length || ex(t.head));
  }

  function hx(e, t, n, r) {
    return n.children[0] === e && /---(\s|$)/.test(r.originalText.slice(r.locStart(e), r.locStart(e) + 4)) || 0 !== e.head.children.length || ex(e.head) || ZF(e.head) ? "head" : !fx(e, t) && !!t && "root";
  }

  function mx(e, t) {
    if (!e) return !0;

    switch (e.type) {
      case "plain":
      case "quoteSingle":
      case "quoteDouble":
        break;

      case "alias":
        return !0;

      default:
        return !1;
    }

    if ("preserve" === t.proseWrap) return e.position.start.line === e.position.end.line;
    if (/\\$/m.test(t.originalText.slice(e.position.start.offset, e.position.end.offset))) return !1;

    switch (t.proseWrap) {
      case "never":
        return !e.value.includes("\n");

      case "always":
        return !/[\n ]/.test(e.value);

      default:
        return !1;
    }
  }

  function gx(e) {
    return e.key.content && "alias" === e.key.content.type;
  }

  function Dx(e, t) {
    var n = e.getValue(),
        r = e.stack[0];
    return r.isNextEmptyLinePrintedChecklist = r.isNextEmptyLinePrintedChecklist || [], !r.isNextEmptyLinePrintedChecklist[n.position.end.line] && rx(n, t) ? (r.isNextEmptyLinePrintedChecklist[n.position.end.line] = !0, qF) : "";
  }

  function yx(e, t, n) {
    var r = GF(e, t, n);
    return IF(PF, r.map(function (e) {
      return NF(IF(jF, e).parts);
    }));
  }

  var Ex = {
    preprocess: function preprocess(e) {
      return ix(e, sx);
    },
    print: function print(e, t, n) {
      var r = e.getValue(),
          u = e.getParentNode(),
          o = r.tag ? e.call(n, "tag") : "",
          a = r.anchor ? e.call(n, "anchor") : "",
          i = ux(r, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !nx(e) ? Dx(e, t.originalText) : "";
      return BF(["mappingValue" !== r.type && YF(r) ? BF([IF(PF, e.map(n, "leadingComments")), PF]) : "", o, o && a ? " " : "", a, o || a ? ux(r, ["sequence", "mapping"]) && !KF(r) ? PF : " " : "", KF(r) ? BF([1 === r.middleComments.length ? "" : PF, IF(PF, e.map(n, "middleComments")), PF]) : "", tx(e) ? BF(VF(t.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd(), LF)) : OF(lx(r, u, e, t, n)), ZF(r) && !ux(r, ["document", "documentHead"]) ? MF(BF(["mappingValue" !== r.type || r.content ? " " : "", "mappingKey" === u.type && "mapping" === e.getParentNode(2).type && px(r) ? "" : wF, e.call(n, "trailingComment")])) : "", i, ex(r) && !ux(r, ["documentHead", "documentBody"]) ? cx("sequenceItem" === r.type ? 2 : 0, BF([PF, IF(PF, e.map(function (e) {
        return BF([WF(t.originalText, e.getValue(), t.locStart) ? PF : "", n(e)]);
      }, "endComments"))])) : ""]);
    },
    massageAstNode: function massageAstNode(e, t) {
      if (ux(t)) switch (delete t.position, t.type) {
        case "comment":
          if (UF(t.value)) return null;
          break;

        case "quoteDouble":
        case "quoteSingle":
          t.type = "quote";
      }
    },
    insertPragma: $F
  },
      Cx = {
    bracketSpacing: Fh.bracketSpacing,
    singleQuote: Fh.singleQuote,
    proseWrap: Fh.proseWrap
  },
      bx = ["yml"],
      Ax = [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"],
      vx = [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"],
      Fx = {
    name: "YAML",
    type: "data",
    tmScope: "source.yaml",
    aliases: bx,
    extensions: Ax,
    filenames: vx,
    aceMode: "yaml",
    codemirrorMode: "yaml",
    codemirrorMimeType: "text/x-yaml",
    languageId: 407
  };
  var xx = [sm, fD, Ey, Ry, dC, fF, {
    languages: [Es(Ue(Object.freeze({
      __proto__: null,
      name: "YAML",
      type: "data",
      tmScope: "source.yaml",
      aliases: bx,
      extensions: Ax,
      filenames: vx,
      aceMode: "yaml",
      codemirrorMode: "yaml",
      codemirrorMimeType: "text/x-yaml",
      languageId: 407,
      default: Fx
    })), function (e) {
      return {
        since: "1.14.0",
        parsers: ["yaml"],
        vscodeLanguageIds: ["yaml", "ansible", "home-assistant"],
        filenames: e.filenames.filter(function (e) {
          return "yarn.lock" !== e;
        })
      };
    })],
    printers: {
      yaml: Ex
    },
    options: Cx,
    parsers: {
      get yaml() {
        return {}.parsers.yaml;
      }

    }
  }];
  var Sx = ht.version,
      wx = yt.getSupportInfo,
      Bx = xx.map(function (t) {
    return e(t, ["parsers"]);
  });

  function Tx(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return function () {
      for (var _len13 = arguments.length, n = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        n[_key13] = arguments[_key13];
      }

      var r = n[t] || {},
          u = r.plugins || [];
      return n[t] = Object.assign({}, r, {
        plugins: [].concat(_toConsumableArray(Bx), _toConsumableArray(Array.isArray(u) ? u : Object.values(u)))
      }), e.apply(void 0, n);
    };
  }

  var kx = Tx(Hi.formatWithCursor);
  return {
    formatWithCursor: kx,
    format: function format(e, t) {
      return kx(e, t).formatted;
    },
    check: function check(e, t) {
      var _kx = kx(e, t),
          n = _kx.formatted;

      return n === e;
    },
    doc: ln,
    getSupportInfo: Tx(wx, 0),
    version: Sx,
    util: ys,
    __debug: {
      parse: Tx(Hi.parse),
      formatAST: Tx(Hi.formatAST),
      formatDoc: Tx(Hi.formatDoc),
      printToDoc: Tx(Hi.printToDoc),
      printDocToString: Tx(Hi.printDocToString)
    }
  };
});
},{}],"scripts/scripts.js":[function(require,module,exports) {
var _require = require('prettier'),
    format = _require.format; // Body elements


var bodyElement = document.querySelector('body');
var menuToggle = document.querySelector('.hamburgerMenu');
var heroElement = document.querySelector('.hero');
var greetingText = document.querySelector('.greeting'); // Contact Form

var form = document.getElementById('form');
var name = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject'); // Toggling sidebar with hamburger icon

menuToggle.addEventListener('click', function () {
  bodyElement.classList.toggle('opened');
  heroElement.classList.add('opened');
}); // Closing the nav if the user clicks outside of the navbar

window.addEventListener('click', function (e) {
  var clickedElement = e.target;

  if (clickedElement.matches('.opened')) {
    bodyElement.classList.remove('opened');
    heroElement.classList.remove('opened');
  }
}); // Closing the nav if the user clicks on a link

window.addEventListener('click', function (e) {
  var clickedElement = e.target;

  if (clickedElement.matches('.navLink')) {
    bodyElement.classList.remove('opened');
    heroElement.classList.remove('opened');
  }
}); // Changing text on hero page

var text = ['Hola', 'Hola', 'Bonjour', 'Salve', 'Konnichiwa', 'Guten Tag'];
var counter = 0;
setInterval(change, 5000);

function change() {
  greetingText.innerHTML = text[counter];
  counter++;

  if (counter >= text.length) {
    counter = 0;
  }
} // Form Controll
// Checking for valid email address


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} // Changing the class of the form control to invalid on an empty input and display error message


function setInvalidFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'formControl invalid';
} // Changing the class of the form control to valid on a correct input


function setValidFor(input) {
  var formControl = input.parentElement;
  formControl.className = 'formControl valid';
}

function checkInputs() {
  // get the values from the inputs
  var nameValue = name.value;
  var emailValue = email.value;
  var subjectValue = subject.value; // Checking name Value

  if (nameValue === '') {
    setInvalidFor(name, 'Username cannot be blank');
  } else {
    setValidFor(name);
  } // Checking email Value


  if (emailValue === '') {
    setInvalidFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setInvalidFor(email, 'Email is invalid');
  } else {
    setValidFor(email);
  } // Checking subject value


  if (subjectValue === '') {
    setInvalidFor(subject, 'Subject cannot be blank');
  } else {
    setValidFor(subject);
  }
} // form validation


form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
});
},{"prettier":"node_modules/prettier/standalone.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62046" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/scripts.js"], null)
//# sourceMappingURL=/scripts.d2cda223.js.map