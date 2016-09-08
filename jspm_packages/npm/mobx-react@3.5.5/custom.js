/* */ 
"format cjs";
(function(process) {
  !function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require('mobx'), require('react')) : "function" == typeof define && define.amd ? define(["mobx", "react"], t) : "object" == typeof exports ? exports.mobxReact = t(require('mobx'), require('react')) : e.mobxReact = t(e.mobx, e.React);
  }(this, function(e, t) {
    return function(e) {
      function t(n) {
        if (r[n])
          return r[n].exports;
        var o = r[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
      }
      var r = {};
      return t.m = e, t.c = r, t.p = "", t(0);
    }([function(e, t, r) {
      "use strict";
      function n(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (null != e)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t["default"] = e, t;
      }
      function o(e) {
        return e && e.__esModule ? e : {"default": e};
      }
      Object.defineProperty(t, "__esModule", {value: !0}), t.reactiveComponent = t.propTypes = t.inject = t.Provider = t.trackComponents = t.componentByNodeRegistery = t.renderReporter = t.observer = void 0;
      var i = arguments,
          a = r(1);
      Object.defineProperty(t, "observer", {
        enumerable: !0,
        get: function() {
          return a.observer;
        }
      }), Object.defineProperty(t, "renderReporter", {
        enumerable: !0,
        get: function() {
          return a.renderReporter;
        }
      }), Object.defineProperty(t, "componentByNodeRegistery", {
        enumerable: !0,
        get: function() {
          return a.componentByNodeRegistery;
        }
      }), Object.defineProperty(t, "trackComponents", {
        enumerable: !0,
        get: function() {
          return a.trackComponents;
        }
      });
      var u = r(9);
      Object.defineProperty(t, "Provider", {
        enumerable: !0,
        get: function() {
          return o(u)["default"];
        }
      });
      var c = r(6);
      Object.defineProperty(t, "inject", {
        enumerable: !0,
        get: function() {
          return o(c)["default"];
        }
      });
      var s = r(2),
          f = o(s),
          l = r(3),
          p = o(l),
          d = r(10),
          b = n(d),
          y = void 0;
      if (y = "mobx-react/custom", !f["default"])
        throw new Error(y + " requires the MobX package");
      if (!p["default"])
        throw new Error(y + " requires React to be available");
      t.propTypes = b, t["default"] = e.exports;
      t.reactiveComponent = function() {
        return console.warn("[mobx-react] `reactiveComponent` has been renamed to `observer` and will be removed in 1.1."), observer.apply(null, i);
      };
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : {"default": e};
      }
      function o(e) {
        return y["default"] ? y["default"].findDOMNode(e) : null;
      }
      function i(e) {
        var t = o(e);
        t && w && w.set(t, e), x.emit({
          event: "render",
          renderTime: e.__$mobRenderEnd - e.__$mobRenderStart,
          totalTime: Date.now() - e.__$mobRenderStart,
          component: e,
          node: t
        });
      }
      function a() {
        if ("undefined" == typeof WeakMap)
          throw new Error("[mobx-react] tracking components is not supported in this browser.");
        O || (O = !0);
      }
      function u(e, t) {
        var r = e[t],
            n = j[t];
        r ? e[t] = function() {
          r.apply(this, arguments), n.apply(this, arguments);
        } : e[t] = n;
      }
      function c(e, t) {
        if ("string" == typeof e)
          throw new Error("Store names should be provided as array");
        if (Array.isArray(e))
          return t ? g["default"].apply(null, e)(c(t)) : function(t) {
            return c(e, t);
          };
        var r = e;
        if (!("function" != typeof r || r.prototype && r.prototype.render || r.isReactClass || d["default"].Component.isPrototypeOf(r)))
          return c(d["default"].createClass({
            displayName: r.displayName || r.name,
            propTypes: r.propTypes,
            contextTypes: r.contextTypes,
            getDefaultProps: function() {
              return r.defaultProps;
            },
            render: function() {
              return r.call(this, this.props, this.context);
            }
          }));
        if (!r)
          throw new Error("Please pass a valid component to 'observer'");
        var n = r.prototype || r;
        return ["componentWillMount", "componentWillUnmount", "componentDidMount", "componentDidUpdate"].forEach(function(e) {
          u(n, e);
        }), n.shouldComponentUpdate || (n.shouldComponentUpdate = j.shouldComponentUpdate), r.isMobXReactObserver = !0, r;
      }
      Object.defineProperty(t, "__esModule", {value: !0}), t.renderReporter = t.componentByNodeRegistery = void 0;
      var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
      };
      t.trackComponents = a, t.observer = c;
      var f = r(2),
          l = n(f),
          p = r(3),
          d = n(p),
          b = r(4),
          y = n(b),
          v = r(5),
          m = n(v),
          h = r(6),
          g = n(h),
          O = !1,
          w = t.componentByNodeRegistery = "undefined" != typeof WeakMap ? new WeakMap : void 0,
          x = t.renderReporter = new m["default"],
          j = {
            componentWillMount: function() {
              var e = this,
                  t = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>",
                  r = this._reactInternalInstance && this._reactInternalInstance._rootNodeID,
                  n = this.render.bind(this),
                  o = null,
                  i = !1,
                  a = function() {
                    return o = new l["default"].Reaction(t + "#" + r + ".render()", function() {
                      i || (i = !0, "function" == typeof e.componentWillReact && e.componentWillReact(), e.__$mobxIsUnmounted !== !0 && d["default"].Component.prototype.forceUpdate.call(e));
                    }), u.$mobx = o, e.render = u, u();
                  },
                  u = function() {
                    i = !1;
                    var t = void 0;
                    return o.track(function() {
                      O && (e.__$mobRenderStart = Date.now()), t = l["default"].extras.allowStateChanges(!1, n), O && (e.__$mobRenderEnd = Date.now());
                    }), t;
                  };
              this.render = a;
            },
            componentWillUnmount: function() {
              if (this.render.$mobx && this.render.$mobx.dispose(), this.__$mobxIsUnmounted = !0, O) {
                var e = o(this);
                e && w && w["delete"](e), x.emit({
                  event: "destroy",
                  component: this,
                  node: e
                });
              }
            },
            componentDidMount: function() {
              O && i(this);
            },
            componentDidUpdate: function() {
              O && i(this);
            },
            shouldComponentUpdate: function(e, t) {
              if (this.render.$mobx && this.render.$mobx.isScheduled() === !0)
                return !1;
              if (this.state !== t)
                return !0;
              var r = Object.keys(this.props);
              if (r.length !== Object.keys(e).length)
                return !0;
              for (var n = void 0,
                  o = r.length - 1; n = r[o]; o--) {
                var i = e[n];
                if (i !== this.props[n])
                  return !0;
                if (i && "object" === ("undefined" == typeof i ? "undefined" : s(i)) && !l["default"].isObservable(i))
                  return !0;
              }
              return !1;
            }
          };
    }, function(t, r) {
      t.exports = e;
    }, function(e, r) {
      e.exports = t;
    }, function(e, t) {
      e.exports = null;
    }, function(e, t) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", {value: !0});
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          o = function() {
            function e() {
              r(this, e), this.listeners = [];
            }
            return n(e, [{
              key: "on",
              value: function(e) {
                var t = this;
                return this.listeners.push(e), function() {
                  var r = t.listeners.indexOf(e);
                  -1 !== r && t.listeners.splice(r, 1);
                };
              }
            }, {
              key: "emit",
              value: function(e) {
                this.listeners.forEach(function(t) {
                  return t(e);
                });
              }
            }]), e;
          }();
      t["default"] = o;
    }, function(e, t, r) {
      (function(e) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : {"default": e};
        }
        function o(e, t) {
          var r = s["default"].createClass({
            displayName: "MobXStoreInjector",
            render: function() {
              var r = this,
                  n = {};
              for (var o in this.props)
                this.props.hasOwnProperty(o) && (n[o] = this.props[o]);
              var i = e(this.context.mobxStores || {}, n, this.context) || {};
              for (var a in i)
                n[a] = i[a];
              return n.ref = function(e) {
                r.wrappedInstance = e;
              }, s["default"].createElement(t, n);
            }
          });
          return r.contextTypes = {mobxStores: c.PropTypes.object}, r.wrappedComponent = t, i(r, t), (0, l["default"])(r, t), r;
        }
        function i(t, r) {
          "undefined" != typeof e && e.env && "production" !== e.env.NODE_ENV && ["propTypes", "defaultProps", "contextTypes"].forEach(function(e) {
            var n = t[e];
            Object.defineProperty(t, e, {
              set: function(t) {
                var n = r.displayName || r.name;
                console.warn("Mobx Injector: you are trying to attach " + e + " to HOC instead of " + n + ". Use `wrappedComponent` property.");
              },
              get: function() {
                return n;
              },
              configurable: !0
            });
          });
        }
        function a(e) {
          return function(t, r) {
            return e.forEach(function(e) {
              if (!(e in r)) {
                if (!(e in t))
                  throw new Error("MobX observer: Store '" + e + "' is not available! Make sure it is provided by some Provider");
                r[e] = t[e];
              }
            }), r;
          };
        }
        function u() {
          var e = void 0;
          if ("function" == typeof arguments[0])
            e = arguments[0];
          else {
            for (var t = [],
                r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            e = a(t);
          }
          return function(t) {
            return o(e, t);
          };
        }
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = u;
        var c = r(3),
            s = n(c),
            f = r(8),
            l = n(f);
      }).call(t, r(7));
    }, function(e, t) {
      function r(e) {
        return c === setTimeout ? setTimeout(e, 0) : c.call(null, e, 0);
      }
      function n(e) {
        s === clearTimeout ? clearTimeout(e) : s.call(null, e);
      }
      function o() {
        d && l && (d = !1, l.length ? p = l.concat(p) : b = -1, p.length && i());
      }
      function i() {
        if (!d) {
          var e = r(o);
          d = !0;
          for (var t = p.length; t; ) {
            for (l = p, p = []; ++b < t; )
              l && l[b].run();
            b = -1, t = p.length;
          }
          l = null, d = !1, n(e);
        }
      }
      function a(e, t) {
        this.fun = e, this.array = t;
      }
      function u() {}
      var c,
          s,
          f = e.exports = {};
      !function() {
        try {
          c = setTimeout;
        } catch (e) {
          c = function() {
            throw new Error("setTimeout is not defined");
          };
        }
        try {
          s = clearTimeout;
        } catch (e) {
          s = function() {
            throw new Error("clearTimeout is not defined");
          };
        }
      }();
      var l,
          p = [],
          d = !1,
          b = -1;
      f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        p.push(new a(e, t)), 1 !== p.length || d || r(i);
      }, a.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.binding = function(e) {
        throw new Error("process.binding is not supported");
      }, f.cwd = function() {
        return "/";
      }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported");
      }, f.umask = function() {
        return 0;
      };
    }, function(e, t) {
      "use strict";
      var r = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
          n = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            arguments: !0,
            arity: !0
          },
          o = "function" == typeof Object.getOwnPropertySymbols;
      e.exports = function(e, t, i) {
        if ("string" != typeof t) {
          var a = Object.getOwnPropertyNames(t);
          o && (a = a.concat(Object.getOwnPropertySymbols(t)));
          for (var u = 0; u < a.length; ++u)
            if (!(r[a[u]] || n[a[u]] || i && i[a[u]]))
              try {
                e[a[u]] = t[a[u]];
              } catch (c) {}
        }
        return e;
      };
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : {"default": e};
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }
      Object.defineProperty(t, "__esModule", {value: !0});
      var u = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          c = r(3),
          s = n(c),
          f = {
            children: !0,
            key: !0,
            ref: !0
          },
          l = function(e) {
            function t() {
              return o(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments));
            }
            return a(t, e), u(t, [{
              key: "render",
              value: function() {
                return s["default"].Children.only(this.props.children);
              }
            }, {
              key: "getChildContext",
              value: function() {
                var e = {},
                    t = this.context.mobxStores;
                if (t)
                  for (var r in t)
                    e[r] = t[r];
                for (var n in this.props)
                  f[n] || (e[n] = this.props[n]);
                return {mobxStores: e};
              }
            }, {
              key: "componentWillReceiveProps",
              value: function(e) {
                Object.keys(e).length !== Object.keys(this.props).length && console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
                for (var t in e)
                  f[t] || this.props[t] === e[t] || console.warn("MobX Provider: Provided store '" + t + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
              }
            }]), t;
          }(c.Component);
      l.contextTypes = {mobxStores: c.PropTypes.object}, l.childContextTypes = {mobxStores: c.PropTypes.object.isRequired}, t["default"] = l;
    }, function(e, t, r) {
      "use strict";
      function n(e) {
        function t(t, r, n, o, i, a) {
          for (var u = arguments.length,
              c = Array(u > 6 ? u - 6 : 0),
              s = 6; u > s; s++)
            c[s - 6] = arguments[s];
          return (0, f.untracked)(function() {
            if (o = o || "<<anonymous>>", a = a || n, null == r[n]) {
              if (t) {
                var u = null === r[n] ? "null" : "undefined";
                return new Error("The " + i + " `" + a + "` is marked as required in `" + o + "`, but its value is `" + u + "`.");
              }
              return null;
            }
            return e.apply(void 0, [r, n, o, i, a].concat(c));
          });
        }
        var r = t.bind(null, !1);
        return r.isRequired = t.bind(null, !0), r;
      }
      function o(e, t) {
        return "symbol" === e ? !0 : "Symbol" === t["@@toStringTag"] ? !0 : "function" == typeof Symbol && t instanceof Symbol;
      }
      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : s(e);
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : o(t, e) ? "symbol" : t;
      }
      function a(e) {
        var t = i(e);
        if ("object" === t) {
          if (e instanceof Date)
            return "date";
          if (e instanceof RegExp)
            return "regexp";
        }
        return t;
      }
      function u(e, t) {
        return n(function(r, n, o, u, c) {
          return (0, f.untracked)(function() {
            if (e && i(r[n]) === t.toLowerCase())
              return null;
            var u = void 0;
            switch (t) {
              case "Array":
                u = f.isObservableArray;
                break;
              case "Object":
                u = f.isObservableObject;
                break;
              case "Map":
                u = f.isObservableMap;
                break;
              default:
                throw new Error("Unexpected mobxType: " + t);
            }
            var s = r[n];
            if (!u(s)) {
              var l = a(s),
                  p = e ? " or javascript `" + t.toLowerCase() + "`" : "";
              return new Error("Invalid prop `" + c + "` of type `" + l + "` supplied to `" + o + "`, expected `mobx.Observable" + t + "`" + p + ".");
            }
            return null;
          });
        });
      }
      function c(e, t) {
        return n(function(r, n, o, i, a) {
          for (var c = arguments.length,
              s = Array(c > 5 ? c - 5 : 0),
              l = 5; c > l; l++)
            s[l - 5] = arguments[l];
          return (0, f.untracked)(function() {
            if ("function" != typeof t)
              return new Error("Property `" + a + "` of component `" + o + "` has invalid PropType notation.");
            var c = u(e, "Array")(r, n, o);
            if (c instanceof Error)
              return c;
            for (var f = r[n],
                l = 0; l < f.length; l++)
              if (c = t.apply(void 0, [f, l, o, i, a + "[" + l + "]"].concat(s)), c instanceof Error)
                return c;
            return null;
          });
        });
      }
      Object.defineProperty(t, "__esModule", {value: !0}), t.objectOrObservableObject = t.arrayOrObservableArrayOf = t.arrayOrObservableArray = t.observableObject = t.observableMap = t.observableArrayOf = t.observableArray = void 0;
      var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
      },
          f = r(2);
      t.observableArray = u(!1, "Array"), t.observableArrayOf = c.bind(null, !1), t.observableMap = u(!1, "Map"), t.observableObject = u(!1, "Object"), t.arrayOrObservableArray = u(!0, "Array"), t.arrayOrObservableArrayOf = c.bind(null, !0), t.objectOrObservableObject = u(!0, "Object");
    }]);
  });
})(require('process'));
