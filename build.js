System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-object.js', ['npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return Object(defined(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.object-sap.js', ['npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
        core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
        fails = $__require('npm:core-js@1.2.7/library/modules/$.fails.js');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.object.keys.js', ['npm:core-js@1.2.7/library/modules/$.to-object.js', 'npm:core-js@1.2.7/library/modules/$.object-sap.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('npm:core-js@1.2.7/library/modules/$.to-object.js');
  $__require('npm:core-js@1.2.7/library/modules/$.object-sap.js')('keys', function ($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/object/keys.js', ['npm:core-js@1.2.7/library/modules/es6.object.keys.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.keys.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Object.keys;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/object/keys.js", ["npm:core-js@1.2.7/library/fn/object/keys.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/object/keys.js"), __esModule: true };
});
System.register('js/displayContent.js', ['npm:babel-runtime@5.8.38/core-js/object/keys.js', 'js/weatherApi.js', 'js/clothesPicChooser.js'], function (_export) {
    var _Object$keys, getPosition, picLinks;

    return {
        setters: [function (_npmBabelRuntime5838CoreJsObjectKeysJs) {
            _Object$keys = _npmBabelRuntime5838CoreJsObjectKeysJs['default'];
        }, function (_jsWeatherApiJs) {
            getPosition = _jsWeatherApiJs['default'];
        }, function (_jsClothesPicChooserJs) {
            picLinks = _jsClothesPicChooserJs['default'];
        }],
        execute: function () {
            'use strict';

            getPosition.then(function (weather) {
                var numbersOutput = '<span>Average Temp: ' + weather.avrTemp + '</span><br>\n        <span>wind speed: ' + weather.wind + ' km/h</span><br>\n        <span>humidity: ' + weather.humidity + '%</span><br>\n         ';
                var conditionsOutput = '<span>sky condition: ' + weather.clouds + '</span><br>\n        <span>clouds amount: ' + weather.cloudsPersent + '%</span> <br>\n        <span>very actual icon:</span> <img src="http://openweathermap.org/img/w/' + weather.icon + '.png"> ';
                var locationOutput = '<span>you are here: ' + weather.city + '</span><br>\n        <span>forecast time: ' + weather.time + '</span>';
                $('#numbers').html(numbersOutput);
                $('#conditions').html(conditionsOutput);
                $('#location').html(locationOutput);
            });

            picLinks.then(function (picLinks) {
                console.log(picLinks);
                var clothesHtml = '';
                _Object$keys(picLinks).forEach(function (e) {
                    if (picLinks[e] != 'none.png') {
                        clothesHtml += '<div class=\'' + e + '\'><img src=\'' + picLinks[e] + '\'></div>';
                    }

                    console.log(clothesHtml);
                }, undefined);
                clothesHtml += '<span>← heres your look</span>';
                $('#clothes').html(clothesHtml);
            });

            _export('default', {});
        }
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/es6.object.to-string.js", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";

  var global = this || self,
      GLOBAL = global;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.string-at.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.string.iterator.js', ['npm:core-js@1.2.7/library/modules/$.string-at.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $at = $__require('npm:core-js@1.2.7/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iter-step.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iobject.js', ['npm:core-js@1.2.7/library/modules/$.cof.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.defined.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-iobject.js', ['npm:core-js@1.2.7/library/modules/$.iobject.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('npm:core-js@1.2.7/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return IObject(defined(it));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-create.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.7/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-define.js', ['npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.redefine.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.iter-create.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.7/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.7/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.7/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.array.iterator.js', ['npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js', 'npm:core-js@1.2.7/library/modules/$.iter-step.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.to-iobject.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js'),
      step = $__require('npm:core-js@1.2.7/library/modules/$.iter-step.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      toIObject = $__require('npm:core-js@1.2.7/library/modules/$.to-iobject.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/web.dom.iterable.js', ['npm:core-js@1.2.7/library/modules/es6.array.iterator.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.array.iterator.js');
  var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.library.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.export.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.strict-new.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-call.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-array-iter.js', ['npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.to-integer.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-length.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.classof.js', ['npm:core-js@1.2.7/library/modules/$.cof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js'),
        TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iterators.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', ['npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
    module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.for-of.js', ['npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.iter-call.js', 'npm:core-js@1.2.7/library/modules/$.is-array-iter.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.to-length.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator-method.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      call = $__require('npm:core-js@1.2.7/library/modules/$.iter-call.js'),
      isArrayIter = $__require('npm:core-js@1.2.7/library/modules/$.is-array-iter.js'),
      anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
      toLength = $__require('npm:core-js@1.2.7/library/modules/$.to-length.js'),
      getIterFn = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js');
  module.exports = function (iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      call(iterator, f, step.value, entries);
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-proto.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var getDesc = $__require('npm:core-js@1.2.7/library/modules/$.js').getDesc,
      isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
      anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.same-value.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.an-object.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.species-constructor.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.a-function.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
        aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js'),
        SPECIES = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('species');
    module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.a-function.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.ctx.js', ['npm:core-js@1.2.7/library/modules/$.a-function.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.invoke.js", [], true, function ($__require, exports, module) {
                  var global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.html.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.global.js').document && document.documentElement;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-object.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.dom-create.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
        document = $__require('npm:core-js@1.2.7/library/modules/$.global.js').document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {};
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.task.js', ['npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.invoke.js', 'npm:core-js@1.2.7/library/modules/$.html.js', 'npm:core-js@1.2.7/library/modules/$.dom-create.js', 'npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.cof.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
        invoke = $__require('npm:core-js@1.2.7/library/modules/$.invoke.js'),
        html = $__require('npm:core-js@1.2.7/library/modules/$.html.js'),
        cel = $__require('npm:core-js@1.2.7/library/modules/$.dom-create.js'),
        global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function () {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function (event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('npm:core-js@1.2.7/library/modules/$.cof.js')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.cof.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.microtask.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.task.js', 'npm:core-js@1.2.7/library/modules/$.cof.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        macrotask = $__require('npm:core-js@1.2.7/library/modules/$.task.js').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('npm:core-js@1.2.7/library/modules/$.cof.js')(process) == 'process',
        head,
        last,
        notify;
    var flush = function () {
      var parent, domain, fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain) domain.enter();
        fn();
        if (domain) domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent) parent.enter();
    };
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true });
      notify = function () {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function () {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function () {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.property-desc.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.hide.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine.js', ['npm:core-js@1.2.7/library/modules/$.hide.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.hide.js');
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine-all.js', ['npm:core-js@1.2.7/library/modules/$.redefine.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js');
  module.exports = function (target, src) {
    for (var key in src) redefine(target, key, src[key]);
    return target;
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.has.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('npm:core-js@1.2.7/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.fails.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.descriptors.js', ['npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-species.js', ['npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      DESCRIPTORS = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js'),
      SPECIES = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('species');
  module.exports = function (KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.shared.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.uid.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.global.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.wks.js', ['npm:core-js@1.2.7/library/modules/$.shared.js', 'npm:core-js@1.2.7/library/modules/$.uid.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('npm:core-js@1.2.7/library/modules/$.shared.js')('wks'),
        uid = $__require('npm:core-js@1.2.7/library/modules/$.uid.js'),
        Symbol = $__require('npm:core-js@1.2.7/library/modules/$.global.js').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-detect.js', ['npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
});
System.registerDynamic('npm:process@0.11.10/browser.js', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
        return [];
    };

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
System.registerDynamic("npm:process@0.11.10.js", ["npm:process@0.11.10/browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:process@0.11.10/browser.js");
});
System.registerDynamic('github:jspm/nodelibs-process@0.1.2/index.js', ['npm:process@0.11.10.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.10.js');
});
System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:jspm/nodelibs-process@0.1.2/index.js");
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.promise.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js', 'npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.is-object.js', 'npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/$.a-function.js', 'npm:core-js@1.2.7/library/modules/$.strict-new.js', 'npm:core-js@1.2.7/library/modules/$.for-of.js', 'npm:core-js@1.2.7/library/modules/$.set-proto.js', 'npm:core-js@1.2.7/library/modules/$.same-value.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.species-constructor.js', 'npm:core-js@1.2.7/library/modules/$.microtask.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js', 'npm:core-js@1.2.7/library/modules/$.redefine-all.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.set-species.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.iter-detect.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
        LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
        global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
        classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
        isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js'),
        anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
        aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js'),
        strictNew = $__require('npm:core-js@1.2.7/library/modules/$.strict-new.js'),
        forOf = $__require('npm:core-js@1.2.7/library/modules/$.for-of.js'),
        setProto = $__require('npm:core-js@1.2.7/library/modules/$.set-proto.js').set,
        same = $__require('npm:core-js@1.2.7/library/modules/$.same-value.js'),
        SPECIES = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('species'),
        speciesConstructor = $__require('npm:core-js@1.2.7/library/modules/$.species-constructor.js'),
        asap = $__require('npm:core-js@1.2.7/library/modules/$.microtask.js'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        empty = function () {},
        Wrapper;
    var testResolve = function (sub) {
      var test = new P(empty),
          promise;
      if (sub) test.constructor = function (exec) {
        exec(empty, empty);
      };
      (promise = P.resolve(test))['catch'](empty);
      return promise === test;
    };
    var USE_NATIVE = function () {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
        if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', { get: function () {
              thenableThenGotten = true;
            } }));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function (a, b) {
      if (LIBRARY && a === P && b === Wrapper) return true;
      return same(a, b);
    };
    var getConstructor = function (C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function (C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function (exec) {
      try {
        exec();
      } catch (e) {
        return { error: e };
      }
    };
    var notify = function (record, isReject) {
      if (record.n) return;
      record.n = true;
      var chain = record.c;
      asap(function () {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok) record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject) setTimeout(function () {
          var promise = record.p,
              handler,
              console;
          if (isUnhandled(promise)) {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({
                promise: promise,
                reason: value
              });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          }
          record.a = undefined;
        }, 1);
      });
    };
    var isUnhandled = function (promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h) return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }
      return true;
    };
    var $reject = function (value) {
      var record = this;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function (value) {
      var record = this,
          then;
      if (record.d) return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function () {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('npm:core-js@1.2.7/library/modules/$.redefine-all.js')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a) record.a.push(reaction);
          if (record.s) notify(record, false);
          return promise;
        },
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
    $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js')(P, PROMISE);
    $__require('npm:core-js@1.2.7/library/modules/$.set-species.js')(PROMISE);
    Wrapper = $__require('npm:core-js@1.2.7/library/modules/$.core.js')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, { reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      } });
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, { resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this)) return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      } });
    $export($export.S + $export.F * !(USE_NATIVE && $__require('npm:core-js@1.2.7/library/modules/$.iter-detect.js')(function (iter) {
      P.all(iter)['catch'](function () {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function () {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining) $.each.call(values, function (promise, index) {
            var alreadyCalled = false;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              results[index] = value;
              --remaining || resolve(results);
            }, reject);
          });else resolve(results);
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.core.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/promise.js', ['npm:core-js@1.2.7/library/modules/es6.object.to-string.js', 'npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/web.dom.iterable.js', 'npm:core-js@1.2.7/library/modules/es6.promise.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.object.to-string.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  $__require('npm:core-js@1.2.7/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.promise.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').Promise;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/promise.js", ["npm:core-js@1.2.7/library/fn/promise.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/promise.js"), __esModule: true };
});
System.register("js/navigator.js", ["npm:babel-runtime@5.8.38/core-js/promise.js"], function (_export) {
    var _Promise, getPosition;

    return {
        setters: [function (_npmBabelRuntime5838CoreJsPromiseJs) {
            _Promise = _npmBabelRuntime5838CoreJsPromiseJs["default"];
        }],
        execute: function () {
            "use strict";

            getPosition = function getPosition(options) {
                return new _Promise(function (resolve, reject) {
                    navigator.geolocation.getCurrentPosition(resolve, reject, options);
                });
            };

            _export("default", getPosition());
        }
    };
});
System.register("js/conditionCodes.js", [], function (_export) {
    "use strict";

    var conditionCodes;
    return {
        setters: [],
        execute: function () {
            conditionCodes = {
                200: "thunderstorm with light rain",
                201: "thunderstorm with rain",
                202: "thunderstorm with heavy rain",
                210: "light thunderstorm",
                211: "thunderstorm",
                212: "heavy thunderstorm",
                221: "ragged thunderstorm",
                230: "thunderstorm with light drizzle",
                231: "thunderstorm with drizzle",
                232: "thunderstorm with heavy drizzle",
                300: "light intensity drizzle",
                301: "drizzle",
                302: "heavy intensity drizzle",
                310: "light intensity drizzle rain",
                311: "drizzle rain",
                312: "heavy intensity drizzle rain",
                313: "shower rain and drizzle",
                314: "heavy shower rain and drizzle",
                321: "shower drizzle",
                500: "light rain",
                501: "moderate rain",
                502: "heavy intensity rain ",
                503: "very heavy rain",
                504: "extreme rain",
                511: "freezing rain",
                520: "light intensity shower rain ",
                521: "shower rain",
                522: "heavy intensity shower rain",
                531: "ragged shower rain",
                600: "light snow",
                601: "snow",
                602: "heavy snow",
                611: "sleet",
                612: "shower sleet",
                615: "light rain and snow",
                616: "rain and snow",
                620: "light shower snow",
                621: "shower snow",
                622: "heavy shower snow",
                701: "mist",
                711: "smoke",
                721: "haze",
                731: "sand",
                741: "fog",
                751: "sand",
                761: "dust",
                762: "volcanic ash",
                771: "squalls",
                781: "tornado",
                800: "clear sky",
                801: "few clouds ",
                802: "scattered clouds ",
                803: "broken clouds ",
                804: "overcast clouds ",
                900: "tornado",
                901: "tropical storm",
                902: "hurricane",
                903: "cold",
                904: "hot",
                905: "windy",
                906: "hail",
                951: "calm",
                952: "light breeze",
                953: "gentle breeze",
                954: "moderate breeze",
                955: "fresh breeze",
                956: "strong breeze",
                957: "high wind",
                958: "gale",
                959: "severe gale",
                960: "storm",
                961: "violent storm",
                962: "hurricane"
            };

            _export("default", conditionCodes);
        }
    };
});
System.register('js/weatherApi.js', ['npm:babel-runtime@5.8.38/core-js/promise.js', 'js/navigator.js', 'js/conditionCodes.js'], function (_export) {
    var _Promise, getPosition, conditionCodes, getWeather, buildWeather;

    return {
        setters: [function (_npmBabelRuntime5838CoreJsPromiseJs) {
            _Promise = _npmBabelRuntime5838CoreJsPromiseJs['default'];
        }, function (_jsNavigatorJs) {
            getPosition = _jsNavigatorJs['default'];
        }, function (_jsConditionCodesJs) {
            conditionCodes = _jsConditionCodesJs['default'];
        }],
        execute: function () {
            'use strict';

            getWeather = function getWeather(url) {
                return new _Promise(function (resolve, reject) {
                    $.getJSON(url).done(function (json) {
                        resolve(json);
                    });
                });
            };

            buildWeather = function buildWeather(json) {
                var weather = {
                    code: '',
                    tempratureMin: "",
                    tempratureMax: "",
                    avrTemp: "",
                    clouds: "",
                    cloudsPersent: "",
                    wind: "",
                    humidity: "",
                    city: "",
                    icon: "",
                    time: "",
                    rain: "",
                    snow: "",
                    description: ""
                };
                weather.city = json.city.name;
                weather.tempratureMax = json.list[1].main.temp_max - 273.15;
                weather.tempratureMin = json.list[1].main.temp_min - 273.15;
                weather.avrTemp = Math.round((weather.tempratureMax + weather.tempratureMin) / 2);
                weather.humidity = json.list[1].main.humidity;
                weather.clouds = json.list[1].weather[0].description;
                weather.time = json.list[1].dt_txt;
                weather.cloudsPersent = json.list[1].clouds.all;
                weather.wind = Math.round(json.list[1].wind.speed * 3.6);
                weather.icon = json.list[1].weather[0].icon;
                weather.rain = json.list[0].rain;
                weather.snow = json.list[0].snow;
                weather.code = json.cod;
                weather.description = conditionCodes[json.cod];
                return weather;
            };

            _export('default', getPosition.then(function (position) {
                var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + "f937eb1f1cdd5f16dccbc0fe7e956e0f";
                return weatherUrl;
            }).then(function (weatherUrl) {
                var json = getWeather(weatherUrl);
                console.log(json);
                return json;
            }).then(function (json) {
                var weather = buildWeather(json);
                return weather;
            }));
        }
    };
});
System.register("js/clothesChooser.js", ["js/weatherApi.js"], function (_export) {
    "use strict";

    var getPosition, chooseClothes, look;
    return {
        setters: [function (_jsWeatherApiJs) {
            getPosition = _jsWeatherApiJs["default"];
        }],
        execute: function () {
            chooseClothes = function chooseClothes(weather) {
                var temp = weather.avrTemp;
                var wind = weather.wind;
                var clouds = weather.cloudsPersent;
                var skyStatus = weather.clouds;

                var outfit = {
                    hat: "none",
                    underwear: "none",
                    shirt: 'none',
                    sweater: 'none',
                    coat: 'none',
                    extraCoat: 'none',
                    legs: 'none',
                    leggins: 'none',
                    foot: 'none'
                };

                if (temp >= 20) {
                    outfit.hat = 'cap';
                    outfit.underwear = 't-shirt';
                    outfit.shirt = 'none';
                    outfit.sweater = 'none';
                    outfit.coat = 'none';
                    outfit.leggins = 'none';
                    outfit.foot = 'sneakers';
                    outfit.legs = 'shorts';
                } else if (19 > temp && temp >= 15) {
                    console.log('sdfafaf');
                    outfit.hat = 'none';
                    outfit.underwear = 't-shirt';
                    outfit.shirt = 'none';
                    outfit.sweater = 'none';
                    outfit.coat = 'none';
                    outfit.leggins = 'none';
                    outfit.foot = 'sneakers';
                    outfit.legs = 'shorts';
                } else if (14 >= temp && temp >= 10) {
                    outfit.hat = 'none';
                    outfit.underwear = 't-shirt';
                    outfit.shirt = 'flannelShirt';
                    outfit.sweater = 'none';
                    outfit.coat = 'none';
                    outfit.leggins = 'none';
                    outfit.foot = 'sneakers';
                    outfit.legs = 'jeans';
                    if (wind > 20 || clouds > 60 || skyStatus != 'clear sky') {
                        outfit.coat = 'lightParka';
                    }
                } else if (9 >= temp && temp >= 5) {
                    outfit.hat = 'cap';
                    outfit.underwear = 't-shirt';
                    outfit.shirt = 'flannelShirt';
                    outfit.sweater = 'none';
                    outfit.coat = 'lightParka';
                    outfit.leggins = 'none';
                    outfit.foot = 'sneakers';
                    outfit.legs = 'jeans';
                } else if (-2 < temp && temp <= 0) {
                    outfit.hat = 'pidorka';
                    outfit.underwear = 't-shirt';
                    outfit.shirt = 'flannelShirt';
                    outfit.sweater = 'none';
                    outfit.coat = 'warmParka';
                    outfit.leggins = 'none';
                    outfit.foot = 'sneakers';
                    outfit.legs = 'jeans';
                } else if (-5 < temp && temp <= -3) {
                    outfit.hat = 'pidorka';
                    outfit.underwear = 't-shirt';
                    outfit.shirt = 'flannelShirt';
                    outfit.sweater = 'none';
                    outfit.coat = 'warmParka';
                    outfit.leggins = 'none';
                    outfit.foot = 'sorel';
                    outfit.legs = 'jeans';
                } else if (-9 < temp && temp <= -6) {
                    outfit.hat = 'theShapka';
                    outfit.underwear = 'logsleeve';
                    outfit.shirt = 'flannelShirt';
                    outfit.sweater = 'none';
                    outfit.coat = 'warmParka';
                    outfit.leggins = 'thermoleggins';
                    outfit.foot = 'sorel';
                    outfit.legs = 'jeans';
                } else if (temp <= -10) {
                    outfit.hat = 'theShapka';
                    outfit.underwear = 'logsleeve';
                    outfit.shirt = 'flannelShirt';
                    outfit.sweater = 'sweater';
                    outfit.coat = 'warmParka';
                    outfit.leggins = 'thermoleggins';
                    outfit.foot = 'sorel';
                    outfit.legs = 'jeans';
                }
                if (skyStatus.includes('rain')) {
                    outfit.hat = 'cap';
                }
                return outfit;
            };

            look = getPosition.then(function (weather) {
                var look = chooseClothes(weather);
                console.log(look);
                return look;
            });

            _export("default", look);
        }
    };
});
System.register('js/clothesPicChooser.js', ['js/clothesChooser.js'], function (_export) {
    'use strict';

    var look, clothesPics, picsChooser, picLinks;
    return {
        setters: [function (_jsClothesChooserJs) {
            look = _jsClothesChooserJs['default'];
        }],
        execute: function () {
            clothesPics = {
                'cap': 'img/cap.png',
                't-shirt': 'img/tshirt.png',
                'sneakers': 'img/sneakers.png',
                'shorts': 'img/shorts.png',
                'jeans': 'img/jeans.png',
                'flannelShirt': 'img/flanelshirt.png',
                'pidorka': 'img/pidorka.png',
                'lightParka': 'img/lightParka.png',
                'warmParka': 'img/puhovik.png',
                'sorel': 'img/sorel.png',
                'logsleeve': 'img/ls.png',
                'none': 'none.png'
            };

            picsChooser = function picsChooser(outfit) {
                var links = {
                    hat: 'none',
                    underwear: 'none',
                    shirt: 'none',
                    sweater: 'none',
                    coat: 'none',
                    extraCoat: 'none',
                    legs: 'none',
                    leggins: 'none',
                    foot: 'none'
                };
                links.hat = clothesPics[outfit.hat];
                links.underwear = clothesPics[outfit.underwear];
                links.shirt = clothesPics[outfit.shirt];
                links.sweater = clothesPics[outfit.sweater];
                links.coat = clothesPics[outfit.coat];
                links.extraCoat = clothesPics[outfit.extraCoat];
                links.legs = clothesPics[outfit.legs];
                links.leggins = clothesPics[outfit.leggins];
                links.foot = clothesPics[outfit.foot];
                return links;
            };

            picLinks = look.then(function (look) {
                console.log(look);
                return picsChooser(look);
            });

            _export('default', picLinks);
        }
    };
});
System.register('js/engine.js', ['js/weatherApi.js', 'js/displayContent.js', 'js/clothesChooser.js', 'js/clothesPicChooser.js'], function (_export) {
  // getPosition
  //     .then((weather) => {
  //         console.log(weather)
  //     })
  // outfit
  // .then((outfit)=>{
  //     console.log(outfit)

  // })
  // picLinks
  // .then((picLinks)=>{
  //     console.log(picLinks)
  // })

  'use strict';

  var getPosition, html, outfit, picLinks;
  return {
    setters: [function (_jsWeatherApiJs) {
      getPosition = _jsWeatherApiJs['default'];
    }, function (_jsDisplayContentJs) {
      html = _jsDisplayContentJs['default'];
    }, function (_jsClothesChooserJs) {
      outfit = _jsClothesChooserJs['default'];
    }, function (_jsClothesPicChooserJs) {
      picLinks = _jsClothesPicChooserJs['default'];
    }],
    execute: function () {
      _export('default', {});
    }
  };
});
//# sourceMappingURL=build.js.map