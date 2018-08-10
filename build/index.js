(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(factory(global.React));
}(this, (function (React) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

{
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
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

var css = ".input_sitcontrol__3iLVi {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  overflow: visible;\n  margin: 0;\n  font-family: inherit; }\n  .input_sitcontrol__3iLVi:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .input_sitcontrol__3iLVi:disabled, .input_sitcontrol__3iLVi[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n";
styleInject(css);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var input_counter = 0;
class Input extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = e => {
      var val = e.target.value;
      if (this.props.format === "uppercase") val = val.toUpperCase();else if (this.props.format === "lowercase") val = val.toLowerCase();
      if (this.props.accept !== undefined) {
        var re = new RegExp("^" + this.props.accept + "$");
        val = re.test(val) ? val : this.state.value;
      }
      if (val !== this.state.value) this.onChange(e, val);
      this.value = val;
    };

    this.state = { value: props.defaultValue };
    this.id = `sitcontrol${++input_counter}`;
    this.onChange = props.onChange;
  }
  get value() {
    return this.state.value;
  }
  set value(val) {
    this.setState({ value: val });
  }

  render() {
    var _props = this.props,
        { id, value, defaultValue, onChange, accept } = _props,
        inputprops = _objectWithoutProperties(_props, ["id", "value", "defaultValue", "onChange", "accept"]);
    id = id || `sitinp${++input_counter}`;
    return React.createElement("input", _extends({ className: "sitcontrol", id: id, value: this.state.value, onChange: this.changeHandler }, inputprops));
  }
  static getDerivedStateFromProps(props, state) {
    const newstate = {};
    if (props.value !== undefined && state.value !== props.value) newstate.value = props.value;
    return newstate;
  }
}

Input.defaultProps = {
  defaultValue: "",
  onChange: () => {}
};
Input.propTypes = {
  value: propTypes.string,
  defaultValue: propTypes.string,
  accept: propTypes.string,
  format: propTypes.string,
  onChange: propTypes.func
};

var css$1 = ".inputbox_sitcontrolbox__35IBH label {\n  display: inline-block;\n  margin: 0.4rem 0 0.2rem 0; }\n";
styleInject(css$1);

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var inputbox_counter;
function InputBox(props) {
  var { id, label, loading, ref } = props,
      iprops = _objectWithoutProperties$1(props, ["id", "label", "loading", "ref"]);
  id = id || `sitcontrol${++inputbox_counter}`;
  return React.createElement(
    "div",
    { className: "sitcontrolbox" },
    React.createElement(
      "label",
      { htmlFor: id || this.id },
      label,
      loading && React.createElement("span", { className: "icon-spin5 animate-spin" })
    ),
    React.createElement(Input, _extends$1({ ref: ref, id: id || this.id }, iprops))
  );
}

InputBox.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string,
  loading: propTypes.bool
};

var css$2 = ".datepicker_datepicker__3yh6x {\n  display: block;\n  width: 100%;\n  background-color: #fff;\n  position: relative;\n  user-select: none; }\n  .datepicker_datepicker__3yh6x > .datepicker_sitcontrol__MlvQI {\n    padding-left: 2rem;\n    text-align: center;\n    color: #787b7d; }\n  .datepicker_datepicker__3yh6x > .datepicker_icon-calendar__1vMuS {\n    position: absolute;\n    top: 0.2rem;\n    left: 5px;\n    color: #787b7d; }\n  .datepicker_datepicker__3yh6x > .datepicker_icon-left-dir__2NgNZ {\n    position: absolute;\n    top: 0.2rem;\n    left: 1.5rem;\n    color: #bbb; }\n  .datepicker_datepicker__3yh6x > .datepicker_icon-right-dir__2HkwH {\n    position: absolute;\n    top: 0.2rem;\n    right: 0;\n    color: #bbb; }\n  .datepicker_datepicker__3yh6x:hover > .datepicker_icon-left-dir__2NgNZ,\n  .datepicker_datepicker__3yh6x:hover > .datepicker_icon-right-dir__2HkwH {\n    color: #787b7d; }\n    .datepicker_datepicker__3yh6x:hover > .datepicker_icon-left-dir__2NgNZ:hover,\n    .datepicker_datepicker__3yh6x:hover > .datepicker_icon-right-dir__2HkwH:hover {\n      color: #111; }\n  .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 {\n    position: absolute;\n    top: 30px;\n    z-index: 100;\n    background-color: rgba(255, 255, 255, 0.96);\n    border: 1px solid #ccc;\n    box-shadow: 0 1px 5px #ddd;\n    border-radius: 7px;\n    padding: 10px; }\n    .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div {\n      font-size: 1rem;\n      position: relative;\n      text-align: center;\n      font-weight: bold; }\n      .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div > i {\n        font-style: normal;\n        text-align: center;\n        width: 2rem;\n        height: 2rem;\n        line-height: 2rem;\n        position: absolute;\n        top: 0;\n        cursor: pointer;\n        border-radius: 50%; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div > i:hover {\n          background-color: rgba(255, 227, 160, 0.59); }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div > i.datepicker_left__iAiHG {\n          left: 0; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5 > div > i.datepicker_right__543yF {\n          right: 0; }\n    .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul {\n      width: 182px;\n      font-size: 0;\n      padding: 5px 0 0 0; }\n      .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li {\n        font-size: 0.9rem;\n        display: block;\n        border-radius: 7px;\n        width: 26px;\n        height: 26px;\n        padding: 2px 4px;\n        float: left;\n        text-align: center;\n        transition: background-color ease-in-out 300ms; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li:hover {\n          background-color: rgba(255, 227, 160, 0.59);\n          cursor: pointer; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li.datepicker_selected__S1Yg2 {\n          background-color: rgba(31, 42, 58, 0.73);\n          color: #fff; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li.datepicker_today__1RBsT {\n          border: 1px #1c5ec9 solid; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_byday__1eVAi > ul li.datepicker_header__3Nx4g {\n          font-size: 0.7rem;\n          padding: 0;\n          font-weight: bold;\n          height: 1rem;\n          background-color: transparent;\n          cursor: default; }\n    .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul {\n      width: 180px;\n      font-size: 0;\n      padding: 5px 0 0 0; }\n      .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul li {\n        font-size: 1rem;\n        display: block;\n        border-radius: 7px;\n        width: 60px;\n        height: 35px;\n        padding: 5px;\n        float: left;\n        text-align: center;\n        transition: background-color ease-in-out 300ms; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul li:hover {\n          background-color: rgba(255, 227, 160, 0.59);\n          cursor: pointer; }\n        .datepicker_datepicker__3yh6x > .datepicker_picker__2yEN5.datepicker_bymonth__3D7BL > ul li.datepicker_selected__S1Yg2 {\n          background-color: rgba(31, 42, 58, 0.73);\n          color: #fff; }\n";
styleInject(css$2);

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.setInput = o => this.input = o;

    this.changeHandler = e => this.setState({ value: this.value });

    this.keyHandler = e => {
      const key = e.keyCode;
      if (key === 37 && this.selectionMode > 1) this.selectionMode--;else if (key === 39 && this.selectionMode < 3) this.selectionMode++;else if (key === 38 && this.selectionMode === 1) this.year++;else if (key === 38 && this.selectionMode === 2) this.month++;else if (key === 38 && this.selectionMode === 3) this.plusDay(1);else if (key === 40 && this.selectionMode === 1) this.year--;else if (key === 40 && this.selectionMode === 2) this.month--;else if (key === 40 && this.selectionMode === 3) this.plusDay(-1);
      setTimeout(this.selectText, 100);
    };

    this.selectText = () => {
      if (this.selectionMode === 1) {
        this.input.selectionStart = 0;
        this.input.selectionEnd = 4;
      } else if (this.selectionMode === 2) {
        this.input.selectionStart = 5;
        this.input.selectionEnd = 7;
      } else if (this.selectionMode === 3) {
        this.input.selectionStart = 8;
        this.input.selectionEnd = 10;
      }
    };

    this.show = e => {
      this.setState({ show: !this.state.show, selectionYear: this.state.year, selectionMonth: this.state.month, index: 0 });
    };

    this.hide = e => {
      setTimeout(() => this.setState({ show: false, index: 0 }), 250);
    };

    this.showMonths = e => {
      this.setState({ index: 1 });
    };

    this.renderDaysList = () => {
      const firstday = this.calculateDayOfWeek(this.state.selectionYear, this.state.selectionMonth, 1);
      var list = [];
      for (let i = 0; i < this.daysofweek.length; i++) {
        list.push(React.createElement(
          "li",
          { className: "header", key: i },
          this.daysofweek[i]
        ));
      }
      for (let i = 1; i <= firstday; i++) {
        list.push(React.createElement("li", { key: 7 + i }));
      }
      for (let i = 1; i <= this.days[this.state.selectionMonth]; i++) {
        let selected = this.state.year === this.state.selectionYear && this.state.month === this.state.selectionMonth && this.state.day === i;
        let today = this.state.selectionYear === this.today.getFullYear() && this.state.selectionMonth === this.today.getMonth() + 1 && this.today.getDate() === i;
        let classes = [selected ? "selected" : "", today ? "today" : ""];
        list.push(React.createElement(
          "li",
          { className: classes.join(" "), key: 14 + i, "data-value": i },
          i
        ));
      }
      return list;
    };

    this.selectValue = e => {
      if (e.target.nodeName !== "LI") return;
      const value = e.target.dataset.value;
      if (value === undefined) return;
      if (this.state.index === 0) {
        this.setState({ show: false, year: this.state.selectionYear, month: this.state.selectionMonth, day: Number(value) }, () => {
          if (this.onChange) this.onChange({ target: this, value: this.value });
        });
      } else if (this.state.index === 1) {
        this.setState({ index: 0, selectionMonth: Number(value) });
      }
    };

    this.today = new Date();
    this.monthslang = {
      en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    };
    this.daysofweeklang = {
      en: ["S", "M", "T", "W", "T", "F", "S"],
      es: ["D", "L", "M", "M", "J", "V", "S"]
    };
    this.days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var lang = props.lang || navigator.language || navigator.userLanguage || "en";
    if (lang.length > 2) lang = lang.substring(0, 2);
    this.months = this.monthslang[lang];
    this.daysofweek = this.daysofweeklang[lang];
    this.state = {
      year: props.defaultYear || this.today.getFullYear(),
      month: props.defaultMonth || this.today.getMonth() + 1,
      day: props.defaultDay || this.today.getDay() + 1,
      show: false,
      selectionYear: 0,
      selectionMonth: 0,
      index: 0
    };
    if (props.defaultValue) {
      this.state.year = Number(props.defaultValue.substring(0, 4));
      this.state.month = Number(props.defaultValue.substring(5, 7));
      this.state.day = Number(props.defaultValue.substring(8, 10));
    }
    this.onChange = () => {};
    if (props.onChange) this.onChange = props.onChange;
  }
  render() {
    var style = { width: this.props.width };
    Object.assign(style, this.props.style);
    return React.createElement(
      "div",
      { className: "datepicker", style: style },
      React.createElement("span", { className: "icon-left-dir", onClick: e => this.plusDay(-1) }),
      React.createElement("span", { className: "icon-calendar", onClick: this.show }),
      React.createElement("input", { className: "sitcontrol", ref: this.setInput, name: this.props.name, value: this.value, onChange: this.changeHandler, onKeyDown: this.keyHandler, onFocus: this.show, onBlur: this.hide }),
      React.createElement("span", { className: "icon-right-dir", onClick: e => this.plusDay(1) }),
      this.state.show && this.state.index === 0 && React.createElement(
        "div",
        { className: "picker byday" },
        React.createElement(
          "div",
          null,
          React.createElement("i", { className: "icon-left-open left", onClick: e => this.plusMonth(-1) }),
          React.createElement(
            "span",
            { onClick: this.showMonths },
            this.months[this.state.selectionMonth - 1] + " " + this.state.selectionYear
          ),
          React.createElement("i", { className: "icon-right-open right", onClick: e => this.plusMonth(1) })
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
        { className: "picker bymonth" },
        React.createElement(
          "div",
          null,
          React.createElement("i", { className: "icon-left-open left", onClick: e => this.plusYear(-1) }),
          this.state.selectionYear,
          React.createElement("i", { className: "icon-right-open right", onClick: e => this.plusYear(1) })
        ),
        React.createElement(
          "ul",
          { onClick: this.selectValue },
          this.months.map((y, i) => React.createElement(
            "li",
            { className: this.state.month === i + 1 && this.state.selectionYear === this.state.year ? "selected" : undefined, "data-value": i + 1, key: i },
            y.substring(0, 3)
          )),
          React.createElement("br", { style: { clear: "both" } })
        )
      )
    );
  }
  componentDidUpdate() {
    if (this.input !== document.activeElement) {
      this.selectionMode = 0;
      return;
    }
    setTimeout(() => {
      const s = this.input.selectionStart;
      if (s >= 0 && s <= 4) this.selectionMode = 1;else if (s >= 5 && s <= 7) this.selectionMode = 2;else if (s >= 8 && s <= 10) this.selectionMode = 3;
      this.selectText();
    }, 100);
  }
  set day(day) {
    this.setState({ day });
  }
  get day() {
    return this.state.day;
  }
  get dayStr() {
    return (this.state.day < 10 ? "0" : "") + this.state.day;
  }
  get dayOfWeek() {
    return this.calculateDayOfWeek(this.state.year, this.state.month, this.state.day);
  }
  get month() {
    return this.state.month;
  }
  get monthStr() {
    return (this.state.month < 10 ? "0" : "") + this.state.month;
  }
  set month(month) {
    if (month < 1 || month > 12) return;
    this.setState({ month, show: false });
  }
  get year() {
    return this.state.year;
  }
  set year(year) {
    this.setState({ year, show: false });
  }
  get value() {
    return this.year + "-" + this.monthStr + "-" + this.dayStr;
  }
  set value(date) {
    var y = date.substring(0, 4);
    var m = date.substring(5, 7);
    var d = date.substring(8, 10);
    this.setState({ year: Number(y), month: Number(m), day: Number(d) });
  }

  calculateDayOfWeek(y, m, d) {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    y -= m < 3;
    return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
  }

  plusYear(n) {
    this.setState({ selectionYear: this.state.selectionYear + n });
  }
  plusMonth(n) {
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
  plusDay(n) {
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
    this.setState({ year, month, day, selectionYear: year, selectionMonth: month }, () => this.onChange({ target: this, value: this.value }));
  }
}

DatePicker.defaultProps = {
  style: {}
};

var SitControls = {
  Input: Input,
  InputBox: InputBox,
  DatePicker: DatePicker
};

module.exports = SitControls;

})));
//# sourceMappingURL=index.js.map
