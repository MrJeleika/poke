/*! For license information please see widget.js.LICENSE.txt */
// @ts-nocheck
!(function () {
  var e = {
      913: function (e, t) {
        var n, i, o;
        !(function (r) {
          var a, d, s, c, l, u, f, m, g, h, w, p, b;
          function y() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function v(e, t, n) {
            e.addEventListener(t, n, !1);
          }
          function C(e, t, n) {
            e.removeEventListener(t, n, !1);
          }
          function x(e) {
            return h[e] ? h[e].log : d;
          }
          function O(e, t) {
            M('log', e, t, x(e));
          }
          function k(e, t) {
            M('info', e, t, x(e));
          }
          function I(e, t) {
            M('warn', e, t, !0);
          }
          function M(e, t, n, i) {
            !0 === i &&
              'object' == typeof window.console &&
              console[e](
                (function (e) {
                  return (
                    l +
                    '[' +
                    ((t = 'Host page: ' + e),
                    (t =
                      window.top !== window.self
                        ? window.parentIFrame && window.parentIFrame.getId
                          ? window.parentIFrame.getId() + ': ' + e
                          : 'Nested host page: ' + e
                        : t) + ']')
                  );
                  var t;
                })(t),
                n,
              );
          }
          function T(e) {
            function t() {
              n('Height'),
                n('Width'),
                S(
                  function () {
                    L(x), R(M), g('onResized', x);
                  },
                  x,
                  'init',
                );
            }
            function n(e) {
              var t = Number(h[M]['max' + e]),
                n = Number(h[M]['min' + e]),
                i = ((e = e.toLowerCase()), Number(x[e]));
              O(M, 'Checking ' + e + ' is in range ' + n + '-' + t),
                i < n && ((i = n), O(M, 'Set ' + e + ' to min value')),
                t < i && ((i = t), O(M, 'Set ' + e + ' to max value')),
                (x[e] = '' + i);
            }
            function i(e) {
              return y.slice(y.indexOf(':') + c + e);
            }
            function o(e, t) {
              var n, i;
              (n = function () {
                var n, i;
                W(
                  'Send Page Info',
                  'pageInfo:' +
                    ((n = document.body.getBoundingClientRect()),
                    (i = x.iframe.getBoundingClientRect()),
                    JSON.stringify({
                      iframeHeight: i.height,
                      iframeWidth: i.width,
                      clientHeight: Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0,
                      ),
                      clientWidth: Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0,
                      ),
                      offsetTop: parseInt(i.top - n.top, 10),
                      offsetLeft: parseInt(i.left - n.left, 10),
                      scrollTop: window.pageYOffset,
                      scrollLeft: window.pageXOffset,
                      documentHeight: document.documentElement.clientHeight,
                      documentWidth: document.documentElement.clientWidth,
                      windowHeight: window.innerHeight,
                      windowWidth: window.innerWidth,
                    })),
                  e,
                  t,
                );
              }),
                b[(i = t)] ||
                  (b[i] = setTimeout(function () {
                    (b[i] = null), n();
                  }, 32));
            }
            function r(e) {
              return (
                (e = e.getBoundingClientRect()),
                A(M),
                {
                  x: Math.floor(Number(e.left) + Number(f.x)),
                  y: Math.floor(Number(e.top) + Number(f.y)),
                }
              );
            }
            function a(e) {
              var t = e ? r(x.iframe) : { x: 0, y: 0 },
                n = { x: Number(x.width) + t.x, y: Number(x.height) + t.y };
              O(
                M,
                'Reposition requested from iFrame (offset x:' +
                  t.x +
                  ' y:' +
                  t.y +
                  ')',
              ),
                window.top === window.self
                  ? ((f = n), d(), O(M, '--'))
                  : window.parentIFrame
                  ? window.parentIFrame['scrollTo' + (e ? 'Offset' : '')](
                      n.x,
                      n.y,
                    )
                  : I(
                      M,
                      'Unable to scroll to requested position, window.parentIFrame not found',
                    );
            }
            function d() {
              !1 === g('onScroll', f) ? N() : R(M);
            }
            function s(e) {
              e = e.split('#')[1] || '';
              var t = decodeURIComponent(e);
              (t =
                document.getElementById(t) || document.getElementsByName(t)[0])
                ? ((t = r(t)),
                  O(
                    M,
                    'Moving to in page link (#' +
                      e +
                      ') at x: ' +
                      t.x +
                      ' y: ' +
                      t.y,
                  ),
                  (f = { x: t.x, y: t.y }),
                  d(),
                  O(M, '--'))
                : window.top === window.self
                ? O(M, 'In page link #' + e + ' not found')
                : window.parentIFrame
                ? window.parentIFrame.moveToAnchor(e)
                : O(
                    M,
                    'In page link #' +
                      e +
                      ' not found and window.parentIFrame not found',
                  );
            }
            function m(e) {
              var t, n;
              (n =
                0 === Number(x.width) && 0 === Number(x.height)
                  ? { x: (t = i(9).split(':'))[1], y: t[0] }
                  : { x: x.width, y: x.height }),
                g(e, {
                  iframe: x.iframe,
                  screenX: Number(n.x),
                  screenY: Number(n.y),
                  type: x.type,
                });
            }
            function g(e, t) {
              return z(M, e, t);
            }
            var w,
              p,
              y = e.data,
              x = {},
              M = null;
            if ('[iFrameResizerChild]Ready' === y)
              for (var T in h) W('iFrame requested init', j(T), h[T].iframe, T);
            else
              l === ('' + y).slice(0, u) && y.slice(u).split(':')[0] in h
                ? ((x = (function () {
                    var e = y.slice(u).split(':'),
                      t = e[1] ? parseInt(e[1], 10) : 0,
                      n = h[e[0]] && h[e[0]].iframe,
                      i = getComputedStyle(n);
                    return {
                      iframe: n,
                      id: e[0],
                      height:
                        t +
                        (function (e) {
                          return 'border-box' !== e.boxSizing
                            ? 0
                            : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
                                (e = e.paddingBottom
                                  ? parseInt(e.paddingBottom, 10)
                                  : 0);
                        })(i) +
                        (function (e) {
                          return 'border-box' !== e.boxSizing
                            ? 0
                            : (e.borderTopWidth
                                ? parseInt(e.borderTopWidth, 10)
                                : 0) +
                                (e = e.borderBottomWidth
                                  ? parseInt(e.borderBottomWidth, 10)
                                  : 0);
                        })(i),
                      width: e[2],
                      type: e[3],
                    };
                  })()),
                  (M = x.id),
                  h[M] && (h[M].loaded = !0),
                  (p = x.type in { true: 1, false: 1, undefined: 1 }) &&
                    O(M, 'Ignoring init message from meta parent page'),
                  !p &&
                    ((p = !0),
                    h[(w = M)] ||
                      ((p = !1),
                      I(
                        x.type +
                          ' No settings for ' +
                          w +
                          '. Message was: ' +
                          y,
                      )),
                    p) &&
                    (O(M, 'Received: ' + y),
                    (w = !0),
                    null === x.iframe &&
                      (I(M, 'IFrame (' + x.id + ') not found'), (w = !1)),
                    w &&
                      (function () {
                        var t = e.origin,
                          n = h[M] && h[M].checkOrigin;
                        if (
                          n &&
                          '' + t != 'null' &&
                          !(function () {
                            if (n.constructor !== Array)
                              return (
                                (e = h[M] && h[M].remoteHost),
                                O(M, 'Checking connection is from: ' + e),
                                t === e
                              );
                            var e,
                              i = 0,
                              o = !1;
                            for (
                              O(
                                M,
                                'Checking connection is from allowed list of origins: ' +
                                  n,
                              );
                              i < n.length;
                              i++
                            )
                              if (n[i] === t) {
                                o = !0;
                                break;
                              }
                            return o;
                          })()
                        )
                          throw new Error(
                            'Unexpected message received from: ' +
                              t +
                              ' for ' +
                              x.iframe.id +
                              '. Message was: ' +
                              e.data +
                              '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.',
                          );
                        return 1;
                      })() &&
                      (function () {
                        switch (
                          (h[M] &&
                            h[M].firstRun &&
                            h[M] &&
                            (h[M].firstRun = !1),
                          x.type)
                        ) {
                          case 'close':
                            F(x.iframe);
                            break;
                          case 'message':
                            (d = i(6)),
                              O(
                                M,
                                'onMessage passed: {iframe: ' +
                                  x.iframe.id +
                                  ', message: ' +
                                  d +
                                  '}',
                              ),
                              g('onMessage', {
                                iframe: x.iframe,
                                message: JSON.parse(d),
                              }),
                              O(M, '--');
                            break;
                          case 'mouseenter':
                            m('onMouseEnter');
                            break;
                          case 'mouseleave':
                            m('onMouseLeave');
                            break;
                          case 'autoResize':
                            h[M].autoResize = JSON.parse(i(9));
                            break;
                          case 'scrollTo':
                            a(!1);
                            break;
                          case 'scrollToOffset':
                            a(!0);
                            break;
                          case 'pageInfo':
                            o(h[M] && h[M].iframe, M),
                              (r = M),
                              e('Add ', v),
                              h[r] && (h[r].stopPageInfo = n);
                            break;
                          case 'pageInfoStop':
                            h[M] &&
                              h[M].stopPageInfo &&
                              (h[M].stopPageInfo(), delete h[M].stopPageInfo);
                            break;
                          case 'inPageLink':
                            s(i(9));
                            break;
                          case 'reset':
                            H(x);
                            break;
                          case 'init':
                            t(), g('onInit', x.iframe);
                            break;
                          default:
                            0 === Number(x.width) && 0 === Number(x.height)
                              ? I(
                                  'Unsupported message received (' +
                                    x.type +
                                    '), this is likely due to the iframe containing a later version of iframe-resizer than the parent page',
                                )
                              : t();
                        }
                        function e(e, t) {
                          function i() {
                            h[r] ? o(h[r].iframe, r) : n();
                          }
                          ['scroll', 'resize'].forEach(function (n) {
                            O(r, e + n + ' listener for sendPageInfo'),
                              t(window, n, i);
                          });
                        }
                        function n() {
                          e('Remove ', C);
                        }
                        var r, d;
                      })()))
                : k(M, 'Ignored: ' + y);
          }
          function z(e, t, n) {
            var i = null,
              o = null;
            if (h[e]) {
              if ('function' != typeof (i = h[e][t]))
                throw new TypeError(
                  t + ' on iFrame[' + e + '] is not a function',
                );
              o = i(n);
            }
            return o;
          }
          function E(e) {
            (e = e.id), delete h[e];
          }
          function F(e) {
            var t = e.id;
            if (!1 === z(t, 'onClose', t))
              O(t, 'Close iframe cancelled by onClose event');
            else {
              O(t, 'Removing iFrame: ' + t);
              try {
                e.parentNode && e.parentNode.removeChild(e);
              } catch (e) {
                I(e);
              }
              z(t, 'onClosed', t), O(t, '--'), E(e);
            }
          }
          function A(e) {
            null === f &&
              O(
                e,
                'Get page position: ' +
                  (f = {
                    x:
                      window.pageXOffset === r
                        ? document.documentElement.scrollLeft
                        : window.pageXOffset,
                    y:
                      window.pageYOffset === r
                        ? document.documentElement.scrollTop
                        : window.pageYOffset,
                  }).x +
                  ',' +
                  f.y,
              );
          }
          function R(e) {
            null !== f &&
              (window.scrollTo(f.x, f.y),
              O(e, 'Set page position: ' + f.x + ',' + f.y),
              N());
          }
          function N() {
            f = null;
          }
          function H(e) {
            O(
              e.id,
              'Size reset requested by ' +
                ('init' === e.type ? 'host page' : 'iFrame'),
            ),
              A(e.id),
              S(
                function () {
                  L(e), W('reset', 'reset', e.iframe, e.id);
                },
                e,
                'reset',
              );
          }
          function L(e) {
            function t(t) {
              var i;
              (i = t),
                e.id
                  ? ((e.iframe.style[i] = e[i] + 'px'),
                    O(
                      e.id,
                      'IFrame (' + n + ') ' + i + ' set to ' + e[i] + 'px',
                    ))
                  : O('undefined', 'messageData id not set'),
                (function (t) {
                  var i;
                  function o() {
                    Object.keys(h).forEach(function (e) {
                      function t(e) {
                        return '0px' === (h[n] && h[n].iframe.style[e]);
                      }
                      var n;
                      h[(n = e)] &&
                        null !== h[n].iframe.offsetParent &&
                        (t('height') || t('width')) &&
                        W('Visibility change', 'resize', h[n].iframe, n);
                    });
                  }
                  !s &&
                    '0' === e[t] &&
                    ((s = !0),
                    O(
                      n,
                      'Hidden iFrame detected, creating visibility listener',
                    ),
                    (t = y())) &&
                    ((i = document.querySelector('body')),
                    new t(function (e) {
                      O(
                        'window',
                        'Mutation observed: ' + e[0].target + ' ' + e[0].type,
                      ),
                        U(o, 16);
                    }).observe(i, {
                      attributes: !0,
                      attributeOldValue: !1,
                      characterData: !0,
                      characterDataOldValue: !1,
                      childList: !0,
                      subtree: !0,
                    }));
                })(t);
            }
            var n = e.iframe.id;
            h[n] &&
              (h[n].sizeHeight && t('height'), h[n].sizeWidth) &&
              t('width');
          }
          function S(e, t, n) {
            n !== t.type && m && !window.jasmine
              ? (O(t.id, 'Requesting animation frame'), m(e))
              : e();
          }
          function W(e, t, n, i, o) {
            var r = !1;
            (i = i || n.id),
              h[i] &&
                ((function () {
                  var o;
                  n && 'contentWindow' in n && null !== n.contentWindow
                    ? ((o = h[i] && h[i].targetOrigin),
                      O(
                        i,
                        '[' +
                          e +
                          '] Sending msg to iframe[' +
                          i +
                          '] (' +
                          t +
                          ') targetOrigin: ' +
                          o,
                      ),
                      n.contentWindow.postMessage(l + t, o))
                    : I(i, '[' + e + '] IFrame(' + i + ') not found');
                })(),
                o &&
                  h[i] &&
                  h[i].warningTimeout &&
                  (h[i].msgTimeout = setTimeout(function () {
                    !h[i] ||
                      h[i].loaded ||
                      r ||
                      ((r = !0),
                      I(
                        i,
                        'IFrame has not responded within ' +
                          h[i].warningTimeout / 1e3 +
                          ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.',
                      ));
                  }, h[i].warningTimeout)));
          }
          function j(e) {
            return (
              e +
              ':' +
              h[e].bodyMarginV1 +
              ':' +
              h[e].sizeWidth +
              ':' +
              h[e].log +
              ':' +
              h[e].interval +
              ':' +
              h[e].enablePublicMethods +
              ':' +
              h[e].autoResize +
              ':' +
              h[e].bodyMargin +
              ':' +
              h[e].heightCalculationMethod +
              ':' +
              h[e].bodyBackground +
              ':' +
              h[e].bodyPadding +
              ':' +
              h[e].tolerance +
              ':' +
              h[e].inPageLinks +
              ':' +
              h[e].resizeFrom +
              ':' +
              h[e].widthCalculationMethod +
              ':' +
              h[e].mouseEvents
            );
          }
          function P(e, t) {
            function n(e) {
              var t = e.split('Callback');
              2 === t.length &&
                ((this[
                  (t = 'on' + t[0].charAt(0).toUpperCase() + t[0].slice(1))
                ] = this[e]),
                delete this[e],
                I(
                  i,
                  "Deprecated: '" +
                    e +
                    "' has been renamed '" +
                    t +
                    "'. The old method will be removed in the next major version.",
                ));
            }
            var i = (function (n) {
              if ('string' != typeof n)
                throw new TypeError('Invaild id for iFrame. Expected String');
              var i;
              return (
                '' === n &&
                  ((e.id =
                    ((i = (t && t.id) || p.id + a++),
                    null !== document.getElementById(i) && (i += a++),
                    (n = i))),
                  (d = (t || {}).log),
                  O(n, 'Added missing iframe ID: ' + n + ' (' + e.src + ')')),
                n
              );
            })(e.id);
            if (i in h && 'iFrameResizer' in e)
              I(i, 'Ignored iFrame, already setup.');
            else {
              switch (
                ((function (t) {
                  if (
                    ((t = t || {}),
                    (h[i] = Object.create(null)),
                    (h[i].iframe = e),
                    (h[i].firstRun = !0),
                    (h[i].remoteHost =
                      e.src && e.src.split('/').slice(0, 3).join('/')),
                    'object' != typeof t)
                  )
                    throw new TypeError('Options is not an object');
                  Object.keys(t).forEach(n, t);
                  var o,
                    r = t;
                  for (o in p)
                    Object.prototype.hasOwnProperty.call(p, o) &&
                      (h[i][o] = (
                        Object.prototype.hasOwnProperty.call(r, o) ? r : p
                      )[o]);
                  h[i] &&
                    (h[i].targetOrigin =
                      !0 !== h[i].checkOrigin ||
                      '' === (t = h[i].remoteHost) ||
                      null !== t.match(/^(about:blank|javascript:|file:\/\/)/)
                        ? '*'
                        : t);
                })(t),
                O(
                  i,
                  'IFrame scrolling ' +
                    (h[i] && h[i].scrolling ? 'enabled' : 'disabled') +
                    ' for ' +
                    i,
                ),
                (e.style.overflow =
                  !1 === (h[i] && h[i].scrolling) ? 'hidden' : 'auto'),
                h[i] && h[i].scrolling)
              ) {
                case 'omit':
                  break;
                case !0:
                  e.scrolling = 'yes';
                  break;
                case !1:
                  e.scrolling = 'no';
                  break;
                default:
                  e.scrolling = h[i] ? h[i].scrolling : 'no';
              }
              s('Height'),
                s('Width'),
                o('maxHeight'),
                o('minHeight'),
                o('maxWidth'),
                o('minWidth'),
                ('number' != typeof (h[i] && h[i].bodyMargin) &&
                  '0' !== (h[i] && h[i].bodyMargin)) ||
                  ((h[i].bodyMarginV1 = h[i].bodyMargin),
                  (h[i].bodyMargin = h[i].bodyMargin + 'px')),
                (function (t) {
                  var n = y();
                  n &&
                    e.parentNode &&
                    new n(function (t) {
                      t.forEach(function (t) {
                        Array.prototype.slice
                          .call(t.removedNodes)
                          .forEach(function (t) {
                            t === e && F(e);
                          });
                      });
                    }).observe(e.parentNode, { childList: !0 }),
                    v(e, 'load', function () {
                      var n, o;
                      W('iFrame.onload', t, e, r, !0),
                        (n = h[i] && h[i].firstRun),
                        (o = h[i] && h[i].heightCalculationMethod in g),
                        !n &&
                          o &&
                          H({ iframe: e, height: 0, width: 0, type: 'init' });
                    }),
                    W('init', t, e, r, !0);
                })(j(i)),
                h[i] &&
                  (h[i].iframe.iFrameResizer = {
                    close: F.bind(null, h[i].iframe),
                    removeListeners: E.bind(null, h[i].iframe),
                    resize: W.bind(
                      null,
                      'Window resize',
                      'resize',
                      h[i].iframe,
                    ),
                    moveToAnchor: function (e) {
                      W('Move to anchor', 'moveToAnchor:' + e, h[i].iframe, i);
                    },
                    sendMessage: function (e) {
                      W(
                        'Send Message',
                        'message:' + (e = JSON.stringify(e)),
                        h[i].iframe,
                        i,
                      );
                    },
                  });
            }
            function o(t) {
              var n = h[i][t];
              1 / 0 !== n &&
                0 !== n &&
                ((e.style[t] = 'number' == typeof n ? n + 'px' : n),
                O(i, 'Set ' + t + ' = ' + e.style[t]));
            }
            function s(e) {
              if (h[i]['min' + e] > h[i]['max' + e])
                throw new Error(
                  'Value for min' + e + ' can not be greater than max' + e,
                );
            }
          }
          function U(e, t) {
            null === w &&
              (w = setTimeout(function () {
                (w = null), e();
              }, t));
          }
          function B() {
            'hidden' !== document.visibilityState &&
              (O('document', 'Trigger event: Visibility change'),
              U(function () {
                _('Tab Visible', 'resize');
              }, 16));
          }
          function _(e, t) {
            Object.keys(h).forEach(function (n) {
              var i;
              h[(i = n)] &&
                'parent' === h[i].resizeFrom &&
                h[i].autoResize &&
                !h[i].firstRun &&
                W(e, t, h[n].iframe, n);
            });
          }
          function q() {
            v(window, 'message', T),
              v(window, 'resize', function () {
                O('window', 'Trigger event: ' + 'resize'),
                  U(function () {
                    _('Window resize', 'resize');
                  }, 16);
              }),
              v(document, 'visibilitychange', B),
              v(document, '-webkit-visibilitychange', B);
          }
          function V() {
            function e(e, n) {
              if (n) {
                if (!n.tagName)
                  throw new TypeError('Object is not a valid DOM element');
                if ('IFRAME' !== n.tagName.toUpperCase())
                  throw new TypeError(
                    'Expected <IFRAME> tag, found <' + n.tagName + '>',
                  );
                P(n, e), t.push(n);
              }
            }
            for (
              var t, n = ['moz', 'webkit', 'o', 'ms'], i = 0;
              i < n.length && !m;
              i += 1
            )
              m = window[n[i] + 'RequestAnimationFrame'];
            return (
              m
                ? (m = m.bind(window))
                : O('setup', 'RequestAnimationFrame not supported'),
              q(),
              function (n, i) {
                var o;
                switch (
                  ((t = []),
                  (o = n) &&
                    o.enablePublicMethods &&
                    I(
                      'enablePublicMethods option has been removed, public methods are now always available in the iFrame',
                    ),
                  typeof i)
                ) {
                  case 'undefined':
                  case 'string':
                    Array.prototype.forEach.call(
                      document.querySelectorAll(i || 'iframe'),
                      e.bind(r, n),
                    );
                    break;
                  case 'object':
                    e(n, i);
                    break;
                  default:
                    throw new TypeError(
                      'Unexpected data type (' + typeof i + ')',
                    );
                }
                return t;
              }
            );
          }
          'undefined' != typeof window &&
            ((a = 0),
            (s = d = !1),
            (c = 7),
            (u = (l = '[iFrameSizer]').length),
            (f = null),
            (m = window.requestAnimationFrame),
            (g = Object.freeze({
              max: 1,
              scroll: 1,
              bodyScroll: 1,
              documentElementScroll: 1,
            })),
            (h = {}),
            (w = null),
            (p = Object.freeze({
              autoResize: !0,
              bodyBackground: null,
              bodyMargin: null,
              bodyMarginV1: 8,
              bodyPadding: null,
              checkOrigin: !0,
              inPageLinks: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: 'bodyOffset',
              id: 'iFrameResizer',
              interval: 32,
              log: !1,
              maxHeight: 1 / 0,
              maxWidth: 1 / 0,
              minHeight: 0,
              minWidth: 0,
              mouseEvents: !0,
              resizeFrom: 'parent',
              scrolling: !1,
              sizeHeight: !0,
              sizeWidth: !1,
              warningTimeout: 5e3,
              tolerance: 0,
              widthCalculationMethod: 'scroll',
              onClose: function () {
                return !0;
              },
              onClosed: function () {},
              onInit: function () {},
              onMessage: function () {
                I('onMessage function not defined');
              },
              onMouseEnter: function () {},
              onMouseLeave: function () {},
              onResized: function () {},
              onScroll: function () {
                return !0;
              },
            })),
            (b = {}),
            window.jQuery !== r &&
              (function (e) {
                e.fn
                  ? e.fn.iFrameResize ||
                    (e.fn.iFrameResize = function (e) {
                      return this.filter('iframe')
                        .each(function (t, n) {
                          P(n, e);
                        })
                        .end();
                    })
                  : k('', 'Unable to bind to jQuery, it is not fully loaded.');
              })(window.jQuery),
            (i = []),
            void 0 !== (o = 'function' == typeof (n = V) ? n.apply(t, i) : n) &&
              (e.exports = o),
            (window.iFrameResize = window.iFrameResize || V()));
        })();
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = (t[i] = { exports: {} });
    return e[i](r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      'use strict';
      n(913);
      (window.CLUTCHCO = window.CLUTCHCO || { loaded: !1 }),
        (window.CLUTCHCO.items = []),
        (window.CLUTCHCO.Init = function () {
          function e(e) {
            (this.id = Math.random()), (this.container = e);
            let t = e.getAttribute('data-url'),
              n = e.getAttribute('data-widget-type'),
              i = e.getAttribute('data-zero-state'),
              o = e.getAttribute('data-darkbg'),
              r = (function (e) {
                let t = /(px|%)/i,
                  n = '';
                return e && e.length > 0 && (n = t.test(e) ? e : e + 'px'), n;
              })(e.getAttribute('data-height')),
              a = document.createElement('iframe'),
              d = e.getAttribute('data-scale'),
              s = e.getAttribute('data-scale-position'),
              c = '';
            const l = [],
              u = {
                uid: e.getAttribute('data-clutchcompany-id'),
                domain: e.getAttribute('data-clutchcompany-domain'),
                theme: e.getAttribute('data-theme'),
                shape: e.getAttribute('data-shape'),
                header_color: e.getAttribute('data-header-color'),
                header_text_color: e.getAttribute('data-header-text-color'),
                footer_color: e.getAttribute('data-footer-color'),
                footer_text_color: e.getAttribute('data-footer-text-color'),
                primary_color: e.getAttribute('data-primary-color'),
                secondary_color: e.getAttribute('data-secondary-color'),
                background_color: e.getAttribute('data-background-color'),
                review_card_color: e.getAttribute('data-review-card-color'),
                rel_nofollow: e.getAttribute('data-nofollow'),
                width: e.getAttribute('data-width'),
                reviews: e.getAttribute('data-reviews'),
              };
            ('https://clutch.co' !== t &&
              'http://clutch.co' !== t &&
              'http://widget.clutch.co' !== t) ||
              (t = 'https://widget.clutch.co'),
              a.setAttribute('id', 'iframe-' + this.id),
              o && (c = ' Dark'),
              window.addEventListener('message', function (e) {
                a.setAttribute('title', e.data + n + c);
              }),
              (a.style.border = 'none'),
              (a.allowTransparency = !0),
              (a.width = '100%');
            let f = '?ref_domain=' + window.location.hostname;
            if (
              (Object.keys(u).forEach((e) => {
                u[e] && (f += `&${e}=` + encodeURIComponent(u[e]));
              }),
              (f += '&ref_path=' + window.location.pathname),
              o && l.push('darkbg'),
              i && l.push('zero'),
              (a.src = `${t}/widgets/get/${n}${
                l.length ? `/${l.join('-')}` : ''
              }${f}`),
              'autopx' === r)
            )
              switch (n) {
                case '4':
                case '5':
                case '8':
                  a.height = '600px';
                  break;
                default:
                  a.height = 'auto';
              }
            else a.height = r;
            e.appendChild(a),
              'true' === e.getAttribute('data-expandifr') &&
                iFrameResize(
                  {
                    log: !1,
                    checkOrigin: !1,
                    inPageLinks: !0,
                    heightCalculationMethod: 'bodyOffset',
                    resizedCallback: function (e) {
                      !(function (e) {
                        if (d) {
                          let t = d / 100,
                            i = (t - 1) * e,
                            o = a.parentElement;
                          switch (n) {
                            case '4':
                            case '5':
                            case '8':
                            case '12':
                              window.innerWidth < 991
                                ? ((o.style.transform = 'scale(1)'),
                                  (o.style.marginBottom = '0'))
                                : ((o.style.transform = `scale(${t})`),
                                  (o.style.marginBottom = `${i}px`),
                                  (o.style.transformOrigin =
                                    'center' === s
                                      ? '50% 0'
                                      : 'right' === s
                                      ? '100% 0'
                                      : '0 0'));
                          }
                        }
                      })(e.height);
                    },
                  },
                  a,
                ),
              (a.onload = function () {
                a.style.display = 'block';
              }),
              window.CLUTCHCO.items.push(a);
          }
          let t;
          if (document.getElementsByClassName) {
            t = document.getElementsByClassName('clutch-widget');
            console.log('asdasd');
          } else if (document.querySelectorAll) {
            t = document.querySelectorAll('.clutch-widget');
          } else {
            let e = [],
              n = new RegExp('(^| )clutch-widget( |$)'),
              i = document.body.getElementsByTagName('*');
            for (let t = 0, o = i.length; t < o; t++)
              n.test(i[t].className) && e.push(i[t]);
            t = e;
            t.style.background = '#000';
          }
          if (!t || t.length < 1) return;
          let n = t.length;
          for (let i = 0; i < n; i++) {
            let n = t[i];
            n.querySelector('iframe') || new e(n);
          }
        }),
        (window.CLUTCHCO.Destroy = function () {
          for (let e = 0; e < window.CLUTCHCO.items.length; e++)
            window.CLUTCHCO.items[e].parentElement.removeChild(
              window.CLUTCHCO.items[e],
            );
          window.CLUTCHCO.items = [];
        }),
        document.addEventListener('readystatechange', function (e) {
          'loading' !== e.target.readyState &&
            !1 === window.CLUTCHCO.loaded &&
            window.CLUTCHCO.Init();
        });
    })();
})();
