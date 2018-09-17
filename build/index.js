(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
	(factory((global.SitControls = {}),global.PropTypes,global.React));
}(this, (function (exports,PropTypes,React) { 'use strict';

PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
React = React && React.hasOwnProperty('default') ? React['default'] : React;

/*!
 * Font Awesome Free 5.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;

var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];

  attrs.forEach(function (_ref) {
    var _ref2 = slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config = _extends({}, _default);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};



function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config.replacementClass, iconName ? config.familyPrefix + '-' + iconName : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

var noop$2 = function noop() {};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

var styles$1 = namespace.styles;

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var styles = namespace.styles;

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
        build();
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var _cssInserted = false;

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (typeof undefined === 'function' && undefined.amd) {
    undefined(humps);
  } else if ('object' !== 'undefined' && module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray$1 = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;

    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var children = (element.children || []).map(convert.bind(null, createElement));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;
      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;
      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[humps.camelize(key)] = val;
        }
    }

    return acc;
  }, { attrs: {} });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === undefined ? {} : _extraProps$style,
      remaining = objectWithoutProperties(extraProps, ['style']);


  mixins.attrs['style'] = _extends$1({}, mixins.attrs['style'], existingStyle);

  return createElement.apply(undefined, [element.tag, _extends$1({}, mixins.attrs, remaining)].concat(toConsumableArray$1(children)));
}

var PRODUCTION$1 = false;

try {
  PRODUCTION$1 = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION$1 && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-inverse': props.inverse,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return { prefix: icon$$1[0], iconName: icon$$1[1] };
  }

  if (typeof icon$$1 === 'string') {
    return { prefix: 'fas', iconName: icon$$1 };
  }
}

function FontAwesomeIcon(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className;


  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(toConsumableArray$1(classList(props)), toConsumableArray$1(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

  var renderedIcon = icon(iconLookup, _extends$1({}, classes, transform, mask, {
    symbol: symbol
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;

  var extraProps = {};

  Object.keys(props).forEach(function (key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });

  return convertCurry(abstract[0], extraProps);
}

FontAwesomeIcon.displayName = 'FontAwesomeIcon';

FontAwesomeIcon.propTypes = {
  border: PropTypes.bool,

  className: PropTypes.string,

  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  fixedWidth: PropTypes.bool,

  inverse: PropTypes.bool,

  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  listItem: PropTypes.bool,

  pull: PropTypes.oneOf(['right', 'left']),

  pulse: PropTypes.bool,

  rotation: PropTypes.oneOf([90, 180, 270]),

  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

  spin: PropTypes.bool,

  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  transform: null
};

var convertCurry = convert.bind(null, React.createElement);

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule$1(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css$1 = ".button_sitcontrolbtn__3U7_H {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  color: #fff; }\n  .button_sitcontrolbtn__3U7_H:not(:disabled) {\n    cursor: pointer; }\n  .button_sitcontrolbtn__3U7_H:hover {\n    color: #fff;\n    text-decoration: none; }\n  .button_sitcontrolbtn__3U7_H:disabled {\n    color: #fff;\n    opacity: 0.7; }\n  .button_sitcontrolbtn__3U7_H:focus {\n    outline: 0;\n    text-decoration: none; }\n  .button_sitcontrolbtn__3U7_H.button_primary__-u8iu {\n    background-color: #007bff;\n    border-color: #007bff; }\n    .button_sitcontrolbtn__3U7_H.button_primary__-u8iu:hover {\n      background-color: #0069d9;\n      border-color: #0062cc; }\n    .button_sitcontrolbtn__3U7_H.button_primary__-u8iu:focus {\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_primary__-u8iu:disabled {\n      background-color: #007bff;\n      border-color: #007bff; }\n  .button_sitcontrolbtn__3U7_H.button_secondary__TIaR_ {\n    background-color: #6c757d;\n    border-color: #6c757d; }\n    .button_sitcontrolbtn__3U7_H.button_secondary__TIaR_:hover {\n      background-color: #5a6268;\n      border-color: #545b62; }\n    .button_sitcontrolbtn__3U7_H.button_secondary__TIaR_:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_secondary__TIaR_:disabled {\n      background-color: #6c757d;\n      border-color: #6c757d; }\n  .button_sitcontrolbtn__3U7_H.button_success__2-a4z {\n    background-color: #28a745;\n    border-color: #28a745; }\n    .button_sitcontrolbtn__3U7_H.button_success__2-a4z:hover {\n      background-color: #218838;\n      border-color: #1e7e34; }\n    .button_sitcontrolbtn__3U7_H.button_success__2-a4z:focus {\n      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_success__2-a4z:disabled {\n      background-color: #28a745;\n      border-color: #28a745; }\n  .button_sitcontrolbtn__3U7_H.button_danger__C5jrw {\n    background-color: #dc3545;\n    border-color: #dc3545; }\n    .button_sitcontrolbtn__3U7_H.button_danger__C5jrw:hover {\n      background-color: #c82333;\n      border-color: #bd2130; }\n    .button_sitcontrolbtn__3U7_H.button_danger__C5jrw:focus {\n      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_danger__C5jrw:disabled {\n      background-color: #dc3545;\n      border-color: #dc3545; }\n  .button_sitcontrolbtn__3U7_H.button_warning__3-7xm {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n    .button_sitcontrolbtn__3U7_H.button_warning__3-7xm:hover {\n      background-color: #e0a800;\n      border-color: #d39e00; }\n    .button_sitcontrolbtn__3U7_H.button_warning__3-7xm:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_warning__3-7xm:disabled {\n      background-color: #ffc107;\n      border-color: #ffc107; }\n  .button_sitcontrolbtn__3U7_H.button_info__3czVn {\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n    .button_sitcontrolbtn__3U7_H.button_info__3czVn:hover {\n      background-color: #138496;\n      border-color: #117a8b; }\n    .button_sitcontrolbtn__3U7_H.button_info__3czVn:focus {\n      box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_info__3czVn:disabled {\n      background-color: #17a2b8;\n      border-color: #17a2b8; }\n  .button_sitcontrolbtn__3U7_H.button_light__3SexT {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n    .button_sitcontrolbtn__3U7_H.button_light__3SexT:hover {\n      background-color: #e2e6ea;\n      border-color: #dae0e5; }\n    .button_sitcontrolbtn__3U7_H.button_light__3SexT:focus {\n      box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_light__3SexT:disabled {\n      background-color: #f8f9fa;\n      border-color: #f8f9fa; }\n  .button_sitcontrolbtn__3U7_H.button_dark__1Glmk {\n    background-color: #343a40;\n    border-color: #343a40; }\n    .button_sitcontrolbtn__3U7_H.button_dark__1Glmk:hover {\n      background-color: #23272b;\n      border-color: #1d2124; }\n    .button_sitcontrolbtn__3U7_H.button_dark__1Glmk:focus {\n      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n    .button_sitcontrolbtn__3U7_H.button_dark__1Glmk:disabled {\n      background-color: #343a40;\n      border-color: #343a40; }\n  .button_sitcontrolbtn__3U7_H.button_link__3_nMs {\n    font-weight: 400;\n    color: #007bff;\n    background-color: transparent; }\n    .button_sitcontrolbtn__3U7_H.button_link__3_nMs:hover {\n      color: #0056b3;\n      text-decoration: underline;\n      background-color: transparent;\n      border-color: transparent; }\n    .button_sitcontrolbtn__3U7_H.button_link__3_nMs:focus {\n      text-decoration: underline;\n      border-color: transparent;\n      box-shadow: none; }\n    .button_sitcontrolbtn__3U7_H.button_link__3_nMs:disabled {\n      color: #007bff;\n      background-color: transparent; }\n";
var s = { "sitcontrolbtn": "button_sitcontrolbtn__3U7_H", "primary": "button_primary__-u8iu", "secondary": "button_secondary__TIaR_", "success": "button_success__2-a4z", "danger": "button_danger__C5jrw", "warning": "button_warning__3-7xm", "info": "button_info__3czVn", "light": "button_light__3SexT", "dark": "button_dark__1Glmk", "link": "button_link__3_nMs" };
styleInject(css$1);

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties$1 = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var variants = { primary: s.primary, secondary: s.secondary, success: s.success, danger: s.danger, warning: s.warning, info: s.info, light: s.light, dark: s.dark, link: s.link };

function Button(props) {
  var label = props.label,
      icon = props.icon,
      classIcon = props.classIcon,
      loading = props.loading,
      children = props.children,
      newprops = objectWithoutProperties$1(props, ["label", "icon", "classIcon", "loading", "children"]);

  var content = label || children;
  return React.createElement(
    "button",
    _extends$2({ className: classnames(s.sitcontrolbtn, variants[props.variant]) }, newprops),
    loading && React.createElement(FontAwesomeIcon, { className: "fa-pulse", icon: "spinner" }),
    !loading && icon ? React.createElement(FontAwesomeIcon, { icon: icon }) : undefined,
    !loading && classIcon ? React.createElement("span", { className: classIcon }) : undefined,
    loading || icon || classIcon ? " " : undefined,
    content
  );
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  classIcon: PropTypes.string,
  loading: PropTypes.bool,
  variant: PropTypes.string
};

Button.defaultProps = {
  loading: false,
  variant: "primary"
};

var css$2 = ".input_sitcontrol__2l-qC {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  box-sizing: border-box; }\n  .input_sitcontrol__2l-qC:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .input_sitcontrol__2l-qC:disabled, .input_sitcontrol__2l-qC[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n";
var s$1 = { "sitcontrol": "input_sitcontrol__2l-qC" };
styleInject(css$2);

var input_counter = 0;

var Input = function (_React$Component) {
  inherits(Input, _React$Component);

  function Input(props) {
    classCallCheck$1(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.changeHandler = function (e) {
      var val = e.target.value;
      if (_this.props.format === "uppercase") val = val.toUpperCase();else if (_this.props.format === "lowercase") val = val.toLowerCase();
      if (_this.props.accept !== undefined) {
        var re = new RegExp("^" + _this.props.accept + "$");
        val = re.test(val) ? val : _this.state.value;
      }
      if (val !== _this.state.value) _this.onChange(e, val);
      _this.value = val;
    };

    _this.state = { value: props.defaultValue };
    _this.id = "sitcontrol" + ++input_counter;
    _this.onChange = props.onChange;
    return _this;
  }

  createClass$1(Input, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          id = _props.id,
          value = _props.value,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          accept = _props.accept,
          inputprops = objectWithoutProperties$1(_props, ["id", "value", "defaultValue", "onChange", "accept"]);

      id = id || "sitinp" + ++input_counter;
      return React.createElement("input", _extends$2({ className: s$1.sitcontrol, id: id, value: this.state.value, onChange: this.changeHandler }, inputprops));
    }
  }, {
    key: "value",
    get: function get$$1() {
      return this.state.value;
    },
    set: function set$$1(val) {
      this.setState({ value: val });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newstate = {};
      if (props.value !== undefined && state.value !== props.value) newstate.value = props.value;
      return newstate;
    }
  }]);
  return Input;
}(React.Component);


Input.defaultProps = {
  defaultValue: "",
  onChange: function onChange() {}
};
Input.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  accept: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func
};

var css$3 = ".inputbox_sitbox__21ei6 label {\n  display: inline-block;\n  margin: 0.4rem 0 0.2rem 0;\n  width: 100%; }\n";
var s$2 = { "sitbox": "inputbox_sitbox__21ei6" };
styleInject(css$3);

var counter$1 = 0;
function InputBox(props) {
  var id = props.id,
      label = props.label,
      loading = props.loading,
      ref = props.ref,
      iprops = objectWithoutProperties$1(props, ["id", "label", "loading", "ref"]);

  id = id || "sitcontrolbox" + ++counter$1;
  return React.createElement(
    "div",
    { className: classnames(s$2.sitbox) },
    React.createElement(
      "label",
      { htmlFor: id || this.id },
      loading && React.createElement(FontAwesomeIcon, { className: "fa-pulse", icon: "spinner" }),
      loading && " ",
      label
    ),
    React.createElement(Input, _extends$2({ ref: ref, id: id || this.id }, iprops))
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  loading: PropTypes.bool
};

InputBox.defaultProps = {
  loading: false
};

var css$4 = ".inputoption_inputoption__1qmWP {\n  position: relative; }\n  .inputoption_inputoption__1qmWP > div {\n    position: absolute;\n    top: 100%;\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 0.5rem;\n    z-index: 100;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-top-color: #e6e6e6;\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n    box-sizing: border-box;\n    margin-top: -1px;\n    max-height: 200px;\n    width: 100%;\n    font-size: 0.95rem; }\n    .inputoption_inputoption__1qmWP > div > span {\n      color: #aaa;\n      font-style: italic;\n      font-size: 0.9rem; }\n    .inputoption_inputoption__1qmWP > div > div {\n      padding: 0.2rem;\n      color: #222; }\n      .inputoption_inputoption__1qmWP > div > div.inputoption_selected__3FGPn {\n        background-color: rgba(0, 0, 255, 0.15); }\n  .inputoption_inputoption__1qmWP input {\n    color: #888; }\n  .inputoption_inputoption__1qmWP.inputoption_choiced__1Nl9M input {\n    color: #333; }\n";
var s2 = { "inputoption": "inputoption_inputoption__1qmWP", "selected": "inputoption_selected__3FGPn", "choiced": "inputoption_choiced__1Nl9M" };
styleInject(css$4);

var InputOption = function (_React$Component) {
  inherits(InputOption, _React$Component);

  function InputOption(props) {
    classCallCheck$1(this, InputOption);

    var _this = possibleConstructorReturn(this, (InputOption.__proto__ || Object.getPrototypeOf(InputOption)).call(this, props));

    _this.changeHandler = function (e) {
      var text = e.target.value;
      _this.setState({ text: text, value: "" }, _this.filterOptions);
    };

    _this.changeChecker = function (prevValue) {
      if (_this.onChange && prevValue !== _this.value) _this.onChange({ target: _this, oldValue: prevValue, newValue: _this.value });
    };

    _this.clickHandler = function (e) {
      if (e.target.nodeName !== "DIV") return;
      var prevValue = _this.value;
      var obj = _this.state.filteredOptions[Number(e.target.dataset.index)];
      _this.setState({ text: obj[_this.labelField], value: obj[_this.valueField] }, function () {
        return _this.changeChecker(prevValue);
      });
    };

    _this.filterOptions = function () {
      if (_this.state.text === "") var filteredOptions = _this.state.options.map(function (o) {
        return o;
      });else var filteredOptions = _this.state.options.filter(function (o) {
        return o[_this.labelField].toLowerCase().indexOf(_this.state.text.toLowerCase()) !== -1;
      });
      filteredOptions.forEach(function (o, i) {
        return o.sit_fid = i;
      });
      var prevValue = _this.state.value;
      _this.setState({ filteredOptions: filteredOptions, from: 0, show: true, value: "" }, function () {
        return _this.changeChecker(prevValue);
      });
    };

    _this.hideOptions = function () {
      setTimeout(function () {
        return _this.setState({ show: false, selectedIndex: -1 });
      }, 150);
    };

    _this.keyHandler = function (e) {
      var key = e.keyCode;
      if (key === 13 || key === 38 || key === 40) {
        e.preventDefault();
        if (_this.state.filteredOptions.length === 0) return;
        if (_this.state.selectedIndex === -1 && key === 40) {
          _this.setState({ selectedIndex: 0, show: true });
        } else if (key === 40 && _this.state.selectedIndex + 1 < _this.state.filteredOptions.length) {
          _this.setState({ selectedIndex: _this.state.selectedIndex + 1 });
        } else if (_this.state.selectedIndex === -1 && key === 38) {
          _this.setState({ selectedIndex: _this.state.filteredOptions.length - 1, show: true });
        } else if (key === 38 && _this.state.selectedIndex > 0) {
          _this.setState({ selectedIndex: _this.state.selectedIndex - 1 });
        } else if (key === 13 && _this.state.show) {
          var obj = _this.state.filteredOptions[_this.state.selectedIndex];
          var prevValue = _this.value;
          _this.setState({ text: obj[_this.labelField], selectedIndex: -1, value: obj[_this.valueField], show: false }, function () {
            return _this.changeChecker(prevValue);
          });
        }
      }
    };

    _this.mouseHandler = function (e) {
      var sindex = e.target.dataset.index;
      if (sindex === undefined) return;
      _this.setState({ selectedIndex: Number(sindex) });
    };

    _this.showOptions = function () {
      _this.setState({ show: true }, _this.filterOptions);
    };

    _this.state = {
      show: false,
      value: props.defaultValue || "",
      text: "",
      options: [],
      filteredOptions: []
    };
    _this.labelField = props.labelField || "label";
    _this.valueField = props.valueField || "value";
    _this.maxVisibleOptions = props.maxVisibleOptions || 5;
    _this.onChange = props.onChange;
    return _this;
  }

  createClass$1(InputOption, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = { width: this.props.width };
      Object.assign(style, this.props.style || {});
      return React.createElement(
        "div",
        { className: classnames(s2.inputoption, this.state.value === "" && s2.choiced), style: style },
        React.createElement("input", { type: "search", className: s$1.sitcontrol, value: this.state.text, onChange: this.changeHandler, onKeyDown: this.keyHandler, onFocus: this.showOptions, onBlur: this.hideOptions }),
        React.createElement("input", { type: "hidden", name: this.props.name, value: this.state.value }),
        this.state.show && React.createElement(
          "div",
          { onMouseMove: this.mouseHandler, onClick: this.clickHandler },
          this.state.filteredOptions.length === 0 ? React.createElement(
            "span",
            null,
            "Sin coincidencias"
          ) : this.state.filteredOptions.filter(function (o, i) {
            return i >= _this2.state.from && i < _this2.state.from + _this2.maxVisibleOptions;
          }).map(function (o, i) {
            return React.createElement(
              "div",
              { className: classnames(o.sit_fid === _this2.state.selectedIndex && s2.selected), "data-index": o.sit_fid, key: i },
              o[_this2.labelField]
            );
          })
        )
      );
    }
  }, {
    key: "value",
    get: function get$$1() {
      return this.state.value;
    },
    set: function set$$1(val) {
      var _this3 = this;

      var findings = this.state.options.filter(function (o) {
        return o[_this3.valueField] === val;
      });
      if (findings.length === 0) this.setState({ text: "", value: "" });else this.setState({ text: findings[0][this.labelField], value: val });
    }
  }, {
    key: "text",
    get: function get$$1() {
      return this.state.text;
    }
  }, {
    key: "selectedItem",
    get: function get$$1() {
      var _this4 = this;

      var findings = this.state.options.filter(function (o) {
        return o[_this4.valueField] === _this4.state.value;
      });
      if (findings.length === 0) return null;else return findings[0];
    },
    set: function set$$1(item) {
      var findings = this.state.options.filter(function (o) {
        return o === item;
      });
      if (findings.length === 0) this.setState({ text: "", value: "" });else this.setState({ text: findings[0][this.labelField], value: findings[0][this.valueField] });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newstate = {};
      if (props.options !== undefined && state.options !== props.options) {
        newstate.options = props.options || [];
        newstate.selectedIndex = -1;
      }
      return newstate;
    }
  }]);
  return InputOption;
}(React.Component);

var css$5 = ".datepicker_sitcontrol__MlvQI {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  box-sizing: border-box; }\n  .datepicker_sitcontrol__MlvQI:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .datepicker_sitcontrol__MlvQI:disabled, .datepicker_sitcontrol__MlvQI[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\n.datepicker_datepicker__3yh6x {\n  display: block;\n  width: 100%;\n  background-color: #fff;\n  position: relative;\n  user-select: none; }\n  .datepicker_datepicker__3yh6x > .datepicker_sitcontrol__MlvQI {\n    padding-left: 1rem;\n    padding-right: 2.5rem;\n    text-align: center;\n    color: #787b7d; }\n  .datepicker_datepicker__3yh6x .datepicker_caret__2zRLa {\n    position: absolute;\n    top: 0.5rem;\n    color: #bbb;\n    padding: 0 0.2rem;\n    box-sizing: content-box; }\n    .datepicker_datepicker__3yh6x .datepicker_caret__2zRLa.datepicker_left__iAiHG {\n      left: 0.2rem; }\n    .datepicker_datepicker__3yh6x .datepicker_caret__2zRLa.datepicker_right__543yF {\n      right: 1.5rem; }\n  .datepicker_datepicker__3yh6x > .datepicker_calendar__ZFo0k {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.3rem;\n    color: #787b7d; }\n  .datepicker_datepicker__3yh6x:hover .datepicker_caret__2zRLa {\n    color: #787b7d; }\n    .datepicker_datepicker__3yh6x:hover .datepicker_caret__2zRLa:hover {\n      color: #111; }\n  .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 {\n    position: absolute;\n    top: 30px;\n    z-index: 100;\n    background-color: rgba(255, 255, 255, 0.96);\n    border: 1px solid #ccc;\n    box-shadow: 0 1px 5px #ddd;\n    border-radius: 7px;\n    padding: 10px;\n    box-sizing: border-box; }\n    .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div {\n      font-size: 1rem;\n      position: relative;\n      text-align: center;\n      font-weight: bold; }\n      .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div .datepicker_angle__3SzdO {\n        font-style: normal;\n        text-align: center;\n        width: 1.4rem;\n        height: 1.4rem;\n        position: absolute;\n        top: 0;\n        cursor: pointer;\n        border-radius: 50%; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div .datepicker_angle__3SzdO:hover {\n          background-color: rgba(255, 227, 160, 0.59); }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div .datepicker_angle__3SzdO.datepicker_left__iAiHG {\n          left: 0; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div .datepicker_angle__3SzdO.datepicker_right__543yF {\n          right: 0; }\n    .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul {\n      width: 182px;\n      font-size: 0;\n      padding: 5px 0 0 0;\n      box-sizing: border-box; }\n      .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li {\n        font-size: 0.9rem;\n        line-height: 0.9rem;\n        display: block;\n        border-radius: 7px;\n        width: 26px;\n        height: 1.15rem;\n        padding: 0.125rem 0.25rem;\n        float: left;\n        text-align: center;\n        box-sizing: border-box;\n        transition: background-color ease-in-out 300ms; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li:hover {\n          background-color: rgba(255, 227, 160, 0.59);\n          cursor: pointer; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li.datepicker_selected__S1Yg2 {\n          background-color: rgba(31, 42, 58, 0.73);\n          color: #fff; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li.datepicker_today__1RBsT {\n          border: 1px #1c5ec9 solid; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li.datepicker_header__3Nx4g {\n          font-size: 0.7rem;\n          padding: 0;\n          font-weight: bold;\n          height: 1rem;\n          background-color: transparent;\n          cursor: default; }\n    .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul {\n      width: 180px;\n      font-size: 0;\n      padding: 5px 0 0 0;\n      box-sizing: border-box; }\n      .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul li {\n        font-size: 1rem;\n        display: block;\n        border-radius: 7px;\n        width: 60px;\n        height: 35px;\n        padding: 5px;\n        float: left;\n        text-align: center;\n        box-sizing: border-box;\n        transition: background-color ease-in-out 300ms; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul li:hover {\n          background-color: rgba(255, 227, 160, 0.59);\n          cursor: pointer; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul li.datepicker_selected__S1Yg2 {\n          background-color: rgba(31, 42, 58, 0.73);\n          color: #fff; }\n";
var s$3 = { "sitcontrol": "datepicker_sitcontrol__MlvQI", "datepicker": "datepicker_datepicker__3yh6x", "caret": "datepicker_caret__2zRLa", "left": "datepicker_left__iAiHG", "right": "datepicker_right__543yF", "calendar": "datepicker_calendar__ZFo0k", "picker": "datepicker_picker__2yEN5", "angle": "datepicker_angle__3SzdO", "byday": "datepicker_byday__1eVAi", "selected": "datepicker_selected__S1Yg2", "today": "datepicker_today__1RBsT", "header": "datepicker_header__3Nx4g", "bymonth": "datepicker_bymonth__3D7BL" };
styleInject(css$5);

var DatePicker = function (_React$Component) {
  inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    classCallCheck$1(this, DatePicker);

    var _this = possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.setInput = function (o) {
      return _this.input = o;
    };

    _this.changeHandler = function (e) {
      return _this.setState({ value: _this.value });
    };

    _this.keyHandler = function (e) {
      var key = e.keyCode;
      e.preventDefault();
      if (key === 37 && _this.selectionMode > 1) _this.selectionMode--;else if (key === 39 && _this.selectionMode < 3) _this.selectionMode++;else if (key === 38 && _this.selectionMode === 1) _this.year++;else if (key === 38 && _this.selectionMode === 2) _this.month++;else if (key === 38 && _this.selectionMode === 3) _this.day++;else if (key === 40 && _this.selectionMode === 1) _this.year--;else if (key === 40 && _this.selectionMode === 2) _this.month--;else if (key === 40 && _this.selectionMode === 3) _this.day--;else if (key >= 96 && key <= 105) {
        if (key >= 96 && key <= 98 && _this.month === 1 && _this.selectionMode === 2) _this.month = key - 86;else if (key >= 96 && key <= 97 && _this.selectionMode === 2) _this.month = 1;else if (key > 97 && _this.selectionMode === 2) _this.month = key - 96;else if (key >= 96 && _this.day === 1 && _this.selectionMode === 3) _this.day = key - 86;else if (key >= 96 && _this.day === 2 && _this.selectionMode === 3) _this.day = key - 76;else if (key >= 96 && _this.day === 3 && _this.selectionMode === 3) _this.day = Math.min(key - 66, _this.days[_this.month]);else if (key >= 97 && _this.selectionMode === 3) _this.day = key - 96;
      }
      setTimeout(_this.selectText, 100);
    };

    _this.selectText = function () {
      if (_this.selectionMode === 1) {
        _this.input.selectionStart = 0;
        _this.input.selectionEnd = 4;
      } else if (_this.selectionMode === 2) {
        _this.input.selectionStart = 5;
        _this.input.selectionEnd = 7;
      } else if (_this.selectionMode === 3) {
        _this.input.selectionStart = 8;
        _this.input.selectionEnd = 10;
      }
    };

    _this.show = function (e) {
      _this.setState({ show: !_this.state.show, selectionYear: _this.state.year, selectionMonth: _this.state.month, index: 0 });
    };

    _this.showMonths = function (e) {
      _this.setState({ index: 1 });
    };

    _this.renderDaysList = function () {
      var firstday = _this.calculateDayOfWeek(_this.state.selectionYear, _this.state.selectionMonth, 1);
      var list = [];
      for (var i = 0; i < _this.daysofweek.length; i++) {
        list.push(React.createElement(
          "li",
          { className: s$3.header, key: i },
          _this.daysofweek[i]
        ));
      }
      for (var _i = 1; _i <= firstday; _i++) {
        list.push(React.createElement("li", { key: 7 + _i }));
      }
      for (var _i2 = 1; _i2 <= _this.days[_this.state.selectionMonth]; _i2++) {
        var selected = _this.state.year === _this.state.selectionYear && _this.state.month === _this.state.selectionMonth && _this.state.day === _i2;
        var today = _this.state.selectionYear === _this.today.getFullYear() && _this.state.selectionMonth === _this.today.getMonth() + 1 && _this.today.getDate() === _i2;
        list.push(React.createElement(
          "li",
          { className: classnames(selected && s$3.selected, today && s$3.today), key: 14 + _i2, "data-value": _i2 },
          _i2
        ));
      }
      return list;
    };

    _this.selectValue = function (e) {
      if (e.target.nodeName !== "LI") return;
      var value = e.target.dataset.value;
      if (value === undefined) return;
      if (_this.state.index === 0) {
        _this.setState({ show: false, year: _this.state.selectionYear, month: _this.state.selectionMonth, day: Number(value) });
      } else if (_this.state.index === 1) {
        _this.setState({ index: 0, selectionMonth: Number(value) });
      }
    };

    _this.today = new Date();
    _this.monthslang = {
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };
    _this.daysofweeklang = {
      en: ["S", "M", "T", "W", "T", "F", "S"],
      es: ["D", "L", "M", "M", "J", "V", "S"]
    };
    _this.days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var lang = props.lang || navigator.language || navigator.userLanguage || "en";
    if (lang.length > 2) lang = lang.substring(0, 2);
    _this.months = _this.monthslang[lang];
    _this.daysofweek = _this.daysofweeklang[lang];
    _this.state = {
      year: props.defaultYear || _this.today.getFullYear(),
      month: props.defaultMonth || _this.today.getMonth() + 1,
      day: props.defaultDay || _this.today.getDay() + 1,
      show: false,
      selectionYear: 0,
      selectionMonth: 0,
      index: 0
    };
    if (props.defaultValue) {
      _this.state.year = Number(props.defaultValue.substring(0, 4));
      _this.state.month = Number(props.defaultValue.substring(5, 7));
      _this.state.day = Number(props.defaultValue.substring(8, 10));
    }
    if (props.onChange) _this.onChange = props.onChange;
    return _this;
  }

  createClass$1(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = { width: this.props.width };
      Object.assign(style, this.props.style);
      return React.createElement(
        "div",
        { className: s$3.datepicker, style: style },
        React.createElement(FontAwesomeIcon, { className: classnames(s$3.caret, s$3.left), icon: "caret-left", onClick: function onClick(e) {
            return _this2.plusDay(-1);
          } }),
        React.createElement(FontAwesomeIcon, { className: s$3.calendar, icon: "calendar-alt", onClick: this.show }),
        React.createElement("input", { className: s$3.sitcontrol, ref: this.setInput, name: this.props.name, value: this.value, onChange: this.changeHandler, onKeyDown: this.keyHandler, onClick: this.changeHandler }),
        React.createElement(FontAwesomeIcon, { className: classnames(s$3.caret, s$3.right), icon: "caret-right", onClick: function onClick(e) {
            return _this2.plusDay(1);
          } }),
        this.state.show && this.state.index === 0 && React.createElement(
          "div",
          { className: classnames(s$3.picker, s$3.byday) },
          React.createElement(
            "div",
            null,
            React.createElement(FontAwesomeIcon, { className: classnames(s$3.angle, s$3.left), icon: "angle-left", onClick: function onClick(e) {
                return _this2.plusMonth(-1);
              } }),
            React.createElement(
              "span",
              { onClick: this.showMonths },
              this.months[this.state.selectionMonth - 1] + " " + this.state.selectionYear
            ),
            React.createElement(FontAwesomeIcon, { className: classnames(s$3.angle, s$3.right), icon: "angle-right", onClick: function onClick(e) {
                return _this2.plusMonth(1);
              } })
          ),
          React.createElement(
            "ul",
            { onClick: this.selectValue },
            this.renderDaysList(),
            React.createElement("br", { style: { clear: "both" } })
          )
        ),
        this.state.show && this.state.index === 1 && React.createElement(
          "div",
          { className: classnames(s$3.picker, s$3.bymonth) },
          React.createElement(
            "div",
            null,
            React.createElement(FontAwesomeIcon, { className: classnames(s$3.angle, s$3.left), icon: "angle-left", onClick: function onClick(e) {
                return _this2.plusYear(-1);
              } }),
            this.state.selectionYear,
            React.createElement(FontAwesomeIcon, { className: classnames(s$3.angle, s$3.right), icon: "angle-right", onClick: function onClick(e) {
                return _this2.plusYear(1);
              } })
          ),
          React.createElement(
            "ul",
            { onClick: this.selectValue },
            this.months.map(function (y, i) {
              return React.createElement(
                "li",
                { className: _this2.state.month === i + 1 && _this2.state.selectionYear === _this2.state.year ? s$3.selected : undefined, "data-value": i + 1, key: i },
                y.substring(0, 3)
              );
            }),
            React.createElement("br", { style: { clear: "both" } })
          )
        )
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (this.oldValue !== this.value) {
        this.onChange({ target: this, oldValue: this.oldValue, newValue: this.value });
        this.oldValue = this.value;
      }
      if (this.input !== document.activeElement) {
        this.selectionMode = 0;
        return;
      }
      setTimeout(function () {
        var s = _this3.input.selectionStart;
        if (s >= 0 && s <= 4) _this3.selectionMode = 1;else if (s >= 5 && s <= 7) _this3.selectionMode = 2;else if (s >= 8 && s <= 10) _this3.selectionMode = 3;
        _this3.selectText();
      }, 100);
    }
  }, {
    key: "calculateDayOfWeek",
    value: function calculateDayOfWeek(y, m, d) {
      var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
      y -= m < 3;
      return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
    }
  }, {
    key: "plusYear",
    value: function plusYear(n) {
      this.setState({ selectionYear: this.state.selectionYear + n });
    }
  }, {
    key: "plusMonth",
    value: function plusMonth(n) {
      var month = this.state.selectionMonth + n;
      var year = this.state.selectionYear;
      if (month <= 0) {
        month = 12;
        year--;
      }
      if (month >= 13) {
        month = 1;
        year++;
      }
      this.setState({ selectionYear: year, selectionMonth: month });
    }
  }, {
    key: "plusDay",
    value: function plusDay(n) {
      var day = this.state.day + n;
      var month = this.state.month;
      var year = this.state.year;
      if (day <= 0) {
        month--;
        if (month === 0) {
          month = 12;
          year--;
        }
        day = this.days[month];
      }
      if (day > this.days[month]) {
        day = 1;
        month++;
        if (month > 12) {
          month = 1;
          year++;
        }
      }
      this.setState({ year: year, month: month, day: day, selectionYear: year, selectionMonth: month });
    }
  }, {
    key: "day",
    set: function set$$1(day) {
      if (day < 1 || day > this.days[this.state.month]) return;
      this.setState({ day: day });
    },
    get: function get$$1() {
      return this.state.day;
    }
  }, {
    key: "dayStr",
    get: function get$$1() {
      return (this.state.day < 10 ? "0" : "") + this.state.day;
    }
  }, {
    key: "dayOfWeek",
    get: function get$$1() {
      return this.calculateDayOfWeek(this.state.year, this.state.month, this.state.day);
    }
  }, {
    key: "month",
    get: function get$$1() {
      return this.state.month;
    },
    set: function set$$1(month) {
      if (month < 1 || month > 12) return;
      this.setState({ month: month, show: false });
    }
  }, {
    key: "monthStr",
    get: function get$$1() {
      return (this.state.month < 10 ? "0" : "") + this.state.month;
    }
  }, {
    key: "year",
    get: function get$$1() {
      return this.state.year;
    },
    set: function set$$1(year) {
      this.setState({ year: year, show: false });
    }
  }, {
    key: "value",
    get: function get$$1() {
      return this.year + "-" + this.monthStr + "-" + this.dayStr;
    },
    set: function set$$1(date) {
      var y = date.substring(0, 4);
      var m = date.substring(5, 7);
      var d = date.substring(8, 10);
      this.setState({ year: Number(y), month: Number(m), day: Number(d) });
    }
  }]);
  return DatePicker;
}(React.Component);


DatePicker.defaultProps = {
  style: {},
  onChange: function onChange() {}
};

DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

var select_counter = 0;

var Select = function (_React$Component) {
  inherits(Select, _React$Component);

  function Select(props) {
    classCallCheck$1(this, Select);

    var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.changeHandler = function (e) {
      var oldValue = _this.state.value;
      var newValue = _this.readOnly ? oldValue : e.target.value;
      _this.setState({ value: newValue }, _this.changeTrigger(oldValue, newValue));
    };

    _this.state = { value: props.defaultValue };
    _this.valueFunc = function (o) {
      return o[props.valueField];
    };
    _this.labelFunc = function (o) {
      return o[props.labelField];
    };
    if (props.valueFunc) _this.valueFunc = props.valueFunc;
    if (props.labelFunc) _this.labelFunc = props.labelFunc;
    _this.select = null;
    _this.onChange = props.onChange;
    _this.id = "sitselect" + ++select_counter;
    return _this;
  }

  createClass$1(Select, [{
    key: "changeTrigger",
    value: function changeTrigger(oldValue, newValue) {
      if (this.onChange !== undefined && oldValue !== newValue) this.onChange({ target: this, oldValue: oldValue, newValue: newValue });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          options = _props.options,
          defaultValue = _props.defaultValue,
          value = _props.value,
          readOnly = _props.readOnly,
          className = _props.className,
          labelField = _props.labelField,
          valueField = _props.valueField,
          labelFunc = _props.labelFunc,
          valueFunc = _props.valueFunc,
          onChange = _props.onChange,
          style = _props.style,
          width = _props.width,
          newprops = objectWithoutProperties$1(_props, ["id", "options", "defaultValue", "value", "readOnly", "className", "labelField", "valueField", "labelFunc", "valueFunc", "onChange", "style", "width"]);

      style = _extends$2({ width: width }, style);
      this.readOnly = readOnly;
      this.options = options;
      this.onChange = onChange;
      id = id || this.id;
      return React.createElement(
        "select",
        _extends$2({ ref: function ref(s) {
            return _this2.select = s;
          }, id: id, className: className || s$1.sitcontrol, value: this.state.value, readOnly: readOnly, style: style, onChange: this.changeHandler }, newprops),
        options.map(function (o, i) {
          var val = _this2.valueFunc(o, i);
          return React.createElement(
            "option",
            { value: val, key: val, "data-index": i },
            _this2.labelFunc(o, i)
          );
        }),
        this.props.children
      );
    }
  }, {
    key: "value",
    get: function get$$1() {
      return this.select.value;
    },
    set: function set$$1(val) {
      this.setState({ value: val });
    }
  }, {
    key: "selectedItem",
    get: function get$$1() {
      var _this3 = this;

      var x = this.options.filter(function (o) {
        return _this3.valueFunc(o) === _this3.state.value;
      });
      if (x.length === 0) return this.options[0];else return x[0];
    },
    set: function set$$1(obj) {
      this.value = obj[this.valueField];
    }
  }]);
  return Select;
}(React.Component);

Select.defaultProps = {
  defaultValue: "",
  readOnly: false,
  labelField: "label",
  valueField: "value",
  onChange: function onChange() {},
  style: {},
  options: []
};
Select.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  labelFunc: PropTypes.func,
  valueFunc: PropTypes.func,
  style: PropTypes.object
};

var counter$2 = 0;
function SelectBox(props) {
  var id = props.id,
      label = props.label,
      loading = props.loading,
      className = props.className,
      ref = props.ref,
      sprops = objectWithoutProperties$1(props, ["id", "label", "loading", "className", "ref"]);

  id = id || "sitselectbox" + ++counter$2;
  return React.createElement(
    "div",
    { className: classnames(s$2.sitbox, className) },
    React.createElement(
      "label",
      { htmlFor: id },
      loading && React.createElement(FontAwesomeIcon, { icon: "spinner", pulse: true }),
      loading && " ",
      label
    ),
    React.createElement(Select, _extends$2({ ref: ref, id: id }, sprops))
  );
}

SelectBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  loading: PropTypes.bool
};

SelectBox.defaultProps = {
  loading: false
};

/*!
 * Font Awesome Free 5.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faAngleLeft = { prefix: 'fas', iconName: 'angle-left', icon: [256, 512, [], "f104", "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"] };
var faAngleRight = { prefix: 'fas', iconName: 'angle-right', icon: [256, 512, [], "f105", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"] };
var faCalendarAlt = { prefix: 'fas', iconName: 'calendar-alt', icon: [448, 512, [], "f073", "M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z"] };
var faCaretLeft = { prefix: 'fas', iconName: 'caret-left', icon: [192, 512, [], "f0d9", "M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"] };
var faCaretRight = { prefix: 'fas', iconName: 'caret-right', icon: [192, 512, [], "f0da", "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"] };
var faSpinner = { prefix: 'fas', iconName: 'spinner', icon: [512, 512, [], "f110", "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"] };

library.add(faSpinner, faCaretLeft, faCaretRight, faAngleLeft, faAngleRight, faCalendarAlt);

exports.Button = Button;
exports.Input = Input;
exports.InputBox = InputBox;
exports.InputOption = InputOption;
exports.DatePicker = DatePicker;
exports.Select = Select;
exports.SelectBox = SelectBox;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
