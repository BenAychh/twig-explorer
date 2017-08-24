(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  F: require('./src/F'),
  T: require('./src/T'),
  __: require('./src/__'),
  add: require('./src/add'),
  addIndex: require('./src/addIndex'),
  adjust: require('./src/adjust'),
  all: require('./src/all'),
  allPass: require('./src/allPass'),
  always: require('./src/always'),
  and: require('./src/and'),
  any: require('./src/any'),
  anyPass: require('./src/anyPass'),
  ap: require('./src/ap'),
  aperture: require('./src/aperture'),
  append: require('./src/append'),
  apply: require('./src/apply'),
  applySpec: require('./src/applySpec'),
  ascend: require('./src/ascend'),
  assoc: require('./src/assoc'),
  assocPath: require('./src/assocPath'),
  binary: require('./src/binary'),
  bind: require('./src/bind'),
  both: require('./src/both'),
  call: require('./src/call'),
  chain: require('./src/chain'),
  clamp: require('./src/clamp'),
  clone: require('./src/clone'),
  comparator: require('./src/comparator'),
  complement: require('./src/complement'),
  compose: require('./src/compose'),
  composeK: require('./src/composeK'),
  composeP: require('./src/composeP'),
  concat: require('./src/concat'),
  cond: require('./src/cond'),
  construct: require('./src/construct'),
  constructN: require('./src/constructN'),
  contains: require('./src/contains'),
  converge: require('./src/converge'),
  countBy: require('./src/countBy'),
  curry: require('./src/curry'),
  curryN: require('./src/curryN'),
  dec: require('./src/dec'),
  defaultTo: require('./src/defaultTo'),
  descend: require('./src/descend'),
  difference: require('./src/difference'),
  differenceWith: require('./src/differenceWith'),
  dissoc: require('./src/dissoc'),
  dissocPath: require('./src/dissocPath'),
  divide: require('./src/divide'),
  drop: require('./src/drop'),
  dropLast: require('./src/dropLast'),
  dropLastWhile: require('./src/dropLastWhile'),
  dropRepeats: require('./src/dropRepeats'),
  dropRepeatsWith: require('./src/dropRepeatsWith'),
  dropWhile: require('./src/dropWhile'),
  either: require('./src/either'),
  empty: require('./src/empty'),
  endsWith: require('./src/endsWith'),
  eqBy: require('./src/eqBy'),
  eqProps: require('./src/eqProps'),
  equals: require('./src/equals'),
  evolve: require('./src/evolve'),
  filter: require('./src/filter'),
  find: require('./src/find'),
  findIndex: require('./src/findIndex'),
  findLast: require('./src/findLast'),
  findLastIndex: require('./src/findLastIndex'),
  flatten: require('./src/flatten'),
  flip: require('./src/flip'),
  forEach: require('./src/forEach'),
  forEachObjIndexed: require('./src/forEachObjIndexed'),
  fromPairs: require('./src/fromPairs'),
  groupBy: require('./src/groupBy'),
  groupWith: require('./src/groupWith'),
  gt: require('./src/gt'),
  gte: require('./src/gte'),
  has: require('./src/has'),
  hasIn: require('./src/hasIn'),
  head: require('./src/head'),
  identical: require('./src/identical'),
  identity: require('./src/identity'),
  ifElse: require('./src/ifElse'),
  inc: require('./src/inc'),
  indexBy: require('./src/indexBy'),
  indexOf: require('./src/indexOf'),
  init: require('./src/init'),
  innerJoin: require('./src/innerJoin'),
  insert: require('./src/insert'),
  insertAll: require('./src/insertAll'),
  intersection: require('./src/intersection'),
  intersectionWith: require('./src/intersectionWith'),
  intersperse: require('./src/intersperse'),
  into: require('./src/into'),
  invert: require('./src/invert'),
  invertObj: require('./src/invertObj'),
  invoker: require('./src/invoker'),
  is: require('./src/is'),
  isEmpty: require('./src/isEmpty'),
  isNil: require('./src/isNil'),
  join: require('./src/join'),
  juxt: require('./src/juxt'),
  keys: require('./src/keys'),
  keysIn: require('./src/keysIn'),
  last: require('./src/last'),
  lastIndexOf: require('./src/lastIndexOf'),
  length: require('./src/length'),
  lens: require('./src/lens'),
  lensIndex: require('./src/lensIndex'),
  lensPath: require('./src/lensPath'),
  lensProp: require('./src/lensProp'),
  lift: require('./src/lift'),
  liftN: require('./src/liftN'),
  lt: require('./src/lt'),
  lte: require('./src/lte'),
  map: require('./src/map'),
  mapAccum: require('./src/mapAccum'),
  mapAccumRight: require('./src/mapAccumRight'),
  mapObjIndexed: require('./src/mapObjIndexed'),
  match: require('./src/match'),
  mathMod: require('./src/mathMod'),
  max: require('./src/max'),
  maxBy: require('./src/maxBy'),
  mean: require('./src/mean'),
  median: require('./src/median'),
  memoize: require('./src/memoize'),
  memoizeWith: require('./src/memoizeWith'),
  merge: require('./src/merge'),
  mergeAll: require('./src/mergeAll'),
  mergeDeepLeft: require('./src/mergeDeepLeft'),
  mergeDeepRight: require('./src/mergeDeepRight'),
  mergeDeepWith: require('./src/mergeDeepWith'),
  mergeDeepWithKey: require('./src/mergeDeepWithKey'),
  mergeWith: require('./src/mergeWith'),
  mergeWithKey: require('./src/mergeWithKey'),
  min: require('./src/min'),
  minBy: require('./src/minBy'),
  modulo: require('./src/modulo'),
  multiply: require('./src/multiply'),
  nAry: require('./src/nAry'),
  negate: require('./src/negate'),
  none: require('./src/none'),
  not: require('./src/not'),
  nth: require('./src/nth'),
  nthArg: require('./src/nthArg'),
  o: require('./src/o'),
  objOf: require('./src/objOf'),
  of: require('./src/of'),
  omit: require('./src/omit'),
  once: require('./src/once'),
  or: require('./src/or'),
  over: require('./src/over'),
  pair: require('./src/pair'),
  partial: require('./src/partial'),
  partialRight: require('./src/partialRight'),
  partition: require('./src/partition'),
  path: require('./src/path'),
  pathEq: require('./src/pathEq'),
  pathOr: require('./src/pathOr'),
  pathSatisfies: require('./src/pathSatisfies'),
  pick: require('./src/pick'),
  pickAll: require('./src/pickAll'),
  pickBy: require('./src/pickBy'),
  pipe: require('./src/pipe'),
  pipeK: require('./src/pipeK'),
  pipeP: require('./src/pipeP'),
  pluck: require('./src/pluck'),
  prepend: require('./src/prepend'),
  product: require('./src/product'),
  project: require('./src/project'),
  prop: require('./src/prop'),
  propEq: require('./src/propEq'),
  propIs: require('./src/propIs'),
  propOr: require('./src/propOr'),
  propSatisfies: require('./src/propSatisfies'),
  props: require('./src/props'),
  range: require('./src/range'),
  reduce: require('./src/reduce'),
  reduceBy: require('./src/reduceBy'),
  reduceRight: require('./src/reduceRight'),
  reduceWhile: require('./src/reduceWhile'),
  reduced: require('./src/reduced'),
  reject: require('./src/reject'),
  remove: require('./src/remove'),
  repeat: require('./src/repeat'),
  replace: require('./src/replace'),
  reverse: require('./src/reverse'),
  scan: require('./src/scan'),
  sequence: require('./src/sequence'),
  set: require('./src/set'),
  slice: require('./src/slice'),
  sort: require('./src/sort'),
  sortBy: require('./src/sortBy'),
  sortWith: require('./src/sortWith'),
  split: require('./src/split'),
  splitAt: require('./src/splitAt'),
  splitEvery: require('./src/splitEvery'),
  splitWhen: require('./src/splitWhen'),
  startsWith: require('./src/startsWith'),
  subtract: require('./src/subtract'),
  sum: require('./src/sum'),
  symmetricDifference: require('./src/symmetricDifference'),
  symmetricDifferenceWith: require('./src/symmetricDifferenceWith'),
  tail: require('./src/tail'),
  take: require('./src/take'),
  takeLast: require('./src/takeLast'),
  takeLastWhile: require('./src/takeLastWhile'),
  takeWhile: require('./src/takeWhile'),
  tap: require('./src/tap'),
  test: require('./src/test'),
  times: require('./src/times'),
  toLower: require('./src/toLower'),
  toPairs: require('./src/toPairs'),
  toPairsIn: require('./src/toPairsIn'),
  toString: require('./src/toString'),
  toUpper: require('./src/toUpper'),
  transduce: require('./src/transduce'),
  transpose: require('./src/transpose'),
  traverse: require('./src/traverse'),
  trim: require('./src/trim'),
  tryCatch: require('./src/tryCatch'),
  type: require('./src/type'),
  unapply: require('./src/unapply'),
  unary: require('./src/unary'),
  uncurryN: require('./src/uncurryN'),
  unfold: require('./src/unfold'),
  union: require('./src/union'),
  unionWith: require('./src/unionWith'),
  uniq: require('./src/uniq'),
  uniqBy: require('./src/uniqBy'),
  uniqWith: require('./src/uniqWith'),
  unless: require('./src/unless'),
  unnest: require('./src/unnest'),
  until: require('./src/until'),
  update: require('./src/update'),
  useWith: require('./src/useWith'),
  values: require('./src/values'),
  valuesIn: require('./src/valuesIn'),
  view: require('./src/view'),
  when: require('./src/when'),
  where: require('./src/where'),
  whereEq: require('./src/whereEq'),
  without: require('./src/without'),
  xprod: require('./src/xprod'),
  zip: require('./src/zip'),
  zipObj: require('./src/zipObj'),
  zipWith: require('./src/zipWith')
};

},{"./src/F":2,"./src/T":3,"./src/__":4,"./src/add":5,"./src/addIndex":6,"./src/adjust":7,"./src/all":8,"./src/allPass":9,"./src/always":10,"./src/and":11,"./src/any":12,"./src/anyPass":13,"./src/ap":14,"./src/aperture":15,"./src/append":16,"./src/apply":17,"./src/applySpec":18,"./src/ascend":19,"./src/assoc":20,"./src/assocPath":21,"./src/binary":22,"./src/bind":23,"./src/both":24,"./src/call":25,"./src/chain":26,"./src/clamp":27,"./src/clone":28,"./src/comparator":29,"./src/complement":30,"./src/compose":31,"./src/composeK":32,"./src/composeP":33,"./src/concat":34,"./src/cond":35,"./src/construct":36,"./src/constructN":37,"./src/contains":38,"./src/converge":39,"./src/countBy":40,"./src/curry":41,"./src/curryN":42,"./src/dec":43,"./src/defaultTo":44,"./src/descend":45,"./src/difference":46,"./src/differenceWith":47,"./src/dissoc":48,"./src/dissocPath":49,"./src/divide":50,"./src/drop":51,"./src/dropLast":52,"./src/dropLastWhile":53,"./src/dropRepeats":54,"./src/dropRepeatsWith":55,"./src/dropWhile":56,"./src/either":57,"./src/empty":58,"./src/endsWith":59,"./src/eqBy":60,"./src/eqProps":61,"./src/equals":62,"./src/evolve":63,"./src/filter":64,"./src/find":65,"./src/findIndex":66,"./src/findLast":67,"./src/findLastIndex":68,"./src/flatten":69,"./src/flip":70,"./src/forEach":71,"./src/forEachObjIndexed":72,"./src/fromPairs":73,"./src/groupBy":74,"./src/groupWith":75,"./src/gt":76,"./src/gte":77,"./src/has":78,"./src/hasIn":79,"./src/head":80,"./src/identical":81,"./src/identity":82,"./src/ifElse":83,"./src/inc":84,"./src/indexBy":85,"./src/indexOf":86,"./src/init":87,"./src/innerJoin":88,"./src/insert":89,"./src/insertAll":90,"./src/intersection":162,"./src/intersectionWith":163,"./src/intersperse":164,"./src/into":165,"./src/invert":166,"./src/invertObj":167,"./src/invoker":168,"./src/is":169,"./src/isEmpty":170,"./src/isNil":171,"./src/join":172,"./src/juxt":173,"./src/keys":174,"./src/keysIn":175,"./src/last":176,"./src/lastIndexOf":177,"./src/length":178,"./src/lens":179,"./src/lensIndex":180,"./src/lensPath":181,"./src/lensProp":182,"./src/lift":183,"./src/liftN":184,"./src/lt":185,"./src/lte":186,"./src/map":187,"./src/mapAccum":188,"./src/mapAccumRight":189,"./src/mapObjIndexed":190,"./src/match":191,"./src/mathMod":192,"./src/max":193,"./src/maxBy":194,"./src/mean":195,"./src/median":196,"./src/memoize":197,"./src/memoizeWith":198,"./src/merge":199,"./src/mergeAll":200,"./src/mergeDeepLeft":201,"./src/mergeDeepRight":202,"./src/mergeDeepWith":203,"./src/mergeDeepWithKey":204,"./src/mergeWith":205,"./src/mergeWithKey":206,"./src/min":207,"./src/minBy":208,"./src/modulo":209,"./src/multiply":210,"./src/nAry":211,"./src/negate":212,"./src/none":213,"./src/not":214,"./src/nth":215,"./src/nthArg":216,"./src/o":217,"./src/objOf":218,"./src/of":219,"./src/omit":220,"./src/once":221,"./src/or":222,"./src/over":223,"./src/pair":224,"./src/partial":225,"./src/partialRight":226,"./src/partition":227,"./src/path":228,"./src/pathEq":229,"./src/pathOr":230,"./src/pathSatisfies":231,"./src/pick":232,"./src/pickAll":233,"./src/pickBy":234,"./src/pipe":235,"./src/pipeK":236,"./src/pipeP":237,"./src/pluck":238,"./src/prepend":239,"./src/product":240,"./src/project":241,"./src/prop":242,"./src/propEq":243,"./src/propIs":244,"./src/propOr":245,"./src/propSatisfies":246,"./src/props":247,"./src/range":248,"./src/reduce":249,"./src/reduceBy":250,"./src/reduceRight":251,"./src/reduceWhile":252,"./src/reduced":253,"./src/reject":254,"./src/remove":255,"./src/repeat":256,"./src/replace":257,"./src/reverse":258,"./src/scan":259,"./src/sequence":260,"./src/set":261,"./src/slice":262,"./src/sort":263,"./src/sortBy":264,"./src/sortWith":265,"./src/split":266,"./src/splitAt":267,"./src/splitEvery":268,"./src/splitWhen":269,"./src/startsWith":270,"./src/subtract":271,"./src/sum":272,"./src/symmetricDifference":273,"./src/symmetricDifferenceWith":274,"./src/tail":275,"./src/take":276,"./src/takeLast":277,"./src/takeLastWhile":278,"./src/takeWhile":279,"./src/tap":280,"./src/test":281,"./src/times":282,"./src/toLower":283,"./src/toPairs":284,"./src/toPairsIn":285,"./src/toString":286,"./src/toUpper":287,"./src/transduce":288,"./src/transpose":289,"./src/traverse":290,"./src/trim":291,"./src/tryCatch":292,"./src/type":293,"./src/unapply":294,"./src/unary":295,"./src/uncurryN":296,"./src/unfold":297,"./src/union":298,"./src/unionWith":299,"./src/uniq":300,"./src/uniqBy":301,"./src/uniqWith":302,"./src/unless":303,"./src/unnest":304,"./src/until":305,"./src/update":306,"./src/useWith":307,"./src/values":308,"./src/valuesIn":309,"./src/view":310,"./src/when":311,"./src/where":312,"./src/whereEq":313,"./src/without":314,"./src/xprod":315,"./src/zip":316,"./src/zipObj":317,"./src/zipWith":318}],2:[function(require,module,exports){
var always = require('./always');


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
module.exports = always(false);

},{"./always":10}],3:[function(require,module,exports){
var always = require('./always');


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
module.exports = always(true);

},{"./always":10}],4:[function(require,module,exports){
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {'@@functional/placeholder': true};

},{}],5:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
module.exports = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});

},{"./internal/_curry2":105}],6:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});

},{"./curryN":42,"./internal/_concat":100,"./internal/_curry1":104}],7:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry3 = require('./internal/_curry3');


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
module.exports = _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});

},{"./internal/_concat":100,"./internal/_curry3":106}],8:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xall = require('./internal/_xall');


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xall":142}],9:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
module.exports = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});

},{"./curryN":42,"./internal/_curry1":104,"./max":193,"./pluck":238,"./reduce":249}],10:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});

},{"./internal/_curry1":104}],11:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
module.exports = _curry2(function and(a, b) {
  return a && b;
});

},{"./internal/_curry2":105}],12:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xany = require('./internal/_xany');


/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xany":143}],13:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
module.exports = _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});

},{"./curryN":42,"./internal/_curry1":104,"./max":193,"./pluck":238,"./reduce":249}],14:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var map = require('./map');


/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
module.exports = _curry2(function ap(applyF, applyX) {
  return (
    typeof applyX['fantasy-land/ap'] === 'function' ?
      applyX['fantasy-land/ap'](applyF) :
    typeof applyF.ap === 'function' ?
      applyF.ap(applyX) :
    typeof applyF === 'function' ?
      function(x) { return applyF(x)(applyX(x)); } :
    // else
      _reduce(function(acc, f) { return _concat(acc, map(f, applyX)); }, [], applyF)
  );
});

},{"./internal/_concat":100,"./internal/_curry2":105,"./internal/_reduce":137,"./map":187}],15:[function(require,module,exports){
var _aperture = require('./internal/_aperture');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xaperture = require('./internal/_xaperture');


/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));

},{"./internal/_aperture":92,"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xaperture":144}],16:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});

},{"./internal/_concat":100,"./internal/_curry2":105}],17:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
module.exports = _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});

},{"./internal/_curry2":105}],18:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var apply = require('./apply');
var curryN = require('./curryN');
var map = require('./map');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');
var values = require('./values');


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v); },
             spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))),
                function() {
                  var args = arguments;
                  return map(function(f) { return apply(f, args); }, spec);
                });
});

},{"./apply":17,"./curryN":42,"./internal/_curry1":104,"./map":187,"./max":193,"./pluck":238,"./reduce":249,"./values":308}],19:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});

},{"./internal/_curry3":106}],20:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});

},{"./internal/_curry3":106}],21:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _has = require('./internal/_has');
var _isArray = require('./internal/_isArray');
var _isInteger = require('./internal/_isInteger');
var assoc = require('./assoc');
var isNil = require('./isNil');


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
module.exports = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});

},{"./assoc":20,"./internal/_curry3":106,"./internal/_has":116,"./internal/_isArray":120,"./internal/_isInteger":123,"./isNil":171}],22:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var nAry = require('./nAry');


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
module.exports = _curry1(function binary(fn) {
  return nAry(2, fn);
});

},{"./internal/_curry1":104,"./nAry":211}],23:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry2 = require('./internal/_curry2');


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});

},{"./internal/_arity":93,"./internal/_curry2":105}],24:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var and = require('./and');
var lift = require('./lift');


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});

},{"./and":11,"./internal/_curry2":105,"./internal/_isFunction":122,"./lift":183}],25:[function(require,module,exports){
var curry = require('./curry');


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});

},{"./curry":41}],26:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _makeFlat = require('./internal/_makeFlat');
var _xchain = require('./internal/_xchain');
var map = require('./map');


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
module.exports = _curry2(_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_makeFlat":130,"./internal/_xchain":145,"./map":187}],27:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
module.exports = _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min :
         value > max ? max :
         value;
});

},{"./internal/_curry3":106}],28:[function(require,module,exports){
var _clone = require('./internal/_clone');
var _curry1 = require('./internal/_curry1');


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});

},{"./internal/_clone":97,"./internal/_curry1":104}],29:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = _curry1(function comparator(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});

},{"./internal/_curry1":104}],30:[function(require,module,exports){
var lift = require('./lift');
var not = require('./not');


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
module.exports = lift(not);

},{"./lift":183,"./not":214}],31:[function(require,module,exports){
var pipe = require('./pipe');
var reverse = require('./reverse');


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};

},{"./pipe":235,"./reverse":258}],32:[function(require,module,exports){
var chain = require('./chain');
var compose = require('./compose');
var map = require('./map');


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
module.exports = function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, map(chain, init)), last);
};

},{"./chain":26,"./compose":31,"./map":187}],33:[function(require,module,exports){
var pipeP = require('./pipeP');
var reverse = require('./reverse');


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
module.exports = function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return pipeP.apply(this, reverse(arguments));
};

},{"./pipeP":237,"./reverse":258}],34:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isArray = require('./internal/_isArray');
var _isFunction = require('./internal/_isFunction');
var _isString = require('./internal/_isString');
var toString = require('./toString');


/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
module.exports = _curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});

},{"./internal/_curry2":105,"./internal/_isArray":120,"./internal/_isFunction":122,"./internal/_isString":128,"./toString":286}],35:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');
var map = require('./map');
var max = require('./max');
var reduce = require('./reduce');


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
module.exports = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});

},{"./internal/_arity":93,"./internal/_curry1":104,"./map":187,"./max":193,"./reduce":249}],36:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var constructN = require('./constructN');


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
module.exports = _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});

},{"./constructN":37,"./internal/_curry1":104}],37:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var curry = require('./curry');
var nAry = require('./nAry');


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
module.exports = _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function() { return new Fn(); };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case  1: return new Fn($0);
      case  2: return new Fn($0, $1);
      case  3: return new Fn($0, $1, $2);
      case  4: return new Fn($0, $1, $2, $3);
      case  5: return new Fn($0, $1, $2, $3, $4);
      case  6: return new Fn($0, $1, $2, $3, $4, $5);
      case  7: return new Fn($0, $1, $2, $3, $4, $5, $6);
      case  8: return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case  9: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});

},{"./curry":41,"./internal/_curry2":105,"./nAry":211}],38:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);

},{"./internal/_contains":101,"./internal/_curry2":105}],39:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _map = require('./internal/_map');
var curryN = require('./curryN');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
module.exports = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});

},{"./curryN":42,"./internal/_curry2":105,"./internal/_map":131,"./max":193,"./pluck":238,"./reduce":249}],40:[function(require,module,exports){
var reduceBy = require('./reduceBy');


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
module.exports = reduceBy(function(acc, elem) { return acc + 1; }, 0);

},{"./reduceBy":250}],41:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

},{"./curryN":42,"./internal/_curry1":104}],42:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');
var _curry2 = require('./internal/_curry2');
var _curryN = require('./internal/_curryN');


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

},{"./internal/_arity":93,"./internal/_curry1":104,"./internal/_curry2":105,"./internal/_curryN":107}],43:[function(require,module,exports){
var add = require('./add');


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);

},{"./add":5}],44:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

},{"./internal/_curry2":105}],45:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});

},{"./internal/_curry3":106}],46:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
module.exports = _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});

},{"./internal/_contains":101,"./internal/_curry2":105}],47:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
module.exports = _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) &&
        !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});

},{"./internal/_containsWith":102,"./internal/_curry3":106}],48:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});

},{"./internal/_curry2":105}],49:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isInteger = require('./internal/_isInteger');
var assoc = require('./assoc');
var dissoc = require('./dissoc');
var remove = require('./remove');
var update = require('./update');


/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
module.exports = _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path[0]) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (_isInteger(path[0])) {
        return update(head, dissocPath(tail, obj[head]), obj);
      } else {
        return assoc(head, dissocPath(tail, obj[head]), obj);
      }
  }
});

},{"./assoc":20,"./dissoc":48,"./internal/_curry2":105,"./internal/_isInteger":123,"./remove":255,"./update":306}],50:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
module.exports = _curry2(function divide(a, b) { return a / b; });

},{"./internal/_curry2":105}],51:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xdrop = require('./internal/_xdrop');
var slice = require('./slice');


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xdrop":146,"./slice":262}],52:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _dropLast = require('./internal/_dropLast');
var _xdropLast = require('./internal/_xdropLast');


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_dropLast":109,"./internal/_xdropLast":147}],53:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _dropLastWhile = require('./internal/_dropLastWhile');
var _xdropLastWhile = require('./internal/_xdropLastWhile');


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_dropLastWhile":110,"./internal/_xdropLastWhile":148}],54:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _dispatchable = require('./internal/_dispatchable');
var _xdropRepeatsWith = require('./internal/_xdropRepeatsWith');
var dropRepeatsWith = require('./dropRepeatsWith');
var equals = require('./equals');


/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

},{"./dropRepeatsWith":55,"./equals":62,"./internal/_curry1":104,"./internal/_dispatchable":108,"./internal/_xdropRepeatsWith":149}],55:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xdropRepeatsWith = require('./internal/_xdropRepeatsWith');
var last = require('./last');


/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));


},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xdropRepeatsWith":149,"./last":176}],56:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xdropWhile = require('./internal/_xdropWhile');


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && pred(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, idx);
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xdropWhile":150}],57:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var lift = require('./lift');
var or = require('./or');


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
module.exports = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});

},{"./internal/_curry2":105,"./internal/_isFunction":122,"./lift":183,"./or":222}],58:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isArguments = require('./internal/_isArguments');
var _isArray = require('./internal/_isArray');
var _isObject = require('./internal/_isObject');
var _isString = require('./internal/_isString');


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x['fantasy-land/empty'] === 'function') ?
      x['fantasy-land/empty']() :
    (x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function') ?
      x.constructor['fantasy-land/empty']() :
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});

},{"./internal/_curry1":104,"./internal/_isArguments":119,"./internal/_isArray":120,"./internal/_isObject":125,"./internal/_isString":128}],59:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var equals = require('./equals');
var takeLast = require('./takeLast');

/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});

},{"./equals":62,"./internal/_curry2":105,"./takeLast":277}],60:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});

},{"./equals":62,"./internal/_curry3":106}],61:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
module.exports = _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});

},{"./equals":62,"./internal/_curry3":106}],62:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _equals = require('./internal/_equals');


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

},{"./internal/_curry2":105,"./internal/_equals":111}],63:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
module.exports = _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'                 ? transformation(object[key])
                : transformation && type === 'object' ? evolve(transformation, object[key])
                                                      : object[key];
  }
  return result;
});

},{"./internal/_curry2":105}],64:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _filter = require('./internal/_filter');
var _isObject = require('./internal/_isObject');
var _reduce = require('./internal/_reduce');
var _xfilter = require('./internal/_xfilter');
var keys = require('./keys');


/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_filter":112,"./internal/_isObject":125,"./internal/_reduce":137,"./internal/_xfilter":152,"./keys":174}],65:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfind = require('./internal/_xfind');


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xfind":153}],66:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfindIndex = require('./internal/_xfindIndex');


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xfindIndex":154}],67:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfindLast = require('./internal/_xfindLast');


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xfindLast":155}],68:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfindLastIndex = require('./internal/_xfindLastIndex');


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xfindLastIndex":156}],69:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _makeFlat = require('./internal/_makeFlat');


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
module.exports = _curry1(_makeFlat(true));

},{"./internal/_curry1":104,"./internal/_makeFlat":130}],70:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curry = require('./curry');


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

},{"./curry":41,"./internal/_curry1":104}],71:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));

},{"./internal/_checkForMethod":96,"./internal/_curry2":105}],72:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var keys = require('./keys');


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
module.exports = _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});

},{"./internal/_curry2":105,"./keys":174}],73:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});

},{"./internal/_curry1":104}],74:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');
var reduceBy = require('./reduceBy');

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));

},{"./internal/_checkForMethod":96,"./internal/_curry2":105,"./reduceBy":250}],75:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
module.exports = _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});

},{"./internal/_curry2":105}],76:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
module.exports = _curry2(function gt(a, b) { return a > b; });

},{"./internal/_curry2":105}],77:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
module.exports = _curry2(function gte(a, b) { return a >= b; });

},{"./internal/_curry2":105}],78:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _has = require('./internal/_has');


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
module.exports = _curry2(_has);

},{"./internal/_curry2":105,"./internal/_has":116}],79:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
module.exports = _curry2(function hasIn(prop, obj) {
  return prop in obj;
});

},{"./internal/_curry2":105}],80:[function(require,module,exports){
var nth = require('./nth');


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
module.exports = nth(0);

},{"./nth":215}],81:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});

},{"./internal/_curry2":105}],82:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _identity = require('./internal/_identity');


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);

},{"./internal/_curry1":104,"./internal/_identity":117}],83:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var curryN = require('./curryN');


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
    function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    }
  );
});

},{"./curryN":42,"./internal/_curry3":106}],84:[function(require,module,exports){
var add = require('./add');


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
module.exports = add(1);

},{"./add":5}],85:[function(require,module,exports){
var reduceBy = require('./reduceBy');


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);

},{"./reduceBy":250}],86:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _indexOf = require('./internal/_indexOf');
var _isArray = require('./internal/_isArray');


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});

},{"./internal/_curry2":105,"./internal/_indexOf":118,"./internal/_isArray":120}],87:[function(require,module,exports){
var slice = require('./slice');


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
module.exports = slice(0, -1);

},{"./slice":262}],88:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');
var _filter = require('./internal/_filter');


/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig (a -> b -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function innerJoin(pred, xs, ys) {
  return _filter(function(x) { return _containsWith(pred, x, ys); }, xs);
});

},{"./internal/_containsWith":102,"./internal/_curry3":106,"./internal/_filter":112}],89:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
module.exports = _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});

},{"./internal/_curry3":106}],90:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
module.exports = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx),
                   elts,
                   Array.prototype.slice.call(list, idx));
});

},{"./internal/_curry3":106}],91:[function(require,module,exports){
var _contains = require('./_contains');


// A simple Set type that honours R.equals semantics
module.exports = (function() {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_contains(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  return _Set;
}());

},{"./_contains":101}],92:[function(require,module,exports){
module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};

},{}],93:[function(require,module,exports){
module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

},{}],94:[function(require,module,exports){
module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};

},{}],95:[function(require,module,exports){
var _objectAssign = require('./_objectAssign');

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;

},{"./_objectAssign":132}],96:[function(require,module,exports){
var _isArray = require('./_isArray');


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};

},{"./_isArray":120}],97:[function(require,module,exports){
var _cloneRegExp = require('./_cloneRegExp');
var type = require('../type');


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
module.exports = function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':  return copy({});
    case 'Array':   return copy([]);
    case 'Date':    return new Date(value.valueOf());
    case 'RegExp':  return _cloneRegExp(value);
    default:        return value;
  }
};

},{"../type":293,"./_cloneRegExp":98}],98:[function(require,module,exports){
module.exports = function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                    (pattern.ignoreCase ? 'i' : '') +
                                    (pattern.multiline  ? 'm' : '') +
                                    (pattern.sticky     ? 'y' : '') +
                                    (pattern.unicode    ? 'u' : ''));
};

},{}],99:[function(require,module,exports){
module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};

},{}],100:[function(require,module,exports){
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};

},{}],101:[function(require,module,exports){
var _indexOf = require('./_indexOf');


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};

},{"./_indexOf":118}],102:[function(require,module,exports){
module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};

},{}],103:[function(require,module,exports){
var _arity = require('./_arity');
var _curry2 = require('./_curry2');


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};

},{"./_arity":93,"./_curry2":105}],104:[function(require,module,exports){
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};

},{"./_isPlaceholder":126}],105:[function(require,module,exports){
var _curry1 = require('./_curry1');
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};

},{"./_curry1":104,"./_isPlaceholder":126}],106:[function(require,module,exports){
var _curry1 = require('./_curry1');
var _curry2 = require('./_curry2');
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};

},{"./_curry1":104,"./_curry2":105,"./_isPlaceholder":126}],107:[function(require,module,exports){
var _arity = require('./_arity');
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};

},{"./_arity":93,"./_isPlaceholder":126}],108:[function(require,module,exports){
var _isArray = require('./_isArray');
var _isTransformer = require('./_isTransformer');


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};

},{"./_isArray":120,"./_isTransformer":129}],109:[function(require,module,exports){
var take = require('../take');

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};

},{"../take":276}],110:[function(require,module,exports){
module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};

},{}],111:[function(require,module,exports){
var _arrayFromIterator = require('./_arrayFromIterator');
var _functionName = require('./_functionName');
var _has = require('./_has');
var identical = require('../identical');
var keys = require('../keys');
var type = require('../type');


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) &&
           typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};

},{"../identical":81,"../keys":174,"../type":293,"./_arrayFromIterator":94,"./_functionName":115,"./_has":116}],112:[function(require,module,exports){
module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};

},{}],113:[function(require,module,exports){
var _forceReduced = require('./_forceReduced');
var _isArrayLike = require('./_isArrayLike');
var _reduce = require('./_reduce');
var _xfBase = require('./_xfBase');

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());

},{"./_forceReduced":114,"./_isArrayLike":121,"./_reduce":137,"./_xfBase":151}],114:[function(require,module,exports){
module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};

},{}],115:[function(require,module,exports){
module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};

},{}],116:[function(require,module,exports){
module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

},{}],117:[function(require,module,exports){
module.exports = function _identity(x) { return x; };

},{}],118:[function(require,module,exports){
var equals = require('../equals');


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};

},{"../equals":62}],119:[function(require,module,exports){
var _has = require('./_has');


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());

},{"./_has":116}],120:[function(require,module,exports){
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};

},{}],121:[function(require,module,exports){
var _curry1 = require('./_curry1');
var _isArray = require('./_isArray');
var _isString = require('./_isString');


/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

},{"./_curry1":104,"./_isArray":120,"./_isString":128}],122:[function(require,module,exports){
module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};

},{}],123:[function(require,module,exports){
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};

},{}],124:[function(require,module,exports){
module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};

},{}],125:[function(require,module,exports){
module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};

},{}],126:[function(require,module,exports){
module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};

},{}],127:[function(require,module,exports){
module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};

},{}],128:[function(require,module,exports){
module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};

},{}],129:[function(require,module,exports){
module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

},{}],130:[function(require,module,exports){
var _isArrayLike = require('./_isArrayLike');


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
module.exports = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};

},{"./_isArrayLike":121}],131:[function(require,module,exports){
module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};

},{}],132:[function(require,module,exports){
var _has = require('./_has');

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
};

},{"./_has":116}],133:[function(require,module,exports){
module.exports = function _of(x) { return [x]; };

},{}],134:[function(require,module,exports){
module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};

},{}],135:[function(require,module,exports){
module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};

},{}],136:[function(require,module,exports){
module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};

},{}],137:[function(require,module,exports){
var _isArrayLike = require('./_isArrayLike');
var _xwrap = require('./_xwrap');
var bind = require('../bind');


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  };
}());

},{"../bind":23,"./_isArrayLike":121,"./_xwrap":161}],138:[function(require,module,exports){
module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};

},{}],139:[function(require,module,exports){
var _assign = require('./_assign');
var _identity = require('./_identity');
var _isArrayLike = require('./_isArrayLike');
var _isTransformer = require('./_isTransformer');
var objOf = require('../objOf');


module.exports = (function() {
  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function(a, b) { return a + b; },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function(result, input) {
      return _assign(
        result,
        _isArrayLike(input) ? objOf(input[0], input[1]) : input
      );
    },
    '@@transducer/result': _identity
  };

  return function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  };
}());

},{"../objOf":218,"./_assign":95,"./_identity":117,"./_isArrayLike":121,"./_isTransformer":129}],140:[function(require,module,exports){
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());

},{}],141:[function(require,module,exports){
var _contains = require('./_contains');
var _map = require('./_map');
var _quote = require('./_quote');
var _toISOString = require('./_toISOString');
var keys = require('../keys');
var reject = require('../reject');


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};

},{"../keys":174,"../reject":254,"./_contains":101,"./_map":131,"./_quote":136,"./_toISOString":140}],142:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function(result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return _curry2(function _xall(f, xf) { return new XAll(f, xf); });
}());

},{"./_curry2":105,"./_reduced":138,"./_xfBase":151}],143:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function(result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return _curry2(function _xany(f, xf) { return new XAny(f, xf); });
}());

},{"./_curry2":105,"./_reduced":138,"./_xfBase":151}],144:[function(require,module,exports){
var _concat = require('./_concat');
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function(result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos),
                   Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return _curry2(function _xaperture(n, xf) { return new XAperture(n, xf); });
}());

},{"./_concat":100,"./_curry2":105,"./_xfBase":151}],145:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _flatCat = require('./_flatCat');
var map = require('../map');


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});

},{"../map":187,"./_curry2":105,"./_flatCat":113}],146:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdrop(n, xf) { return new XDrop(n, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],147:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] =  function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return _curry2(function _xdropLast(n, xf) { return new XDropLast(n, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],148:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduce = require('./_reduce');
var _xfBase = require('./_xfBase');

module.exports = (function() {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function(result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _reduce(
      this.xf['@@transducer/step'],
      result,
      this.retained
    );
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };

  return _curry2(function _xdropLastWhile(fn, xf) { return new XDropLastWhile(fn, xf); });
}());

},{"./_curry2":105,"./_reduce":137,"./_xfBase":151}],149:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropRepeatsWith(pred, xf) { return new XDropRepeatsWith(pred, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],150:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropWhile(f, xf) { return new XDropWhile(f, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],151:[function(require,module,exports){
module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};

},{}],152:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],153:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
}());

},{"./_curry2":105,"./_reduced":138,"./_xfBase":151}],154:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return _curry2(function _xfindIndex(f, xf) { return new XFindIndex(f, xf); });
}());

},{"./_curry2":105,"./_reduced":138,"./_xfBase":151}],155:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return _curry2(function _xfindLast(f, xf) { return new XFindLast(f, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],156:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return _curry2(function _xfindLastIndex(f, xf) { return new XFindLastIndex(f, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],157:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
}());

},{"./_curry2":105,"./_xfBase":151}],158:[function(require,module,exports){
var _curryN = require('./_curryN');
var _has = require('./_has');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [],
                 function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
                   return new XReduceBy(valueFn, valueAcc, keyFn, xf);
                 });
}());

},{"./_curryN":107,"./_has":116,"./_xfBase":151}],159:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');

module.exports = (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());

},{"./_curry2":105,"./_reduced":138,"./_xfBase":151}],160:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  return _curry2(function _xtakeWhile(f, xf) { return new XTakeWhile(f, xf); });
}());

},{"./_curry2":105,"./_reduced":138,"./_xfBase":151}],161:[function(require,module,exports){
module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());

},{}],162:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');
var _filter = require('./internal/_filter');
var flip = require('./flip');
var uniq = require('./uniq');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
module.exports = _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});

},{"./flip":70,"./internal/_contains":101,"./internal/_curry2":105,"./internal/_filter":112,"./uniq":300}],163:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');
var uniqWith = require('./uniqWith');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.innerJoin
 * @deprecated since v0.24.0
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});

},{"./internal/_containsWith":102,"./internal/_curry3":106,"./uniqWith":302}],164:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));

},{"./internal/_checkForMethod":96,"./internal/_curry2":105}],165:[function(require,module,exports){
var _clone = require('./internal/_clone');
var _curry3 = require('./internal/_curry3');
var _isTransformer = require('./internal/_isTransformer');
var _reduce = require('./internal/_reduce');
var _stepCat = require('./internal/_stepCat');


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});

},{"./internal/_clone":97,"./internal/_curry3":106,"./internal/_isTransformer":129,"./internal/_reduce":137,"./internal/_stepCat":139}],166:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');
var keys = require('./keys');


/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
module.exports = _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : (out[val] = []);
    list[list.length] = key;
    idx += 1;
  }
  return out;
});

},{"./internal/_curry1":104,"./internal/_has":116,"./keys":174}],167:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});

},{"./internal/_curry1":104,"./keys":174}],168:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var curryN = require('./curryN');
var toString = require('./toString');


/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
module.exports = _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});

},{"./curryN":42,"./internal/_curry2":105,"./internal/_isFunction":122,"./toString":286}],169:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
module.exports = _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});

},{"./internal/_curry2":105}],170:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var empty = require('./empty');
var equals = require('./equals');


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
module.exports = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});

},{"./empty":58,"./equals":62,"./internal/_curry1":104}],171:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
module.exports = _curry1(function isNil(x) { return x == null; });

},{"./internal/_curry1":104}],172:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
module.exports = invoker(1, 'join');

},{"./invoker":168}],173:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var converge = require('./converge');


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
module.exports = _curry1(function juxt(fns) {
  return converge(function() { return Array.prototype.slice.call(arguments, 0); }, fns);
});

},{"./converge":39,"./internal/_curry1":104}],174:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');
var _isArguments = require('./internal/_isArguments');


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());

},{"./internal/_curry1":104,"./internal/_has":116,"./internal/_isArguments":119}],175:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
module.exports = _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});

},{"./internal/_curry1":104}],176:[function(require,module,exports){
var nth = require('./nth');


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
module.exports = nth(-1);

},{"./nth":215}],177:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isArray = require('./internal/_isArray');
var equals = require('./equals');


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});

},{"./equals":62,"./internal/_curry2":105,"./internal/_isArray":120}],178:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isNumber = require('./internal/_isNumber');


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});

},{"./internal/_curry1":104,"./internal/_isNumber":124}],179:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var map = require('./map');


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry2(function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus, target);
        },
        toFunctorFn(getter(target))
      );
    };
  };
});

},{"./internal/_curry2":105,"./map":187}],180:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var lens = require('./lens');
var nth = require('./nth');
var update = require('./update');


/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
module.exports = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});

},{"./internal/_curry1":104,"./lens":179,"./nth":215,"./update":306}],181:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var assocPath = require('./assocPath');
var lens = require('./lens');
var path = require('./path');


/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
module.exports = _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});

},{"./assocPath":21,"./internal/_curry1":104,"./lens":179,"./path":228}],182:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var assoc = require('./assoc');
var lens = require('./lens');
var prop = require('./prop');


/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});

},{"./assoc":20,"./internal/_curry1":104,"./lens":179,"./prop":242}],183:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var liftN = require('./liftN');


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
module.exports = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});

},{"./internal/_curry1":104,"./liftN":184}],184:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var ap = require('./ap');
var curryN = require('./curryN');
var map = require('./map');


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
module.exports = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

},{"./ap":14,"./curryN":42,"./internal/_curry2":105,"./internal/_reduce":137,"./map":187}],185:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
module.exports = _curry2(function lt(a, b) { return a < b; });

},{"./internal/_curry2":105}],186:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
module.exports = _curry2(function lte(a, b) { return a <= b; });

},{"./internal/_curry2":105}],187:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _map = require('./internal/_map');
var _reduce = require('./internal/_reduce');
var _xmap = require('./internal/_xmap');
var curryN = require('./curryN');
var keys = require('./keys');


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
module.exports = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));

},{"./curryN":42,"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_map":131,"./internal/_reduce":137,"./internal/_xmap":157,"./keys":174}],188:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
module.exports = _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});

},{"./internal/_curry3":106}],189:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});

},{"./internal/_curry3":106}],190:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var keys = require('./keys');


/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
module.exports = _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});

},{"./internal/_curry2":105,"./internal/_reduce":137,"./keys":174}],191:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = _curry2(function match(rx, str) {
  return str.match(rx) || [];
});

},{"./internal/_curry2":105}],192:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isInteger = require('./internal/_isInteger');


/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
module.exports = _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) { return NaN; }
  if (!_isInteger(p) || p < 1) { return NaN; }
  return ((m % p) + p) % p;
});

},{"./internal/_curry2":105,"./internal/_isInteger":123}],193:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
module.exports = _curry2(function max(a, b) { return b > a ? b : a; });

},{"./internal/_curry2":105}],194:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
module.exports = _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});

},{"./internal/_curry3":106}],195:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var sum = require('./sum');


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
module.exports = _curry1(function mean(list) {
  return sum(list) / list.length;
});

},{"./internal/_curry1":104,"./sum":272}],196:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var mean = require('./mean');


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
module.exports = _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});

},{"./internal/_curry1":104,"./mean":195}],197:[function(require,module,exports){
var memoizeWith = require('./memoizeWith');
var toString = require('./toString');


/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = memoizeWith(function() {
  return toString(arguments);
});

},{"./memoizeWith":198,"./toString":286}],198:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry2 = require('./internal/_curry2');
var _has = require('./internal/_has');


/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = _curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});

},{"./internal/_arity":93,"./internal/_curry2":105,"./internal/_has":116}],199:[function(require,module,exports){
var _assign = require('./internal/_assign');
var _curry2 = require('./internal/_curry2');


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});

},{"./internal/_assign":95,"./internal/_curry2":105}],200:[function(require,module,exports){
var _assign = require('./internal/_assign');
var _curry1 = require('./internal/_curry1');


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});

},{"./internal/_assign":95,"./internal/_curry1":104}],201:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var mergeDeepWithKey = require('./mergeDeepWithKey');


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
module.exports = _curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});

},{"./internal/_curry2":105,"./mergeDeepWithKey":204}],202:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var mergeDeepWithKey = require('./mergeDeepWithKey');


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
module.exports = _curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});

},{"./internal/_curry2":105,"./mergeDeepWithKey":204}],203:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var mergeDeepWithKey = require('./mergeDeepWithKey');


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});

},{"./internal/_curry3":106,"./mergeDeepWithKey":204}],204:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _isObject = require('./internal/_isObject');
var mergeWithKey = require('./mergeWithKey');


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});

},{"./internal/_curry3":106,"./internal/_isObject":125,"./mergeWithKey":206}],205:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var mergeWithKey = require('./mergeWithKey');


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});

},{"./internal/_curry3":106,"./mergeWithKey":206}],206:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _has = require('./internal/_has');


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
module.exports = _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !(_has(k, result))) {
      result[k] = r[k];
    }
  }

  return result;
});

},{"./internal/_curry3":106,"./internal/_has":116}],207:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
module.exports = _curry2(function min(a, b) { return b < a ? b : a; });

},{"./internal/_curry2":105}],208:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
module.exports = _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});

},{"./internal/_curry3":106}],209:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
module.exports = _curry2(function modulo(a, b) { return a % b; });

},{"./internal/_curry2":105}],210:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
module.exports = _curry2(function multiply(a, b) { return a * b; });

},{"./internal/_curry2":105}],211:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
module.exports = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0: return function() {return fn.call(this);};
    case 1: return function(a0) {return fn.call(this, a0);};
    case 2: return function(a0, a1) {return fn.call(this, a0, a1);};
    case 3: return function(a0, a1, a2) {return fn.call(this, a0, a1, a2);};
    case 4: return function(a0, a1, a2, a3) {return fn.call(this, a0, a1, a2, a3);};
    case 5: return function(a0, a1, a2, a3, a4) {return fn.call(this, a0, a1, a2, a3, a4);};
    case 6: return function(a0, a1, a2, a3, a4, a5) {return fn.call(this, a0, a1, a2, a3, a4, a5);};
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6);};
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);};
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);};
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);};
    default: throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});

},{"./internal/_curry2":105}],212:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });

},{"./internal/_curry1":104}],213:[function(require,module,exports){
var _complement = require('./internal/_complement');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xany = require('./internal/_xany');
var any = require('./any');


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));

},{"./any":12,"./internal/_complement":99,"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xany":143}],214:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
module.exports = _curry1(function not(a) {
  return !a;
});

},{"./internal/_curry1":104}],215:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isString = require('./internal/_isString');


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
module.exports = _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

},{"./internal/_curry2":105,"./internal/_isString":128}],216:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var nth = require('./nth');


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});

},{"./curryN":42,"./internal/_curry1":104,"./nth":215}],217:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + lastName
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
module.exports = _curry3(function o(f, g, x) {
  return f(g(x));
});

},{"./internal/_curry3":106}],218:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
module.exports = _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});

},{"./internal/_curry2":105}],219:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _of = require('./internal/_of');


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
module.exports = _curry1(_of);

},{"./internal/_curry1":104,"./internal/_of":133}],220:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
module.exports = _curry2(function omit(names, obj) {
  var result = {};
  for (var prop in obj) {
    if (!_contains(prop, names)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

},{"./internal/_contains":101,"./internal/_curry2":105}],221:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});

},{"./internal/_arity":93,"./internal/_curry1":104}],222:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
module.exports = _curry2(function or(a, b) {
  return a || b;
});

},{"./internal/_curry2":105}],223:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
module.exports = (function() {
  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function(x) {
    return {value: x, map: function(f) { return Identity(f(x)); }};
  };

  return _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) { return Identity(f(y)); })(x).value;
  });
}());

},{"./internal/_curry3":106}],224:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
module.exports = _curry2(function pair(fst, snd) { return [fst, snd]; });

},{"./internal/_curry2":105}],225:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
module.exports = _createPartialApplicator(_concat);

},{"./internal/_concat":100,"./internal/_createPartialApplicator":103}],226:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');
var flip = require('./flip');


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));

},{"./flip":70,"./internal/_concat":100,"./internal/_createPartialApplicator":103}],227:[function(require,module,exports){
var filter = require('./filter');
var juxt = require('./juxt');
var reject = require('./reject');


/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
module.exports = juxt([filter, reject]);

},{"./filter":64,"./juxt":173,"./reject":254}],228:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
module.exports = _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});

},{"./internal/_curry2":105}],229:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');
var path = require('./path');


/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});

},{"./equals":62,"./internal/_curry3":106,"./path":228}],230:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var defaultTo = require('./defaultTo');
var path = require('./path');


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
module.exports = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});

},{"./defaultTo":44,"./internal/_curry3":106,"./path":228}],231:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var path = require('./path');


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});

},{"./internal/_curry3":106,"./path":228}],232:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":105}],233:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
module.exports = _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":105}],234:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

},{"./internal/_curry2":105}],235:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _pipe = require('./internal/_pipe');
var reduce = require('./reduce');
var tail = require('./tail');


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};

},{"./internal/_arity":93,"./internal/_pipe":134,"./reduce":249,"./tail":275}],236:[function(require,module,exports){
var composeK = require('./composeK');
var reverse = require('./reverse');

/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};

},{"./composeK":32,"./reverse":258}],237:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _pipeP = require('./internal/_pipeP');
var reduce = require('./reduce');
var tail = require('./tail');


/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipeP, arguments[0], tail(arguments)));
};

},{"./internal/_arity":93,"./internal/_pipeP":135,"./reduce":249,"./tail":275}],238:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var map = require('./map');
var prop = require('./prop');


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
module.exports = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});

},{"./internal/_curry2":105,"./map":187,"./prop":242}],239:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
module.exports = _curry2(function prepend(el, list) {
  return _concat([el], list);
});

},{"./internal/_concat":100,"./internal/_curry2":105}],240:[function(require,module,exports){
var multiply = require('./multiply');
var reduce = require('./reduce');


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
module.exports = reduce(multiply, 1);

},{"./multiply":210,"./reduce":249}],241:[function(require,module,exports){
var _map = require('./internal/_map');
var identity = require('./identity');
var pickAll = require('./pickAll');
var useWith = require('./useWith');


/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity

},{"./identity":82,"./internal/_map":131,"./pickAll":233,"./useWith":307}],242:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });

},{"./internal/_curry2":105}],243:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
module.exports = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});

},{"./equals":62,"./internal/_curry3":106}],244:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var is = require('./is');


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});

},{"./internal/_curry3":106,"./is":169}],245:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _has = require('./internal/_has');


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
module.exports = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});

},{"./internal/_curry3":106,"./internal/_has":116}],246:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
module.exports = _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});

},{"./internal/_curry3":106}],247:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});

},{"./internal/_curry2":105}],248:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isNumber = require('./internal/_isNumber');


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
module.exports = _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});

},{"./internal/_curry2":105,"./internal/_isNumber":124}],249:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _reduce = require('./internal/_reduce');


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);

},{"./internal/_curry3":106,"./internal/_reduce":137}],250:[function(require,module,exports){
var _curryN = require('./internal/_curryN');
var _dispatchable = require('./internal/_dispatchable');
var _has = require('./internal/_has');
var _reduce = require('./internal/_reduce');
var _xreduceBy = require('./internal/_xreduceBy');


/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));

},{"./internal/_curryN":107,"./internal/_dispatchable":108,"./internal/_has":116,"./internal/_reduce":137,"./internal/_xreduceBy":158}],251:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});

},{"./internal/_curry3":106}],252:[function(require,module,exports){
var _curryN = require('./internal/_curryN');
var _reduce = require('./internal/_reduce');
var _reduced = require('./internal/_reduced');


/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});

},{"./internal/_curryN":107,"./internal/_reduce":137,"./internal/_reduced":138}],253:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _reduced = require('./internal/_reduced');

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */

module.exports = _curry1(_reduced);

},{"./internal/_curry1":104,"./internal/_reduced":138}],254:[function(require,module,exports){
var _complement = require('./internal/_complement');
var _curry2 = require('./internal/_curry2');
var filter = require('./filter');


/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

},{"./filter":64,"./internal/_complement":99,"./internal/_curry2":105}],255:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});

},{"./internal/_curry3":106}],256:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var always = require('./always');
var times = require('./times');


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
module.exports = _curry2(function repeat(value, n) {
  return times(always(value), n);
});

},{"./always":10,"./internal/_curry2":105,"./times":282}],257:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
module.exports = _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});

},{"./internal/_curry3":106}],258:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isString = require('./internal/_isString');


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});

},{"./internal/_curry1":104,"./internal/_isString":128}],259:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
module.exports = _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});

},{"./internal/_curry3":106}],260:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var ap = require('./ap');
var map = require('./map');
var prepend = require('./prepend');
var reduceRight = require('./reduceRight');


/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
module.exports = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(function(x, acc) { return ap(map(prepend, x), acc); },
                of([]),
                traversable);
});

},{"./ap":14,"./internal/_curry2":105,"./map":187,"./prepend":239,"./reduceRight":251}],261:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var always = require('./always');
var over = require('./over');


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
module.exports = _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});

},{"./always":10,"./internal/_curry3":106,"./over":223}],262:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry3 = require('./internal/_curry3');


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

},{"./internal/_checkForMethod":96,"./internal/_curry3":106}],263:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});

},{"./internal/_curry2":105}],264:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
module.exports = _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});

},{"./internal/_curry2":105}],265:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});

},{"./internal/_curry2":105}],266:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
module.exports = invoker(1, 'split');

},{"./invoker":168}],267:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var length = require('./length');
var slice = require('./slice');


/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
module.exports = _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});

},{"./internal/_curry2":105,"./length":178,"./slice":262}],268:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var slice = require('./slice');


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
module.exports = _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});

},{"./internal/_curry2":105,"./slice":262}],269:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});

},{"./internal/_curry2":105}],270:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var equals = require('./equals');
var take = require('./take');

/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(prefix, list) {
  return equals(take(prefix.length, list), prefix);
});

},{"./equals":62,"./internal/_curry2":105,"./take":276}],271:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
module.exports = _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});

},{"./internal/_curry2":105}],272:[function(require,module,exports){
var add = require('./add');
var reduce = require('./reduce');


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);

},{"./add":5,"./reduce":249}],273:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var concat = require('./concat');
var difference = require('./difference');


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
module.exports = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});

},{"./concat":34,"./difference":46,"./internal/_curry2":105}],274:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var concat = require('./concat');
var differenceWith = require('./differenceWith');


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});

},{"./concat":34,"./differenceWith":47,"./internal/_curry3":106}],275:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry1 = require('./internal/_curry1');
var slice = require('./slice');


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));

},{"./internal/_checkForMethod":96,"./internal/_curry1":104,"./slice":262}],276:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xtake = require('./internal/_xtake');
var slice = require('./slice');


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xtake":159,"./slice":262}],277:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var drop = require('./drop');


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
module.exports = _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});

},{"./drop":51,"./internal/_curry2":105}],278:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});

},{"./internal/_curry2":105}],279:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xtakeWhile = require('./internal/_xtakeWhile');


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && fn(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, 0, idx);
}));

},{"./internal/_curry2":105,"./internal/_dispatchable":108,"./internal/_xtakeWhile":160}],280:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
module.exports = _curry2(function tap(fn, x) {
  fn(x);
  return x;
});

},{"./internal/_curry2":105}],281:[function(require,module,exports){
var _cloneRegExp = require('./internal/_cloneRegExp');
var _curry2 = require('./internal/_curry2');
var _isRegExp = require('./internal/_isRegExp');
var toString = require('./toString');


/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
module.exports = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});

},{"./internal/_cloneRegExp":98,"./internal/_curry2":105,"./internal/_isRegExp":127,"./toString":286}],282:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});

},{"./internal/_curry2":105}],283:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
module.exports = invoker(0, 'toLowerCase');

},{"./invoker":168}],284:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});

},{"./internal/_curry1":104,"./internal/_has":116}],285:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
module.exports = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});

},{"./internal/_curry1":104}],286:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _toString = require('./internal/_toString');


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });

},{"./internal/_curry1":104,"./internal/_toString":141}],287:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
module.exports = invoker(0, 'toUpperCase');

},{"./invoker":168}],288:[function(require,module,exports){
var _reduce = require('./internal/_reduce');
var _xwrap = require('./internal/_xwrap');
var curryN = require('./curryN');


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});

},{"./curryN":42,"./internal/_reduce":137,"./internal/_xwrap":161}],289:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
module.exports = _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});

},{"./internal/_curry1":104}],290:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var map = require('./map');
var sequence = require('./sequence');


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ?
    traversable['fantasy-land/traverse'](f, of) :
    sequence(of, map(f, traversable));
});

},{"./internal/_curry3":106,"./map":187,"./sequence":260}],291:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
module.exports = (function() {
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
           '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
           '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = (typeof String.prototype.trim === 'function');
  if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
    return _curry1(function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    });
  } else {
    return _curry1(function trim(str) {
      return str.trim();
    });
  }
}());

},{"./internal/_curry1":104}],292:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});

},{"./internal/_arity":93,"./internal/_concat":100,"./internal/_curry2":105}],293:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});

},{"./internal/_curry1":104}],294:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});

},{"./internal/_curry1":104}],295:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var nAry = require('./nAry');


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});

},{"./internal/_curry1":104,"./nAry":211}],296:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var curryN = require('./curryN');


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
module.exports = _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});

},{"./curryN":42,"./internal/_curry2":105}],297:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});

},{"./internal/_curry2":105}],298:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
var compose = require('./compose');
var uniq = require('./uniq');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));

},{"./compose":31,"./internal/_concat":100,"./internal/_curry2":105,"./uniq":300}],299:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry3 = require('./internal/_curry3');
var uniqWith = require('./uniqWith');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});

},{"./internal/_concat":100,"./internal/_curry3":106,"./uniqWith":302}],300:[function(require,module,exports){
var identity = require('./identity');
var uniqBy = require('./uniqBy');


/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = uniqBy(identity);

},{"./identity":82,"./uniqBy":301}],301:[function(require,module,exports){
var _Set = require('./internal/_Set');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_Set":91,"./internal/_curry2":105}],302:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
module.exports = _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_containsWith":102,"./internal/_curry2":105}],303:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});

},{"./internal/_curry3":106}],304:[function(require,module,exports){
var _identity = require('./internal/_identity');
var chain = require('./chain');


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
module.exports = chain(_identity);

},{"./chain":26,"./internal/_identity":117}],305:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});

},{"./internal/_curry3":106}],306:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var adjust = require('./adjust');
var always = require('./always');


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
module.exports = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});

},{"./adjust":7,"./always":10,"./internal/_curry3":106}],307:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var curryN = require('./curryN');


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
module.exports = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});

},{"./curryN":42,"./internal/_curry2":105}],308:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});

},{"./internal/_curry1":104,"./keys":174}],309:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});

},{"./internal/_curry1":104}],310:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
module.exports = (function() {
  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function(x) {
    return {value: x, 'fantasy-land/map': function() { return this; }};
  };

  return _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });
}());

},{"./internal/_curry2":105}],311:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});

},{"./internal/_curry3":106}],312:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _has = require('./internal/_has');


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});

},{"./internal/_curry2":105,"./internal/_has":116}],313:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var equals = require('./equals');
var map = require('./map');
var where = require('./where');


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
module.exports = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});

},{"./equals":62,"./internal/_curry2":105,"./map":187,"./where":312}],314:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');
var flip = require('./flip');
var reject = require('./reject');


/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});

},{"./flip":70,"./internal/_contains":101,"./internal/_curry2":105,"./reject":254}],315:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
module.exports = _curry2(function xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":105}],316:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});

},{"./internal/_curry2":105}],317:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});

},{"./internal/_curry2":105}],318:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});

},{"./internal/_curry3":106}],319:[function(require,module,exports){
module.exports={"nodes":[{"id":"aathira.gopinath","name":"aathira.gopinath","type":"person","_color":"#00AA00"},{"id":"yathiah.bantra8","name":"yathiah.bantra8","type":"person"},{"id":"bineeah.balakriahnan","name":"bineeah.balakriahnan","type":"person"},{"id":"rajeah.aankaranarayanan","name":"rajeah.aankaranarayanan","type":"person"},{"id":"ahyam.pattabiraman","name":"ahyam.pattabiraman","type":"person"},{"id":"arinivvaan.gopalakriahnan","name":"arinivvaan.gopalakriahnan","type":"person"},{"id":"dipak.bohra","name":"dipak.bohra","type":"person"},{"id":"jatin.dalal","name":"jatin.dalal","type":"person"},{"id":"abidali.neemuchwala","name":"abidali.neemuchwala","type":"person"},{"id":"ajit.vargheae","name":"ajit.vargheae","type":"person","_color":"#00AA00"},{"id":"prem.manickavelu","name":"prem.manickavelu","type":"person"},{"id":"nataraj.aeahadri","name":"nataraj.aeahadri","type":"person"},{"id":"arjun.k83","name":"arjun.k83","type":"person","_color":"#00AA00"},{"id":"ayed.rafeeq","name":"ayed.rafeeq","type":"person"},{"id":"ahanteah.yadwad","name":"ahanteah.yadwad","type":"person"},{"id":"rameah.padmanabhan","name":"rameah.padmanabhan","type":"person"},{"id":"anuj.bhalla","name":"anuj.bhalla","type":"person"},{"id":"kiran.deaai","name":"kiran.deaai","type":"person"},{"id":"bhanumurthy.ballapuram","name":"bhanumurthy.ballapuram","type":"person"},{"id":"barbara.85","name":"barbara.85","type":"person","_color":"#00AA00"},{"id":"ranjith.tulichery","name":"ranjith.tulichery","type":"person","_color":"#00AA00"},{"id":"bhagya.boddepalli","name":"bhagya.boddepalli","type":"person","_color":"#00AA00"},{"id":"neeraj.aingh8qm","name":"neeraj.aingh8qm","type":"person"},{"id":"gopikriahna.poleahwar","name":"gopikriahna.poleahwar","type":"person"},{"id":"venkateah.gopalakriahna","name":"venkateah.gopalakriahna","type":"person"},{"id":"manu.tayal","name":"manu.tayal","type":"person","_color":"#00AA00"},{"id":"amitava.chell","name":"amitava.chell","type":"person"},{"id":"brian.nolf","name":"brian.nolf","type":"person"},{"id":"kria.denton","name":"kria.denton","type":"person"},{"id":"phil.dunmore","name":"phil.dunmore","type":"person"},{"id":"rajan.kohli","name":"rajan.kohli","type":"person"},{"id":"matthew.coyle","name":"matthew.coyle","type":"person","_color":"#00AA00"},{"id":"alexander.kalinovaky","name":"alexander.kalinovaky","type":"person"},{"id":"avinvah.rao","name":"avinvah.rao","type":"person"},{"id":"ramanathan.raman","name":"ramanathan.raman","type":"person","_color":"#00AA00"},{"id":"hariah.balivada","name":"hariah.balivada","type":"person"},{"id":"omkar.niaal","name":"omkar.niaal","type":"person"},{"id":"ahaji.farooq","name":"ahaji.farooq","type":"person"},{"id":"ramya.nedumaran","name":"ramya.nedumaran","type":"person","_color":"#00AA00"},{"id":"raghavendra.rao8qm","name":"raghavendra.rao8qm","type":"person"},{"id":"muthuraj.natarajan","name":"muthuraj.natarajan","type":"person"},{"id":"ravada.kumar","name":"ravada.kumar","type":"person","_color":"#00AA00"},{"id":"aheril.jain","name":"aheril.jain","type":"person","_color":"#00AA00"},{"id":"ahiraendu.deb","name":"ahiraendu.deb","type":"person"},{"id":"ahreya.p55","name":"ahreya.p55","type":"person","_color":"#00AA00"},{"id":"aiddarth.ram","name":"aiddarth.ram","type":"person","_color":"#00AA00"},{"id":"auahil.agrawal","name":"auahil.agrawal","type":"person"},{"id":"navneet.khandelwal","name":"navneet.khandelwal","type":"person"}],"links":[{"id":"yathiah.bantra8-aathira.gopinath","source":"yathiah.bantra8","target":"aathira.gopinath"},{"id":"bineeah.balakriahnan-yathiah.bantra8","source":"bineeah.balakriahnan","target":"yathiah.bantra8"},{"id":"rajeah.aankaranarayanan-bineeah.balakriahnan","source":"rajeah.aankaranarayanan","target":"bineeah.balakriahnan"},{"id":"ahyam.pattabiraman-rajeah.aankaranarayanan","source":"ahyam.pattabiraman","target":"rajeah.aankaranarayanan"},{"id":"arinivvaan.gopalakriahnan-ahyam.pattabiraman","source":"arinivvaan.gopalakriahnan","target":"ahyam.pattabiraman"},{"id":"dipak.bohra-arinivvaan.gopalakriahnan","source":"dipak.bohra","target":"arinivvaan.gopalakriahnan"},{"id":"jatin.dalal-dipak.bohra","source":"jatin.dalal","target":"dipak.bohra"},{"id":"abidali.neemuchwala-jatin.dalal","source":"abidali.neemuchwala","target":"jatin.dalal"},{"id":"prem.manickavelu-ajit.vargheae","source":"prem.manickavelu","target":"ajit.vargheae"},{"id":"nataraj.aeahadri-prem.manickavelu","source":"nataraj.aeahadri","target":"prem.manickavelu"},{"id":"arinivvaan.gopalakriahnan-nataraj.aeahadri","source":"arinivvaan.gopalakriahnan","target":"nataraj.aeahadri"},{"id":"ayed.rafeeq-arjun.k83","source":"ayed.rafeeq","target":"arjun.k83"},{"id":"ahanteah.yadwad-ayed.rafeeq","source":"ahanteah.yadwad","target":"ayed.rafeeq"},{"id":"rameah.padmanabhan-ahanteah.yadwad","source":"rameah.padmanabhan","target":"ahanteah.yadwad"},{"id":"anuj.bhalla-rameah.padmanabhan","source":"anuj.bhalla","target":"rameah.padmanabhan"},{"id":"kiran.deaai-anuj.bhalla","source":"kiran.deaai","target":"anuj.bhalla"},{"id":"bhanumurthy.ballapuram-kiran.deaai","source":"bhanumurthy.ballapuram","target":"kiran.deaai"},{"id":"abidali.neemuchwala-bhanumurthy.ballapuram","source":"abidali.neemuchwala","target":"bhanumurthy.ballapuram"},{"id":"ranjith.tulichery-barbara.85","source":"ranjith.tulichery","target":"barbara.85"},{"id":"prem.manickavelu-ranjith.tulichery","source":"prem.manickavelu","target":"ranjith.tulichery"},{"id":"neeraj.aingh8qm-bhagya.boddepalli","source":"neeraj.aingh8qm","target":"bhagya.boddepalli"},{"id":"gopikriahna.poleahwar-neeraj.aingh8qm","source":"gopikriahna.poleahwar","target":"neeraj.aingh8qm"},{"id":"venkateah.gopalakriahna-gopikriahna.poleahwar","source":"venkateah.gopalakriahna","target":"gopikriahna.poleahwar"},{"id":"arinivvaan.gopalakriahnan-venkateah.gopalakriahna","source":"arinivvaan.gopalakriahnan","target":"venkateah.gopalakriahna"},{"id":"amitava.chell-manu.tayal","source":"amitava.chell","target":"manu.tayal"},{"id":"brian.nolf-amitava.chell","source":"brian.nolf","target":"amitava.chell"},{"id":"kria.denton-brian.nolf","source":"kria.denton","target":"brian.nolf"},{"id":"phil.dunmore-kria.denton","source":"phil.dunmore","target":"kria.denton"},{"id":"rajan.kohli-phil.dunmore","source":"rajan.kohli","target":"phil.dunmore"},{"id":"abidali.neemuchwala-rajan.kohli","source":"abidali.neemuchwala","target":"rajan.kohli"},{"id":"alexander.kalinovaky-matthew.coyle","source":"alexander.kalinovaky","target":"matthew.coyle"},{"id":"avinvah.rao-alexander.kalinovaky","source":"avinvah.rao","target":"alexander.kalinovaky"},{"id":"rajan.kohli-avinvah.rao","source":"rajan.kohli","target":"avinvah.rao"},{"id":"hariah.balivada-ramanathan.raman","source":"hariah.balivada","target":"ramanathan.raman"},{"id":"omkar.niaal-hariah.balivada","source":"omkar.niaal","target":"hariah.balivada"},{"id":"ahaji.farooq-omkar.niaal","source":"ahaji.farooq","target":"omkar.niaal"},{"id":"abidali.neemuchwala-ahaji.farooq","source":"abidali.neemuchwala","target":"ahaji.farooq"},{"id":"raghavendra.rao8qm-ramya.nedumaran","source":"raghavendra.rao8qm","target":"ramya.nedumaran"},{"id":"muthuraj.natarajan-raghavendra.rao8qm","source":"muthuraj.natarajan","target":"raghavendra.rao8qm"},{"id":"ahyam.pattabiraman-muthuraj.natarajan","source":"ahyam.pattabiraman","target":"muthuraj.natarajan"},{"id":"neeraj.aingh8qm-ravada.kumar","source":"neeraj.aingh8qm","target":"ravada.kumar"},{"id":"ahiraendu.deb-aheril.jain","source":"ahiraendu.deb","target":"aheril.jain"},{"id":"dipak.bohra-ahiraendu.deb","source":"dipak.bohra","target":"ahiraendu.deb"},{"id":"aheril.jain-ahreya.p55","source":"aheril.jain","target":"ahreya.p55"},{"id":"auahil.agrawal-aiddarth.ram","source":"auahil.agrawal","target":"aiddarth.ram"},{"id":"navneet.khandelwal-auahil.agrawal","source":"navneet.khandelwal","target":"auahil.agrawal"},{"id":"jatin.dalal-navneet.khandelwal","source":"jatin.dalal","target":"navneet.khandelwal"}],"model":{"entities":{"person":{"attributes":[],"class":"user","color":"#000000","image":"","size":20,"type":"person"}}},"events":[],"sequences":[],"views":[{"links":{"rameah.padmanabhan-ahanteah.yadwad":{"source":"rameah.padmanabhan","target":"ahanteah.yadwad"},"kiran.deaai-anuj.bhalla":{"source":"kiran.deaai","target":"anuj.bhalla"},"dipak.bohra-ahiraendu.deb":{"source":"dipak.bohra","target":"ahiraendu.deb"},"ahaji.farooq-omkar.niaal":{"source":"ahaji.farooq","target":"omkar.niaal"},"rajan.kohli-avinvah.rao":{"source":"rajan.kohli","target":"avinvah.rao"},"bineeah.balakriahnan-yathiah.bantra8":{"source":"bineeah.balakriahnan","target":"yathiah.bantra8"},"ahanteah.yadwad-ayed.rafeeq":{"source":"ahanteah.yadwad","target":"ayed.rafeeq"},"navneet.khandelwal-auahil.agrawal":{"source":"navneet.khandelwal","target":"auahil.agrawal"},"ahiraendu.deb-aheril.jain":{"source":"ahiraendu.deb","target":"aheril.jain"},"jatin.dalal-navneet.khandelwal":{"source":"jatin.dalal","target":"navneet.khandelwal"},"ahyam.pattabiraman-muthuraj.natarajan":{"source":"ahyam.pattabiraman","target":"muthuraj.natarajan"},"alexander.kalinovaky-matthew.coyle":{"source":"alexander.kalinovaky","target":"matthew.coyle"},"hariah.balivada-ramanathan.raman":{"source":"hariah.balivada","target":"ramanathan.raman"},"abidali.neemuchwala-bhanumurthy.ballapuram":{"source":"abidali.neemuchwala","target":"bhanumurthy.ballapuram"},"phil.dunmore-kria.denton":{"source":"phil.dunmore","target":"kria.denton"},"anuj.bhalla-rameah.padmanabhan":{"source":"anuj.bhalla","target":"rameah.padmanabhan"},"amitava.chell-manu.tayal":{"source":"amitava.chell","target":"manu.tayal"},"ranjith.tulichery-barbara.85":{"source":"ranjith.tulichery","target":"barbara.85"},"raghavendra.rao8qm-ramya.nedumaran":{"source":"raghavendra.rao8qm","target":"ramya.nedumaran"},"prem.manickavelu-ajit.vargheae":{"source":"prem.manickavelu","target":"ajit.vargheae"},"avinvah.rao-alexander.kalinovaky":{"source":"avinvah.rao","target":"alexander.kalinovaky"},"auahil.agrawal-aiddarth.ram":{"source":"auahil.agrawal","target":"aiddarth.ram"},"muthuraj.natarajan-raghavendra.rao8qm":{"source":"muthuraj.natarajan","target":"raghavendra.rao8qm"},"abidali.neemuchwala-ahaji.farooq":{"source":"abidali.neemuchwala","target":"ahaji.farooq"},"ayed.rafeeq-arjun.k83":{"source":"ayed.rafeeq","target":"arjun.k83"},"abidali.neemuchwala-jatin.dalal":{"source":"abidali.neemuchwala","target":"jatin.dalal"},"omkar.niaal-hariah.balivada":{"source":"omkar.niaal","target":"hariah.balivada"},"rajan.kohli-phil.dunmore":{"source":"rajan.kohli","target":"phil.dunmore"},"ahyam.pattabiraman-rajeah.aankaranarayanan":{"source":"ahyam.pattabiraman","target":"rajeah.aankaranarayanan"},"jatin.dalal-dipak.bohra":{"source":"jatin.dalal","target":"dipak.bohra"},"arinivvaan.gopalakriahnan-nataraj.aeahadri":{"source":"arinivvaan.gopalakriahnan","target":"nataraj.aeahadri"},"arinivvaan.gopalakriahnan-venkateah.gopalakriahna":{"source":"arinivvaan.gopalakriahnan","target":"venkateah.gopalakriahna"},"nataraj.aeahadri-prem.manickavelu":{"source":"nataraj.aeahadri","target":"prem.manickavelu"},"yathiah.bantra8-aathira.gopinath":{"source":"yathiah.bantra8","target":"aathira.gopinath"},"bhanumurthy.ballapuram-kiran.deaai":{"source":"bhanumurthy.ballapuram","target":"kiran.deaai"},"venkateah.gopalakriahna-gopikriahna.poleahwar":{"source":"venkateah.gopalakriahna","target":"gopikriahna.poleahwar"},"gopikriahna.poleahwar-neeraj.aingh8qm":{"source":"gopikriahna.poleahwar","target":"neeraj.aingh8qm"},"dipak.bohra-arinivvaan.gopalakriahnan":{"source":"dipak.bohra","target":"arinivvaan.gopalakriahnan"},"rajeah.aankaranarayanan-bineeah.balakriahnan":{"source":"rajeah.aankaranarayanan","target":"bineeah.balakriahnan"},"neeraj.aingh8qm-bhagya.boddepalli":{"source":"neeraj.aingh8qm","target":"bhagya.boddepalli"},"kria.denton-brian.nolf":{"source":"kria.denton","target":"brian.nolf"},"neeraj.aingh8qm-ravada.kumar":{"source":"neeraj.aingh8qm","target":"ravada.kumar"},"abidali.neemuchwala-rajan.kohli":{"source":"abidali.neemuchwala","target":"rajan.kohli"},"brian.nolf-amitava.chell":{"source":"brian.nolf","target":"amitava.chell"},"aheril.jain-ahreya.p55":{"source":"aheril.jain","target":"ahreya.p55"},"prem.manickavelu-ranjith.tulichery":{"source":"prem.manickavelu","target":"ranjith.tulichery"},"arinivvaan.gopalakriahnan-ahyam.pattabiraman":{"source":"arinivvaan.gopalakriahnan","target":"ahyam.pattabiraman"}},"name":"How About This","nodes":{"ahanteah.yadwad":{"x":520.5155644793298,"y":600},"omkar.niaal":{"x":756.1638141429831,"y":300},"brian.nolf":{"x":416.57307727804925,"y":500},"ahreya.p55":{"x":798.4850162858246,"y":600},"manu.tayal":{"x":497.19721494105676,"y":700},"ahyam.pattabiraman":{"x":1106.9102168834074,"y":500},"navneet.khandelwal":{"x":576.303667727991,"y":300},"bineeah.balakriahnan":{"x":1033.0039478504302,"y":700},"amitava.chell":{"x":610.503318456135,"y":600},"bhanumurthy.ballapuram":{"x":582.1750359217907,"y":200},"yathiah.bantra8":{"x":1003.9518144491102,"y":800},"barbara.85":{"x":608.03624284878,"y":800},"arjun.k83":{"x":686.0176469847098,"y":800},"venkateah.gopalakriahna":{"x":1009.9991512250125,"y":500},"ranjith.tulichery":{"x":581.1578525118115,"y":700},"rameah.padmanabhan":{"x":506.5276010610886,"y":500},"abidali.neemuchwala":{"x":739.6037997918517,"y":100},"jatin.dalal":{"x":679.1660266593813,"y":200},"neeraj.aingh8qm":{"x":846.0535180238695,"y":700},"ahaji.farooq":{"x":783.2491342466277,"y":200},"ayed.rafeeq":{"x":749.1027906418543,"y":700},"dipak.bohra":{"x":943.0406819981263,"y":300},"anuj.bhalla":{"x":452.1742042952485,"y":400},"aathira.gopinath":{"x":933.8595876715616,"y":900},"aheril.jain":{"x":674.3751102633943,"y":500},"arinivvaan.gopalakriahnan":{"x":1005.8566402580211,"y":400},"ramanathan.raman":{"x":758.2052417004057,"y":500},"avinvah.rao":{"x":666.274587781105,"y":300},"kria.denton":{"x":542.1238846129149,"y":400},"alexander.kalinovaky":{"x":632.0615870174113,"y":400},"gopikriahna.poleahwar":{"x":1062.43242299878,"y":600},"nataraj.aeahadri":{"x":842.1360341803995,"y":500},"bhagya.boddepalli":{"x":763.9958427693921,"y":800},"rajan.kohli":{"x":880.2341971333599,"y":200},"rajeah.aankaranarayanan":{"x":882.4586132804886,"y":600},"ajit.vargheae":{"x":665.108466590697,"y":700},"kiran.deaai":{"x":486.3503458186978,"y":300},"ramya.nedumaran":{"x":919.971398912016,"y":800},"hariah.balivada":{"x":901.9302025278001,"y":400},"muthuraj.natarajan":{"x":972.452533218198,"y":600},"auahil.agrawal":{"x":721.9989347310707,"y":400},"ravada.kumar":{"x":841.9766681119453,"y":800},"raghavendra.rao8qm":{"x":943.0232294694479,"y":700},"aiddarth.ram":{"x":926.1303345729988,"y":500},"ahiraendu.deb":{"x":811.9928548810749,"y":400},"prem.manickavelu":{"x":707.4967594108919,"y":600},"matthew.coyle":{"x":590.4487875264432,"y":500},"phil.dunmore":{"x":846.047234652399,"y":300}},"userState":{"autoConnectivity":"in","autoScale":"linear","alphaTarget":0,"bidirectionalLinks":true,"cascadingCollapse":false,"currentNode":null,"filters":[{"attributes":[],"types":{}}],"forceChargeStrength":0.1,"forceGravityX":0.1,"forceGravityY":0.5,"forceLinkDistance":20,"forceLinkStrength":0.5,"forceVelocityDecay":0.9,"gravityPoints":{},"levelFilter":-1,"linkType":"path","nodeSizingAutomatic":true,"renderOnEveryTick":true,"runSimulation":true,"scale":3,"separationDistance":30,"showLinkLabels":false,"showNodeLabels":true,"treeMode":true,"traverseDepth":3}}]}
},{}],320:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sideLength = 600;
const constants = {
    baseColor: "#000000",
    canvasContext: "2d",
    center: sideLength / 2,
    fenceRadius: sideLength * 5 / 12,
    fontColor: "#888888",
    lineWidth: 5,
    middleCircleColor: "#005500",
    middleCircleRadius: sideLength / 6,
    outerCircleColor: "#009900",
    outerCircleRadius: sideLength / 10,
    sideLength,
};
exports.default = Object.freeze(constants);

},{}],321:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const constants_1 = require("./constants");
function _drawCircle(c, drawing, cir) {
    const context = c.getContext(constants_1.default.canvasContext);
    context.beginPath();
    context.arc(cir.center.x, cir.center.y, cir.radius - constants_1.default.lineWidth, 0, 2 * Math.PI);
    context.fillStyle = constants_1.default.baseColor;
    if (drawing) {
        context.fillStyle = drawing.color;
    }
    context.fill();
    context.lineWidth = constants_1.default.lineWidth;
    context.strokeStyle = constants_1.default.baseColor;
    context.stroke();
    context.font = "30px Arial";
    context.fillStyle = constants_1.default.fontColor;
    context.fillText(cir.name, cir.center.x, cir.center.y);
}
function _drawLine(c, drawing, point1, point2) {
    const context = c.getContext(constants_1.default.canvasContext);
    context.beginPath();
    context.lineWidth = constants_1.default.lineWidth;
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.strokeStyle = constants_1.default.baseColor;
    if (drawing) {
        context.strokeStyle = drawing.color;
    }
    context.stroke();
}
function _connectCircles(c, circle1, circle2, drawing) {
    line(c, drawing, circle1.center, circle2.center);
}
const circle = ramda_1.curry(_drawCircle);
exports.circle = circle;
const line = ramda_1.curry(_drawLine);
exports.line = line;
const connectCircles = ramda_1.curry(_connectCircles);
exports.connectCircles = connectCircles;
function clearCanvas(canvas) {
    canvas.getContext("2d").clearRect(0, 0, constants_1.default.sideLength, constants_1.default.sideLength);
}
exports.clearCanvas = clearCanvas;

},{"./constants":320,"ramda":1}],322:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
function getSideLength(numberOfSides, radius) {
    const exteriorAngle = 360 / numberOfSides;
    const interiorAngle = 180 - exteriorAngle;
    const triangleBaseAngle = interiorAngle / 2;
    const angleInRadians = convertDegreesToRadians(triangleBaseAngle);
    const halfSide = radius / Math.tan(angleInRadians);
    return 2 * halfSide;
}
exports.getSideLength = getSideLength;
function translateCirclePoints(dimensions, circles) {
    const center = {
        x: dimensions.x / 2,
        y: dimensions.y / 2,
    };
    return circles.map((circle) => ramda_1.merge(circle, { center: { x: circle.center.x + center.x, y: circle.center.y + center.y } }));
}
exports.translateCirclePoints = translateCirclePoints;
function convertDegreesToRadians(angle) {
    return angle * 2 * Math.PI / 360;
}
exports.convertDegreesToRadians = convertDegreesToRadians;
function getCartesianCoordinates(polar) {
    const radians = convertDegreesToRadians(polar.theta);
    const x = polar.r * Math.cos(radians);
    const y = polar.r * Math.sin(radians);
    return { x, y };
}
exports.getCartesianCoordinates = getCartesianCoordinates;
function isOnCenter(x, y) {
    return (cir) => Math.pow(cir.center.x - x, 2) + Math.pow(cir.center.y - y, 2) < Math.pow(cir.radius, 2);
}
exports.isOnCenter = isOnCenter;

},{"ramda":1}],323:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTransformedTwiglet(webTwiglet) {
    const allNodesObject = {};
    webTwiglet.nodes.forEach((node) => {
        allNodesObject[node.id] = node;
    });
    const allLinksObject = {};
    const linkSourceMap = {};
    const linkTargetMap = {};
    webTwiglet.links.forEach((link) => {
        const newLink = {
            id: link.id,
            source: allNodesObject[link.source],
            target: allNodesObject[link.target],
        };
        allLinksObject[link.id] = newLink;
        if (newLink.source && newLink.target) {
            if (!linkSourceMap[newLink.source.id]) {
                linkSourceMap[newLink.source.id] = [newLink.id];
            }
            else {
                linkSourceMap[newLink.source.id].push(newLink.id);
            }
            if (!linkTargetMap[newLink.target.id]) {
                linkTargetMap[newLink.target.id] = [newLink.id];
            }
            else {
                linkTargetMap[newLink.target.id].push(newLink.id);
            }
        }
        return newLink;
    });
    const twiglet = {
        links: allLinksObject,
        nodes: allNodesObject,
        sourceMap: linkSourceMap,
        targetMap: linkTargetMap,
    };
    setDepths(twiglet);
    return twiglet;
}
exports.getTransformedTwiglet = getTransformedTwiglet;
function setDepths(twiglet) {
    let currentLayer = Reflect.ownKeys(twiglet.nodes)
        .filter((node) => twiglet.sourceMap[node] && !twiglet.targetMap[node])
        .map((nodeId) => twiglet.nodes[nodeId]);
    let nextLayer = [];
    let layer = 0;
    while (currentLayer.length) {
        const node = currentLayer.shift();
        if (node && !node.depth) {
            node.depth = layer;
            (twiglet.sourceMap[node.id] || [])
                .forEach((linkId) => {
                const target = twiglet.links[linkId].target;
                nextLayer.push(target);
            });
        }
        if (currentLayer.length === 0 && nextLayer.length > 0) {
            layer += 1;
            currentLayer = nextLayer.map((n) => n);
            nextLayer = [];
        }
    }
}

},{}],324:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const Draw = require("./drawing");
const geometry_1 = require("./geometry");
function getOuterCircles(constants, twiglet, source) {
    const outerNodes = getOuterNodes(twiglet, source);
    const circleOfCircles = getCircleInACircle(outerNodes.length, constants.fenceRadius, constants.outerCircleRadius);
    return circleOfCircles
        .map((circle, index) => ramda_1.merge(circle, { name: outerNodes[index].name, id: outerNodes[index].id }))
        .map((circle) => ramda_1.merge(circle, {
        center: {
            x: circle.center.x + constants.center,
            y: circle.center.y + constants.center,
        },
    }));
}
exports.getOuterCircles = getOuterCircles;
function addEventListeners(constants, canvas, twiglet, rootCircles, centerCircle) {
    const listener = canvas.addEventListener("click", function _handler(mouseEvent) {
        const clickedCircle = rootCircles.filter(geometry_1.isOnCenter(mouseEvent.x, mouseEvent.y))[0];
        if (clickedCircle) {
            handleOutsideCircleClick(constants, canvas, _handler, twiglet, clickedCircle);
        }
        else if (centerCircle && geometry_1.isOnCenter(mouseEvent.x, mouseEvent.y)(centerCircle)) {
            const linkId = twiglet.targetMap[centerCircle.id] ? twiglet.targetMap[centerCircle.id][0] : undefined;
            Draw.clearCanvas(canvas);
            canvas.removeEventListener("click", _handler);
            if (linkId) {
                goOneLevelUp(constants, canvas, twiglet, linkId);
            }
            else {
                const outerCircles = getOuterCircles(constants, twiglet);
                if (outerCircles.length === 1) {
                    drawSetOfCircles(constants, canvas, twiglet, outerCircles[0]);
                }
                else {
                    drawBaseLevel(constants, canvas, twiglet);
                }
            }
        }
    });
}
exports.addEventListeners = addEventListeners;
function drawBaseLevel(constants, canvas, twiglet) {
    const childCircles = getOuterCircles(constants, twiglet);
    childCircles.forEach(Draw.circle(canvas, { color: "#008800" }));
    addEventListeners(constants, canvas, twiglet, childCircles);
}
exports.drawBaseLevel = drawBaseLevel;
function drawSetOfCircles(constants, canvas, twiglet, centerCircle) {
    const childCircles = getOuterCircles(constants, twiglet, centerCircle.id);
    if (childCircles.length > 0) {
        Draw.clearCanvas(canvas);
        childCircles.forEach(Draw.circle(canvas, { color: "#008800" }));
        const newCenter = ramda_1.merge(centerCircle, { center: { x: constants.center, y: constants.center }, radius: constants.middleCircleRadius });
        Draw.circle(canvas, { color: "#004400" }, newCenter);
        childCircles.forEach(Draw.connectCircles(canvas, newCenter));
        addEventListeners(constants, canvas, twiglet, childCircles, newCenter);
        return true;
    }
    return false;
}
exports.drawSetOfCircles = drawSetOfCircles;
function getOuterNodes(twiglet, source) {
    let outerNodes;
    if (source) {
        if (twiglet.sourceMap[source]) {
            const linkIds = twiglet.sourceMap[source];
            outerNodes = linkIds.reduce((array, id) => {
                array.push(twiglet.links[id].target);
                return array;
            }, []);
        }
        else {
            return [];
        }
    }
    else {
        outerNodes = Reflect.ownKeys(twiglet.nodes)
            .map((key) => twiglet.nodes[key])
            .filter((cir) => cir.depth === 0);
    }
    return outerNodes;
}
function getCircleInACircle(numberOfCircles, radius, littleRadius) {
    const degreesBetweenCircle = 360 / numberOfCircles;
    const radiusFromCenter = radius - littleRadius;
    return ramda_1.range(0, numberOfCircles)
        .map((interval) => {
        const polar = { r: radiusFromCenter, theta: interval * degreesBetweenCircle + degreesBetweenCircle / 2 };
        return {
            center: geometry_1.getCartesianCoordinates(polar),
            radius: littleRadius,
        };
    });
}
function handleOutsideCircleClick(constants, canvas, handlerFn, twiglet, clickedCircle) {
    const needToRemove = drawSetOfCircles(constants, canvas, twiglet, clickedCircle);
    if (needToRemove) {
        canvas.removeEventListener("click", handlerFn);
    }
}
function goOneLevelUp(constants, canvas, twiglet, linkId) {
    const node = twiglet.links[linkId].source;
    const newCenter = ramda_1.merge(node, { center: { x: constants.center, y: constants.center }, radius: constants.middleCircleRadius });
    const childCircles = getOuterCircles(constants, twiglet, newCenter.id);
    childCircles.forEach(Draw.circle(canvas, { color: "#008800" }));
    Draw.circle(canvas, { color: "#004400" }, newCenter);
    childCircles.forEach(Draw.connectCircles(canvas, newCenter));
    addEventListeners(constants, canvas, twiglet, childCircles, newCenter);
}

},{"./drawing":321,"./geometry":322,"ramda":1}],325:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const data = require("./Emails.json");
const Twiglet = require("./handleTwiglet");
const logic_1 = require("./logic");
function main() {
    const canvas = document.getElementById("c");
    const twiglet = Twiglet.getTransformedTwiglet(data);
    const outerCircles = logic_1.getOuterCircles(constants_1.default, twiglet);
    if (outerCircles.length === 1) {
        logic_1.drawSetOfCircles(constants_1.default, canvas, twiglet, outerCircles[0]);
    }
    else {
        logic_1.drawBaseLevel(constants_1.default, canvas, twiglet);
    }
}
main();

},{"./Emails.json":319,"./constants":320,"./handleTwiglet":323,"./logic":324}]},{},[325])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL0YuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL1QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL19fLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hZGQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FkZEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hZGp1c3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYWxsUGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYWx3YXlzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FueS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYW55UGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FwZXJ0dXJlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hcHBlbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FwcGx5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hcHBseVNwZWMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FzY2VuZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXNzb2MuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Fzc29jUGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYmluYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ib3RoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jYWxsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jaGFpbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY2xhbXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb21wYXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb21wbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb21wb3NlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb21wb3NlSy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY29tcG9zZVAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbmNhdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY29uZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY29uc3RydWN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb25zdHJ1Y3ROLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb250YWlucy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY29udmVyZ2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvdW50QnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2N1cnJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jdXJyeU4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2RlYy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZGVmYXVsdFRvLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kZXNjZW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kaWZmZXJlbmNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kaWZmZXJlbmNlV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZGlzc29jLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kaXNzb2NQYXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kaXZpZGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Ryb3AuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Ryb3BMYXN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kcm9wTGFzdFdoaWxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kcm9wUmVwZWF0cy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZHJvcFJlcGVhdHNXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kcm9wV2hpbGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2VpdGhlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZW1wdHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2VuZHNXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9lcUJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9lcVByb3BzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9lcXVhbHMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2V2b2x2ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9maW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9maW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ZpbmRMYXN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9maW5kTGFzdEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9mbGF0dGVuLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9mbGlwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9mb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9mb3JFYWNoT2JqSW5kZXhlZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZnJvbVBhaXJzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ncm91cEJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ncm91cFdpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2d0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ndGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaGFzSW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2hlYWQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lkZW50aWNhbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lmRWxzZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW5jLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbmRleEJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbmRleE9mLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbml0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbm5lckpvaW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2luc2VydC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW5zZXJ0QWxsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fU2V0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fYXBlcnR1cmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19hcml0eS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2FycmF5RnJvbUl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2Nsb25lUmVnRXhwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY29tcGxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2NvbmNhdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2NvbnRhaW5zLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY29udGFpbnNXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTEuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeU4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19kaXNwYXRjaGFibGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19kcm9wTGFzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2Ryb3BMYXN0V2hpbGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19lcXVhbHMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19maWx0ZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19mbGF0Q2F0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fZm9yY2VSZWR1Y2VkLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fZnVuY3Rpb25OYW1lLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faGFzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pbmRleE9mLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNBcmd1bWVudHMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNBcnJheUxpa2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc0Z1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNJbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNOdW1iZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc09iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzUGxhY2Vob2xkZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc1JlZ0V4cC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNUcmFuc2Zvcm1lci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX21ha2VGbGF0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fbWFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fb2JqZWN0QXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fb2YuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19waXBlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fcGlwZVAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19xdW90ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3JlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3JlZHVjZWQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19zdGVwQ2F0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fdG9JU09TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL190b1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hhbGwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194YW55LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGFwZXJ0dXJlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGNoYWluLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGRyb3AuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZHJvcExhc3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZHJvcExhc3RXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hkcm9wUmVwZWF0c1dpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZHJvcFdoaWxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZCYXNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kTGFzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kTGFzdEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hyZWR1Y2VCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3h0YWtlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feHRha2VXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3h3cmFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcnNlY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVyc2VjdGlvbldpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVyc3BlcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRvLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnZlcnQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludmVydE9iai5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW52b2tlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lzRW1wdHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lzTmlsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9qb2luLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9qdXh0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9rZXlzSW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2xhc3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2xhc3RJbmRleE9mLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2xlbnMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2xlbnNJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbGVuc1BhdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2xlbnNQcm9wLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9saWZ0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9saWZ0Ti5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbHQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2x0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tYXBBY2N1bS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWFwQWNjdW1SaWdodC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWFwT2JqSW5kZXhlZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWF0Y2guanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21hdGhNb2QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21heC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWF4QnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lYW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lZGlhbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWVtb2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWVtb2l6ZVdpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tZXJnZUFsbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWVyZ2VEZWVwTGVmdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWVyZ2VEZWVwUmlnaHQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lcmdlRGVlcFdpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lcmdlRGVlcFdpdGhLZXkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lcmdlV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWVyZ2VXaXRoS2V5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9taW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21pbkJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tb2R1bG8uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9uQXJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL25vbmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL25vdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbnRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9udGhBcmcuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL28uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL29iak9mLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9vZi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvb21pdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvb25jZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvb3IuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL292ZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhaXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhcnRpYWwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhcnRpYWxSaWdodC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGFydGl0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wYXRoRXEuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhdGhPci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGF0aFNhdGlzZmllcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGljay5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGlja0FsbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGlja0J5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waXBlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waXBlSy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGlwZVAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BsdWNrLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcmVwZW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9kdWN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9qZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wRXEuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3BJcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcHJvcE9yLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wU2F0aXNmaWVzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmFuZ2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3JlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVkdWNlQnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3JlZHVjZVJpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZWR1Y2VXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVkdWNlZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVqZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZW1vdmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3JlcGVhdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVwbGFjZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmV2ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc2Nhbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc2VxdWVuY2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc2xpY2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NvcnQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NvcnRCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc29ydFdpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NwbGl0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zcGxpdEF0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zcGxpdEV2ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zcGxpdFdoZW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3N0YXJ0c1dpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zdW0uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3N5bW1ldHJpY0RpZmZlcmVuY2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3N5bW1ldHJpY0RpZmZlcmVuY2VXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90YWlsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90YWtlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90YWtlTGFzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdGFrZUxhc3RXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdGFrZVdoaWxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90YXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Rlc3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RpbWVzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90b0xvd2VyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90b1BhaXJzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90b1BhaXJzSW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90b1VwcGVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90cmFuc2R1Y2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdHJhdmVyc2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RyaW0uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RyeUNhdGNoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90eXBlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmFwcGx5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5jdXJyeU4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VuZm9sZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5pb24uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VuaW9uV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5pcS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5pcUJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmlxV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5sZXNzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bm5lc3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VudGlsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91cGRhdGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VzZVdpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3ZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdmFsdWVzSW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3ZpZXcuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3doZW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3doZXJlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy93aGVyZUVxLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy93aXRob3V0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy94cHJvZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvemlwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy96aXBPYmouanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3ppcFdpdGguanMiLCJzcmMvRW1haWxzLmpzb24iLCJzcmMvY29uc3RhbnRzLnRzIiwic3JjL2RyYXdpbmcudHMiLCJzcmMvZ2VvbWV0cnkudHMiLCJzcmMvaGFuZGxlVHdpZ2xldC50cyIsInNyYy9sb2dpYy50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBOzs7O0FDR0EsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBRXZCLE1BQU0sU0FBUyxHQUFlO0lBQzVCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLE1BQU0sRUFBRSxVQUFVLEdBQUcsQ0FBQztJQUN0QixXQUFXLEVBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ2hDLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFNBQVMsRUFBRSxDQUFDO0lBQ1osaUJBQWlCLEVBQUUsU0FBUztJQUM1QixrQkFBa0IsRUFBRSxVQUFVLEdBQUcsQ0FBQztJQUNsQyxnQkFBZ0IsRUFBRSxTQUFTO0lBQzNCLGlCQUFpQixFQUFFLFVBQVUsR0FBRyxFQUFFO0lBQ2xDLFVBQVU7Q0FDWCxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7QUNuQnhDLGlDQUE4QjtBQUM5QiwyQ0FBb0M7QUFHcEMscUJBQXFCLENBQW9CLEVBQUUsT0FBaUIsRUFBRSxHQUFZO0lBQ3hFLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQVMsQ0FBQyxhQUFhLENBQTZCLENBQUM7SUFDbEYsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxtQkFBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRixPQUFPLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLE9BQU8sQ0FBQyxTQUFTLEdBQUcsbUJBQVMsQ0FBQyxTQUFTLENBQUM7SUFDeEMsT0FBTyxDQUFDLFdBQVcsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQztJQUMxQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsT0FBTyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV6RCxDQUFDO0FBRUQsbUJBQW1CLENBQW9CLEVBQUUsT0FBaUIsRUFBRSxNQUFjLEVBQUUsTUFBYztJQUN4RixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFTLENBQUMsYUFBYSxDQUE2QixDQUFDO0lBQ2xGLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQixPQUFPLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxPQUFPLENBQUMsV0FBVyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWixPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRUQseUJBQXlCLENBQW9CLEVBQUUsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLE9BQWlCO0lBQ2xHLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFTaEMsd0JBQU07QUFSUixNQUFNLElBQUksR0FBRyxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFVNUIsb0JBQUk7QUFUTixNQUFNLGNBQWMsR0FBRyxhQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFRNUMsd0NBQWM7QUFOaEIscUJBQTRCLE1BQXlCO0lBQ25ELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsbUJBQVMsQ0FBQyxVQUFVLEVBQUUsbUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBRkQsa0NBRUM7Ozs7O0FDN0NELGlDQUE0QztBQVM1Qyx1QkFBOEIsYUFBcUIsRUFBRSxNQUFjO0lBQ2pFLE1BQU0sYUFBYSxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUM7SUFDMUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUMxQyxNQUFNLGlCQUFpQixHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDNUMsTUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUN0QixDQUFDO0FBUEQsc0NBT0M7QUFFRCwrQkFBc0MsVUFBdUIsRUFBRSxPQUFrQjtJQUMvRSxNQUFNLE1BQU0sR0FBRztRQUNiLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNwQixDQUFDO0lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQ3hCLGFBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pHLENBQUM7QUFQRCxzREFPQztBQUVELGlDQUF3QyxLQUFhO0lBQ25ELE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ25DLENBQUM7QUFGRCwwREFFQztBQUVELGlDQUF3QyxLQUFhO0lBQ25ELE1BQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNsQixDQUFDO0FBTEQsMERBS0M7QUFFRCxvQkFBMkIsQ0FBUyxFQUFFLENBQVM7SUFDN0MsTUFBTSxDQUFDLENBQUMsR0FBWSxLQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUhELGdDQUdDOzs7OztBQ3RDRCwrQkFBc0MsVUFBMkI7SUFDL0QsTUFBTSxjQUFjLEdBQStCLEVBQUUsQ0FBQztJQUV0RCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUk7UUFDNUIsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFHSCxNQUFNLGNBQWMsR0FBNkIsRUFBRSxDQUFDO0lBQ3BELE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztJQUNuQyxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7SUFFbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFrQjtRQUMxQyxNQUFNLE9BQU8sR0FBVTtZQUNyQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxNQUFNLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BDLENBQUM7UUFDRixjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxHQUFhO1FBQ3hCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFNBQVMsRUFBRSxhQUFhO0tBQ3pCLENBQUM7SUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBNUNELHNEQTRDQztBQUVELG1CQUFtQixPQUFpQjtJQUNsQyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDeEIsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEUsSUFBSSxTQUFTLEdBQWMsRUFBRSxDQUFDO0lBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDakMsT0FBTyxDQUFDLENBQUMsTUFBTTtnQkFDZCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLFlBQVksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDOzs7OztBQ3ZFRCxpQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLHlDQUFpRTtBQUdqRSx5QkFBZ0MsU0FBcUIsRUFBRSxPQUFpQixFQUFFLE1BQWU7SUFDdkYsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxNQUFNLGVBQWUsR0FDbkIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sQ0FBQyxlQUFlO1NBQ3JCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssYUFBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssYUFBSyxDQUNwQixNQUFNLEVBQ047UUFDRSxNQUFNLEVBQUU7WUFDTixDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU07WUFDckMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNO1NBQ3RDO0tBQ0YsQ0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBZkQsMENBZUM7QUFFRCwyQkFDSSxTQUFxQixFQUNyQixNQUF5QixFQUN6QixPQUFpQixFQUNqQixXQUFzQixFQUN0QixZQUFzQjtJQUN4QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGtCQUFrQixVQUFVO1FBQzVFLE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsd0JBQXdCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLHFCQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUN0RyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sYUFBYSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTFCRCw4Q0EwQkM7QUFFRCx1QkFBOEIsU0FBcUIsRUFBRSxNQUF5QixFQUFFLE9BQWlCO0lBQy9GLE1BQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUpELHNDQUlDO0FBRUQsMEJBQ0ksU0FBcUIsRUFDckIsTUFBeUIsRUFDekIsT0FBaUIsRUFDakIsWUFBcUI7SUFDdkIsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sU0FBUyxHQUFHLGFBQUssQ0FDckIsWUFBWSxFQUNaLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQy9GLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsaUJBQWlCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUM7QUFuQkQsNENBbUJDO0FBRUQsdUJBQXVCLE9BQWlCLEVBQUUsTUFBZTtJQUN2RCxJQUFJLFVBQXFCLENBQUM7SUFDMUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQzVCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRCw0QkFBNEIsZUFBdUIsRUFBRSxNQUFjLEVBQUUsWUFBb0I7SUFDdkYsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDO0lBQ25ELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLFlBQVksQ0FBQztJQUMvQyxNQUFNLENBQUMsYUFBSyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUM7U0FDL0IsR0FBRyxDQUFDLENBQUMsUUFBUTtRQUNaLE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxRQUFRLEdBQUcsb0JBQW9CLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDakgsTUFBTSxDQUFDO1lBQ0wsTUFBTSxFQUFFLGtDQUF1QixDQUFFLEtBQUssQ0FBRTtZQUN4QyxNQUFNLEVBQUUsWUFBWTtTQUNyQixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsa0NBQ0ksU0FBcUIsRUFDckIsTUFBeUIsRUFDekIsU0FBb0UsRUFDcEUsT0FBaUIsRUFDakIsYUFBc0I7SUFDeEIsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakYsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7QUFDSCxDQUFDO0FBRUQsc0JBQXNCLFNBQXFCLEVBQUUsTUFBeUIsRUFBRSxPQUFpQixFQUFFLE1BQWM7SUFDdkcsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUMsTUFBTSxTQUFTLEdBQ2IsYUFBSyxDQUNILElBQUksRUFDSixFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUMvRixDQUFDO0lBQ0osTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3RCxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekUsQ0FBQzs7Ozs7QUN0SUQsMkNBQW9DO0FBRXBDLHNDQUFzQztBQUN0QywyQ0FBMkM7QUFFM0MsbUNBQTJFO0FBRTNFO0lBQ0UsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQXNCLENBQUM7SUFFakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQXVCLENBQUMsQ0FBQztJQUN2RSxNQUFNLFlBQVksR0FBRyx1QkFBZSxDQUFDLG1CQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLHdCQUFnQixDQUFDLG1CQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixxQkFBYSxDQUFDLG1CQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7QUFDSCxDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEY6IHJlcXVpcmUoJy4vc3JjL0YnKSxcbiAgVDogcmVxdWlyZSgnLi9zcmMvVCcpLFxuICBfXzogcmVxdWlyZSgnLi9zcmMvX18nKSxcbiAgYWRkOiByZXF1aXJlKCcuL3NyYy9hZGQnKSxcbiAgYWRkSW5kZXg6IHJlcXVpcmUoJy4vc3JjL2FkZEluZGV4JyksXG4gIGFkanVzdDogcmVxdWlyZSgnLi9zcmMvYWRqdXN0JyksXG4gIGFsbDogcmVxdWlyZSgnLi9zcmMvYWxsJyksXG4gIGFsbFBhc3M6IHJlcXVpcmUoJy4vc3JjL2FsbFBhc3MnKSxcbiAgYWx3YXlzOiByZXF1aXJlKCcuL3NyYy9hbHdheXMnKSxcbiAgYW5kOiByZXF1aXJlKCcuL3NyYy9hbmQnKSxcbiAgYW55OiByZXF1aXJlKCcuL3NyYy9hbnknKSxcbiAgYW55UGFzczogcmVxdWlyZSgnLi9zcmMvYW55UGFzcycpLFxuICBhcDogcmVxdWlyZSgnLi9zcmMvYXAnKSxcbiAgYXBlcnR1cmU6IHJlcXVpcmUoJy4vc3JjL2FwZXJ0dXJlJyksXG4gIGFwcGVuZDogcmVxdWlyZSgnLi9zcmMvYXBwZW5kJyksXG4gIGFwcGx5OiByZXF1aXJlKCcuL3NyYy9hcHBseScpLFxuICBhcHBseVNwZWM6IHJlcXVpcmUoJy4vc3JjL2FwcGx5U3BlYycpLFxuICBhc2NlbmQ6IHJlcXVpcmUoJy4vc3JjL2FzY2VuZCcpLFxuICBhc3NvYzogcmVxdWlyZSgnLi9zcmMvYXNzb2MnKSxcbiAgYXNzb2NQYXRoOiByZXF1aXJlKCcuL3NyYy9hc3NvY1BhdGgnKSxcbiAgYmluYXJ5OiByZXF1aXJlKCcuL3NyYy9iaW5hcnknKSxcbiAgYmluZDogcmVxdWlyZSgnLi9zcmMvYmluZCcpLFxuICBib3RoOiByZXF1aXJlKCcuL3NyYy9ib3RoJyksXG4gIGNhbGw6IHJlcXVpcmUoJy4vc3JjL2NhbGwnKSxcbiAgY2hhaW46IHJlcXVpcmUoJy4vc3JjL2NoYWluJyksXG4gIGNsYW1wOiByZXF1aXJlKCcuL3NyYy9jbGFtcCcpLFxuICBjbG9uZTogcmVxdWlyZSgnLi9zcmMvY2xvbmUnKSxcbiAgY29tcGFyYXRvcjogcmVxdWlyZSgnLi9zcmMvY29tcGFyYXRvcicpLFxuICBjb21wbGVtZW50OiByZXF1aXJlKCcuL3NyYy9jb21wbGVtZW50JyksXG4gIGNvbXBvc2U6IHJlcXVpcmUoJy4vc3JjL2NvbXBvc2UnKSxcbiAgY29tcG9zZUs6IHJlcXVpcmUoJy4vc3JjL2NvbXBvc2VLJyksXG4gIGNvbXBvc2VQOiByZXF1aXJlKCcuL3NyYy9jb21wb3NlUCcpLFxuICBjb25jYXQ6IHJlcXVpcmUoJy4vc3JjL2NvbmNhdCcpLFxuICBjb25kOiByZXF1aXJlKCcuL3NyYy9jb25kJyksXG4gIGNvbnN0cnVjdDogcmVxdWlyZSgnLi9zcmMvY29uc3RydWN0JyksXG4gIGNvbnN0cnVjdE46IHJlcXVpcmUoJy4vc3JjL2NvbnN0cnVjdE4nKSxcbiAgY29udGFpbnM6IHJlcXVpcmUoJy4vc3JjL2NvbnRhaW5zJyksXG4gIGNvbnZlcmdlOiByZXF1aXJlKCcuL3NyYy9jb252ZXJnZScpLFxuICBjb3VudEJ5OiByZXF1aXJlKCcuL3NyYy9jb3VudEJ5JyksXG4gIGN1cnJ5OiByZXF1aXJlKCcuL3NyYy9jdXJyeScpLFxuICBjdXJyeU46IHJlcXVpcmUoJy4vc3JjL2N1cnJ5TicpLFxuICBkZWM6IHJlcXVpcmUoJy4vc3JjL2RlYycpLFxuICBkZWZhdWx0VG86IHJlcXVpcmUoJy4vc3JjL2RlZmF1bHRUbycpLFxuICBkZXNjZW5kOiByZXF1aXJlKCcuL3NyYy9kZXNjZW5kJyksXG4gIGRpZmZlcmVuY2U6IHJlcXVpcmUoJy4vc3JjL2RpZmZlcmVuY2UnKSxcbiAgZGlmZmVyZW5jZVdpdGg6IHJlcXVpcmUoJy4vc3JjL2RpZmZlcmVuY2VXaXRoJyksXG4gIGRpc3NvYzogcmVxdWlyZSgnLi9zcmMvZGlzc29jJyksXG4gIGRpc3NvY1BhdGg6IHJlcXVpcmUoJy4vc3JjL2Rpc3NvY1BhdGgnKSxcbiAgZGl2aWRlOiByZXF1aXJlKCcuL3NyYy9kaXZpZGUnKSxcbiAgZHJvcDogcmVxdWlyZSgnLi9zcmMvZHJvcCcpLFxuICBkcm9wTGFzdDogcmVxdWlyZSgnLi9zcmMvZHJvcExhc3QnKSxcbiAgZHJvcExhc3RXaGlsZTogcmVxdWlyZSgnLi9zcmMvZHJvcExhc3RXaGlsZScpLFxuICBkcm9wUmVwZWF0czogcmVxdWlyZSgnLi9zcmMvZHJvcFJlcGVhdHMnKSxcbiAgZHJvcFJlcGVhdHNXaXRoOiByZXF1aXJlKCcuL3NyYy9kcm9wUmVwZWF0c1dpdGgnKSxcbiAgZHJvcFdoaWxlOiByZXF1aXJlKCcuL3NyYy9kcm9wV2hpbGUnKSxcbiAgZWl0aGVyOiByZXF1aXJlKCcuL3NyYy9laXRoZXInKSxcbiAgZW1wdHk6IHJlcXVpcmUoJy4vc3JjL2VtcHR5JyksXG4gIGVuZHNXaXRoOiByZXF1aXJlKCcuL3NyYy9lbmRzV2l0aCcpLFxuICBlcUJ5OiByZXF1aXJlKCcuL3NyYy9lcUJ5JyksXG4gIGVxUHJvcHM6IHJlcXVpcmUoJy4vc3JjL2VxUHJvcHMnKSxcbiAgZXF1YWxzOiByZXF1aXJlKCcuL3NyYy9lcXVhbHMnKSxcbiAgZXZvbHZlOiByZXF1aXJlKCcuL3NyYy9ldm9sdmUnKSxcbiAgZmlsdGVyOiByZXF1aXJlKCcuL3NyYy9maWx0ZXInKSxcbiAgZmluZDogcmVxdWlyZSgnLi9zcmMvZmluZCcpLFxuICBmaW5kSW5kZXg6IHJlcXVpcmUoJy4vc3JjL2ZpbmRJbmRleCcpLFxuICBmaW5kTGFzdDogcmVxdWlyZSgnLi9zcmMvZmluZExhc3QnKSxcbiAgZmluZExhc3RJbmRleDogcmVxdWlyZSgnLi9zcmMvZmluZExhc3RJbmRleCcpLFxuICBmbGF0dGVuOiByZXF1aXJlKCcuL3NyYy9mbGF0dGVuJyksXG4gIGZsaXA6IHJlcXVpcmUoJy4vc3JjL2ZsaXAnKSxcbiAgZm9yRWFjaDogcmVxdWlyZSgnLi9zcmMvZm9yRWFjaCcpLFxuICBmb3JFYWNoT2JqSW5kZXhlZDogcmVxdWlyZSgnLi9zcmMvZm9yRWFjaE9iakluZGV4ZWQnKSxcbiAgZnJvbVBhaXJzOiByZXF1aXJlKCcuL3NyYy9mcm9tUGFpcnMnKSxcbiAgZ3JvdXBCeTogcmVxdWlyZSgnLi9zcmMvZ3JvdXBCeScpLFxuICBncm91cFdpdGg6IHJlcXVpcmUoJy4vc3JjL2dyb3VwV2l0aCcpLFxuICBndDogcmVxdWlyZSgnLi9zcmMvZ3QnKSxcbiAgZ3RlOiByZXF1aXJlKCcuL3NyYy9ndGUnKSxcbiAgaGFzOiByZXF1aXJlKCcuL3NyYy9oYXMnKSxcbiAgaGFzSW46IHJlcXVpcmUoJy4vc3JjL2hhc0luJyksXG4gIGhlYWQ6IHJlcXVpcmUoJy4vc3JjL2hlYWQnKSxcbiAgaWRlbnRpY2FsOiByZXF1aXJlKCcuL3NyYy9pZGVudGljYWwnKSxcbiAgaWRlbnRpdHk6IHJlcXVpcmUoJy4vc3JjL2lkZW50aXR5JyksXG4gIGlmRWxzZTogcmVxdWlyZSgnLi9zcmMvaWZFbHNlJyksXG4gIGluYzogcmVxdWlyZSgnLi9zcmMvaW5jJyksXG4gIGluZGV4Qnk6IHJlcXVpcmUoJy4vc3JjL2luZGV4QnknKSxcbiAgaW5kZXhPZjogcmVxdWlyZSgnLi9zcmMvaW5kZXhPZicpLFxuICBpbml0OiByZXF1aXJlKCcuL3NyYy9pbml0JyksXG4gIGlubmVySm9pbjogcmVxdWlyZSgnLi9zcmMvaW5uZXJKb2luJyksXG4gIGluc2VydDogcmVxdWlyZSgnLi9zcmMvaW5zZXJ0JyksXG4gIGluc2VydEFsbDogcmVxdWlyZSgnLi9zcmMvaW5zZXJ0QWxsJyksXG4gIGludGVyc2VjdGlvbjogcmVxdWlyZSgnLi9zcmMvaW50ZXJzZWN0aW9uJyksXG4gIGludGVyc2VjdGlvbldpdGg6IHJlcXVpcmUoJy4vc3JjL2ludGVyc2VjdGlvbldpdGgnKSxcbiAgaW50ZXJzcGVyc2U6IHJlcXVpcmUoJy4vc3JjL2ludGVyc3BlcnNlJyksXG4gIGludG86IHJlcXVpcmUoJy4vc3JjL2ludG8nKSxcbiAgaW52ZXJ0OiByZXF1aXJlKCcuL3NyYy9pbnZlcnQnKSxcbiAgaW52ZXJ0T2JqOiByZXF1aXJlKCcuL3NyYy9pbnZlcnRPYmonKSxcbiAgaW52b2tlcjogcmVxdWlyZSgnLi9zcmMvaW52b2tlcicpLFxuICBpczogcmVxdWlyZSgnLi9zcmMvaXMnKSxcbiAgaXNFbXB0eTogcmVxdWlyZSgnLi9zcmMvaXNFbXB0eScpLFxuICBpc05pbDogcmVxdWlyZSgnLi9zcmMvaXNOaWwnKSxcbiAgam9pbjogcmVxdWlyZSgnLi9zcmMvam9pbicpLFxuICBqdXh0OiByZXF1aXJlKCcuL3NyYy9qdXh0JyksXG4gIGtleXM6IHJlcXVpcmUoJy4vc3JjL2tleXMnKSxcbiAga2V5c0luOiByZXF1aXJlKCcuL3NyYy9rZXlzSW4nKSxcbiAgbGFzdDogcmVxdWlyZSgnLi9zcmMvbGFzdCcpLFxuICBsYXN0SW5kZXhPZjogcmVxdWlyZSgnLi9zcmMvbGFzdEluZGV4T2YnKSxcbiAgbGVuZ3RoOiByZXF1aXJlKCcuL3NyYy9sZW5ndGgnKSxcbiAgbGVuczogcmVxdWlyZSgnLi9zcmMvbGVucycpLFxuICBsZW5zSW5kZXg6IHJlcXVpcmUoJy4vc3JjL2xlbnNJbmRleCcpLFxuICBsZW5zUGF0aDogcmVxdWlyZSgnLi9zcmMvbGVuc1BhdGgnKSxcbiAgbGVuc1Byb3A6IHJlcXVpcmUoJy4vc3JjL2xlbnNQcm9wJyksXG4gIGxpZnQ6IHJlcXVpcmUoJy4vc3JjL2xpZnQnKSxcbiAgbGlmdE46IHJlcXVpcmUoJy4vc3JjL2xpZnROJyksXG4gIGx0OiByZXF1aXJlKCcuL3NyYy9sdCcpLFxuICBsdGU6IHJlcXVpcmUoJy4vc3JjL2x0ZScpLFxuICBtYXA6IHJlcXVpcmUoJy4vc3JjL21hcCcpLFxuICBtYXBBY2N1bTogcmVxdWlyZSgnLi9zcmMvbWFwQWNjdW0nKSxcbiAgbWFwQWNjdW1SaWdodDogcmVxdWlyZSgnLi9zcmMvbWFwQWNjdW1SaWdodCcpLFxuICBtYXBPYmpJbmRleGVkOiByZXF1aXJlKCcuL3NyYy9tYXBPYmpJbmRleGVkJyksXG4gIG1hdGNoOiByZXF1aXJlKCcuL3NyYy9tYXRjaCcpLFxuICBtYXRoTW9kOiByZXF1aXJlKCcuL3NyYy9tYXRoTW9kJyksXG4gIG1heDogcmVxdWlyZSgnLi9zcmMvbWF4JyksXG4gIG1heEJ5OiByZXF1aXJlKCcuL3NyYy9tYXhCeScpLFxuICBtZWFuOiByZXF1aXJlKCcuL3NyYy9tZWFuJyksXG4gIG1lZGlhbjogcmVxdWlyZSgnLi9zcmMvbWVkaWFuJyksXG4gIG1lbW9pemU6IHJlcXVpcmUoJy4vc3JjL21lbW9pemUnKSxcbiAgbWVtb2l6ZVdpdGg6IHJlcXVpcmUoJy4vc3JjL21lbW9pemVXaXRoJyksXG4gIG1lcmdlOiByZXF1aXJlKCcuL3NyYy9tZXJnZScpLFxuICBtZXJnZUFsbDogcmVxdWlyZSgnLi9zcmMvbWVyZ2VBbGwnKSxcbiAgbWVyZ2VEZWVwTGVmdDogcmVxdWlyZSgnLi9zcmMvbWVyZ2VEZWVwTGVmdCcpLFxuICBtZXJnZURlZXBSaWdodDogcmVxdWlyZSgnLi9zcmMvbWVyZ2VEZWVwUmlnaHQnKSxcbiAgbWVyZ2VEZWVwV2l0aDogcmVxdWlyZSgnLi9zcmMvbWVyZ2VEZWVwV2l0aCcpLFxuICBtZXJnZURlZXBXaXRoS2V5OiByZXF1aXJlKCcuL3NyYy9tZXJnZURlZXBXaXRoS2V5JyksXG4gIG1lcmdlV2l0aDogcmVxdWlyZSgnLi9zcmMvbWVyZ2VXaXRoJyksXG4gIG1lcmdlV2l0aEtleTogcmVxdWlyZSgnLi9zcmMvbWVyZ2VXaXRoS2V5JyksXG4gIG1pbjogcmVxdWlyZSgnLi9zcmMvbWluJyksXG4gIG1pbkJ5OiByZXF1aXJlKCcuL3NyYy9taW5CeScpLFxuICBtb2R1bG86IHJlcXVpcmUoJy4vc3JjL21vZHVsbycpLFxuICBtdWx0aXBseTogcmVxdWlyZSgnLi9zcmMvbXVsdGlwbHknKSxcbiAgbkFyeTogcmVxdWlyZSgnLi9zcmMvbkFyeScpLFxuICBuZWdhdGU6IHJlcXVpcmUoJy4vc3JjL25lZ2F0ZScpLFxuICBub25lOiByZXF1aXJlKCcuL3NyYy9ub25lJyksXG4gIG5vdDogcmVxdWlyZSgnLi9zcmMvbm90JyksXG4gIG50aDogcmVxdWlyZSgnLi9zcmMvbnRoJyksXG4gIG50aEFyZzogcmVxdWlyZSgnLi9zcmMvbnRoQXJnJyksXG4gIG86IHJlcXVpcmUoJy4vc3JjL28nKSxcbiAgb2JqT2Y6IHJlcXVpcmUoJy4vc3JjL29iak9mJyksXG4gIG9mOiByZXF1aXJlKCcuL3NyYy9vZicpLFxuICBvbWl0OiByZXF1aXJlKCcuL3NyYy9vbWl0JyksXG4gIG9uY2U6IHJlcXVpcmUoJy4vc3JjL29uY2UnKSxcbiAgb3I6IHJlcXVpcmUoJy4vc3JjL29yJyksXG4gIG92ZXI6IHJlcXVpcmUoJy4vc3JjL292ZXInKSxcbiAgcGFpcjogcmVxdWlyZSgnLi9zcmMvcGFpcicpLFxuICBwYXJ0aWFsOiByZXF1aXJlKCcuL3NyYy9wYXJ0aWFsJyksXG4gIHBhcnRpYWxSaWdodDogcmVxdWlyZSgnLi9zcmMvcGFydGlhbFJpZ2h0JyksXG4gIHBhcnRpdGlvbjogcmVxdWlyZSgnLi9zcmMvcGFydGl0aW9uJyksXG4gIHBhdGg6IHJlcXVpcmUoJy4vc3JjL3BhdGgnKSxcbiAgcGF0aEVxOiByZXF1aXJlKCcuL3NyYy9wYXRoRXEnKSxcbiAgcGF0aE9yOiByZXF1aXJlKCcuL3NyYy9wYXRoT3InKSxcbiAgcGF0aFNhdGlzZmllczogcmVxdWlyZSgnLi9zcmMvcGF0aFNhdGlzZmllcycpLFxuICBwaWNrOiByZXF1aXJlKCcuL3NyYy9waWNrJyksXG4gIHBpY2tBbGw6IHJlcXVpcmUoJy4vc3JjL3BpY2tBbGwnKSxcbiAgcGlja0J5OiByZXF1aXJlKCcuL3NyYy9waWNrQnknKSxcbiAgcGlwZTogcmVxdWlyZSgnLi9zcmMvcGlwZScpLFxuICBwaXBlSzogcmVxdWlyZSgnLi9zcmMvcGlwZUsnKSxcbiAgcGlwZVA6IHJlcXVpcmUoJy4vc3JjL3BpcGVQJyksXG4gIHBsdWNrOiByZXF1aXJlKCcuL3NyYy9wbHVjaycpLFxuICBwcmVwZW5kOiByZXF1aXJlKCcuL3NyYy9wcmVwZW5kJyksXG4gIHByb2R1Y3Q6IHJlcXVpcmUoJy4vc3JjL3Byb2R1Y3QnKSxcbiAgcHJvamVjdDogcmVxdWlyZSgnLi9zcmMvcHJvamVjdCcpLFxuICBwcm9wOiByZXF1aXJlKCcuL3NyYy9wcm9wJyksXG4gIHByb3BFcTogcmVxdWlyZSgnLi9zcmMvcHJvcEVxJyksXG4gIHByb3BJczogcmVxdWlyZSgnLi9zcmMvcHJvcElzJyksXG4gIHByb3BPcjogcmVxdWlyZSgnLi9zcmMvcHJvcE9yJyksXG4gIHByb3BTYXRpc2ZpZXM6IHJlcXVpcmUoJy4vc3JjL3Byb3BTYXRpc2ZpZXMnKSxcbiAgcHJvcHM6IHJlcXVpcmUoJy4vc3JjL3Byb3BzJyksXG4gIHJhbmdlOiByZXF1aXJlKCcuL3NyYy9yYW5nZScpLFxuICByZWR1Y2U6IHJlcXVpcmUoJy4vc3JjL3JlZHVjZScpLFxuICByZWR1Y2VCeTogcmVxdWlyZSgnLi9zcmMvcmVkdWNlQnknKSxcbiAgcmVkdWNlUmlnaHQ6IHJlcXVpcmUoJy4vc3JjL3JlZHVjZVJpZ2h0JyksXG4gIHJlZHVjZVdoaWxlOiByZXF1aXJlKCcuL3NyYy9yZWR1Y2VXaGlsZScpLFxuICByZWR1Y2VkOiByZXF1aXJlKCcuL3NyYy9yZWR1Y2VkJyksXG4gIHJlamVjdDogcmVxdWlyZSgnLi9zcmMvcmVqZWN0JyksXG4gIHJlbW92ZTogcmVxdWlyZSgnLi9zcmMvcmVtb3ZlJyksXG4gIHJlcGVhdDogcmVxdWlyZSgnLi9zcmMvcmVwZWF0JyksXG4gIHJlcGxhY2U6IHJlcXVpcmUoJy4vc3JjL3JlcGxhY2UnKSxcbiAgcmV2ZXJzZTogcmVxdWlyZSgnLi9zcmMvcmV2ZXJzZScpLFxuICBzY2FuOiByZXF1aXJlKCcuL3NyYy9zY2FuJyksXG4gIHNlcXVlbmNlOiByZXF1aXJlKCcuL3NyYy9zZXF1ZW5jZScpLFxuICBzZXQ6IHJlcXVpcmUoJy4vc3JjL3NldCcpLFxuICBzbGljZTogcmVxdWlyZSgnLi9zcmMvc2xpY2UnKSxcbiAgc29ydDogcmVxdWlyZSgnLi9zcmMvc29ydCcpLFxuICBzb3J0Qnk6IHJlcXVpcmUoJy4vc3JjL3NvcnRCeScpLFxuICBzb3J0V2l0aDogcmVxdWlyZSgnLi9zcmMvc29ydFdpdGgnKSxcbiAgc3BsaXQ6IHJlcXVpcmUoJy4vc3JjL3NwbGl0JyksXG4gIHNwbGl0QXQ6IHJlcXVpcmUoJy4vc3JjL3NwbGl0QXQnKSxcbiAgc3BsaXRFdmVyeTogcmVxdWlyZSgnLi9zcmMvc3BsaXRFdmVyeScpLFxuICBzcGxpdFdoZW46IHJlcXVpcmUoJy4vc3JjL3NwbGl0V2hlbicpLFxuICBzdGFydHNXaXRoOiByZXF1aXJlKCcuL3NyYy9zdGFydHNXaXRoJyksXG4gIHN1YnRyYWN0OiByZXF1aXJlKCcuL3NyYy9zdWJ0cmFjdCcpLFxuICBzdW06IHJlcXVpcmUoJy4vc3JjL3N1bScpLFxuICBzeW1tZXRyaWNEaWZmZXJlbmNlOiByZXF1aXJlKCcuL3NyYy9zeW1tZXRyaWNEaWZmZXJlbmNlJyksXG4gIHN5bW1ldHJpY0RpZmZlcmVuY2VXaXRoOiByZXF1aXJlKCcuL3NyYy9zeW1tZXRyaWNEaWZmZXJlbmNlV2l0aCcpLFxuICB0YWlsOiByZXF1aXJlKCcuL3NyYy90YWlsJyksXG4gIHRha2U6IHJlcXVpcmUoJy4vc3JjL3Rha2UnKSxcbiAgdGFrZUxhc3Q6IHJlcXVpcmUoJy4vc3JjL3Rha2VMYXN0JyksXG4gIHRha2VMYXN0V2hpbGU6IHJlcXVpcmUoJy4vc3JjL3Rha2VMYXN0V2hpbGUnKSxcbiAgdGFrZVdoaWxlOiByZXF1aXJlKCcuL3NyYy90YWtlV2hpbGUnKSxcbiAgdGFwOiByZXF1aXJlKCcuL3NyYy90YXAnKSxcbiAgdGVzdDogcmVxdWlyZSgnLi9zcmMvdGVzdCcpLFxuICB0aW1lczogcmVxdWlyZSgnLi9zcmMvdGltZXMnKSxcbiAgdG9Mb3dlcjogcmVxdWlyZSgnLi9zcmMvdG9Mb3dlcicpLFxuICB0b1BhaXJzOiByZXF1aXJlKCcuL3NyYy90b1BhaXJzJyksXG4gIHRvUGFpcnNJbjogcmVxdWlyZSgnLi9zcmMvdG9QYWlyc0luJyksXG4gIHRvU3RyaW5nOiByZXF1aXJlKCcuL3NyYy90b1N0cmluZycpLFxuICB0b1VwcGVyOiByZXF1aXJlKCcuL3NyYy90b1VwcGVyJyksXG4gIHRyYW5zZHVjZTogcmVxdWlyZSgnLi9zcmMvdHJhbnNkdWNlJyksXG4gIHRyYW5zcG9zZTogcmVxdWlyZSgnLi9zcmMvdHJhbnNwb3NlJyksXG4gIHRyYXZlcnNlOiByZXF1aXJlKCcuL3NyYy90cmF2ZXJzZScpLFxuICB0cmltOiByZXF1aXJlKCcuL3NyYy90cmltJyksXG4gIHRyeUNhdGNoOiByZXF1aXJlKCcuL3NyYy90cnlDYXRjaCcpLFxuICB0eXBlOiByZXF1aXJlKCcuL3NyYy90eXBlJyksXG4gIHVuYXBwbHk6IHJlcXVpcmUoJy4vc3JjL3VuYXBwbHknKSxcbiAgdW5hcnk6IHJlcXVpcmUoJy4vc3JjL3VuYXJ5JyksXG4gIHVuY3VycnlOOiByZXF1aXJlKCcuL3NyYy91bmN1cnJ5TicpLFxuICB1bmZvbGQ6IHJlcXVpcmUoJy4vc3JjL3VuZm9sZCcpLFxuICB1bmlvbjogcmVxdWlyZSgnLi9zcmMvdW5pb24nKSxcbiAgdW5pb25XaXRoOiByZXF1aXJlKCcuL3NyYy91bmlvbldpdGgnKSxcbiAgdW5pcTogcmVxdWlyZSgnLi9zcmMvdW5pcScpLFxuICB1bmlxQnk6IHJlcXVpcmUoJy4vc3JjL3VuaXFCeScpLFxuICB1bmlxV2l0aDogcmVxdWlyZSgnLi9zcmMvdW5pcVdpdGgnKSxcbiAgdW5sZXNzOiByZXF1aXJlKCcuL3NyYy91bmxlc3MnKSxcbiAgdW5uZXN0OiByZXF1aXJlKCcuL3NyYy91bm5lc3QnKSxcbiAgdW50aWw6IHJlcXVpcmUoJy4vc3JjL3VudGlsJyksXG4gIHVwZGF0ZTogcmVxdWlyZSgnLi9zcmMvdXBkYXRlJyksXG4gIHVzZVdpdGg6IHJlcXVpcmUoJy4vc3JjL3VzZVdpdGgnKSxcbiAgdmFsdWVzOiByZXF1aXJlKCcuL3NyYy92YWx1ZXMnKSxcbiAgdmFsdWVzSW46IHJlcXVpcmUoJy4vc3JjL3ZhbHVlc0luJyksXG4gIHZpZXc6IHJlcXVpcmUoJy4vc3JjL3ZpZXcnKSxcbiAgd2hlbjogcmVxdWlyZSgnLi9zcmMvd2hlbicpLFxuICB3aGVyZTogcmVxdWlyZSgnLi9zcmMvd2hlcmUnKSxcbiAgd2hlcmVFcTogcmVxdWlyZSgnLi9zcmMvd2hlcmVFcScpLFxuICB3aXRob3V0OiByZXF1aXJlKCcuL3NyYy93aXRob3V0JyksXG4gIHhwcm9kOiByZXF1aXJlKCcuL3NyYy94cHJvZCcpLFxuICB6aXA6IHJlcXVpcmUoJy4vc3JjL3ppcCcpLFxuICB6aXBPYmo6IHJlcXVpcmUoJy4vc3JjL3ppcE9iaicpLFxuICB6aXBXaXRoOiByZXF1aXJlKCcuL3NyYy96aXBXaXRoJylcbn07XG4iLCJ2YXIgYWx3YXlzID0gcmVxdWlyZSgnLi9hbHdheXMnKTtcblxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBhbHdheXMgcmV0dXJucyBgZmFsc2VgLiBBbnkgcGFzc2VkIGluIHBhcmFtZXRlcnMgYXJlIGlnbm9yZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmFsd2F5cywgUi5UXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5GKCk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbHdheXMoZmFsc2UpO1xuIiwidmFyIGFsd2F5cyA9IHJlcXVpcmUoJy4vYWx3YXlzJyk7XG5cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYHRydWVgLiBBbnkgcGFzc2VkIGluIHBhcmFtZXRlcnMgYXJlIGlnbm9yZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmFsd2F5cywgUi5GXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5UKCk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFsd2F5cyh0cnVlKTtcbiIsIi8qKlxuICogQSBzcGVjaWFsIHBsYWNlaG9sZGVyIHZhbHVlIHVzZWQgdG8gc3BlY2lmeSBcImdhcHNcIiB3aXRoaW4gY3VycmllZCBmdW5jdGlvbnMsXG4gKiBhbGxvd2luZyBwYXJ0aWFsIGFwcGxpY2F0aW9uIG9mIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMsIHJlZ2FyZGxlc3Mgb2ZcbiAqIHRoZWlyIHBvc2l0aW9ucy5cbiAqXG4gKiBJZiBgZ2AgaXMgYSBjdXJyaWVkIHRlcm5hcnkgZnVuY3Rpb24gYW5kIGBfYCBpcyBgUi5fX2AsIHRoZSBmb2xsb3dpbmcgYXJlXG4gKiBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyLCBfKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNi4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZ3JlZXQgPSBSLnJlcGxhY2UoJ3tuYW1lfScsIFIuX18sICdIZWxsbywge25hbWV9IScpO1xuICogICAgICBncmVldCgnQWxpY2UnKTsgLy89PiAnSGVsbG8sIEFsaWNlISdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7J0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlcic6IHRydWV9O1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEFkZHMgdHdvIHZhbHVlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBzZWUgUi5zdWJ0cmFjdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYWRkKDIsIDMpOyAgICAgICAvLz0+ICA1XG4gKiAgICAgIFIuYWRkKDcpKDEwKTsgICAgICAvLz0+IDE3XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBhZGQoYSwgYikge1xuICByZXR1cm4gTnVtYmVyKGEpICsgTnVtYmVyKGIpO1xufSk7XG4iLCJ2YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbmNhdCcpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBsaXN0IGl0ZXJhdGlvbiBmdW5jdGlvbiBmcm9tIGFuIGV4aXN0aW5nIG9uZSBieSBhZGRpbmcgdHdvIG5ld1xuICogcGFyYW1ldGVycyB0byBpdHMgY2FsbGJhY2sgZnVuY3Rpb246IHRoZSBjdXJyZW50IGluZGV4LCBhbmQgdGhlIGVudGlyZSBsaXN0LlxuICpcbiAqIFRoaXMgd291bGQgdHVybiwgZm9yIGluc3RhbmNlLCBbYFIubWFwYF0oI21hcCkgZnVuY3Rpb24gaW50byBvbmUgdGhhdFxuICogbW9yZSBjbG9zZWx5IHJlc2VtYmxlcyBgQXJyYXkucHJvdG90eXBlLm1hcGAuIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrXG4gKiBmb3IgZnVuY3Rpb25zIGluIHdoaWNoIHRoZSBpdGVyYXRpb24gY2FsbGJhY2sgZnVuY3Rpb24gaXMgdGhlIGZpcnN0XG4gKiBwYXJhbWV0ZXIsIGFuZCB3aGVyZSB0aGUgbGlzdCBpcyB0aGUgbGFzdCBwYXJhbWV0ZXIuIChUaGlzIGxhdHRlciBtaWdodCBiZVxuICogdW5pbXBvcnRhbnQgaWYgdGhlIGxpc3QgcGFyYW1ldGVyIGlzIG5vdCB1c2VkLilcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnICgoYSAuLi4gLT4gYikgLi4uIC0+IFthXSAtPiAqKSAtPiAoYSAuLi4sIEludCwgW2FdIC0+IGIpIC4uLiAtPiBbYV0gLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgbGlzdCBpdGVyYXRpb24gZnVuY3Rpb24gdGhhdCBkb2VzIG5vdCBwYXNzIGluZGV4IG9yIGxpc3QgdG8gaXRzIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQW4gYWx0ZXJlZCBsaXN0IGl0ZXJhdGlvbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyAoaXRlbSwgaW5kZXgsIGxpc3QpIHRvIGl0cyBjYWxsYmFja1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYXBJbmRleGVkID0gUi5hZGRJbmRleChSLm1hcCk7XG4gKiAgICAgIG1hcEluZGV4ZWQoKHZhbCwgaWR4KSA9PiBpZHggKyAnLScgKyB2YWwsIFsnZicsICdvJywgJ28nLCAnYicsICdhJywgJ3InXSk7XG4gKiAgICAgIC8vPT4gWycwLWYnLCAnMS1vJywgJzItbycsICczLWInLCAnNC1hJywgJzUtciddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBhZGRJbmRleChmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIG9yaWdGbiA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbGlzdCA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIGFyZ3NbMF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXN1bHQgPSBvcmlnRm4uYXBwbHkodGhpcywgX2NvbmNhdChhcmd1bWVudHMsIFtpZHgsIGxpc3RdKSk7XG4gICAgICBpZHggKz0gMTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbmNhdCcpO1xudmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byB0aGUgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4IG9mIGFuIGFycmF5LCByZXR1cm5pbmcgYVxuICogbmV3IGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHJlcGxhY2VkIHdpdGggdGhlXG4gKiByZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IGEpIC0+IE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYXBwbHkuXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IFRoZSBpbmRleC5cbiAqIEBwYXJhbSB7QXJyYXl8QXJndW1lbnRzfSBsaXN0IEFuIGFycmF5LWxpa2Ugb2JqZWN0IHdob3NlIHZhbHVlXG4gKiAgICAgICAgYXQgdGhlIHN1cHBsaWVkIGluZGV4IHdpbGwgYmUgcmVwbGFjZWQuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBjb3B5IG9mIHRoZSBzdXBwbGllZCBhcnJheS1saWtlIG9iamVjdCB3aXRoXG4gKiAgICAgICAgIHRoZSBlbGVtZW50IGF0IGluZGV4IGBpZHhgIHJlcGxhY2VkIHdpdGggdGhlIHZhbHVlXG4gKiAgICAgICAgIHJldHVybmVkIGJ5IGFwcGx5aW5nIGBmbmAgdG8gdGhlIGV4aXN0aW5nIGVsZW1lbnQuXG4gKiBAc2VlIFIudXBkYXRlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hZGp1c3QoUi5hZGQoMTApLCAxLCBbMSwgMiwgM10pOyAgICAgLy89PiBbMSwgMTIsIDNdXG4gKiAgICAgIFIuYWRqdXN0KFIuYWRkKDEwKSkoMSkoWzEsIDIsIDNdKTsgICAgIC8vPT4gWzEsIDEyLCAzXVxuICogQHN5bWIgUi5hZGp1c3QoZiwgLTEsIFthLCBiXSkgPSBbYSwgZihiKV1cbiAqIEBzeW1iIFIuYWRqdXN0KGYsIDAsIFthLCBiXSkgPSBbZihhKSwgYl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGFkanVzdChmbiwgaWR4LCBsaXN0KSB7XG4gIGlmIChpZHggPj0gbGlzdC5sZW5ndGggfHwgaWR4IDwgLWxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgdmFyIHN0YXJ0ID0gaWR4IDwgMCA/IGxpc3QubGVuZ3RoIDogMDtcbiAgdmFyIF9pZHggPSBzdGFydCArIGlkeDtcbiAgdmFyIF9saXN0ID0gX2NvbmNhdChsaXN0KTtcbiAgX2xpc3RbX2lkeF0gPSBmbihsaXN0W19pZHhdKTtcbiAgcmV0dXJuIF9saXN0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGFsbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hhbGwnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGFsbCBlbGVtZW50cyBvZiB0aGUgbGlzdCBtYXRjaCB0aGUgcHJlZGljYXRlLCBgZmFsc2VgIGlmXG4gKiB0aGVyZSBhcmUgYW55IHRoYXQgZG9uJ3QuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFsbGAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcHJlZGljYXRlIGlzIHNhdGlzZmllZCBieSBldmVyeSBlbGVtZW50LCBgZmFsc2VgXG4gKiAgICAgICAgIG90aGVyd2lzZS5cbiAqIEBzZWUgUi5hbnksIFIubm9uZSwgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZXF1YWxzMyA9IFIuZXF1YWxzKDMpO1xuICogICAgICBSLmFsbChlcXVhbHMzKShbMywgMywgMywgM10pOyAvLz0+IHRydWVcbiAqICAgICAgUi5hbGwoZXF1YWxzMykoWzMsIDMsIDEsIDNdKTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbJ2FsbCddLCBfeGFsbCwgZnVuY3Rpb24gYWxsKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICBpZiAoIWZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG52YXIgbWF4ID0gcmVxdWlyZSgnLi9tYXgnKTtcbnZhciBwbHVjayA9IHJlcXVpcmUoJy4vcGx1Y2snKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgYW5kIHJldHVybnMgYSBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRydWUgZm9yIGFcbiAqIGdpdmVuIGxpc3Qgb2YgYXJndW1lbnRzIGlmIGV2ZXJ5IG9uZSBvZiB0aGUgcHJvdmlkZWQgcHJlZGljYXRlcyBpcyBzYXRpc2ZpZWRcbiAqIGJ5IHRob3NlIGFyZ3VtZW50cy5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJuZWQgaXMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdob3NlIGFyaXR5IG1hdGNoZXMgdGhhdCBvZiB0aGVcbiAqIGhpZ2hlc3QtYXJpdHkgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4gLT4gQm9vbGVhbilcbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqIEBzZWUgUi5hbnlQYXNzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzUXVlZW4gPSBSLnByb3BFcSgncmFuaycsICdRJyk7XG4gKiAgICAgIHZhciBpc1NwYWRlID0gUi5wcm9wRXEoJ3N1aXQnLCAn4pmg77iOJyk7XG4gKiAgICAgIHZhciBpc1F1ZWVuT2ZTcGFkZXMgPSBSLmFsbFBhc3MoW2lzUXVlZW4sIGlzU3BhZGVdKTtcbiAqXG4gKiAgICAgIGlzUXVlZW5PZlNwYWRlcyh7cmFuazogJ1EnLCBzdWl0OiAn4pmj77iOJ30pOyAvLz0+IGZhbHNlXG4gKiAgICAgIGlzUXVlZW5PZlNwYWRlcyh7cmFuazogJ1EnLCBzdWl0OiAn4pmg77iOJ30pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGFsbFBhc3MocHJlZHMpIHtcbiAgcmV0dXJuIGN1cnJ5TihyZWR1Y2UobWF4LCAwLCBwbHVjaygnbGVuZ3RoJywgcHJlZHMpKSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIGxlbiA9IHByZWRzLmxlbmd0aDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBpZiAoIXByZWRzW2lkeF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgdGhlIGdpdmVuIHZhbHVlLiBOb3RlIHRoYXQgZm9yXG4gKiBub24tcHJpbWl0aXZlcyB0aGUgdmFsdWUgcmV0dXJuZWQgaXMgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMga25vd24gYXMgYGNvbnN0YCwgYGNvbnN0YW50YCwgb3IgYEtgIChmb3IgSyBjb21iaW5hdG9yKSBpblxuICogb3RoZXIgbGFuZ3VhZ2VzIGFuZCBsaWJyYXJpZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHdyYXAgaW4gYSBmdW5jdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IEEgRnVuY3Rpb24gOjogKiAtPiB2YWwuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHQgPSBSLmFsd2F5cygnVGVlJyk7XG4gKiAgICAgIHQoKTsgLy89PiAnVGVlJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gYWx3YXlzKHZhbCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggYXJndW1lbnRzIGFyZSBgdHJ1ZWA7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxuICogQHBhcmFtIHtBbnl9IGFcbiAqIEBwYXJhbSB7QW55fSBiXG4gKiBAcmV0dXJuIHtBbnl9IHRoZSBmaXJzdCBhcmd1bWVudCBpZiBpdCBpcyBmYWxzeSwgb3RoZXJ3aXNlIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKiBAc2VlIFIuYm90aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYW5kKHRydWUsIHRydWUpOyAvLz0+IHRydWVcbiAqICAgICAgUi5hbmQodHJ1ZSwgZmFsc2UpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuYW5kKGZhbHNlLCB0cnVlKTsgLy89PiBmYWxzZVxuICogICAgICBSLmFuZChmYWxzZSwgZmFsc2UpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBhbmQoYSwgYikge1xuICByZXR1cm4gYSAmJiBiO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGFueSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hhbnknKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGF0IGxlYXN0IG9uZSBvZiBlbGVtZW50cyBvZiB0aGUgbGlzdCBtYXRjaCB0aGUgcHJlZGljYXRlLFxuICogYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFueWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcHJlZGljYXRlIGlzIHNhdGlzZmllZCBieSBhdCBsZWFzdCBvbmUgZWxlbWVudCwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKiBAc2VlIFIuYWxsLCBSLm5vbmUsIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGxlc3NUaGFuMCA9IFIuZmxpcChSLmx0KSgwKTtcbiAqICAgICAgdmFyIGxlc3NUaGFuMiA9IFIuZmxpcChSLmx0KSgyKTtcbiAqICAgICAgUi5hbnkobGVzc1RoYW4wKShbMSwgMl0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuYW55KGxlc3NUaGFuMikoWzEsIDJdKTsgLy89PiB0cnVlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnYW55J10sIF94YW55LCBmdW5jdGlvbiBhbnkoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGlmIChmbihsaXN0W2lkeF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xudmFyIG1heCA9IHJlcXVpcmUoJy4vbWF4Jyk7XG52YXIgcGx1Y2sgPSByZXF1aXJlKCcuL3BsdWNrJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIGFuZCByZXR1cm5zIGEgcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0cnVlIGZvciBhXG4gKiBnaXZlbiBsaXN0IG9mIGFyZ3VtZW50cyBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZXMgaXNcbiAqIHNhdGlzZmllZCBieSB0aG9zZSBhcmd1bWVudHMuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJldHVybmVkIGlzIGEgY3VycmllZCBmdW5jdGlvbiB3aG9zZSBhcml0eSBtYXRjaGVzIHRoYXQgb2YgdGhlXG4gKiBoaWdoZXN0LWFyaXR5IHByZWRpY2F0ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uIC0+IEJvb2xlYW4pXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiBAc2VlIFIuYWxsUGFzc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0NsdWIgPSBSLnByb3BFcSgnc3VpdCcsICfimaMnKTtcbiAqICAgICAgdmFyIGlzU3BhZGUgPSBSLnByb3BFcSgnc3VpdCcsICfimaAnKTtcbiAqICAgICAgdmFyIGlzQmxhY2tDYXJkID0gUi5hbnlQYXNzKFtpc0NsdWIsIGlzU3BhZGVdKTtcbiAqXG4gKiAgICAgIGlzQmxhY2tDYXJkKHtyYW5rOiAnMTAnLCBzdWl0OiAn4pmjJ30pOyAvLz0+IHRydWVcbiAqICAgICAgaXNCbGFja0NhcmQoe3Jhbms6ICdRJywgc3VpdDogJ+KZoCd9KTsgLy89PiB0cnVlXG4gKiAgICAgIGlzQmxhY2tDYXJkKHtyYW5rOiAnUScsIHN1aXQ6ICfimaYnfSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGFueVBhc3MocHJlZHMpIHtcbiAgcmV0dXJuIGN1cnJ5TihyZWR1Y2UobWF4LCAwLCBwbHVjaygnbGVuZ3RoJywgcHJlZHMpKSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIGxlbiA9IHByZWRzLmxlbmd0aDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBpZiAocHJlZHNbaWR4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59KTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG5cbi8qKlxuICogYXAgYXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFwYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC4gQWxzb1xuICogdHJlYXRzIGN1cnJpZWQgZnVuY3Rpb25zIGFzIGFwcGxpY2F0aXZlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAc2lnIEFwcGx5IGYgPT4gZiAoYSAtPiBiKSAtPiBmIGEgLT4gZiBiXG4gKiBAcGFyYW0geyp9IGFwcGx5RlxuICogQHBhcmFtIHsqfSBhcHBseVhcbiAqIEByZXR1cm4geyp9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hcChbUi5tdWx0aXBseSgyKSwgUi5hZGQoMyldLCBbMSwyLDNdKTsgLy89PiBbMiwgNCwgNiwgNCwgNSwgNl1cbiAqICAgICAgUi5hcChbUi5jb25jYXQoJ3Rhc3R5ICcpLCBSLnRvVXBwZXJdLCBbJ3BpenphJywgJ3NhbGFkJ10pOyAvLz0+IFtcInRhc3R5IHBpenphXCIsIFwidGFzdHkgc2FsYWRcIiwgXCJQSVpaQVwiLCBcIlNBTEFEXCJdXG4gKiBAc3ltYiBSLmFwKFtmLCBnXSwgW2EsIGJdKSA9IFtmKGEpLCBmKGIpLCBnKGEpLCBnKGIpXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gYXAoYXBwbHlGLCBhcHBseVgpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgYXBwbHlYWydmYW50YXN5LWxhbmQvYXAnXSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICBhcHBseVhbJ2ZhbnRhc3ktbGFuZC9hcCddKGFwcGx5RikgOlxuICAgIHR5cGVvZiBhcHBseUYuYXAgPT09ICdmdW5jdGlvbicgP1xuICAgICAgYXBwbHlGLmFwKGFwcGx5WCkgOlxuICAgIHR5cGVvZiBhcHBseUYgPT09ICdmdW5jdGlvbicgP1xuICAgICAgZnVuY3Rpb24oeCkgeyByZXR1cm4gYXBwbHlGKHgpKGFwcGx5WCh4KSk7IH0gOlxuICAgIC8vIGVsc2VcbiAgICAgIF9yZWR1Y2UoZnVuY3Rpb24oYWNjLCBmKSB7IHJldHVybiBfY29uY2F0KGFjYywgbWFwKGYsIGFwcGx5WCkpOyB9LCBbXSwgYXBwbHlGKVxuICApO1xufSk7XG4iLCJ2YXIgX2FwZXJ0dXJlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXBlcnR1cmUnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94YXBlcnR1cmUgPSByZXF1aXJlKCcuL2ludGVybmFsL194YXBlcnR1cmUnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCwgY29tcG9zZWQgb2Ygbi10dXBsZXMgb2YgY29uc2VjdXRpdmUgZWxlbWVudHMuIElmIGBuYCBpc1xuICogZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlIGxpc3QsIGFuIGVtcHR5IGxpc3QgaXMgcmV0dXJuZWQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gW1thXV1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSB0dXBsZXMgdG8gY3JlYXRlXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIHNwbGl0IGludG8gYG5gLWxlbmd0aCB0dXBsZXNcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgcmVzdWx0aW5nIGxpc3Qgb2YgYG5gLWxlbmd0aCB0dXBsZXNcbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmFwZXJ0dXJlKDIsIFsxLCAyLCAzLCA0LCA1XSk7IC8vPT4gW1sxLCAyXSwgWzIsIDNdLCBbMywgNF0sIFs0LCA1XV1cbiAqICAgICAgUi5hcGVydHVyZSgzLCBbMSwgMiwgMywgNCwgNV0pOyAvLz0+IFtbMSwgMiwgM10sIFsyLCAzLCA0XSwgWzMsIDQsIDVdXVxuICogICAgICBSLmFwZXJ0dXJlKDcsIFsxLCAyLCAzLCA0LCA1XSk7IC8vPT4gW11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoW10sIF94YXBlcnR1cmUsIF9hcGVydHVyZSkpO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgY29udGVudHMgb2YgdGhlIGdpdmVuIGxpc3QsIGZvbGxvd2VkIGJ5XG4gKiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHsqfSBlbCBUaGUgZWxlbWVudCB0byBhZGQgdG8gdGhlIGVuZCBvZiB0aGUgbmV3IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IG9mIGVsZW1lbnRzIHRvIGFkZCBhIG5ldyBpdGVtIHRvLlxuICogICAgICAgIGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgb2xkIGxpc3QgZm9sbG93ZWQgYnkgYGVsYC5cbiAqIEBzZWUgUi5wcmVwZW5kXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hcHBlbmQoJ3Rlc3RzJywgWyd3cml0ZScsICdtb3JlJ10pOyAvLz0+IFsnd3JpdGUnLCAnbW9yZScsICd0ZXN0cyddXG4gKiAgICAgIFIuYXBwZW5kKCd0ZXN0cycsIFtdKTsgLy89PiBbJ3Rlc3RzJ11cbiAqICAgICAgUi5hcHBlbmQoWyd0ZXN0cyddLCBbJ3dyaXRlJywgJ21vcmUnXSk7IC8vPT4gWyd3cml0ZScsICdtb3JlJywgWyd0ZXN0cyddXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gYXBwZW5kKGVsLCBsaXN0KSB7XG4gIHJldHVybiBfY29uY2F0KGxpc3QsIFtlbF0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQXBwbGllcyBmdW5jdGlvbiBgZm5gIHRvIHRoZSBhcmd1bWVudCBsaXN0IGBhcmdzYC4gVGhpcyBpcyB1c2VmdWwgZm9yXG4gKiBjcmVhdGluZyBhIGZpeGVkLWFyaXR5IGZ1bmN0aW9uIGZyb20gYSB2YXJpYWRpYyBmdW5jdGlvbi4gYGZuYCBzaG91bGQgYmUgYVxuICogYm91bmQgZnVuY3Rpb24gaWYgY29udGV4dCBpcyBzaWduaWZpY2FudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC43LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKi4uLiAtPiBhKSAtPiBbKl0gLT4gYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIHdpdGggYGFyZ3NgXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gY2FsbCBgZm5gIHdpdGhcbiAqIEByZXR1cm4geyp9IHJlc3VsdCBUaGUgcmVzdWx0LCBlcXVpdmFsZW50IHRvIGBmbiguLi5hcmdzKWBcbiAqIEBzZWUgUi5jYWxsLCBSLnVuYXBwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbnVtcyA9IFsxLCAyLCAzLCAtOTksIDQyLCA2LCA3XTtcbiAqICAgICAgUi5hcHBseShNYXRoLm1heCwgbnVtcyk7IC8vPT4gNDJcbiAqIEBzeW1iIFIuYXBwbHkoZiwgW2EsIGIsIGNdKSA9IGYoYSwgYiwgYylcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGFwcGx5KGZuLCBhcmdzKSB7XG4gIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4vYXBwbHknKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgbWF4ID0gcmVxdWlyZSgnLi9tYXgnKTtcbnZhciBwbHVjayA9IHJlcXVpcmUoJy4vcGx1Y2snKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xudmFyIHZhbHVlcyA9IHJlcXVpcmUoJy4vdmFsdWVzJyk7XG5cblxuLyoqXG4gKiBHaXZlbiBhIHNwZWMgb2JqZWN0IHJlY3Vyc2l2ZWx5IG1hcHBpbmcgcHJvcGVydGllcyB0byBmdW5jdGlvbnMsIGNyZWF0ZXMgYVxuICogZnVuY3Rpb24gcHJvZHVjaW5nIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzdHJ1Y3R1cmUsIGJ5IG1hcHBpbmcgZWFjaCBwcm9wZXJ0eVxuICogdG8gdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGl0cyBhc3NvY2lhdGVkIGZ1bmN0aW9uIHdpdGggdGhlIHN1cHBsaWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcge2s6ICgoYSwgYiwgLi4uLCBtKSAtPiB2KX0gLT4gKChhLCBiLCAuLi4sIG0pIC0+IHtrOiB2fSlcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcGVjIGFuIG9iamVjdCByZWN1cnNpdmVseSBtYXBwaW5nIHByb3BlcnRpZXMgdG8gZnVuY3Rpb25zIGZvclxuICogICAgICAgIHByb2R1Y2luZyB0aGUgdmFsdWVzIGZvciB0aGVzZSBwcm9wZXJ0aWVzLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzdHJ1Y3R1cmVcbiAqIGFzIGBzcGVjJywgd2l0aCBlYWNoIHByb3BlcnR5IHNldCB0byB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgY2FsbGluZyBpdHNcbiAqIGFzc29jaWF0ZWQgZnVuY3Rpb24gd2l0aCB0aGUgc3VwcGxpZWQgYXJndW1lbnRzLlxuICogQHNlZSBSLmNvbnZlcmdlLCBSLmp1eHRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZ2V0TWV0cmljcyA9IFIuYXBwbHlTcGVjKHtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW06IFIuYWRkLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZDogeyBtdWw6IFIubXVsdGlwbHkgfVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICogICAgICBnZXRNZXRyaWNzKDIsIDQpOyAvLyA9PiB7IHN1bTogNiwgbmVzdGVkOiB7IG11bDogOCB9IH1cbiAqIEBzeW1iIFIuYXBwbHlTcGVjKHsgeDogZiwgeTogeyB6OiBnIH0gfSkoYSwgYikgPSB7IHg6IGYoYSwgYiksIHk6IHsgejogZyhhLCBiKSB9IH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGFwcGx5U3BlYyhzcGVjKSB7XG4gIHNwZWMgPSBtYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJyA/IHYgOiBhcHBseVNwZWModik7IH0sXG4gICAgICAgICAgICAgc3BlYyk7XG4gIHJldHVybiBjdXJyeU4ocmVkdWNlKG1heCwgMCwgcGx1Y2soJ2xlbmd0aCcsIHZhbHVlcyhzcGVjKSkpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbWFwKGZ1bmN0aW9uKGYpIHsgcmV0dXJuIGFwcGx5KGYsIGFyZ3MpOyB9LCBzcGVjKTtcbiAgICAgICAgICAgICAgICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIE1ha2VzIGFuIGFzY2VuZGluZyBjb21wYXJhdG9yIGZ1bmN0aW9uIG91dCBvZiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhbHVlXG4gKiB0aGF0IGNhbiBiZSBjb21wYXJlZCB3aXRoIGA8YCBhbmQgYD5gLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIzLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBPcmQgYiA9PiAoYSAtPiBiKSAtPiBhIC0+IGEgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBBIGZ1bmN0aW9uIG9mIGFyaXR5IG9uZSB0aGF0IHJldHVybnMgYSB2YWx1ZSB0aGF0IGNhbiBiZSBjb21wYXJlZFxuICogQHBhcmFtIHsqfSBhIFRoZSBmaXJzdCBpdGVtIHRvIGJlIGNvbXBhcmVkLlxuICogQHBhcmFtIHsqfSBiIFRoZSBzZWNvbmQgaXRlbSB0byBiZSBjb21wYXJlZC5cbiAqIEByZXR1cm4ge051bWJlcn0gYC0xYCBpZiBmbihhKSA8IGZuKGIpLCBgMWAgaWYgZm4oYikgPCBmbihhKSwgb3RoZXJ3aXNlIGAwYFxuICogQHNlZSBSLmRlc2NlbmRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYnlBZ2UgPSBSLmFzY2VuZChSLnByb3AoJ2FnZScpKTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtcbiAqICAgICAgICAvLyAuLi5cbiAqICAgICAgXTtcbiAqICAgICAgdmFyIHBlb3BsZUJ5WW91bmdlc3RGaXJzdCA9IFIuc29ydChieUFnZSwgcGVvcGxlKTtcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGFzY2VuZChmbiwgYSwgYikge1xuICB2YXIgYWEgPSBmbihhKTtcbiAgdmFyIGJiID0gZm4oYik7XG4gIHJldHVybiBhYSA8IGJiID8gLTEgOiBhYSA+IGJiID8gMSA6IDA7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBNYWtlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LCBzZXR0aW5nIG9yIG92ZXJyaWRpbmcgdGhlIHNwZWNpZmllZFxuICogcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuIE5vdGUgdGhhdCB0aGlzIGNvcGllcyBhbmQgZmxhdHRlbnMgcHJvdG90eXBlXG4gKiBwcm9wZXJ0aWVzIG9udG8gdGhlIG5ldyBvYmplY3QgYXMgd2VsbC4gQWxsIG5vbi1wcmltaXRpdmUgcHJvcGVydGllcyBhcmVcbiAqIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFN0cmluZyAtPiBhIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBwcm9wZXJ0eSBuYW1lIHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWwgVGhlIG5ldyB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCBlcXVpdmFsZW50IHRvIHRoZSBvcmlnaW5hbCBleGNlcHQgZm9yIHRoZSBjaGFuZ2VkIHByb3BlcnR5LlxuICogQHNlZSBSLmRpc3NvY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYXNzb2MoJ2MnLCAzLCB7YTogMSwgYjogMn0pOyAvLz0+IHthOiAxLCBiOiAyLCBjOiAzfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gYXNzb2MocHJvcCwgdmFsLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgIHJlc3VsdFtwXSA9IG9ialtwXTtcbiAgfVxuICByZXN1bHRbcHJvcF0gPSB2YWw7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2hhcycpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xudmFyIF9pc0ludGVnZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0ludGVnZXInKTtcbnZhciBhc3NvYyA9IHJlcXVpcmUoJy4vYXNzb2MnKTtcbnZhciBpc05pbCA9IHJlcXVpcmUoJy4vaXNOaWwnKTtcblxuXG4vKipcbiAqIE1ha2VzIGEgc2hhbGxvdyBjbG9uZSBvZiBhbiBvYmplY3QsIHNldHRpbmcgb3Igb3ZlcnJpZGluZyB0aGUgbm9kZXMgcmVxdWlyZWRcbiAqIHRvIGNyZWF0ZSB0aGUgZ2l2ZW4gcGF0aCwgYW5kIHBsYWNpbmcgdGhlIHNwZWNpZmljIHZhbHVlIGF0IHRoZSB0YWlsIGVuZCBvZlxuICogdGhhdCBwYXRoLiBOb3RlIHRoYXQgdGhpcyBjb3BpZXMgYW5kIGZsYXR0ZW5zIHByb3RvdHlwZSBwcm9wZXJ0aWVzIG9udG8gdGhlXG4gKiBuZXcgb2JqZWN0IGFzIHdlbGwuIEFsbCBub24tcHJpbWl0aXZlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gSWR4ID0gU3RyaW5nIHwgSW50XG4gKiBAc2lnIFtJZHhdIC0+IGEgLT4ge2F9IC0+IHthfVxuICogQHBhcmFtIHtBcnJheX0gcGF0aCB0aGUgcGF0aCB0byBzZXRcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjbG9uZVxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyBvYmplY3QgZXF1aXZhbGVudCB0byB0aGUgb3JpZ2luYWwgZXhjZXB0IGFsb25nIHRoZSBzcGVjaWZpZWQgcGF0aC5cbiAqIEBzZWUgUi5kaXNzb2NQYXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hc3NvY1BhdGgoWydhJywgJ2InLCAnYyddLCA0Miwge2E6IHtiOiB7YzogMH19fSk7IC8vPT4ge2E6IHtiOiB7YzogNDJ9fX1cbiAqXG4gKiAgICAgIC8vIEFueSBtaXNzaW5nIG9yIG5vbi1vYmplY3Qga2V5cyBpbiBwYXRoIHdpbGwgYmUgb3ZlcnJpZGRlblxuICogICAgICBSLmFzc29jUGF0aChbJ2EnLCAnYicsICdjJ10sIDQyLCB7YTogNX0pOyAvLz0+IHthOiB7Yjoge2M6IDQyfX19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBhc3NvY1BhdGgocGF0aCwgdmFsLCBvYmopIHtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB2YXIgaWR4ID0gcGF0aFswXTtcbiAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgIHZhciBuZXh0T2JqID0gKCFpc05pbChvYmopICYmIF9oYXMoaWR4LCBvYmopKSA/IG9ialtpZHhdIDogX2lzSW50ZWdlcihwYXRoWzFdKSA/IFtdIDoge307XG4gICAgdmFsID0gYXNzb2NQYXRoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhdGgsIDEpLCB2YWwsIG5leHRPYmopO1xuICB9XG4gIGlmIChfaXNJbnRlZ2VyKGlkeCkgJiYgX2lzQXJyYXkob2JqKSkge1xuICAgIHZhciBhcnIgPSBbXS5jb25jYXQob2JqKTtcbiAgICBhcnJbaWR4XSA9IHZhbDtcbiAgICByZXR1cm4gYXJyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhc3NvYyhpZHgsIHZhbCwgb2JqKTtcbiAgfVxufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIG5BcnkgPSByZXF1aXJlKCcuL25BcnknKTtcblxuXG4vKipcbiAqIFdyYXBzIGEgZnVuY3Rpb24gb2YgYW55IGFyaXR5IChpbmNsdWRpbmcgbnVsbGFyeSkgaW4gYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHNcbiAqIGV4YWN0bHkgMiBwYXJhbWV0ZXJzLiBBbnkgZXh0cmFuZW91cyBwYXJhbWV0ZXJzIHdpbGwgbm90IGJlIHBhc3NlZCB0byB0aGVcbiAqIHN1cHBsaWVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqIC0+IGMpIC0+IChhLCBiIC0+IGMpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB3cmFwcGluZyBgZm5gLiBUaGUgbmV3IGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gYmUgb2ZcbiAqICAgICAgICAgYXJpdHkgMi5cbiAqIEBzZWUgUi5uQXJ5LCBSLnVuYXJ5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHRha2VzVGhyZWVBcmdzID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICogICAgICAgIHJldHVybiBbYSwgYiwgY107XG4gKiAgICAgIH07XG4gKiAgICAgIHRha2VzVGhyZWVBcmdzLmxlbmd0aDsgLy89PiAzXG4gKiAgICAgIHRha2VzVGhyZWVBcmdzKDEsIDIsIDMpOyAvLz0+IFsxLCAyLCAzXVxuICpcbiAqICAgICAgdmFyIHRha2VzVHdvQXJncyA9IFIuYmluYXJ5KHRha2VzVGhyZWVBcmdzKTtcbiAqICAgICAgdGFrZXNUd29BcmdzLmxlbmd0aDsgLy89PiAyXG4gKiAgICAgIC8vIE9ubHkgMiBhcmd1bWVudHMgYXJlIHBhc3NlZCB0byB0aGUgd3JhcHBlZCBmdW5jdGlvblxuICogICAgICB0YWtlc1R3b0FyZ3MoMSwgMiwgMyk7IC8vPT4gWzEsIDIsIHVuZGVmaW5lZF1cbiAqIEBzeW1iIFIuYmluYXJ5KGYpKGEsIGIsIGMpID0gZihhLCBiKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gYmluYXJ5KGZuKSB7XG4gIHJldHVybiBuQXJ5KDIsIGZuKTtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaXMgYm91bmQgdG8gYSBjb250ZXh0LlxuICogTm90ZTogYFIuYmluZGAgZG9lcyBub3QgcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBhcmd1bWVudC1iaW5kaW5nIGNhcGFiaWxpdGllcyBvZlxuICogW0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoKiAtPiAqKSAtPiB7Kn0gLT4gKCogLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBiaW5kIHRvIGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzT2JqIFRoZSBjb250ZXh0IHRvIGJpbmQgYGZuYCB0b1xuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB3aWxsIGV4ZWN1dGUgaW4gdGhlIGNvbnRleHQgb2YgYHRoaXNPYmpgLlxuICogQHNlZSBSLnBhcnRpYWxcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbG9nID0gUi5iaW5kKGNvbnNvbGUubG9nLCBjb25zb2xlKTtcbiAqICAgICAgUi5waXBlKFIuYXNzb2MoJ2EnLCAyKSwgUi50YXAobG9nKSwgUi5hc3NvYygnYScsIDMpKSh7YTogMX0pOyAvLz0+IHthOiAzfVxuICogICAgICAvLyBsb2dzIHthOiAyfVxuICogQHN5bWIgUi5iaW5kKGYsIG8pKGEsIGIpID0gZi5jYWxsKG8sIGEsIGIpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBiaW5kKGZuLCB0aGlzT2JqKSB7XG4gIHJldHVybiBfYXJpdHkoZm4ubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJndW1lbnRzKTtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0Z1bmN0aW9uJyk7XG52YXIgYW5kID0gcmVxdWlyZSgnLi9hbmQnKTtcbnZhciBsaWZ0ID0gcmVxdWlyZSgnLi9saWZ0Jyk7XG5cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHdoaWNoIGNhbGxzIHRoZSB0d28gcHJvdmlkZWQgZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSBgJiZgXG4gKiBvZiB0aGUgcmVzdWx0cy5cbiAqIEl0IHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QgZnVuY3Rpb24gaWYgaXQgaXMgZmFsc2UteSBhbmQgdGhlIHJlc3VsdFxuICogb2YgdGhlIHNlY29uZCBmdW5jdGlvbiBvdGhlcndpc2UuIE5vdGUgdGhhdCB0aGlzIGlzIHNob3J0LWNpcmN1aXRlZCxcbiAqIG1lYW5pbmcgdGhhdCB0aGUgc2Vjb25kIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGludm9rZWQgaWYgdGhlIGZpcnN0IHJldHVybnMgYVxuICogZmFsc2UteSB2YWx1ZS5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBmdW5jdGlvbnMsIGBSLmJvdGhgIGFsc28gYWNjZXB0cyBhbnkgZmFudGFzeS1sYW5kIGNvbXBhdGlibGVcbiAqIGFwcGxpY2F0aXZlIGZ1bmN0b3IuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTIuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+IEJvb2xlYW4pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnIEFub3RoZXIgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgaXRzIGFyZ3VtZW50cyB0byBgZmAgYW5kIGBnYCBhbmQgYCYmYHMgdGhlaXIgb3V0cHV0cyB0b2dldGhlci5cbiAqIEBzZWUgUi5hbmRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZ3QxMCA9IFIuZ3QoUi5fXywgMTApXG4gKiAgICAgIHZhciBsdDIwID0gUi5sdChSLl9fLCAyMClcbiAqICAgICAgdmFyIGYgPSBSLmJvdGgoZ3QxMCwgbHQyMCk7XG4gKiAgICAgIGYoMTUpOyAvLz0+IHRydWVcbiAqICAgICAgZigzMCk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGJvdGgoZiwgZykge1xuICByZXR1cm4gX2lzRnVuY3Rpb24oZikgP1xuICAgIGZ1bmN0aW9uIF9ib3RoKCkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKSAmJiBnLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSA6XG4gICAgbGlmdChhbmQpKGYsIGcpO1xufSk7XG4iLCJ2YXIgY3VycnkgPSByZXF1aXJlKCcuL2N1cnJ5Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgY2FsbGluZyBpdHMgZmlyc3QgYXJndW1lbnQgd2l0aCB0aGUgcmVtYWluaW5nXG4gKiBhcmd1bWVudHMuIFRoaXMgaXMgb2NjYXNpb25hbGx5IHVzZWZ1bCBhcyBhIGNvbnZlcmdpbmcgZnVuY3Rpb24gZm9yXG4gKiBbYFIuY29udmVyZ2VgXSgjY29udmVyZ2UpOiB0aGUgZmlyc3QgYnJhbmNoIGNhbiBwcm9kdWNlIGEgZnVuY3Rpb24gd2hpbGUgdGhlXG4gKiByZW1haW5pbmcgYnJhbmNoZXMgcHJvZHVjZSB2YWx1ZXMgdG8gYmUgcGFzc2VkIHRvIHRoYXQgZnVuY3Rpb24gYXMgaXRzXG4gKiBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSksKi4uLiAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHJlbWFpbmluZyBhcmd1bWVudHMuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG51bWJlciBvZiBwb3NpdGlvbmFsIGFyZ3VtZW50cy5cbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuYXBwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmNhbGwoUi5hZGQsIDEsIDIpOyAvLz0+IDNcbiAqXG4gKiAgICAgIHZhciBpbmRlbnROID0gUi5waXBlKFIudGltZXMoUi5hbHdheXMoJyAnKSksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFIuam9pbignJyksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucmVwbGFjZSgvXig/ISQpL2dtKSk7XG4gKlxuICogICAgICB2YXIgZm9ybWF0ID0gUi5jb252ZXJnZShSLmNhbGwsIFtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucGlwZShSLnByb3AoJ2luZGVudCcpLCBpbmRlbnROKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucHJvcCgndmFsdWUnKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAqXG4gKiAgICAgIGZvcm1hdCh7aW5kZW50OiAyLCB2YWx1ZTogJ2Zvb1xcbmJhclxcbmJhelxcbid9KTsgLy89PiAnICBmb29cXG4gIGJhclxcbiAgYmF6XFxuJ1xuICogQHN5bWIgUi5jYWxsKGYsIGEsIGIpID0gZihhLCBiKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnJ5KGZ1bmN0aW9uIGNhbGwoZm4pIHtcbiAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfbWFrZUZsYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19tYWtlRmxhdCcpO1xudmFyIF94Y2hhaW4gPSByZXF1aXJlKCcuL2ludGVybmFsL194Y2hhaW4nKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG5cbi8qKlxuICogYGNoYWluYCBtYXBzIGEgZnVuY3Rpb24gb3ZlciBhIGxpc3QgYW5kIGNvbmNhdGVuYXRlcyB0aGUgcmVzdWx0cy4gYGNoYWluYFxuICogaXMgYWxzbyBrbm93biBhcyBgZmxhdE1hcGAgaW4gc29tZSBsaWJyYXJpZXNcbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgY2hhaW5gIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LFxuICogYWNjb3JkaW5nIHRvIHRoZSBbRmFudGFzeUxhbmQgQ2hhaW4gc3BlY10oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNjaGFpbikuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBDaGFpbiBtID0+IChhIC0+IG0gYikgLT4gbSBhIC0+IG0gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcCB3aXRoXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIG1hcCBvdmVyXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIHJlc3VsdCBvZiBmbGF0LW1hcHBpbmcgYGxpc3RgIHdpdGggYGZuYFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkdXBsaWNhdGUgPSBuID0+IFtuLCBuXTtcbiAqICAgICAgUi5jaGFpbihkdXBsaWNhdGUsIFsxLCAyLCAzXSk7IC8vPT4gWzEsIDEsIDIsIDIsIDMsIDNdXG4gKlxuICogICAgICBSLmNoYWluKFIuYXBwZW5kLCBSLmhlYWQpKFsxLCAyLCAzXSk7IC8vPT4gWzEsIDIsIDMsIDFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnZmFudGFzeS1sYW5kL2NoYWluJywgJ2NoYWluJ10sIF94Y2hhaW4sIGZ1bmN0aW9uIGNoYWluKGZuLCBtb25hZCkge1xuICBpZiAodHlwZW9mIG1vbmFkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIGZuKG1vbmFkKHgpKSh4KTsgfTtcbiAgfVxuICByZXR1cm4gX21ha2VGbGF0KGZhbHNlKShtYXAoZm4sIG1vbmFkKSk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG4vKipcbiAqIFJlc3RyaWN0cyBhIG51bWJlciB0byBiZSB3aXRoaW4gYSByYW5nZS5cbiAqXG4gKiBBbHNvIHdvcmtzIGZvciBvdGhlciBvcmRlcmVkIHR5cGVzIHN1Y2ggYXMgU3RyaW5ncyBhbmQgRGF0ZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjAuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBhID0+IGEgLT4gYSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW5pbXVtIFRoZSBsb3dlciBsaW1pdCBvZiB0aGUgY2xhbXAgKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhpbXVtIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgY2xhbXAgKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFJldHVybnMgYG1pbmltdW1gIHdoZW4gYHZhbCA8IG1pbmltdW1gLCBgbWF4aW11bWAgd2hlbiBgdmFsID4gbWF4aW11bWAsIHJldHVybnMgYHZhbGAgb3RoZXJ3aXNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5jbGFtcCgxLCAxMCwgLTUpIC8vID0+IDFcbiAqICAgICAgUi5jbGFtcCgxLCAxMCwgMTUpIC8vID0+IDEwXG4gKiAgICAgIFIuY2xhbXAoMSwgMTAsIDQpICAvLyA9PiA0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWluIG11c3Qgbm90IGJlIGdyZWF0ZXIgdGhhbiBtYXggaW4gY2xhbXAobWluLCBtYXgsIHZhbHVlKScpO1xuICB9XG4gIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6XG4gICAgICAgICB2YWx1ZSA+IG1heCA/IG1heCA6XG4gICAgICAgICB2YWx1ZTtcbn0pO1xuIiwidmFyIF9jbG9uZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Nsb25lJyk7XG52YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgdmFsdWUgd2hpY2ggbWF5IGNvbnRhaW4gKG5lc3RlZCkgYEFycmF5YHMgYW5kXG4gKiBgT2JqZWN0YHMsIGBOdW1iZXJgcywgYFN0cmluZ2BzLCBgQm9vbGVhbmBzIGFuZCBgRGF0ZWBzLiBgRnVuY3Rpb25gcyBhcmVcbiAqIGFzc2lnbmVkIGJ5IHJlZmVyZW5jZSByYXRoZXIgdGhhbiBjb3BpZWRcbiAqXG4gKiBEaXNwYXRjaGVzIHRvIGEgYGNsb25lYCBtZXRob2QgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgeyp9IC0+IHsqfVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGNsb25lXG4gKiBAcmV0dXJuIHsqfSBBIGRlZXBseSBjbG9uZWQgY29weSBvZiBgdmFsYFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBvYmplY3RzID0gW3t9LCB7fSwge31dO1xuICogICAgICB2YXIgb2JqZWN0c0Nsb25lID0gUi5jbG9uZShvYmplY3RzKTtcbiAqICAgICAgb2JqZWN0cyA9PT0gb2JqZWN0c0Nsb25lOyAvLz0+IGZhbHNlXG4gKiAgICAgIG9iamVjdHNbMF0gPT09IG9iamVjdHNDbG9uZVswXTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gY2xvbmUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLmNsb25lID09PSAnZnVuY3Rpb24nID9cbiAgICB2YWx1ZS5jbG9uZSgpIDpcbiAgICBfY2xvbmUodmFsdWUsIFtdLCBbXSwgdHJ1ZSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBNYWtlcyBhIGNvbXBhcmF0b3IgZnVuY3Rpb24gb3V0IG9mIGEgZnVuY3Rpb24gdGhhdCByZXBvcnRzIHdoZXRoZXIgdGhlIGZpcnN0XG4gKiBlbGVtZW50IGlzIGxlc3MgdGhhbiB0aGUgc2Vjb25kLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIChhLCBiIC0+IEJvb2xlYW4pIC0+IChhLCBiIC0+IE51bWJlcilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgZnVuY3Rpb24gb2YgYXJpdHkgdHdvIHdoaWNoIHdpbGwgcmV0dXJuIGB0cnVlYCBpZiB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIGlzIGxlc3MgdGhhbiB0aGUgc2Vjb25kLCBgZmFsc2VgIG90aGVyd2lzZVxuICogQHJldHVybiB7RnVuY3Rpb259IEEgRnVuY3Rpb24gOjogYSAtPiBiIC0+IEludCB0aGF0IHJldHVybnMgYC0xYCBpZiBhIDwgYiwgYDFgIGlmIGIgPCBhLCBvdGhlcndpc2UgYDBgXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGJ5QWdlID0gUi5jb21wYXJhdG9yKChhLCBiKSA9PiBhLmFnZSA8IGIuYWdlKTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtcbiAqICAgICAgICAvLyAuLi5cbiAqICAgICAgXTtcbiAqICAgICAgdmFyIHBlb3BsZUJ5SW5jcmVhc2luZ0FnZSA9IFIuc29ydChieUFnZSwgcGVvcGxlKTtcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGNvbXBhcmF0b3IocHJlZCkge1xuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBwcmVkKGEsIGIpID8gLTEgOiBwcmVkKGIsIGEpID8gMSA6IDA7XG4gIH07XG59KTtcbiIsInZhciBsaWZ0ID0gcmVxdWlyZSgnLi9saWZ0Jyk7XG52YXIgbm90ID0gcmVxdWlyZSgnLi9ub3QnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYGZgIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gYGdgIHN1Y2ggdGhhdCBpZiBjYWxsZWQgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHNcbiAqIHdoZW4gYGZgIHJldHVybnMgYSBcInRydXRoeVwiIHZhbHVlLCBgZ2AgcmV0dXJucyBgZmFsc2VgIGFuZCB3aGVuIGBmYCByZXR1cm5zIGEgXCJmYWxzeVwiIHZhbHVlIGBnYCByZXR1cm5zIGB0cnVlYC5cbiAqXG4gKiBgUi5jb21wbGVtZW50YCBtYXkgYmUgYXBwbGllZCB0byBhbnkgZnVuY3RvclxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoKi4uLiAtPiAqKSAtPiAoKi4uLiAtPiBCb29sZWFuKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIubm90XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzTm90TmlsID0gUi5jb21wbGVtZW50KFIuaXNOaWwpO1xuICogICAgICBpc05pbChudWxsKTsgLy89PiB0cnVlXG4gKiAgICAgIGlzTm90TmlsKG51bGwpOyAvLz0+IGZhbHNlXG4gKiAgICAgIGlzTmlsKDcpOyAvLz0+IGZhbHNlXG4gKiAgICAgIGlzTm90TmlsKDcpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBsaWZ0KG5vdCk7XG4iLCJ2YXIgcGlwZSA9IHJlcXVpcmUoJy4vcGlwZScpO1xudmFyIHJldmVyc2UgPSByZXF1aXJlKCcuL3JldmVyc2UnKTtcblxuXG4vKipcbiAqIFBlcmZvcm1zIHJpZ2h0LXRvLWxlZnQgZnVuY3Rpb24gY29tcG9zaXRpb24uIFRoZSByaWdodG1vc3QgZnVuY3Rpb24gbWF5IGhhdmVcbiAqIGFueSBhcml0eTsgdGhlIHJlbWFpbmluZyBmdW5jdGlvbnMgbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIHJlc3VsdCBvZiBjb21wb3NlIGlzIG5vdCBhdXRvbWF0aWNhbGx5IGN1cnJpZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCh5IC0+IHopLCAoeCAtPiB5KSwgLi4uLCAobyAtPiBwKSwgKChhLCBiLCAuLi4sIG4pIC0+IG8pKSAtPiAoKGEsIGIsIC4uLiwgbikgLT4geilcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IC4uLmZ1bmN0aW9ucyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLnBpcGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgY2xhc3N5R3JlZXRpbmcgPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4gXCJUaGUgbmFtZSdzIFwiICsgbGFzdE5hbWUgKyBcIiwgXCIgKyBmaXJzdE5hbWUgKyBcIiBcIiArIGxhc3ROYW1lXG4gKiAgICAgIHZhciB5ZWxsR3JlZXRpbmcgPSBSLmNvbXBvc2UoUi50b1VwcGVyLCBjbGFzc3lHcmVldGluZyk7XG4gKiAgICAgIHllbGxHcmVldGluZygnSmFtZXMnLCAnQm9uZCcpOyAvLz0+IFwiVEhFIE5BTUUnUyBCT05ELCBKQU1FUyBCT05EXCJcbiAqXG4gKiAgICAgIFIuY29tcG9zZShNYXRoLmFicywgUi5hZGQoMSksIFIubXVsdGlwbHkoMikpKC00KSAvLz0+IDdcbiAqXG4gKiBAc3ltYiBSLmNvbXBvc2UoZiwgZywgaCkoYSwgYikgPSBmKGcoaChhLCBiKSkpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXBvc2UgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50Jyk7XG4gIH1cbiAgcmV0dXJuIHBpcGUuYXBwbHkodGhpcywgcmV2ZXJzZShhcmd1bWVudHMpKTtcbn07XG4iLCJ2YXIgY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG52YXIgY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByaWdodC10by1sZWZ0IEtsZWlzbGkgY29tcG9zaXRpb24gb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyxcbiAqIGVhY2ggb2Ygd2hpY2ggbXVzdCByZXR1cm4gYSB2YWx1ZSBvZiBhIHR5cGUgc3VwcG9ydGVkIGJ5IFtgY2hhaW5gXSgjY2hhaW4pLlxuICpcbiAqIGBSLmNvbXBvc2VLKGgsIGcsIGYpYCBpcyBlcXVpdmFsZW50IHRvIGBSLmNvbXBvc2UoUi5jaGFpbihoKSwgUi5jaGFpbihnKSwgUi5jaGFpbihmKSlgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBDaGFpbiBtID0+ICgoeSAtPiBtIHopLCAoeCAtPiBtIHkpLCAuLi4sIChhIC0+IG0gYikpIC0+IChhIC0+IG0geilcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IC4uLmZ1bmN0aW9ucyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLnBpcGVLXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgIC8vICBnZXQgOjogU3RyaW5nIC0+IE9iamVjdCAtPiBNYXliZSAqXG4gKiAgICAgICB2YXIgZ2V0ID0gUi5jdXJyeSgocHJvcE5hbWUsIG9iaikgPT4gTWF5YmUob2JqW3Byb3BOYW1lXSkpXG4gKlxuICogICAgICAgLy8gIGdldFN0YXRlQ29kZSA6OiBNYXliZSBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nXG4gKiAgICAgICB2YXIgZ2V0U3RhdGVDb2RlID0gUi5jb21wb3NlSyhcbiAqICAgICAgICAgUi5jb21wb3NlKE1heWJlLm9mLCBSLnRvVXBwZXIpLFxuICogICAgICAgICBnZXQoJ3N0YXRlJyksXG4gKiAgICAgICAgIGdldCgnYWRkcmVzcycpLFxuICogICAgICAgICBnZXQoJ3VzZXInKSxcbiAqICAgICAgICk7XG4gKiAgICAgICBnZXRTdGF0ZUNvZGUoe1widXNlclwiOntcImFkZHJlc3NcIjp7XCJzdGF0ZVwiOlwibnlcIn19fSk7IC8vPT4gTWF5YmUuSnVzdChcIk5ZXCIpXG4gKiAgICAgICBnZXRTdGF0ZUNvZGUoe30pOyAvLz0+IE1heWJlLk5vdGhpbmcoKVxuICogQHN5bWIgUi5jb21wb3NlSyhmLCBnLCBoKShhKSA9IFIuY2hhaW4oZiwgUi5jaGFpbihnLCBoKGEpKSlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21wb3NlSygpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXBvc2VLIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCcpO1xuICB9XG4gIHZhciBpbml0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIGxhc3QgPSBpbml0LnBvcCgpO1xuICByZXR1cm4gY29tcG9zZShjb21wb3NlLmFwcGx5KHRoaXMsIG1hcChjaGFpbiwgaW5pdCkpLCBsYXN0KTtcbn07XG4iLCJ2YXIgcGlwZVAgPSByZXF1aXJlKCcuL3BpcGVQJyk7XG52YXIgcmV2ZXJzZSA9IHJlcXVpcmUoJy4vcmV2ZXJzZScpO1xuXG5cbi8qKlxuICogUGVyZm9ybXMgcmlnaHQtdG8tbGVmdCBjb21wb3NpdGlvbiBvZiBvbmUgb3IgbW9yZSBQcm9taXNlLXJldHVybmluZ1xuICogZnVuY3Rpb25zLiBUaGUgcmlnaHRtb3N0IGZ1bmN0aW9uIG1heSBoYXZlIGFueSBhcml0eTsgdGhlIHJlbWFpbmluZ1xuICogZnVuY3Rpb25zIG11c3QgYmUgdW5hcnkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTAuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoeSAtPiBQcm9taXNlIHopLCAoeCAtPiBQcm9taXNlIHkpLCAuLi4sIChhIC0+IFByb21pc2UgYikpIC0+IChhIC0+IFByb21pc2UgeilcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmN0aW9ucyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLnBpcGVQXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRiID0ge1xuICogICAgICAgIHVzZXJzOiB7XG4gKiAgICAgICAgICBKT0U6IHtcbiAqICAgICAgICAgICAgbmFtZTogJ0pvZScsXG4gKiAgICAgICAgICAgIGZvbGxvd2VyczogWydTVEVWRScsICdTVVpZJ11cbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH1cbiAqXG4gKiAgICAgIC8vIFdlJ2xsIHByZXRlbmQgdG8gZG8gYSBkYiBsb29rdXAgd2hpY2ggcmV0dXJucyBhIHByb21pc2VcbiAqICAgICAgdmFyIGxvb2t1cFVzZXIgPSAodXNlcklkKSA9PiBQcm9taXNlLnJlc29sdmUoZGIudXNlcnNbdXNlcklkXSlcbiAqICAgICAgdmFyIGxvb2t1cEZvbGxvd2VycyA9ICh1c2VyKSA9PiBQcm9taXNlLnJlc29sdmUodXNlci5mb2xsb3dlcnMpXG4gKiAgICAgIGxvb2t1cFVzZXIoJ0pPRScpLnRoZW4obG9va3VwRm9sbG93ZXJzKVxuICpcbiAqICAgICAgLy8gIGZvbGxvd2Vyc0ZvclVzZXIgOjogU3RyaW5nIC0+IFByb21pc2UgW1VzZXJJZF1cbiAqICAgICAgdmFyIGZvbGxvd2Vyc0ZvclVzZXIgPSBSLmNvbXBvc2VQKGxvb2t1cEZvbGxvd2VycywgbG9va3VwVXNlcik7XG4gKiAgICAgIGZvbGxvd2Vyc0ZvclVzZXIoJ0pPRScpLnRoZW4oZm9sbG93ZXJzID0+IGNvbnNvbGUubG9nKCdGb2xsb3dlcnM6JywgZm9sbG93ZXJzKSlcbiAqICAgICAgLy8gRm9sbG93ZXJzOiBbXCJTVEVWRVwiLFwiU1VaWVwiXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbXBvc2VQKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29tcG9zZVAgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50Jyk7XG4gIH1cbiAgcmV0dXJuIHBpcGVQLmFwcGx5KHRoaXMsIHJldmVyc2UoYXJndW1lbnRzKSk7XG59O1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzQXJyYXknKTtcbnZhciBfaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzRnVuY3Rpb24nKTtcbnZhciBfaXNTdHJpbmcgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc1N0cmluZycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIGNvbmNhdGVuYXRpbmcgdGhlIGdpdmVuIGxpc3RzIG9yIHN0cmluZ3MuXG4gKlxuICogTm90ZTogYFIuY29uY2F0YCBleHBlY3RzIGJvdGggYXJndW1lbnRzIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGUsXG4gKiB1bmxpa2UgdGhlIG5hdGl2ZSBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kLiBJdCB3aWxsIHRocm93XG4gKiBhbiBlcnJvciBpZiB5b3UgYGNvbmNhdGAgYW4gQXJyYXkgd2l0aCBhIG5vbi1BcnJheSB2YWx1ZS5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgY29uY2F0YCBtZXRob2Qgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBmaXJzdExpc3QgVGhlIGZpcnN0IGxpc3RcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBzZWNvbmRMaXN0IFRoZSBzZWNvbmQgbGlzdFxuICogQHJldHVybiB7QXJyYXl8U3RyaW5nfSBBIGxpc3QgY29uc2lzdGluZyBvZiB0aGUgZWxlbWVudHMgb2YgYGZpcnN0TGlzdGAgZm9sbG93ZWQgYnkgdGhlIGVsZW1lbnRzIG9mXG4gKiBgc2Vjb25kTGlzdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuY29uY2F0KCdBQkMnLCAnREVGJyk7IC8vICdBQkNERUYnXG4gKiAgICAgIFIuY29uY2F0KFs0LCA1LCA2XSwgWzEsIDIsIDNdKTsgLy89PiBbNCwgNSwgNiwgMSwgMiwgM11cbiAqICAgICAgUi5jb25jYXQoW10sIFtdKTsgLy89PiBbXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gY29uY2F0KGEsIGIpIHtcbiAgaWYgKF9pc0FycmF5KGEpKSB7XG4gICAgaWYgKF9pc0FycmF5KGIpKSB7XG4gICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IodG9TdHJpbmcoYikgKyAnIGlzIG5vdCBhbiBhcnJheScpO1xuICB9XG4gIGlmIChfaXNTdHJpbmcoYSkpIHtcbiAgICBpZiAoX2lzU3RyaW5nKGIpKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IodG9TdHJpbmcoYikgKyAnIGlzIG5vdCBhIHN0cmluZycpO1xuICB9XG4gIGlmIChhICE9IG51bGwgJiYgX2lzRnVuY3Rpb24oYVsnZmFudGFzeS1sYW5kL2NvbmNhdCddKSkge1xuICAgIHJldHVybiBhWydmYW50YXN5LWxhbmQvY29uY2F0J10oYik7XG4gIH1cbiAgaWYgKGEgIT0gbnVsbCAmJiBfaXNGdW5jdGlvbihhLmNvbmNhdCkpIHtcbiAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcih0b1N0cmluZyhhKSArICcgZG9lcyBub3QgaGF2ZSBhIG1ldGhvZCBuYW1lZCBcImNvbmNhdFwiIG9yIFwiZmFudGFzeS1sYW5kL2NvbmNhdFwiJyk7XG59KTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcml0eScpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xudmFyIG1heCA9IHJlcXVpcmUoJy4vbWF4Jyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgYGZuYCwgd2hpY2ggZW5jYXBzdWxhdGVzIGBpZi9lbHNlLCBpZi9lbHNlLCAuLi5gIGxvZ2ljLlxuICogYFIuY29uZGAgdGFrZXMgYSBsaXN0IG9mIFtwcmVkaWNhdGUsIHRyYW5zZm9ybWVyXSBwYWlycy4gQWxsIG9mIHRoZSBhcmd1bWVudHNcbiAqIHRvIGBmbmAgYXJlIGFwcGxpZWQgdG8gZWFjaCBvZiB0aGUgcHJlZGljYXRlcyBpbiB0dXJuIHVudGlsIG9uZSByZXR1cm5zIGFcbiAqIFwidHJ1dGh5XCIgdmFsdWUsIGF0IHdoaWNoIHBvaW50IGBmbmAgcmV0dXJucyB0aGUgcmVzdWx0IG9mIGFwcGx5aW5nIGl0c1xuICogYXJndW1lbnRzIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRyYW5zZm9ybWVyLiBJZiBub25lIG9mIHRoZSBwcmVkaWNhdGVzXG4gKiBtYXRjaGVzLCBgZm5gIHJldHVybnMgdW5kZWZpbmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjYuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIFtbKCouLi4gLT4gQm9vbGVhbiksKCouLi4gLT4gKildXSAtPiAoKi4uLiAtPiAqKVxuICogQHBhcmFtIHtBcnJheX0gcGFpcnMgQSBsaXN0IG9mIFtwcmVkaWNhdGUsIHRyYW5zZm9ybWVyXVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGZuID0gUi5jb25kKFtcbiAqICAgICAgICBbUi5lcXVhbHMoMCksICAgUi5hbHdheXMoJ3dhdGVyIGZyZWV6ZXMgYXQgMMKwQycpXSxcbiAqICAgICAgICBbUi5lcXVhbHMoMTAwKSwgUi5hbHdheXMoJ3dhdGVyIGJvaWxzIGF0IDEwMMKwQycpXSxcbiAqICAgICAgICBbUi5ULCAgICAgICAgICAgdGVtcCA9PiAnbm90aGluZyBzcGVjaWFsIGhhcHBlbnMgYXQgJyArIHRlbXAgKyAnwrBDJ11cbiAqICAgICAgXSk7XG4gKiAgICAgIGZuKDApOyAvLz0+ICd3YXRlciBmcmVlemVzIGF0IDDCsEMnXG4gKiAgICAgIGZuKDUwKTsgLy89PiAnbm90aGluZyBzcGVjaWFsIGhhcHBlbnMgYXQgNTDCsEMnXG4gKiAgICAgIGZuKDEwMCk7IC8vPT4gJ3dhdGVyIGJvaWxzIGF0IDEwMMKwQydcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGNvbmQocGFpcnMpIHtcbiAgdmFyIGFyaXR5ID0gcmVkdWNlKG1heCxcbiAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICBtYXAoZnVuY3Rpb24ocGFpcikgeyByZXR1cm4gcGFpclswXS5sZW5ndGg7IH0sIHBhaXJzKSk7XG4gIHJldHVybiBfYXJpdHkoYXJpdHksIGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCBwYWlycy5sZW5ndGgpIHtcbiAgICAgIGlmIChwYWlyc1tpZHhdWzBdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIHBhaXJzW2lkeF1bMV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY29uc3RydWN0TiA9IHJlcXVpcmUoJy4vY29uc3RydWN0TicpO1xuXG5cbi8qKlxuICogV3JhcHMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnNpZGUgYSBjdXJyaWVkIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZFxuICogd2l0aCB0aGUgc2FtZSBhcmd1bWVudHMgYW5kIHJldHVybnMgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiB7Kn0pIC0+ICgqIC0+IHsqfSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byB3cmFwLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgd3JhcHBlZCwgY3VycmllZCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqIEBzZWUgUi5pbnZva2VyXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gQ29uc3RydWN0b3IgZnVuY3Rpb25cbiAqICAgICAgZnVuY3Rpb24gQW5pbWFsKGtpbmQpIHtcbiAqICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xuICogICAgICB9O1xuICogICAgICBBbmltYWwucHJvdG90eXBlLnNpZ2h0aW5nID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgcmV0dXJuIFwiSXQncyBhIFwiICsgdGhpcy5raW5kICsgXCIhXCI7XG4gKiAgICAgIH1cbiAqXG4gKiAgICAgIHZhciBBbmltYWxDb25zdHJ1Y3RvciA9IFIuY29uc3RydWN0KEFuaW1hbClcbiAqXG4gKiAgICAgIC8vIE5vdGljZSB3ZSBubyBsb25nZXIgbmVlZCB0aGUgJ25ldycga2V5d29yZDpcbiAqICAgICAgQW5pbWFsQ29uc3RydWN0b3IoJ1BpZycpOyAvLz0+IHtcImtpbmRcIjogXCJQaWdcIiwgXCJzaWdodGluZ1wiOiBmdW5jdGlvbiAoKXsuLi59fTtcbiAqXG4gKiAgICAgIHZhciBhbmltYWxUeXBlcyA9IFtcIkxpb25cIiwgXCJUaWdlclwiLCBcIkJlYXJcIl07XG4gKiAgICAgIHZhciBhbmltYWxTaWdodGluZyA9IFIuaW52b2tlcigwLCAnc2lnaHRpbmcnKTtcbiAqICAgICAgdmFyIHNpZ2h0TmV3QW5pbWFsID0gUi5jb21wb3NlKGFuaW1hbFNpZ2h0aW5nLCBBbmltYWxDb25zdHJ1Y3Rvcik7XG4gKiAgICAgIFIubWFwKHNpZ2h0TmV3QW5pbWFsLCBhbmltYWxUeXBlcyk7IC8vPT4gW1wiSXQncyBhIExpb24hXCIsIFwiSXQncyBhIFRpZ2VyIVwiLCBcIkl0J3MgYSBCZWFyIVwiXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gY29uc3RydWN0KEZuKSB7XG4gIHJldHVybiBjb25zdHJ1Y3ROKEZuLmxlbmd0aCwgRm4pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGN1cnJ5ID0gcmVxdWlyZSgnLi9jdXJyeScpO1xudmFyIG5BcnkgPSByZXF1aXJlKCcuL25BcnknKTtcblxuXG4vKipcbiAqIFdyYXBzIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gaW5zaWRlIGEgY3VycmllZCBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzIGFuZCByZXR1cm5zIHRoZSBzYW1lIHR5cGUuIFRoZSBhcml0eSBvZiB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGlzIHNwZWNpZmllZCB0byBhbGxvdyB1c2luZyB2YXJpYWRpYyBjb25zdHJ1Y3RvciBmdW5jdGlvbnMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqIC0+IHsqfSkgLT4gKCogLT4geyp9KVxuICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIGFyaXR5IG9mIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IEZuIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB0byB3cmFwLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgd3JhcHBlZCwgY3VycmllZCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyBWYXJpYWRpYyBDb25zdHJ1Y3RvciBmdW5jdGlvblxuICogICAgICBmdW5jdGlvbiBTYWxhZCgpIHtcbiAqICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gYXJndW1lbnRzO1xuICogICAgICB9O1xuICogICAgICBTYWxhZC5wcm90b3R5cGUucmVjaXBlID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgdmFyIGluc3RydWN0aW9ucyA9IFIubWFwKChpbmdyZWRpZW50KSA9PiAoXG4gKiAgICAgICAgICAnQWRkIGEgd2hvbGxvcCBvZiAnICsgaW5ncmVkaWVudCwgdGhpcy5pbmdyZWRpZW50cylcbiAqICAgICAgICApXG4gKiAgICAgICAgcmV0dXJuIFIuam9pbignXFxuJywgaW5zdHJ1Y3Rpb25zKVxuICogICAgICB9XG4gKlxuICogICAgICB2YXIgVGhyZWVMYXllclNhbGFkID0gUi5jb25zdHJ1Y3ROKDMsIFNhbGFkKVxuICpcbiAqICAgICAgLy8gTm90aWNlIHdlIG5vIGxvbmdlciBuZWVkIHRoZSAnbmV3JyBrZXl3b3JkLCBhbmQgdGhlIGNvbnN0cnVjdG9yIGlzIGN1cnJpZWQgZm9yIDMgYXJndW1lbnRzLlxuICogICAgICB2YXIgc2FsYWQgPSBUaHJlZUxheWVyU2FsYWQoJ01heW9ubmFpc2UnKSgnUG90YXRvIENoaXBzJykoJ0tldGNodXAnKVxuICogICAgICBjb25zb2xlLmxvZyhzYWxhZC5yZWNpcGUoKSk7XG4gKiAgICAgIC8vIEFkZCBhIHdob2xsb3Agb2YgTWF5b25uYWlzZVxuICogICAgICAvLyBBZGQgYSB3aG9sbG9wIG9mIFBvdGF0byBDaGlwc1xuICogICAgICAvLyBBZGQgYSB3aG9sbG9wIG9mIFBvdGF0byBLZXRjaHVwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBjb25zdHJ1Y3ROKG4sIEZuKSB7XG4gIGlmIChuID4gMTApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnN0cnVjdG9yIHdpdGggZ3JlYXRlciB0aGFuIHRlbiBhcmd1bWVudHMnKTtcbiAgfVxuICBpZiAobiA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBGbigpOyB9O1xuICB9XG4gIHJldHVybiBjdXJyeShuQXJ5KG4sIGZ1bmN0aW9uKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5KSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBjYXNlICAxOiByZXR1cm4gbmV3IEZuKCQwKTtcbiAgICAgIGNhc2UgIDI6IHJldHVybiBuZXcgRm4oJDAsICQxKTtcbiAgICAgIGNhc2UgIDM6IHJldHVybiBuZXcgRm4oJDAsICQxLCAkMik7XG4gICAgICBjYXNlICA0OiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzKTtcbiAgICAgIGNhc2UgIDU6IHJldHVybiBuZXcgRm4oJDAsICQxLCAkMiwgJDMsICQ0KTtcbiAgICAgIGNhc2UgIDY6IHJldHVybiBuZXcgRm4oJDAsICQxLCAkMiwgJDMsICQ0LCAkNSk7XG4gICAgICBjYXNlICA3OiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2KTtcbiAgICAgIGNhc2UgIDg6IHJldHVybiBuZXcgRm4oJDAsICQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3KTtcbiAgICAgIGNhc2UgIDk6IHJldHVybiBuZXcgRm4oJDAsICQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCk7XG4gICAgICBjYXNlIDEwOiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5KTtcbiAgICB9XG4gIH0pKTtcbn0pO1xuIiwidmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBlcXVhbCwgaW4gW2BSLmVxdWFsc2BdKCNlcXVhbHMpXG4gKiB0ZXJtcywgdG8gYXQgbGVhc3Qgb25lIGVsZW1lbnQgb2YgdGhlIGdpdmVuIGxpc3Q7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgYSAtPiBbYV0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIGl0ZW0gdG8gY29tcGFyZSBhZ2FpbnN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYW4gZXF1aXZhbGVudCBpdGVtIGlzIGluIHRoZSBsaXN0LCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqIEBzZWUgUi5hbnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmNvbnRhaW5zKDMsIFsxLCAyLCAzXSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmNvbnRhaW5zKDQsIFsxLCAyLCAzXSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5jb250YWlucyh7IG5hbWU6ICdGcmVkJyB9LCBbeyBuYW1lOiAnRnJlZCcgfV0pOyAvLz0+IHRydWVcbiAqICAgICAgUi5jb250YWlucyhbNDJdLCBbWzQyXV0pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9jb250YWlucyk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9tYXAgPSByZXF1aXJlKCcuL2ludGVybmFsL19tYXAnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xudmFyIG1heCA9IHJlcXVpcmUoJy4vbWF4Jyk7XG52YXIgcGx1Y2sgPSByZXF1aXJlKCcuL3BsdWNrJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSBjb252ZXJnaW5nIGZ1bmN0aW9uIGFuZCBhIGxpc3Qgb2YgYnJhbmNoaW5nIGZ1bmN0aW9ucyBhbmQgcmV0dXJuc1xuICogYSBuZXcgZnVuY3Rpb24uIFdoZW4gaW52b2tlZCwgdGhpcyBuZXcgZnVuY3Rpb24gaXMgYXBwbGllZCB0byBzb21lXG4gKiBhcmd1bWVudHMsIGVhY2ggYnJhbmNoaW5nIGZ1bmN0aW9uIGlzIGFwcGxpZWQgdG8gdGhvc2Ugc2FtZSBhcmd1bWVudHMuIFRoZVxuICogcmVzdWx0cyBvZiBlYWNoIGJyYW5jaGluZyBmdW5jdGlvbiBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50cyB0byB0aGUgY29udmVyZ2luZ1xuICogZnVuY3Rpb24gdG8gcHJvZHVjZSB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMlxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICh4MSAtPiB4MiAtPiAuLi4gLT4geikgLT4gWyhhIC0+IGIgLT4gLi4uIC0+IHgxKSwgKGEgLT4gYiAtPiAuLi4gLT4geDIpLCAuLi5dIC0+IChhIC0+IGIgLT4gLi4uIC0+IHopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZnRlciBBIGZ1bmN0aW9uLiBgYWZ0ZXJgIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWVzIG9mXG4gKiAgICAgICAgYGZuMWAgYW5kIGBmbjJgIGFzIGl0cyBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSBmdW5jdGlvbnMgQSBsaXN0IG9mIGZ1bmN0aW9ucy5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbi5cbiAqIEBzZWUgUi51c2VXaXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGF2ZXJhZ2UgPSBSLmNvbnZlcmdlKFIuZGl2aWRlLCBbUi5zdW0sIFIubGVuZ3RoXSlcbiAqICAgICAgYXZlcmFnZShbMSwgMiwgMywgNCwgNSwgNiwgN10pIC8vPT4gNFxuICpcbiAqICAgICAgdmFyIHN0cmFuZ2VDb25jYXQgPSBSLmNvbnZlcmdlKFIuY29uY2F0LCBbUi50b1VwcGVyLCBSLnRvTG93ZXJdKVxuICogICAgICBzdHJhbmdlQ29uY2F0KFwiWW9kZWxcIikgLy89PiBcIllPREVMeW9kZWxcIlxuICpcbiAqIEBzeW1iIFIuY29udmVyZ2UoZiwgW2csIGhdKShhLCBiKSA9IGYoZyhhLCBiKSwgaChhLCBiKSlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGNvbnZlcmdlKGFmdGVyLCBmbnMpIHtcbiAgcmV0dXJuIGN1cnJ5TihyZWR1Y2UobWF4LCAwLCBwbHVjaygnbGVuZ3RoJywgZm5zKSksIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICByZXR1cm4gYWZ0ZXIuYXBwbHkoY29udGV4dCwgX21hcChmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIGZucykpO1xuICB9KTtcbn0pO1xuIiwidmFyIHJlZHVjZUJ5ID0gcmVxdWlyZSgnLi9yZWR1Y2VCeScpO1xuXG5cbi8qKlxuICogQ291bnRzIHRoZSBlbGVtZW50cyBvZiBhIGxpc3QgYWNjb3JkaW5nIHRvIGhvdyBtYW55IG1hdGNoIGVhY2ggdmFsdWUgb2YgYVxuICoga2V5IGdlbmVyYXRlZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFJldHVybnMgYW4gb2JqZWN0IG1hcHBpbmcgdGhlIGtleXNcbiAqIHByb2R1Y2VkIGJ5IGBmbmAgdG8gdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBpbiB0aGUgbGlzdC4gTm90ZSB0aGF0IGFsbFxuICoga2V5cyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGJlY2F1c2Ugb2YgaG93IEphdmFTY3JpcHQgb2JqZWN0cyB3b3JrLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyAoYSAtPiBTdHJpbmcpIC0+IFthXSAtPiB7Kn1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB1c2VkIHRvIG1hcCB2YWx1ZXMgdG8ga2V5cy5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gY291bnQgZWxlbWVudHMgZnJvbS5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IG1hcHBpbmcga2V5cyB0byBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgaW4gdGhlIGxpc3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bWJlcnMgPSBbMS4wLCAxLjEsIDEuMiwgMi4wLCAzLjAsIDIuMl07XG4gKiAgICAgIFIuY291bnRCeShNYXRoLmZsb29yKShudW1iZXJzKTsgICAgLy89PiB7JzEnOiAzLCAnMic6IDIsICczJzogMX1cbiAqXG4gKiAgICAgIHZhciBsZXR0ZXJzID0gWydhJywgJ2InLCAnQScsICdhJywgJ0InLCAnYyddO1xuICogICAgICBSLmNvdW50QnkoUi50b0xvd2VyKShsZXR0ZXJzKTsgICAvLz0+IHsnYSc6IDMsICdiJzogMiwgJ2MnOiAxfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZUJ5KGZ1bmN0aW9uKGFjYywgZWxlbSkgeyByZXR1cm4gYWNjICsgMTsgfSwgMCk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgY3VycmllZCBlcXVpdmFsZW50IG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gVGhlIGN1cnJpZWQgZnVuY3Rpb25cbiAqIGhhcyB0d28gdW51c3VhbCBjYXBhYmlsaXRpZXMuIEZpcnN0LCBpdHMgYXJndW1lbnRzIG5lZWRuJ3QgYmUgcHJvdmlkZWQgb25lXG4gKiBhdCBhIHRpbWUuIElmIGBmYCBpcyBhIHRlcm5hcnkgZnVuY3Rpb24gYW5kIGBnYCBpcyBgUi5jdXJyeShmKWAsIHRoZVxuICogZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxKSgyKSgzKWBcbiAqICAgLSBgZygxKSgyLCAzKWBcbiAqICAgLSBgZygxLCAyKSgzKWBcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqXG4gKiBTZWNvbmRseSwgdGhlIHNwZWNpYWwgcGxhY2Vob2xkZXIgdmFsdWUgW2BSLl9fYF0oI19fKSBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5XG4gKiBcImdhcHNcIiwgYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLFxuICogcmVnYXJkbGVzcyBvZiB0aGVpciBwb3NpdGlvbnMuIElmIGBnYCBpcyBhcyBhYm92ZSBhbmQgYF9gIGlzIFtgUi5fX2BdKCNfXyksXG4gKiB0aGUgZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBhKSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5TlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhZGRGb3VyTnVtYmVycyA9IChhLCBiLCBjLCBkKSA9PiBhICsgYiArIGMgKyBkO1xuICpcbiAqICAgICAgdmFyIGN1cnJpZWRBZGRGb3VyTnVtYmVycyA9IFIuY3VycnkoYWRkRm91ck51bWJlcnMpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBjdXJyeShmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZm4pO1xufSk7XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9jdXJyeU4gPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLCB3aXRoIHRoZSBzcGVjaWZpZWRcbiAqIGFyaXR5LiBUaGUgY3VycmllZCBmdW5jdGlvbiBoYXMgdHdvIHVudXN1YWwgY2FwYWJpbGl0aWVzLiBGaXJzdCwgaXRzXG4gKiBhcmd1bWVudHMgbmVlZG4ndCBiZSBwcm92aWRlZCBvbmUgYXQgYSB0aW1lLiBJZiBgZ2AgaXMgYFIuY3VycnlOKDMsIGYpYCwgdGhlXG4gKiBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBbYFIuX19gXSgjX18pIG1heSBiZSB1c2VkIHRvIHNwZWNpZnlcbiAqIFwiZ2Fwc1wiLCBhbGxvd2luZyBwYXJ0aWFsIGFwcGxpY2F0aW9uIG9mIGFueSBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMsXG4gKiByZWdhcmRsZXNzIG9mIHRoZWlyIHBvc2l0aW9ucy4gSWYgYGdgIGlzIGFzIGFib3ZlIGFuZCBgX2AgaXMgW2BSLl9fYF0oI19fKSxcbiAqIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEsIDIsIDMpYFxuICogICAtIGBnKF8sIDIsIDMpKDEpYFxuICogICAtIGBnKF8sIF8sIDMpKDEpKDIpYFxuICogICAtIGBnKF8sIF8sIDMpKDEsIDIpYFxuICogICAtIGBnKF8sIDIpKDEpKDMpYFxuICogICAtIGBnKF8sIDIpKDEsIDMpYFxuICogICAtIGBnKF8sIDIpKF8sIDMpKDEpYFxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjUuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiAoKiAtPiBhKSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgYXJpdHkgZm9yIHRoZSByZXR1cm5lZCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgY3VycmllZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5jdXJyeVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBzdW1BcmdzID0gKC4uLmFyZ3MpID0+IFIuc3VtKGFyZ3MpO1xuICpcbiAqICAgICAgdmFyIGN1cnJpZWRBZGRGb3VyTnVtYmVycyA9IFIuY3VycnlOKDQsIHN1bUFyZ3MpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBjdXJyeU4obGVuZ3RoLCBmbikge1xuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIF9jdXJyeTEoZm4pO1xuICB9XG4gIHJldHVybiBfYXJpdHkobGVuZ3RoLCBfY3VycnlOKGxlbmd0aCwgW10sIGZuKSk7XG59KTtcbiIsInZhciBhZGQgPSByZXF1aXJlKCcuL2FkZCcpO1xuXG5cbi8qKlxuICogRGVjcmVtZW50cyBpdHMgYXJndW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfSBuIC0gMVxuICogQHNlZSBSLmluY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZGVjKDQyKTsgLy89PiA0MVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFkZCgtMSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Vjb25kIGFyZ3VtZW50IGlmIGl0IGlzIG5vdCBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gO1xuICogb3RoZXJ3aXNlIHRoZSBmaXJzdCBhcmd1bWVudCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRlZmF1bHRUbzQyID0gUi5kZWZhdWx0VG8oNDIpO1xuICpcbiAqICAgICAgZGVmYXVsdFRvNDIobnVsbCk7ICAvLz0+IDQyXG4gKiAgICAgIGRlZmF1bHRUbzQyKHVuZGVmaW5lZCk7ICAvLz0+IDQyXG4gKiAgICAgIGRlZmF1bHRUbzQyKCdSYW1kYScpOyAgLy89PiAnUmFtZGEnXG4gKiAgICAgIC8vIHBhcnNlSW50KCdzdHJpbmcnKSByZXN1bHRzIGluIE5hTlxuICogICAgICBkZWZhdWx0VG80MihwYXJzZUludCgnc3RyaW5nJykpOyAvLz0+IDQyXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBkZWZhdWx0VG8oZCwgdikge1xuICByZXR1cm4gdiA9PSBudWxsIHx8IHYgIT09IHYgPyBkIDogdjtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIE1ha2VzIGEgZGVzY2VuZGluZyBjb21wYXJhdG9yIGZ1bmN0aW9uIG91dCBvZiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhbHVlXG4gKiB0aGF0IGNhbiBiZSBjb21wYXJlZCB3aXRoIGA8YCBhbmQgYD5gLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIzLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBPcmQgYiA9PiAoYSAtPiBiKSAtPiBhIC0+IGEgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBBIGZ1bmN0aW9uIG9mIGFyaXR5IG9uZSB0aGF0IHJldHVybnMgYSB2YWx1ZSB0aGF0IGNhbiBiZSBjb21wYXJlZFxuICogQHBhcmFtIHsqfSBhIFRoZSBmaXJzdCBpdGVtIHRvIGJlIGNvbXBhcmVkLlxuICogQHBhcmFtIHsqfSBiIFRoZSBzZWNvbmQgaXRlbSB0byBiZSBjb21wYXJlZC5cbiAqIEByZXR1cm4ge051bWJlcn0gYC0xYCBpZiBmbihhKSA+IGZuKGIpLCBgMWAgaWYgZm4oYikgPiBmbihhKSwgb3RoZXJ3aXNlIGAwYFxuICogQHNlZSBSLmFzY2VuZFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBieUFnZSA9IFIuZGVzY2VuZChSLnByb3AoJ2FnZScpKTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtcbiAqICAgICAgICAvLyAuLi5cbiAqICAgICAgXTtcbiAqICAgICAgdmFyIHBlb3BsZUJ5T2xkZXN0Rmlyc3QgPSBSLnNvcnQoYnlBZ2UsIHBlb3BsZSk7XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBkZXNjZW5kKGZuLCBhLCBiKSB7XG4gIHZhciBhYSA9IGZuKGEpO1xuICB2YXIgYmIgPSBmbihiKTtcbiAgcmV0dXJuIGFhID4gYmIgPyAtMSA6IGFhIDwgYmIgPyAxIDogMDtcbn0pO1xuIiwidmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogRmluZHMgdGhlIHNldCAoaS5lLiBubyBkdXBsaWNhdGVzKSBvZiBhbGwgZWxlbWVudHMgaW4gdGhlIGZpcnN0IGxpc3Qgbm90XG4gKiBjb250YWluZWQgaW4gdGhlIHNlY29uZCBsaXN0LiBPYmplY3RzIGFuZCBBcnJheXMgYXJlIGNvbXBhcmVkIGluIHRlcm1zIG9mXG4gKiB2YWx1ZSBlcXVhbGl0eSwgbm90IHJlZmVyZW5jZSBlcXVhbGl0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBbKl0gLT4gWypdIC0+IFsqXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdDEgVGhlIGZpcnN0IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MiBUaGUgc2Vjb25kIGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGVsZW1lbnRzIGluIGBsaXN0MWAgdGhhdCBhcmUgbm90IGluIGBsaXN0MmAuXG4gKiBAc2VlIFIuZGlmZmVyZW5jZVdpdGgsIFIuc3ltbWV0cmljRGlmZmVyZW5jZSwgUi5zeW1tZXRyaWNEaWZmZXJlbmNlV2l0aCwgUi53aXRob3V0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5kaWZmZXJlbmNlKFsxLDIsMyw0XSwgWzcsNiw1LDQsM10pOyAvLz0+IFsxLDJdXG4gKiAgICAgIFIuZGlmZmVyZW5jZShbNyw2LDUsNCwzXSwgWzEsMiwzLDRdKTsgLy89PiBbNyw2LDVdXG4gKiAgICAgIFIuZGlmZmVyZW5jZShbe2E6IDF9LCB7YjogMn1dLCBbe2E6IDF9LCB7YzogM31dKSAvLz0+IFt7YjogMn1dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBkaWZmZXJlbmNlKGZpcnN0LCBzZWNvbmQpIHtcbiAgdmFyIG91dCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGZpcnN0TGVuID0gZmlyc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgZmlyc3RMZW4pIHtcbiAgICBpZiAoIV9jb250YWlucyhmaXJzdFtpZHhdLCBzZWNvbmQpICYmICFfY29udGFpbnMoZmlyc3RbaWR4XSwgb3V0KSkge1xuICAgICAgb3V0W291dC5sZW5ndGhdID0gZmlyc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn0pO1xuIiwidmFyIF9jb250YWluc1dpdGggPSByZXF1aXJlKCcuL2ludGVybmFsL19jb250YWluc1dpdGgnKTtcbnZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBGaW5kcyB0aGUgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIG9mIGFsbCBlbGVtZW50cyBpbiB0aGUgZmlyc3QgbGlzdCBub3RcbiAqIGNvbnRhaW5lZCBpbiB0aGUgc2Vjb25kIGxpc3QuIER1cGxpY2F0aW9uIGlzIGRldGVybWluZWQgYWNjb3JkaW5nIHRvIHRoZVxuICogdmFsdWUgcmV0dXJuZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSB0byB0d28gbGlzdCBlbGVtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyAoKGEsIGEpIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHVzZWQgdG8gdGVzdCB3aGV0aGVyIHR3byBpdGVtcyBhcmUgZXF1YWwuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgZmlyc3QgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIFRoZSBzZWNvbmQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgZWxlbWVudHMgaW4gYGxpc3QxYCB0aGF0IGFyZSBub3QgaW4gYGxpc3QyYC5cbiAqIEBzZWUgUi5kaWZmZXJlbmNlLCBSLnN5bW1ldHJpY0RpZmZlcmVuY2UsIFIuc3ltbWV0cmljRGlmZmVyZW5jZVdpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgY21wID0gKHgsIHkpID0+IHguYSA9PT0geS5hO1xuICogICAgICB2YXIgbDEgPSBbe2E6IDF9LCB7YTogMn0sIHthOiAzfV07XG4gKiAgICAgIHZhciBsMiA9IFt7YTogM30sIHthOiA0fV07XG4gKiAgICAgIFIuZGlmZmVyZW5jZVdpdGgoY21wLCBsMSwgbDIpOyAvLz0+IFt7YTogMX0sIHthOiAyfV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGRpZmZlcmVuY2VXaXRoKHByZWQsIGZpcnN0LCBzZWNvbmQpIHtcbiAgdmFyIG91dCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGZpcnN0TGVuID0gZmlyc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgZmlyc3RMZW4pIHtcbiAgICBpZiAoIV9jb250YWluc1dpdGgocHJlZCwgZmlyc3RbaWR4XSwgc2Vjb25kKSAmJlxuICAgICAgICAhX2NvbnRhaW5zV2l0aChwcmVkLCBmaXJzdFtpZHhdLCBvdXQpKSB7XG4gICAgICBvdXQucHVzaChmaXJzdFtpZHhdKTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHRoYXQgZG9lcyBub3QgY29udGFpbiBhIGBwcm9wYCBwcm9wZXJ0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFN0cmluZyAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcCBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZGlzc29jaWF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCBlcXVpdmFsZW50IHRvIHRoZSBvcmlnaW5hbCBidXQgd2l0aG91dCB0aGUgc3BlY2lmaWVkIHByb3BlcnR5XG4gKiBAc2VlIFIuYXNzb2NcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRpc3NvYygnYicsIHthOiAxLCBiOiAyLCBjOiAzfSk7IC8vPT4ge2E6IDEsIGM6IDN9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBkaXNzb2MocHJvcCwgb2JqKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICByZXN1bHRbcF0gPSBvYmpbcF07XG4gIH1cbiAgZGVsZXRlIHJlc3VsdFtwcm9wXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaXNJbnRlZ2VyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNJbnRlZ2VyJyk7XG52YXIgYXNzb2MgPSByZXF1aXJlKCcuL2Fzc29jJyk7XG52YXIgZGlzc29jID0gcmVxdWlyZSgnLi9kaXNzb2MnKTtcbnZhciByZW1vdmUgPSByZXF1aXJlKCcuL3JlbW92ZScpO1xudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyk7XG5cblxuLyoqXG4gKiBNYWtlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LCBvbWl0dGluZyB0aGUgcHJvcGVydHkgYXQgdGhlIGdpdmVuIHBhdGguXG4gKiBOb3RlIHRoYXQgdGhpcyBjb3BpZXMgYW5kIGZsYXR0ZW5zIHByb3RvdHlwZSBwcm9wZXJ0aWVzIG9udG8gdGhlIG5ldyBvYmplY3RcbiAqIGFzIHdlbGwuIEFsbCBub24tcHJpbWl0aXZlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHR5cGVkZWZuIElkeCA9IFN0cmluZyB8IEludFxuICogQHNpZyBbSWR4XSAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIHRvIHRoZSB2YWx1ZSB0byBvbWl0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2xvbmVcbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHByb3BlcnR5IGF0IHBhdGhcbiAqIEBzZWUgUi5hc3NvY1BhdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRpc3NvY1BhdGgoWydhJywgJ2InLCAnYyddLCB7YToge2I6IHtjOiA0Mn19fSk7IC8vPT4ge2E6IHtiOiB7fX19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBkaXNzb2NQYXRoKHBhdGgsIG9iaikge1xuICBzd2l0Y2ggKHBhdGgubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG9iajtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gX2lzSW50ZWdlcihwYXRoWzBdKSA/IHJlbW92ZShwYXRoWzBdLCAxLCBvYmopIDogZGlzc29jKHBhdGhbMF0sIG9iaik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBoZWFkID0gcGF0aFswXTtcbiAgICAgIHZhciB0YWlsID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGF0aCwgMSk7XG4gICAgICBpZiAob2JqW2hlYWRdID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0gZWxzZSBpZiAoX2lzSW50ZWdlcihwYXRoWzBdKSkge1xuICAgICAgICByZXR1cm4gdXBkYXRlKGhlYWQsIGRpc3NvY1BhdGgodGFpbCwgb2JqW2hlYWRdKSwgb2JqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhc3NvYyhoZWFkLCBkaXNzb2NQYXRoKHRhaWwsIG9ialtoZWFkXSksIG9iaik7XG4gICAgICB9XG4gIH1cbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIERpdmlkZXMgdHdvIG51bWJlcnMuIEVxdWl2YWxlbnQgdG8gYGEgLyBiYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIHZhbHVlLlxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgcmVzdWx0IG9mIGBhIC8gYmAuXG4gKiBAc2VlIFIubXVsdGlwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRpdmlkZSg3MSwgMTAwKTsgLy89PiAwLjcxXG4gKlxuICogICAgICB2YXIgaGFsZiA9IFIuZGl2aWRlKFIuX18sIDIpO1xuICogICAgICBoYWxmKDQyKTsgLy89PiAyMVxuICpcbiAqICAgICAgdmFyIHJlY2lwcm9jYWwgPSBSLmRpdmlkZSgxKTtcbiAqICAgICAgcmVjaXByb2NhbCg0KTsgICAvLz0+IDAuMjVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGRpdmlkZShhLCBiKSB7IHJldHVybiBhIC8gYjsgfSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGRyb3AgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZHJvcCcpO1xudmFyIHNsaWNlID0gcmVxdWlyZSgnLi9zbGljZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhbGwgYnV0IHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGxpc3QsIHN0cmluZywgb3JcbiAqIHRyYW5zZHVjZXIvdHJhbnNmb3JtZXIgKG9yIG9iamVjdCB3aXRoIGEgYGRyb3BgIG1ldGhvZCkuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGRyb3BgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9IEEgY29weSBvZiBsaXN0IHdpdGhvdXQgdGhlIGZpcnN0IGBuYCBlbGVtZW50c1xuICogQHNlZSBSLnRha2UsIFIudHJhbnNkdWNlLCBSLmRyb3BMYXN0LCBSLmRyb3BXaGlsZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZHJvcCgxLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnYmFyJywgJ2JheiddXG4gKiAgICAgIFIuZHJvcCgyLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnYmF6J11cbiAqICAgICAgUi5kcm9wKDMsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gW11cbiAqICAgICAgUi5kcm9wKDQsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gW11cbiAqICAgICAgUi5kcm9wKDMsICdyYW1kYScpOyAgICAgICAgICAgICAgIC8vPT4gJ2RhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbJ2Ryb3AnXSwgX3hkcm9wLCBmdW5jdGlvbiBkcm9wKG4sIHhzKSB7XG4gIHJldHVybiBzbGljZShNYXRoLm1heCgwLCBuKSwgSW5maW5pdHksIHhzKTtcbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9kcm9wTGFzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Ryb3BMYXN0Jyk7XG52YXIgX3hkcm9wTGFzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hkcm9wTGFzdCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3QgY29udGFpbmluZyBhbGwgYnV0IHRoZSBsYXN0IGBuYCBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gYGxpc3RgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIG9mIGBsaXN0YCB0byBza2lwLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCBvZiBlbGVtZW50cyB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBBIGNvcHkgb2YgdGhlIGxpc3Qgd2l0aCBvbmx5IHRoZSBmaXJzdCBgbGlzdC5sZW5ndGggLSBuYCBlbGVtZW50c1xuICogQHNlZSBSLnRha2VMYXN0LCBSLmRyb3AsIFIuZHJvcFdoaWxlLCBSLmRyb3BMYXN0V2hpbGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRyb3BMYXN0KDEsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJ11cbiAqICAgICAgUi5kcm9wTGFzdCgyLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJ11cbiAqICAgICAgUi5kcm9wTGFzdCgzLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFtdXG4gKiAgICAgIFIuZHJvcExhc3QoNCwgWydmb28nLCAnYmFyJywgJ2JheiddKTsgLy89PiBbXVxuICogICAgICBSLmRyb3BMYXN0KDMsICdyYW1kYScpOyAgICAgICAgICAgICAgIC8vPT4gJ3JhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbXSwgX3hkcm9wTGFzdCwgX2Ryb3BMYXN0KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfZHJvcExhc3RXaGlsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Ryb3BMYXN0V2hpbGUnKTtcbnZhciBfeGRyb3BMYXN0V2hpbGUgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZHJvcExhc3RXaGlsZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGV4Y2x1ZGluZyBhbGwgdGhlIHRhaWxpbmcgZWxlbWVudHMgb2YgYSBnaXZlbiBsaXN0IHdoaWNoXG4gKiBzYXRpc2Z5IHRoZSBzdXBwbGllZCBwcmVkaWNhdGUgZnVuY3Rpb24uIEl0IHBhc3NlcyBlYWNoIHZhbHVlIGZyb20gdGhlIHJpZ2h0XG4gKiB0byB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIGZ1bmN0aW9uLCBza2lwcGluZyBlbGVtZW50cyB1bnRpbCB0aGUgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiByZXR1cm5zIGEgYGZhbHN5YCB2YWx1ZS4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiBpcyBhcHBsaWVkIHRvIG9uZSBhcmd1bWVudDpcbiAqICoodmFsdWUpKi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBlYWNoIGVsZW1lbnRcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGFycmF5IHdpdGhvdXQgYW55IHRyYWlsaW5nIGVsZW1lbnRzIHRoYXQgcmV0dXJuIGBmYWxzeWAgdmFsdWVzIGZyb20gdGhlIGBwcmVkaWNhdGVgLlxuICogQHNlZSBSLnRha2VMYXN0V2hpbGUsIFIuYWRkSW5kZXgsIFIuZHJvcCwgUi5kcm9wV2hpbGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbHRlVGhyZWUgPSB4ID0+IHggPD0gMztcbiAqXG4gKiAgICAgIFIuZHJvcExhc3RXaGlsZShsdGVUaHJlZSwgWzEsIDIsIDMsIDQsIDMsIDIsIDFdKTsgLy89PiBbMSwgMiwgMywgNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoW10sIF94ZHJvcExhc3RXaGlsZSwgX2Ryb3BMYXN0V2hpbGUpKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94ZHJvcFJlcGVhdHNXaXRoID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGRyb3BSZXBlYXRzV2l0aCcpO1xudmFyIGRyb3BSZXBlYXRzV2l0aCA9IHJlcXVpcmUoJy4vZHJvcFJlcGVhdHNXaXRoJyk7XG52YXIgZXF1YWxzID0gcmVxdWlyZSgnLi9lcXVhbHMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCB3aXRob3V0IGFueSBjb25zZWN1dGl2ZWx5IHJlcGVhdGluZyBlbGVtZW50cy5cbiAqIFtgUi5lcXVhbHNgXSgjZXF1YWxzKSBpcyB1c2VkIHRvIGRldGVybWluZSBlcXVhbGl0eS5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFthXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gYGxpc3RgIHdpdGhvdXQgcmVwZWF0aW5nIGVsZW1lbnRzLlxuICogQHNlZSBSLnRyYW5zZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgUi5kcm9wUmVwZWF0cyhbMSwgMSwgMSwgMiwgMywgNCwgNCwgMiwgMl0pOyAvLz0+IFsxLCAyLCAzLCA0LCAyXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoX2Rpc3BhdGNoYWJsZShbXSwgX3hkcm9wUmVwZWF0c1dpdGgoZXF1YWxzKSwgZHJvcFJlcGVhdHNXaXRoKGVxdWFscykpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94ZHJvcFJlcGVhdHNXaXRoID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGRyb3BSZXBlYXRzV2l0aCcpO1xudmFyIGxhc3QgPSByZXF1aXJlKCcuL2xhc3QnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCB3aXRob3V0IGFueSBjb25zZWN1dGl2ZWx5IHJlcGVhdGluZyBlbGVtZW50cy4gRXF1YWxpdHkgaXNcbiAqIGRldGVybWluZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSB0byBlYWNoIHBhaXIgb2YgY29uc2VjdXRpdmUgZWxlbWVudHMuIFRoZVxuICogZmlyc3QgZWxlbWVudCBpbiBhIHNlcmllcyBvZiBlcXVhbCBlbGVtZW50cyB3aWxsIGJlIHByZXNlcnZlZC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEsIGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCBBIHByZWRpY2F0ZSB1c2VkIHRvIHRlc3Qgd2hldGhlciB0d28gaXRlbXMgYXJlIGVxdWFsLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gYGxpc3RgIHdpdGhvdXQgcmVwZWF0aW5nIGVsZW1lbnRzLlxuICogQHNlZSBSLnRyYW5zZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBsID0gWzEsIC0xLCAxLCAzLCA0LCAtNCwgLTQsIC01LCA1LCAzLCAzXTtcbiAqICAgICAgUi5kcm9wUmVwZWF0c1dpdGgoUi5lcUJ5KE1hdGguYWJzKSwgbCk7IC8vPT4gWzEsIDMsIDQsIC01LCAzXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbXSwgX3hkcm9wUmVwZWF0c1dpdGgsIGZ1bmN0aW9uIGRyb3BSZXBlYXRzV2l0aChwcmVkLCBsaXN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGlkeCA9IDE7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgaWYgKGxlbiAhPT0gMCkge1xuICAgIHJlc3VsdFswXSA9IGxpc3RbMF07XG4gICAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgICAgaWYgKCFwcmVkKGxhc3QocmVzdWx0KSwgbGlzdFtpZHhdKSkge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsaXN0W2lkeF07XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pKTtcblxuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hkcm9wV2hpbGUgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZHJvcFdoaWxlJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgZXhjbHVkaW5nIHRoZSBsZWFkaW5nIGVsZW1lbnRzIG9mIGEgZ2l2ZW4gbGlzdCB3aGljaFxuICogc2F0aXNmeSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIGZ1bmN0aW9uLiBJdCBwYXNzZXMgZWFjaCB2YWx1ZSB0byB0aGUgc3VwcGxpZWRcbiAqIHByZWRpY2F0ZSBmdW5jdGlvbiwgc2tpcHBpbmcgZWxlbWVudHMgd2hpbGUgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgdHJ1ZWAuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gaXMgYXBwbGllZCB0byBvbmUgYXJndW1lbnQ6ICoodmFsdWUpKi5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgZHJvcFdoaWxlYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gY2FsbGVkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBhcnJheS5cbiAqIEBzZWUgUi50YWtlV2hpbGUsIFIudHJhbnNkdWNlLCBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGx0ZVR3byA9IHggPT4geCA8PSAyO1xuICpcbiAqICAgICAgUi5kcm9wV2hpbGUobHRlVHdvLCBbMSwgMiwgMywgNCwgMywgMiwgMV0pOyAvLz0+IFszLCA0LCAzLCAyLCAxXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbJ2Ryb3BXaGlsZSddLCBfeGRyb3BXaGlsZSwgZnVuY3Rpb24gZHJvcFdoaWxlKHByZWQsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbiAmJiBwcmVkKGxpc3RbaWR4XSkpIHtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgaWR4KTtcbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0Z1bmN0aW9uJyk7XG52YXIgbGlmdCA9IHJlcXVpcmUoJy4vbGlmdCcpO1xudmFyIG9yID0gcmVxdWlyZSgnLi9vcicpO1xuXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3cmFwcGluZyBjYWxscyB0byB0aGUgdHdvIGZ1bmN0aW9ucyBpbiBhbiBgfHxgIG9wZXJhdGlvbixcbiAqIHJldHVybmluZyB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdCBmdW5jdGlvbiBpZiBpdCBpcyB0cnV0aC15IGFuZCB0aGUgcmVzdWx0XG4gKiBvZiB0aGUgc2Vjb25kIGZ1bmN0aW9uIG90aGVyd2lzZS4gTm90ZSB0aGF0IHRoaXMgaXMgc2hvcnQtY2lyY3VpdGVkLFxuICogbWVhbmluZyB0aGF0IHRoZSBzZWNvbmQgZnVuY3Rpb24gd2lsbCBub3QgYmUgaW52b2tlZCBpZiB0aGUgZmlyc3QgcmV0dXJucyBhXG4gKiB0cnV0aC15IHZhbHVlLlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIGZ1bmN0aW9ucywgYFIuZWl0aGVyYCBhbHNvIGFjY2VwdHMgYW55IGZhbnRhc3ktbGFuZCBjb21wYXRpYmxlXG4gKiBhcHBsaWNhdGl2ZSBmdW5jdG9yLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoKi4uLiAtPiBCb29sZWFuKSAtPiAoKi4uLiAtPiBCb29sZWFuKSAtPiAoKi4uLiAtPiBCb29sZWFuKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiBhIHByZWRpY2F0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZyBhbm90aGVyIHByZWRpY2F0ZVxuICogQHJldHVybiB7RnVuY3Rpb259IGEgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIGl0cyBhcmd1bWVudHMgdG8gYGZgIGFuZCBgZ2AgYW5kIGB8fGBzIHRoZWlyIG91dHB1dHMgdG9nZXRoZXIuXG4gKiBAc2VlIFIub3JcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZ3QxMCA9IHggPT4geCA+IDEwO1xuICogICAgICB2YXIgZXZlbiA9IHggPT4geCAlIDIgPT09IDA7XG4gKiAgICAgIHZhciBmID0gUi5laXRoZXIoZ3QxMCwgZXZlbik7XG4gKiAgICAgIGYoMTAxKTsgLy89PiB0cnVlXG4gKiAgICAgIGYoOCk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZWl0aGVyKGYsIGcpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKGYpID9cbiAgICBmdW5jdGlvbiBfZWl0aGVyKCkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCBnLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSA6XG4gICAgbGlmdChvcikoZiwgZyk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2lzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcmd1bWVudHMnKTtcbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzQXJyYXknKTtcbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc09iamVjdCcpO1xudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzU3RyaW5nJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbXB0eSB2YWx1ZSBvZiBpdHMgYXJndW1lbnQncyB0eXBlLiBSYW1kYSBkZWZpbmVzIHRoZSBlbXB0eVxuICogdmFsdWUgb2YgQXJyYXkgKGBbXWApLCBPYmplY3QgKGB7fWApLCBTdHJpbmcgKGAnJ2ApLCBhbmQgQXJndW1lbnRzLiBPdGhlclxuICogdHlwZXMgYXJlIHN1cHBvcnRlZCBpZiB0aGV5IGRlZmluZSBgPFR5cGU+LmVtcHR5YCBhbmQvb3JcbiAqIGA8VHlwZT4ucHJvdG90eXBlLmVtcHR5YC5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgZW1wdHlgIG1ldGhvZCBvZiB0aGUgZmlyc3QgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgYSAtPiBhXG4gKiBAcGFyYW0geyp9IHhcbiAqIEByZXR1cm4geyp9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5lbXB0eShKdXN0KDQyKSk7ICAgICAgLy89PiBOb3RoaW5nKClcbiAqICAgICAgUi5lbXB0eShbMSwgMiwgM10pOyAgICAgLy89PiBbXVxuICogICAgICBSLmVtcHR5KCd1bmljb3JucycpOyAgICAvLz0+ICcnXG4gKiAgICAgIFIuZW1wdHkoe3g6IDEsIHk6IDJ9KTsgIC8vPT4ge31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGVtcHR5KHgpIHtcbiAgcmV0dXJuIChcbiAgICAoeCAhPSBudWxsICYmIHR5cGVvZiB4WydmYW50YXN5LWxhbmQvZW1wdHknXSA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgeFsnZmFudGFzeS1sYW5kL2VtcHR5J10oKSA6XG4gICAgKHggIT0gbnVsbCAmJiB4LmNvbnN0cnVjdG9yICE9IG51bGwgJiYgdHlwZW9mIHguY29uc3RydWN0b3JbJ2ZhbnRhc3ktbGFuZC9lbXB0eSddID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICB4LmNvbnN0cnVjdG9yWydmYW50YXN5LWxhbmQvZW1wdHknXSgpIDpcbiAgICAoeCAhPSBudWxsICYmIHR5cGVvZiB4LmVtcHR5ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICB4LmVtcHR5KCkgOlxuICAgICh4ICE9IG51bGwgJiYgeC5jb25zdHJ1Y3RvciAhPSBudWxsICYmIHR5cGVvZiB4LmNvbnN0cnVjdG9yLmVtcHR5ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICB4LmNvbnN0cnVjdG9yLmVtcHR5KCkgOlxuICAgIF9pc0FycmF5KHgpID9cbiAgICAgIFtdIDpcbiAgICBfaXNTdHJpbmcoeCkgP1xuICAgICAgJycgOlxuICAgIF9pc09iamVjdCh4KSA/XG4gICAgICB7fSA6XG4gICAgX2lzQXJndW1lbnRzKHgpID9cbiAgICAgIChmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA6XG4gICAgLy8gZWxzZVxuICAgICAgdm9pZCAwXG4gICk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgZXF1YWxzID0gcmVxdWlyZSgnLi9lcXVhbHMnKTtcbnZhciB0YWtlTGFzdCA9IHJlcXVpcmUoJy4vdGFrZUxhc3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGVuZHMgd2l0aCB0aGUgcHJvdmlkZWQgdmFsdWVzXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjQuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IEJvb2xlYW5cbiAqIEBzaWcgU3RyaW5nIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gc3VmZml4XG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5lbmRzV2l0aCgnYycsICdhYmMnKSAgICAgICAgICAgICAgICAvLz0+IHRydWVcbiAqICAgICAgUi5lbmRzV2l0aCgnYicsICdhYmMnKSAgICAgICAgICAgICAgICAvLz0+IGZhbHNlXG4gKiAgICAgIFIuZW5kc1dpdGgoWydjJ10sIFsnYScsICdiJywgJ2MnXSkgICAgLy89PiB0cnVlXG4gKiAgICAgIFIuZW5kc1dpdGgoWydiJ10sIFsnYScsICdiJywgJ2MnXSkgICAgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24oc3VmZml4LCBsaXN0KSB7XG4gIHJldHVybiBlcXVhbHModGFrZUxhc3Qoc3VmZml4Lmxlbmd0aCwgbGlzdCksIHN1ZmZpeCk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgZXF1YWxzID0gcmVxdWlyZSgnLi9lcXVhbHMnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYW5kIHR3byB2YWx1ZXMgaW4gaXRzIGRvbWFpbiBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlXG4gKiB2YWx1ZXMgbWFwIHRvIHRoZSBzYW1lIHZhbHVlIGluIHRoZSBjb2RvbWFpbjsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTguMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIChhIC0+IGIpIC0+IGEgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmVxQnkoTWF0aC5hYnMsIDUsIC01KTsgLy89PiB0cnVlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBlcUJ5KGYsIHgsIHkpIHtcbiAgcmV0dXJuIGVxdWFscyhmKHgpLCBmKHkpKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBlcXVhbHMgPSByZXF1aXJlKCcuL2VxdWFscycpO1xuXG5cbi8qKlxuICogUmVwb3J0cyB3aGV0aGVyIHR3byBvYmplY3RzIGhhdmUgdGhlIHNhbWUgdmFsdWUsIGluIFtgUi5lcXVhbHNgXSgjZXF1YWxzKVxuICogdGVybXMsIGZvciB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LiBVc2VmdWwgYXMgYSBjdXJyaWVkIHByZWRpY2F0ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgayAtPiB7azogdn0gLT4ge2s6IHZ9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMVxuICogQHBhcmFtIHtPYmplY3R9IG9iajJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBvMSA9IHsgYTogMSwgYjogMiwgYzogMywgZDogNCB9O1xuICogICAgICB2YXIgbzIgPSB7IGE6IDEwLCBiOiAyMCwgYzogMywgZDogNDAgfTtcbiAqICAgICAgUi5lcVByb3BzKCdhJywgbzEsIG8yKTsgLy89PiBmYWxzZVxuICogICAgICBSLmVxUHJvcHMoJ2MnLCBvMSwgbzIpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGVxUHJvcHMocHJvcCwgb2JqMSwgb2JqMikge1xuICByZXR1cm4gZXF1YWxzKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9lcXVhbHMgPSByZXF1aXJlKCcuL2ludGVybmFsL19lcXVhbHMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGl0cyBhcmd1bWVudHMgYXJlIGVxdWl2YWxlbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLiBIYW5kbGVzXG4gKiBjeWNsaWNhbCBkYXRhIHN0cnVjdHVyZXMuXG4gKlxuICogRGlzcGF0Y2hlcyBzeW1tZXRyaWNhbGx5IHRvIHRoZSBgZXF1YWxzYCBtZXRob2RzIG9mIGJvdGggYXJndW1lbnRzLCBpZlxuICogcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgYSAtPiBiIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZXF1YWxzKDEsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5lcXVhbHMoMSwgJzEnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmVxdWFscyhbMSwgMiwgM10sIFsxLCAyLCAzXSk7IC8vPT4gdHJ1ZVxuICpcbiAqICAgICAgdmFyIGEgPSB7fTsgYS52ID0gYTtcbiAqICAgICAgdmFyIGIgPSB7fTsgYi52ID0gYjtcbiAqICAgICAgUi5lcXVhbHMoYSwgYik7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIF9lcXVhbHMoYSwgYiwgW10sIFtdKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IGJ5IHJlY3Vyc2l2ZWx5IGV2b2x2aW5nIGEgc2hhbGxvdyBjb3B5IG9mIGBvYmplY3RgLFxuICogYWNjb3JkaW5nIHRvIHRoZSBgdHJhbnNmb3JtYXRpb25gIGZ1bmN0aW9ucy4gQWxsIG5vbi1wcmltaXRpdmUgcHJvcGVydGllc1xuICogYXJlIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQSBgdHJhbnNmb3JtYXRpb25gIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGludm9rZWQgaWYgaXRzIGNvcnJlc3BvbmRpbmcga2V5XG4gKiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgZXZvbHZlZCBvYmplY3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiAodiAtPiB2KX0gLT4ge2s6IHZ9IC0+IHtrOiB2fVxuICogQHBhcmFtIHtPYmplY3R9IHRyYW5zZm9ybWF0aW9ucyBUaGUgb2JqZWN0IHNwZWNpZnlpbmcgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zIHRvIGFwcGx5XG4gKiAgICAgICAgdG8gdGhlIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBiZSB0cmFuc2Zvcm1lZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHRyYW5zZm9ybWVkIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdG9tYXRvICA9IHtmaXJzdE5hbWU6ICcgIFRvbWF0byAnLCBkYXRhOiB7ZWxhcHNlZDogMTAwLCByZW1haW5pbmc6IDE0MDB9LCBpZDoxMjN9O1xuICogICAgICB2YXIgdHJhbnNmb3JtYXRpb25zID0ge1xuICogICAgICAgIGZpcnN0TmFtZTogUi50cmltLFxuICogICAgICAgIGxhc3ROYW1lOiBSLnRyaW0sIC8vIFdpbGwgbm90IGdldCBpbnZva2VkLlxuICogICAgICAgIGRhdGE6IHtlbGFwc2VkOiBSLmFkZCgxKSwgcmVtYWluaW5nOiBSLmFkZCgtMSl9XG4gKiAgICAgIH07XG4gKiAgICAgIFIuZXZvbHZlKHRyYW5zZm9ybWF0aW9ucywgdG9tYXRvKTsgLy89PiB7Zmlyc3ROYW1lOiAnVG9tYXRvJywgZGF0YToge2VsYXBzZWQ6IDEwMSwgcmVtYWluaW5nOiAxMzk5fSwgaWQ6MTIzfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZXZvbHZlKHRyYW5zZm9ybWF0aW9ucywgb2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIHRyYW5zZm9ybWF0aW9uLCBrZXksIHR5cGU7XG4gIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zW2tleV07XG4gICAgdHlwZSA9IHR5cGVvZiB0cmFuc2Zvcm1hdGlvbjtcbiAgICByZXN1bHRba2V5XSA9IHR5cGUgPT09ICdmdW5jdGlvbicgICAgICAgICAgICAgICAgID8gdHJhbnNmb3JtYXRpb24ob2JqZWN0W2tleV0pXG4gICAgICAgICAgICAgICAgOiB0cmFuc2Zvcm1hdGlvbiAmJiB0eXBlID09PSAnb2JqZWN0JyA/IGV2b2x2ZSh0cmFuc2Zvcm1hdGlvbiwgb2JqZWN0W2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9iamVjdFtrZXldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9maWx0ZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19maWx0ZXInKTtcbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc09iamVjdCcpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfeGZpbHRlciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hmaWx0ZXInKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIHByZWRpY2F0ZSBhbmQgYSBgRmlsdGVyYWJsZWAsIGFuZCByZXR1cm5zIGEgbmV3IGZpbHRlcmFibGUgb2YgdGhlXG4gKiBzYW1lIHR5cGUgY29udGFpbmluZyB0aGUgbWVtYmVycyBvZiB0aGUgZ2l2ZW4gZmlsdGVyYWJsZSB3aGljaCBzYXRpc2Z5IHRoZVxuICogZ2l2ZW4gcHJlZGljYXRlLiBGaWx0ZXJhYmxlIG9iamVjdHMgaW5jbHVkZSBwbGFpbiBvYmplY3RzIG9yIGFueSBvYmplY3RcbiAqIHRoYXQgaGFzIGEgZmlsdGVyIG1ldGhvZCBzdWNoIGFzIGBBcnJheWAuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGZpbHRlcmAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBmIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGVcbiAqIEByZXR1cm4ge0FycmF5fSBGaWx0ZXJhYmxlXG4gKiBAc2VlIFIucmVqZWN0LCBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0V2ZW4gPSBuID0+IG4gJSAyID09PSAwO1xuICpcbiAqICAgICAgUi5maWx0ZXIoaXNFdmVuLCBbMSwgMiwgMywgNF0pOyAvLz0+IFsyLCA0XVxuICpcbiAqICAgICAgUi5maWx0ZXIoaXNFdmVuLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHtiOiAyLCBkOiA0fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbJ2ZpbHRlciddLCBfeGZpbHRlciwgZnVuY3Rpb24ocHJlZCwgZmlsdGVyYWJsZSkge1xuICByZXR1cm4gKFxuICAgIF9pc09iamVjdChmaWx0ZXJhYmxlKSA/XG4gICAgICBfcmVkdWNlKGZ1bmN0aW9uKGFjYywga2V5KSB7XG4gICAgICAgIGlmIChwcmVkKGZpbHRlcmFibGVba2V5XSkpIHtcbiAgICAgICAgICBhY2Nba2V5XSA9IGZpbHRlcmFibGVba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30sIGtleXMoZmlsdGVyYWJsZSkpIDpcbiAgICAvLyBlbHNlXG4gICAgICBfZmlsdGVyKHByZWQsIGZpbHRlcmFibGUpXG4gICk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGZpbmQgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZmluZCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgbGlzdCB3aGljaCBtYXRjaGVzIHRoZSBwcmVkaWNhdGUsIG9yXG4gKiBgdW5kZWZpbmVkYCBpZiBubyBlbGVtZW50IG1hdGNoZXMuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGZpbmRgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBhIHwgdW5kZWZpbmVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBlbGVtZW50IGlzIHRoZVxuICogICAgICAgIGRlc2lyZWQgb25lLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBlbGVtZW50IGZvdW5kLCBvciBgdW5kZWZpbmVkYC5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgeHMgPSBbe2E6IDF9LCB7YTogMn0sIHthOiAzfV07XG4gKiAgICAgIFIuZmluZChSLnByb3BFcSgnYScsIDIpKSh4cyk7IC8vPT4ge2E6IDJ9XG4gKiAgICAgIFIuZmluZChSLnByb3BFcSgnYScsIDQpKSh4cyk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnZmluZCddLCBfeGZpbmQsIGZ1bmN0aW9uIGZpbmQoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGlmIChmbihsaXN0W2lkeF0pKSB7XG4gICAgICByZXR1cm4gbGlzdFtpZHhdO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxufSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hmaW5kSW5kZXggPSByZXF1aXJlKCcuL2ludGVybmFsL194ZmluZEluZGV4Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgbGlzdCB3aGljaCBtYXRjaGVzIHRoZVxuICogcHJlZGljYXRlLCBvciBgLTFgIGlmIG5vIGVsZW1lbnQgbWF0Y2hlcy5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBlbGVtZW50IGlzIHRoZVxuICogZGVzaXJlZCBvbmUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBlbGVtZW50IGZvdW5kLCBvciBgLTFgLlxuICogQHNlZSBSLnRyYW5zZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB4cyA9IFt7YTogMX0sIHthOiAyfSwge2E6IDN9XTtcbiAqICAgICAgUi5maW5kSW5kZXgoUi5wcm9wRXEoJ2EnLCAyKSkoeHMpOyAvLz0+IDFcbiAqICAgICAgUi5maW5kSW5kZXgoUi5wcm9wRXEoJ2EnLCA0KSkoeHMpOyAvLz0+IC0xXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFtdLCBfeGZpbmRJbmRleCwgZnVuY3Rpb24gZmluZEluZGV4KGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBpZiAoZm4obGlzdFtpZHhdKSkge1xuICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIC0xO1xufSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hmaW5kTGFzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hmaW5kTGFzdCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsaXN0IHdoaWNoIG1hdGNoZXMgdGhlIHByZWRpY2F0ZSwgb3JcbiAqIGB1bmRlZmluZWRgIGlmIG5vIGVsZW1lbnQgbWF0Y2hlcy5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gYSB8IHVuZGVmaW5lZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgZWxlbWVudCBpcyB0aGVcbiAqIGRlc2lyZWQgb25lLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBlbGVtZW50IGZvdW5kLCBvciBgdW5kZWZpbmVkYC5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgeHMgPSBbe2E6IDEsIGI6IDB9LCB7YToxLCBiOiAxfV07XG4gKiAgICAgIFIuZmluZExhc3QoUi5wcm9wRXEoJ2EnLCAxKSkoeHMpOyAvLz0+IHthOiAxLCBiOiAxfVxuICogICAgICBSLmZpbmRMYXN0KFIucHJvcEVxKCdhJywgNCkpKHhzKTsgLy89PiB1bmRlZmluZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoW10sIF94ZmluZExhc3QsIGZ1bmN0aW9uIGZpbmRMYXN0KGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gIHdoaWxlIChpZHggPj0gMCkge1xuICAgIGlmIChmbihsaXN0W2lkeF0pKSB7XG4gICAgICByZXR1cm4gbGlzdFtpZHhdO1xuICAgIH1cbiAgICBpZHggLT0gMTtcbiAgfVxufSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hmaW5kTGFzdEluZGV4ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGZpbmRMYXN0SW5kZXgnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGxpc3Qgd2hpY2ggbWF0Y2hlcyB0aGVcbiAqIHByZWRpY2F0ZSwgb3IgYC0xYCBpZiBubyBlbGVtZW50IG1hdGNoZXMuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMVxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IE51bWJlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgZWxlbWVudCBpcyB0aGVcbiAqIGRlc2lyZWQgb25lLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBmb3VuZCwgb3IgYC0xYC5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgeHMgPSBbe2E6IDEsIGI6IDB9LCB7YToxLCBiOiAxfV07XG4gKiAgICAgIFIuZmluZExhc3RJbmRleChSLnByb3BFcSgnYScsIDEpKSh4cyk7IC8vPT4gMVxuICogICAgICBSLmZpbmRMYXN0SW5kZXgoUi5wcm9wRXEoJ2EnLCA0KSkoeHMpOyAvLz0+IC0xXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFtdLCBfeGZpbmRMYXN0SW5kZXgsIGZ1bmN0aW9uIGZpbmRMYXN0SW5kZXgoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgaWYgKGZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIGlkeCAtPSAxO1xuICB9XG4gIHJldHVybiAtMTtcbn0pKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX21ha2VGbGF0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fbWFrZUZsYXQnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBieSBwdWxsaW5nIGV2ZXJ5IGl0ZW0gb3V0IG9mIGl0IChhbmQgYWxsIGl0cyBzdWItYXJyYXlzKVxuICogYW5kIHB1dHRpbmcgdGhlbSBpbiBhIG5ldyBhcnJheSwgZGVwdGgtZmlyc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2JdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgZmxhdHRlbmVkIGxpc3QuXG4gKiBAc2VlIFIudW5uZXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5mbGF0dGVuKFsxLCAyLCBbMywgNF0sIDUsIFs2LCBbNywgOCwgWzksIFsxMCwgMTFdLCAxMl1dXV0pO1xuICogICAgICAvLz0+IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoX21ha2VGbGF0KHRydWUpKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY3VycnkgPSByZXF1aXJlKCcuL2N1cnJ5Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGZ1bmN0aW9uIG11Y2ggbGlrZSB0aGUgc3VwcGxpZWQgb25lLCBleGNlcHQgdGhhdCB0aGUgZmlyc3QgdHdvXG4gKiBhcmd1bWVudHMnIG9yZGVyIGlzIHJldmVyc2VkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIChhIC0+IGIgLT4gYyAtPiAuLi4gLT4geikgLT4gKGIgLT4gYSAtPiBjIC0+IC4uLiAtPiB6KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZSB3aXRoIGl0cyBmaXJzdCB0d28gcGFyYW1ldGVycyByZXZlcnNlZC5cbiAqIEByZXR1cm4geyp9IFRoZSByZXN1bHQgb2YgaW52b2tpbmcgYGZuYCB3aXRoIGl0cyBmaXJzdCB0d28gcGFyYW1ldGVycycgb3JkZXIgcmV2ZXJzZWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG1lcmdlVGhyZWUgPSAoYSwgYiwgYykgPT4gW10uY29uY2F0KGEsIGIsIGMpO1xuICpcbiAqICAgICAgbWVyZ2VUaHJlZSgxLCAyLCAzKTsgLy89PiBbMSwgMiwgM11cbiAqXG4gKiAgICAgIFIuZmxpcChtZXJnZVRocmVlKSgxLCAyLCAzKTsgLy89PiBbMiwgMSwgM11cbiAqIEBzeW1iIFIuZmxpcChmKShhLCBiLCBjKSA9IGYoYiwgYSwgYylcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGZsaXAoZm4pIHtcbiAgcmV0dXJuIGN1cnJ5KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgYXJnc1swXSA9IGI7XG4gICAgYXJnc1sxXSA9IGE7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jaGVja0Zvck1ldGhvZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIGlucHV0IGBsaXN0YCwgY2FsbGluZyBhIHByb3ZpZGVkIGZ1bmN0aW9uIGBmbmAgZm9yIGVhY2hcbiAqIGVsZW1lbnQgaW4gdGhlIGxpc3QuXG4gKlxuICogYGZuYCByZWNlaXZlcyBvbmUgYXJndW1lbnQ6ICoodmFsdWUpKi5cbiAqXG4gKiBOb3RlOiBgUi5mb3JFYWNoYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2VcbiAqIGFycmF5cyksIHVubGlrZSB0aGUgbmF0aXZlIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kLiBGb3IgbW9yZVxuICogZGV0YWlscyBvbiB0aGlzIGJlaGF2aW9yLCBzZWU6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoI0Rlc2NyaXB0aW9uXG4gKlxuICogQWxzbyBub3RlIHRoYXQsIHVubGlrZSBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgLCBSYW1kYSdzIGBmb3JFYWNoYCByZXR1cm5zXG4gKiB0aGUgb3JpZ2luYWwgYXJyYXkuIEluIHNvbWUgbGlicmFyaWVzIHRoaXMgZnVuY3Rpb24gaXMgbmFtZWQgYGVhY2hgLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBmb3JFYWNoYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjFcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+ICopIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuIFJlY2VpdmVzIG9uZSBhcmd1bWVudCwgYHZhbHVlYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBvcmlnaW5hbCBsaXN0LlxuICogQHNlZSBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHByaW50WFBsdXNGaXZlID0geCA9PiBjb25zb2xlLmxvZyh4ICsgNSk7XG4gKiAgICAgIFIuZm9yRWFjaChwcmludFhQbHVzRml2ZSwgWzEsIDIsIDNdKTsgLy89PiBbMSwgMiwgM11cbiAqICAgICAgLy8gbG9ncyA2XG4gKiAgICAgIC8vIGxvZ3MgN1xuICogICAgICAvLyBsb2dzIDhcbiAqIEBzeW1iIFIuZm9yRWFjaChmLCBbYSwgYiwgY10pID0gW2EsIGIsIGNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfY2hlY2tGb3JNZXRob2QoJ2ZvckVhY2gnLCBmdW5jdGlvbiBmb3JFYWNoKGZuLCBsaXN0KSB7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBmbihsaXN0W2lkeF0pO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBsaXN0O1xufSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gaW5wdXQgYG9iamVjdGAsIGNhbGxpbmcgYSBwcm92aWRlZCBmdW5jdGlvbiBgZm5gIGZvciBlYWNoXG4gKiBrZXkgYW5kIHZhbHVlIGluIHRoZSBvYmplY3QuXG4gKlxuICogYGZuYCByZWNlaXZlcyB0aHJlZSBhcmd1bWVudDogKih2YWx1ZSwga2V5LCBvYmopKi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnICgoYSwgU3RyaW5nLCBTdHJNYXAgYSkgLT4gQW55KSAtPiBTdHJNYXAgYSAtPiBTdHJNYXAgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGludm9rZS4gUmVjZWl2ZXMgdGhyZWUgYXJndW1lbnQsIGB2YWx1ZWAsIGBrZXlgLCBgb2JqYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHByaW50S2V5Q29uY2F0VmFsdWUgPSAodmFsdWUsIGtleSkgPT4gY29uc29sZS5sb2coa2V5ICsgJzonICsgdmFsdWUpO1xuICogICAgICBSLmZvckVhY2hPYmpJbmRleGVkKHByaW50S2V5Q29uY2F0VmFsdWUsIHt4OiAxLCB5OiAyfSk7IC8vPT4ge3g6IDEsIHk6IDJ9XG4gKiAgICAgIC8vIGxvZ3MgeDoxXG4gKiAgICAgIC8vIGxvZ3MgeToyXG4gKiBAc3ltYiBSLmZvckVhY2hPYmpJbmRleGVkKGYsIHt4OiBhLCB5OiBifSkgPSB7eDogYSwgeTogYn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGZvckVhY2hPYmpJbmRleGVkKGZuLCBvYmopIHtcbiAgdmFyIGtleUxpc3QgPSBrZXlzKG9iaik7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwga2V5TGlzdC5sZW5ndGgpIHtcbiAgICB2YXIga2V5ID0ga2V5TGlzdFtpZHhdO1xuICAgIGZuKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IGZyb20gYSBsaXN0IGtleS12YWx1ZSBwYWlycy4gSWYgYSBrZXkgYXBwZWFycyBpblxuICogbXVsdGlwbGUgcGFpcnMsIHRoZSByaWdodG1vc3QgcGFpciBpcyBpbmNsdWRlZCBpbiB0aGUgb2JqZWN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjMuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW1trLHZdXSAtPiB7azogdn1cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzIEFuIGFycmF5IG9mIHR3by1lbGVtZW50IGFycmF5cyB0aGF0IHdpbGwgYmUgdGhlIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgb3V0cHV0IG9iamVjdC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIG9iamVjdCBtYWRlIGJ5IHBhaXJpbmcgdXAgYGtleXNgIGFuZCBgdmFsdWVzYC5cbiAqIEBzZWUgUi50b1BhaXJzLCBSLnBhaXJcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmZyb21QYWlycyhbWydhJywgMV0sIFsnYicsIDJdLCBbJ2MnLCAzXV0pOyAvLz0+IHthOiAxLCBiOiAyLCBjOiAzfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gZnJvbVBhaXJzKHBhaXJzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBwYWlycy5sZW5ndGgpIHtcbiAgICByZXN1bHRbcGFpcnNbaWR4XVswXV0gPSBwYWlyc1tpZHhdWzFdO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY2hlY2tGb3JNZXRob2QgPSByZXF1aXJlKCcuL2ludGVybmFsL19jaGVja0Zvck1ldGhvZCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciByZWR1Y2VCeSA9IHJlcXVpcmUoJy4vcmVkdWNlQnknKTtcblxuLyoqXG4gKiBTcGxpdHMgYSBsaXN0IGludG8gc3ViLWxpc3RzIHN0b3JlZCBpbiBhbiBvYmplY3QsIGJhc2VkIG9uIHRoZSByZXN1bHQgb2ZcbiAqIGNhbGxpbmcgYSBTdHJpbmctcmV0dXJuaW5nIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCwgYW5kIGdyb3VwaW5nIHRoZVxuICogcmVzdWx0cyBhY2NvcmRpbmcgdG8gdmFsdWVzIHJldHVybmVkLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBncm91cEJ5YCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBTdHJpbmcpIC0+IFthXSAtPiB7U3RyaW5nOiBbYV19XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiA6OiBhIC0+IFN0cmluZ1xuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gZ3JvdXBcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggdGhlIG91dHB1dCBvZiBgZm5gIGZvciBrZXlzLCBtYXBwZWQgdG8gYXJyYXlzIG9mIGVsZW1lbnRzXG4gKiAgICAgICAgIHRoYXQgcHJvZHVjZWQgdGhhdCBrZXkgd2hlbiBwYXNzZWQgdG8gYGZuYC5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYnlHcmFkZSA9IFIuZ3JvdXBCeShmdW5jdGlvbihzdHVkZW50KSB7XG4gKiAgICAgICAgdmFyIHNjb3JlID0gc3R1ZGVudC5zY29yZTtcbiAqICAgICAgICByZXR1cm4gc2NvcmUgPCA2NSA/ICdGJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgNzAgPyAnRCcgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDgwID8gJ0MnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA5MCA/ICdCJyA6ICdBJztcbiAqICAgICAgfSk7XG4gKiAgICAgIHZhciBzdHVkZW50cyA9IFt7bmFtZTogJ0FiYnknLCBzY29yZTogODR9LFxuICogICAgICAgICAgICAgICAgICAgICAge25hbWU6ICdFZGR5Jywgc2NvcmU6IDU4fSxcbiAqICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLlxuICogICAgICAgICAgICAgICAgICAgICAge25hbWU6ICdKYWNrJywgc2NvcmU6IDY5fV07XG4gKiAgICAgIGJ5R3JhZGUoc3R1ZGVudHMpO1xuICogICAgICAvLyB7XG4gKiAgICAgIC8vICAgJ0EnOiBbe25hbWU6ICdEaWFubmUnLCBzY29yZTogOTl9XSxcbiAqICAgICAgLy8gICAnQic6IFt7bmFtZTogJ0FiYnknLCBzY29yZTogODR9XVxuICogICAgICAvLyAgIC8vIC4uLixcbiAqICAgICAgLy8gICAnRic6IFt7bmFtZTogJ0VkZHknLCBzY29yZTogNTh9XVxuICogICAgICAvLyB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfY2hlY2tGb3JNZXRob2QoJ2dyb3VwQnknLCByZWR1Y2VCeShmdW5jdGlvbihhY2MsIGl0ZW0pIHtcbiAgaWYgKGFjYyA9PSBudWxsKSB7XG4gICAgYWNjID0gW107XG4gIH1cbiAgYWNjLnB1c2goaXRlbSk7XG4gIHJldHVybiBhY2M7XG59LCBudWxsKSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuLyoqXG4gKiBUYWtlcyBhIGxpc3QgYW5kIHJldHVybnMgYSBsaXN0IG9mIGxpc3RzIHdoZXJlIGVhY2ggc3VibGlzdCdzIGVsZW1lbnRzIGFyZVxuICogYWxsIHNhdGlzZmllZCBwYWlyd2lzZSBjb21wYXJpc29uIGFjY29yZGluZyB0byB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gKiBPbmx5IGFkamFjZW50IGVsZW1lbnRzIGFyZSBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKChhLCBhKSDihpIgQm9vbGVhbikg4oaSIFthXSDihpIgW1thXV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHR3byBnaXZlbiAoYWRqYWNlbnQpXG4gKiAgICAgICAgZWxlbWVudHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIGdyb3VwXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBncm91cC4gQWxzbyBhY2NlcHRzIGEgc3RyaW5nLCB3aGljaCB3aWxsIGJlXG4gKiAgICAgICAgdHJlYXRlZCBhcyBhIGxpc3Qgb2YgY2hhcmFjdGVycy5cbiAqIEByZXR1cm4ge0xpc3R9IEEgbGlzdCB0aGF0IGNvbnRhaW5zIHN1Ymxpc3RzIG9mIGVsZW1lbnRzLFxuICogICAgICAgICB3aG9zZSBjb25jYXRlbmF0aW9ucyBhcmUgZXF1YWwgdG8gdGhlIG9yaWdpbmFsIGxpc3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIFIuZ3JvdXBXaXRoKFIuZXF1YWxzLCBbMCwgMSwgMSwgMiwgMywgNSwgOCwgMTMsIDIxXSlcbiAqIC8vPT4gW1swXSwgWzEsIDFdLCBbMl0sIFszXSwgWzVdLCBbOF0sIFsxM10sIFsyMV1dXG4gKlxuICogUi5ncm91cFdpdGgoKGEsIGIpID0+IGEgKyAxID09PSBiLCBbMCwgMSwgMSwgMiwgMywgNSwgOCwgMTMsIDIxXSlcbiAqIC8vPT4gW1swLCAxXSwgWzEsIDIsIDNdLCBbNV0sIFs4XSwgWzEzXSwgWzIxXV1cbiAqXG4gKiBSLmdyb3VwV2l0aCgoYSwgYikgPT4gYSAlIDIgPT09IGIgJSAyLCBbMCwgMSwgMSwgMiwgMywgNSwgOCwgMTMsIDIxXSlcbiAqIC8vPT4gW1swXSwgWzEsIDFdLCBbMl0sIFszLCA1XSwgWzhdLCBbMTMsIDIxXV1cbiAqXG4gKiBSLmdyb3VwV2l0aChSLmVxQnkoaXNWb3dlbCksICdhZXN0aW91JylcbiAqIC8vPT4gWydhZScsICdzdCcsICdpb3UnXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24oZm4sIGxpc3QpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgdmFyIG5leHRpZHggPSBpZHggKyAxO1xuICAgIHdoaWxlIChuZXh0aWR4IDwgbGVuICYmIGZuKGxpc3RbbmV4dGlkeCAtIDFdLCBsaXN0W25leHRpZHhdKSkge1xuICAgICAgbmV4dGlkeCArPSAxO1xuICAgIH1cbiAgICByZXMucHVzaChsaXN0LnNsaWNlKGlkeCwgbmV4dGlkeCkpO1xuICAgIGlkeCA9IG5leHRpZHg7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBncmVhdGVyIHRoYW4gdGhlIHNlY29uZDsgYGZhbHNlYFxuICogb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBhID0+IGEgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5sdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZ3QoMiwgMSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmd0KDIsIDIpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuZ3QoMiwgMyk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5ndCgnYScsICd6Jyk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5ndCgneicsICdhJyk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZ3QoYSwgYikgeyByZXR1cm4gYSA+IGI7IH0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHNlY29uZDtcbiAqIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBhID0+IGEgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIubHRlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5ndGUoMiwgMSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmd0ZSgyLCAyKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuZ3RlKDIsIDMpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuZ3RlKCdhJywgJ3onKTsgLy89PiBmYWxzZVxuICogICAgICBSLmd0ZSgneicsICdhJyk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZ3RlKGEsIGIpIHsgcmV0dXJuIGEgPj0gYjsgfSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IGhhcyBhbiBvd24gcHJvcGVydHkgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWVcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgcyAtPiB7czogeH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIHByb3BlcnR5IGV4aXN0cy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaGFzTmFtZSA9IFIuaGFzKCduYW1lJyk7XG4gKiAgICAgIGhhc05hbWUoe25hbWU6ICdhbGljZSd9KTsgICAvLz0+IHRydWVcbiAqICAgICAgaGFzTmFtZSh7bmFtZTogJ2JvYid9KTsgICAgIC8vPT4gdHJ1ZVxuICogICAgICBoYXNOYW1lKHt9KTsgICAgICAgICAgICAgICAgLy89PiBmYWxzZVxuICpcbiAqICAgICAgdmFyIHBvaW50ID0ge3g6IDAsIHk6IDB9O1xuICogICAgICB2YXIgcG9pbnRIYXMgPSBSLmhhcyhSLl9fLCBwb2ludCk7XG4gKiAgICAgIHBvaW50SGFzKCd4Jyk7ICAvLz0+IHRydWVcbiAqICAgICAgcG9pbnRIYXMoJ3knKTsgIC8vPT4gdHJ1ZVxuICogICAgICBwb2ludEhhcygneicpOyAgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2hhcyk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBhbiBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgYSBwcm9wZXJ0eSB3aXRoXG4gKiB0aGUgc3BlY2lmaWVkIG5hbWVcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgcyAtPiB7czogeH0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIHByb3BlcnR5IGV4aXN0cy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBmdW5jdGlvbiBSZWN0YW5nbGUod2lkdGgsIGhlaWdodCkge1xuICogICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAqICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAqICAgICAgfVxuICogICAgICBSZWN0YW5nbGUucHJvdG90eXBlLmFyZWEgPSBmdW5jdGlvbigpIHtcbiAqICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICogICAgICB9O1xuICpcbiAqICAgICAgdmFyIHNxdWFyZSA9IG5ldyBSZWN0YW5nbGUoMiwgMik7XG4gKiAgICAgIFIuaGFzSW4oJ3dpZHRoJywgc3F1YXJlKTsgIC8vPT4gdHJ1ZVxuICogICAgICBSLmhhc0luKCdhcmVhJywgc3F1YXJlKTsgIC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gaGFzSW4ocHJvcCwgb2JqKSB7XG4gIHJldHVybiBwcm9wIGluIG9iajtcbn0pO1xuIiwidmFyIG50aCA9IHJlcXVpcmUoJy4vbnRoJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy4gSW4gc29tZSBsaWJyYXJpZXNcbiAqIHRoaXMgZnVuY3Rpb24gaXMgbmFtZWQgYGZpcnN0YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLnRhaWwsIFIuaW5pdCwgUi5sYXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5oZWFkKFsnZmknLCAnZm8nLCAnZnVtJ10pOyAvLz0+ICdmaSdcbiAqICAgICAgUi5oZWFkKFtdKTsgLy89PiB1bmRlZmluZWRcbiAqXG4gKiAgICAgIFIuaGVhZCgnYWJjJyk7IC8vPT4gJ2EnXG4gKiAgICAgIFIuaGVhZCgnJyk7IC8vPT4gJydcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBudGgoMCk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGl0cyBhcmd1bWVudHMgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlLiBWYWx1ZXMgYXJlXG4gKiBpZGVudGljYWwgaWYgdGhleSByZWZlcmVuY2UgdGhlIHNhbWUgbWVtb3J5LiBgTmFOYCBpcyBpZGVudGljYWwgdG8gYE5hTmA7XG4gKiBgMGAgYW5kIGAtMGAgYXJlIG5vdCBpZGVudGljYWwuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTUuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIGEgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbyA9IHt9O1xuICogICAgICBSLmlkZW50aWNhbChvLCBvKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuaWRlbnRpY2FsKDEsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5pZGVudGljYWwoMSwgJzEnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlkZW50aWNhbChbXSwgW10pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaWRlbnRpY2FsKDAsIC0wKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlkZW50aWNhbChOYU4sIE5hTik7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gaWRlbnRpY2FsKGEsIGIpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoYSA9PT0gYikgeyAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG4gIH1cbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaWRlbnRpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19pZGVudGl0eScpO1xuXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGRvZXMgbm90aGluZyBidXQgcmV0dXJuIHRoZSBwYXJhbWV0ZXIgc3VwcGxpZWQgdG8gaXQuIEdvb2RcbiAqIGFzIGEgZGVmYXVsdCBvciBwbGFjZWhvbGRlciBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdG8gcmV0dXJuLlxuICogQHJldHVybiB7Kn0gVGhlIGlucHV0IHZhbHVlLCBgeGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pZGVudGl0eSgxKTsgLy89PiAxXG4gKlxuICogICAgICB2YXIgb2JqID0ge307XG4gKiAgICAgIFIuaWRlbnRpdHkob2JqKSA9PT0gb2JqOyAvLz0+IHRydWVcbiAqIEBzeW1iIFIuaWRlbnRpdHkoYSkgPSBhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShfaWRlbnRpdHkpO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9jZXNzIGVpdGhlciB0aGUgYG9uVHJ1ZWAgb3IgdGhlIGBvbkZhbHNlYFxuICogZnVuY3Rpb24gZGVwZW5kaW5nIHVwb24gdGhlIHJlc3VsdCBvZiB0aGUgYGNvbmRpdGlvbmAgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+ICopIC0+ICgqLi4uIC0+ICopIC0+ICgqLi4uIC0+ICopXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25kaXRpb24gQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uVHJ1ZSBBIGZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIHRoZSBgY29uZGl0aW9uYCBldmFsdWF0ZXMgdG8gYSB0cnV0aHkgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZhbHNlIEEgZnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIGBjb25kaXRpb25gIGV2YWx1YXRlcyB0byBhIGZhbHN5IHZhbHVlLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IHVuYXJ5IGZ1bmN0aW9uIHRoYXQgd2lsbCBwcm9jZXNzIGVpdGhlciB0aGUgYG9uVHJ1ZWAgb3IgdGhlIGBvbkZhbHNlYFxuICogICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlcGVuZGluZyB1cG9uIHRoZSByZXN1bHQgb2YgdGhlIGBjb25kaXRpb25gIHByZWRpY2F0ZS5cbiAqIEBzZWUgUi51bmxlc3MsIFIud2hlblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpbmNDb3VudCA9IFIuaWZFbHNlKFxuICogICAgICAgIFIuaGFzKCdjb3VudCcpLFxuICogICAgICAgIFIub3ZlcihSLmxlbnNQcm9wKCdjb3VudCcpLCBSLmluYyksXG4gKiAgICAgICAgUi5hc3NvYygnY291bnQnLCAxKVxuICogICAgICApO1xuICogICAgICBpbmNDb3VudCh7fSk7ICAgICAgICAgICAvLz0+IHsgY291bnQ6IDEgfVxuICogICAgICBpbmNDb3VudCh7IGNvdW50OiAxIH0pOyAvLz0+IHsgY291bnQ6IDIgfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gaWZFbHNlKGNvbmRpdGlvbiwgb25UcnVlLCBvbkZhbHNlKSB7XG4gIHJldHVybiBjdXJyeU4oTWF0aC5tYXgoY29uZGl0aW9uLmxlbmd0aCwgb25UcnVlLmxlbmd0aCwgb25GYWxzZS5sZW5ndGgpLFxuICAgIGZ1bmN0aW9uIF9pZkVsc2UoKSB7XG4gICAgICByZXR1cm4gY29uZGl0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBvblRydWUuYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IG9uRmFsc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICk7XG59KTtcbiIsInZhciBhZGQgPSByZXF1aXJlKCcuL2FkZCcpO1xuXG5cbi8qKlxuICogSW5jcmVtZW50cyBpdHMgYXJndW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfSBuICsgMVxuICogQHNlZSBSLmRlY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaW5jKDQyKTsgLy89PiA0M1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFkZCgxKTtcbiIsInZhciByZWR1Y2VCeSA9IHJlcXVpcmUoJy4vcmVkdWNlQnknKTtcblxuXG4vKipcbiAqIEdpdmVuIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYSBrZXksIHR1cm5zIGEgbGlzdCBvZiBvYmplY3RzIGludG8gYW5cbiAqIG9iamVjdCBpbmRleGluZyB0aGUgb2JqZWN0cyBieSB0aGUgZ2l2ZW4ga2V5LiBOb3RlIHRoYXQgaWYgbXVsdGlwbGVcbiAqIG9iamVjdHMgZ2VuZXJhdGUgdGhlIHNhbWUgdmFsdWUgZm9yIHRoZSBpbmRleGluZyBrZXkgb25seSB0aGUgbGFzdCB2YWx1ZVxuICogd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgZ2VuZXJhdGVkIG9iamVjdC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gU3RyaW5nKSAtPiBbe2s6IHZ9XSAtPiB7azoge2s6IHZ9fVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gOjogYSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIGluZGV4XG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBpbmRleGluZyBlYWNoIGFycmF5IGVsZW1lbnQgYnkgdGhlIGdpdmVuIHByb3BlcnR5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBsaXN0ID0gW3tpZDogJ3h5eicsIHRpdGxlOiAnQSd9LCB7aWQ6ICdhYmMnLCB0aXRsZTogJ0InfV07XG4gKiAgICAgIFIuaW5kZXhCeShSLnByb3AoJ2lkJyksIGxpc3QpO1xuICogICAgICAvLz0+IHthYmM6IHtpZDogJ2FiYycsIHRpdGxlOiAnQid9LCB4eXo6IHtpZDogJ3h5eicsIHRpdGxlOiAnQSd9fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZUJ5KGZ1bmN0aW9uKGFjYywgZWxlbSkgeyByZXR1cm4gZWxlbTsgfSwgbnVsbCk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pbmRleE9mID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faW5kZXhPZicpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYW4gaXRlbSBpbiBhbiBhcnJheSwgb3IgLTFcbiAqIGlmIHRoZSBpdGVtIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXkuIFtgUi5lcXVhbHNgXSgjZXF1YWxzKSBpcyB1c2VkIHRvXG4gKiBkZXRlcm1pbmUgZXF1YWxpdHkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IFthXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSBpdGVtIHRvIGZpbmQuXG4gKiBAcGFyYW0ge0FycmF5fSB4cyBUaGUgYXJyYXkgdG8gc2VhcmNoIGluLlxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCwgb3IgLTEgaWYgdGhlIHRhcmdldCBpcyBub3QgZm91bmQuXG4gKiBAc2VlIFIubGFzdEluZGV4T2ZcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmluZGV4T2YoMywgWzEsMiwzLDRdKTsgLy89PiAyXG4gKiAgICAgIFIuaW5kZXhPZigxMCwgWzEsMiwzLDRdKTsgLy89PiAtMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gaW5kZXhPZih0YXJnZXQsIHhzKSB7XG4gIHJldHVybiB0eXBlb2YgeHMuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJyAmJiAhX2lzQXJyYXkoeHMpID9cbiAgICB4cy5pbmRleE9mKHRhcmdldCkgOlxuICAgIF9pbmRleE9mKHhzLCB0YXJnZXQsIDApO1xufSk7XG4iLCJ2YXIgc2xpY2UgPSByZXF1aXJlKCcuL3NsaWNlJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBidXQgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5sYXN0LCBSLmhlYWQsIFIudGFpbFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaW5pdChbMSwgMiwgM10pOyAgLy89PiBbMSwgMl1cbiAqICAgICAgUi5pbml0KFsxLCAyXSk7ICAgICAvLz0+IFsxXVxuICogICAgICBSLmluaXQoWzFdKTsgICAgICAgIC8vPT4gW11cbiAqICAgICAgUi5pbml0KFtdKTsgICAgICAgICAvLz0+IFtdXG4gKlxuICogICAgICBSLmluaXQoJ2FiYycpOyAgLy89PiAnYWInXG4gKiAgICAgIFIuaW5pdCgnYWInKTsgICAvLz0+ICdhJ1xuICogICAgICBSLmluaXQoJ2EnKTsgICAgLy89PiAnJ1xuICogICAgICBSLmluaXQoJycpOyAgICAgLy89PiAnJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHNsaWNlKDAsIC0xKTtcbiIsInZhciBfY29udGFpbnNXaXRoID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29udGFpbnNXaXRoJyk7XG52YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIF9maWx0ZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19maWx0ZXInKTtcblxuXG4vKipcbiAqIFRha2VzIGEgcHJlZGljYXRlIGBwcmVkYCwgYSBsaXN0IGB4c2AsIGFuZCBhIGxpc3QgYHlzYCwgYW5kIHJldHVybnMgYSBsaXN0XG4gKiBgeHMnYCBjb21wcmlzaW5nIGVhY2ggb2YgdGhlIGVsZW1lbnRzIG9mIGB4c2Agd2hpY2ggaXMgZXF1YWwgdG8gb25lIG9yIG1vcmVcbiAqIGVsZW1lbnRzIG9mIGB5c2AgYWNjb3JkaW5nIHRvIGBwcmVkYC5cbiAqXG4gKiBgcHJlZGAgbXVzdCBiZSBhIGJpbmFyeSBmdW5jdGlvbiBleHBlY3RpbmcgYW4gZWxlbWVudCBmcm9tIGVhY2ggbGlzdC5cbiAqXG4gKiBgeHNgLCBgeXNgLCBhbmQgYHhzJ2AgYXJlIHRyZWF0ZWQgYXMgc2V0cywgc2VtYW50aWNhbGx5LCBzbyBvcmRlcmluZyBzaG91bGRcbiAqIG5vdCBiZSBzaWduaWZpY2FudCwgYnV0IHNpbmNlIGB4cydgIGlzIG9yZGVyZWQgdGhlIGltcGxlbWVudGF0aW9uIGd1YXJhbnRlZXNcbiAqIHRoYXQgaXRzIHZhbHVlcyBhcmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhleSBhcHBlYXIgaW4gYHhzYC4gRHVwbGljYXRlcyBhcmVcbiAqIG5vdCByZW1vdmVkLCBzbyBgeHMnYCBtYXkgY29udGFpbiBkdXBsaWNhdGVzIGlmIGB4c2AgY29udGFpbnMgZHVwbGljYXRlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yNC4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgKGEgLT4gYiAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2JdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZFxuICogQHBhcmFtIHtBcnJheX0geHNcbiAqIEBwYXJhbSB7QXJyYXl9IHlzXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzZWUgUi5pbnRlcnNlY3Rpb25cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmlubmVySm9pbihcbiAqICAgICAgICAocmVjb3JkLCBpZCkgPT4gcmVjb3JkLmlkID09PSBpZCxcbiAqICAgICAgICBbe2lkOiA4MjQsIG5hbWU6ICdSaWNoaWUgRnVyYXknfSxcbiAqICAgICAgICAge2lkOiA5NTYsIG5hbWU6ICdEZXdleSBNYXJ0aW4nfSxcbiAqICAgICAgICAge2lkOiAzMTMsIG5hbWU6ICdCcnVjZSBQYWxtZXInfSxcbiAqICAgICAgICAge2lkOiA0NTYsIG5hbWU6ICdTdGVwaGVuIFN0aWxscyd9LFxuICogICAgICAgICB7aWQ6IDE3NywgbmFtZTogJ05laWwgWW91bmcnfV0sXG4gKiAgICAgICAgWzE3NywgNDU2LCA5OTldXG4gKiAgICAgICk7XG4gKiAgICAgIC8vPT4gW3tpZDogNDU2LCBuYW1lOiAnU3RlcGhlbiBTdGlsbHMnfSwge2lkOiAxNzcsIG5hbWU6ICdOZWlsIFlvdW5nJ31dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBpbm5lckpvaW4ocHJlZCwgeHMsIHlzKSB7XG4gIHJldHVybiBfZmlsdGVyKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIF9jb250YWluc1dpdGgocHJlZCwgeCwgeXMpOyB9LCB4cyk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBJbnNlcnRzIHRoZSBzdXBwbGllZCBlbGVtZW50IGludG8gdGhlIGxpc3QsIGF0IHRoZSBzcGVjaWZpZWQgYGluZGV4YC4gX05vdGUgdGhhdFxuXG4gKiB0aGlzIGlzIG5vdCBkZXN0cnVjdGl2ZV86IGl0IHJldHVybnMgYSBjb3B5IG9mIHRoZSBsaXN0IHdpdGggdGhlIGNoYW5nZXMuXG4gKiA8c21hbGw+Tm8gbGlzdHMgaGF2ZSBiZWVuIGhhcm1lZCBpbiB0aGUgYXBwbGljYXRpb24gb2YgdGhpcyBmdW5jdGlvbi48L3NtYWxsPlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIuMlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IGEgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBwb3NpdGlvbiB0byBpbnNlcnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7Kn0gZWx0IFRoZSBlbGVtZW50IHRvIGluc2VydCBpbnRvIHRoZSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBpbnNlcnQgaW50b1xuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IEFycmF5IHdpdGggYGVsdGAgaW5zZXJ0ZWQgYXQgYGluZGV4YC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmluc2VydCgyLCAneCcsIFsxLDIsMyw0XSk7IC8vPT4gWzEsMiwneCcsMyw0XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gaW5zZXJ0KGlkeCwgZWx0LCBsaXN0KSB7XG4gIGlkeCA9IGlkeCA8IGxpc3QubGVuZ3RoICYmIGlkeCA+PSAwID8gaWR4IDogbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwKTtcbiAgcmVzdWx0LnNwbGljZShpZHgsIDAsIGVsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBJbnNlcnRzIHRoZSBzdWItbGlzdCBpbnRvIHRoZSBsaXN0LCBhdCB0aGUgc3BlY2lmaWVkIGBpbmRleGAuIF9Ob3RlIHRoYXQgdGhpcyBpcyBub3RcbiAqIGRlc3RydWN0aXZlXzogaXQgcmV0dXJucyBhIGNvcHkgb2YgdGhlIGxpc3Qgd2l0aCB0aGUgY2hhbmdlcy5cbiAqIDxzbWFsbD5ObyBsaXN0cyBoYXZlIGJlZW4gaGFybWVkIGluIHRoZSBhcHBsaWNhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uLjwvc21hbGw+XG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgcG9zaXRpb24gdG8gaW5zZXJ0IHRoZSBzdWItbGlzdFxuICogQHBhcmFtIHtBcnJheX0gZWx0cyBUaGUgc3ViLWxpc3QgdG8gaW5zZXJ0IGludG8gdGhlIEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGluc2VydCB0aGUgc3ViLWxpc3QgaW50b1xuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IEFycmF5IHdpdGggYGVsdHNgIGluc2VydGVkIHN0YXJ0aW5nIGF0IGBpbmRleGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pbnNlcnRBbGwoMiwgWyd4JywneScsJ3onXSwgWzEsMiwzLDRdKTsgLy89PiBbMSwyLCd4JywneScsJ3onLDMsNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGluc2VydEFsbChpZHgsIGVsdHMsIGxpc3QpIHtcbiAgaWR4ID0gaWR4IDwgbGlzdC5sZW5ndGggJiYgaWR4ID49IDAgPyBpZHggOiBsaXN0Lmxlbmd0aDtcbiAgcmV0dXJuIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwLCBpZHgpLFxuICAgICAgICAgICAgICAgICAgIGVsdHMsXG4gICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgaWR4KSk7XG59KTtcbiIsInZhciBfY29udGFpbnMgPSByZXF1aXJlKCcuL19jb250YWlucycpO1xuXG5cbi8vIEEgc2ltcGxlIFNldCB0eXBlIHRoYXQgaG9ub3VycyBSLmVxdWFscyBzZW1hbnRpY3Ncbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBfU2V0KCkge1xuICAgIC8qIGdsb2JhbHMgU2V0ICovXG4gICAgdGhpcy5fbmF0aXZlU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBTZXQoKSA6IG51bGw7XG4gICAgdGhpcy5faXRlbXMgPSB7fTtcbiAgfVxuXG4gIC8vIHVudGlsIHdlIGZpZ3VyZSBvdXQgd2h5IGpzZG9jIGNob2tlcyBvbiB0aGlzXG4gIC8vIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIGFkZCB0byB0aGUgU2V0XG4gIC8vIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBpdGVtIGRpZCBub3QgZXhpc3QgcHJpb3IsIG90aGVyd2lzZSBmYWxzZVxuICAvL1xuICBfU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuICFoYXNPckFkZChpdGVtLCB0cnVlLCB0aGlzKTtcbiAgfTtcblxuICAvL1xuICAvLyBAcGFyYW0gaXRlbSBUaGUgaXRlbSB0byBjaGVjayBmb3IgZXhpc3RlbmNlIGluIHRoZSBTZXRcbiAgLy8gQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gZXhpc3RzIGluIHRoZSBTZXQsIG90aGVyd2lzZSBmYWxzZVxuICAvL1xuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIGhhc09yQWRkKGl0ZW0sIGZhbHNlLCB0aGlzKTtcbiAgfTtcblxuICAvL1xuICAvLyBDb21iaW5lcyB0aGUgbG9naWMgZm9yIGNoZWNraW5nIHdoZXRoZXIgYW4gaXRlbSBpcyBhIG1lbWJlciBvZiB0aGUgc2V0IGFuZFxuICAvLyBmb3IgYWRkaW5nIGEgbmV3IGl0ZW0gdG8gdGhlIHNldC5cbiAgLy9cbiAgLy8gQHBhcmFtIGl0ZW0gICAgICAgVGhlIGl0ZW0gdG8gY2hlY2sgb3IgYWRkIHRvIHRoZSBTZXQgaW5zdGFuY2UuXG4gIC8vIEBwYXJhbSBzaG91bGRBZGQgIElmIHRydWUsIHRoZSBpdGVtIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHNldCBpZiBpdCBkb2Vzbid0XG4gIC8vICAgICAgICAgICAgICAgICAgIGFscmVhZHkgZXhpc3QuXG4gIC8vIEBwYXJhbSBzZXQgICAgICAgIFRoZSBzZXQgaW5zdGFuY2UgdG8gY2hlY2sgb3IgYWRkIHRvLlxuICAvLyBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBpdGVtIGFscmVhZHkgZXhpc3RlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAvL1xuICBmdW5jdGlvbiBoYXNPckFkZChpdGVtLCBzaG91bGRBZGQsIHNldCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGl0ZW07XG4gICAgdmFyIHByZXZTaXplLCBuZXdTaXplO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gKzAgYW5kIC0wXG4gICAgICAgIGlmIChpdGVtID09PSAwICYmIDEgLyBpdGVtID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgICBpZiAoc2V0Ll9pdGVtc1snLTAnXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgICAgc2V0Ll9pdGVtc1snLTAnXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoZXNlIHR5cGVzIGNhbiBhbGwgdXRpbGlzZSB0aGUgbmF0aXZlIFNldFxuICAgICAgICBpZiAoc2V0Ll9uYXRpdmVTZXQgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBwcmV2U2l6ZSA9IHNldC5fbmF0aXZlU2V0LnNpemU7XG4gICAgICAgICAgICBzZXQuX25hdGl2ZVNldC5hZGQoaXRlbSk7XG4gICAgICAgICAgICBuZXdTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTaXplID09PSBwcmV2U2l6ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNldC5fbmF0aXZlU2V0LmhhcyhpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCEodHlwZSBpbiBzZXQuX2l0ZW1zKSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0ge307XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV1baXRlbV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbSBpbiBzZXQuX2l0ZW1zW3R5cGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdW2l0ZW1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIC8vIHNldC5faXRlbXNbJ2Jvb2xlYW4nXSBob2xkcyBhIHR3byBlbGVtZW50IGFycmF5XG4gICAgICAgIC8vIHJlcHJlc2VudGluZyBbIGZhbHNlRXhpc3RzLCB0cnVlRXhpc3RzIF1cbiAgICAgICAgaWYgKHR5cGUgaW4gc2V0Ll9pdGVtcykge1xuICAgICAgICAgIHZhciBiSWR4ID0gaXRlbSA/IDEgOiAwO1xuICAgICAgICAgIGlmIChzZXQuX2l0ZW1zW3R5cGVdW2JJZHhdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdW2JJZHhdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXSA9IGl0ZW0gPyBbZmFsc2UsIHRydWVdIDogW3RydWUsIGZhbHNlXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgLy8gY29tcGFyZSBmdW5jdGlvbnMgZm9yIHJlZmVyZW5jZSBlcXVhbGl0eVxuICAgICAgICBpZiAoc2V0Ll9uYXRpdmVTZXQgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBwcmV2U2l6ZSA9IHNldC5fbmF0aXZlU2V0LnNpemU7XG4gICAgICAgICAgICBzZXQuX25hdGl2ZVNldC5hZGQoaXRlbSk7XG4gICAgICAgICAgICBuZXdTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTaXplID09PSBwcmV2U2l6ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNldC5fbmF0aXZlU2V0LmhhcyhpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCEodHlwZSBpbiBzZXQuX2l0ZW1zKSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gW2l0ZW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIV9jb250YWlucyhpdGVtLCBzZXQuX2l0ZW1zW3R5cGVdKSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIGlmIChzZXQuX2l0ZW1zW3R5cGVdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmICghc2V0Ll9pdGVtc1snbnVsbCddKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbJ251bGwnXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyByZWR1Y2UgdGhlIHNlYXJjaCBzaXplIG9mIGhldGVyb2dlbmVvdXMgc2V0cyBieSBjcmVhdGluZyBidWNrZXRzXG4gICAgICAgIC8vIGZvciBlYWNoIHR5cGUuXG4gICAgICAgIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlbSk7XG4gICAgICAgIGlmICghKHR5cGUgaW4gc2V0Ll9pdGVtcykpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2NhbiB0aHJvdWdoIGFsbCBwcmV2aW91c2x5IGFwcGxpZWQgaXRlbXNcbiAgICAgICAgaWYgKCFfY29udGFpbnMoaXRlbSwgc2V0Ll9pdGVtc1t0eXBlXSkpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9TZXQ7XG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfYXBlcnR1cmUobiwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxpbWl0ID0gbGlzdC5sZW5ndGggLSAobiAtIDEpO1xuICB2YXIgYWNjID0gbmV3IEFycmF5KGxpbWl0ID49IDAgPyBsaW1pdCA6IDApO1xuICB3aGlsZSAoaWR4IDwgbGltaXQpIHtcbiAgICBhY2NbaWR4XSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIGlkeCwgaWR4ICsgbik7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGFjYztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9hcml0eShuLCBmbikge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYTApIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgNjogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA3OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA4OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgOTogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAxMDogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gX2FyaXR5IG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciBubyBncmVhdGVyIHRoYW4gdGVuJyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9hcnJheUZyb21JdGVyYXRvcihpdGVyKSB7XG4gIHZhciBsaXN0ID0gW107XG4gIHZhciBuZXh0O1xuICB3aGlsZSAoIShuZXh0ID0gaXRlci5uZXh0KCkpLmRvbmUpIHtcbiAgICBsaXN0LnB1c2gobmV4dC52YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuIiwidmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCcuL19vYmplY3RBc3NpZ24nKTtcblxubW9kdWxlLmV4cG9ydHMgPVxuICB0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5hc3NpZ24gOiBfb2JqZWN0QXNzaWduO1xuIiwidmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9faXNBcnJheScpO1xuXG5cbi8qKlxuICogVGhpcyBjaGVja3Mgd2hldGhlciBhIGZ1bmN0aW9uIGhhcyBhIFttZXRob2RuYW1lXSBmdW5jdGlvbi4gSWYgaXQgaXNuJ3QgYW5cbiAqIGFycmF5IGl0IHdpbGwgZXhlY3V0ZSB0aGF0IGZ1bmN0aW9uIG90aGVyd2lzZSBpdCB3aWxsIGRlZmF1bHQgdG8gdGhlIHJhbWRhXG4gKiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gcmFtZGEgaW1wbGVtdGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kbmFtZSBwcm9wZXJ0eSB0byBjaGVjayBmb3IgYSBjdXN0b20gaW1wbGVtZW50YXRpb25cbiAqIEByZXR1cm4ge09iamVjdH0gV2hhdGV2ZXIgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbWV0aG9kIGlzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jaGVja0Zvck1ldGhvZChtZXRob2RuYW1lLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIHZhciBvYmogPSBhcmd1bWVudHNbbGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIChfaXNBcnJheShvYmopIHx8IHR5cGVvZiBvYmpbbWV0aG9kbmFtZV0gIT09ICdmdW5jdGlvbicpID9cbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOlxuICAgICAgb2JqW21ldGhvZG5hbWVdLmFwcGx5KG9iaiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCBsZW5ndGggLSAxKSk7XG4gIH07XG59O1xuIiwidmFyIF9jbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuXG4vKipcbiAqIENvcGllcyBhbiBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvcGllZFxuICogQHBhcmFtIHtBcnJheX0gcmVmRnJvbSBBcnJheSBjb250YWluaW5nIHRoZSBzb3VyY2UgcmVmZXJlbmNlc1xuICogQHBhcmFtIHtBcnJheX0gcmVmVG8gQXJyYXkgY29udGFpbmluZyB0aGUgY29waWVkIHNvdXJjZSByZWZlcmVuY2VzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlZXAgV2hldGhlciBvciBub3QgdG8gcGVyZm9ybSBkZWVwIGNsb25pbmcuXG4gKiBAcmV0dXJuIHsqfSBUaGUgY29waWVkIHZhbHVlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jbG9uZSh2YWx1ZSwgcmVmRnJvbSwgcmVmVG8sIGRlZXApIHtcbiAgdmFyIGNvcHkgPSBmdW5jdGlvbiBjb3B5KGNvcGllZFZhbHVlKSB7XG4gICAgdmFyIGxlbiA9IHJlZkZyb20ubGVuZ3RoO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gcmVmRnJvbVtpZHhdKSB7XG4gICAgICAgIHJldHVybiByZWZUb1tpZHhdO1xuICAgICAgfVxuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJlZkZyb21baWR4ICsgMV0gPSB2YWx1ZTtcbiAgICByZWZUb1tpZHggKyAxXSA9IGNvcGllZFZhbHVlO1xuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgY29waWVkVmFsdWVba2V5XSA9IGRlZXAgP1xuICAgICAgICBfY2xvbmUodmFsdWVba2V5XSwgcmVmRnJvbSwgcmVmVG8sIHRydWUpIDogdmFsdWVba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcGllZFZhbHVlO1xuICB9O1xuICBzd2l0Y2ggKHR5cGUodmFsdWUpKSB7XG4gICAgY2FzZSAnT2JqZWN0JzogIHJldHVybiBjb3B5KHt9KTtcbiAgICBjYXNlICdBcnJheSc6ICAgcmV0dXJuIGNvcHkoW10pO1xuICAgIGNhc2UgJ0RhdGUnOiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUudmFsdWVPZigpKTtcbiAgICBjYXNlICdSZWdFeHAnOiAgcmV0dXJuIF9jbG9uZVJlZ0V4cCh2YWx1ZSk7XG4gICAgZGVmYXVsdDogICAgICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2Nsb25lUmVnRXhwKHBhdHRlcm4pIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybi5zb3VyY2UsIChwYXR0ZXJuLmdsb2JhbCAgICAgPyAnZycgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhdHRlcm4uaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF0dGVybi5tdWx0aWxpbmUgID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXR0ZXJuLnN0aWNreSAgICAgPyAneScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhdHRlcm4udW5pY29kZSAgICA/ICd1JyA6ICcnKSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY29tcGxlbWVudChmKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gIWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvKipcbiAqIFByaXZhdGUgYGNvbmNhdGAgZnVuY3Rpb24gdG8gbWVyZ2UgdHdvIGFycmF5LWxpa2Ugb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IFtzZXQxPVtdXSBBbiBhcnJheS1saWtlIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl8QXJndW1lbnRzfSBbc2V0Mj1bXV0gQW4gYXJyYXktbGlrZSBvYmplY3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcsIG1lcmdlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBfY29uY2F0KFs0LCA1LCA2XSwgWzEsIDIsIDNdKTsgLy89PiBbNCwgNSwgNiwgMSwgMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY29uY2F0KHNldDEsIHNldDIpIHtcbiAgc2V0MSA9IHNldDEgfHwgW107XG4gIHNldDIgPSBzZXQyIHx8IFtdO1xuICB2YXIgaWR4O1xuICB2YXIgbGVuMSA9IHNldDEubGVuZ3RoO1xuICB2YXIgbGVuMiA9IHNldDIubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbjEpIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzZXQxW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbjIpIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzZXQyW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgX2luZGV4T2YgPSByZXF1aXJlKCcuL19pbmRleE9mJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY29udGFpbnMoYSwgbGlzdCkge1xuICByZXR1cm4gX2luZGV4T2YobGlzdCwgYSwgMCkgPj0gMDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jb250YWluc1dpdGgocHJlZCwgeCwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBpZiAocHJlZCh4LCBsaXN0W2lkeF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL19hcml0eScpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcihjb25jYXQpIHtcbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24oZm4sIGFyZ3MpIHtcbiAgICByZXR1cm4gX2FyaXR5KE1hdGgubWF4KDAsIGZuLmxlbmd0aCAtIGFyZ3MubGVuZ3RoKSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgY29uY2F0KGFyZ3MsIGFyZ3VtZW50cykpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJ2YXIgX2lzUGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL19pc1BsYWNlaG9sZGVyJyk7XG5cblxuLyoqXG4gKiBPcHRpbWl6ZWQgaW50ZXJuYWwgb25lLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnkxKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMShhKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHwgX2lzUGxhY2Vob2xkZXIoYSkpIHtcbiAgICAgIHJldHVybiBmMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9fY3VycnkxJyk7XG52YXIgX2lzUGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL19pc1BsYWNlaG9sZGVyJyk7XG5cblxuLyoqXG4gKiBPcHRpbWl6ZWQgaW50ZXJuYWwgdHdvLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnkyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMihhLCBiKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmMjtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpID8gZjJcbiAgICAgICAgICAgICA6IF9jdXJyeTEoZnVuY3Rpb24oX2IpIHsgcmV0dXJuIGZuKGEsIF9iKTsgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gX2lzUGxhY2Vob2xkZXIoYSkgJiYgX2lzUGxhY2Vob2xkZXIoYikgPyBmMlxuICAgICAgICAgICAgIDogX2lzUGxhY2Vob2xkZXIoYSkgPyBfY3VycnkxKGZ1bmN0aW9uKF9hKSB7IHJldHVybiBmbihfYSwgYik7IH0pXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTEoZnVuY3Rpb24oX2IpIHsgcmV0dXJuIGZuKGEsIF9iKTsgfSlcbiAgICAgICAgICAgICA6IGZuKGEsIGIpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vX2N1cnJ5MScpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfaXNQbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vX2lzUGxhY2Vob2xkZXInKTtcblxuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0aHJlZS1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5Myhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjMoYSwgYiwgYykge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZjM7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSA/IGYzXG4gICAgICAgICAgICAgOiBfY3VycnkyKGZ1bmN0aW9uKF9iLCBfYykgeyByZXR1cm4gZm4oYSwgX2IsIF9jKTsgfSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSA/IGYzXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihhKSA/IF9jdXJyeTIoZnVuY3Rpb24oX2EsIF9jKSB7IHJldHVybiBmbihfYSwgYiwgX2MpOyB9KVxuICAgICAgICAgICAgIDogX2lzUGxhY2Vob2xkZXIoYikgPyBfY3VycnkyKGZ1bmN0aW9uKF9iLCBfYykgeyByZXR1cm4gZm4oYSwgX2IsIF9jKTsgfSlcbiAgICAgICAgICAgICA6IF9jdXJyeTEoZnVuY3Rpb24oX2MpIHsgcmV0dXJuIGZuKGEsIGIsIF9jKTsgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gX2lzUGxhY2Vob2xkZXIoYSkgJiYgX2lzUGxhY2Vob2xkZXIoYikgJiYgX2lzUGxhY2Vob2xkZXIoYykgPyBmM1xuICAgICAgICAgICAgIDogX2lzUGxhY2Vob2xkZXIoYSkgJiYgX2lzUGxhY2Vob2xkZXIoYikgPyBfY3VycnkyKGZ1bmN0aW9uKF9hLCBfYikgeyByZXR1cm4gZm4oX2EsIF9iLCBjKTsgfSlcbiAgICAgICAgICAgICA6IF9pc1BsYWNlaG9sZGVyKGEpICYmIF9pc1BsYWNlaG9sZGVyKGMpID8gX2N1cnJ5MihmdW5jdGlvbihfYSwgX2MpIHsgcmV0dXJuIGZuKF9hLCBiLCBfYyk7IH0pXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihiKSAmJiBfaXNQbGFjZWhvbGRlcihjKSA/IF9jdXJyeTIoZnVuY3Rpb24oX2IsIF9jKSB7IHJldHVybiBmbihhLCBfYiwgX2MpOyB9KVxuICAgICAgICAgICAgIDogX2lzUGxhY2Vob2xkZXIoYSkgPyBfY3VycnkxKGZ1bmN0aW9uKF9hKSB7IHJldHVybiBmbihfYSwgYiwgYyk7IH0pXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTEoZnVuY3Rpb24oX2IpIHsgcmV0dXJuIGZuKGEsIF9iLCBjKTsgfSlcbiAgICAgICAgICAgICA6IF9pc1BsYWNlaG9sZGVyKGMpID8gX2N1cnJ5MShmdW5jdGlvbihfYykgeyByZXR1cm4gZm4oYSwgYiwgX2MpOyB9KVxuICAgICAgICAgICAgIDogZm4oYSwgYiwgYyk7XG4gICAgfVxuICB9O1xufTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL19hcml0eScpO1xudmFyIF9pc1BsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9faXNQbGFjZWhvbGRlcicpO1xuXG5cbi8qKlxuICogSW50ZXJuYWwgY3VycnlOIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGFyaXR5IG9mIHRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gcmVjZWl2ZWQgQW4gYXJyYXkgb2YgYXJndW1lbnRzIHJlY2VpdmVkIHRodXMgZmFyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeU4obGVuZ3RoLCByZWNlaXZlZCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21iaW5lZCA9IFtdO1xuICAgIHZhciBhcmdzSWR4ID0gMDtcbiAgICB2YXIgbGVmdCA9IGxlbmd0aDtcbiAgICB2YXIgY29tYmluZWRJZHggPSAwO1xuICAgIHdoaWxlIChjb21iaW5lZElkeCA8IHJlY2VpdmVkLmxlbmd0aCB8fCBhcmdzSWR4IDwgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIGlmIChjb21iaW5lZElkeCA8IHJlY2VpdmVkLmxlbmd0aCAmJlxuICAgICAgICAgICghX2lzUGxhY2Vob2xkZXIocmVjZWl2ZWRbY29tYmluZWRJZHhdKSB8fFxuICAgICAgICAgICBhcmdzSWR4ID49IGFyZ3VtZW50cy5sZW5ndGgpKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2VpdmVkW2NvbWJpbmVkSWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGFyZ3VtZW50c1thcmdzSWR4XTtcbiAgICAgICAgYXJnc0lkeCArPSAxO1xuICAgICAgfVxuICAgICAgY29tYmluZWRbY29tYmluZWRJZHhdID0gcmVzdWx0O1xuICAgICAgaWYgKCFfaXNQbGFjZWhvbGRlcihyZXN1bHQpKSB7XG4gICAgICAgIGxlZnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIGNvbWJpbmVkSWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0IDw9IDAgPyBmbi5hcHBseSh0aGlzLCBjb21iaW5lZClcbiAgICAgICAgICAgICAgICAgICAgIDogX2FyaXR5KGxlZnQsIF9jdXJyeU4obGVuZ3RoLCBjb21iaW5lZCwgZm4pKTtcbiAgfTtcbn07XG4iLCJ2YXIgX2lzQXJyYXkgPSByZXF1aXJlKCcuL19pc0FycmF5Jyk7XG52YXIgX2lzVHJhbnNmb3JtZXIgPSByZXF1aXJlKCcuL19pc1RyYW5zZm9ybWVyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBkaXNwYXRjaGVzIHdpdGggZGlmZmVyZW50IHN0cmF0ZWdpZXMgYmFzZWQgb24gdGhlXG4gKiBvYmplY3QgaW4gbGlzdCBwb3NpdGlvbiAobGFzdCBhcmd1bWVudCkuIElmIGl0IGlzIGFuIGFycmF5LCBleGVjdXRlcyBbZm5dLlxuICogT3RoZXJ3aXNlLCBpZiBpdCBoYXMgYSBmdW5jdGlvbiB3aXRoIG9uZSBvZiB0aGUgZ2l2ZW4gbWV0aG9kIG5hbWVzLCBpdCB3aWxsXG4gKiBleGVjdXRlIHRoYXQgZnVuY3Rpb24gKGZ1bmN0b3IgY2FzZSkuIE90aGVyd2lzZSwgaWYgaXQgaXMgYSB0cmFuc2Zvcm1lcixcbiAqIHVzZXMgdHJhbnNkdWNlciBbeGZdIHRvIHJldHVybiBhIG5ldyB0cmFuc2Zvcm1lciAodHJhbnNkdWNlciBjYXNlKS5cbiAqIE90aGVyd2lzZSwgaXQgd2lsbCBkZWZhdWx0IHRvIGV4ZWN1dGluZyBbZm5dLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBtZXRob2ROYW1lcyBwcm9wZXJ0aWVzIHRvIGNoZWNrIGZvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgdHJhbnNkdWNlciB0byBpbml0aWFsaXplIGlmIG9iamVjdCBpcyB0cmFuc2Zvcm1lclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gZGVmYXVsdCByYW1kYSBpbXBsZW1lbnRhdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCBkaXNwYXRjaGVzIG9uIG9iamVjdCBpbiBsaXN0IHBvc2l0aW9uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2Rpc3BhdGNoYWJsZShtZXRob2ROYW1lcywgeGYsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB2YXIgb2JqID0gYXJncy5wb3AoKTtcbiAgICBpZiAoIV9pc0FycmF5KG9iaikpIHtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgd2hpbGUgKGlkeCA8IG1ldGhvZE5hbWVzLmxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZW9mIG9ialttZXRob2ROYW1lc1tpZHhdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBvYmpbbWV0aG9kTmFtZXNbaWR4XV0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBpZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChfaXNUcmFuc2Zvcm1lcihvYmopKSB7XG4gICAgICAgIHZhciB0cmFuc2R1Y2VyID0geGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIHJldHVybiB0cmFuc2R1Y2VyKG9iaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciB0YWtlID0gcmVxdWlyZSgnLi4vdGFrZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRyb3BMYXN0KG4sIHhzKSB7XG4gIHJldHVybiB0YWtlKG4gPCB4cy5sZW5ndGggPyB4cy5sZW5ndGggLSBuIDogMCwgeHMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZHJvcExhc3RXaGlsZShwcmVkLCBsaXN0KSB7XG4gIHZhciBpZHggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gIHdoaWxlIChpZHggPj0gMCAmJiBwcmVkKGxpc3RbaWR4XSkpIHtcbiAgICBpZHggLT0gMTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCwgaWR4ICsgMSk7XG59O1xuIiwidmFyIF9hcnJheUZyb21JdGVyYXRvciA9IHJlcXVpcmUoJy4vX2FycmF5RnJvbUl0ZXJhdG9yJyk7XG52YXIgX2Z1bmN0aW9uTmFtZSA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uTmFtZScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBpZGVudGljYWwgPSByZXF1aXJlKCcuLi9pZGVudGljYWwnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi4va2V5cycpO1xudmFyIHR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZXF1YWxzKGEsIGIsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIGlmIChpZGVudGljYWwoYSwgYikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlKGEpICE9PSB0eXBlKGIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIGFbJ2ZhbnRhc3ktbGFuZC9lcXVhbHMnXSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgYlsnZmFudGFzeS1sYW5kL2VxdWFscyddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhWydmYW50YXN5LWxhbmQvZXF1YWxzJ10gPT09ICdmdW5jdGlvbicgJiYgYVsnZmFudGFzeS1sYW5kL2VxdWFscyddKGIpICYmXG4gICAgICAgICAgIHR5cGVvZiBiWydmYW50YXN5LWxhbmQvZXF1YWxzJ10gPT09ICdmdW5jdGlvbicgJiYgYlsnZmFudGFzeS1sYW5kL2VxdWFscyddKGEpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgYi5lcXVhbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZW9mIGEuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmIGEuZXF1YWxzKGIpICYmXG4gICAgICAgICAgIHR5cGVvZiBiLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyAmJiBiLmVxdWFscyhhKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZShhKSkge1xuICAgIGNhc2UgJ0FyZ3VtZW50cyc6XG4gICAgY2FzZSAnQXJyYXknOlxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICBpZiAodHlwZW9mIGEuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICBfZnVuY3Rpb25OYW1lKGEuY29uc3RydWN0b3IpID09PSAnUHJvbWlzZScpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdCb29sZWFuJzpcbiAgICBjYXNlICdOdW1iZXInOlxuICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICBpZiAoISh0eXBlb2YgYSA9PT0gdHlwZW9mIGIgJiYgaWRlbnRpY2FsKGEudmFsdWVPZigpLCBiLnZhbHVlT2YoKSkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgaWYgKCFpZGVudGljYWwoYS52YWx1ZU9mKCksIGIudmFsdWVPZigpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFcnJvcic6XG4gICAgICByZXR1cm4gYS5uYW1lID09PSBiLm5hbWUgJiYgYS5tZXNzYWdlID09PSBiLm1lc3NhZ2U7XG4gICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgIGlmICghKGEuc291cmNlID09PSBiLnNvdXJjZSAmJlxuICAgICAgICAgICAgYS5nbG9iYWwgPT09IGIuZ2xvYmFsICYmXG4gICAgICAgICAgICBhLmlnbm9yZUNhc2UgPT09IGIuaWdub3JlQ2FzZSAmJlxuICAgICAgICAgICAgYS5tdWx0aWxpbmUgPT09IGIubXVsdGlsaW5lICYmXG4gICAgICAgICAgICBhLnN0aWNreSA9PT0gYi5zdGlja3kgJiZcbiAgICAgICAgICAgIGEudW5pY29kZSA9PT0gYi51bmljb2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNYXAnOlxuICAgIGNhc2UgJ1NldCc6XG4gICAgICBpZiAoIV9lcXVhbHMoX2FycmF5RnJvbUl0ZXJhdG9yKGEuZW50cmllcygpKSwgX2FycmF5RnJvbUl0ZXJhdG9yKGIuZW50cmllcygpKSwgc3RhY2tBLCBzdGFja0IpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ludDhBcnJheSc6XG4gICAgY2FzZSAnVWludDhBcnJheSc6XG4gICAgY2FzZSAnVWludDhDbGFtcGVkQXJyYXknOlxuICAgIGNhc2UgJ0ludDE2QXJyYXknOlxuICAgIGNhc2UgJ1VpbnQxNkFycmF5JzpcbiAgICBjYXNlICdJbnQzMkFycmF5JzpcbiAgICBjYXNlICdVaW50MzJBcnJheSc6XG4gICAgY2FzZSAnRmxvYXQzMkFycmF5JzpcbiAgICBjYXNlICdGbG9hdDY0QXJyYXknOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyYXlCdWZmZXInOlxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFZhbHVlcyBvZiBvdGhlciB0eXBlcyBhcmUgb25seSBlcXVhbCBpZiBpZGVudGljYWwuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBrZXlzKGEpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzKGIpLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBpZHggPSBzdGFja0EubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgaWYgKHN0YWNrQVtpZHhdID09PSBhKSB7XG4gICAgICByZXR1cm4gc3RhY2tCW2lkeF0gPT09IGI7XG4gICAgfVxuICAgIGlkeCAtPSAxO1xuICB9XG5cbiAgc3RhY2tBLnB1c2goYSk7XG4gIHN0YWNrQi5wdXNoKGIpO1xuICBpZHggPSBrZXlzQS5sZW5ndGggLSAxO1xuICB3aGlsZSAoaWR4ID49IDApIHtcbiAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcbiAgICBpZiAoIShfaGFzKGtleSwgYikgJiYgX2VxdWFscyhiW2tleV0sIGFba2V5XSwgc3RhY2tBLCBzdGFja0IpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZHggLT0gMTtcbiAgfVxuICBzdGFja0EucG9wKCk7XG4gIHN0YWNrQi5wb3AoKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZmlsdGVyKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgaWYgKGZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGxpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgX2ZvcmNlUmVkdWNlZCA9IHJlcXVpcmUoJy4vX2ZvcmNlUmVkdWNlZCcpO1xudmFyIF9pc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vX2lzQXJyYXlMaWtlJyk7XG52YXIgX3JlZHVjZSA9IHJlcXVpcmUoJy4vX3JlZHVjZScpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBwcmVzZXJ2aW5nUmVkdWNlZCA9IGZ1bmN0aW9uKHhmKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IF94ZkJhc2UuaW5pdCxcbiAgICAgICdAQHRyYW5zZHVjZXIvcmVzdWx0JzogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gICAgICB9LFxuICAgICAgJ0BAdHJhbnNkdWNlci9zdGVwJzogZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgICAgICB2YXIgcmV0ID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gICAgICAgIHJldHVybiByZXRbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10gPyBfZm9yY2VSZWR1Y2VkKHJldCkgOiByZXQ7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gX3hjYXQoeGYpIHtcbiAgICB2YXIgcnhmID0gcHJlc2VydmluZ1JlZHVjZWQoeGYpO1xuICAgIHJldHVybiB7XG4gICAgICAnQEB0cmFuc2R1Y2VyL2luaXQnOiBfeGZCYXNlLmluaXQsXG4gICAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgICAgIH0sXG4gICAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhX2lzQXJyYXlMaWtlKGlucHV0KSA/IF9yZWR1Y2UocnhmLCByZXN1bHQsIFtpbnB1dF0pIDogX3JlZHVjZShyeGYsIHJlc3VsdCwgaW5wdXQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZm9yY2VSZWR1Y2VkKHgpIHtcbiAgcmV0dXJuIHtcbiAgICAnQEB0cmFuc2R1Y2VyL3ZhbHVlJzogeCxcbiAgICAnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnOiB0cnVlXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZnVuY3Rpb25OYW1lKGYpIHtcbiAgLy8gU3RyaW5nKHggPT4geCkgZXZhbHVhdGVzIHRvIFwieCA9PiB4XCIsIHNvIHRoZSBwYXR0ZXJuIG1heSBub3QgbWF0Y2guXG4gIHZhciBtYXRjaCA9IFN0cmluZyhmKS5tYXRjaCgvXmZ1bmN0aW9uIChcXHcqKS8pO1xuICByZXR1cm4gbWF0Y2ggPT0gbnVsbCA/ICcnIDogbWF0Y2hbMV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaGFzKHByb3AsIG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaWRlbnRpdHkoeCkgeyByZXR1cm4geDsgfTtcbiIsInZhciBlcXVhbHMgPSByZXF1aXJlKCcuLi9lcXVhbHMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pbmRleE9mKGxpc3QsIGEsIGlkeCkge1xuICB2YXIgaW5mLCBpdGVtO1xuICAvLyBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiBkb2Vzbid0IGV4aXN0IGJlbG93IElFOVxuICBpZiAodHlwZW9mIGxpc3QuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHN3aXRjaCAodHlwZW9mIGEpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGlmIChhID09PSAwKSB7XG4gICAgICAgICAgLy8gbWFudWFsbHkgY3Jhd2wgdGhlIGxpc3QgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiArMCBhbmQgLTBcbiAgICAgICAgICBpbmYgPSAxIC8gYTtcbiAgICAgICAgICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gMCAmJiAxIC8gaXRlbSA9PT0gaW5mKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYgKGEgIT09IGEpIHtcbiAgICAgICAgICAvLyBOYU5cbiAgICAgICAgICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdudW1iZXInICYmIGl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlkeCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm9uLXplcm8gbnVtYmVycyBjYW4gdXRpbGlzZSBTZXRcbiAgICAgICAgcmV0dXJuIGxpc3QuaW5kZXhPZihhLCBpZHgpO1xuXG4gICAgICAvLyBhbGwgdGhlc2UgdHlwZXMgY2FuIHV0aWxpc2UgU2V0XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGEsIGlkeCk7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChhID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gbnVsbCBjYW4gdXRpbGlzZSBTZXRcbiAgICAgICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGEsIGlkeCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gYW55dGhpbmcgZWxzZSBub3QgY292ZXJlZCBhYm92ZSwgZGVmZXIgdG8gUi5lcXVhbHNcbiAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgaWYgKGVxdWFscyhsaXN0W2lkeF0sIGEpKSB7XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuIiwidmFyIF9oYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgP1xuICAgIGZ1bmN0aW9uIF9pc0FyZ3VtZW50cyh4KSB7IHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcmd1bWVudHNdJzsgfSA6XG4gICAgZnVuY3Rpb24gX2lzQXJndW1lbnRzKHgpIHsgcmV0dXJuIF9oYXMoJ2NhbGxlZScsIHgpOyB9O1xufSgpKTtcbiIsIi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IGlzIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHZhbGAgaXMgYW4gYXJyYXksIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9pc0FycmF5KFtdKTsgLy89PiB0cnVlXG4gKiAgICAgIF9pc0FycmF5KG51bGwpOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5KHt9KTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gX2lzQXJyYXkodmFsKSB7XG4gIHJldHVybiAodmFsICE9IG51bGwgJiZcbiAgICAgICAgICB2YWwubGVuZ3RoID49IDAgJiZcbiAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJyk7XG59O1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL19jdXJyeTEnKTtcbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzQXJyYXknKTtcbnZhciBfaXNTdHJpbmcgPSByZXF1aXJlKCcuL19pc1N0cmluZycpO1xuXG5cbi8qKlxuICogVGVzdHMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IGlzIHNpbWlsYXIgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAqIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHhgIGhhcyBhIG51bWVyaWMgbGVuZ3RoIHByb3BlcnR5IGFuZCBleHRyZW1lIGluZGljZXMgZGVmaW5lZDsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgX2lzQXJyYXlMaWtlKFtdKTsgLy89PiB0cnVlXG4gKiAgICAgIF9pc0FycmF5TGlrZSh0cnVlKTsgLy89PiBmYWxzZVxuICogICAgICBfaXNBcnJheUxpa2Uoe30pOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5TGlrZSh7bGVuZ3RoOiAxMH0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIF9pc0FycmF5TGlrZSh7MDogJ3plcm8nLCA5OiAnbmluZScsIGxlbmd0aDogMTB9KTsgLy89PiB0cnVlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBpc0FycmF5TGlrZSh4KSB7XG4gIGlmIChfaXNBcnJheSh4KSkgeyByZXR1cm4gdHJ1ZTsgfVxuICBpZiAoIXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChfaXNTdHJpbmcoeCkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICh4Lm5vZGVUeXBlID09PSAxKSB7IHJldHVybiAhIXgubGVuZ3RoOyB9XG4gIGlmICh4Lmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBpZiAoeC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHguaGFzT3duUHJvcGVydHkoMCkgJiYgeC5oYXNPd25Qcm9wZXJ0eSh4Lmxlbmd0aCAtIDEpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuIiwiLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCBhcmd1bWVudCBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IG5cbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlci5pc0ludGVnZXIgfHwgZnVuY3Rpb24gX2lzSW50ZWdlcihuKSB7XG4gIHJldHVybiAobiA8PCAwKSA9PT0gbjtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pc051bWJlcih4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2lzT2JqZWN0KHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaXNQbGFjZWhvbGRlcihhKSB7XG4gIHJldHVybiBhICE9IG51bGwgJiZcbiAgICAgICAgIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaXNSZWdFeHAoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pc1N0cmluZyh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2lzVHJhbnNmb3JtZXIob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqWydAQHRyYW5zZHVjZXIvc3RlcCddID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBfaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL19pc0FycmF5TGlrZScpO1xuXG5cbi8qKlxuICogYF9tYWtlRmxhdGAgaXMgYSBoZWxwZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgb25lLWxldmVsIG9yIGZ1bGx5IHJlY3Vyc2l2ZVxuICogZnVuY3Rpb24gYmFzZWQgb24gdGhlIGZsYWcgcGFzc2VkIGluLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX21ha2VGbGF0KHJlY3Vyc2l2ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZmxhdHQobGlzdCkge1xuICAgIHZhciB2YWx1ZSwgamxlbiwgajtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIGlsZW4gPSBsaXN0Lmxlbmd0aDtcblxuICAgIHdoaWxlIChpZHggPCBpbGVuKSB7XG4gICAgICBpZiAoX2lzQXJyYXlMaWtlKGxpc3RbaWR4XSkpIHtcbiAgICAgICAgdmFsdWUgPSByZWN1cnNpdmUgPyBmbGF0dChsaXN0W2lkeF0pIDogbGlzdFtpZHhdO1xuICAgICAgICBqID0gMDtcbiAgICAgICAgamxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGogPCBqbGVuKSB7XG4gICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWVbal07XG4gICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsaXN0W2lkeF07XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9tYXAoZm4sIGZ1bmN0b3IpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBmdW5jdG9yLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbik7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICByZXN1bHRbaWR4XSA9IGZuKGZ1bmN0b3JbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgX2hhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9vYmplY3RBc3NpZ24odGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIG91dHB1dCA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaWR4ID0gMTtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW5ndGgpIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2lkeF07XG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBuZXh0S2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoX2hhcyhuZXh0S2V5LCBzb3VyY2UpKSB7XG4gICAgICAgICAgb3V0cHV0W25leHRLZXldID0gc291cmNlW25leHRLZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfb2YoeCkgeyByZXR1cm4gW3hdOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfcGlwZShmLCBnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZy5jYWxsKHRoaXMsIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfcGlwZVAoZiwgZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgcmV0dXJuIGYuYXBwbHkoY3R4LCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGcuY2FsbChjdHgsIHgpO1xuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3F1b3RlKHMpIHtcbiAgdmFyIGVzY2FwZWQgPSBzXG4gICAgLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcbiAgICAucmVwbGFjZSgvW1xcYl0vZywgJ1xcXFxiJykgIC8vIFxcYiBtYXRjaGVzIHdvcmQgYm91bmRhcnk7IFtcXGJdIG1hdGNoZXMgYmFja3NwYWNlXG4gICAgLnJlcGxhY2UoL1xcZi9nLCAnXFxcXGYnKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJylcbiAgICAucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG4gICAgLnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKVxuICAgIC5yZXBsYWNlKC9cXHYvZywgJ1xcXFx2JylcbiAgICAucmVwbGFjZSgvXFwwL2csICdcXFxcMCcpO1xuXG4gIHJldHVybiAnXCInICsgZXNjYXBlZC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCInO1xufTtcbiIsInZhciBfaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL19pc0FycmF5TGlrZScpO1xudmFyIF94d3JhcCA9IHJlcXVpcmUoJy4vX3h3cmFwJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2JpbmQnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gX2FycmF5UmVkdWNlKHhmLCBhY2MsIGxpc3QpIHtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gICAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgICAgYWNjID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10oYWNjLCBsaXN0W2lkeF0pO1xuICAgICAgaWYgKGFjYyAmJiBhY2NbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgICAgYWNjID0gYWNjWydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10oYWNjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVJlZHVjZSh4ZiwgYWNjLCBpdGVyKSB7XG4gICAgdmFyIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgICAgYWNjID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICAgIGlmIChhY2MgJiYgYWNjWydAQHRyYW5zZHVjZXIvcmVkdWNlZCddKSB7XG4gICAgICAgIGFjYyA9IGFjY1snQEB0cmFuc2R1Y2VyL3ZhbHVlJ107XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShhY2MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX21ldGhvZFJlZHVjZSh4ZiwgYWNjLCBvYmosIG1ldGhvZE5hbWUpIHtcbiAgICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShvYmpbbWV0aG9kTmFtZV0oYmluZCh4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSwgeGYpLCBhY2MpKTtcbiAgfVxuXG4gIHZhciBzeW1JdGVyYXRvciA9ICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7XG4gIHJldHVybiBmdW5jdGlvbiBfcmVkdWNlKGZuLCBhY2MsIGxpc3QpIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmbiA9IF94d3JhcChmbik7XG4gICAgfVxuICAgIGlmIChfaXNBcnJheUxpa2UobGlzdCkpIHtcbiAgICAgIHJldHVybiBfYXJyYXlSZWR1Y2UoZm4sIGFjYywgbGlzdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGlzdFsnZmFudGFzeS1sYW5kL3JlZHVjZSddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gX21ldGhvZFJlZHVjZShmbiwgYWNjLCBsaXN0LCAnZmFudGFzeS1sYW5kL3JlZHVjZScpO1xuICAgIH1cbiAgICBpZiAobGlzdFtzeW1JdGVyYXRvcl0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIF9pdGVyYWJsZVJlZHVjZShmbiwgYWNjLCBsaXN0W3N5bUl0ZXJhdG9yXSgpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaXN0Lm5leHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfaXRlcmFibGVSZWR1Y2UoZm4sIGFjYywgbGlzdCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGlzdC5yZWR1Y2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfbWV0aG9kUmVkdWNlKGZuLCBhY2MsIGxpc3QsICdyZWR1Y2UnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWR1Y2U6IGxpc3QgbXVzdCBiZSBhcnJheSBvciBpdGVyYWJsZScpO1xuICB9O1xufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3JlZHVjZWQoeCkge1xuICByZXR1cm4geCAmJiB4WydAQHRyYW5zZHVjZXIvcmVkdWNlZCddID8geCA6XG4gICAge1xuICAgICAgJ0BAdHJhbnNkdWNlci92YWx1ZSc6IHgsXG4gICAgICAnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnOiB0cnVlXG4gICAgfTtcbn07XG4iLCJ2YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJy4vX2Fzc2lnbicpO1xudmFyIF9pZGVudGl0eSA9IHJlcXVpcmUoJy4vX2lkZW50aXR5Jyk7XG52YXIgX2lzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9faXNBcnJheUxpa2UnKTtcbnZhciBfaXNUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vX2lzVHJhbnNmb3JtZXInKTtcbnZhciBvYmpPZiA9IHJlcXVpcmUoJy4uL29iak9mJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBfc3RlcENhdEFycmF5ID0ge1xuICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IEFycmF5LFxuICAgICdAQHRyYW5zZHVjZXIvc3RlcCc6IGZ1bmN0aW9uKHhzLCB4KSB7XG4gICAgICB4cy5wdXNoKHgpO1xuICAgICAgcmV0dXJuIHhzO1xuICAgIH0sXG4gICAgJ0BAdHJhbnNkdWNlci9yZXN1bHQnOiBfaWRlbnRpdHlcbiAgfTtcbiAgdmFyIF9zdGVwQ2F0U3RyaW5nID0ge1xuICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IFN0cmluZyxcbiAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfSxcbiAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IF9pZGVudGl0eVxuICB9O1xuICB2YXIgX3N0ZXBDYXRPYmplY3QgPSB7XG4gICAgJ0BAdHJhbnNkdWNlci9pbml0JzogT2JqZWN0LFxuICAgICdAQHRyYW5zZHVjZXIvc3RlcCc6IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICAgIHJldHVybiBfYXNzaWduKFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIF9pc0FycmF5TGlrZShpbnB1dCkgPyBvYmpPZihpbnB1dFswXSwgaW5wdXRbMV0pIDogaW5wdXRcbiAgICAgICk7XG4gICAgfSxcbiAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IF9pZGVudGl0eVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiBfc3RlcENhdChvYmopIHtcbiAgICBpZiAoX2lzVHJhbnNmb3JtZXIob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKF9pc0FycmF5TGlrZShvYmopKSB7XG4gICAgICByZXR1cm4gX3N0ZXBDYXRBcnJheTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gX3N0ZXBDYXRTdHJpbmc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIF9zdGVwQ2F0T2JqZWN0O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgdHJhbnNmb3JtZXIgZm9yICcgKyBvYmopO1xuICB9O1xufSgpKTtcbiIsIi8qKlxuICogUG9seWZpbGwgZnJvbSA8aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZS90b0lTT1N0cmluZz4uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgcGFkID0gZnVuY3Rpb24gcGFkKG4pIHsgcmV0dXJuIChuIDwgMTAgPyAnMCcgOiAnJykgKyBuOyB9O1xuXG4gIHJldHVybiB0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicgP1xuICAgIGZ1bmN0aW9uIF90b0lTT1N0cmluZyhkKSB7XG4gICAgICByZXR1cm4gZC50b0lTT1N0cmluZygpO1xuICAgIH0gOlxuICAgIGZ1bmN0aW9uIF90b0lTT1N0cmluZyhkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBkLmdldFVUQ0Z1bGxZZWFyKCkgKyAnLScgK1xuICAgICAgICBwYWQoZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICBwYWQoZC5nZXRVVENEYXRlKCkpICsgJ1QnICtcbiAgICAgICAgcGFkKGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgK1xuICAgICAgICBwYWQoZC5nZXRVVENNaW51dGVzKCkpICsgJzonICtcbiAgICAgICAgcGFkKGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArXG4gICAgICAgIChkLmdldFVUQ01pbGxpc2Vjb25kcygpIC8gMTAwMCkudG9GaXhlZCgzKS5zbGljZSgyLCA1KSArICdaJ1xuICAgICAgKTtcbiAgICB9O1xufSgpKTtcbiIsInZhciBfY29udGFpbnMgPSByZXF1aXJlKCcuL19jb250YWlucycpO1xudmFyIF9tYXAgPSByZXF1aXJlKCcuL19tYXAnKTtcbnZhciBfcXVvdGUgPSByZXF1aXJlKCcuL19xdW90ZScpO1xudmFyIF90b0lTT1N0cmluZyA9IHJlcXVpcmUoJy4vX3RvSVNPU3RyaW5nJyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJy4uL2tleXMnKTtcbnZhciByZWplY3QgPSByZXF1aXJlKCcuLi9yZWplY3QnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF90b1N0cmluZyh4LCBzZWVuKSB7XG4gIHZhciByZWN1ciA9IGZ1bmN0aW9uIHJlY3VyKHkpIHtcbiAgICB2YXIgeHMgPSBzZWVuLmNvbmNhdChbeF0pO1xuICAgIHJldHVybiBfY29udGFpbnMoeSwgeHMpID8gJzxDaXJjdWxhcj4nIDogX3RvU3RyaW5nKHksIHhzKTtcbiAgfTtcblxuICAvLyAgbWFwUGFpcnMgOjogKE9iamVjdCwgW1N0cmluZ10pIC0+IFtTdHJpbmddXG4gIHZhciBtYXBQYWlycyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICAgIHJldHVybiBfbWFwKGZ1bmN0aW9uKGspIHsgcmV0dXJuIF9xdW90ZShrKSArICc6ICcgKyByZWN1cihvYmpba10pOyB9LCBrZXlzLnNsaWNlKCkuc29ydCgpKTtcbiAgfTtcblxuICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSkge1xuICAgIGNhc2UgJ1tvYmplY3QgQXJndW1lbnRzXSc6XG4gICAgICByZXR1cm4gJyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgnICsgX21hcChyZWN1ciwgeCkuam9pbignLCAnKSArICcpKSc7XG4gICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgcmV0dXJuICdbJyArIF9tYXAocmVjdXIsIHgpLmNvbmNhdChtYXBQYWlycyh4LCByZWplY3QoZnVuY3Rpb24oaykgeyByZXR1cm4gL15cXGQrJC8udGVzdChrKTsgfSwga2V5cyh4KSkpKS5qb2luKCcsICcpICsgJ10nO1xuICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/ICduZXcgQm9vbGVhbignICsgcmVjdXIoeC52YWx1ZU9mKCkpICsgJyknIDogeC50b1N0cmluZygpO1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgcmV0dXJuICduZXcgRGF0ZSgnICsgKGlzTmFOKHgudmFsdWVPZigpKSA/IHJlY3VyKE5hTikgOiBfcXVvdGUoX3RvSVNPU3RyaW5nKHgpKSkgKyAnKSc7XG4gICAgY2FzZSAnW29iamVjdCBOdWxsXSc6XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnID8gJ25ldyBOdW1iZXIoJyArIHJlY3VyKHgudmFsdWVPZigpKSArICcpJyA6IDEgLyB4ID09PSAtSW5maW5pdHkgPyAnLTAnIDogeC50b1N0cmluZygxMCk7XG4gICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgPyAnbmV3IFN0cmluZygnICsgcmVjdXIoeC52YWx1ZU9mKCkpICsgJyknIDogX3F1b3RlKHgpO1xuICAgIGNhc2UgJ1tvYmplY3QgVW5kZWZpbmVkXSc6XG4gICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICh0eXBlb2YgeC50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgcmVwciA9IHgudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHJlcHIgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcHI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAneycgKyBtYXBQYWlycyh4LCBrZXlzKHgpKS5qb2luKCcsICcpICsgJ30nO1xuICB9XG59O1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vX3JlZHVjZWQnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhBbGwoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgICB0aGlzLmFsbCA9IHRydWU7XG4gIH1cbiAgWEFsbC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhBbGwucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBpZiAodGhpcy5hbGwpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYQWxsLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuZihpbnB1dCkpIHtcbiAgICAgIHRoaXMuYWxsID0gZmFsc2U7XG4gICAgICByZXN1bHQgPSBfcmVkdWNlZCh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgZmFsc2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGFsbChmLCB4ZikgeyByZXR1cm4gbmV3IFhBbGwoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF9yZWR1Y2VkID0gcmVxdWlyZSgnLi9fcmVkdWNlZCcpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWEFueShmLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmYgPSBmO1xuICAgIHRoaXMuYW55ID0gZmFsc2U7XG4gIH1cbiAgWEFueS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhBbnkucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBpZiAoIXRoaXMuYW55KSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhBbnkucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIGlmICh0aGlzLmYoaW5wdXQpKSB7XG4gICAgICB0aGlzLmFueSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBfcmVkdWNlZCh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdHJ1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94YW55KGYsIHhmKSB7IHJldHVybiBuZXcgWEFueShmLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWEFwZXJ0dXJlKG4sIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLmZ1bGwgPSBmYWxzZTtcbiAgICB0aGlzLmFjYyA9IG5ldyBBcnJheShuKTtcbiAgfVxuICBYQXBlcnR1cmUucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYQXBlcnR1cmUucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB0aGlzLmFjYyA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYQXBlcnR1cmUucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHRoaXMuc3RvcmUoaW5wdXQpO1xuICAgIHJldHVybiB0aGlzLmZ1bGwgPyB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5nZXRDb3B5KCkpIDogcmVzdWx0O1xuICB9O1xuICBYQXBlcnR1cmUucHJvdG90eXBlLnN0b3JlID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICB0aGlzLmFjY1t0aGlzLnBvc10gPSBpbnB1dDtcbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIGlmICh0aGlzLnBvcyA9PT0gdGhpcy5hY2MubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBvcyA9IDA7XG4gICAgICB0aGlzLmZ1bGwgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgWEFwZXJ0dXJlLnByb3RvdHlwZS5nZXRDb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5hY2MsIHRoaXMucG9zKSxcbiAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmFjYywgMCwgdGhpcy5wb3MpKTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGFwZXJ0dXJlKG4sIHhmKSB7IHJldHVybiBuZXcgWEFwZXJ0dXJlKG4sIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfZmxhdENhdCA9IHJlcXVpcmUoJy4vX2ZsYXRDYXQnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuLi9tYXAnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gX3hjaGFpbihmLCB4Zikge1xuICByZXR1cm4gbWFwKGYsIF9mbGF0Q2F0KHhmKSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRHJvcChuLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLm4gPSBuO1xuICB9XG4gIFhEcm9wLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWERyb3AucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWERyb3AucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIGlmICh0aGlzLm4gPiAwKSB7XG4gICAgICB0aGlzLm4gLT0gMTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZHJvcChuLCB4ZikgeyByZXR1cm4gbmV3IFhEcm9wKG4sIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhEcm9wTGFzdChuLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdGhpcy5mdWxsID0gZmFsc2U7XG4gICAgdGhpcy5hY2MgPSBuZXcgQXJyYXkobik7XG4gIH1cbiAgWERyb3BMYXN0LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWERyb3BMYXN0LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoaXMuYWNjID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhEcm9wTGFzdC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgaWYgKHRoaXMuZnVsbCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuYWNjW3RoaXMucG9zXSk7XG4gICAgfVxuICAgIHRoaXMuc3RvcmUoaW5wdXQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIFhEcm9wTGFzdC5wcm90b3R5cGUuc3RvcmUgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgIHRoaXMuYWNjW3RoaXMucG9zXSA9IGlucHV0O1xuICAgIHRoaXMucG9zICs9IDE7XG4gICAgaWYgKHRoaXMucG9zID09PSB0aGlzLmFjYy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucG9zID0gMDtcbiAgICAgIHRoaXMuZnVsbCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZHJvcExhc3QobiwgeGYpIHsgcmV0dXJuIG5ldyBYRHJvcExhc3QobiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL19yZWR1Y2UnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRHJvcExhc3RXaGlsZShmbiwgeGYpIHtcbiAgICB0aGlzLmYgPSBmbjtcbiAgICB0aGlzLnJldGFpbmVkID0gW107XG4gICAgdGhpcy54ZiA9IHhmO1xuICB9XG4gIFhEcm9wTGFzdFdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWERyb3BMYXN0V2hpbGUucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB0aGlzLnJldGFpbmVkID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhEcm9wTGFzdFdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5mKGlucHV0KSA/IHRoaXMucmV0YWluKHJlc3VsdCwgaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZsdXNoKHJlc3VsdCwgaW5wdXQpO1xuICB9O1xuICBYRHJvcExhc3RXaGlsZS5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmVzdWx0ID0gX3JlZHVjZShcbiAgICAgIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10sXG4gICAgICByZXN1bHQsXG4gICAgICB0aGlzLnJldGFpbmVkXG4gICAgKTtcbiAgICB0aGlzLnJldGFpbmVkID0gW107XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gIH07XG4gIFhEcm9wTGFzdFdoaWxlLnByb3RvdHlwZS5yZXRhaW4gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgdGhpcy5yZXRhaW5lZC5wdXNoKGlucHV0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZHJvcExhc3RXaGlsZShmbiwgeGYpIHsgcmV0dXJuIG5ldyBYRHJvcExhc3RXaGlsZShmbiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWERyb3BSZXBlYXRzV2l0aChwcmVkLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLnByZWQgPSBwcmVkO1xuICAgIHRoaXMubGFzdFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VlbkZpcnN0VmFsdWUgPSBmYWxzZTtcbiAgfVxuXG4gIFhEcm9wUmVwZWF0c1dpdGgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYRHJvcFJlcGVhdHNXaXRoLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gX3hmQmFzZS5yZXN1bHQ7XG4gIFhEcm9wUmVwZWF0c1dpdGgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHZhciBzYW1lQXNMYXN0ID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLnNlZW5GaXJzdFZhbHVlKSB7XG4gICAgICB0aGlzLnNlZW5GaXJzdFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlZCh0aGlzLmxhc3RWYWx1ZSwgaW5wdXQpKSB7XG4gICAgICBzYW1lQXNMYXN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5sYXN0VmFsdWUgPSBpbnB1dDtcbiAgICByZXR1cm4gc2FtZUFzTGFzdCA/IHJlc3VsdCA6IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hkcm9wUmVwZWF0c1dpdGgocHJlZCwgeGYpIHsgcmV0dXJuIG5ldyBYRHJvcFJlcGVhdHNXaXRoKHByZWQsIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhEcm9wV2hpbGUoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYRHJvcFdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWERyb3BXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYRHJvcFdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICBpZiAodGhpcy5mKSB7XG4gICAgICBpZiAodGhpcy5mKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgdGhpcy5mID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hkcm9wV2hpbGUoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRHJvcFdoaWxlKGYsIHhmKTsgfSk7XG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvaW5pdCddKCk7XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9XG59O1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhGaWx0ZXIoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYRmlsdGVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYRmlsdGVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5mKGlucHV0KSA/IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCkgOiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hmaWx0ZXIoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmlsdGVyKGYsIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vX3JlZHVjZWQnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhGaW5kKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gICAgdGhpcy5mb3VuZCA9IGZhbHNlO1xuICB9XG4gIFhGaW5kLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbmQucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBpZiAoIXRoaXMuZm91bmQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB2b2lkIDApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhGaW5kLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICBpZiAodGhpcy5mKGlucHV0KSkge1xuICAgICAgdGhpcy5mb3VuZCA9IHRydWU7XG4gICAgICByZXN1bHQgPSBfcmVkdWNlZCh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGZpbmQoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmluZChmLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL19yZWR1Y2VkJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRmluZEluZGV4KGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gICAgdGhpcy5pZHggPSAtMTtcbiAgICB0aGlzLmZvdW5kID0gZmFsc2U7XG4gIH1cbiAgWEZpbmRJbmRleC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaW5kSW5kZXgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBpZiAoIXRoaXMuZm91bmQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfTtcbiAgWEZpbmRJbmRleC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgdGhpcy5pZHggKz0gMTtcbiAgICBpZiAodGhpcy5mKGlucHV0KSkge1xuICAgICAgdGhpcy5mb3VuZCA9IHRydWU7XG4gICAgICByZXN1bHQgPSBfcmVkdWNlZCh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5pZHgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGZpbmRJbmRleChmLCB4ZikgeyByZXR1cm4gbmV3IFhGaW5kSW5kZXgoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWEZpbmRMYXN0KGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWEZpbmRMYXN0LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbmRMYXN0LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5sYXN0KSk7XG4gIH07XG4gIFhGaW5kTGFzdC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgaWYgKHRoaXMuZihpbnB1dCkpIHtcbiAgICAgIHRoaXMubGFzdCA9IGlucHV0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZmluZExhc3QoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmluZExhc3QoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWEZpbmRMYXN0SW5kZXgoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgICB0aGlzLmlkeCA9IC0xO1xuICAgIHRoaXMubGFzdElkeCA9IC0xO1xuICB9XG4gIFhGaW5kTGFzdEluZGV4LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEZpbmRMYXN0SW5kZXgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmxhc3RJZHgpKTtcbiAgfTtcbiAgWEZpbmRMYXN0SW5kZXgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHRoaXMuaWR4ICs9IDE7XG4gICAgaWYgKHRoaXMuZihpbnB1dCkpIHtcbiAgICAgIHRoaXMubGFzdElkeCA9IHRoaXMuaWR4O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZmluZExhc3RJbmRleChmLCB4ZikgeyByZXR1cm4gbmV3IFhGaW5kTGFzdEluZGV4KGYsIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhNYXAoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYTWFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYTWFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuZihpbnB1dCkpO1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94bWFwKGYsIHhmKSB7IHJldHVybiBuZXcgWE1hcChmLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnlOID0gcmVxdWlyZSgnLi9fY3VycnlOJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWFJlZHVjZUJ5KHZhbHVlRm4sIHZhbHVlQWNjLCBrZXlGbiwgeGYpIHtcbiAgICB0aGlzLnZhbHVlRm4gPSB2YWx1ZUZuO1xuICAgIHRoaXMudmFsdWVBY2MgPSB2YWx1ZUFjYztcbiAgICB0aGlzLmtleUZuID0ga2V5Rm47XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuaW5wdXRzID0ge307XG4gIH1cbiAgWFJlZHVjZUJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWFJlZHVjZUJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiB0aGlzLmlucHV0cykge1xuICAgICAgaWYgKF9oYXMoa2V5LCB0aGlzLmlucHV0cykpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuaW5wdXRzW2tleV0pO1xuICAgICAgICBpZiAocmVzdWx0WydAQHRyYW5zZHVjZXIvcmVkdWNlZCddKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0WydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0cyA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYUmVkdWNlQnkucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHZhciBrZXkgPSB0aGlzLmtleUZuKGlucHV0KTtcbiAgICB0aGlzLmlucHV0c1trZXldID0gdGhpcy5pbnB1dHNba2V5XSB8fCBba2V5LCB0aGlzLnZhbHVlQWNjXTtcbiAgICB0aGlzLmlucHV0c1trZXldWzFdID0gdGhpcy52YWx1ZUZuKHRoaXMuaW5wdXRzW2tleV1bMV0sIGlucHV0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnlOKDQsIFtdLFxuICAgICAgICAgICAgICAgICBmdW5jdGlvbiBfeHJlZHVjZUJ5KHZhbHVlRm4sIHZhbHVlQWNjLCBrZXlGbiwgeGYpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFhSZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIHhmKTtcbiAgICAgICAgICAgICAgICAgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vX3JlZHVjZWQnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYVGFrZShuLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLm4gPSBuO1xuICAgIHRoaXMuaSA9IDA7XG4gIH1cbiAgWFRha2UucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYVGFrZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYVGFrZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgdGhpcy5pICs9IDE7XG4gICAgdmFyIHJldCA9IHRoaXMubiA9PT0gMCA/IHJlc3VsdCA6IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gICAgcmV0dXJuIHRoaXMubiA+PSAwICYmIHRoaXMuaSA+PSB0aGlzLm4gPyBfcmVkdWNlZChyZXQpIDogcmV0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94dGFrZShuLCB4ZikgeyByZXR1cm4gbmV3IFhUYWtlKG4sIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vX3JlZHVjZWQnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhUYWtlV2hpbGUoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgfVxuICBYVGFrZVdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWFRha2VXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYVGFrZVdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5mKGlucHV0KSA/IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCkgOiBfcmVkdWNlZChyZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94dGFrZVdoaWxlKGYsIHhmKSB7IHJldHVybiBuZXcgWFRha2VXaGlsZShmLCB4Zik7IH0pO1xufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYV3JhcChmbikge1xuICAgIHRoaXMuZiA9IGZuO1xuICB9XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5pdCBub3QgaW1wbGVtZW50ZWQgb24gWFdyYXAnKTtcbiAgfTtcbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihhY2MpIHsgcmV0dXJuIGFjYzsgfTtcbiAgWFdyYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24oYWNjLCB4KSB7XG4gICAgcmV0dXJuIHRoaXMuZihhY2MsIHgpO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiBfeHdyYXAoZm4pIHsgcmV0dXJuIG5ldyBYV3JhcChmbik7IH07XG59KCkpO1xuIiwidmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9maWx0ZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19maWx0ZXInKTtcbnZhciBmbGlwID0gcmVxdWlyZSgnLi9mbGlwJyk7XG52YXIgdW5pcSA9IHJlcXVpcmUoJy4vdW5pcScpO1xuXG5cbi8qKlxuICogQ29tYmluZXMgdHdvIGxpc3RzIGludG8gYSBzZXQgKGkuZS4gbm8gZHVwbGljYXRlcykgY29tcG9zZWQgb2YgdGhvc2VcbiAqIGVsZW1lbnRzIGNvbW1vbiB0byBib3RoIGxpc3RzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFsqXSAtPiBbKl0gLT4gWypdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgZmlyc3QgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIFRoZSBzZWNvbmQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiBlbGVtZW50cyBmb3VuZCBpbiBib3RoIGBsaXN0MWAgYW5kIGBsaXN0MmAuXG4gKiBAc2VlIFIuaW5uZXJKb2luXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pbnRlcnNlY3Rpb24oWzEsMiwzLDRdLCBbNyw2LDUsNCwzXSk7IC8vPT4gWzQsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBpbnRlcnNlY3Rpb24obGlzdDEsIGxpc3QyKSB7XG4gIHZhciBsb29rdXBMaXN0LCBmaWx0ZXJlZExpc3Q7XG4gIGlmIChsaXN0MS5sZW5ndGggPiBsaXN0Mi5sZW5ndGgpIHtcbiAgICBsb29rdXBMaXN0ID0gbGlzdDE7XG4gICAgZmlsdGVyZWRMaXN0ID0gbGlzdDI7XG4gIH0gZWxzZSB7XG4gICAgbG9va3VwTGlzdCA9IGxpc3QyO1xuICAgIGZpbHRlcmVkTGlzdCA9IGxpc3QxO1xuICB9XG4gIHJldHVybiB1bmlxKF9maWx0ZXIoZmxpcChfY29udGFpbnMpKGxvb2t1cExpc3QpLCBmaWx0ZXJlZExpc3QpKTtcbn0pO1xuIiwidmFyIF9jb250YWluc1dpdGggPSByZXF1aXJlKCcuL2ludGVybmFsL19jb250YWluc1dpdGgnKTtcbnZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgdW5pcVdpdGggPSByZXF1aXJlKCcuL3VuaXFXaXRoJyk7XG5cblxuLyoqXG4gKiBDb21iaW5lcyB0d28gbGlzdHMgaW50byBhIHNldCAoaS5lLiBubyBkdXBsaWNhdGVzKSBjb21wb3NlZCBvZiB0aG9zZVxuICogZWxlbWVudHMgY29tbW9uIHRvIGJvdGggbGlzdHMuIER1cGxpY2F0aW9uIGlzIGRldGVybWluZWQgYWNjb3JkaW5nIHRvIHRoZVxuICogdmFsdWUgcmV0dXJuZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSB0byB0d28gbGlzdCBlbGVtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyAoKGEsIGEpIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyXG4gKiAgICAgICAgdGhlIHR3byBzdXBwbGllZCBlbGVtZW50cyBhcmUgZXF1YWwuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBPbmUgbGlzdCBvZiBpdGVtcyB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MiBBIHNlY29uZCBsaXN0IG9mIGl0ZW1zIHRvIGNvbXBhcmVcbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhvc2UgZWxlbWVudHMgY29tbW9uIHRvIGJvdGggbGlzdHMuXG4gKiBAc2VlIFIuaW5uZXJKb2luXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2MC4yNC4wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGJ1ZmZhbG9TcHJpbmdmaWVsZCA9IFtcbiAqICAgICAgICB7aWQ6IDgyNCwgbmFtZTogJ1JpY2hpZSBGdXJheSd9LFxuICogICAgICAgIHtpZDogOTU2LCBuYW1lOiAnRGV3ZXkgTWFydGluJ30sXG4gKiAgICAgICAge2lkOiAzMTMsIG5hbWU6ICdCcnVjZSBQYWxtZXInfSxcbiAqICAgICAgICB7aWQ6IDQ1NiwgbmFtZTogJ1N0ZXBoZW4gU3RpbGxzJ30sXG4gKiAgICAgICAge2lkOiAxNzcsIG5hbWU6ICdOZWlsIFlvdW5nJ31cbiAqICAgICAgXTtcbiAqICAgICAgdmFyIGNzbnkgPSBbXG4gKiAgICAgICAge2lkOiAyMDQsIG5hbWU6ICdEYXZpZCBDcm9zYnknfSxcbiAqICAgICAgICB7aWQ6IDQ1NiwgbmFtZTogJ1N0ZXBoZW4gU3RpbGxzJ30sXG4gKiAgICAgICAge2lkOiA1MzksIG5hbWU6ICdHcmFoYW0gTmFzaCd9LFxuICogICAgICAgIHtpZDogMTc3LCBuYW1lOiAnTmVpbCBZb3VuZyd9XG4gKiAgICAgIF07XG4gKlxuICogICAgICBSLmludGVyc2VjdGlvbldpdGgoUi5lcUJ5KFIucHJvcCgnaWQnKSksIGJ1ZmZhbG9TcHJpbmdmaWVsZCwgY3NueSk7XG4gKiAgICAgIC8vPT4gW3tpZDogNDU2LCBuYW1lOiAnU3RlcGhlbiBTdGlsbHMnfSwge2lkOiAxNzcsIG5hbWU6ICdOZWlsIFlvdW5nJ31dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBpbnRlcnNlY3Rpb25XaXRoKHByZWQsIGxpc3QxLCBsaXN0Mikge1xuICB2YXIgbG9va3VwTGlzdCwgZmlsdGVyZWRMaXN0O1xuICBpZiAobGlzdDEubGVuZ3RoID4gbGlzdDIubGVuZ3RoKSB7XG4gICAgbG9va3VwTGlzdCA9IGxpc3QxO1xuICAgIGZpbHRlcmVkTGlzdCA9IGxpc3QyO1xuICB9IGVsc2Uge1xuICAgIGxvb2t1cExpc3QgPSBsaXN0MjtcbiAgICBmaWx0ZXJlZExpc3QgPSBsaXN0MTtcbiAgfVxuICB2YXIgcmVzdWx0cyA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGZpbHRlcmVkTGlzdC5sZW5ndGgpIHtcbiAgICBpZiAoX2NvbnRhaW5zV2l0aChwcmVkLCBmaWx0ZXJlZExpc3RbaWR4XSwgbG9va3VwTGlzdCkpIHtcbiAgICAgIHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gZmlsdGVyZWRMaXN0W2lkeF07XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiB1bmlxV2l0aChwcmVkLCByZXN1bHRzKTtcbn0pO1xuIiwidmFyIF9jaGVja0Zvck1ldGhvZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBsaXN0IHdpdGggdGhlIHNlcGFyYXRvciBpbnRlcnBvc2VkIGJldHdlZW4gZWxlbWVudHMuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGludGVyc3BlcnNlYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7Kn0gc2VwYXJhdG9yIFRoZSBlbGVtZW50IHRvIGFkZCB0byB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gYmUgaW50ZXJwb3NlZC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGxpc3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pbnRlcnNwZXJzZSgnbicsIFsnYmEnLCAnYScsICdhJ10pOyAvLz0+IFsnYmEnLCAnbicsICdhJywgJ24nLCAnYSddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfY2hlY2tGb3JNZXRob2QoJ2ludGVyc3BlcnNlJywgZnVuY3Rpb24gaW50ZXJzcGVyc2Uoc2VwYXJhdG9yLCBsaXN0KSB7XG4gIHZhciBvdXQgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbmd0aCkge1xuICAgIGlmIChpZHggPT09IGxlbmd0aCAtIDEpIHtcbiAgICAgIG91dC5wdXNoKGxpc3RbaWR4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dC5wdXNoKGxpc3RbaWR4XSwgc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn0pKTtcbiIsInZhciBfY2xvbmUgPSByZXF1aXJlKCcuL2ludGVybmFsL19jbG9uZScpO1xudmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBfaXNUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzVHJhbnNmb3JtZXInKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgX3N0ZXBDYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19zdGVwQ2F0Jyk7XG5cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBpdGVtcyBvZiB0aGUgbGlzdCB3aXRoIHRoZSB0cmFuc2R1Y2VyIGFuZCBhcHBlbmRzIHRoZVxuICogdHJhbnNmb3JtZWQgaXRlbXMgdG8gdGhlIGFjY3VtdWxhdG9yIHVzaW5nIGFuIGFwcHJvcHJpYXRlIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBiYXNlZCBvbiB0aGUgYWNjdW11bGF0b3IgdHlwZS5cbiAqXG4gKiBUaGUgYWNjdW11bGF0b3IgY2FuIGJlIGFuIGFycmF5LCBzdHJpbmcsIG9iamVjdCBvciBhIHRyYW5zZm9ybWVyLiBJdGVyYXRlZFxuICogaXRlbXMgd2lsbCBiZSBhcHBlbmRlZCB0byBhcnJheXMgYW5kIGNvbmNhdGVuYXRlZCB0byBzdHJpbmdzLiBPYmplY3RzIHdpbGxcbiAqIGJlIG1lcmdlZCBkaXJlY3RseSBvciAyLWl0ZW0gYXJyYXlzIHdpbGwgYmUgbWVyZ2VkIGFzIGtleSwgdmFsdWUgcGFpcnMuXG4gKlxuICogVGhlIGFjY3VtdWxhdG9yIGNhbiBhbHNvIGJlIGEgdHJhbnNmb3JtZXIgb2JqZWN0IHRoYXQgcHJvdmlkZXMgYSAyLWFyaXR5XG4gKiByZWR1Y2luZyBpdGVyYXRvciBmdW5jdGlvbiwgc3RlcCwgMC1hcml0eSBpbml0aWFsIHZhbHVlIGZ1bmN0aW9uLCBpbml0LCBhbmRcbiAqIDEtYXJpdHkgcmVzdWx0IGV4dHJhY3Rpb24gZnVuY3Rpb24gcmVzdWx0LiBUaGUgc3RlcCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZVxuICogaXRlcmF0b3IgZnVuY3Rpb24gaW4gcmVkdWNlLiBUaGUgcmVzdWx0IGZ1bmN0aW9uIGlzIHVzZWQgdG8gY29udmVydCB0aGVcbiAqIGZpbmFsIGFjY3VtdWxhdG9yIGludG8gdGhlIHJldHVybiB0eXBlIGFuZCBpbiBtb3N0IGNhc2VzIGlzIFIuaWRlbnRpdHkuIFRoZVxuICogaW5pdCBmdW5jdGlvbiBpcyB1c2VkIHRvIHByb3ZpZGUgdGhlIGluaXRpYWwgYWNjdW11bGF0b3IuXG4gKlxuICogVGhlIGl0ZXJhdGlvbiBpcyBwZXJmb3JtZWQgd2l0aCBbYFIucmVkdWNlYF0oI3JlZHVjZSkgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZVxuICogdHJhbnNkdWNlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IChiIC0+IGIpIC0+IFtjXSAtPiBhXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgaW5pdGlhbCBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBSZWNlaXZlcyBhIHRyYW5zZm9ybWVyIGFuZCByZXR1cm5zIGEgdHJhbnNmb3JtZXIuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bWJlcnMgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgIHZhciB0cmFuc2R1Y2VyID0gUi5jb21wb3NlKFIubWFwKFIuYWRkKDEpKSwgUi50YWtlKDIpKTtcbiAqXG4gKiAgICAgIFIuaW50byhbXSwgdHJhbnNkdWNlciwgbnVtYmVycyk7IC8vPT4gWzIsIDNdXG4gKlxuICogICAgICB2YXIgaW50b0FycmF5ID0gUi5pbnRvKFtdKTtcbiAqICAgICAgaW50b0FycmF5KHRyYW5zZHVjZXIsIG51bWJlcnMpOyAvLz0+IFsyLCAzXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gaW50byhhY2MsIHhmLCBsaXN0KSB7XG4gIHJldHVybiBfaXNUcmFuc2Zvcm1lcihhY2MpID9cbiAgICBfcmVkdWNlKHhmKGFjYyksIGFjY1snQEB0cmFuc2R1Y2VyL2luaXQnXSgpLCBsaXN0KSA6XG4gICAgX3JlZHVjZSh4Zihfc3RlcENhdChhY2MpKSwgX2Nsb25lKGFjYywgW10sIFtdLCBmYWxzZSksIGxpc3QpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBTYW1lIGFzIFtgUi5pbnZlcnRPYmpgXSgjaW52ZXJ0T2JqKSwgaG93ZXZlciB0aGlzIGFjY291bnRzIGZvciBvYmplY3RzIHdpdGhcbiAqIGR1cGxpY2F0ZSB2YWx1ZXMgYnkgcHV0dGluZyB0aGUgdmFsdWVzIGludG8gYW4gYXJyYXkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtzOiB4fSAtPiB7eDogWyBzLCAuLi4gXX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCBvciBhcnJheSB0byBpbnZlcnRcbiAqIEByZXR1cm4ge09iamVjdH0gb3V0IEEgbmV3IG9iamVjdCB3aXRoIGtleXMgaW4gYW4gYXJyYXkuXG4gKiBAc2VlIFIuaW52ZXJ0T2JqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHJhY2VSZXN1bHRzQnlGaXJzdE5hbWUgPSB7XG4gKiAgICAgICAgZmlyc3Q6ICdhbGljZScsXG4gKiAgICAgICAgc2Vjb25kOiAnamFrZScsXG4gKiAgICAgICAgdGhpcmQ6ICdhbGljZScsXG4gKiAgICAgIH07XG4gKiAgICAgIFIuaW52ZXJ0KHJhY2VSZXN1bHRzQnlGaXJzdE5hbWUpO1xuICogICAgICAvLz0+IHsgJ2FsaWNlJzogWydmaXJzdCcsICd0aGlyZCddLCAnamFrZSc6WydzZWNvbmQnXSB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBpbnZlcnQob2JqKSB7XG4gIHZhciBwcm9wcyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbiA9IHByb3BzLmxlbmd0aDtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBvdXQgPSB7fTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2lkeF07XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIHZhciBsaXN0ID0gX2hhcyh2YWwsIG91dCkgPyBvdXRbdmFsXSA6IChvdXRbdmFsXSA9IFtdKTtcbiAgICBsaXN0W2xpc3QubGVuZ3RoXSA9IGtleTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIGtleXMgb2YgdGhlIGdpdmVuIG9iamVjdCBhcyB2YWx1ZXMsIGFuZCB0aGVcbiAqIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gb2JqZWN0LCB3aGljaCBhcmUgY29lcmNlZCB0byBzdHJpbmdzLCBhcyBrZXlzLiBOb3RlXG4gKiB0aGF0IHRoZSBsYXN0IGtleSBmb3VuZCBpcyBwcmVmZXJyZWQgd2hlbiBoYW5kbGluZyB0aGUgc2FtZSB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge3M6IHh9IC0+IHt4OiBzfVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGludmVydFxuICogQHJldHVybiB7T2JqZWN0fSBvdXQgQSBuZXcgb2JqZWN0XG4gKiBAc2VlIFIuaW52ZXJ0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHJhY2VSZXN1bHRzID0ge1xuICogICAgICAgIGZpcnN0OiAnYWxpY2UnLFxuICogICAgICAgIHNlY29uZDogJ2pha2UnXG4gKiAgICAgIH07XG4gKiAgICAgIFIuaW52ZXJ0T2JqKHJhY2VSZXN1bHRzKTtcbiAqICAgICAgLy89PiB7ICdhbGljZSc6ICdmaXJzdCcsICdqYWtlJzonc2Vjb25kJyB9XG4gKlxuICogICAgICAvLyBBbHRlcm5hdGl2ZWx5OlxuICogICAgICB2YXIgcmFjZVJlc3VsdHMgPSBbJ2FsaWNlJywgJ2pha2UnXTtcbiAqICAgICAgUi5pbnZlcnRPYmoocmFjZVJlc3VsdHMpO1xuICogICAgICAvLz0+IHsgJ2FsaWNlJzogJzAnLCAnamFrZSc6JzEnIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGludmVydE9iaihvYmopIHtcbiAgdmFyIHByb3BzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIG91dCA9IHt9O1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaWR4XTtcbiAgICBvdXRbb2JqW2tleV1dID0ga2V5O1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBvdXQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0Z1bmN0aW9uJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuXG4vKipcbiAqIFR1cm5zIGEgbmFtZWQgbWV0aG9kIHdpdGggYSBzcGVjaWZpZWQgYXJpdHkgaW50byBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlXG4gKiBjYWxsZWQgZGlyZWN0bHkgc3VwcGxpZWQgd2l0aCBhcmd1bWVudHMgYW5kIGEgdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgY3VycmllZCBhbmQgYWNjZXB0cyBgYXJpdHkgKyAxYCBwYXJhbWV0ZXJzIHdoZXJlXG4gKiB0aGUgZmluYWwgcGFyYW1ldGVyIGlzIHRoZSB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gKGEgLT4gYiAtPiAuLi4gLT4gbiAtPiBPYmplY3QgLT4gKilcbiAqIEBwYXJhbSB7TnVtYmVyfSBhcml0eSBOdW1iZXIgb2YgYXJndW1lbnRzIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBzaG91bGQgdGFrZVxuICogICAgICAgIGJlZm9yZSB0aGUgdGFyZ2V0IG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgTmFtZSBvZiB0aGUgbWV0aG9kIHRvIGNhbGwuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgY3VycmllZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5jb25zdHJ1Y3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgc2xpY2VGcm9tID0gUi5pbnZva2VyKDEsICdzbGljZScpO1xuICogICAgICBzbGljZUZyb20oNiwgJ2FiY2RlZmdoaWprbG0nKTsgLy89PiAnZ2hpamtsbSdcbiAqICAgICAgdmFyIHNsaWNlRnJvbTYgPSBSLmludm9rZXIoMiwgJ3NsaWNlJykoNik7XG4gKiAgICAgIHNsaWNlRnJvbTYoOCwgJ2FiY2RlZmdoaWprbG0nKTsgLy89PiAnZ2gnXG4gKiBAc3ltYiBSLmludm9rZXIoMCwgJ21ldGhvZCcpKG8pID0gb1snbWV0aG9kJ10oKVxuICogQHN5bWIgUi5pbnZva2VyKDEsICdtZXRob2QnKShhLCBvKSA9IG9bJ21ldGhvZCddKGEpXG4gKiBAc3ltYiBSLmludm9rZXIoMiwgJ21ldGhvZCcpKGEsIGIsIG8pID0gb1snbWV0aG9kJ10oYSwgYilcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGludm9rZXIoYXJpdHksIG1ldGhvZCkge1xuICByZXR1cm4gY3VycnlOKGFyaXR5ICsgMSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRhcmdldCA9IGFyZ3VtZW50c1thcml0eV07XG4gICAgaWYgKHRhcmdldCAhPSBudWxsICYmIF9pc0Z1bmN0aW9uKHRhcmdldFttZXRob2RdKSkge1xuICAgICAgcmV0dXJuIHRhcmdldFttZXRob2RdLmFwcGx5KHRhcmdldCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCBhcml0eSkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRvU3RyaW5nKHRhcmdldCkgKyAnIGRvZXMgbm90IGhhdmUgYSBtZXRob2QgbmFtZWQgXCInICsgbWV0aG9kICsgJ1wiJyk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogU2VlIGlmIGFuIG9iamVjdCAoYHZhbGApIGlzIGFuIGluc3RhbmNlIG9mIHRoZSBzdXBwbGllZCBjb25zdHJ1Y3Rvci4gVGhpc1xuICogZnVuY3Rpb24gd2lsbCBjaGVjayB1cCB0aGUgaW5oZXJpdGFuY2UgY2hhaW4sIGlmIGFueS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnICgqIC0+IHsqfSkgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gY3RvciBBIGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmlzKE9iamVjdCwge30pOyAvLz0+IHRydWVcbiAqICAgICAgUi5pcyhOdW1iZXIsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5pcyhPYmplY3QsIDEpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXMoU3RyaW5nLCAncycpOyAvLz0+IHRydWVcbiAqICAgICAgUi5pcyhTdHJpbmcsIG5ldyBTdHJpbmcoJycpKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuaXMoT2JqZWN0LCBuZXcgU3RyaW5nKCcnKSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzKE9iamVjdCwgJ3MnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlzKE51bWJlciwge30pOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBpcyhDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gQ3RvciB8fCB2YWwgaW5zdGFuY2VvZiBDdG9yO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGVtcHR5ID0gcmVxdWlyZSgnLi9lbXB0eScpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgaXRzIHR5cGUncyBlbXB0eSB2YWx1ZTsgYGZhbHNlYFxuICogb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmVtcHR5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pc0VtcHR5KFsxLCAyLCAzXSk7ICAgLy89PiBmYWxzZVxuICogICAgICBSLmlzRW1wdHkoW10pOyAgICAgICAgICAvLz0+IHRydWVcbiAqICAgICAgUi5pc0VtcHR5KCcnKTsgICAgICAgICAgLy89PiB0cnVlXG4gKiAgICAgIFIuaXNFbXB0eShudWxsKTsgICAgICAgIC8vPT4gZmFsc2VcbiAqICAgICAgUi5pc0VtcHR5KHt9KTsgICAgICAgICAgLy89PiB0cnVlXG4gKiAgICAgIFIuaXNFbXB0eSh7bGVuZ3RoOiAwfSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGlzRW1wdHkoeCkge1xuICByZXR1cm4geCAhPSBudWxsICYmIGVxdWFscyh4LCBlbXB0eSh4KSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB4YCBpcyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaXNOaWwobnVsbCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzTmlsKHVuZGVmaW5lZCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzTmlsKDApOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNOaWwoW10pOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBpc05pbCh4KSB7IHJldHVybiB4ID09IG51bGw7IH0pO1xuIiwidmFyIGludm9rZXIgPSByZXF1aXJlKCcuL2ludm9rZXInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgbWFkZSBieSBpbnNlcnRpbmcgdGhlIGBzZXBhcmF0b3JgIGJldHdlZW4gZWFjaCBlbGVtZW50IGFuZFxuICogY29uY2F0ZW5hdGluZyBhbGwgdGhlIGVsZW1lbnRzIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgU3RyaW5nIC0+IFthXSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gc2VwYXJhdG9yIFRoZSBzdHJpbmcgdXNlZCB0byBzZXBhcmF0ZSB0aGUgZWxlbWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSB4cyBUaGUgZWxlbWVudHMgdG8gam9pbiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyBtYWRlIGJ5IGNvbmNhdGVuYXRpbmcgYHhzYCB3aXRoIGBzZXBhcmF0b3JgLlxuICogQHNlZSBSLnNwbGl0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHNwYWNlciA9IFIuam9pbignICcpO1xuICogICAgICBzcGFjZXIoWydhJywgMiwgMy40XSk7ICAgLy89PiAnYSAyIDMuNCdcbiAqICAgICAgUi5qb2luKCd8JywgWzEsIDIsIDNdKTsgICAgLy89PiAnMXwyfDMnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gaW52b2tlcigxLCAnam9pbicpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjb252ZXJnZSA9IHJlcXVpcmUoJy4vY29udmVyZ2UnKTtcblxuXG4vKipcbiAqIGp1eHQgYXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIFsoYSwgYiwgLi4uLCBtKSAtPiBuXSAtPiAoKGEsIGIsIC4uLiwgbSkgLT4gW25dKVxuICogQHBhcmFtIHtBcnJheX0gZm5zIEFuIGFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbGlzdCBvZiB2YWx1ZXMgYWZ0ZXIgYXBwbHlpbmcgZWFjaCBvZiB0aGUgb3JpZ2luYWwgYGZuc2AgdG8gaXRzIHBhcmFtZXRlcnMuXG4gKiBAc2VlIFIuYXBwbHlTcGVjXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdldFJhbmdlID0gUi5qdXh0KFtNYXRoLm1pbiwgTWF0aC5tYXhdKTtcbiAqICAgICAgZ2V0UmFuZ2UoMywgNCwgOSwgLTMpOyAvLz0+IFstMywgOV1cbiAqIEBzeW1iIFIuanV4dChbZiwgZywgaF0pKGEsIGIpID0gW2YoYSwgYiksIGcoYSwgYiksIGgoYSwgYildXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBqdXh0KGZucykge1xuICByZXR1cm4gY29udmVyZ2UoZnVuY3Rpb24oKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApOyB9LCBmbnMpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcbnZhciBfaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0FyZ3VtZW50cycpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3QgY29udGFpbmluZyB0aGUgbmFtZXMgb2YgYWxsIHRoZSBlbnVtZXJhYmxlIG93biBwcm9wZXJ0aWVzIG9mXG4gKiB0aGUgc3VwcGxpZWQgb2JqZWN0LlxuICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnRcbiAqIGFjcm9zcyBkaWZmZXJlbnQgSlMgcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7azogdn0gLT4gW2tdXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gZXh0cmFjdCBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiB0aGUgb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gKiBAc2VlIFIua2V5c0luLCBSLnZhbHVlc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIua2V5cyh7YTogMSwgYjogMiwgYzogM30pOyAvLz0+IFsnYScsICdiJywgJ2MnXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgLy8gY292ZXIgSUUgPCA5IGtleXMgaXNzdWVzXG4gIHZhciBoYXNFbnVtQnVnID0gISh7dG9TdHJpbmc6IG51bGx9KS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKTtcbiAgdmFyIG5vbkVudW1lcmFibGVQcm9wcyA9IFsnY29uc3RydWN0b3InLCAndmFsdWVPZicsICdpc1Byb3RvdHlwZU9mJywgJ3RvU3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLCAnaGFzT3duUHJvcGVydHknLCAndG9Mb2NhbGVTdHJpbmcnXTtcbiAgLy8gU2FmYXJpIGJ1Z1xuICB2YXIgaGFzQXJnc0VudW1CdWcgPSAoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiBhcmd1bWVudHMucHJvcGVydHlJc0VudW1lcmFibGUoJ2xlbmd0aCcpO1xuICB9KCkpO1xuXG4gIHZhciBjb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGxpc3QsIGl0ZW0pIHtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgIGlmIChsaXN0W2lkeF0gPT09IGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgIWhhc0FyZ3NFbnVtQnVnID9cbiAgICBfY3VycnkxKGZ1bmN0aW9uIGtleXMob2JqKSB7XG4gICAgICByZXR1cm4gT2JqZWN0KG9iaikgIT09IG9iaiA/IFtdIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICB9KSA6XG4gICAgX2N1cnJ5MShmdW5jdGlvbiBrZXlzKG9iaikge1xuICAgICAgaWYgKE9iamVjdChvYmopICE9PSBvYmopIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgdmFyIHByb3AsIG5JZHg7XG4gICAgICB2YXIga3MgPSBbXTtcbiAgICAgIHZhciBjaGVja0FyZ3NMZW5ndGggPSBoYXNBcmdzRW51bUJ1ZyAmJiBfaXNBcmd1bWVudHMob2JqKTtcbiAgICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKF9oYXMocHJvcCwgb2JqKSAmJiAoIWNoZWNrQXJnc0xlbmd0aCB8fCBwcm9wICE9PSAnbGVuZ3RoJykpIHtcbiAgICAgICAgICBrc1trcy5sZW5ndGhdID0gcHJvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGhhc0VudW1CdWcpIHtcbiAgICAgICAgbklkeCA9IG5vbkVudW1lcmFibGVQcm9wcy5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAobklkeCA+PSAwKSB7XG4gICAgICAgICAgcHJvcCA9IG5vbkVudW1lcmFibGVQcm9wc1tuSWR4XTtcbiAgICAgICAgICBpZiAoX2hhcyhwcm9wLCBvYmopICYmICFjb250YWlucyhrcywgcHJvcCkpIHtcbiAgICAgICAgICAgIGtzW2tzLmxlbmd0aF0gPSBwcm9wO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuSWR4IC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBrcztcbiAgICB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3QgY29udGFpbmluZyB0aGUgbmFtZXMgb2YgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdXBwbGllZFxuICogb2JqZWN0LCBpbmNsdWRpbmcgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBOb3RlIHRoYXQgdGhlIG9yZGVyIG9mIHRoZSBvdXRwdXQgYXJyYXkgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgY29uc2lzdGVudFxuICogYWNyb3NzIGRpZmZlcmVudCBKUyBwbGF0Zm9ybXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMi4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiB2fSAtPiBba11cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIHRoZSBvYmplY3QncyBvd24gYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICogQHNlZSBSLmtleXMsIFIudmFsdWVzSW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgRiA9IGZ1bmN0aW9uKCkgeyB0aGlzLnggPSAnWCc7IH07XG4gKiAgICAgIEYucHJvdG90eXBlLnkgPSAnWSc7XG4gKiAgICAgIHZhciBmID0gbmV3IEYoKTtcbiAqICAgICAgUi5rZXlzSW4oZik7IC8vPT4gWyd4JywgJ3knXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24ga2V5c0luKG9iaikge1xuICB2YXIgcHJvcDtcbiAgdmFyIGtzID0gW107XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICBrc1trcy5sZW5ndGhdID0gcHJvcDtcbiAgfVxuICByZXR1cm4ga3M7XG59KTtcbiIsInZhciBudGggPSByZXF1aXJlKCcuL250aCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjRcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5pbml0LCBSLmhlYWQsIFIudGFpbFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubGFzdChbJ2ZpJywgJ2ZvJywgJ2Z1bSddKTsgLy89PiAnZnVtJ1xuICogICAgICBSLmxhc3QoW10pOyAvLz0+IHVuZGVmaW5lZFxuICpcbiAqICAgICAgUi5sYXN0KCdhYmMnKTsgLy89PiAnYydcbiAqICAgICAgUi5sYXN0KCcnKTsgLy89PiAnJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IG50aCgtMSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksIG9yIC0xIGlmXG4gKiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LiBbYFIuZXF1YWxzYF0oI2VxdWFscykgaXMgdXNlZCB0b1xuICogZGV0ZXJtaW5lIGVxdWFsaXR5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgYSAtPiBbYV0gLT4gTnVtYmVyXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgaXRlbSB0byBmaW5kLlxuICogQHBhcmFtIHtBcnJheX0geHMgVGhlIGFycmF5IHRvIHNlYXJjaCBpbi5cbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIGluZGV4IG9mIHRoZSB0YXJnZXQsIG9yIC0xIGlmIHRoZSB0YXJnZXQgaXMgbm90IGZvdW5kLlxuICogQHNlZSBSLmluZGV4T2ZcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmxhc3RJbmRleE9mKDMsIFstMSwzLDMsMCwxLDIsMyw0XSk7IC8vPT4gNlxuICogICAgICBSLmxhc3RJbmRleE9mKDEwLCBbMSwyLDMsNF0pOyAvLz0+IC0xXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBsYXN0SW5kZXhPZih0YXJnZXQsIHhzKSB7XG4gIGlmICh0eXBlb2YgeHMubGFzdEluZGV4T2YgPT09ICdmdW5jdGlvbicgJiYgIV9pc0FycmF5KHhzKSkge1xuICAgIHJldHVybiB4cy5sYXN0SW5kZXhPZih0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHZhciBpZHggPSB4cy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChpZHggPj0gMCkge1xuICAgICAgaWYgKGVxdWFscyh4c1tpZHhdLCB0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBpZHg7XG4gICAgICB9XG4gICAgICBpZHggLT0gMTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2lzTnVtYmVyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNOdW1iZXInKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXkgYnkgcmV0dXJuaW5nIGBsaXN0Lmxlbmd0aGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmxlbmd0aChbXSk7IC8vPT4gMFxuICogICAgICBSLmxlbmd0aChbMSwgMiwgM10pOyAvLz0+IDNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGxlbmd0aChsaXN0KSB7XG4gIHJldHVybiBsaXN0ICE9IG51bGwgJiYgX2lzTnVtYmVyKGxpc3QubGVuZ3RoKSA/IGxpc3QubGVuZ3RoIDogTmFOO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGVucyBmb3IgdGhlIGdpdmVuIGdldHRlciBhbmQgc2V0dGVyIGZ1bmN0aW9ucy4gVGhlIGdldHRlciBcImdldHNcIlxuICogdGhlIHZhbHVlIG9mIHRoZSBmb2N1czsgdGhlIHNldHRlciBcInNldHNcIiB0aGUgdmFsdWUgb2YgdGhlIGZvY3VzLiBUaGUgc2V0dGVyXG4gKiBzaG91bGQgbm90IG11dGF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gTGVucyBzIGEgPSBGdW5jdG9yIGYgPT4gKGEgLT4gZiBhKSAtPiBzIC0+IGYgc1xuICogQHNpZyAocyAtPiBhKSAtPiAoKGEsIHMpIC0+IHMpIC0+IExlbnMgcyBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXR0ZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlclxuICogQHJldHVybiB7TGVuc31cbiAqIEBzZWUgUi52aWV3LCBSLnNldCwgUi5vdmVyLCBSLmxlbnNJbmRleCwgUi5sZW5zUHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB4TGVucyA9IFIubGVucyhSLnByb3AoJ3gnKSwgUi5hc3NvYygneCcpKTtcbiAqXG4gKiAgICAgIFIudmlldyh4TGVucywge3g6IDEsIHk6IDJ9KTsgICAgICAgICAgICAvLz0+IDFcbiAqICAgICAgUi5zZXQoeExlbnMsIDQsIHt4OiAxLCB5OiAyfSk7ICAgICAgICAgIC8vPT4ge3g6IDQsIHk6IDJ9XG4gKiAgICAgIFIub3Zlcih4TGVucywgUi5uZWdhdGUsIHt4OiAxLCB5OiAyfSk7ICAvLz0+IHt4OiAtMSwgeTogMn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGxlbnMoZ2V0dGVyLCBzZXR0ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRvRnVuY3RvckZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgcmV0dXJuIG1hcChcbiAgICAgICAgZnVuY3Rpb24oZm9jdXMpIHtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyKGZvY3VzLCB0YXJnZXQpO1xuICAgICAgICB9LFxuICAgICAgICB0b0Z1bmN0b3JGbihnZXR0ZXIodGFyZ2V0KSlcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBsZW5zID0gcmVxdWlyZSgnLi9sZW5zJyk7XG52YXIgbnRoID0gcmVxdWlyZSgnLi9udGgnKTtcbnZhciB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxlbnMgd2hvc2UgZm9jdXMgaXMgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gTGVucyBzIGEgPSBGdW5jdG9yIGYgPT4gKGEgLT4gZiBhKSAtPiBzIC0+IGYgc1xuICogQHNpZyBOdW1iZXIgLT4gTGVucyBzIGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtMZW5zfVxuICogQHNlZSBSLnZpZXcsIFIuc2V0LCBSLm92ZXJcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaGVhZExlbnMgPSBSLmxlbnNJbmRleCgwKTtcbiAqXG4gKiAgICAgIFIudmlldyhoZWFkTGVucywgWydhJywgJ2InLCAnYyddKTsgICAgICAgICAgICAvLz0+ICdhJ1xuICogICAgICBSLnNldChoZWFkTGVucywgJ3gnLCBbJ2EnLCAnYicsICdjJ10pOyAgICAgICAgLy89PiBbJ3gnLCAnYicsICdjJ11cbiAqICAgICAgUi5vdmVyKGhlYWRMZW5zLCBSLnRvVXBwZXIsIFsnYScsICdiJywgJ2MnXSk7IC8vPT4gWydBJywgJ2InLCAnYyddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBsZW5zSW5kZXgobikge1xuICByZXR1cm4gbGVucyhudGgobiksIHVwZGF0ZShuKSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgYXNzb2NQYXRoID0gcmVxdWlyZSgnLi9hc3NvY1BhdGgnKTtcbnZhciBsZW5zID0gcmVxdWlyZSgnLi9sZW5zJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxlbnMgd2hvc2UgZm9jdXMgaXMgdGhlIHNwZWNpZmllZCBwYXRoLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBJZHggPSBTdHJpbmcgfCBJbnRcbiAqIEB0eXBlZGVmbiBMZW5zIHMgYSA9IEZ1bmN0b3IgZiA9PiAoYSAtPiBmIGEpIC0+IHMgLT4gZiBzXG4gKiBAc2lnIFtJZHhdIC0+IExlbnMgcyBhXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIHRvIHVzZS5cbiAqIEByZXR1cm4ge0xlbnN9XG4gKiBAc2VlIFIudmlldywgUi5zZXQsIFIub3ZlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB4SGVhZFlMZW5zID0gUi5sZW5zUGF0aChbJ3gnLCAwLCAneSddKTtcbiAqXG4gKiAgICAgIFIudmlldyh4SGVhZFlMZW5zLCB7eDogW3t5OiAyLCB6OiAzfSwge3k6IDQsIHo6IDV9XX0pO1xuICogICAgICAvLz0+IDJcbiAqICAgICAgUi5zZXQoeEhlYWRZTGVucywgMSwge3g6IFt7eTogMiwgejogM30sIHt5OiA0LCB6OiA1fV19KTtcbiAqICAgICAgLy89PiB7eDogW3t5OiAxLCB6OiAzfSwge3k6IDQsIHo6IDV9XX1cbiAqICAgICAgUi5vdmVyKHhIZWFkWUxlbnMsIFIubmVnYXRlLCB7eDogW3t5OiAyLCB6OiAzfSwge3k6IDQsIHo6IDV9XX0pO1xuICogICAgICAvLz0+IHt4OiBbe3k6IC0yLCB6OiAzfSwge3k6IDQsIHo6IDV9XX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGxlbnNQYXRoKHApIHtcbiAgcmV0dXJuIGxlbnMocGF0aChwKSwgYXNzb2NQYXRoKHApKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBhc3NvYyA9IHJlcXVpcmUoJy4vYXNzb2MnKTtcbnZhciBsZW5zID0gcmVxdWlyZSgnLi9sZW5zJyk7XG52YXIgcHJvcCA9IHJlcXVpcmUoJy4vcHJvcCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxlbnMgd2hvc2UgZm9jdXMgaXMgdGhlIHNwZWNpZmllZCBwcm9wZXJ0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gTGVucyBzIGEgPSBGdW5jdG9yIGYgPT4gKGEgLT4gZiBhKSAtPiBzIC0+IGYgc1xuICogQHNpZyBTdHJpbmcgLT4gTGVucyBzIGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBrXG4gKiBAcmV0dXJuIHtMZW5zfVxuICogQHNlZSBSLnZpZXcsIFIuc2V0LCBSLm92ZXJcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgeExlbnMgPSBSLmxlbnNQcm9wKCd4Jyk7XG4gKlxuICogICAgICBSLnZpZXcoeExlbnMsIHt4OiAxLCB5OiAyfSk7ICAgICAgICAgICAgLy89PiAxXG4gKiAgICAgIFIuc2V0KHhMZW5zLCA0LCB7eDogMSwgeTogMn0pOyAgICAgICAgICAvLz0+IHt4OiA0LCB5OiAyfVxuICogICAgICBSLm92ZXIoeExlbnMsIFIubmVnYXRlLCB7eDogMSwgeTogMn0pOyAgLy89PiB7eDogLTEsIHk6IDJ9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBsZW5zUHJvcChrKSB7XG4gIHJldHVybiBsZW5zKHByb3AoayksIGFzc29jKGspKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBsaWZ0TiA9IHJlcXVpcmUoJy4vbGlmdE4nKTtcblxuXG4vKipcbiAqIFwibGlmdHNcIiBhIGZ1bmN0aW9uIG9mIGFyaXR5ID4gMSBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgYSBsaXN0LCBGdW5jdGlvbiBvciBvdGhlclxuICogb2JqZWN0IHRoYXQgc2F0aXNmaWVzIHRoZSBbRmFudGFzeUxhbmQgQXBwbHkgc3BlY10oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBseSkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gKikgLT4gKFsqXS4uLiAtPiBbKl0pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbGlmdCBpbnRvIGhpZ2hlciBjb250ZXh0XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGxpZnRlZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5saWZ0TlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYWRkMyA9IFIubGlmdCgoYSwgYiwgYykgPT4gYSArIGIgKyBjKTtcbiAqXG4gKiAgICAgIG1hZGQzKFsxLDIsM10sIFsxLDIsM10sIFsxXSk7IC8vPT4gWzMsIDQsIDUsIDQsIDUsIDYsIDUsIDYsIDddXG4gKlxuICogICAgICB2YXIgbWFkZDUgPSBSLmxpZnQoKGEsIGIsIGMsIGQsIGUpID0+IGEgKyBiICsgYyArIGQgKyBlKTtcbiAqXG4gKiAgICAgIG1hZGQ1KFsxLDJdLCBbM10sIFs0LCA1XSwgWzZdLCBbNywgOF0pOyAvLz0+IFsyMSwgMjIsIDIyLCAyMywgMjIsIDIzLCAyMywgMjRdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBsaWZ0KGZuKSB7XG4gIHJldHVybiBsaWZ0Tihmbi5sZW5ndGgsIGZuKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgYXAgPSByZXF1aXJlKCcuL2FwJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG5cbi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gdG8gYmUgdGhlIHNwZWNpZmllZCBhcml0eSwgc28gdGhhdCBpdCBtYXkgXCJtYXAgb3ZlclwiIHRoYXRcbiAqIG1hbnkgbGlzdHMsIEZ1bmN0aW9ucyBvciBvdGhlciBvYmplY3RzIHRoYXQgc2F0aXNmeSB0aGUgW0ZhbnRhc3lMYW5kIEFwcGx5IHNwZWNdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjYXBwbHkpLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjcuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiAoKi4uLiAtPiAqKSAtPiAoWypdLi4uIC0+IFsqXSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBsaWZ0IGludG8gaGlnaGVyIGNvbnRleHRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgbGlmdGVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmxpZnQsIFIuYXBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbWFkZDMgPSBSLmxpZnROKDMsICguLi5hcmdzKSA9PiBSLnN1bShhcmdzKSk7XG4gKiAgICAgIG1hZGQzKFsxLDIsM10sIFsxLDIsM10sIFsxXSk7IC8vPT4gWzMsIDQsIDUsIDQsIDUsIDYsIDUsIDYsIDddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBsaWZ0Tihhcml0eSwgZm4pIHtcbiAgdmFyIGxpZnRlZCA9IGN1cnJ5Tihhcml0eSwgZm4pO1xuICByZXR1cm4gY3VycnlOKGFyaXR5LCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3JlZHVjZShhcCwgbWFwKGxpZnRlZCwgYXJndW1lbnRzWzBdKSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGxlc3MgdGhhbiB0aGUgc2Vjb25kOyBgZmFsc2VgXG4gKiBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmd0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5sdCgyLCAxKTsgLy89PiBmYWxzZVxuICogICAgICBSLmx0KDIsIDIpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIubHQoMiwgMyk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmx0KCdhJywgJ3onKTsgLy89PiB0cnVlXG4gKiAgICAgIFIubHQoJ3onLCAnYScpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBsdChhLCBiKSB7IHJldHVybiBhIDwgYjsgfSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgc2Vjb25kO1xuICogYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBhXG4gKiBAcGFyYW0ge051bWJlcn0gYlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5ndGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmx0ZSgyLCAxKTsgLy89PiBmYWxzZVxuICogICAgICBSLmx0ZSgyLCAyKTsgLy89PiB0cnVlXG4gKiAgICAgIFIubHRlKDIsIDMpOyAvLz0+IHRydWVcbiAqICAgICAgUi5sdGUoJ2EnLCAneicpOyAvLz0+IHRydWVcbiAqICAgICAgUi5sdGUoJ3onLCAnYScpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBsdGUoYSwgYikgeyByZXR1cm4gYSA8PSBiOyB9KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9tYXAgPSByZXF1aXJlKCcuL2ludGVybmFsL19tYXAnKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgX3htYXAgPSByZXF1aXJlKCcuL2ludGVybmFsL194bWFwJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIGZ1bmN0aW9uIGFuZFxuICogYSBbZnVuY3Rvcl0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNmdW5jdG9yKSxcbiAqIGFwcGxpZXMgdGhlIGZ1bmN0aW9uIHRvIGVhY2ggb2YgdGhlIGZ1bmN0b3IncyB2YWx1ZXMsIGFuZCByZXR1cm5zXG4gKiBhIGZ1bmN0b3Igb2YgdGhlIHNhbWUgc2hhcGUuXG4gKlxuICogUmFtZGEgcHJvdmlkZXMgc3VpdGFibGUgYG1hcGAgaW1wbGVtZW50YXRpb25zIGZvciBgQXJyYXlgIGFuZCBgT2JqZWN0YCxcbiAqIHNvIHRoaXMgZnVuY3Rpb24gbWF5IGJlIGFwcGxpZWQgdG8gYFsxLCAyLCAzXWAgb3IgYHt4OiAxLCB5OiAyLCB6OiAzfWAuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYG1hcGAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEFsc28gdHJlYXRzIGZ1bmN0aW9ucyBhcyBmdW5jdG9ycyBhbmQgd2lsbCBjb21wb3NlIHRoZW0gdG9nZXRoZXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBGdW5jdG9yIGYgPT4gKGEgLT4gYikgLT4gZiBhIC0+IGYgYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBlbGVtZW50IG9mIHRoZSBpbnB1dCBgbGlzdGAuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGJlIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIG5ldyBsaXN0LlxuICogQHNlZSBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkb3VibGUgPSB4ID0+IHggKiAyO1xuICpcbiAqICAgICAgUi5tYXAoZG91YmxlLCBbMSwgMiwgM10pOyAvLz0+IFsyLCA0LCA2XVxuICpcbiAqICAgICAgUi5tYXAoZG91YmxlLCB7eDogMSwgeTogMiwgejogM30pOyAvLz0+IHt4OiAyLCB5OiA0LCB6OiA2fVxuICogQHN5bWIgUi5tYXAoZiwgW2EsIGJdKSA9IFtmKGEpLCBmKGIpXVxuICogQHN5bWIgUi5tYXAoZiwgeyB4OiBhLCB5OiBiIH0pID0geyB4OiBmKGEpLCB5OiBmKGIpIH1cbiAqIEBzeW1iIFIubWFwKGYsIGZ1bmN0b3JfbykgPSBmdW5jdG9yX28ubWFwKGYpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnZmFudGFzeS1sYW5kL21hcCcsICdtYXAnXSwgX3htYXAsIGZ1bmN0aW9uIG1hcChmbiwgZnVuY3Rvcikge1xuICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jdG9yKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRnVuY3Rpb25dJzpcbiAgICAgIHJldHVybiBjdXJyeU4oZnVuY3Rvci5sZW5ndGgsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBmdW5jdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfSk7XG4gICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgIHJldHVybiBfcmVkdWNlKGZ1bmN0aW9uKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gZm4oZnVuY3RvcltrZXldKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9LCBrZXlzKGZ1bmN0b3IpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIF9tYXAoZm4sIGZ1bmN0b3IpO1xuICB9XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogVGhlIGBtYXBBY2N1bWAgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIGEgY29tYmluYXRpb24gb2YgbWFwIGFuZCByZWR1Y2U7IGl0XG4gKiBhcHBsaWVzIGEgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIGEgbGlzdCwgcGFzc2luZyBhbiBhY2N1bXVsYXRpbmdcbiAqIHBhcmFtZXRlciBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByZXR1cm5pbmcgYSBmaW5hbCB2YWx1ZSBvZiB0aGlzXG4gKiBhY2N1bXVsYXRvciB0b2dldGhlciB3aXRoIHRoZSBuZXcgbGlzdC5cbiAqXG4gKiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gcmVjZWl2ZXMgdHdvIGFyZ3VtZW50cywgKmFjYyogYW5kICp2YWx1ZSosIGFuZCBzaG91bGRcbiAqIHJldHVybiBhIHR1cGxlICpbYWNjLCB2YWx1ZV0qLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhY2MgLT4geCAtPiAoYWNjLCB5KSkgLT4gYWNjIC0+IFt4XSAtPiAoYWNjLCBbeV0pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGlucHV0IGBsaXN0YC5cbiAqIEBwYXJhbSB7Kn0gYWNjIFRoZSBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7Kn0gVGhlIGZpbmFsLCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBzZWUgUi5hZGRJbmRleCwgUi5tYXBBY2N1bVJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRpZ2l0cyA9IFsnMScsICcyJywgJzMnLCAnNCddO1xuICogICAgICB2YXIgYXBwZW5kZXIgPSAoYSwgYikgPT4gW2EgKyBiLCBhICsgYl07XG4gKlxuICogICAgICBSLm1hcEFjY3VtKGFwcGVuZGVyLCAwLCBkaWdpdHMpOyAvLz0+IFsnMDEyMzQnLCBbJzAxJywgJzAxMicsICcwMTIzJywgJzAxMjM0J11dXG4gKiBAc3ltYiBSLm1hcEFjY3VtKGYsIGEsIFtiLCBjLCBkXSkgPSBbXG4gKiAgIGYoZihmKGEsIGIpWzBdLCBjKVswXSwgZClbMF0sXG4gKiAgIFtcbiAqICAgICBmKGEsIGIpWzFdLFxuICogICAgIGYoZihhLCBiKVswXSwgYylbMV0sXG4gKiAgICAgZihmKGYoYSwgYilbMF0sIGMpWzBdLCBkKVsxXVxuICogICBdXG4gKiBdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBtYXBBY2N1bShmbiwgYWNjLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIHR1cGxlID0gW2FjY107XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICB0dXBsZSA9IGZuKHR1cGxlWzBdLCBsaXN0W2lkeF0pO1xuICAgIHJlc3VsdFtpZHhdID0gdHVwbGVbMV07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIFt0dXBsZVswXSwgcmVzdWx0XTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFRoZSBgbWFwQWNjdW1SaWdodGAgZnVuY3Rpb24gYmVoYXZlcyBsaWtlIGEgY29tYmluYXRpb24gb2YgbWFwIGFuZCByZWR1Y2U7IGl0XG4gKiBhcHBsaWVzIGEgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIGEgbGlzdCwgcGFzc2luZyBhbiBhY2N1bXVsYXRpbmdcbiAqIHBhcmFtZXRlciBmcm9tIHJpZ2h0IHRvIGxlZnQsIGFuZCByZXR1cm5pbmcgYSBmaW5hbCB2YWx1ZSBvZiB0aGlzXG4gKiBhY2N1bXVsYXRvciB0b2dldGhlciB3aXRoIHRoZSBuZXcgbGlzdC5cbiAqXG4gKiBTaW1pbGFyIHRvIFtgbWFwQWNjdW1gXSgjbWFwQWNjdW0pLCBleGNlcHQgbW92ZXMgdGhyb3VnaCB0aGUgaW5wdXQgbGlzdCBmcm9tXG4gKiB0aGUgcmlnaHQgdG8gdGhlIGxlZnQuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byBhcmd1bWVudHMsICp2YWx1ZSogYW5kICphY2MqLCBhbmQgc2hvdWxkXG4gKiByZXR1cm4gYSB0dXBsZSAqW3ZhbHVlLCBhY2NdKi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoeC0+IGFjYyAtPiAoeSwgYWNjKSkgLT4gYWNjIC0+IFt4XSAtPiAoW3ldLCBhY2MpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGlucHV0IGBsaXN0YC5cbiAqIEBwYXJhbSB7Kn0gYWNjIFRoZSBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7Kn0gVGhlIGZpbmFsLCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBzZWUgUi5hZGRJbmRleCwgUi5tYXBBY2N1bVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkaWdpdHMgPSBbJzEnLCAnMicsICczJywgJzQnXTtcbiAqICAgICAgdmFyIGFwcGVuZCA9IChhLCBiKSA9PiBbYSArIGIsIGEgKyBiXTtcbiAqXG4gKiAgICAgIFIubWFwQWNjdW1SaWdodChhcHBlbmQsIDUsIGRpZ2l0cyk7IC8vPT4gW1snMTIzNDUnLCAnMjM0NScsICczNDUnLCAnNDUnXSwgJzEyMzQ1J11cbiAqIEBzeW1iIFIubWFwQWNjdW1SaWdodChmLCBhLCBbYiwgYywgZF0pID0gW1xuICogICBbXG4gKiAgICAgZihiLCBmKGMsIGYoZCwgYSlbMF0pWzBdKVsxXSxcbiAqICAgICBmKGMsIGYoZCwgYSlbMF0pWzFdLFxuICogICAgIGYoZCwgYSlbMV0sXG4gKiAgIF1cbiAqICAgZihiLCBmKGMsIGYoZCwgYSlbMF0pWzBdKVswXSxcbiAqIF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIG1hcEFjY3VtUmlnaHQoZm4sIGFjYywgbGlzdCkge1xuICB2YXIgaWR4ID0gbGlzdC5sZW5ndGggLSAxO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciB0dXBsZSA9IFthY2NdO1xuICB3aGlsZSAoaWR4ID49IDApIHtcbiAgICB0dXBsZSA9IGZuKGxpc3RbaWR4XSwgdHVwbGVbMF0pO1xuICAgIHJlc3VsdFtpZHhdID0gdHVwbGVbMV07XG4gICAgaWR4IC09IDE7XG4gIH1cbiAgcmV0dXJuIFtyZXN1bHQsIHR1cGxlWzBdXTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG5cbi8qKlxuICogQW4gT2JqZWN0LXNwZWNpZmljIHZlcnNpb24gb2YgW2BtYXBgXSgjbWFwKS4gVGhlIGZ1bmN0aW9uIGlzIGFwcGxpZWQgdG8gdGhyZWVcbiAqIGFyZ3VtZW50czogKih2YWx1ZSwga2V5LCBvYmopKi4gSWYgb25seSB0aGUgdmFsdWUgaXMgc2lnbmlmaWNhbnQsIHVzZVxuICogW2BtYXBgXSgjbWFwKSBpbnN0ZWFkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoKCosIFN0cmluZywgT2JqZWN0KSAtPiAqKSAtPiBPYmplY3QgLT4gT2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1hcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB2YWx1ZXMgPSB7IHg6IDEsIHk6IDIsIHo6IDMgfTtcbiAqICAgICAgdmFyIHByZXBlbmRLZXlBbmREb3VibGUgPSAobnVtLCBrZXksIG9iaikgPT4ga2V5ICsgKG51bSAqIDIpO1xuICpcbiAqICAgICAgUi5tYXBPYmpJbmRleGVkKHByZXBlbmRLZXlBbmREb3VibGUsIHZhbHVlcyk7IC8vPT4geyB4OiAneDInLCB5OiAneTQnLCB6OiAnejYnIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG1hcE9iakluZGV4ZWQoZm4sIG9iaikge1xuICByZXR1cm4gX3JlZHVjZShmdW5jdGlvbihhY2MsIGtleSkge1xuICAgIGFjY1trZXldID0gZm4ob2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSwga2V5cyhvYmopKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFRlc3RzIGEgcmVndWxhciBleHByZXNzaW9uIGFnYWluc3QgYSBTdHJpbmcuIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIHJldHVybiBhbiBlbXB0eSBhcnJheSB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGVzLiBUaGlzIGRpZmZlcnMgZnJvbVxuICogW2BTdHJpbmcucHJvdG90eXBlLm1hdGNoYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL21hdGNoKVxuICogd2hpY2ggcmV0dXJucyBgbnVsbGAgd2hlbiB0aGVyZSBhcmUgbm8gbWF0Y2hlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgUmVnRXhwIC0+IFN0cmluZyAtPiBbU3RyaW5nIHwgVW5kZWZpbmVkXVxuICogQHBhcmFtIHtSZWdFeHB9IHJ4IEEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIG1hdGNoIGFnYWluc3RcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiBtYXRjaGVzIG9yIGVtcHR5IGFycmF5LlxuICogQHNlZSBSLnRlc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm1hdGNoKC8oW2Etel1hKS9nLCAnYmFuYW5hcycpOyAvLz0+IFsnYmEnLCAnbmEnLCAnbmEnXVxuICogICAgICBSLm1hdGNoKC9hLywgJ2InKTsgLy89PiBbXVxuICogICAgICBSLm1hdGNoKC9hLywgbnVsbCk7IC8vPT4gVHlwZUVycm9yOiBudWxsIGRvZXMgbm90IGhhdmUgYSBtZXRob2QgbmFtZWQgXCJtYXRjaFwiXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBtYXRjaChyeCwgc3RyKSB7XG4gIHJldHVybiBzdHIubWF0Y2gocngpIHx8IFtdO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc0ludGVnZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0ludGVnZXInKTtcblxuXG4vKipcbiAqIGBtYXRoTW9kYCBiZWhhdmVzIGxpa2UgdGhlIG1vZHVsbyBvcGVyYXRvciBzaG91bGQgbWF0aGVtYXRpY2FsbHksIHVubGlrZSB0aGVcbiAqIGAlYCBvcGVyYXRvciAoYW5kIGJ5IGV4dGVuc2lvbiwgW2BSLm1vZHVsb2BdKCNtb2R1bG8pKS4gU28gd2hpbGVcbiAqIGAtMTcgJSA1YCBpcyBgLTJgLCBgbWF0aE1vZCgtMTcsIDUpYCBpcyBgM2AuIGBtYXRoTW9kYCByZXF1aXJlcyBJbnRlZ2VyXG4gKiBhcmd1bWVudHMsIGFuZCByZXR1cm5zIE5hTiB3aGVuIHRoZSBtb2R1bHVzIGlzIHplcm8gb3IgbmVnYXRpdmUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IG0gVGhlIGRpdmlkZW5kLlxuICogQHBhcmFtIHtOdW1iZXJ9IHAgdGhlIG1vZHVsdXMuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByZXN1bHQgb2YgYGIgbW9kIGFgLlxuICogQHNlZSBSLm1vZHVsb1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWF0aE1vZCgtMTcsIDUpOyAgLy89PiAzXG4gKiAgICAgIFIubWF0aE1vZCgxNywgNSk7ICAgLy89PiAyXG4gKiAgICAgIFIubWF0aE1vZCgxNywgLTUpOyAgLy89PiBOYU5cbiAqICAgICAgUi5tYXRoTW9kKDE3LCAwKTsgICAvLz0+IE5hTlxuICogICAgICBSLm1hdGhNb2QoMTcuMiwgNSk7IC8vPT4gTmFOXG4gKiAgICAgIFIubWF0aE1vZCgxNywgNS4zKTsgLy89PiBOYU5cbiAqXG4gKiAgICAgIHZhciBjbG9jayA9IFIubWF0aE1vZChSLl9fLCAxMik7XG4gKiAgICAgIGNsb2NrKDE1KTsgLy89PiAzXG4gKiAgICAgIGNsb2NrKDI0KTsgLy89PiAwXG4gKlxuICogICAgICB2YXIgc2V2ZW50ZWVuTW9kID0gUi5tYXRoTW9kKDE3KTtcbiAqICAgICAgc2V2ZW50ZWVuTW9kKDMpOyAgLy89PiAyXG4gKiAgICAgIHNldmVudGVlbk1vZCg0KTsgIC8vPT4gMVxuICogICAgICBzZXZlbnRlZW5Nb2QoMTApOyAvLz0+IDdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG1hdGhNb2QobSwgcCkge1xuICBpZiAoIV9pc0ludGVnZXIobSkpIHsgcmV0dXJuIE5hTjsgfVxuICBpZiAoIV9pc0ludGVnZXIocCkgfHwgcCA8IDEpIHsgcmV0dXJuIE5hTjsgfVxuICByZXR1cm4gKChtICUgcCkgKyBwKSAlIHA7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXIgb2YgaXRzIHR3byBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLm1heEJ5LCBSLm1pblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWF4KDc4OSwgMTIzKTsgLy89PiA3ODlcbiAqICAgICAgUi5tYXgoJ2EnLCAnYicpOyAvLz0+ICdiJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbWF4KGEsIGIpIHsgcmV0dXJuIGIgPiBhID8gYiA6IGE7IH0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYW5kIHR3byB2YWx1ZXMsIGFuZCByZXR1cm5zIHdoaWNoZXZlciB2YWx1ZSBwcm9kdWNlcyB0aGVcbiAqIGxhcmdlciByZXN1bHQgd2hlbiBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBiID0+IChhIC0+IGIpIC0+IGEgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5tYXgsIFIubWluQnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyAgc3F1YXJlIDo6IE51bWJlciAtPiBOdW1iZXJcbiAqICAgICAgdmFyIHNxdWFyZSA9IG4gPT4gbiAqIG47XG4gKlxuICogICAgICBSLm1heEJ5KHNxdWFyZSwgLTMsIDIpOyAvLz0+IC0zXG4gKlxuICogICAgICBSLnJlZHVjZShSLm1heEJ5KHNxdWFyZSksIDAsIFszLCAtNSwgNCwgMSwgLTJdKTsgLy89PiAtNVxuICogICAgICBSLnJlZHVjZShSLm1heEJ5KHNxdWFyZSksIDAsIFtdKTsgLy89PiAwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBtYXhCeShmLCBhLCBiKSB7XG4gIHJldHVybiBmKGIpID4gZihhKSA/IGIgOiBhO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIHN1bSA9IHJlcXVpcmUoJy4vc3VtJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtZWFuIG9mIHRoZSBnaXZlbiBsaXN0IG9mIG51bWJlcnMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAc2VlIFIubWVkaWFuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZWFuKFsyLCA3LCA5XSk7IC8vPT4gNlxuICogICAgICBSLm1lYW4oW10pOyAvLz0+IE5hTlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbWVhbihsaXN0KSB7XG4gIHJldHVybiBzdW0obGlzdCkgLyBsaXN0Lmxlbmd0aDtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBtZWFuID0gcmVxdWlyZSgnLi9tZWFuJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtZWRpYW4gb2YgdGhlIGdpdmVuIGxpc3Qgb2YgbnVtYmVycy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBzZWUgUi5tZWFuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZWRpYW4oWzIsIDksIDddKTsgLy89PiA3XG4gKiAgICAgIFIubWVkaWFuKFs3LCAyLCAxMCwgOV0pOyAvLz0+IDhcbiAqICAgICAgUi5tZWRpYW4oW10pOyAvLz0+IE5hTlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbWVkaWFuKGxpc3QpIHtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgd2lkdGggPSAyIC0gbGVuICUgMjtcbiAgdmFyIGlkeCA9IChsZW4gLSB3aWR0aCkgLyAyO1xuICByZXR1cm4gbWVhbihBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG4gIH0pLnNsaWNlKGlkeCwgaWR4ICsgd2lkdGgpKTtcbn0pO1xuIiwidmFyIG1lbW9pemVXaXRoID0gcmVxdWlyZSgnLi9tZW1vaXplV2l0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB0aGF0LCB3aGVuIGludm9rZWQsIGNhY2hlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYGZuYFxuICogZm9yIGEgZ2l2ZW4gYXJndW1lbnQgc2V0IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlXG4gKiBtZW1vaXplZCBgZm5gIHdpdGggdGhlIHNhbWUgYXJndW1lbnQgc2V0IHdpbGwgbm90IHJlc3VsdCBpbiBhbiBhZGRpdGlvbmFsXG4gKiBjYWxsIHRvIGBmbmA7IGluc3RlYWQsIHRoZSBjYWNoZWQgcmVzdWx0IGZvciB0aGF0IHNldCBvZiBhcmd1bWVudHMgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSkgLT4gKCouLi4gLT4gYSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtZW1vaXplLlxuICogQHJldHVybiB7RnVuY3Rpb259IE1lbW9pemVkIHZlcnNpb24gb2YgYGZuYC5cbiAqIEBzZWUgUi5tZW1vaXplV2l0aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIGxldCBjb3VudCA9IDA7XG4gKiAgICAgIGNvbnN0IGZhY3RvcmlhbCA9IFIubWVtb2l6ZShuID0+IHtcbiAqICAgICAgICBjb3VudCArPSAxO1xuICogICAgICAgIHJldHVybiBSLnByb2R1Y3QoUi5yYW5nZSgxLCBuICsgMSkpO1xuICogICAgICB9KTtcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgY291bnQ7IC8vPT4gMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVXaXRoKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdG9TdHJpbmcoYXJndW1lbnRzKTtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcblxuXG4vKipcbiAqIEEgY3VzdG9taXNhYmxlIHZlcnNpb24gb2YgW2BSLm1lbW9pemVgXSgjbWVtb2l6ZSkuIGBtZW1vaXplV2l0aGAgdGFrZXMgYW5cbiAqIGFkZGl0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYSBnaXZlbiBhcmd1bWVudCBzZXQgYW5kIHVzZWQgdG9cbiAqIGNyZWF0ZSB0aGUgY2FjaGUga2V5IHVuZGVyIHdoaWNoIHRoZSByZXN1bHRzIG9mIHRoZSBmdW5jdGlvbiB0byBiZSBtZW1vaXplZFxuICogd2lsbCBiZSBzdG9yZWQuIENhcmUgbXVzdCBiZSB0YWtlbiB3aGVuIGltcGxlbWVudGluZyBrZXkgZ2VuZXJhdGlvbiB0byBhdm9pZFxuICogY2xhc2hlcyB0aGF0IG1heSBvdmVyd3JpdGUgcHJldmlvdXMgZW50cmllcyBlcnJvbmVvdXNseS5cbiAqXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjQuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqLi4uIC0+IFN0cmluZykgLT4gKCouLi4gLT4gYSkgLT4gKCouLi4gLT4gYSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgY2FjaGUga2V5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemUuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gTWVtb2l6ZWQgdmVyc2lvbiBvZiBgZm5gLlxuICogQHNlZSBSLm1lbW9pemVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBsZXQgY291bnQgPSAwO1xuICogICAgICBjb25zdCBmYWN0b3JpYWwgPSBSLm1lbW9pemVXaXRoKFIuaWRlbnRpdHksIG4gPT4ge1xuICogICAgICAgIGNvdW50ICs9IDE7XG4gKiAgICAgICAgcmV0dXJuIFIucHJvZHVjdChSLnJhbmdlKDEsIG4gKyAxKSk7XG4gKiAgICAgIH0pO1xuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBjb3VudDsgLy89PiAxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBtZW1vaXplV2l0aChtRm4sIGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gX2FyaXR5KGZuLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSA9IG1Gbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICghX2hhcyhrZXksIGNhY2hlKSkge1xuICAgICAgY2FjaGVba2V5XSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZVtrZXldO1xuICB9KTtcbn0pO1xuIiwidmFyIF9hc3NpZ24gPSByZXF1aXJlKCcuL2ludGVybmFsL19hc3NpZ24nKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBmaXJzdCBvYmplY3QgbWVyZ2VkIHdpdGhcbiAqIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgc2Vjb25kIG9iamVjdC4gSWYgYSBrZXkgZXhpc3RzIGluIGJvdGggb2JqZWN0cyxcbiAqIHRoZSB2YWx1ZSBmcm9tIHRoZSBzZWNvbmQgb2JqZWN0IHdpbGwgYmUgdXNlZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2s6IHZ9IC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7T2JqZWN0fSBsXG4gKiBAcGFyYW0ge09iamVjdH0gclxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1lcmdlRGVlcFJpZ2h0LCBSLm1lcmdlV2l0aCwgUi5tZXJnZVdpdGhLZXlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm1lcmdlKHsgJ25hbWUnOiAnZnJlZCcsICdhZ2UnOiAxMCB9LCB7ICdhZ2UnOiA0MCB9KTtcbiAqICAgICAgLy89PiB7ICduYW1lJzogJ2ZyZWQnLCAnYWdlJzogNDAgfVxuICpcbiAqICAgICAgdmFyIHJlc2V0VG9EZWZhdWx0ID0gUi5tZXJnZShSLl9fLCB7eDogMH0pO1xuICogICAgICByZXNldFRvRGVmYXVsdCh7eDogNSwgeTogMn0pOyAvLz0+IHt4OiAwLCB5OiAyfVxuICogQHN5bWIgUi5tZXJnZSh7IHg6IDEsIHk6IDIgfSwgeyB5OiA1LCB6OiAzIH0pID0geyB4OiAxLCB5OiA1LCB6OiAzIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG1lcmdlKGwsIHIpIHtcbiAgcmV0dXJuIF9hc3NpZ24oe30sIGwsIHIpO1xufSk7XG4iLCJ2YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Fzc2lnbicpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIE1lcmdlcyBhIGxpc3Qgb2Ygb2JqZWN0cyB0b2dldGhlciBpbnRvIG9uZSBvYmplY3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTAuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW3trOiB2fV0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IEFuIGFycmF5IG9mIG9iamVjdHNcbiAqIEByZXR1cm4ge09iamVjdH0gQSBtZXJnZWQgb2JqZWN0LlxuICogQHNlZSBSLnJlZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWVyZ2VBbGwoW3tmb286MX0se2JhcjoyfSx7YmF6OjN9XSk7IC8vPT4ge2ZvbzoxLGJhcjoyLGJhejozfVxuICogICAgICBSLm1lcmdlQWxsKFt7Zm9vOjF9LHtmb286Mn0se2JhcjoyfV0pOyAvLz0+IHtmb286MixiYXI6Mn1cbiAqIEBzeW1iIFIubWVyZ2VBbGwoW3sgeDogMSB9LCB7IHk6IDIgfSwgeyB6OiAzIH1dKSA9IHsgeDogMSwgeTogMiwgejogMyB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBtZXJnZUFsbChsaXN0KSB7XG4gIHJldHVybiBfYXNzaWduLmFwcGx5KG51bGwsIFt7fV0uY29uY2F0KGxpc3QpKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBtZXJnZURlZXBXaXRoS2V5ID0gcmVxdWlyZSgnLi9tZXJnZURlZXBXaXRoS2V5Jyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgZmlyc3Qgb2JqZWN0IG1lcmdlZCB3aXRoXG4gKiB0aGUgb3duIHByb3BlcnRpZXMgb2YgdGhlIHNlY29uZCBvYmplY3QuIElmIGEga2V5IGV4aXN0cyBpbiBib3RoIG9iamVjdHM6XG4gKiAtIGFuZCBib3RoIHZhbHVlcyBhcmUgb2JqZWN0cywgdGhlIHR3byB2YWx1ZXMgd2lsbCBiZSByZWN1cnNpdmVseSBtZXJnZWRcbiAqIC0gb3RoZXJ3aXNlIHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCBvYmplY3Qgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjI0LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2F9IC0+IHthfSAtPiB7YX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBsT2JqXG4gKiBAcGFyYW0ge09iamVjdH0gck9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1lcmdlLCBSLm1lcmdlRGVlcFJpZ2h0LCBSLm1lcmdlRGVlcFdpdGgsIFIubWVyZ2VEZWVwV2l0aEtleVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWVyZ2VEZWVwTGVmdCh7IG5hbWU6ICdmcmVkJywgYWdlOiAxMCwgY29udGFjdDogeyBlbWFpbDogJ21vb0BleGFtcGxlLmNvbScgfX0sXG4gKiAgICAgICAgICAgICAgICAgICAgICB7IGFnZTogNDAsIGNvbnRhY3Q6IHsgZW1haWw6ICdiYWFAZXhhbXBsZS5jb20nIH19KTtcbiAqICAgICAgLy89PiB7IG5hbWU6ICdmcmVkJywgYWdlOiAxMCwgY29udGFjdDogeyBlbWFpbDogJ21vb0BleGFtcGxlLmNvbScgfX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG1lcmdlRGVlcExlZnQobE9iaiwgck9iaikge1xuICByZXR1cm4gbWVyZ2VEZWVwV2l0aEtleShmdW5jdGlvbihrLCBsVmFsLCByVmFsKSB7XG4gICAgcmV0dXJuIGxWYWw7XG4gIH0sIGxPYmosIHJPYmopO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIG1lcmdlRGVlcFdpdGhLZXkgPSByZXF1aXJlKCcuL21lcmdlRGVlcFdpdGhLZXknKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBmaXJzdCBvYmplY3QgbWVyZ2VkIHdpdGhcbiAqIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgc2Vjb25kIG9iamVjdC4gSWYgYSBrZXkgZXhpc3RzIGluIGJvdGggb2JqZWN0czpcbiAqIC0gYW5kIGJvdGggdmFsdWVzIGFyZSBvYmplY3RzLCB0aGUgdHdvIHZhbHVlcyB3aWxsIGJlIHJlY3Vyc2l2ZWx5IG1lcmdlZFxuICogLSBvdGhlcndpc2UgdGhlIHZhbHVlIGZyb20gdGhlIHNlY29uZCBvYmplY3Qgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjI0LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2F9IC0+IHthfSAtPiB7YX1cbiAqIEBwYXJhbSB7T2JqZWN0fSBsT2JqXG4gKiBAcGFyYW0ge09iamVjdH0gck9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1lcmdlLCBSLm1lcmdlRGVlcExlZnQsIFIubWVyZ2VEZWVwV2l0aCwgUi5tZXJnZURlZXBXaXRoS2V5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZXJnZURlZXBSaWdodCh7IG5hbWU6ICdmcmVkJywgYWdlOiAxMCwgY29udGFjdDogeyBlbWFpbDogJ21vb0BleGFtcGxlLmNvbScgfX0sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgeyBhZ2U6IDQwLCBjb250YWN0OiB7IGVtYWlsOiAnYmFhQGV4YW1wbGUuY29tJyB9fSk7XG4gKiAgICAgIC8vPT4geyBuYW1lOiAnZnJlZCcsIGFnZTogNDAsIGNvbnRhY3Q6IHsgZW1haWw6ICdiYWFAZXhhbXBsZS5jb20nIH19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBtZXJnZURlZXBSaWdodChsT2JqLCByT2JqKSB7XG4gIHJldHVybiBtZXJnZURlZXBXaXRoS2V5KGZ1bmN0aW9uKGssIGxWYWwsIHJWYWwpIHtcbiAgICByZXR1cm4gclZhbDtcbiAgfSwgbE9iaiwgck9iaik7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgbWVyZ2VEZWVwV2l0aEtleSA9IHJlcXVpcmUoJy4vbWVyZ2VEZWVwV2l0aEtleScpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3duIHByb3BlcnRpZXMgb2YgdGhlIHR3byBwcm92aWRlZCBvYmplY3RzLlxuICogSWYgYSBrZXkgZXhpc3RzIGluIGJvdGggb2JqZWN0czpcbiAqIC0gYW5kIGJvdGggYXNzb2NpYXRlZCB2YWx1ZXMgYXJlIGFsc28gb2JqZWN0cyB0aGVuIHRoZSB2YWx1ZXMgd2lsbCBiZVxuICogICByZWN1cnNpdmVseSBtZXJnZWQuXG4gKiAtIG90aGVyd2lzZSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgYXBwbGllZCB0byBhc3NvY2lhdGVkIHZhbHVlcyB1c2luZyB0aGVcbiAqICAgcmVzdWx0aW5nIHZhbHVlIGFzIHRoZSBuZXcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBrZXkuXG4gKiBJZiBhIGtleSBvbmx5IGV4aXN0cyBpbiBvbmUgb2JqZWN0LCB0aGUgdmFsdWUgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGtleVxuICogb2YgdGhlIHJlc3VsdGluZyBvYmplY3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoYSAtPiBhIC0+IGEpIC0+IHthfSAtPiB7YX0gLT4ge2F9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGxPYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSByT2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAc2VlIFIubWVyZ2VXaXRoLCBSLm1lcmdlRGVlcCwgUi5tZXJnZURlZXBXaXRoS2V5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZXJnZURlZXBXaXRoKFIuY29uY2F0LFxuICogICAgICAgICAgICAgICAgICAgICAgeyBhOiB0cnVlLCBjOiB7IHZhbHVlczogWzEwLCAyMF0gfX0sXG4gKiAgICAgICAgICAgICAgICAgICAgICB7IGI6IHRydWUsIGM6IHsgdmFsdWVzOiBbMTUsIDM1XSB9fSk7XG4gKiAgICAgIC8vPT4geyBhOiB0cnVlLCBiOiB0cnVlLCBjOiB7IHZhbHVlczogWzEwLCAyMCwgMTUsIDM1XSB9fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWVyZ2VEZWVwV2l0aChmbiwgbE9iaiwgck9iaikge1xuICByZXR1cm4gbWVyZ2VEZWVwV2l0aEtleShmdW5jdGlvbihrLCBsVmFsLCByVmFsKSB7XG4gICAgcmV0dXJuIGZuKGxWYWwsIHJWYWwpO1xuICB9LCBsT2JqLCByT2JqKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc09iamVjdCcpO1xudmFyIG1lcmdlV2l0aEtleSA9IHJlcXVpcmUoJy4vbWVyZ2VXaXRoS2V5Jyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgdHdvIHByb3ZpZGVkIG9iamVjdHMuXG4gKiBJZiBhIGtleSBleGlzdHMgaW4gYm90aCBvYmplY3RzOlxuICogLSBhbmQgYm90aCBhc3NvY2lhdGVkIHZhbHVlcyBhcmUgYWxzbyBvYmplY3RzIHRoZW4gdGhlIHZhbHVlcyB3aWxsIGJlXG4gKiAgIHJlY3Vyc2l2ZWx5IG1lcmdlZC5cbiAqIC0gb3RoZXJ3aXNlIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBhcHBsaWVkIHRvIHRoZSBrZXkgYW5kIGFzc29jaWF0ZWQgdmFsdWVzXG4gKiAgIHVzaW5nIHRoZSByZXN1bHRpbmcgdmFsdWUgYXMgdGhlIG5ldyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGtleS5cbiAqIElmIGEga2V5IG9ubHkgZXhpc3RzIGluIG9uZSBvYmplY3QsIHRoZSB2YWx1ZSB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5XG4gKiBvZiB0aGUgcmVzdWx0aW5nIG9iamVjdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yNC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIChTdHJpbmcgLT4gYSAtPiBhIC0+IGEpIC0+IHthfSAtPiB7YX0gLT4ge2F9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGxPYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSByT2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAc2VlIFIubWVyZ2VXaXRoS2V5LCBSLm1lcmdlRGVlcCwgUi5tZXJnZURlZXBXaXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgbGV0IGNvbmNhdFZhbHVlcyA9IChrLCBsLCByKSA9PiBrID09ICd2YWx1ZXMnID8gUi5jb25jYXQobCwgcikgOiByXG4gKiAgICAgIFIubWVyZ2VEZWVwV2l0aEtleShjb25jYXRWYWx1ZXMsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICB7IGE6IHRydWUsIGM6IHsgdGhpbmc6ICdmb28nLCB2YWx1ZXM6IFsxMCwgMjBdIH19LFxuICogICAgICAgICAgICAgICAgICAgICAgICAgeyBiOiB0cnVlLCBjOiB7IHRoaW5nOiAnYmFyJywgdmFsdWVzOiBbMTUsIDM1XSB9fSk7XG4gKiAgICAgIC8vPT4geyBhOiB0cnVlLCBiOiB0cnVlLCBjOiB7IHRoaW5nOiAnYmFyJywgdmFsdWVzOiBbMTAsIDIwLCAxNSwgMzVdIH19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBtZXJnZURlZXBXaXRoS2V5KGZuLCBsT2JqLCByT2JqKSB7XG4gIHJldHVybiBtZXJnZVdpdGhLZXkoZnVuY3Rpb24oaywgbFZhbCwgclZhbCkge1xuICAgIGlmIChfaXNPYmplY3QobFZhbCkgJiYgX2lzT2JqZWN0KHJWYWwpKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEZWVwV2l0aEtleShmbiwgbFZhbCwgclZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmbihrLCBsVmFsLCByVmFsKTtcbiAgICB9XG4gIH0sIGxPYmosIHJPYmopO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIG1lcmdlV2l0aEtleSA9IHJlcXVpcmUoJy4vbWVyZ2VXaXRoS2V5Jyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgdHdvIHByb3ZpZGVkIG9iamVjdHMuIElmXG4gKiBhIGtleSBleGlzdHMgaW4gYm90aCBvYmplY3RzLCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aGUgdmFsdWVzXG4gKiBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSBpbiBlYWNoIG9iamVjdCwgd2l0aCB0aGUgcmVzdWx0IGJlaW5nIHVzZWQgYXMgdGhlXG4gKiB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSBpbiB0aGUgcmV0dXJuZWQgb2JqZWN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgKGEgLT4gYSAtPiBhKSAtPiB7YX0gLT4ge2F9IC0+IHthfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBsXG4gKiBAcGFyYW0ge09iamVjdH0gclxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1lcmdlRGVlcFdpdGgsIFIubWVyZ2UsIFIubWVyZ2VXaXRoS2V5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZXJnZVdpdGgoUi5jb25jYXQsXG4gKiAgICAgICAgICAgICAgICAgIHsgYTogdHJ1ZSwgdmFsdWVzOiBbMTAsIDIwXSB9LFxuICogICAgICAgICAgICAgICAgICB7IGI6IHRydWUsIHZhbHVlczogWzE1LCAzNV0gfSk7XG4gKiAgICAgIC8vPT4geyBhOiB0cnVlLCBiOiB0cnVlLCB2YWx1ZXM6IFsxMCwgMjAsIDE1LCAzNV0gfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWVyZ2VXaXRoKGZuLCBsLCByKSB7XG4gIHJldHVybiBtZXJnZVdpdGhLZXkoZnVuY3Rpb24oXywgX2wsIF9yKSB7XG4gICAgcmV0dXJuIGZuKF9sLCBfcik7XG4gIH0sIGwsIHIpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG93biBwcm9wZXJ0aWVzIG9mIHRoZSB0d28gcHJvdmlkZWQgb2JqZWN0cy4gSWZcbiAqIGEga2V5IGV4aXN0cyBpbiBib3RoIG9iamVjdHMsIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBhcHBsaWVkIHRvIHRoZSBrZXlcbiAqIGFuZCB0aGUgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5IGluIGVhY2ggb2JqZWN0LCB3aXRoIHRoZSByZXN1bHQgYmVpbmdcbiAqIHVzZWQgYXMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUga2V5IGluIHRoZSByZXR1cm5lZCBvYmplY3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoU3RyaW5nIC0+IGEgLT4gYSAtPiBhKSAtPiB7YX0gLT4ge2F9IC0+IHthfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBsXG4gKiBAcGFyYW0ge09iamVjdH0gclxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1lcmdlRGVlcFdpdGhLZXksIFIubWVyZ2UsIFIubWVyZ2VXaXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgbGV0IGNvbmNhdFZhbHVlcyA9IChrLCBsLCByKSA9PiBrID09ICd2YWx1ZXMnID8gUi5jb25jYXQobCwgcikgOiByXG4gKiAgICAgIFIubWVyZ2VXaXRoS2V5KGNvbmNhdFZhbHVlcyxcbiAqICAgICAgICAgICAgICAgICAgICAgeyBhOiB0cnVlLCB0aGluZzogJ2ZvbycsIHZhbHVlczogWzEwLCAyMF0gfSxcbiAqICAgICAgICAgICAgICAgICAgICAgeyBiOiB0cnVlLCB0aGluZzogJ2JhcicsIHZhbHVlczogWzE1LCAzNV0gfSk7XG4gKiAgICAgIC8vPT4geyBhOiB0cnVlLCBiOiB0cnVlLCB0aGluZzogJ2JhcicsIHZhbHVlczogWzEwLCAyMCwgMTUsIDM1XSB9XG4gKiBAc3ltYiBSLm1lcmdlV2l0aEtleShmLCB7IHg6IDEsIHk6IDIgfSwgeyB5OiA1LCB6OiAzIH0pID0geyB4OiAxLCB5OiBmKCd5JywgMiwgNSksIHo6IDMgfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWVyZ2VXaXRoS2V5KGZuLCBsLCByKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGs7XG5cbiAgZm9yIChrIGluIGwpIHtcbiAgICBpZiAoX2hhcyhrLCBsKSkge1xuICAgICAgcmVzdWx0W2tdID0gX2hhcyhrLCByKSA/IGZuKGssIGxba10sIHJba10pIDogbFtrXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGsgaW4gcikge1xuICAgIGlmIChfaGFzKGssIHIpICYmICEoX2hhcyhrLCByZXN1bHQpKSkge1xuICAgICAgcmVzdWx0W2tdID0gcltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlciBvZiBpdHMgdHdvIGFyZ3VtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gYVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIubWluQnksIFIubWF4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5taW4oNzg5LCAxMjMpOyAvLz0+IDEyM1xuICogICAgICBSLm1pbignYScsICdiJyk7IC8vPT4gJ2EnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBtaW4oYSwgYikgeyByZXR1cm4gYiA8IGEgPyBiIDogYTsgfSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBmdW5jdGlvbiBhbmQgdHdvIHZhbHVlcywgYW5kIHJldHVybnMgd2hpY2hldmVyIHZhbHVlIHByb2R1Y2VzIHRoZVxuICogc21hbGxlciByZXN1bHQgd2hlbiBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBiID0+IChhIC0+IGIpIC0+IGEgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5taW4sIFIubWF4QnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyAgc3F1YXJlIDo6IE51bWJlciAtPiBOdW1iZXJcbiAqICAgICAgdmFyIHNxdWFyZSA9IG4gPT4gbiAqIG47XG4gKlxuICogICAgICBSLm1pbkJ5KHNxdWFyZSwgLTMsIDIpOyAvLz0+IDJcbiAqXG4gKiAgICAgIFIucmVkdWNlKFIubWluQnkoc3F1YXJlKSwgSW5maW5pdHksIFszLCAtNSwgNCwgMSwgLTJdKTsgLy89PiAxXG4gKiAgICAgIFIucmVkdWNlKFIubWluQnkoc3F1YXJlKSwgSW5maW5pdHksIFtdKTsgLy89PiBJbmZpbml0eVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWluQnkoZiwgYSwgYikge1xuICByZXR1cm4gZihiKSA8IGYoYSkgPyBiIDogYTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIERpdmlkZXMgdGhlIGZpcnN0IHBhcmFtZXRlciBieSB0aGUgc2Vjb25kIGFuZCByZXR1cm5zIHRoZSByZW1haW5kZXIuIE5vdGVcbiAqIHRoYXQgdGhpcyBmdW5jdGlvbiBwcmVzZXJ2ZXMgdGhlIEphdmFTY3JpcHQtc3R5bGUgYmVoYXZpb3IgZm9yIG1vZHVsby4gRm9yXG4gKiBtYXRoZW1hdGljYWwgbW9kdWxvIHNlZSBbYG1hdGhNb2RgXSgjbWF0aE1vZCkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIHZhbHVlIHRvIHRoZSBkaXZpZGUuXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgcHNldWRvLW1vZHVsdXNcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHJlc3VsdCBvZiBgYiAlIGFgLlxuICogQHNlZSBSLm1hdGhNb2RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm1vZHVsbygxNywgMyk7IC8vPT4gMlxuICogICAgICAvLyBKUyBiZWhhdmlvcjpcbiAqICAgICAgUi5tb2R1bG8oLTE3LCAzKTsgLy89PiAtMlxuICogICAgICBSLm1vZHVsbygxNywgLTMpOyAvLz0+IDJcbiAqXG4gKiAgICAgIHZhciBpc09kZCA9IFIubW9kdWxvKFIuX18sIDIpO1xuICogICAgICBpc09kZCg0Mik7IC8vPT4gMFxuICogICAgICBpc09kZCgyMSk7IC8vPT4gMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbW9kdWxvKGEsIGIpIHsgcmV0dXJuIGEgJSBiOyB9KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBudW1iZXJzLiBFcXVpdmFsZW50IHRvIGBhICogYmAgYnV0IGN1cnJpZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IHZhbHVlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCB2YWx1ZS5cbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHJlc3VsdCBvZiBgYSAqIGJgLlxuICogQHNlZSBSLmRpdmlkZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkb3VibGUgPSBSLm11bHRpcGx5KDIpO1xuICogICAgICB2YXIgdHJpcGxlID0gUi5tdWx0aXBseSgzKTtcbiAqICAgICAgZG91YmxlKDMpOyAgICAgICAvLz0+ICA2XG4gKiAgICAgIHRyaXBsZSg0KTsgICAgICAgLy89PiAxMlxuICogICAgICBSLm11bHRpcGx5KDIsIDUpOyAgLy89PiAxMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikgeyByZXR1cm4gYSAqIGI7IH0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFdyYXBzIGEgZnVuY3Rpb24gb2YgYW55IGFyaXR5IChpbmNsdWRpbmcgbnVsbGFyeSkgaW4gYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHNcbiAqIGV4YWN0bHkgYG5gIHBhcmFtZXRlcnMuIEFueSBleHRyYW5lb3VzIHBhcmFtZXRlcnMgd2lsbCBub3QgYmUgcGFzc2VkIHRvIHRoZVxuICogc3VwcGxpZWQgZnVuY3Rpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgZGVzaXJlZCBhcml0eSBvZiB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIG9mXG4gKiAgICAgICAgIGFyaXR5IGBuYC5cbiAqIEBzZWUgUi5iaW5hcnksIFIudW5hcnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdGFrZXNUd29BcmdzID0gKGEsIGIpID0+IFthLCBiXTtcbiAqXG4gKiAgICAgIHRha2VzVHdvQXJncy5sZW5ndGg7IC8vPT4gMlxuICogICAgICB0YWtlc1R3b0FyZ3MoMSwgMik7IC8vPT4gWzEsIDJdXG4gKlxuICogICAgICB2YXIgdGFrZXNPbmVBcmcgPSBSLm5BcnkoMSwgdGFrZXNUd29BcmdzKTtcbiAqICAgICAgdGFrZXNPbmVBcmcubGVuZ3RoOyAvLz0+IDFcbiAqICAgICAgLy8gT25seSBgbmAgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb25cbiAqICAgICAgdGFrZXNPbmVBcmcoMSwgMik7IC8vPT4gWzEsIHVuZGVmaW5lZF1cbiAqIEBzeW1iIFIubkFyeSgwLCBmKShhLCBiKSA9IGYoKVxuICogQHN5bWIgUi5uQXJ5KDEsIGYpKGEsIGIpID0gZihhKVxuICogQHN5bWIgUi5uQXJ5KDIsIGYpKGEsIGIpID0gZihhLCBiKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbkFyeShuLCBmbikge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHtyZXR1cm4gZm4uY2FsbCh0aGlzKTt9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEwKSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTApO307XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExKSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExKTt9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIpIHtyZXR1cm4gZm4uY2FsbCh0aGlzLCBhMCwgYTEsIGEyKTt9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzKSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMpO307XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0KSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMsIGE0KTt9O1xuICAgIGNhc2UgNjogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtyZXR1cm4gZm4uY2FsbCh0aGlzLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTt9O1xuICAgIGNhc2UgNzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO307XG4gICAgY2FzZSA4OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTt9O1xuICAgIGNhc2UgOTogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHtyZXR1cm4gZm4uY2FsbCh0aGlzLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KTt9O1xuICAgIGNhc2UgMTA6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSkge3JldHVybiBmbi5jYWxsKHRoaXMsIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KTt9O1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gbkFyeSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIgbm8gZ3JlYXRlciB0aGFuIHRlbicpO1xuICB9XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBOZWdhdGVzIGl0cyBhcmd1bWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5uZWdhdGUoNDIpOyAvLz0+IC00MlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbmVnYXRlKG4pIHsgcmV0dXJuIC1uOyB9KTtcbiIsInZhciBfY29tcGxlbWVudCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbXBsZW1lbnQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94YW55ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGFueScpO1xudmFyIGFueSA9IHJlcXVpcmUoJy4vYW55Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBubyBlbGVtZW50cyBvZiB0aGUgbGlzdCBtYXRjaCB0aGUgcHJlZGljYXRlLCBgZmFsc2VgXG4gKiBvdGhlcndpc2UuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFueWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTIuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcHJlZGljYXRlIGlzIG5vdCBzYXRpc2ZpZWQgYnkgZXZlcnkgZWxlbWVudCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAc2VlIFIuYWxsLCBSLmFueVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0V2ZW4gPSBuID0+IG4gJSAyID09PSAwO1xuICpcbiAqICAgICAgUi5ub25lKGlzRXZlbiwgWzEsIDMsIDUsIDcsIDksIDExXSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm5vbmUoaXNFdmVuLCBbMSwgMywgNSwgNywgOCwgMTFdKTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2NvbXBsZW1lbnQoX2Rpc3BhdGNoYWJsZShbJ2FueSddLCBfeGFueSwgYW55KSkpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBgIWAgb2YgaXRzIGFyZ3VtZW50LiBJdCB3aWxsIHJldHVybiBgdHJ1ZWAgd2hlblxuICogcGFzc2VkIGZhbHNlLXkgdmFsdWUsIGFuZCBgZmFsc2VgIHdoZW4gcGFzc2VkIGEgdHJ1dGgteSBvbmUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IGEgYW55IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgbG9naWNhbCBpbnZlcnNlIG9mIHBhc3NlZCBhcmd1bWVudC5cbiAqIEBzZWUgUi5jb21wbGVtZW50XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5ub3QodHJ1ZSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5ub3QoZmFsc2UpOyAvLz0+IHRydWVcbiAqICAgICAgUi5ub3QoMCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm5vdCgxKTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbm90KGEpIHtcbiAgcmV0dXJuICFhO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzU3RyaW5nJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudGggZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuIElmIG4gaXMgbmVnYXRpdmUgdGhlXG4gKiBlbGVtZW50IGF0IGluZGV4IGxlbmd0aCArIG4gaXMgcmV0dXJuZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IGEgfCBVbmRlZmluZWRcbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbGlzdCA9IFsnZm9vJywgJ2JhcicsICdiYXonLCAncXV1eCddO1xuICogICAgICBSLm50aCgxLCBsaXN0KTsgLy89PiAnYmFyJ1xuICogICAgICBSLm50aCgtMSwgbGlzdCk7IC8vPT4gJ3F1dXgnXG4gKiAgICAgIFIubnRoKC05OSwgbGlzdCk7IC8vPT4gdW5kZWZpbmVkXG4gKlxuICogICAgICBSLm50aCgyLCAnYWJjJyk7IC8vPT4gJ2MnXG4gKiAgICAgIFIubnRoKDMsICdhYmMnKTsgLy89PiAnJ1xuICogQHN5bWIgUi5udGgoLTEsIFthLCBiLCBjXSkgPSBjXG4gKiBAc3ltYiBSLm50aCgwLCBbYSwgYiwgY10pID0gYVxuICogQHN5bWIgUi5udGgoMSwgW2EsIGIsIGNdKSA9IGJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG50aChvZmZzZXQsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IG9mZnNldCA8IDAgPyBsaXN0Lmxlbmd0aCArIG9mZnNldCA6IG9mZnNldDtcbiAgcmV0dXJuIF9pc1N0cmluZyhsaXN0KSA/IGxpc3QuY2hhckF0KGlkeCkgOiBsaXN0W2lkeF07XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciBudGggPSByZXF1aXJlKCcuL250aCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgaXRzIG50aCBhcmd1bWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKi4uLiAtPiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5udGhBcmcoMSkoJ2EnLCAnYicsICdjJyk7IC8vPT4gJ2InXG4gKiAgICAgIFIubnRoQXJnKC0xKSgnYScsICdiJywgJ2MnKTsgLy89PiAnYydcbiAqIEBzeW1iIFIubnRoQXJnKC0xKShhLCBiLCBjKSA9IGNcbiAqIEBzeW1iIFIubnRoQXJnKDApKGEsIGIsIGMpID0gYVxuICogQHN5bWIgUi5udGhBcmcoMSkoYSwgYiwgYykgPSBiXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBudGhBcmcobikge1xuICB2YXIgYXJpdHkgPSBuIDwgMCA/IDEgOiBuICsgMTtcbiAgcmV0dXJuIGN1cnJ5Tihhcml0eSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG50aChuLCBhcmd1bWVudHMpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIGBvYCBpcyBhIGN1cnJpZWQgY29tcG9zaXRpb24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgdW5hcnkgZnVuY3Rpb24uXG4gKiBMaWtlIFtgY29tcG9zZWBdKCNjb21wb3NlKSwgYG9gIHBlcmZvcm1zIHJpZ2h0LXRvLWxlZnQgZnVuY3Rpb24gY29tcG9zaXRpb24uXG4gKiBVbmxpa2UgW2Bjb21wb3NlYF0oI2NvbXBvc2UpLCB0aGUgcmlnaHRtb3N0IGZ1bmN0aW9uIHBhc3NlZCB0byBgb2Agd2lsbCBiZVxuICogaW52b2tlZCB3aXRoIG9ubHkgb25lIGFyZ3VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjI0LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYiAtPiBjKSAtPiAoYSAtPiBiKSAtPiBhIC0+IGNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLmNvbXBvc2UsIFIucGlwZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBjbGFzc3lHcmVldGluZyA9IG5hbWUgPT4gXCJUaGUgbmFtZSdzIFwiICsgbmFtZS5sYXN0ICsgXCIsIFwiICsgbmFtZS5maXJzdCArIFwiIFwiICsgbGFzdE5hbWVcbiAqICAgICAgdmFyIHllbGxHcmVldGluZyA9IFIubyhSLnRvVXBwZXIsIGNsYXNzeUdyZWV0aW5nKTtcbiAqICAgICAgeWVsbEdyZWV0aW5nKHtmaXJzdDogJ0phbWVzJywgbGFzdDogJ0JvbmQnfSk7IC8vPT4gXCJUSEUgTkFNRSdTIEJPTkQsIEpBTUVTIEJPTkRcIlxuICpcbiAqICAgICAgUi5vKFIubXVsdGlwbHkoMTApLCBSLmFkZCgxMCkpKC00KSAvLz0+IDYwXG4gKlxuICogQHN5bWIgUi5vKGYsIGcsIHgpID0gZihnKHgpKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbyhmLCBnLCB4KSB7XG4gIHJldHVybiBmKGcoeCkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29udGFpbmluZyBhIHNpbmdsZSBrZXk6dmFsdWUgcGFpci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFN0cmluZyAtPiBhIC0+IHtTdHJpbmc6YX1cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAc2VlIFIucGFpclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYXRjaFBocmFzZXMgPSBSLmNvbXBvc2UoXG4gKiAgICAgICAgUi5vYmpPZignbXVzdCcpLFxuICogICAgICAgIFIubWFwKFIub2JqT2YoJ21hdGNoX3BocmFzZScpKVxuICogICAgICApO1xuICogICAgICBtYXRjaFBocmFzZXMoWydmb28nLCAnYmFyJywgJ2JheiddKTsgLy89PiB7bXVzdDogW3ttYXRjaF9waHJhc2U6ICdmb28nfSwge21hdGNoX3BocmFzZTogJ2Jhcid9LCB7bWF0Y2hfcGhyYXNlOiAnYmF6J31dfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gb2JqT2Yoa2V5LCB2YWwpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICBvYmpba2V5XSA9IHZhbDtcbiAgcmV0dXJuIG9iajtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfb2YgPSByZXF1aXJlKCcuL2ludGVybmFsL19vZicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIHNpbmdsZXRvbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZSBwcm92aWRlZC5cbiAqXG4gKiBOb3RlIHRoaXMgYG9mYCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgRVM2IGBvZmA7IFNlZVxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvb2ZcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBhIC0+IFthXVxuICogQHBhcmFtIHsqfSB4IGFueSB2YWx1ZVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IHdyYXBwaW5nIGB4YC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm9mKG51bGwpOyAvLz0+IFtudWxsXVxuICogICAgICBSLm9mKFs0Ml0pOyAvLz0+IFtbNDJdXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoX29mKTtcbiIsInZhciBfY29udGFpbnMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb250YWlucycpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBwYXJ0aWFsIGNvcHkgb2YgYW4gb2JqZWN0IG9taXR0aW5nIHRoZSBrZXlzIHNwZWNpZmllZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgW1N0cmluZ10gLT4ge1N0cmluZzogKn0gLT4ge1N0cmluZzogKn1cbiAqIEBwYXJhbSB7QXJyYXl9IG5hbWVzIGFuIGFycmF5IG9mIFN0cmluZyBwcm9wZXJ0eSBuYW1lcyB0byBvbWl0IGZyb20gdGhlIG5ldyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggcHJvcGVydGllcyBmcm9tIGBuYW1lc2Agbm90IG9uIGl0LlxuICogQHNlZSBSLnBpY2tcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm9taXQoWydhJywgJ2QnXSwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YjogMiwgYzogM31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG9taXQobmFtZXMsIG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKCFfY29udGFpbnMocHJvcCwgbmFtZXMpKSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcml0eScpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSBmdW5jdGlvbiBgZm5gIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBndWFyZHMgaW52b2NhdGlvbiBvZlxuICogYGZuYCBzdWNoIHRoYXQgYGZuYCBjYW4gb25seSBldmVyIGJlIGNhbGxlZCBvbmNlLCBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXNcbiAqIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBpcyBpbnZva2VkLiBUaGUgZmlyc3QgdmFsdWUgY2FsY3VsYXRlZCBpcyByZXR1cm5lZCBpblxuICogc3Vic2VxdWVudCBpbnZvY2F0aW9ucy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYS4uLiAtPiBiKSAtPiAoYS4uLiAtPiBiKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAgaW4gYSBjYWxsLW9ubHktb25jZSB3cmFwcGVyLlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhZGRPbmVPbmNlID0gUi5vbmNlKHggPT4geCArIDEpO1xuICogICAgICBhZGRPbmVPbmNlKDEwKTsgLy89PiAxMVxuICogICAgICBhZGRPbmVPbmNlKGFkZE9uZU9uY2UoNTApKTsgLy89PiAxMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gb25jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHZhciByZXN1bHQ7XG4gIHJldHVybiBfYXJpdHkoZm4ubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBvbmUgb3IgYm90aCBvZiBpdHMgYXJndW1lbnRzIGFyZSBgdHJ1ZWAuIFJldHVybnMgYGZhbHNlYFxuICogaWYgYm90aCBhcmd1bWVudHMgYXJlIGBmYWxzZWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge0FueX0gYVxuICogQHBhcmFtIHtBbnl9IGJcbiAqIEByZXR1cm4ge0FueX0gdGhlIGZpcnN0IGFyZ3VtZW50IGlmIHRydXRoeSwgb3RoZXJ3aXNlIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKiBAc2VlIFIuZWl0aGVyXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5vcih0cnVlLCB0cnVlKTsgLy89PiB0cnVlXG4gKiAgICAgIFIub3IodHJ1ZSwgZmFsc2UpOyAvLz0+IHRydWVcbiAqICAgICAgUi5vcihmYWxzZSwgdHJ1ZSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm9yKGZhbHNlLCBmYWxzZSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG9yKGEsIGIpIHtcbiAgcmV0dXJuIGEgfHwgYjtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiBcInNldHRpbmdcIiB0aGUgcG9ydGlvbiBvZiB0aGUgZ2l2ZW4gZGF0YSBzdHJ1Y3R1cmVcbiAqIGZvY3VzZWQgYnkgdGhlIGdpdmVuIGxlbnMgdG8gdGhlIHJlc3VsdCBvZiBhcHBseWluZyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG9cbiAqIHRoZSBmb2N1c2VkIHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBMZW5zIHMgYSA9IEZ1bmN0b3IgZiA9PiAoYSAtPiBmIGEpIC0+IHMgLT4gZiBzXG4gKiBAc2lnIExlbnMgcyBhIC0+IChhIC0+IGEpIC0+IHMgLT4gc1xuICogQHBhcmFtIHtMZW5zfSBsZW5zXG4gKiBAcGFyYW0geyp9IHZcbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5wcm9wLCBSLmxlbnNJbmRleCwgUi5sZW5zUHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBoZWFkTGVucyA9IFIubGVuc0luZGV4KDApO1xuICpcbiAqICAgICAgUi5vdmVyKGhlYWRMZW5zLCBSLnRvVXBwZXIsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydGT08nLCAnYmFyJywgJ2JheiddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAvLyBgSWRlbnRpdHlgIGlzIGEgZnVuY3RvciB0aGF0IGhvbGRzIGEgc2luZ2xlIHZhbHVlLCB3aGVyZSBgbWFwYCBzaW1wbHlcbiAgLy8gdHJhbnNmb3JtcyB0aGUgaGVsZCB2YWx1ZSB3aXRoIHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgdmFyIElkZW50aXR5ID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB7dmFsdWU6IHgsIG1hcDogZnVuY3Rpb24oZikgeyByZXR1cm4gSWRlbnRpdHkoZih4KSk7IH19O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkzKGZ1bmN0aW9uIG92ZXIobGVucywgZiwgeCkge1xuICAgIC8vIFRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZ2V0dGVyIGZ1bmN0aW9uIGlzIGZpcnN0IHRyYW5zZm9ybWVkIHdpdGggYGZgLFxuICAgIC8vIHRoZW4gc2V0IGFzIHRoZSB2YWx1ZSBvZiBhbiBgSWRlbnRpdHlgLiBUaGlzIGlzIHRoZW4gbWFwcGVkIG92ZXIgd2l0aCB0aGVcbiAgICAvLyBzZXR0ZXIgZnVuY3Rpb24gb2YgdGhlIGxlbnMuXG4gICAgcmV0dXJuIGxlbnMoZnVuY3Rpb24oeSkgeyByZXR1cm4gSWRlbnRpdHkoZih5KSk7IH0pKHgpLnZhbHVlO1xuICB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogVGFrZXMgdHdvIGFyZ3VtZW50cywgYGZzdGAgYW5kIGBzbmRgLCBhbmQgcmV0dXJucyBgW2ZzdCwgc25kXWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTguMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgYSAtPiBiIC0+IChhLGIpXG4gKiBAcGFyYW0geyp9IGZzdFxuICogQHBhcmFtIHsqfSBzbmRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNlZSBSLm9iak9mLCBSLm9mXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYWlyKCdmb28nLCAnYmFyJyk7IC8vPT4gWydmb28nLCAnYmFyJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHBhaXIoZnN0LCBzbmQpIHsgcmV0dXJuIFtmc3QsIHNuZF07IH0pO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IgPSByZXF1aXJlKCcuL2ludGVybmFsL19jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcicpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBmdW5jdGlvbiBgZmAgYW5kIGEgbGlzdCBvZiBhcmd1bWVudHMsIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gYGdgLlxuICogV2hlbiBhcHBsaWVkLCBgZ2AgcmV0dXJucyB0aGUgcmVzdWx0IG9mIGFwcGx5aW5nIGBmYCB0byB0aGUgYXJndW1lbnRzXG4gKiBwcm92aWRlZCBpbml0aWFsbHkgZm9sbG93ZWQgYnkgdGhlIGFyZ3VtZW50cyBwcm92aWRlZCB0byBgZ2AuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTAuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoYSwgYiwgYywgLi4uLCBuKSAtPiB4KSAtPiBbYSwgYiwgYywgLi4uXSAtPiAoKGQsIGUsIGYsIC4uLiwgbikgLT4geClcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLnBhcnRpYWxSaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtdWx0aXBseTIgPSAoYSwgYikgPT4gYSAqIGI7XG4gKiAgICAgIHZhciBkb3VibGUgPSBSLnBhcnRpYWwobXVsdGlwbHkyLCBbMl0pO1xuICogICAgICBkb3VibGUoMik7IC8vPT4gNFxuICpcbiAqICAgICAgdmFyIGdyZWV0ID0gKHNhbHV0YXRpb24sIHRpdGxlLCBmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PlxuICogICAgICAgIHNhbHV0YXRpb24gKyAnLCAnICsgdGl0bGUgKyAnICcgKyBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZSArICchJztcbiAqXG4gKiAgICAgIHZhciBzYXlIZWxsbyA9IFIucGFydGlhbChncmVldCwgWydIZWxsbyddKTtcbiAqICAgICAgdmFyIHNheUhlbGxvVG9NcyA9IFIucGFydGlhbChzYXlIZWxsbywgWydNcy4nXSk7XG4gKiAgICAgIHNheUhlbGxvVG9NcygnSmFuZScsICdKb25lcycpOyAvLz0+ICdIZWxsbywgTXMuIEphbmUgSm9uZXMhJ1xuICogQHN5bWIgUi5wYXJ0aWFsKGYsIFthLCBiXSkoYywgZCkgPSBmKGEsIGIsIGMsIGQpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yKF9jb25jYXQpO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IgPSByZXF1aXJlKCcuL2ludGVybmFsL19jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcicpO1xudmFyIGZsaXAgPSByZXF1aXJlKCcuL2ZsaXAnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYGZgIGFuZCBhIGxpc3Qgb2YgYXJndW1lbnRzLCBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIGBnYC5cbiAqIFdoZW4gYXBwbGllZCwgYGdgIHJldHVybnMgdGhlIHJlc3VsdCBvZiBhcHBseWluZyBgZmAgdG8gdGhlIGFyZ3VtZW50c1xuICogcHJvdmlkZWQgdG8gYGdgIGZvbGxvd2VkIGJ5IHRoZSBhcmd1bWVudHMgcHJvdmlkZWQgaW5pdGlhbGx5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKGEsIGIsIGMsIC4uLiwgbikgLT4geCkgLT4gW2QsIGUsIGYsIC4uLiwgbl0gLT4gKChhLCBiLCBjLCAuLi4pIC0+IHgpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5wYXJ0aWFsXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdyZWV0ID0gKHNhbHV0YXRpb24sIHRpdGxlLCBmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PlxuICogICAgICAgIHNhbHV0YXRpb24gKyAnLCAnICsgdGl0bGUgKyAnICcgKyBmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZSArICchJztcbiAqXG4gKiAgICAgIHZhciBncmVldE1zSmFuZUpvbmVzID0gUi5wYXJ0aWFsUmlnaHQoZ3JlZXQsIFsnTXMuJywgJ0phbmUnLCAnSm9uZXMnXSk7XG4gKlxuICogICAgICBncmVldE1zSmFuZUpvbmVzKCdIZWxsbycpOyAvLz0+ICdIZWxsbywgTXMuIEphbmUgSm9uZXMhJ1xuICogQHN5bWIgUi5wYXJ0aWFsUmlnaHQoZiwgW2EsIGJdKShjLCBkKSA9IGYoYywgZCwgYSwgYilcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlUGFydGlhbEFwcGxpY2F0b3IoZmxpcChfY29uY2F0KSk7XG4iLCJ2YXIgZmlsdGVyID0gcmVxdWlyZSgnLi9maWx0ZXInKTtcbnZhciBqdXh0ID0gcmVxdWlyZSgnLi9qdXh0Jyk7XG52YXIgcmVqZWN0ID0gcmVxdWlyZSgnLi9yZWplY3QnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgcHJlZGljYXRlIGFuZCBhIGxpc3Qgb3Igb3RoZXIgYEZpbHRlcmFibGVgIG9iamVjdCBhbmQgcmV0dXJucyB0aGVcbiAqIHBhaXIgb2YgZmlsdGVyYWJsZSBvYmplY3RzIG9mIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudHMgd2hpY2ggZG8gYW5kIGRvIG5vdFxuICogc2F0aXNmeSwgdGhlIHByZWRpY2F0ZSwgcmVzcGVjdGl2ZWx5LiBGaWx0ZXJhYmxlIG9iamVjdHMgaW5jbHVkZSBwbGFpbiBvYmplY3RzIG9yIGFueSBvYmplY3RcbiAqIHRoYXQgaGFzIGEgZmlsdGVyIG1ldGhvZCBzdWNoIGFzIGBBcnJheWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS40XG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBGaWx0ZXJhYmxlIGYgPT4gKGEgLT4gQm9vbGVhbikgLT4gZiBhIC0+IFtmIGEsIGYgYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdG8gZGV0ZXJtaW5lIHdoaWNoIHNpZGUgdGhlIGVsZW1lbnQgYmVsb25ncyB0by5cbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGUgdGhlIGxpc3QgKG9yIG90aGVyIGZpbHRlcmFibGUpIHRvIHBhcnRpdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSwgY29udGFpbmluZyBmaXJzdCB0aGUgc3Vic2V0IG9mIGVsZW1lbnRzIHRoYXQgc2F0aXNmeSB0aGVcbiAqICAgICAgICAgcHJlZGljYXRlLCBhbmQgc2Vjb25kIHRoZSBzdWJzZXQgb2YgZWxlbWVudHMgdGhhdCBkbyBub3Qgc2F0aXNmeS5cbiAqIEBzZWUgUi5maWx0ZXIsIFIucmVqZWN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYXJ0aXRpb24oUi5jb250YWlucygncycpLCBbJ3NzcycsICd0dHQnLCAnZm9vJywgJ2JhcnMnXSk7XG4gKiAgICAgIC8vID0+IFsgWyAnc3NzJywgJ2JhcnMnIF0sICBbICd0dHQnLCAnZm9vJyBdIF1cbiAqXG4gKiAgICAgIFIucGFydGl0aW9uKFIuY29udGFpbnMoJ3MnKSwgeyBhOiAnc3NzJywgYjogJ3R0dCcsIGZvbzogJ2JhcnMnIH0pO1xuICogICAgICAvLyA9PiBbIHsgYTogJ3NzcycsIGZvbzogJ2JhcnMnIH0sIHsgYjogJ3R0dCcgfSAgXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGp1eHQoW2ZpbHRlciwgcmVqZWN0XSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHZhbHVlIGF0IGEgZ2l2ZW4gcGF0aC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBJZHggPSBTdHJpbmcgfCBJbnRcbiAqIEBzaWcgW0lkeF0gLT4ge2F9IC0+IGEgfCBVbmRlZmluZWRcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHJldHJpZXZlIHRoZSBuZXN0ZWQgcHJvcGVydHkgZnJvbS5cbiAqIEByZXR1cm4geyp9IFRoZSBkYXRhIGF0IGBwYXRoYC5cbiAqIEBzZWUgUi5wcm9wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYXRoKFsnYScsICdiJ10sIHthOiB7YjogMn19KTsgLy89PiAyXG4gKiAgICAgIFIucGF0aChbJ2EnLCAnYiddLCB7Yzoge2I6IDJ9fSk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwYXRoKHBhdGhzLCBvYmopIHtcbiAgdmFyIHZhbCA9IG9iajtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBwYXRocy5sZW5ndGgpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsID0gdmFsW3BhdGhzW2lkeF1dO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiB2YWw7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgZXF1YWxzID0gcmVxdWlyZSgnLi9lcXVhbHMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBuZXN0ZWQgcGF0aCBvbiBhbiBvYmplY3QgaGFzIGEgc3BlY2lmaWMgdmFsdWUsIGluXG4gKiBbYFIuZXF1YWxzYF0oI2VxdWFscykgdGVybXMuIE1vc3QgbGlrZWx5IHVzZWQgdG8gZmlsdGVyIGEgbGlzdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC43LjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHR5cGVkZWZuIElkeCA9IFN0cmluZyB8IEludFxuICogQHNpZyBbSWR4XSAtPiBhIC0+IHthfSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBuZXN0ZWQgcHJvcGVydHkgdG8gdXNlXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gY29tcGFyZSB0aGUgbmVzdGVkIHByb3BlcnR5IHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjaGVjayB0aGUgbmVzdGVkIHByb3BlcnR5IGluXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGVxdWFscyB0aGUgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSxcbiAqICAgICAgICAgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHVzZXIxID0geyBhZGRyZXNzOiB7IHppcENvZGU6IDkwMjEwIH0gfTtcbiAqICAgICAgdmFyIHVzZXIyID0geyBhZGRyZXNzOiB7IHppcENvZGU6IDU1NTU1IH0gfTtcbiAqICAgICAgdmFyIHVzZXIzID0geyBuYW1lOiAnQm9iJyB9O1xuICogICAgICB2YXIgdXNlcnMgPSBbIHVzZXIxLCB1c2VyMiwgdXNlcjMgXTtcbiAqICAgICAgdmFyIGlzRmFtb3VzID0gUi5wYXRoRXEoWydhZGRyZXNzJywgJ3ppcENvZGUnXSwgOTAyMTApO1xuICogICAgICBSLmZpbHRlcihpc0ZhbW91cywgdXNlcnMpOyAvLz0+IFsgdXNlcjEgXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gcGF0aEVxKF9wYXRoLCB2YWwsIG9iaikge1xuICByZXR1cm4gZXF1YWxzKHBhdGgoX3BhdGgsIG9iaiksIHZhbCk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgZGVmYXVsdFRvID0gcmVxdWlyZSgnLi9kZWZhdWx0VG8nKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cblxuLyoqXG4gKiBJZiB0aGUgZ2l2ZW4sIG5vbi1udWxsIG9iamVjdCBoYXMgYSB2YWx1ZSBhdCB0aGUgZ2l2ZW4gcGF0aCwgcmV0dXJucyB0aGVcbiAqIHZhbHVlIGF0IHRoYXQgcGF0aC4gT3RoZXJ3aXNlIHJldHVybnMgdGhlIHByb3ZpZGVkIGRlZmF1bHQgdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTguMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHR5cGVkZWZuIElkeCA9IFN0cmluZyB8IEludFxuICogQHNpZyBhIC0+IFtJZHhdIC0+IHthfSAtPiBhXG4gKiBAcGFyYW0geyp9IGQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBwIFRoZSBwYXRoIHRvIHVzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byByZXRyaWV2ZSB0aGUgbmVzdGVkIHByb3BlcnR5IGZyb20uXG4gKiBAcmV0dXJuIHsqfSBUaGUgZGF0YSBhdCBgcGF0aGAgb2YgdGhlIHN1cHBsaWVkIG9iamVjdCBvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnBhdGhPcignTi9BJywgWydhJywgJ2InXSwge2E6IHtiOiAyfX0pOyAvLz0+IDJcbiAqICAgICAgUi5wYXRoT3IoJ04vQScsIFsnYScsICdiJ10sIHtjOiB7YjogMn19KTsgLy89PiBcIk4vQVwiXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBwYXRoT3IoZCwgcCwgb2JqKSB7XG4gIHJldHVybiBkZWZhdWx0VG8oZCwgcGF0aChwLCBvYmopKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBwcm9wZXJ0eSBhdCBnaXZlbiBwYXRoIHNhdGlzZmllcyB0aGVcbiAqIGdpdmVuIHByZWRpY2F0ZTsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAdHlwZWRlZm4gSWR4ID0gU3RyaW5nIHwgSW50XG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFtJZHhdIC0+IHthfSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wUGF0aFxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIucHJvcFNhdGlzZmllcywgUi5wYXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wYXRoU2F0aXNmaWVzKHkgPT4geSA+IDAsIFsneCcsICd5J10sIHt4OiB7eTogMn19KTsgLy89PiB0cnVlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBwYXRoU2F0aXNmaWVzKHByZWQsIHByb3BQYXRoLCBvYmopIHtcbiAgcmV0dXJuIHByb3BQYXRoLmxlbmd0aCA+IDAgJiYgcHJlZChwYXRoKHByb3BQYXRoLCBvYmopKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBwYXJ0aWFsIGNvcHkgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgb25seSB0aGUga2V5cyBzcGVjaWZpZWQuIElmXG4gKiB0aGUga2V5IGRvZXMgbm90IGV4aXN0LCB0aGUgcHJvcGVydHkgaXMgaWdub3JlZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgW2tdIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7QXJyYXl9IG5hbWVzIGFuIGFycmF5IG9mIFN0cmluZyBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5IG9udG8gYSBuZXcgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY29weSBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCB3aXRoIG9ubHkgcHJvcGVydGllcyBmcm9tIGBuYW1lc2Agb24gaXQuXG4gKiBAc2VlIFIub21pdCwgUi5wcm9wc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGljayhbJ2EnLCAnZCddLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHthOiAxLCBkOiA0fVxuICogICAgICBSLnBpY2soWydhJywgJ2UnLCAnZiddLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHthOiAxfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcGljayhuYW1lcywgb2JqKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICBpZiAobmFtZXNbaWR4XSBpbiBvYmopIHtcbiAgICAgIHJlc3VsdFtuYW1lc1tpZHhdXSA9IG9ialtuYW1lc1tpZHhdXTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFNpbWlsYXIgdG8gYHBpY2tgIGV4Y2VwdCB0aGF0IHRoaXMgb25lIGluY2x1ZGVzIGEgYGtleTogdW5kZWZpbmVkYCBwYWlyIGZvclxuICogcHJvcGVydGllcyB0aGF0IGRvbid0IGV4aXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBba10gLT4ge2s6IHZ9IC0+IHtrOiB2fVxuICogQHBhcmFtIHtBcnJheX0gbmFtZXMgYW4gYXJyYXkgb2YgU3RyaW5nIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkgb250byBhIG5ldyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggb25seSBwcm9wZXJ0aWVzIGZyb20gYG5hbWVzYCBvbiBpdC5cbiAqIEBzZWUgUi5waWNrXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5waWNrQWxsKFsnYScsICdkJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2E6IDEsIGQ6IDR9XG4gKiAgICAgIFIucGlja0FsbChbJ2EnLCAnZScsICdmJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2E6IDEsIGU6IHVuZGVmaW5lZCwgZjogdW5kZWZpbmVkfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcGlja0FsbChuYW1lcywgb2JqKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICB2YXIgbmFtZSA9IG5hbWVzW2lkeF07XG4gICAgcmVzdWx0W25hbWVdID0gb2JqW25hbWVdO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgcGFydGlhbCBjb3B5IG9mIGFuIG9iamVjdCBjb250YWluaW5nIG9ubHkgdGhlIGtleXMgdGhhdCBzYXRpc2Z5XG4gKiB0aGUgc3VwcGxpZWQgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAodiwgayAtPiBCb29sZWFuKSAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBhIGtleVxuICogICAgICAgIHNob3VsZCBiZSBpbmNsdWRlZCBvbiB0aGUgb3V0cHV0IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggb25seSBwcm9wZXJ0aWVzIHRoYXQgc2F0aXNmeSBgcHJlZGBcbiAqICAgICAgICAgb24gaXQuXG4gKiBAc2VlIFIucGljaywgUi5maWx0ZXJcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNVcHBlckNhc2UgPSAodmFsLCBrZXkpID0+IGtleS50b1VwcGVyQ2FzZSgpID09PSBrZXk7XG4gKiAgICAgIFIucGlja0J5KGlzVXBwZXJDYXNlLCB7YTogMSwgYjogMiwgQTogMywgQjogNH0pOyAvLz0+IHtBOiAzLCBCOiA0fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcGlja0J5KHRlc3QsIG9iaikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKHRlc3Qob2JqW3Byb3BdLCBwcm9wLCBvYmopKSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcml0eScpO1xudmFyIF9waXBlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcGlwZScpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJy4vcmVkdWNlJyk7XG52YXIgdGFpbCA9IHJlcXVpcmUoJy4vdGFpbCcpO1xuXG5cbi8qKlxuICogUGVyZm9ybXMgbGVmdC10by1yaWdodCBmdW5jdGlvbiBjb21wb3NpdGlvbi4gVGhlIGxlZnRtb3N0IGZ1bmN0aW9uIG1heSBoYXZlXG4gKiBhbnkgYXJpdHk7IHRoZSByZW1haW5pbmcgZnVuY3Rpb25zIG11c3QgYmUgdW5hcnkuXG4gKlxuICogSW4gc29tZSBsaWJyYXJpZXMgdGhpcyBmdW5jdGlvbiBpcyBuYW1lZCBgc2VxdWVuY2VgLlxuICpcbiAqICoqTm90ZToqKiBUaGUgcmVzdWx0IG9mIHBpcGUgaXMgbm90IGF1dG9tYXRpY2FsbHkgY3VycmllZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKChhLCBiLCAuLi4sIG4pIC0+IG8pLCAobyAtPiBwKSwgLi4uLCAoeCAtPiB5KSwgKHkgLT4geikpIC0+ICgoYSwgYiwgLi4uLCBuKSAtPiB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3Rpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5jb21wb3NlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGYgPSBSLnBpcGUoTWF0aC5wb3csIFIubmVnYXRlLCBSLmluYyk7XG4gKlxuICogICAgICBmKDMsIDQpOyAvLyAtKDNeNCkgKyAxXG4gKiBAc3ltYiBSLnBpcGUoZiwgZywgaCkoYSwgYikgPSBoKGcoZihhLCBiKSkpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3BpcGUgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50Jyk7XG4gIH1cbiAgcmV0dXJuIF9hcml0eShhcmd1bWVudHNbMF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlZHVjZShfcGlwZSwgYXJndW1lbnRzWzBdLCB0YWlsKGFyZ3VtZW50cykpKTtcbn07XG4iLCJ2YXIgY29tcG9zZUsgPSByZXF1aXJlKCcuL2NvbXBvc2VLJyk7XG52YXIgcmV2ZXJzZSA9IHJlcXVpcmUoJy4vcmV2ZXJzZScpO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGxlZnQtdG8tcmlnaHQgS2xlaXNsaSBjb21wb3NpdGlvbiBvZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zLFxuICogZWFjaCBvZiB3aGljaCBtdXN0IHJldHVybiBhIHZhbHVlIG9mIGEgdHlwZSBzdXBwb3J0ZWQgYnkgW2BjaGFpbmBdKCNjaGFpbikuXG4gKlxuICogYFIucGlwZUsoZiwgZywgaClgIGlzIGVxdWl2YWxlbnQgdG8gYFIucGlwZShSLmNoYWluKGYpLCBSLmNoYWluKGcpLCBSLmNoYWluKGgpKWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIENoYWluIG0gPT4gKChhIC0+IG0gYiksIChiIC0+IG0gYyksIC4uLiwgKHkgLT4gbSB6KSkgLT4gKGEgLT4gbSB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLmNvbXBvc2VLXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gIHBhcnNlSnNvbiA6OiBTdHJpbmcgLT4gTWF5YmUgKlxuICogICAgICAvLyAgZ2V0IDo6IFN0cmluZyAtPiBPYmplY3QgLT4gTWF5YmUgKlxuICpcbiAqICAgICAgLy8gIGdldFN0YXRlQ29kZSA6OiBNYXliZSBTdHJpbmcgLT4gTWF5YmUgU3RyaW5nXG4gKiAgICAgIHZhciBnZXRTdGF0ZUNvZGUgPSBSLnBpcGVLKFxuICogICAgICAgIHBhcnNlSnNvbixcbiAqICAgICAgICBnZXQoJ3VzZXInKSxcbiAqICAgICAgICBnZXQoJ2FkZHJlc3MnKSxcbiAqICAgICAgICBnZXQoJ3N0YXRlJyksXG4gKiAgICAgICAgUi5jb21wb3NlKE1heWJlLm9mLCBSLnRvVXBwZXIpXG4gKiAgICAgICk7XG4gKlxuICogICAgICBnZXRTdGF0ZUNvZGUoJ3tcInVzZXJcIjp7XCJhZGRyZXNzXCI6e1wic3RhdGVcIjpcIm55XCJ9fX0nKTtcbiAqICAgICAgLy89PiBKdXN0KCdOWScpXG4gKiAgICAgIGdldFN0YXRlQ29kZSgnW0ludmFsaWQgSlNPTl0nKTtcbiAqICAgICAgLy89PiBOb3RoaW5nKClcbiAqIEBzeW1iIFIucGlwZUsoZiwgZywgaCkoYSkgPSBSLmNoYWluKGgsIFIuY2hhaW4oZywgZihhKSkpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGlwZUsoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwaXBlSyByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQnKTtcbiAgfVxuICByZXR1cm4gY29tcG9zZUsuYXBwbHkodGhpcywgcmV2ZXJzZShhcmd1bWVudHMpKTtcbn07XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfcGlwZVAgPSByZXF1aXJlKCcuL2ludGVybmFsL19waXBlUCcpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJy4vcmVkdWNlJyk7XG52YXIgdGFpbCA9IHJlcXVpcmUoJy4vdGFpbCcpO1xuXG5cbi8qKlxuICogUGVyZm9ybXMgbGVmdC10by1yaWdodCBjb21wb3NpdGlvbiBvZiBvbmUgb3IgbW9yZSBQcm9taXNlLXJldHVybmluZ1xuICogZnVuY3Rpb25zLiBUaGUgbGVmdG1vc3QgZnVuY3Rpb24gbWF5IGhhdmUgYW55IGFyaXR5OyB0aGUgcmVtYWluaW5nIGZ1bmN0aW9uc1xuICogbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKChhIC0+IFByb21pc2UgYiksIChiIC0+IFByb21pc2UgYyksIC4uLiwgKHkgLT4gUHJvbWlzZSB6KSkgLT4gKGEgLT4gUHJvbWlzZSB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3Rpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5jb21wb3NlUFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIC8vICBmb2xsb3dlcnNGb3JVc2VyIDo6IFN0cmluZyAtPiBQcm9taXNlIFtVc2VyXVxuICogICAgICB2YXIgZm9sbG93ZXJzRm9yVXNlciA9IFIucGlwZVAoZGIuZ2V0VXNlckJ5SWQsIGRiLmdldEZvbGxvd2Vycyk7XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGlwZVAoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwaXBlUCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQnKTtcbiAgfVxuICByZXR1cm4gX2FyaXR5KGFyZ3VtZW50c1swXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcmVkdWNlKF9waXBlUCwgYXJndW1lbnRzWzBdLCB0YWlsKGFyZ3VtZW50cykpKTtcbn07XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgcHJvcCA9IHJlcXVpcmUoJy4vcHJvcCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGJ5IHBsdWNraW5nIHRoZSBzYW1lIG5hbWVkIHByb3BlcnR5IG9mZiBhbGwgb2JqZWN0cyBpblxuICogdGhlIGxpc3Qgc3VwcGxpZWQuXG4gKlxuICogYHBsdWNrYCB3aWxsIHdvcmsgb25cbiAqIGFueSBbZnVuY3Rvcl0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNmdW5jdG9yKSBpblxuICogYWRkaXRpb24gdG8gYXJyYXlzLCBhcyBpdCBpcyBlcXVpdmFsZW50IHRvIGBSLm1hcChSLnByb3AoayksIGYpYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIEZ1bmN0b3IgZiA9PiBrIC0+IGYge2s6IHZ9IC0+IGYgdlxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXkgVGhlIGtleSBuYW1lIHRvIHBsdWNrIG9mZiBvZiBlYWNoIG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGYgVGhlIGFycmF5IG9yIGZ1bmN0b3IgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3Qgb2YgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5LlxuICogQHNlZSBSLnByb3BzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wbHVjaygnYScpKFt7YTogMX0sIHthOiAyfV0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnBsdWNrKDApKFtbMSwgMl0sIFszLCA0XV0pOyAgIC8vPT4gWzEsIDNdXG4gKiAgICAgIFIucGx1Y2soJ3ZhbCcsIHthOiB7dmFsOiAzfSwgYjoge3ZhbDogNX19KTsgLy89PiB7YTogMywgYjogNX1cbiAqIEBzeW1iIFIucGx1Y2soJ3gnLCBbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogNH0sIHt4OiA1LCB5OiA2fV0pID0gWzEsIDMsIDVdXG4gKiBAc3ltYiBSLnBsdWNrKDAsIFtbMSwgMl0sIFszLCA0XSwgWzUsIDZdXSkgPSBbMSwgMywgNV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHBsdWNrKHAsIGxpc3QpIHtcbiAgcmV0dXJuIG1hcChwcm9wKHApLCBsaXN0KTtcbn0pO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3Qgd2l0aCB0aGUgZ2l2ZW4gZWxlbWVudCBhdCB0aGUgZnJvbnQsIGZvbGxvd2VkIGJ5IHRoZVxuICogY29udGVudHMgb2YgdGhlIGxpc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7Kn0gZWwgVGhlIGl0ZW0gdG8gYWRkIHRvIHRoZSBoZWFkIG9mIHRoZSBvdXRwdXQgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGFkZCB0byB0aGUgdGFpbCBvZiB0aGUgb3V0cHV0IGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgYXJyYXkuXG4gKiBAc2VlIFIuYXBwZW5kXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcmVwZW5kKCdmZWUnLCBbJ2ZpJywgJ2ZvJywgJ2Z1bSddKTsgLy89PiBbJ2ZlZScsICdmaScsICdmbycsICdmdW0nXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcHJlcGVuZChlbCwgbGlzdCkge1xuICByZXR1cm4gX2NvbmNhdChbZWxdLCBsaXN0KTtcbn0pO1xuIiwidmFyIG11bHRpcGx5ID0gcmVxdWlyZSgnLi9tdWx0aXBseScpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJy4vcmVkdWNlJyk7XG5cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHRvZ2V0aGVyIGFsbCB0aGUgZWxlbWVudHMgb2YgYSBsaXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IEFuIGFycmF5IG9mIG51bWJlcnNcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHByb2R1Y3Qgb2YgYWxsIHRoZSBudW1iZXJzIGluIHRoZSBsaXN0LlxuICogQHNlZSBSLnJlZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvZHVjdChbMiw0LDYsOCwxMDAsMV0pOyAvLz0+IDM4NDAwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlKG11bHRpcGx5LCAxKTtcbiIsInZhciBfbWFwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fbWFwJyk7XG52YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG52YXIgcGlja0FsbCA9IHJlcXVpcmUoJy4vcGlja0FsbCcpO1xudmFyIHVzZVdpdGggPSByZXF1aXJlKCcuL3VzZVdpdGgnKTtcblxuXG4vKipcbiAqIFJlYXNvbmFibGUgYW5hbG9nIHRvIFNRTCBgc2VsZWN0YCBzdGF0ZW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgW2tdIC0+IFt7azogdn1dIC0+IFt7azogdn1dXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gcHJvamVjdFxuICogQHBhcmFtIHtBcnJheX0gb2JqcyBUaGUgb2JqZWN0cyB0byBxdWVyeVxuICogQHJldHVybiB7QXJyYXl9IEFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBqdXN0IHRoZSBgcHJvcHNgIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFiYnkgPSB7bmFtZTogJ0FiYnknLCBhZ2U6IDcsIGhhaXI6ICdibG9uZCcsIGdyYWRlOiAyfTtcbiAqICAgICAgdmFyIGZyZWQgPSB7bmFtZTogJ0ZyZWQnLCBhZ2U6IDEyLCBoYWlyOiAnYnJvd24nLCBncmFkZTogN307XG4gKiAgICAgIHZhciBraWRzID0gW2FiYnksIGZyZWRdO1xuICogICAgICBSLnByb2plY3QoWyduYW1lJywgJ2dyYWRlJ10sIGtpZHMpOyAvLz0+IFt7bmFtZTogJ0FiYnknLCBncmFkZTogMn0sIHtuYW1lOiAnRnJlZCcsIGdyYWRlOiA3fV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB1c2VXaXRoKF9tYXAsIFtwaWNrQWxsLCBpZGVudGl0eV0pOyAvLyBwYXNzaW5nIGBpZGVudGl0eWAgZ2l2ZXMgY29ycmVjdCBhcml0eVxuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdoZW4gc3VwcGxpZWQgYW4gb2JqZWN0IHJldHVybnMgdGhlIGluZGljYXRlZFxuICogcHJvcGVydHkgb2YgdGhhdCBvYmplY3QsIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgcyAtPiB7czogYX0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHBhcmFtIHtTdHJpbmd9IHAgVGhlIHByb3BlcnR5IG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeVxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIGF0IGBvYmoucGAuXG4gKiBAc2VlIFIucGF0aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvcCgneCcsIHt4OiAxMDB9KTsgLy89PiAxMDBcbiAqICAgICAgUi5wcm9wKCd4Jywge30pOyAvLz0+IHVuZGVmaW5lZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcHJvcChwLCBvYmopIHsgcmV0dXJuIG9ialtwXTsgfSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBwcm9wZXJ0eSBpcyBlcXVhbCwgaW5cbiAqIFtgUi5lcXVhbHNgXSgjZXF1YWxzKSB0ZXJtcywgdG8gdGhlIGdpdmVuIHZhbHVlOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBTdHJpbmcgLT4gYSAtPiBPYmplY3QgLT4gQm9vbGVhblxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5lcXVhbHMsIFIucHJvcFNhdGlzZmllc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhYmJ5ID0ge25hbWU6ICdBYmJ5JywgYWdlOiA3LCBoYWlyOiAnYmxvbmQnfTtcbiAqICAgICAgdmFyIGZyZWQgPSB7bmFtZTogJ0ZyZWQnLCBhZ2U6IDEyLCBoYWlyOiAnYnJvd24nfTtcbiAqICAgICAgdmFyIHJ1c3R5ID0ge25hbWU6ICdSdXN0eScsIGFnZTogMTAsIGhhaXI6ICdicm93bid9O1xuICogICAgICB2YXIgYWxvaXMgPSB7bmFtZTogJ0Fsb2lzJywgYWdlOiAxNSwgZGlzcG9zaXRpb246ICdzdXJseSd9O1xuICogICAgICB2YXIga2lkcyA9IFthYmJ5LCBmcmVkLCBydXN0eSwgYWxvaXNdO1xuICogICAgICB2YXIgaGFzQnJvd25IYWlyID0gUi5wcm9wRXEoJ2hhaXInLCAnYnJvd24nKTtcbiAqICAgICAgUi5maWx0ZXIoaGFzQnJvd25IYWlyLCBraWRzKTsgLy89PiBbZnJlZCwgcnVzdHldXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBwcm9wRXEobmFtZSwgdmFsLCBvYmopIHtcbiAgcmV0dXJuIGVxdWFscyh2YWwsIG9ialtuYW1lXSk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgaXMgPSByZXF1aXJlKCcuL2lzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBwcm9wZXJ0eSBpcyBvZiB0aGUgZ2l2ZW4gdHlwZTtcbiAqIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnIFR5cGUgLT4gU3RyaW5nIC0+IE9iamVjdCAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIuaXMsIFIucHJvcFNhdGlzZmllc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvcElzKE51bWJlciwgJ3gnLCB7eDogMSwgeTogMn0pOyAgLy89PiB0cnVlXG4gKiAgICAgIFIucHJvcElzKE51bWJlciwgJ3gnLCB7eDogJ2Zvbyd9KTsgICAgLy89PiBmYWxzZVxuICogICAgICBSLnByb3BJcyhOdW1iZXIsICd4Jywge30pOyAgICAgICAgICAgIC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHByb3BJcyh0eXBlLCBuYW1lLCBvYmopIHtcbiAgcmV0dXJuIGlzKHR5cGUsIG9ialtuYW1lXSk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2hhcycpO1xuXG5cbi8qKlxuICogSWYgdGhlIGdpdmVuLCBub24tbnVsbCBvYmplY3QgaGFzIGFuIG93biBwcm9wZXJ0eSB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZSxcbiAqIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoYXQgcHJvcGVydHkuIE90aGVyd2lzZSByZXR1cm5zIHRoZSBwcm92aWRlZCBkZWZhdWx0XG4gKiB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgYSAtPiBTdHJpbmcgLT4gT2JqZWN0IC0+IGFcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHBhcmFtIHtTdHJpbmd9IHAgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHJldHVybi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBvZiBnaXZlbiBwcm9wZXJ0eSBvZiB0aGUgc3VwcGxpZWQgb2JqZWN0IG9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhbGljZSA9IHtcbiAqICAgICAgICBuYW1lOiAnQUxJQ0UnLFxuICogICAgICAgIGFnZTogMTAxXG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBmYXZvcml0ZSA9IFIucHJvcCgnZmF2b3JpdGVMaWJyYXJ5Jyk7XG4gKiAgICAgIHZhciBmYXZvcml0ZVdpdGhEZWZhdWx0ID0gUi5wcm9wT3IoJ1JhbWRhJywgJ2Zhdm9yaXRlTGlicmFyeScpO1xuICpcbiAqICAgICAgZmF2b3JpdGUoYWxpY2UpOyAgLy89PiB1bmRlZmluZWRcbiAqICAgICAgZmF2b3JpdGVXaXRoRGVmYXVsdChhbGljZSk7ICAvLz0+ICdSYW1kYSdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHByb3BPcih2YWwsIHAsIG9iaikge1xuICByZXR1cm4gKG9iaiAhPSBudWxsICYmIF9oYXMocCwgb2JqKSkgPyBvYmpbcF0gOiB2YWw7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIG9iamVjdCBwcm9wZXJ0eSBzYXRpc2ZpZXMgdGhlIGdpdmVuXG4gKiBwcmVkaWNhdGU7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBTdHJpbmcgLT4ge1N0cmluZzogYX0gLT4gQm9vbGVhblxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLnByb3BFcSwgUi5wcm9wSXNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3BTYXRpc2ZpZXMoeCA9PiB4ID4gMCwgJ3gnLCB7eDogMSwgeTogMn0pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHByb3BTYXRpc2ZpZXMocHJlZCwgbmFtZSwgb2JqKSB7XG4gIHJldHVybiBwcmVkKG9ialtuYW1lXSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBBY3RzIGFzIG11bHRpcGxlIGBwcm9wYDogYXJyYXkgb2Yga2V5cyBpbiwgYXJyYXkgb2YgdmFsdWVzIG91dC4gUHJlc2VydmVzXG4gKiBvcmRlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgW2tdIC0+IHtrOiB2fSAtPiBbdl1cbiAqIEBwYXJhbSB7QXJyYXl9IHBzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBmZXRjaFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHF1ZXJ5XG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzIG9yIHBhcnRpYWxseSBhcHBsaWVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvcHMoWyd4JywgJ3knXSwge3g6IDEsIHk6IDJ9KTsgLy89PiBbMSwgMl1cbiAqICAgICAgUi5wcm9wcyhbJ2MnLCAnYScsICdiJ10sIHtiOiAyLCBhOiAxfSk7IC8vPT4gW3VuZGVmaW5lZCwgMSwgMl1cbiAqXG4gKiAgICAgIHZhciBmdWxsTmFtZSA9IFIuY29tcG9zZShSLmpvaW4oJyAnKSwgUi5wcm9wcyhbJ2ZpcnN0JywgJ2xhc3QnXSkpO1xuICogICAgICBmdWxsTmFtZSh7bGFzdDogJ0J1bGxldC1Ub290aCcsIGFnZTogMzMsIGZpcnN0OiAnVG9ueSd9KTsgLy89PiAnVG9ueSBCdWxsZXQtVG9vdGgnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwcm9wcyhwcywgb2JqKSB7XG4gIHZhciBsZW4gPSBwcy5sZW5ndGg7XG4gIHZhciBvdXQgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIG91dFtpZHhdID0gb2JqW3BzW2lkeF1dO1xuICAgIGlkeCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaXNOdW1iZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc051bWJlcicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2YgbnVtYmVycyBmcm9tIGBmcm9tYCAoaW5jbHVzaXZlKSB0byBgdG9gIChleGNsdXNpdmUpLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBbTnVtYmVyXVxuICogQHBhcmFtIHtOdW1iZXJ9IGZyb20gVGhlIGZpcnN0IG51bWJlciBpbiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0byBPbmUgbW9yZSB0aGFuIHRoZSBsYXN0IG51bWJlciBpbiB0aGUgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiBudW1iZXJzIGluIHR0aGUgc2V0IGBbYSwgYilgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucmFuZ2UoMSwgNSk7ICAgIC8vPT4gWzEsIDIsIDMsIDRdXG4gKiAgICAgIFIucmFuZ2UoNTAsIDUzKTsgIC8vPT4gWzUwLCA1MSwgNTJdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiByYW5nZShmcm9tLCB0bykge1xuICBpZiAoIShfaXNOdW1iZXIoZnJvbSkgJiYgX2lzTnVtYmVyKHRvKSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb3RoIGFyZ3VtZW50cyB0byByYW5nZSBtdXN0IGJlIG51bWJlcnMnKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBuID0gZnJvbTtcbiAgd2hpbGUgKG4gPCB0bykge1xuICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgIG4gKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgbGlzdCwgc3VjY2Vzc2l2ZWx5IGNhbGxpbmdcbiAqIHRoZSBpdGVyYXRvciBmdW5jdGlvbiBhbmQgcGFzc2luZyBpdCBhbiBhY2N1bXVsYXRvciB2YWx1ZSBhbmQgdGhlIGN1cnJlbnRcbiAqIHZhbHVlIGZyb20gdGhlIGFycmF5LCBhbmQgdGhlbiBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIG5leHQgY2FsbC5cbiAqXG4gKiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gcmVjZWl2ZXMgdHdvIHZhbHVlczogKihhY2MsIHZhbHVlKSouIEl0IG1heSB1c2VcbiAqIFtgUi5yZWR1Y2VkYF0oI3JlZHVjZWQpIHRvIHNob3J0Y3V0IHRoZSBpdGVyYXRpb24uXG4gKlxuICogVGhlIGFyZ3VtZW50cycgb3JkZXIgb2YgW2ByZWR1Y2VSaWdodGBdKCNyZWR1Y2VSaWdodCkncyBpdGVyYXRvciBmdW5jdGlvblxuICogaXMgKih2YWx1ZSwgYWNjKSouXG4gKlxuICogTm90ZTogYFIucmVkdWNlYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2VcbiAqIGFycmF5cyksIHVubGlrZSB0aGUgbmF0aXZlIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2QuIEZvciBtb3JlIGRldGFpbHNcbiAqIG9uIHRoaXMgYmVoYXZpb3IsIHNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZSNEZXNjcmlwdGlvblxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGByZWR1Y2VgIG1ldGhvZCBvZiB0aGUgdGhpcmQgYXJndW1lbnQsIGlmIHByZXNlbnQuIFdoZW5cbiAqIGRvaW5nIHNvLCBpdCBpcyB1cCB0byB0aGUgdXNlciB0byBoYW5kbGUgdGhlIFtgUi5yZWR1Y2VkYF0oI3JlZHVjZWQpXG4gKiBzaG9ydGN1dGluZywgYXMgdGhpcyBpcyBub3QgaW1wbGVtZW50ZWQgYnkgYHJlZHVjZWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGFjY3VtdWxhdG9yIGFuZCB0aGVcbiAqICAgICAgICBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlZCwgUi5hZGRJbmRleCwgUi5yZWR1Y2VSaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucmVkdWNlKFIuc3VidHJhY3QsIDAsIFsxLCAyLCAzLCA0XSkgLy8gPT4gKCgoKDAgLSAxKSAtIDIpIC0gMykgLSA0KSA9IC0xMFxuICogICAgICAgICAgICAgICAgLSAgICAgICAgICAgICAgIC0xMFxuICogICAgICAgICAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgICAgICAgICAgLSAgIDQgICAgICAgICAgIC02ICAgNFxuICogICAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgICAgICAtICAgMyAgID09PiAgICAgLTMgICAzXG4gKiAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgICAgLSAgIDIgICAgICAgICAgIC0xICAgMlxuICogICAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgICAgMCAgIDEgICAgICAgICAgICAwICAgMVxuICpcbiAqIEBzeW1iIFIucmVkdWNlKGYsIGEsIFtiLCBjLCBkXSkgPSBmKGYoZihhLCBiKSwgYyksIGQpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhfcmVkdWNlKTtcbiIsInZhciBfY3VycnlOID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnlOJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgX3hyZWR1Y2VCeSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hyZWR1Y2VCeScpO1xuXG5cbi8qKlxuICogR3JvdXBzIHRoZSBlbGVtZW50cyBvZiB0aGUgbGlzdCBhY2NvcmRpbmcgdG8gdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiB0aGUgU3RyaW5nLXJldHVybmluZyBmdW5jdGlvbiBga2V5Rm5gIG9uIGVhY2ggZWxlbWVudCBhbmQgcmVkdWNlcyB0aGUgZWxlbWVudHNcbiAqIG9mIGVhY2ggZ3JvdXAgdG8gYSBzaW5nbGUgdmFsdWUgdmlhIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGB2YWx1ZUZuYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSBhIG1vcmUgZ2VuZXJhbCBbYGdyb3VwQnlgXSgjZ3JvdXBCeSkgZnVuY3Rpb24uXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIwLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnICgoYSwgYikgLT4gYSkgLT4gYSAtPiAoYiAtPiBTdHJpbmcpIC0+IFtiXSAtPiB7U3RyaW5nOiBhfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWVGbiBUaGUgZnVuY3Rpb24gdGhhdCByZWR1Y2VzIHRoZSBlbGVtZW50cyBvZiBlYWNoIGdyb3VwIHRvIGEgc2luZ2xlXG4gKiAgICAgICAgdmFsdWUuIFJlY2VpdmVzIHR3byB2YWx1ZXMsIGFjY3VtdWxhdG9yIGZvciBhIHBhcnRpY3VsYXIgZ3JvdXAgYW5kIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgKGluaXRpYWwpIGFjY3VtdWxhdG9yIHZhbHVlIGZvciBlYWNoIGdyb3VwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5Rm4gVGhlIGZ1bmN0aW9uIHRoYXQgbWFwcyB0aGUgbGlzdCdzIGVsZW1lbnQgaW50byBhIGtleS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGdyb3VwLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgb3V0cHV0IG9mIGBrZXlGbmAgZm9yIGtleXMsIG1hcHBlZCB0byB0aGUgb3V0cHV0IG9mXG4gKiAgICAgICAgIGB2YWx1ZUZuYCBmb3IgZWxlbWVudHMgd2hpY2ggcHJvZHVjZWQgdGhhdCBrZXkgd2hlbiBwYXNzZWQgdG8gYGtleUZuYC5cbiAqIEBzZWUgUi5ncm91cEJ5LCBSLnJlZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciByZWR1Y2VUb05hbWVzQnkgPSBSLnJlZHVjZUJ5KChhY2MsIHN0dWRlbnQpID0+IGFjYy5jb25jYXQoc3R1ZGVudC5uYW1lKSwgW10pO1xuICogICAgICB2YXIgbmFtZXNCeUdyYWRlID0gcmVkdWNlVG9OYW1lc0J5KGZ1bmN0aW9uKHN0dWRlbnQpIHtcbiAqICAgICAgICB2YXIgc2NvcmUgPSBzdHVkZW50LnNjb3JlO1xuICogICAgICAgIHJldHVybiBzY29yZSA8IDY1ID8gJ0YnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA3MCA/ICdEJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgODAgPyAnQycgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDkwID8gJ0InIDogJ0EnO1xuICogICAgICB9KTtcbiAqICAgICAgdmFyIHN0dWRlbnRzID0gW3tuYW1lOiAnTHVjeScsIHNjb3JlOiA5Mn0sXG4gKiAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0RyZXcnLCBzY29yZTogODV9LFxuICogICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXG4gKiAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0JhcnQnLCBzY29yZTogNjJ9XTtcbiAqICAgICAgbmFtZXNCeUdyYWRlKHN0dWRlbnRzKTtcbiAqICAgICAgLy8ge1xuICogICAgICAvLyAgICdBJzogWydMdWN5J10sXG4gKiAgICAgIC8vICAgJ0InOiBbJ0RyZXcnXVxuICogICAgICAvLyAgIC8vIC4uLixcbiAqICAgICAgLy8gICAnRic6IFsnQmFydCddXG4gKiAgICAgIC8vIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnlOKDQsIFtdLCBfZGlzcGF0Y2hhYmxlKFtdLCBfeHJlZHVjZUJ5LFxuICBmdW5jdGlvbiByZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIGxpc3QpIHtcbiAgICByZXR1cm4gX3JlZHVjZShmdW5jdGlvbihhY2MsIGVsdCkge1xuICAgICAgdmFyIGtleSA9IGtleUZuKGVsdCk7XG4gICAgICBhY2Nba2V5XSA9IHZhbHVlRm4oX2hhcyhrZXksIGFjYykgPyBhY2Nba2V5XSA6IHZhbHVlQWNjLCBlbHQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSwgbGlzdCk7XG4gIH0pKTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nXG4gKiB0aGUgaXRlcmF0b3IgZnVuY3Rpb24gYW5kIHBhc3NpbmcgaXQgYW4gYWNjdW11bGF0b3IgdmFsdWUgYW5kIHRoZSBjdXJyZW50XG4gKiB2YWx1ZSBmcm9tIHRoZSBhcnJheSwgYW5kIHRoZW4gcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IGNhbGwuXG4gKlxuICogU2ltaWxhciB0byBbYHJlZHVjZWBdKCNyZWR1Y2UpLCBleGNlcHQgbW92ZXMgdGhyb3VnaCB0aGUgaW5wdXQgbGlzdCBmcm9tIHRoZVxuICogcmlnaHQgdG8gdGhlIGxlZnQuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byB2YWx1ZXM6ICoodmFsdWUsIGFjYykqLCB3aGlsZSB0aGUgYXJndW1lbnRzJ1xuICogb3JkZXIgb2YgYHJlZHVjZWAncyBpdGVyYXRvciBmdW5jdGlvbiBpcyAqKGFjYywgdmFsdWUpKi5cbiAqXG4gKiBOb3RlOiBgUi5yZWR1Y2VSaWdodGAgZG9lcyBub3Qgc2tpcCBkZWxldGVkIG9yIHVuYXNzaWduZWQgaW5kaWNlcyAoc3BhcnNlXG4gKiBhcnJheXMpLCB1bmxpa2UgdGhlIG5hdGl2ZSBgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0YCBtZXRob2QuIEZvciBtb3JlIGRldGFpbHNcbiAqIG9uIHRoaXMgYmVoYXZpb3IsIHNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZVJpZ2h0I0Rlc2NyaXB0aW9uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSwgYiAtPiBiKSAtPiBiIC0+IFthXSAtPiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uIFJlY2VpdmVzIHR3byB2YWx1ZXMsIHRoZSBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqICAgICAgICBhbmQgdGhlIGFjY3VtdWxhdG9yLlxuICogQHBhcmFtIHsqfSBhY2MgVGhlIGFjY3VtdWxhdG9yIHZhbHVlLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHsqfSBUaGUgZmluYWwsIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHNlZSBSLnJlZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucmVkdWNlUmlnaHQoUi5zdWJ0cmFjdCwgMCwgWzEsIDIsIDMsIDRdKSAvLyA9PiAoMSAtICgyIC0gKDMgLSAoNCAtIDApKSkpID0gLTJcbiAqICAgICAgICAgIC0gICAgICAgICAgICAgICAtMlxuICogICAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgICAgMSAgIC0gICAgICAgICAgICAxICAgM1xuICogICAgICAgICAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgICAgIDIgICAtICAgICA9PT4gICAgMiAgLTFcbiAqICAgICAgICAgICAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgICAgICAgMyAgIC0gICAgICAgICAgICAzICAgNFxuICogICAgICAgICAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgICAgICAgICAgNCAgIDAgICAgICAgICAgICA0ICAgMFxuICpcbiAqIEBzeW1iIFIucmVkdWNlUmlnaHQoZiwgYSwgW2IsIGMsIGRdKSA9IGYoYiwgZihjLCBmKGQsIGEpKSlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGZuLCBhY2MsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgYWNjID0gZm4obGlzdFtpZHhdLCBhY2MpO1xuICAgIGlkeCAtPSAxO1xuICB9XG4gIHJldHVybiBhY2M7XG59KTtcbiIsInZhciBfY3VycnlOID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnlOJyk7XG52YXIgX3JlZHVjZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3JlZHVjZScpO1xudmFyIF9yZWR1Y2VkID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlZCcpO1xuXG5cbi8qKlxuICogTGlrZSBbYHJlZHVjZWBdKCNyZWR1Y2UpLCBgcmVkdWNlV2hpbGVgIHJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmdcbiAqIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nIHRoZSBpdGVyYXRvciBmdW5jdGlvbi4gYHJlZHVjZVdoaWxlYFxuICogYWxzbyB0YWtlcyBhIHByZWRpY2F0ZSB0aGF0IGlzIGV2YWx1YXRlZCBiZWZvcmUgZWFjaCBzdGVwLiBJZiB0aGUgcHJlZGljYXRlXG4gKiByZXR1cm5zIGBmYWxzZWAsIGl0IFwic2hvcnQtY2lyY3VpdHNcIiB0aGUgaXRlcmF0aW9uIGFuZCByZXR1cm5zIHRoZSBjdXJyZW50XG4gKiB2YWx1ZSBvZiB0aGUgYWNjdW11bGF0b3IuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjIuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKChhLCBiKSAtPiBCb29sZWFuKSAtPiAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgVGhlIHByZWRpY2F0ZS4gSXQgaXMgcGFzc2VkIHRoZSBhY2N1bXVsYXRvciBhbmQgdGhlXG4gKiAgICAgICAgY3VycmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLiBSZWNlaXZlcyB0d28gdmFsdWVzLCB0aGVcbiAqICAgICAgICBhY2N1bXVsYXRvciBhbmQgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Kn0gYSBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlLCBSLnJlZHVjZWRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNPZGQgPSAoYWNjLCB4KSA9PiB4ICUgMiA9PT0gMTtcbiAqICAgICAgdmFyIHhzID0gWzEsIDMsIDUsIDYwLCA3NzcsIDgwMF07XG4gKiAgICAgIFIucmVkdWNlV2hpbGUoaXNPZGQsIFIuYWRkLCAwLCB4cyk7IC8vPT4gOVxuICpcbiAqICAgICAgdmFyIHlzID0gWzIsIDQsIDZdXG4gKiAgICAgIFIucmVkdWNlV2hpbGUoaXNPZGQsIFIuYWRkLCAxMTEsIHlzKTsgLy89PiAxMTFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnlOKDQsIFtdLCBmdW5jdGlvbiBfcmVkdWNlV2hpbGUocHJlZCwgZm4sIGEsIGxpc3QpIHtcbiAgcmV0dXJuIF9yZWR1Y2UoZnVuY3Rpb24oYWNjLCB4KSB7XG4gICAgcmV0dXJuIHByZWQoYWNjLCB4KSA/IGZuKGFjYywgeCkgOiBfcmVkdWNlZChhY2MpO1xuICB9LCBhLCBsaXN0KTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3JlZHVjZWQnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgd3JhcHBlZCB0byBpbmRpY2F0ZSB0aGF0IGl0IGlzIHRoZSBmaW5hbCB2YWx1ZSBvZiB0aGUgcmVkdWNlXG4gKiBhbmQgdHJhbnNkdWNlIGZ1bmN0aW9ucy4gVGhlIHJldHVybmVkIHZhbHVlIHNob3VsZCBiZSBjb25zaWRlcmVkIGEgYmxhY2tcbiAqIGJveDogdGhlIGludGVybmFsIHN0cnVjdHVyZSBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBzdGFibGUuXG4gKlxuICogTm90ZTogdGhpcyBvcHRpbWl6YXRpb24gaXMgdW5hdmFpbGFibGUgdG8gZnVuY3Rpb25zIG5vdCBleHBsaWNpdGx5IGxpc3RlZFxuICogYWJvdmUuIEZvciBpbnN0YW5jZSwgaXQgaXMgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnlcbiAqIFtgcmVkdWNlUmlnaHRgXSgjcmVkdWNlUmlnaHQpLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE1LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSBmaW5hbCB2YWx1ZSBvZiB0aGUgcmVkdWNlLlxuICogQHJldHVybiB7Kn0gVGhlIHdyYXBwZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlLCBSLnRyYW5zZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgUi5yZWR1Y2UoXG4gKiAgICAgICAoYWNjLCBpdGVtKSA9PiBpdGVtID4gMyA/IFIucmVkdWNlZChhY2MpIDogYWNjLmNvbmNhdChpdGVtKSxcbiAqICAgICAgIFtdLFxuICogICAgICAgWzEsIDIsIDMsIDQsIDVdKSAvLyBbMSwgMiwgM11cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoX3JlZHVjZWQpO1xuIiwidmFyIF9jb21wbGVtZW50ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29tcGxlbWVudCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlcicpO1xuXG5cbi8qKlxuICogVGhlIGNvbXBsZW1lbnQgb2YgW2BmaWx0ZXJgXSgjZmlsdGVyKS5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uIEZpbHRlcmFibGVcbiAqIG9iamVjdHMgaW5jbHVkZSBwbGFpbiBvYmplY3RzIG9yIGFueSBvYmplY3QgdGhhdCBoYXMgYSBmaWx0ZXIgbWV0aG9kIHN1Y2hcbiAqIGFzIGBBcnJheWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBGaWx0ZXJhYmxlIGYgPT4gKGEgLT4gQm9vbGVhbikgLT4gZiBhIC0+IGYgYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZFxuICogQHBhcmFtIHtBcnJheX0gZmlsdGVyYWJsZVxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2VlIFIuZmlsdGVyLCBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc09kZCA9IChuKSA9PiBuICUgMiA9PT0gMTtcbiAqXG4gKiAgICAgIFIucmVqZWN0KGlzT2RkLCBbMSwgMiwgMywgNF0pOyAvLz0+IFsyLCA0XVxuICpcbiAqICAgICAgUi5yZWplY3QoaXNPZGQsIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2I6IDIsIGQ6IDR9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiByZWplY3QocHJlZCwgZmlsdGVyYWJsZSkge1xuICByZXR1cm4gZmlsdGVyKF9jb21wbGVtZW50KHByZWQpLCBmaWx0ZXJhYmxlKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIHN1Yi1saXN0IG9mIGBsaXN0YCBzdGFydGluZyBhdCBpbmRleCBgc3RhcnRgIGFuZCBjb250YWluaW5nXG4gKiBgY291bnRgIGVsZW1lbnRzLiBfTm90ZSB0aGF0IHRoaXMgaXMgbm90IGRlc3RydWN0aXZlXzogaXQgcmV0dXJucyBhIGNvcHkgb2ZcbiAqIHRoZSBsaXN0IHdpdGggdGhlIGNoYW5nZXMuXG4gKiA8c21hbGw+Tm8gbGlzdHMgaGF2ZSBiZWVuIGhhcm1lZCBpbiB0aGUgYXBwbGljYXRpb24gb2YgdGhpcyBmdW5jdGlvbi48L3NtYWxsPlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIuMlxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgVGhlIHBvc2l0aW9uIHRvIHN0YXJ0IHJlbW92aW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byByZW1vdmVcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gcmVtb3ZlIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBBcnJheSB3aXRoIGBjb3VudGAgZWxlbWVudHMgZnJvbSBgc3RhcnRgIHJlbW92ZWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZW1vdmUoMiwgMywgWzEsMiwzLDQsNSw2LDcsOF0pOyAvLz0+IFsxLDIsNiw3LDhdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiByZW1vdmUoc3RhcnQsIGNvdW50LCBsaXN0KSB7XG4gIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwKTtcbiAgcmVzdWx0LnNwbGljZShzdGFydCwgY291bnQpO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGFsd2F5cyA9IHJlcXVpcmUoJy4vYWx3YXlzJyk7XG52YXIgdGltZXMgPSByZXF1aXJlKCcuL3RpbWVzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZml4ZWQgbGlzdCBvZiBzaXplIGBuYCBjb250YWluaW5nIGEgc3BlY2lmaWVkIGlkZW50aWNhbCB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjFcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gbiAtPiBbYV1cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlcGVhdC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBkZXNpcmVkIHNpemUgb2YgdGhlIG91dHB1dCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYG5gIGB2YWx1ZWBzLlxuICogQHNlZSBSLnRpbWVzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZXBlYXQoJ2hpJywgNSk7IC8vPT4gWydoaScsICdoaScsICdoaScsICdoaScsICdoaSddXG4gKlxuICogICAgICB2YXIgb2JqID0ge307XG4gKiAgICAgIHZhciByZXBlYXRlZE9ianMgPSBSLnJlcGVhdChvYmosIDUpOyAvLz0+IFt7fSwge30sIHt9LCB7fSwge31dXG4gKiAgICAgIHJlcGVhdGVkT2Jqc1swXSA9PT0gcmVwZWF0ZWRPYmpzWzFdOyAvLz0+IHRydWVcbiAqIEBzeW1iIFIucmVwZWF0KGEsIDApID0gW11cbiAqIEBzeW1iIFIucmVwZWF0KGEsIDEpID0gW2FdXG4gKiBAc3ltYiBSLnJlcGVhdChhLCAyKSA9IFthLCBhXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcmVwZWF0KHZhbHVlLCBuKSB7XG4gIHJldHVybiB0aW1lcyhhbHdheXModmFsdWUpLCBuKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFJlcGxhY2UgYSBzdWJzdHJpbmcgb3IgcmVnZXggbWF0Y2ggaW4gYSBzdHJpbmcgd2l0aCBhIHJlcGxhY2VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjcuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyBSZWdFeHB8U3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge1JlZ0V4cHxTdHJpbmd9IHBhdHRlcm4gQSByZWd1bGFyIGV4cHJlc3Npb24gb3IgYSBzdWJzdHJpbmcgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVwbGFjZW1lbnQgVGhlIHN0cmluZyB0byByZXBsYWNlIHRoZSBtYXRjaGVzIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gZG8gdGhlIHNlYXJjaCBhbmQgcmVwbGFjZW1lbnQgaW4uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSByZXN1bHQuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZXBsYWNlKCdmb28nLCAnYmFyJywgJ2ZvbyBmb28gZm9vJyk7IC8vPT4gJ2JhciBmb28gZm9vJ1xuICogICAgICBSLnJlcGxhY2UoL2Zvby8sICdiYXInLCAnZm9vIGZvbyBmb28nKTsgLy89PiAnYmFyIGZvbyBmb28nXG4gKlxuICogICAgICAvLyBVc2UgdGhlIFwiZ1wiIChnbG9iYWwpIGZsYWcgdG8gcmVwbGFjZSBhbGwgb2NjdXJyZW5jZXM6XG4gKiAgICAgIFIucmVwbGFjZSgvZm9vL2csICdiYXInLCAnZm9vIGZvbyBmb28nKTsgLy89PiAnYmFyIGJhciBiYXInXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiByZXBsYWNlKHJlZ2V4LCByZXBsYWNlbWVudCwgc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShyZWdleCwgcmVwbGFjZW1lbnQpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzU3RyaW5nJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3Qgb3Igc3RyaW5nIHdpdGggdGhlIGVsZW1lbnRzIG9yIGNoYXJhY3RlcnMgaW4gcmV2ZXJzZVxuICogb3JkZXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBsaXN0XG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZXZlcnNlKFsxLCAyLCAzXSk7ICAvLz0+IFszLCAyLCAxXVxuICogICAgICBSLnJldmVyc2UoWzEsIDJdKTsgICAgIC8vPT4gWzIsIDFdXG4gKiAgICAgIFIucmV2ZXJzZShbMV0pOyAgICAgICAgLy89PiBbMV1cbiAqICAgICAgUi5yZXZlcnNlKFtdKTsgICAgICAgICAvLz0+IFtdXG4gKlxuICogICAgICBSLnJldmVyc2UoJ2FiYycpOyAgICAgIC8vPT4gJ2NiYSdcbiAqICAgICAgUi5yZXZlcnNlKCdhYicpOyAgICAgICAvLz0+ICdiYSdcbiAqICAgICAgUi5yZXZlcnNlKCdhJyk7ICAgICAgICAvLz0+ICdhJ1xuICogICAgICBSLnJldmVyc2UoJycpOyAgICAgICAgIC8vPT4gJydcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHJldmVyc2UobGlzdCkge1xuICByZXR1cm4gX2lzU3RyaW5nKGxpc3QpID8gbGlzdC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDApLnJldmVyc2UoKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFNjYW4gaXMgc2ltaWxhciB0byBbYHJlZHVjZWBdKCNyZWR1Y2UpLCBidXQgcmV0dXJucyBhIGxpc3Qgb2Ygc3VjY2Vzc2l2ZWx5XG4gKiByZWR1Y2VkIHZhbHVlcyBmcm9tIHRoZSBsZWZ0XG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTAuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEsYiAtPiBhKSAtPiBhIC0+IFtiXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGFjY3VtdWxhdG9yIGFuZCB0aGVcbiAqICAgICAgICBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7Kn0gYWNjIFRoZSBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7QXJyYXl9IEEgbGlzdCBvZiBhbGwgaW50ZXJtZWRpYXRlbHkgcmVkdWNlZCB2YWx1ZXMuXG4gKiBAc2VlIFIucmVkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bWJlcnMgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgIHZhciBmYWN0b3JpYWxzID0gUi5zY2FuKFIubXVsdGlwbHksIDEsIG51bWJlcnMpOyAvLz0+IFsxLCAxLCAyLCA2LCAyNF1cbiAqIEBzeW1iIFIuc2NhbihmLCBhLCBbYiwgY10pID0gW2EsIGYoYSwgYiksIGYoZihhLCBiKSwgYyldXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBzY2FuKGZuLCBhY2MsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFthY2NdO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgYWNjID0gZm4oYWNjLCBsaXN0W2lkeF0pO1xuICAgIHJlc3VsdFtpZHggKyAxXSA9IGFjYztcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGFwID0gcmVxdWlyZSgnLi9hcCcpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgcHJlcGVuZCA9IHJlcXVpcmUoJy4vcHJlcGVuZCcpO1xudmFyIHJlZHVjZVJpZ2h0ID0gcmVxdWlyZSgnLi9yZWR1Y2VSaWdodCcpO1xuXG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIFtUcmF2ZXJzYWJsZV0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCN0cmF2ZXJzYWJsZSlcbiAqIG9mIFtBcHBsaWNhdGl2ZV0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBsaWNhdGl2ZSkgaW50byBhblxuICogQXBwbGljYXRpdmUgb2YgVHJhdmVyc2FibGUuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHNlcXVlbmNlYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoQXBwbGljYXRpdmUgZiwgVHJhdmVyc2FibGUgdCkgPT4gKGEgLT4gZiBhKSAtPiB0IChmIGEpIC0+IGYgKHQgYSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9mXG4gKiBAcGFyYW0geyp9IHRyYXZlcnNhYmxlXG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLnRyYXZlcnNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zZXF1ZW5jZShNYXliZS5vZiwgW0p1c3QoMSksIEp1c3QoMiksIEp1c3QoMyldKTsgICAvLz0+IEp1c3QoWzEsIDIsIDNdKVxuICogICAgICBSLnNlcXVlbmNlKE1heWJlLm9mLCBbSnVzdCgxKSwgSnVzdCgyKSwgTm90aGluZygpXSk7IC8vPT4gTm90aGluZygpXG4gKlxuICogICAgICBSLnNlcXVlbmNlKFIub2YsIEp1c3QoWzEsIDIsIDNdKSk7IC8vPT4gW0p1c3QoMSksIEp1c3QoMiksIEp1c3QoMyldXG4gKiAgICAgIFIuc2VxdWVuY2UoUi5vZiwgTm90aGluZygpKTsgICAgICAgLy89PiBbTm90aGluZygpXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gc2VxdWVuY2Uob2YsIHRyYXZlcnNhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdHJhdmVyc2FibGUuc2VxdWVuY2UgPT09ICdmdW5jdGlvbicgP1xuICAgIHRyYXZlcnNhYmxlLnNlcXVlbmNlKG9mKSA6XG4gICAgcmVkdWNlUmlnaHQoZnVuY3Rpb24oeCwgYWNjKSB7IHJldHVybiBhcChtYXAocHJlcGVuZCwgeCksIGFjYyk7IH0sXG4gICAgICAgICAgICAgICAgb2YoW10pLFxuICAgICAgICAgICAgICAgIHRyYXZlcnNhYmxlKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBhbHdheXMgPSByZXF1aXJlKCcuL2Fsd2F5cycpO1xudmFyIG92ZXIgPSByZXF1aXJlKCcuL292ZXInKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiBcInNldHRpbmdcIiB0aGUgcG9ydGlvbiBvZiB0aGUgZ2l2ZW4gZGF0YSBzdHJ1Y3R1cmVcbiAqIGZvY3VzZWQgYnkgdGhlIGdpdmVuIGxlbnMgdG8gdGhlIGdpdmVuIHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBMZW5zIHMgYSA9IEZ1bmN0b3IgZiA9PiAoYSAtPiBmIGEpIC0+IHMgLT4gZiBzXG4gKiBAc2lnIExlbnMgcyBhIC0+IGEgLT4gcyAtPiBzXG4gKiBAcGFyYW0ge0xlbnN9IGxlbnNcbiAqIEBwYXJhbSB7Kn0gdlxuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLnByb3AsIFIubGVuc0luZGV4LCBSLmxlbnNQcm9wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhMZW5zID0gUi5sZW5zUHJvcCgneCcpO1xuICpcbiAqICAgICAgUi5zZXQoeExlbnMsIDQsIHt4OiAxLCB5OiAyfSk7ICAvLz0+IHt4OiA0LCB5OiAyfVxuICogICAgICBSLnNldCh4TGVucywgOCwge3g6IDEsIHk6IDJ9KTsgIC8vPT4ge3g6IDgsIHk6IDJ9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBzZXQobGVucywgdiwgeCkge1xuICByZXR1cm4gb3ZlcihsZW5zLCBhbHdheXModiksIHgpO1xufSk7XG4iLCJ2YXIgX2NoZWNrRm9yTWV0aG9kID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QnKTtcbnZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcgKG9yIG9iamVjdCB3aXRoIGEgYHNsaWNlYFxuICogbWV0aG9kKSBmcm9tIGBmcm9tSW5kZXhgIChpbmNsdXNpdmUpIHRvIGB0b0luZGV4YCAoZXhjbHVzaXZlKS5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgc2xpY2VgIG1ldGhvZCBvZiB0aGUgdGhpcmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS40XG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4IFRoZSBzdGFydCBpbmRleCAoaW5jbHVzaXZlKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4IFRoZSBlbmQgaW5kZXggKGV4Y2x1c2l2ZSkuXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zbGljZSgxLCAzLCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7ICAgICAgICAvLz0+IFsnYicsICdjJ11cbiAqICAgICAgUi5zbGljZSgxLCBJbmZpbml0eSwgWydhJywgJ2InLCAnYycsICdkJ10pOyAvLz0+IFsnYicsICdjJywgJ2QnXVxuICogICAgICBSLnNsaWNlKDAsIC0xLCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7ICAgICAgIC8vPT4gWydhJywgJ2InLCAnYyddXG4gKiAgICAgIFIuc2xpY2UoLTMsIC0xLCBbJ2EnLCAnYicsICdjJywgJ2QnXSk7ICAgICAgLy89PiBbJ2InLCAnYyddXG4gKiAgICAgIFIuc2xpY2UoMCwgMywgJ3JhbWRhJyk7ICAgICAgICAgICAgICAgICAgICAgLy89PiAncmFtJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoX2NoZWNrRm9yTWV0aG9kKCdzbGljZScsIGZ1bmN0aW9uIHNsaWNlKGZyb21JbmRleCwgdG9JbmRleCwgbGlzdCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgZnJvbUluZGV4LCB0b0luZGV4KTtcbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgbGlzdCwgc29ydGVkIGFjY29yZGluZyB0byB0aGUgY29tcGFyYXRvciBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhY2NlcHQgdHdvIHZhbHVlcyBhdCBhIHRpbWUgYW5kIHJldHVybiBhIG5lZ2F0aXZlIG51bWJlciBpZiB0aGVcbiAqIGZpcnN0IHZhbHVlIGlzIHNtYWxsZXIsIGEgcG9zaXRpdmUgbnVtYmVyIGlmIGl0J3MgbGFyZ2VyLCBhbmQgemVybyBpZiB0aGV5XG4gKiBhcmUgZXF1YWwuIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBpcyBhICoqY29weSoqIG9mIHRoZSBsaXN0LiBJdCBkb2VzIG5vdFxuICogbW9kaWZ5IHRoZSBvcmlnaW5hbC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhLGEgLT4gTnVtYmVyKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIEEgc29ydGluZyBmdW5jdGlvbiA6OiBhIC0+IGIgLT4gSW50XG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIHNvcnRcbiAqIEByZXR1cm4ge0FycmF5fSBhIG5ldyBhcnJheSB3aXRoIGl0cyBlbGVtZW50cyBzb3J0ZWQgYnkgdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRpZmYgPSBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfTtcbiAqICAgICAgUi5zb3J0KGRpZmYsIFs0LDIsNyw1XSk7IC8vPT4gWzIsIDQsIDUsIDddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBzb3J0KGNvbXBhcmF0b3IsIGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDApLnNvcnQoY29tcGFyYXRvcik7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBTb3J0cyB0aGUgbGlzdCBhY2NvcmRpbmcgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBiID0+IChhIC0+IGIpIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIHNvcnQuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgbGlzdCBzb3J0ZWQgYnkgdGhlIGtleXMgZ2VuZXJhdGVkIGJ5IGBmbmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHNvcnRCeUZpcnN0SXRlbSA9IFIuc29ydEJ5KFIucHJvcCgwKSk7XG4gKiAgICAgIHZhciBzb3J0QnlOYW1lQ2FzZUluc2Vuc2l0aXZlID0gUi5zb3J0QnkoUi5jb21wb3NlKFIudG9Mb3dlciwgUi5wcm9wKCduYW1lJykpKTtcbiAqICAgICAgdmFyIHBhaXJzID0gW1stMSwgMV0sIFstMiwgMl0sIFstMywgM11dO1xuICogICAgICBzb3J0QnlGaXJzdEl0ZW0ocGFpcnMpOyAvLz0+IFtbLTMsIDNdLCBbLTIsIDJdLCBbLTEsIDFdXVxuICogICAgICB2YXIgYWxpY2UgPSB7XG4gKiAgICAgICAgbmFtZTogJ0FMSUNFJyxcbiAqICAgICAgICBhZ2U6IDEwMVxuICogICAgICB9O1xuICogICAgICB2YXIgYm9iID0ge1xuICogICAgICAgIG5hbWU6ICdCb2InLFxuICogICAgICAgIGFnZTogLTEwXG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBjbGFyYSA9IHtcbiAqICAgICAgICBuYW1lOiAnY2xhcmEnLFxuICogICAgICAgIGFnZTogMzE0LjE1OVxuICogICAgICB9O1xuICogICAgICB2YXIgcGVvcGxlID0gW2NsYXJhLCBib2IsIGFsaWNlXTtcbiAqICAgICAgc29ydEJ5TmFtZUNhc2VJbnNlbnNpdGl2ZShwZW9wbGUpOyAvLz0+IFthbGljZSwgYm9iLCBjbGFyYV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHNvcnRCeShmbiwgbGlzdCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIGFhID0gZm4oYSk7XG4gICAgdmFyIGJiID0gZm4oYik7XG4gICAgcmV0dXJuIGFhIDwgYmIgPyAtMSA6IGFhID4gYmIgPyAxIDogMDtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBTb3J0cyBhIGxpc3QgYWNjb3JkaW5nIHRvIGEgbGlzdCBvZiBjb21wYXJhdG9ycy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMy4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgW2EgLT4gYSAtPiBOdW1iZXJdIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7QXJyYXl9IGZ1bmN0aW9ucyBBIGxpc3Qgb2YgY29tcGFyYXRvciBmdW5jdGlvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIHNvcnQuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgbGlzdCBzb3J0ZWQgYWNjb3JkaW5nIHRvIHRoZSBjb21hcmF0b3IgZnVuY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhbGljZSA9IHtcbiAqICAgICAgICBuYW1lOiAnYWxpY2UnLFxuICogICAgICAgIGFnZTogNDBcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIGJvYiA9IHtcbiAqICAgICAgICBuYW1lOiAnYm9iJyxcbiAqICAgICAgICBhZ2U6IDMwXG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBjbGFyYSA9IHtcbiAqICAgICAgICBuYW1lOiAnY2xhcmEnLFxuICogICAgICAgIGFnZTogNDBcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtjbGFyYSwgYm9iLCBhbGljZV07XG4gKiAgICAgIHZhciBhZ2VOYW1lU29ydCA9IFIuc29ydFdpdGgoW1xuICogICAgICAgIFIuZGVzY2VuZChSLnByb3AoJ2FnZScpKSxcbiAqICAgICAgICBSLmFzY2VuZChSLnByb3AoJ25hbWUnKSlcbiAqICAgICAgXSk7XG4gKiAgICAgIGFnZU5hbWVTb3J0KHBlb3BsZSk7IC8vPT4gW2FsaWNlLCBjbGFyYSwgYm9iXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gc29ydFdpdGgoZm5zLCBsaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKHJlc3VsdCA9PT0gMCAmJiBpIDwgZm5zLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gZm5zW2ldKGEsIGIpO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn0pO1xuIiwidmFyIGludm9rZXIgPSByZXF1aXJlKCcuL2ludm9rZXInKTtcblxuXG4vKipcbiAqIFNwbGl0cyBhIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MgYmFzZWQgb24gdGhlIGdpdmVuXG4gKiBzZXBhcmF0b3IuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAc2lnIChTdHJpbmcgfCBSZWdFeHApIC0+IFN0cmluZyAtPiBbU3RyaW5nXVxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBzZXAgVGhlIHBhdHRlcm4uXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VwYXJhdGUgaW50byBhbiBhcnJheS5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGBzdHJgIHNlcGFyYXRlZCBieSBgc3RyYC5cbiAqIEBzZWUgUi5qb2luXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHBhdGhDb21wb25lbnRzID0gUi5zcGxpdCgnLycpO1xuICogICAgICBSLnRhaWwocGF0aENvbXBvbmVudHMoJy91c3IvbG9jYWwvYmluL25vZGUnKSk7IC8vPT4gWyd1c3InLCAnbG9jYWwnLCAnYmluJywgJ25vZGUnXVxuICpcbiAqICAgICAgUi5zcGxpdCgnLicsICdhLmIuYy54eXouZCcpOyAvLz0+IFsnYScsICdiJywgJ2MnLCAneHl6JywgJ2QnXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGludm9rZXIoMSwgJ3NwbGl0Jyk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGxlbmd0aCA9IHJlcXVpcmUoJy4vbGVuZ3RoJyk7XG52YXIgc2xpY2UgPSByZXF1aXJlKCcuL3NsaWNlJyk7XG5cblxuLyoqXG4gKiBTcGxpdHMgYSBnaXZlbiBsaXN0IG9yIHN0cmluZyBhdCBhIGdpdmVuIGluZGV4LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gW1thXSwgW2FdXVxuICogQHNpZyBOdW1iZXIgLT4gU3RyaW5nIC0+IFtTdHJpbmcsIFN0cmluZ11cbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2hlcmUgdGhlIGFycmF5L3N0cmluZyBpcyBzcGxpdC5cbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBhcnJheSBUaGUgYXJyYXkvc3RyaW5nIHRvIGJlIHNwbGl0LlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zcGxpdEF0KDEsIFsxLCAyLCAzXSk7ICAgICAgICAgIC8vPT4gW1sxXSwgWzIsIDNdXVxuICogICAgICBSLnNwbGl0QXQoNSwgJ2hlbGxvIHdvcmxkJyk7ICAgICAgLy89PiBbJ2hlbGxvJywgJyB3b3JsZCddXG4gKiAgICAgIFIuc3BsaXRBdCgtMSwgJ2Zvb2JhcicpOyAgICAgICAgICAvLz0+IFsnZm9vYmEnLCAnciddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBzcGxpdEF0KGluZGV4LCBhcnJheSkge1xuICByZXR1cm4gW3NsaWNlKDAsIGluZGV4LCBhcnJheSksIHNsaWNlKGluZGV4LCBsZW5ndGgoYXJyYXkpLCBhcnJheSldO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIHNsaWNlID0gcmVxdWlyZSgnLi9zbGljZScpO1xuXG5cbi8qKlxuICogU3BsaXRzIGEgY29sbGVjdGlvbiBpbnRvIHNsaWNlcyBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IFtbYV1dXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gW1N0cmluZ11cbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnNwbGl0RXZlcnkoMywgWzEsIDIsIDMsIDQsIDUsIDYsIDddKTsgLy89PiBbWzEsIDIsIDNdLCBbNCwgNSwgNl0sIFs3XV1cbiAqICAgICAgUi5zcGxpdEV2ZXJ5KDMsICdmb29iYXJiYXonKTsgLy89PiBbJ2ZvbycsICdiYXInLCAnYmF6J11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHNwbGl0RXZlcnkobiwgbGlzdCkge1xuICBpZiAobiA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byBzcGxpdEV2ZXJ5IG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyJyk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxpc3QubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goc2xpY2UoaWR4LCBpZHggKz0gbiwgbGlzdCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIGxpc3QgYW5kIGEgcHJlZGljYXRlIGFuZCByZXR1cm5zIGEgcGFpciBvZiBsaXN0cyB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgLSB0aGUgcmVzdWx0IG9mIGNvbmNhdGVuYXRpbmcgdGhlIHR3byBvdXRwdXQgbGlzdHMgaXMgZXF1aXZhbGVudCB0byB0aGUgaW5wdXQgbGlzdDtcbiAqICAtIG5vbmUgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBmaXJzdCBvdXRwdXQgbGlzdCBzYXRpc2ZpZXMgdGhlIHByZWRpY2F0ZTsgYW5kXG4gKiAgLSBpZiB0aGUgc2Vjb25kIG91dHB1dCBsaXN0IGlzIG5vbi1lbXB0eSwgaXRzIGZpcnN0IGVsZW1lbnQgc2F0aXNmaWVzIHRoZSBwcmVkaWNhdGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFtbYV0sIFthXV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgVGhlIHByZWRpY2F0ZSB0aGF0IGRldGVybWluZXMgd2hlcmUgdGhlIGFycmF5IGlzIHNwbGl0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gYmUgc3BsaXQuXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnNwbGl0V2hlbihSLmVxdWFscygyKSwgWzEsIDIsIDMsIDEsIDIsIDNdKTsgICAvLz0+IFtbMV0sIFsyLCAzLCAxLCAyLCAzXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHNwbGl0V2hlbihwcmVkLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciBwcmVmaXggPSBbXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuICYmICFwcmVkKGxpc3RbaWR4XSkpIHtcbiAgICBwcmVmaXgucHVzaChsaXN0W2lkeF0pO1xuICAgIGlkeCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIFtwcmVmaXgsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIGlkeCldO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG52YXIgdGFrZSA9IHJlcXVpcmUoJy4vdGFrZScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3Qgc3RhcnRzIHdpdGggdGhlIHByb3ZpZGVkIHZhbHVlc1xuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjI0LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBCb29sZWFuXG4gKiBAc2lnIFN0cmluZyAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IHByZWZpeFxuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuc3RhcnRzV2l0aCgnYScsICdhYmMnKSAgICAgICAgICAgICAgICAvLz0+IHRydWVcbiAqICAgICAgUi5zdGFydHNXaXRoKCdiJywgJ2FiYycpICAgICAgICAgICAgICAgIC8vPT4gZmFsc2VcbiAqICAgICAgUi5zdGFydHNXaXRoKFsnYSddLCBbJ2EnLCAnYicsICdjJ10pICAgIC8vPT4gdHJ1ZVxuICogICAgICBSLnN0YXJ0c1dpdGgoWydiJ10sIFsnYScsICdiJywgJ2MnXSkgICAgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24ocHJlZml4LCBsaXN0KSB7XG4gIHJldHVybiBlcXVhbHModGFrZShwcmVmaXgubGVuZ3RoLCBsaXN0KSwgcHJlZml4KTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFN1YnRyYWN0cyBpdHMgc2Vjb25kIGFyZ3VtZW50IGZyb20gaXRzIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgdmFsdWUuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByZXN1bHQgb2YgYGEgLSBiYC5cbiAqIEBzZWUgUi5hZGRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnN1YnRyYWN0KDEwLCA4KTsgLy89PiAyXG4gKlxuICogICAgICB2YXIgbWludXM1ID0gUi5zdWJ0cmFjdChSLl9fLCA1KTtcbiAqICAgICAgbWludXM1KDE3KTsgLy89PiAxMlxuICpcbiAqICAgICAgdmFyIGNvbXBsZW1lbnRhcnlBbmdsZSA9IFIuc3VidHJhY3QoOTApO1xuICogICAgICBjb21wbGVtZW50YXJ5QW5nbGUoMzApOyAvLz0+IDYwXG4gKiAgICAgIGNvbXBsZW1lbnRhcnlBbmdsZSg3Mik7IC8vPT4gMThcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIpIHtcbiAgcmV0dXJuIE51bWJlcihhKSAtIE51bWJlcihiKTtcbn0pO1xuIiwidmFyIGFkZCA9IHJlcXVpcmUoJy4vYWRkJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcblxuXG4vKipcbiAqIEFkZHMgdG9nZXRoZXIgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGxpc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHJldHVybiB7TnVtYmVyfSBUaGUgc3VtIG9mIGFsbCB0aGUgbnVtYmVycyBpbiB0aGUgbGlzdC5cbiAqIEBzZWUgUi5yZWR1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnN1bShbMiw0LDYsOCwxMDAsMV0pOyAvLz0+IDEyMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZShhZGQsIDApO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBjb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xudmFyIGRpZmZlcmVuY2UgPSByZXF1aXJlKCcuL2RpZmZlcmVuY2UnKTtcblxuXG4vKipcbiAqIEZpbmRzIHRoZSBzZXQgKGkuZS4gbm8gZHVwbGljYXRlcykgb2YgYWxsIGVsZW1lbnRzIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3Qgb3JcbiAqIHNlY29uZCBsaXN0LCBidXQgbm90IGJvdGguXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFsqXSAtPiBbKl0gLT4gWypdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgZmlyc3QgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIFRoZSBzZWNvbmQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgZWxlbWVudHMgaW4gYGxpc3QxYCBvciBgbGlzdDJgLCBidXQgbm90IGJvdGguXG4gKiBAc2VlIFIuc3ltbWV0cmljRGlmZmVyZW5jZVdpdGgsIFIuZGlmZmVyZW5jZSwgUi5kaWZmZXJlbmNlV2l0aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuc3ltbWV0cmljRGlmZmVyZW5jZShbMSwyLDMsNF0sIFs3LDYsNSw0LDNdKTsgLy89PiBbMSwyLDcsNiw1XVxuICogICAgICBSLnN5bW1ldHJpY0RpZmZlcmVuY2UoWzcsNiw1LDQsM10sIFsxLDIsMyw0XSk7IC8vPT4gWzcsNiw1LDEsMl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2UobGlzdDEsIGxpc3QyKSB7XG4gIHJldHVybiBjb25jYXQoZGlmZmVyZW5jZShsaXN0MSwgbGlzdDIpLCBkaWZmZXJlbmNlKGxpc3QyLCBsaXN0MSkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIGNvbmNhdCA9IHJlcXVpcmUoJy4vY29uY2F0Jyk7XG52YXIgZGlmZmVyZW5jZVdpdGggPSByZXF1aXJlKCcuL2RpZmZlcmVuY2VXaXRoJyk7XG5cblxuLyoqXG4gKiBGaW5kcyB0aGUgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIG9mIGFsbCBlbGVtZW50cyBjb250YWluZWQgaW4gdGhlIGZpcnN0IG9yXG4gKiBzZWNvbmQgbGlzdCwgYnV0IG5vdCBib3RoLiBEdXBsaWNhdGlvbiBpcyBkZXRlcm1pbmVkIGFjY29yZGluZyB0byB0aGUgdmFsdWVcbiAqIHJldHVybmVkIGJ5IGFwcGx5aW5nIHRoZSBzdXBwbGllZCBwcmVkaWNhdGUgdG8gdHdvIGxpc3QgZWxlbWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnICgoYSwgYSkgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdXNlZCB0byB0ZXN0IHdoZXRoZXIgdHdvIGl0ZW1zIGFyZSBlcXVhbC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIHNlY29uZCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBlbGVtZW50cyBpbiBgbGlzdDFgIG9yIGBsaXN0MmAsIGJ1dCBub3QgYm90aC5cbiAqIEBzZWUgUi5zeW1tZXRyaWNEaWZmZXJlbmNlLCBSLmRpZmZlcmVuY2UsIFIuZGlmZmVyZW5jZVdpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZXFBID0gUi5lcUJ5KFIucHJvcCgnYScpKTtcbiAqICAgICAgdmFyIGwxID0gW3thOiAxfSwge2E6IDJ9LCB7YTogM30sIHthOiA0fV07XG4gKiAgICAgIHZhciBsMiA9IFt7YTogM30sIHthOiA0fSwge2E6IDV9LCB7YTogNn1dO1xuICogICAgICBSLnN5bW1ldHJpY0RpZmZlcmVuY2VXaXRoKGVxQSwgbDEsIGwyKTsgLy89PiBbe2E6IDF9LCB7YTogMn0sIHthOiA1fSwge2E6IDZ9XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gc3ltbWV0cmljRGlmZmVyZW5jZVdpdGgocHJlZCwgbGlzdDEsIGxpc3QyKSB7XG4gIHJldHVybiBjb25jYXQoZGlmZmVyZW5jZVdpdGgocHJlZCwgbGlzdDEsIGxpc3QyKSwgZGlmZmVyZW5jZVdpdGgocHJlZCwgbGlzdDIsIGxpc3QxKSk7XG59KTtcbiIsInZhciBfY2hlY2tGb3JNZXRob2QgPSByZXF1aXJlKCcuL2ludGVybmFsL19jaGVja0Zvck1ldGhvZCcpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBzbGljZSA9IHJlcXVpcmUoJy4vc2xpY2UnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYWxsIGJ1dCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcgKG9yIG9iamVjdFxuICogd2l0aCBhIGB0YWlsYCBtZXRob2QpLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBzbGljZWAgbWV0aG9kIG9mIHRoZSBmaXJzdCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLmhlYWQsIFIuaW5pdCwgUi5sYXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50YWlsKFsxLCAyLCAzXSk7ICAvLz0+IFsyLCAzXVxuICogICAgICBSLnRhaWwoWzEsIDJdKTsgICAgIC8vPT4gWzJdXG4gKiAgICAgIFIudGFpbChbMV0pOyAgICAgICAgLy89PiBbXVxuICogICAgICBSLnRhaWwoW10pOyAgICAgICAgIC8vPT4gW11cbiAqXG4gKiAgICAgIFIudGFpbCgnYWJjJyk7ICAvLz0+ICdiYydcbiAqICAgICAgUi50YWlsKCdhYicpOyAgIC8vPT4gJ2InXG4gKiAgICAgIFIudGFpbCgnYScpOyAgICAvLz0+ICcnXG4gKiAgICAgIFIudGFpbCgnJyk7ICAgICAvLz0+ICcnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShfY2hlY2tGb3JNZXRob2QoJ3RhaWwnLCBzbGljZSgxLCBJbmZpbml0eSkpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94dGFrZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3h0YWtlJyk7XG52YXIgc2xpY2UgPSByZXF1aXJlKCcuL3NsaWNlJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGxpc3QsIHN0cmluZywgb3JcbiAqIHRyYW5zZHVjZXIvdHJhbnNmb3JtZXIgKG9yIG9iamVjdCB3aXRoIGEgYHRha2VgIG1ldGhvZCkuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHRha2VgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuZHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGFrZSgxLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJ11cbiAqICAgICAgUi50YWtlKDIsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJ11cbiAqICAgICAgUi50YWtlKDMsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJywgJ2JheiddXG4gKiAgICAgIFIudGFrZSg0LCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJywgJ2JhcicsICdiYXonXVxuICogICAgICBSLnRha2UoMywgJ3JhbWRhJyk7ICAgICAgICAgICAgICAgLy89PiAncmFtJ1xuICpcbiAqICAgICAgdmFyIHBlcnNvbm5lbCA9IFtcbiAqICAgICAgICAnRGF2ZSBCcnViZWNrJyxcbiAqICAgICAgICAnUGF1bCBEZXNtb25kJyxcbiAqICAgICAgICAnRXVnZW5lIFdyaWdodCcsXG4gKiAgICAgICAgJ0pvZSBNb3JlbGxvJyxcbiAqICAgICAgICAnR2VycnkgTXVsbGlnYW4nLFxuICogICAgICAgICdCb2IgQmF0ZXMnLFxuICogICAgICAgICdKb2UgRG9kZ2UnLFxuICogICAgICAgICdSb24gQ3JvdHR5J1xuICogICAgICBdO1xuICpcbiAqICAgICAgdmFyIHRha2VGaXZlID0gUi50YWtlKDUpO1xuICogICAgICB0YWtlRml2ZShwZXJzb25uZWwpO1xuICogICAgICAvLz0+IFsnRGF2ZSBCcnViZWNrJywgJ1BhdWwgRGVzbW9uZCcsICdFdWdlbmUgV3JpZ2h0JywgJ0pvZSBNb3JlbGxvJywgJ0dlcnJ5IE11bGxpZ2FuJ11cbiAqIEBzeW1iIFIudGFrZSgtMSwgW2EsIGJdKSA9IFthLCBiXVxuICogQHN5bWIgUi50YWtlKDAsIFthLCBiXSkgPSBbXVxuICogQHN5bWIgUi50YWtlKDEsIFthLCBiXSkgPSBbYV1cbiAqIEBzeW1iIFIudGFrZSgyLCBbYSwgYl0pID0gW2EsIGJdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsndGFrZSddLCBfeHRha2UsIGZ1bmN0aW9uIHRha2UobiwgeHMpIHtcbiAgcmV0dXJuIHNsaWNlKDAsIG4gPCAwID8gSW5maW5pdHkgOiBuLCB4cyk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGRyb3AgPSByZXF1aXJlKCcuL2Ryb3AnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gbGlzdC5cbiAqIElmIGBuID4gbGlzdC5sZW5ndGhgLCByZXR1cm5zIGEgbGlzdCBvZiBgbGlzdC5sZW5ndGhgIGVsZW1lbnRzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJldHVybi5cbiAqIEBwYXJhbSB7QXJyYXl9IHhzIFRoZSBjb2xsZWN0aW9uIHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2VlIFIuZHJvcExhc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRha2VMYXN0KDEsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydiYXonXVxuICogICAgICBSLnRha2VMYXN0KDIsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydiYXInLCAnYmF6J11cbiAqICAgICAgUi50YWtlTGFzdCgzLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJywgJ2JhcicsICdiYXonXVxuICogICAgICBSLnRha2VMYXN0KDQsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJywgJ2JheiddXG4gKiAgICAgIFIudGFrZUxhc3QoMywgJ3JhbWRhJyk7ICAgICAgICAgICAgICAgLy89PiAnbWRhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gdGFrZUxhc3QobiwgeHMpIHtcbiAgcmV0dXJuIGRyb3AobiA+PSAwID8geHMubGVuZ3RoIC0gbiA6IDAsIHhzKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBvZiBhIGdpdmVuIGxpc3QsIHBhc3NpbmdcbiAqIGVhY2ggdmFsdWUgdG8gdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSBmdW5jdGlvbiwgYW5kIHRlcm1pbmF0aW5nIHdoZW4gdGhlXG4gKiBwcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLiBFeGNsdWRlcyB0aGUgZWxlbWVudCB0aGF0IGNhdXNlZCB0aGVcbiAqIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBmYWlsLiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6XG4gKiAqKHZhbHVlKSouXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgYXJyYXkuXG4gKiBAc2VlIFIuZHJvcExhc3RXaGlsZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc05vdE9uZSA9IHggPT4geCAhPT0gMTtcbiAqXG4gKiAgICAgIFIudGFrZUxhc3RXaGlsZShpc05vdE9uZSwgWzEsIDIsIDMsIDRdKTsgLy89PiBbMiwgMywgNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHRha2VMYXN0V2hpbGUoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwICYmIGZuKGxpc3RbaWR4XSkpIHtcbiAgICBpZHggLT0gMTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgaWR4ICsgMSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94dGFrZVdoaWxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feHRha2VXaGlsZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhlIGZpcnN0IGBuYCBlbGVtZW50cyBvZiBhIGdpdmVuIGxpc3QsXG4gKiBwYXNzaW5nIGVhY2ggdmFsdWUgdG8gdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSBmdW5jdGlvbiwgYW5kIHRlcm1pbmF0aW5nIHdoZW5cbiAqIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLiBFeGNsdWRlcyB0aGUgZWxlbWVudCB0aGF0IGNhdXNlZCB0aGVcbiAqIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBmYWlsLiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6XG4gKiAqKHZhbHVlKSouXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHRha2VXaGlsZWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgYXJyYXkuXG4gKiBAc2VlIFIuZHJvcFdoaWxlLCBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc05vdEZvdXIgPSB4ID0+IHggIT09IDQ7XG4gKlxuICogICAgICBSLnRha2VXaGlsZShpc05vdEZvdXIsIFsxLCAyLCAzLCA0LCAzLCAyLCAxXSk7IC8vPT4gWzEsIDIsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsndGFrZVdoaWxlJ10sIF94dGFrZVdoaWxlLCBmdW5jdGlvbiB0YWtlV2hpbGUoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbiAmJiBmbihsaXN0W2lkeF0pKSB7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDAsIGlkeCk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUnVucyB0aGUgZ2l2ZW4gZnVuY3Rpb24gd2l0aCB0aGUgc3VwcGxpZWQgb2JqZWN0LCB0aGVuIHJldHVybnMgdGhlIG9iamVjdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYSAtPiAqKSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdpdGggYHhgLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGBmbmAgd2lsbCBiZSB0aHJvd24gYXdheS5cbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn0gYHhgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBzYXlYID0geCA9PiBjb25zb2xlLmxvZygneCBpcyAnICsgeCk7XG4gKiAgICAgIFIudGFwKHNheVgsIDEwMCk7IC8vPT4gMTAwXG4gKiAgICAgIC8vIGxvZ3MgJ3ggaXMgMTAwJ1xuICogQHN5bWIgUi50YXAoZiwgYSkgPSBhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB0YXAoZm4sIHgpIHtcbiAgZm4oeCk7XG4gIHJldHVybiB4O1xufSk7XG4iLCJ2YXIgX2Nsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY2xvbmVSZWdFeHAnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzUmVnRXhwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNSZWdFeHAnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIHN0cmluZyBtYXRjaGVzIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgUmVnRXhwIC0+IFN0cmluZyAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5tYXRjaFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGVzdCgvXngvLCAneHl6Jyk7IC8vPT4gdHJ1ZVxuICogICAgICBSLnRlc3QoL155LywgJ3h5eicpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB0ZXN0KHBhdHRlcm4sIHN0cikge1xuICBpZiAoIV9pc1JlZ0V4cChwYXR0ZXJuKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ+KAmHRlc3TigJkgcmVxdWlyZXMgYSB2YWx1ZSBvZiB0eXBlIFJlZ0V4cCBhcyBpdHMgZmlyc3QgYXJndW1lbnQ7IHJlY2VpdmVkICcgKyB0b1N0cmluZyhwYXR0ZXJuKSk7XG4gIH1cbiAgcmV0dXJuIF9jbG9uZVJlZ0V4cChwYXR0ZXJuKS50ZXN0KHN0cik7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDYWxscyBhbiBpbnB1dCBmdW5jdGlvbiBgbmAgdGltZXMsIHJldHVybmluZyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzXG4gKiBvZiB0aG9zZSBmdW5jdGlvbiBjYWxscy5cbiAqXG4gKiBgZm5gIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6IFRoZSBjdXJyZW50IHZhbHVlIG9mIGBuYCwgd2hpY2ggYmVnaW5zIGF0IGAwYFxuICogYW5kIGlzIGdyYWR1YWxseSBpbmNyZW1lbnRlZCB0byBgbiAtIDFgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIuM1xuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKE51bWJlciAtPiBhKSAtPiBOdW1iZXIgLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLiBQYXNzZWQgb25lIGFyZ3VtZW50LCB0aGUgY3VycmVudCB2YWx1ZSBvZiBgbmAuXG4gKiBAcGFyYW0ge051bWJlcn0gbiBBIHZhbHVlIGJldHdlZW4gYDBgIGFuZCBgbiAtIDFgLiBJbmNyZW1lbnRzIGFmdGVyIGVhY2ggZnVuY3Rpb24gY2FsbC5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIHRoZSByZXR1cm4gdmFsdWVzIG9mIGFsbCBjYWxscyB0byBgZm5gLlxuICogQHNlZSBSLnJlcGVhdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGltZXMoUi5pZGVudGl0eSwgNSk7IC8vPT4gWzAsIDEsIDIsIDMsIDRdXG4gKiBAc3ltYiBSLnRpbWVzKGYsIDApID0gW11cbiAqIEBzeW1iIFIudGltZXMoZiwgMSkgPSBbZigwKV1cbiAqIEBzeW1iIFIudGltZXMoZiwgMikgPSBbZigwKSwgZigxKV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHRpbWVzKGZuLCBuKSB7XG4gIHZhciBsZW4gPSBOdW1iZXIobik7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGlzdDtcblxuICBpZiAobGVuIDwgMCB8fCBpc05hTihsZW4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ24gbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKTtcbiAgfVxuICBsaXN0ID0gbmV3IEFycmF5KGxlbik7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBsaXN0W2lkeF0gPSBmbihpZHgpO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBsaXN0O1xufSk7XG4iLCJ2YXIgaW52b2tlciA9IHJlcXVpcmUoJy4vaW52b2tlcicpO1xuXG5cbi8qKlxuICogVGhlIGxvd2VyIGNhc2UgdmVyc2lvbiBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGxvd2VyIGNhc2UuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBsb3dlciBjYXNlIHZlcnNpb24gb2YgYHN0cmAuXG4gKiBAc2VlIFIudG9VcHBlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudG9Mb3dlcignWFlaJyk7IC8vPT4gJ3h5eidcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBpbnZva2VyKDAsICd0b0xvd2VyQ2FzZScpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBvYmplY3QgaW50byBhbiBhcnJheSBvZiBrZXksIHZhbHVlIGFycmF5cy4gT25seSB0aGUgb2JqZWN0J3NcbiAqIG93biBwcm9wZXJ0aWVzIGFyZSB1c2VkLlxuICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnRcbiAqIGFjcm9zcyBkaWZmZXJlbnQgSlMgcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7U3RyaW5nOiAqfSAtPiBbW1N0cmluZywqXV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBrZXksIHZhbHVlIGFycmF5cyBmcm9tIHRoZSBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAqIEBzZWUgUi5mcm9tUGFpcnNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRvUGFpcnMoe2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiBbWydhJywgMV0sIFsnYicsIDJdLCBbJ2MnLCAzXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHRvUGFpcnMob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIGlmIChfaGFzKHByb3AsIG9iaikpIHtcbiAgICAgIHBhaXJzW3BhaXJzLmxlbmd0aF0gPSBbcHJvcCwgb2JqW3Byb3BdXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogQ29udmVydHMgYW4gb2JqZWN0IGludG8gYW4gYXJyYXkgb2Yga2V5LCB2YWx1ZSBhcnJheXMuIFRoZSBvYmplY3QncyBvd25cbiAqIHByb3BlcnRpZXMgYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFyZSB1c2VkLiBOb3RlIHRoYXQgdGhlIG9yZGVyIG9mIHRoZVxuICogb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnQgYWNyb3NzIGRpZmZlcmVudCBKU1xuICogcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7U3RyaW5nOiAqfSAtPiBbW1N0cmluZywqXV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBrZXksIHZhbHVlIGFycmF5cyBmcm9tIHRoZSBvYmplY3QncyBvd25cbiAqICAgICAgICAgYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBGID0gZnVuY3Rpb24oKSB7IHRoaXMueCA9ICdYJzsgfTtcbiAqICAgICAgRi5wcm90b3R5cGUueSA9ICdZJztcbiAqICAgICAgdmFyIGYgPSBuZXcgRigpO1xuICogICAgICBSLnRvUGFpcnNJbihmKTsgLy89PiBbWyd4JywnWCddLCBbJ3knLCdZJ11dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB0b1BhaXJzSW4ob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHBhaXJzW3BhaXJzLmxlbmd0aF0gPSBbcHJvcCwgb2JqW3Byb3BdXTtcbiAgfVxuICByZXR1cm4gcGFpcnM7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX3RvU3RyaW5nID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fdG9TdHJpbmcnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gdmFsdWUuIGBldmFsYCdpbmcgdGhlIG91dHB1dFxuICogc2hvdWxkIHJlc3VsdCBpbiBhIHZhbHVlIGVxdWl2YWxlbnQgdG8gdGhlIGlucHV0IHZhbHVlLiBNYW55IG9mIHRoZSBidWlsdC1pblxuICogYHRvU3RyaW5nYCBtZXRob2RzIGRvIG5vdCBzYXRpc2Z5IHRoaXMgcmVxdWlyZW1lbnQuXG4gKlxuICogSWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGBbb2JqZWN0IE9iamVjdF1gIHdpdGggYSBgdG9TdHJpbmdgIG1ldGhvZCBvdGhlclxuICogdGhhbiBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AsIHRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2l0aCBubyBhcmd1bWVudHNcbiAqIHRvIHByb2R1Y2UgdGhlIHJldHVybiB2YWx1ZS4gVGhpcyBtZWFucyB1c2VyLWRlZmluZWQgY29uc3RydWN0b3IgZnVuY3Rpb25zXG4gKiBjYW4gcHJvdmlkZSBhIHN1aXRhYmxlIGB0b1N0cmluZ2AgbWV0aG9kLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICogICAgICAgdGhpcy54ID0geDtcbiAqICAgICAgIHRoaXMueSA9IHk7XG4gKiAgICAgfVxuICpcbiAqICAgICBQb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAqICAgICAgIHJldHVybiAnbmV3IFBvaW50KCcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJyknO1xuICogICAgIH07XG4gKlxuICogICAgIFIudG9TdHJpbmcobmV3IFBvaW50KDEsIDIpKTsgLy89PiAnbmV3IFBvaW50KDEsIDIpJ1xuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgKiAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50b1N0cmluZyg0Mik7IC8vPT4gJzQyJ1xuICogICAgICBSLnRvU3RyaW5nKCdhYmMnKTsgLy89PiAnXCJhYmNcIidcbiAqICAgICAgUi50b1N0cmluZyhbMSwgMiwgM10pOyAvLz0+ICdbMSwgMiwgM10nXG4gKiAgICAgIFIudG9TdHJpbmcoe2ZvbzogMSwgYmFyOiAyLCBiYXo6IDN9KTsgLy89PiAne1wiYmFyXCI6IDIsIFwiYmF6XCI6IDMsIFwiZm9vXCI6IDF9J1xuICogICAgICBSLnRvU3RyaW5nKG5ldyBEYXRlKCcyMDAxLTAyLTAzVDA0OjA1OjA2WicpKTsgLy89PiAnbmV3IERhdGUoXCIyMDAxLTAyLTAzVDA0OjA1OjA2LjAwMFpcIiknXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB0b1N0cmluZyh2YWwpIHsgcmV0dXJuIF90b1N0cmluZyh2YWwsIFtdKTsgfSk7XG4iLCJ2YXIgaW52b2tlciA9IHJlcXVpcmUoJy4vaW52b2tlcicpO1xuXG5cbi8qKlxuICogVGhlIHVwcGVyIGNhc2UgdmVyc2lvbiBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHVwcGVyIGNhc2UuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB1cHBlciBjYXNlIHZlcnNpb24gb2YgYHN0cmAuXG4gKiBAc2VlIFIudG9Mb3dlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudG9VcHBlcignYWJjJyk7IC8vPT4gJ0FCQydcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBpbnZva2VyKDAsICd0b1VwcGVyQ2FzZScpO1xuIiwidmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfeHdyYXAgPSByZXF1aXJlKCcuL2ludGVybmFsL194d3JhcCcpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG5cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhIHRyYW5zZHVjZXIgdXNpbmcgc3VwcGxpZWQgaXRlcmF0b3IgZnVuY3Rpb24uIFJldHVybnMgYSBzaW5nbGVcbiAqIGl0ZW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nIHRoZSB0cmFuc2Zvcm1lZFxuICogaXRlcmF0b3IgZnVuY3Rpb24gYW5kIHBhc3NpbmcgaXQgYW4gYWNjdW11bGF0b3IgdmFsdWUgYW5kIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBmcm9tIHRoZSBhcnJheSwgYW5kIHRoZW4gcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IGNhbGwuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byB2YWx1ZXM6ICooYWNjLCB2YWx1ZSkqLiBJdCB3aWxsIGJlXG4gKiB3cmFwcGVkIGFzIGEgdHJhbnNmb3JtZXIgdG8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNkdWNlci4gQSB0cmFuc2Zvcm1lciBjYW4gYmVcbiAqIHBhc3NlZCBkaXJlY3RseSBpbiBwbGFjZSBvZiBhbiBpdGVyYXRvciBmdW5jdGlvbi4gSW4gYm90aCBjYXNlcywgaXRlcmF0aW9uXG4gKiBtYXkgYmUgc3RvcHBlZCBlYXJseSB3aXRoIHRoZSBbYFIucmVkdWNlZGBdKCNyZWR1Y2VkKSBmdW5jdGlvbi5cbiAqXG4gKiBBIHRyYW5zZHVjZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB0cmFuc2Zvcm1lciBhbmQgcmV0dXJucyBhXG4gKiB0cmFuc2Zvcm1lciBhbmQgY2FuIGJlIGNvbXBvc2VkIGRpcmVjdGx5LlxuICpcbiAqIEEgdHJhbnNmb3JtZXIgaXMgYW4gYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYSAyLWFyaXR5IHJlZHVjaW5nIGl0ZXJhdG9yXG4gKiBmdW5jdGlvbiwgc3RlcCwgMC1hcml0eSBpbml0aWFsIHZhbHVlIGZ1bmN0aW9uLCBpbml0LCBhbmQgMS1hcml0eSByZXN1bHRcbiAqIGV4dHJhY3Rpb24gZnVuY3Rpb24sIHJlc3VsdC4gVGhlIHN0ZXAgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgaXRlcmF0b3JcbiAqIGZ1bmN0aW9uIGluIHJlZHVjZS4gVGhlIHJlc3VsdCBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIGZpbmFsXG4gKiBhY2N1bXVsYXRvciBpbnRvIHRoZSByZXR1cm4gdHlwZSBhbmQgaW4gbW9zdCBjYXNlcyBpc1xuICogW2BSLmlkZW50aXR5YF0oI2lkZW50aXR5KS4gVGhlIGluaXQgZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBhblxuICogaW5pdGlhbCBhY2N1bXVsYXRvciwgYnV0IGlzIGlnbm9yZWQgYnkgdHJhbnNkdWNlLlxuICpcbiAqIFRoZSBpdGVyYXRpb24gaXMgcGVyZm9ybWVkIHdpdGggW2BSLnJlZHVjZWBdKCNyZWR1Y2UpIGFmdGVyIGluaXRpYWxpemluZyB0aGUgdHJhbnNkdWNlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYyAtPiBjKSAtPiAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBSZWNlaXZlcyBhIHRyYW5zZm9ybWVyIGFuZCByZXR1cm5zIGEgdHJhbnNmb3JtZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uIFJlY2VpdmVzIHR3byB2YWx1ZXMsIHRoZSBhY2N1bXVsYXRvciBhbmQgdGhlXG4gKiAgICAgICAgY3VycmVudCBlbGVtZW50IGZyb20gdGhlIGFycmF5LiBXcmFwcGVkIGFzIHRyYW5zZm9ybWVyLCBpZiBuZWNlc3NhcnksIGFuZCB1c2VkIHRvXG4gKiAgICAgICAgaW5pdGlhbGl6ZSB0aGUgdHJhbnNkdWNlclxuICogQHBhcmFtIHsqfSBhY2MgVGhlIGluaXRpYWwgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlLCBSLnJlZHVjZWQsIFIuaW50b1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBudW1iZXJzID0gWzEsIDIsIDMsIDRdO1xuICogICAgICB2YXIgdHJhbnNkdWNlciA9IFIuY29tcG9zZShSLm1hcChSLmFkZCgxKSksIFIudGFrZSgyKSk7XG4gKiAgICAgIFIudHJhbnNkdWNlKHRyYW5zZHVjZXIsIFIuZmxpcChSLmFwcGVuZCksIFtdLCBudW1iZXJzKTsgLy89PiBbMiwgM11cbiAqXG4gKiAgICAgIHZhciBpc09kZCA9ICh4KSA9PiB4ICUgMiA9PT0gMTtcbiAqICAgICAgdmFyIGZpcnN0T2RkVHJhbnNkdWNlciA9IFIuY29tcG9zZShSLmZpbHRlcihpc09kZCksIFIudGFrZSgxKSk7XG4gKiAgICAgIFIudHJhbnNkdWNlKGZpcnN0T2RkVHJhbnNkdWNlciwgUi5mbGlwKFIuYXBwZW5kKSwgW10sIFIucmFuZ2UoMCwgMTAwKSk7IC8vPT4gWzFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY3VycnlOKDQsIGZ1bmN0aW9uIHRyYW5zZHVjZSh4ZiwgZm4sIGFjYywgbGlzdCkge1xuICByZXR1cm4gX3JlZHVjZSh4Zih0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBfeHdyYXAoZm4pIDogZm4pLCBhY2MsIGxpc3QpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogVHJhbnNwb3NlcyB0aGUgcm93cyBhbmQgY29sdW1ucyBvZiBhIDJEIGxpc3QuXG4gKiBXaGVuIHBhc3NlZCBhIGxpc3Qgb2YgYG5gIGxpc3RzIG9mIGxlbmd0aCBgeGAsXG4gKiByZXR1cm5zIGEgbGlzdCBvZiBgeGAgbGlzdHMgb2YgbGVuZ3RoIGBuYC5cbiAqXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW1thXV0gLT4gW1thXV1cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQSAyRCBsaXN0XG4gKiBAcmV0dXJuIHtBcnJheX0gQSAyRCBsaXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50cmFuc3Bvc2UoW1sxLCAnYSddLCBbMiwgJ2InXSwgWzMsICdjJ11dKSAvLz0+IFtbMSwgMiwgM10sIFsnYScsICdiJywgJ2MnXV1cbiAqICAgICAgUi50cmFuc3Bvc2UoW1sxLCAyLCAzXSwgWydhJywgJ2InLCAnYyddXSkgLy89PiBbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV1cbiAqXG4gKiAgICAgIC8vIElmIHNvbWUgb2YgdGhlIHJvd3MgYXJlIHNob3J0ZXIgdGhhbiB0aGUgZm9sbG93aW5nIHJvd3MsIHRoZWlyIGVsZW1lbnRzIGFyZSBza2lwcGVkOlxuICogICAgICBSLnRyYW5zcG9zZShbWzEwLCAxMV0sIFsyMF0sIFtdLCBbMzAsIDMxLCAzMl1dKSAvLz0+IFtbMTAsIDIwLCAzMF0sIFsxMSwgMzFdLCBbMzJdXVxuICogQHN5bWIgUi50cmFuc3Bvc2UoW1thXSwgW2JdLCBbY11dKSA9IFthLCBiLCBjXVxuICogQHN5bWIgUi50cmFuc3Bvc2UoW1thLCBiXSwgW2MsIGRdXSkgPSBbW2EsIGNdLCBbYiwgZF1dXG4gKiBAc3ltYiBSLnRyYW5zcG9zZShbW2EsIGJdLCBbY11dKSA9IFtbYSwgY10sIFtiXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHRyYW5zcG9zZShvdXRlcmxpc3QpIHtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChpIDwgb3V0ZXJsaXN0Lmxlbmd0aCkge1xuICAgIHZhciBpbm5lcmxpc3QgPSBvdXRlcmxpc3RbaV07XG4gICAgdmFyIGogPSAwO1xuICAgIHdoaWxlIChqIDwgaW5uZXJsaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHRbal0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc3VsdFtqXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0W2pdLnB1c2goaW5uZXJsaXN0W2pdKTtcbiAgICAgIGogKz0gMTtcbiAgICB9XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcbnZhciBzZXF1ZW5jZSA9IHJlcXVpcmUoJy4vc2VxdWVuY2UnKTtcblxuXG4vKipcbiAqIE1hcHMgYW4gW0FwcGxpY2F0aXZlXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2FwcGxpY2F0aXZlKS1yZXR1cm5pbmdcbiAqIGZ1bmN0aW9uIG92ZXIgYSBbVHJhdmVyc2FibGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjdHJhdmVyc2FibGUpLFxuICogdGhlbiB1c2VzIFtgc2VxdWVuY2VgXSgjc2VxdWVuY2UpIHRvIHRyYW5zZm9ybSB0aGUgcmVzdWx0aW5nIFRyYXZlcnNhYmxlIG9mIEFwcGxpY2F0aXZlXG4gKiBpbnRvIGFuIEFwcGxpY2F0aXZlIG9mIFRyYXZlcnNhYmxlLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBzZXF1ZW5jZWAgbWV0aG9kIG9mIHRoZSB0aGlyZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoQXBwbGljYXRpdmUgZiwgVHJhdmVyc2FibGUgdCkgPT4gKGEgLT4gZiBhKSAtPiAoYSAtPiBmIGIpIC0+IHQgYSAtPiBmICh0IGIpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvZlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHBhcmFtIHsqfSB0cmF2ZXJzYWJsZVxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5zZXF1ZW5jZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIC8vIFJldHVybnMgYE5vdGhpbmdgIGlmIHRoZSBnaXZlbiBkaXZpc29yIGlzIGAwYFxuICogICAgICBzYWZlRGl2ID0gbiA9PiBkID0+IGQgPT09IDAgPyBOb3RoaW5nKCkgOiBKdXN0KG4gLyBkKVxuICpcbiAqICAgICAgUi50cmF2ZXJzZShNYXliZS5vZiwgc2FmZURpdigxMCksIFsyLCA0LCA1XSk7IC8vPT4gSnVzdChbNSwgMi41LCAyXSlcbiAqICAgICAgUi50cmF2ZXJzZShNYXliZS5vZiwgc2FmZURpdigxMCksIFsyLCAwLCA1XSk7IC8vPT4gTm90aGluZ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gdHJhdmVyc2Uob2YsIGYsIHRyYXZlcnNhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdHJhdmVyc2FibGVbJ2ZhbnRhc3ktbGFuZC90cmF2ZXJzZSddID09PSAnZnVuY3Rpb24nID9cbiAgICB0cmF2ZXJzYWJsZVsnZmFudGFzeS1sYW5kL3RyYXZlcnNlJ10oZiwgb2YpIDpcbiAgICBzZXF1ZW5jZShvZiwgbWFwKGYsIHRyYXZlcnNhYmxlKSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBSZW1vdmVzIChzdHJpcHMpIHdoaXRlc3BhY2UgZnJvbSBib3RoIGVuZHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRyaW1tZWQgdmVyc2lvbiBvZiBgc3RyYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRyaW0oJyAgIHh5eiAgJyk7IC8vPT4gJ3h5eidcbiAqICAgICAgUi5tYXAoUi50cmltLCBSLnNwbGl0KCcsJywgJ3gsIHksIHonKSk7IC8vPT4gWyd4JywgJ3knLCAneiddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgd3MgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgICAgICAgICAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4JyArXG4gICAgICAgICAgICdcXHUyMDI5XFx1RkVGRic7XG4gIHZhciB6ZXJvV2lkdGggPSAnXFx1MjAwYic7XG4gIHZhciBoYXNQcm90b1RyaW0gPSAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUudHJpbSA9PT0gJ2Z1bmN0aW9uJyk7XG4gIGlmICghaGFzUHJvdG9UcmltIHx8ICh3cy50cmltKCkgfHwgIXplcm9XaWR0aC50cmltKCkpKSB7XG4gICAgcmV0dXJuIF9jdXJyeTEoZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgICAgIHZhciBiZWdpblJ4ID0gbmV3IFJlZ0V4cCgnXlsnICsgd3MgKyAnXVsnICsgd3MgKyAnXSonKTtcbiAgICAgIHZhciBlbmRSeCA9IG5ldyBSZWdFeHAoJ1snICsgd3MgKyAnXVsnICsgd3MgKyAnXSokJyk7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoYmVnaW5SeCwgJycpLnJlcGxhY2UoZW5kUngsICcnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2N1cnJ5MShmdW5jdGlvbiB0cmltKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50cmltKCk7XG4gICAgfSk7XG4gIH1cbn0oKSk7XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogYHRyeUNhdGNoYCB0YWtlcyB0d28gZnVuY3Rpb25zLCBhIGB0cnllcmAgYW5kIGEgYGNhdGNoZXJgLiBUaGUgcmV0dXJuZWRcbiAqIGZ1bmN0aW9uIGV2YWx1YXRlcyB0aGUgYHRyeWVyYDsgaWYgaXQgZG9lcyBub3QgdGhyb3csIGl0IHNpbXBseSByZXR1cm5zIHRoZVxuICogcmVzdWx0LiBJZiB0aGUgYHRyeWVyYCAqZG9lcyogdGhyb3csIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBldmFsdWF0ZXMgdGhlXG4gKiBgY2F0Y2hlcmAgZnVuY3Rpb24gYW5kIHJldHVybnMgaXRzIHJlc3VsdC4gTm90ZSB0aGF0IGZvciBlZmZlY3RpdmVcbiAqIGNvbXBvc2l0aW9uIHdpdGggdGhpcyBmdW5jdGlvbiwgYm90aCB0aGUgYHRyeWVyYCBhbmQgYGNhdGNoZXJgIGZ1bmN0aW9uc1xuICogbXVzdCByZXR1cm4gdGhlIHNhbWUgdHlwZSBvZiByZXN1bHRzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIwLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoLi4ueCAtPiBhKSAtPiAoKGUsIC4uLngpIC0+IGEpIC0+ICguLi54IC0+IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cnllciBUaGUgZnVuY3Rpb24gdGhhdCBtYXkgdGhyb3cuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYXRjaGVyIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXZhbHVhdGVkIGlmIGB0cnllcmAgdGhyb3dzLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgd2lsbCBjYXRjaCBleGNlcHRpb25zIGFuZCBzZW5kIHRoZW4gdG8gdGhlIGNhdGNoZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50cnlDYXRjaChSLnByb3AoJ3gnKSwgUi5GKSh7eDogdHJ1ZX0pOyAvLz0+IHRydWVcbiAqICAgICAgUi50cnlDYXRjaChSLnByb3AoJ3gnKSwgUi5GKShudWxsKTsgICAgICAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBfdHJ5Q2F0Y2godHJ5ZXIsIGNhdGNoZXIpIHtcbiAgcmV0dXJuIF9hcml0eSh0cnllci5sZW5ndGgsIGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdHJ5ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gY2F0Y2hlci5hcHBseSh0aGlzLCBfY29uY2F0KFtlXSwgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIEdpdmVzIGEgc2luZ2xlLXdvcmQgc3RyaW5nIGRlc2NyaXB0aW9uIG9mIHRoZSAobmF0aXZlKSB0eXBlIG9mIGEgdmFsdWUsXG4gKiByZXR1cm5pbmcgc3VjaCBhbnN3ZXJzIGFzICdPYmplY3QnLCAnTnVtYmVyJywgJ0FycmF5Jywgb3IgJ051bGwnLiBEb2VzIG5vdFxuICogYXR0ZW1wdCB0byBkaXN0aW5ndWlzaCB1c2VyIE9iamVjdCB0eXBlcyBhbnkgZnVydGhlciwgcmVwb3J0aW5nIHRoZW0gYWxsIGFzXG4gKiAnT2JqZWN0Jy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC44LjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnICgqIC0+IHsqfSkgLT4gU3RyaW5nXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudHlwZSh7fSk7IC8vPT4gXCJPYmplY3RcIlxuICogICAgICBSLnR5cGUoMSk7IC8vPT4gXCJOdW1iZXJcIlxuICogICAgICBSLnR5cGUoZmFsc2UpOyAvLz0+IFwiQm9vbGVhblwiXG4gKiAgICAgIFIudHlwZSgncycpOyAvLz0+IFwiU3RyaW5nXCJcbiAqICAgICAgUi50eXBlKG51bGwpOyAvLz0+IFwiTnVsbFwiXG4gKiAgICAgIFIudHlwZShbXSk7IC8vPT4gXCJBcnJheVwiXG4gKiAgICAgIFIudHlwZSgvW0Etel0vKTsgLy89PiBcIlJlZ0V4cFwiXG4gKiAgICAgIFIudHlwZSgoKSA9PiB7fSk7IC8vPT4gXCJGdW5jdGlvblwiXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB0eXBlKHZhbCkge1xuICByZXR1cm4gdmFsID09PSBudWxsICAgICAgPyAnTnVsbCcgICAgICA6XG4gICAgICAgICB2YWwgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDpcbiAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpLnNsaWNlKDgsIC0xKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYGZuYCwgd2hpY2ggdGFrZXMgYSBzaW5nbGUgYXJyYXkgYXJndW1lbnQsIGFuZCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIHdoaWNoOlxuICpcbiAqICAgLSB0YWtlcyBhbnkgbnVtYmVyIG9mIHBvc2l0aW9uYWwgYXJndW1lbnRzO1xuICogICAtIHBhc3NlcyB0aGVzZSBhcmd1bWVudHMgdG8gYGZuYCBhcyBhbiBhcnJheTsgYW5kXG4gKiAgIC0gcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIEluIG90aGVyIHdvcmRzLCBgUi51bmFwcGx5YCBkZXJpdmVzIGEgdmFyaWFkaWMgZnVuY3Rpb24gZnJvbSBhIGZ1bmN0aW9uIHdoaWNoXG4gKiB0YWtlcyBhbiBhcnJheS4gYFIudW5hcHBseWAgaXMgdGhlIGludmVyc2Ugb2YgW2BSLmFwcGx5YF0oI2FwcGx5KS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC44LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoWyouLi5dIC0+IGEpIC0+ICgqLi4uIC0+IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIuYXBwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuYXBwbHkoSlNPTi5zdHJpbmdpZnkpKDEsIDIsIDMpOyAvLz0+ICdbMSwyLDNdJ1xuICogQHN5bWIgUi51bmFwcGx5KGYpKGEsIGIpID0gZihbYSwgYl0pXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB1bmFwcGx5KGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZm4oQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG4gIH07XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgbkFyeSA9IHJlcXVpcmUoJy4vbkFyeScpO1xuXG5cbi8qKlxuICogV3JhcHMgYSBmdW5jdGlvbiBvZiBhbnkgYXJpdHkgKGluY2x1ZGluZyBudWxsYXJ5KSBpbiBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0c1xuICogZXhhY3RseSAxIHBhcmFtZXRlci4gQW55IGV4dHJhbmVvdXMgcGFyYW1ldGVycyB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gdGhlXG4gKiBzdXBwbGllZCBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBiKSAtPiAoYSAtPiBiKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIG9mXG4gKiAgICAgICAgIGFyaXR5IDEuXG4gKiBAc2VlIFIuYmluYXJ5LCBSLm5BcnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdGFrZXNUd29BcmdzID0gZnVuY3Rpb24oYSwgYikge1xuICogICAgICAgIHJldHVybiBbYSwgYl07XG4gKiAgICAgIH07XG4gKiAgICAgIHRha2VzVHdvQXJncy5sZW5ndGg7IC8vPT4gMlxuICogICAgICB0YWtlc1R3b0FyZ3MoMSwgMik7IC8vPT4gWzEsIDJdXG4gKlxuICogICAgICB2YXIgdGFrZXNPbmVBcmcgPSBSLnVuYXJ5KHRha2VzVHdvQXJncyk7XG4gKiAgICAgIHRha2VzT25lQXJnLmxlbmd0aDsgLy89PiAxXG4gKiAgICAgIC8vIE9ubHkgMSBhcmd1bWVudCBpcyBwYXNzZWQgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb25cbiAqICAgICAgdGFrZXNPbmVBcmcoMSwgMik7IC8vPT4gWzEsIHVuZGVmaW5lZF1cbiAqIEBzeW1iIFIudW5hcnkoZikoYSwgYiwgYykgPSBmKGEpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB1bmFyeShmbikge1xuICByZXR1cm4gbkFyeSgxLCBmbik7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBvZiBhcml0eSBgbmAgZnJvbSBhIChtYW51YWxseSkgY3VycmllZCBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+IChhIC0+IGIpIC0+IChhIC0+IGMpXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBmb3IgdGhlIHJldHVybmVkIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHVuY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYWRkRm91ciA9IGEgPT4gYiA9PiBjID0+IGQgPT4gYSArIGIgKyBjICsgZDtcbiAqXG4gKiAgICAgIHZhciB1bmN1cnJpZWRBZGRGb3VyID0gUi51bmN1cnJ5Tig0LCBhZGRGb3VyKTtcbiAqICAgICAgdW5jdXJyaWVkQWRkRm91cigxLCAyLCAzLCA0KTsgLy89PiAxMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gdW5jdXJyeU4oZGVwdGgsIGZuKSB7XG4gIHJldHVybiBjdXJyeU4oZGVwdGgsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50RGVwdGggPSAxO1xuICAgIHZhciB2YWx1ZSA9IGZuO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciBlbmRJZHg7XG4gICAgd2hpbGUgKGN1cnJlbnREZXB0aCA8PSBkZXB0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVuZElkeCA9IGN1cnJlbnREZXB0aCA9PT0gZGVwdGggPyBhcmd1bWVudHMubGVuZ3RoIDogaWR4ICsgdmFsdWUubGVuZ3RoO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGlkeCwgZW5kSWR4KSk7XG4gICAgICBjdXJyZW50RGVwdGggKz0gMTtcbiAgICAgIGlkeCA9IGVuZElkeDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEJ1aWxkcyBhIGxpc3QgZnJvbSBhIHNlZWQgdmFsdWUuIEFjY2VwdHMgYW4gaXRlcmF0b3IgZnVuY3Rpb24sIHdoaWNoIHJldHVybnNcbiAqIGVpdGhlciBmYWxzZSB0byBzdG9wIGl0ZXJhdGlvbiBvciBhbiBhcnJheSBvZiBsZW5ndGggMiBjb250YWluaW5nIHRoZSB2YWx1ZVxuICogdG8gYWRkIHRvIHRoZSByZXN1bHRpbmcgbGlzdCBhbmQgdGhlIHNlZWQgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBjYWxsIHRvIHRoZVxuICogaXRlcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIG9uZSBhcmd1bWVudDogKihzZWVkKSouXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTAuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gW2JdKSAtPiAqIC0+IFtiXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLiByZWNlaXZlcyBvbmUgYXJndW1lbnQsIGBzZWVkYCwgYW5kIHJldHVybnNcbiAqICAgICAgICBlaXRoZXIgZmFsc2UgdG8gcXVpdCBpdGVyYXRpb24gb3IgYW4gYXJyYXkgb2YgbGVuZ3RoIHR3byB0byBwcm9jZWVkLiBUaGUgZWxlbWVudFxuICogICAgICAgIGF0IGluZGV4IDAgb2YgdGhpcyBhcnJheSB3aWxsIGJlIGFkZGVkIHRvIHRoZSByZXN1bHRpbmcgYXJyYXksIGFuZCB0aGUgZWxlbWVudFxuICogICAgICAgIGF0IGluZGV4IDEgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIG5leHQgY2FsbCB0byBgZm5gLlxuICogQHBhcmFtIHsqfSBzZWVkIFRoZSBzZWVkIHZhbHVlLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBmaW5hbCBsaXN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBmID0gbiA9PiBuID4gNTAgPyBmYWxzZSA6IFstbiwgbiArIDEwXTtcbiAqICAgICAgUi51bmZvbGQoZiwgMTApOyAvLz0+IFstMTAsIC0yMCwgLTMwLCAtNDAsIC01MF1cbiAqIEBzeW1iIFIudW5mb2xkKGYsIHgpID0gW2YoeClbMF0sIGYoZih4KVsxXSlbMF0sIGYoZihmKHgpWzFdKVsxXSlbMF0sIC4uLl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHVuZm9sZChmbiwgc2VlZCkge1xuICB2YXIgcGFpciA9IGZuKHNlZWQpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChwYWlyICYmIHBhaXIubGVuZ3RoKSB7XG4gICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcGFpclswXTtcbiAgICBwYWlyID0gZm4ocGFpclsxXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xudmFyIHVuaXEgPSByZXF1aXJlKCcuL3VuaXEnKTtcblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byBsaXN0cyBpbnRvIGEgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIGNvbXBvc2VkIG9mIHRoZSBlbGVtZW50c1xuICogb2YgZWFjaCBsaXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFsqXSAtPiBbKl0gLT4gWypdXG4gKiBAcGFyYW0ge0FycmF5fSBhcyBUaGUgZmlyc3QgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGJzIFRoZSBzZWNvbmQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgZmlyc3QgYW5kIHNlY29uZCBsaXN0cyBjb25jYXRlbmF0ZWQsIHdpdGhcbiAqICAgICAgICAgZHVwbGljYXRlcyByZW1vdmVkLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudW5pb24oWzEsIDIsIDNdLCBbMiwgMywgNF0pOyAvLz0+IFsxLCAyLCAzLCA0XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoY29tcG9zZSh1bmlxLCBfY29uY2F0KSk7XG4iLCJ2YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbmNhdCcpO1xudmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciB1bmlxV2l0aCA9IHJlcXVpcmUoJy4vdW5pcVdpdGgnKTtcblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byBsaXN0cyBpbnRvIGEgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIGNvbXBvc2VkIG9mIHRoZSBlbGVtZW50c1xuICogb2YgZWFjaCBsaXN0LiBEdXBsaWNhdGlvbiBpcyBkZXRlcm1pbmVkIGFjY29yZGluZyB0byB0aGUgdmFsdWUgcmV0dXJuZWQgYnlcbiAqIGFwcGx5aW5nIHRoZSBzdXBwbGllZCBwcmVkaWNhdGUgdG8gdHdvIGxpc3QgZWxlbWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgKGEgLT4gYSAtPiBCb29sZWFuKSAtPiBbKl0gLT4gWypdIC0+IFsqXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCBBIHByZWRpY2F0ZSB1c2VkIHRvIHRlc3Qgd2hldGhlciB0d28gaXRlbXMgYXJlIGVxdWFsLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDEgVGhlIGZpcnN0IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MiBUaGUgc2Vjb25kIGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMgY29uY2F0ZW5hdGVkLCB3aXRoXG4gKiAgICAgICAgIGR1cGxpY2F0ZXMgcmVtb3ZlZC5cbiAqIEBzZWUgUi51bmlvblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBsMSA9IFt7YTogMX0sIHthOiAyfV07XG4gKiAgICAgIHZhciBsMiA9IFt7YTogMX0sIHthOiA0fV07XG4gKiAgICAgIFIudW5pb25XaXRoKFIuZXFCeShSLnByb3AoJ2EnKSksIGwxLCBsMik7IC8vPT4gW3thOiAxfSwge2E6IDJ9LCB7YTogNH1dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiB1bmlvbldpdGgocHJlZCwgbGlzdDEsIGxpc3QyKSB7XG4gIHJldHVybiB1bmlxV2l0aChwcmVkLCBfY29uY2F0KGxpc3QxLCBsaXN0MikpO1xufSk7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG52YXIgdW5pcUJ5ID0gcmVxdWlyZSgnLi91bmlxQnknKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIG9ubHkgb25lIGNvcHkgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICogbGlzdC4gW2BSLmVxdWFsc2BdKCNlcXVhbHMpIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFthXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudW5pcShbMSwgMSwgMiwgMV0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnVuaXEoWzEsICcxJ10pOyAgICAgLy89PiBbMSwgJzEnXVxuICogICAgICBSLnVuaXEoW1s0Ml0sIFs0Ml1dKTsgLy89PiBbWzQyXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB1bmlxQnkoaWRlbnRpdHkpO1xuIiwidmFyIF9TZXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19TZXQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyBvbmx5IG9uZSBjb3B5IG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAqIGxpc3QsIGJhc2VkIHVwb24gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGFwcGx5aW5nIHRoZSBzdXBwbGllZCBmdW5jdGlvbiB0b1xuICogZWFjaCBsaXN0IGVsZW1lbnQuIFByZWZlcnMgdGhlIGZpcnN0IGl0ZW0gaWYgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHByb2R1Y2VzXG4gKiB0aGUgc2FtZSB2YWx1ZSBvbiB0d28gaXRlbXMuIFtgUi5lcXVhbHNgXSgjZXF1YWxzKSBpcyB1c2VkIGZvciBjb21wYXJpc29uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IGIpIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgZnVuY3Rpb24gdXNlZCB0byBwcm9kdWNlIGEgdmFsdWUgdG8gdXNlIGR1cmluZyBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBsaXN0IG9mIHVuaXF1ZSBpdGVtcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuaXFCeShNYXRoLmFicywgWy0xLCAtNSwgMiwgMTAsIDEsIDJdKTsgLy89PiBbLTEsIC01LCAyLCAxMF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHVuaXFCeShmbiwgbGlzdCkge1xuICB2YXIgc2V0ID0gbmV3IF9TZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGFwcGxpZWRJdGVtLCBpdGVtO1xuXG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgYXBwbGllZEl0ZW0gPSBmbihpdGVtKTtcbiAgICBpZiAoc2V0LmFkZChhcHBsaWVkSXRlbSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2NvbnRhaW5zV2l0aCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zV2l0aCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIG9ubHkgb25lIGNvcHkgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICogbGlzdCwgYmFzZWQgdXBvbiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSB0b1xuICogdHdvIGxpc3QgZWxlbWVudHMuIFByZWZlcnMgdGhlIGZpcnN0IGl0ZW0gaWYgdHdvIGl0ZW1zIGNvbXBhcmUgZXF1YWwgYmFzZWRcbiAqIG9uIHRoZSBwcmVkaWNhdGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSwgYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHVzZWQgdG8gdGVzdCB3aGV0aGVyIHR3byBpdGVtcyBhcmUgZXF1YWwuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiB1bmlxdWUgaXRlbXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHN0ckVxID0gUi5lcUJ5KFN0cmluZyk7XG4gKiAgICAgIFIudW5pcVdpdGgoc3RyRXEpKFsxLCAnMScsIDIsIDFdKTsgLy89PiBbMSwgMl1cbiAqICAgICAgUi51bmlxV2l0aChzdHJFcSkoW3t9LCB7fV0pOyAgICAgICAvLz0+IFt7fV1cbiAqICAgICAgUi51bmlxV2l0aChzdHJFcSkoWzEsICcxJywgMV0pOyAgICAvLz0+IFsxXVxuICogICAgICBSLnVuaXFXaXRoKHN0ckVxKShbJzEnLCAxLCAxXSk7ICAgIC8vPT4gWycxJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHVuaXFXaXRoKHByZWQsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaXRlbTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgaWYgKCFfY29udGFpbnNXaXRoKHByZWQsIGl0ZW0sIHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBUZXN0cyB0aGUgZmluYWwgYXJndW1lbnQgYnkgcGFzc2luZyBpdCB0byB0aGUgZ2l2ZW4gcHJlZGljYXRlIGZ1bmN0aW9uLiBJZlxuICogdGhlIHByZWRpY2F0ZSBpcyBub3Qgc2F0aXNmaWVkLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZlxuICogY2FsbGluZyB0aGUgYHdoZW5GYWxzZUZuYCBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50LiBJZiB0aGUgcHJlZGljYXRlXG4gKiBpcyBzYXRpc2ZpZWQsIHRoZSBhcmd1bWVudCBpcyByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gKGEgLT4gYSkgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkICAgICAgICBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gd2hlbkZhbHNlRm4gQSBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgYHByZWRgIGV2YWx1YXRlc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBmYWxzeSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gICAgICAgIHggICAgICAgICAgIEFuIG9iamVjdCB0byB0ZXN0IHdpdGggdGhlIGBwcmVkYCBmdW5jdGlvbiBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3MgdG8gYHdoZW5GYWxzZUZuYCBpZiBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHsqfSBFaXRoZXIgYHhgIG9yIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgYHhgIHRvIGB3aGVuRmFsc2VGbmAuXG4gKiBAc2VlIFIuaWZFbHNlLCBSLndoZW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBsZXQgc2FmZUluYyA9IFIudW5sZXNzKFIuaXNOaWwsIFIuaW5jKTtcbiAqICAgICAgc2FmZUluYyhudWxsKTsgLy89PiBudWxsXG4gKiAgICAgIHNhZmVJbmMoMSk7IC8vPT4gMlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gdW5sZXNzKHByZWQsIHdoZW5GYWxzZUZuLCB4KSB7XG4gIHJldHVybiBwcmVkKHgpID8geCA6IHdoZW5GYWxzZUZuKHgpO1xufSk7XG4iLCJ2YXIgX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faWRlbnRpdHknKTtcbnZhciBjaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcblxuXG4vKipcbiAqIFNob3J0aGFuZCBmb3IgYFIuY2hhaW4oUi5pZGVudGl0eSlgLCB3aGljaCByZW1vdmVzIG9uZSBsZXZlbCBvZiBuZXN0aW5nIGZyb21cbiAqIGFueSBbQ2hhaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjY2hhaW4pLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjMuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgQ2hhaW4gYyA9PiBjIChjIGEpIC0+IGMgYVxuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLmZsYXR0ZW4sIFIuY2hhaW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVubmVzdChbMSwgWzJdLCBbWzNdXV0pOyAvLz0+IFsxLCAyLCBbM11dXG4gKiAgICAgIFIudW5uZXN0KFtbMSwgMl0sIFszLCA0XSwgWzUsIDZdXSk7IC8vPT4gWzEsIDIsIDMsIDQsIDUsIDZdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2hhaW4oX2lkZW50aXR5KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIHByZWRpY2F0ZSwgYSB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiwgYW5kIGFuIGluaXRpYWwgdmFsdWUsXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBJdCBkb2VzIHNvIGJ5IGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1hdGlvbiB1bnRpbCB0aGUgcHJlZGljYXRlIGlzIHNhdGlzZmllZCxcbiAqIGF0IHdoaWNoIHBvaW50IGl0IHJldHVybnMgdGhlIHNhdGlzZmFjdG9yeSB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gKGEgLT4gYSkgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSB7Kn0gaW5pdCBJbml0aWFsIHZhbHVlXG4gKiBAcmV0dXJuIHsqfSBGaW5hbCB2YWx1ZSB0aGF0IHNhdGlzZmllcyBwcmVkaWNhdGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVudGlsKFIuZ3QoUi5fXywgMTAwKSwgUi5tdWx0aXBseSgyKSkoMSkgLy8gPT4gMTI4XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiB1bnRpbChwcmVkLCBmbiwgaW5pdCkge1xuICB2YXIgdmFsID0gaW5pdDtcbiAgd2hpbGUgKCFwcmVkKHZhbCkpIHtcbiAgICB2YWwgPSBmbih2YWwpO1xuICB9XG4gIHJldHVybiB2YWw7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgYWRqdXN0ID0gcmVxdWlyZSgnLi9hZGp1c3QnKTtcbnZhciBhbHdheXMgPSByZXF1aXJlKCcuL2Fsd2F5cycpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjb3B5IG9mIHRoZSBhcnJheSB3aXRoIHRoZSBlbGVtZW50IGF0IHRoZSBwcm92aWRlZCBpbmRleFxuICogcmVwbGFjZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IGEgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtOdW1iZXJ9IGlkeCBUaGUgaW5kZXggdG8gdXBkYXRlLlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0byBleGlzdCBhdCB0aGUgZ2l2ZW4gaW5kZXggb2YgdGhlIHJldHVybmVkIGFycmF5LlxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IGxpc3QgVGhlIHNvdXJjZSBhcnJheS1saWtlIG9iamVjdCB0byBiZSB1cGRhdGVkLlxuICogQHJldHVybiB7QXJyYXl9IEEgY29weSBvZiBgbGlzdGAgd2l0aCB0aGUgdmFsdWUgYXQgaW5kZXggYGlkeGAgcmVwbGFjZWQgd2l0aCBgeGAuXG4gKiBAc2VlIFIuYWRqdXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51cGRhdGUoMSwgMTEsIFswLCAxLCAyXSk7ICAgICAvLz0+IFswLCAxMSwgMl1cbiAqICAgICAgUi51cGRhdGUoMSkoMTEpKFswLCAxLCAyXSk7ICAgICAvLz0+IFswLCAxMSwgMl1cbiAqIEBzeW1iIFIudXBkYXRlKC0xLCBhLCBbYiwgY10pID0gW2IsIGFdXG4gKiBAc3ltYiBSLnVwZGF0ZSgwLCBhLCBbYiwgY10pID0gW2EsIGNdXG4gKiBAc3ltYiBSLnVwZGF0ZSgxLCBhLCBbYiwgY10pID0gW2IsIGFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiB1cGRhdGUoaWR4LCB4LCBsaXN0KSB7XG4gIHJldHVybiBhZGp1c3QoYWx3YXlzKHgpLCBpZHgsIGxpc3QpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgZnVuY3Rpb24gYGZuYCBhbmQgYSBsaXN0IG9mIHRyYW5zZm9ybWVyIGZ1bmN0aW9ucyBhbmQgcmV0dXJucyBhXG4gKiBuZXcgY3VycmllZCBmdW5jdGlvbi4gV2hlbiB0aGUgbmV3IGZ1bmN0aW9uIGlzIGludm9rZWQsIGl0IGNhbGxzIHRoZVxuICogZnVuY3Rpb24gYGZuYCB3aXRoIHBhcmFtZXRlcnMgY29uc2lzdGluZyBvZiB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgZWFjaFxuICogc3VwcGxpZWQgaGFuZGxlciBvbiBzdWNjZXNzaXZlIGFyZ3VtZW50cyB0byB0aGUgbmV3IGZ1bmN0aW9uLlxuICpcbiAqIElmIG1vcmUgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gdGhlIHJldHVybmVkIGZ1bmN0aW9uIHRoYW4gdHJhbnNmb3JtZXJcbiAqIGZ1bmN0aW9ucywgdGhvc2UgYXJndW1lbnRzIGFyZSBwYXNzZWQgZGlyZWN0bHkgdG8gYGZuYCBhcyBhZGRpdGlvbmFsXG4gKiBwYXJhbWV0ZXJzLiBJZiB5b3UgZXhwZWN0IGFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgZG9uJ3QgbmVlZCB0byBiZVxuICogdHJhbnNmb3JtZWQsIGFsdGhvdWdoIHlvdSBjYW4gaWdub3JlIHRoZW0sIGl0J3MgYmVzdCB0byBwYXNzIGFuIGlkZW50aXR5XG4gKiBmdW5jdGlvbiBzbyB0aGF0IHRoZSBuZXcgZnVuY3Rpb24gcmVwb3J0cyB0aGUgY29ycmVjdCBhcml0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoeDEgLT4geDIgLT4gLi4uIC0+IHopIC0+IFsoYSAtPiB4MSksIChiIC0+IHgyKSwgLi4uXSAtPiAoYSAtPiBiIC0+IC4uLiAtPiB6KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0FycmF5fSB0cmFuc2Zvcm1lcnMgQSBsaXN0IG9mIHRyYW5zZm9ybWVyIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB3cmFwcGVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmNvbnZlcmdlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51c2VXaXRoKE1hdGgucG93LCBbUi5pZGVudGl0eSwgUi5pZGVudGl0eV0pKDMsIDQpOyAvLz0+IDgxXG4gKiAgICAgIFIudXNlV2l0aChNYXRoLnBvdywgW1IuaWRlbnRpdHksIFIuaWRlbnRpdHldKSgzKSg0KTsgLy89PiA4MVxuICogICAgICBSLnVzZVdpdGgoTWF0aC5wb3csIFtSLmRlYywgUi5pbmNdKSgzLCA0KTsgLy89PiAzMlxuICogICAgICBSLnVzZVdpdGgoTWF0aC5wb3csIFtSLmRlYywgUi5pbmNdKSgzKSg0KTsgLy89PiAzMlxuICogQHN5bWIgUi51c2VXaXRoKGYsIFtnLCBoXSkoYSwgYikgPSBmKGcoYSksIGgoYikpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB1c2VXaXRoKGZuLCB0cmFuc2Zvcm1lcnMpIHtcbiAgcmV0dXJuIGN1cnJ5Tih0cmFuc2Zvcm1lcnMubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCB0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICBhcmdzLnB1c2godHJhbnNmb3JtZXJzW2lkeF0uY2FsbCh0aGlzLCBhcmd1bWVudHNbaWR4XSkpO1xuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIHRyYW5zZm9ybWVycy5sZW5ndGgpKSk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgZW51bWVyYWJsZSBvd24gcHJvcGVydGllcyBvZiB0aGUgc3VwcGxpZWQgb2JqZWN0LlxuICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIGFjcm9zcyBkaWZmZXJlbnRcbiAqIEpTIHBsYXRmb3Jtcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2s6IHZ9IC0+IFt2XVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGV4dHJhY3QgdmFsdWVzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiB0aGUgdmFsdWVzIG9mIHRoZSBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAqIEBzZWUgUi52YWx1ZXNJbiwgUi5rZXlzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi52YWx1ZXMoe2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiBbMSwgMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgdmFyIHByb3BzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoO1xuICB2YXIgdmFscyA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHZhbHNbaWR4XSA9IG9ialtwcm9wc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gdmFscztcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgcHJvcGVydGllcywgaW5jbHVkaW5nIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBvZiB0aGVcbiAqIHN1cHBsaWVkIG9iamVjdC5cbiAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIG91dHB1dCBhcnJheSBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBjb25zaXN0ZW50XG4gKiBhY3Jvc3MgZGlmZmVyZW50IEpTIHBsYXRmb3Jtcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2s6IHZ9IC0+IFt2XVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGV4dHJhY3QgdmFsdWVzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiB0aGUgdmFsdWVzIG9mIHRoZSBvYmplY3QncyBvd24gYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICogQHNlZSBSLnZhbHVlcywgUi5rZXlzSW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgRiA9IGZ1bmN0aW9uKCkgeyB0aGlzLnggPSAnWCc7IH07XG4gKiAgICAgIEYucHJvdG90eXBlLnkgPSAnWSc7XG4gKiAgICAgIHZhciBmID0gbmV3IEYoKTtcbiAqICAgICAgUi52YWx1ZXNJbihmKTsgLy89PiBbJ1gnLCAnWSddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB2YWx1ZXNJbihvYmopIHtcbiAgdmFyIHByb3A7XG4gIHZhciB2cyA9IFtdO1xuICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgdnNbdnMubGVuZ3RoXSA9IG9ialtwcm9wXTtcbiAgfVxuICByZXR1cm4gdnM7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgXCJ2aWV3XCIgb2YgdGhlIGdpdmVuIGRhdGEgc3RydWN0dXJlLCBkZXRlcm1pbmVkIGJ5IHRoZSBnaXZlbiBsZW5zLlxuICogVGhlIGxlbnMncyBmb2N1cyBkZXRlcm1pbmVzIHdoaWNoIHBvcnRpb24gb2YgdGhlIGRhdGEgc3RydWN0dXJlIGlzIHZpc2libGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHR5cGVkZWZuIExlbnMgcyBhID0gRnVuY3RvciBmID0+IChhIC0+IGYgYSkgLT4gcyAtPiBmIHNcbiAqIEBzaWcgTGVucyBzIGEgLT4gcyAtPiBhXG4gKiBAcGFyYW0ge0xlbnN9IGxlbnNcbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5wcm9wLCBSLmxlbnNJbmRleCwgUi5sZW5zUHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB4TGVucyA9IFIubGVuc1Byb3AoJ3gnKTtcbiAqXG4gKiAgICAgIFIudmlldyh4TGVucywge3g6IDEsIHk6IDJ9KTsgIC8vPT4gMVxuICogICAgICBSLnZpZXcoeExlbnMsIHt4OiA0LCB5OiAyfSk7ICAvLz0+IDRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIC8vIGBDb25zdGAgaXMgYSBmdW5jdG9yIHRoYXQgZWZmZWN0aXZlbHkgaWdub3JlcyB0aGUgZnVuY3Rpb24gZ2l2ZW4gdG8gYG1hcGAuXG4gIHZhciBDb25zdCA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB4LCAnZmFudGFzeS1sYW5kL21hcCc6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfX07XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gdmlldyhsZW5zLCB4KSB7XG4gICAgLy8gVXNpbmcgYENvbnN0YCBlZmZlY3RpdmVseSBpZ25vcmVzIHRoZSBzZXR0ZXIgZnVuY3Rpb24gb2YgdGhlIGBsZW5zYCxcbiAgICAvLyBsZWF2aW5nIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgZ2V0dGVyIGZ1bmN0aW9uIHVubW9kaWZpZWQuXG4gICAgcmV0dXJuIGxlbnMoQ29uc3QpKHgpLnZhbHVlO1xuICB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogVGVzdHMgdGhlIGZpbmFsIGFyZ3VtZW50IGJ5IHBhc3NpbmcgaXQgdG8gdGhlIGdpdmVuIHByZWRpY2F0ZSBmdW5jdGlvbi4gSWZcbiAqIHRoZSBwcmVkaWNhdGUgaXMgc2F0aXNmaWVkLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiB0aGUgYHdoZW5UcnVlRm5gIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgYXJndW1lbnQuIElmIHRoZSBwcmVkaWNhdGUgaXMgbm90XG4gKiBzYXRpc2ZpZWQsIHRoZSBhcmd1bWVudCBpcyByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gKGEgLT4gYSkgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkICAgICAgIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB3aGVuVHJ1ZUZuIEEgZnVuY3Rpb24gdG8gaW52b2tlIHdoZW4gdGhlIGBjb25kaXRpb25gXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2YWx1YXRlcyB0byBhIHRydXRoeSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gICAgICAgIHggICAgICAgICAgQW4gb2JqZWN0IHRvIHRlc3Qgd2l0aCB0aGUgYHByZWRgIGZ1bmN0aW9uIGFuZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzIHRvIGB3aGVuVHJ1ZUZuYCBpZiBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHsqfSBFaXRoZXIgYHhgIG9yIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgYHhgIHRvIGB3aGVuVHJ1ZUZuYC5cbiAqIEBzZWUgUi5pZkVsc2UsIFIudW5sZXNzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gdHJ1bmNhdGUgOjogU3RyaW5nIC0+IFN0cmluZ1xuICogICAgICB2YXIgdHJ1bmNhdGUgPSBSLndoZW4oXG4gKiAgICAgICAgUi5wcm9wU2F0aXNmaWVzKFIuZ3QoUi5fXywgMTApLCAnbGVuZ3RoJyksXG4gKiAgICAgICAgUi5waXBlKFIudGFrZSgxMCksIFIuYXBwZW5kKCfigKYnKSwgUi5qb2luKCcnKSlcbiAqICAgICAgKTtcbiAqICAgICAgdHJ1bmNhdGUoJzEyMzQ1Jyk7ICAgICAgICAgLy89PiAnMTIzNDUnXG4gKiAgICAgIHRydW5jYXRlKCcwMTIzNDU2Nzg5QUJDJyk7IC8vPT4gJzAxMjM0NTY3ODnigKYnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiB3aGVuKHByZWQsIHdoZW5UcnVlRm4sIHgpIHtcbiAgcmV0dXJuIHByZWQoeCkgPyB3aGVuVHJ1ZUZuKHgpIDogeDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIHNwZWMgb2JqZWN0IGFuZCBhIHRlc3Qgb2JqZWN0OyByZXR1cm5zIHRydWUgaWYgdGhlIHRlc3Qgc2F0aXNmaWVzXG4gKiB0aGUgc3BlYy4gRWFjaCBvZiB0aGUgc3BlYydzIG93biBwcm9wZXJ0aWVzIG11c3QgYmUgYSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBFYWNoIHByZWRpY2F0ZSBpcyBhcHBsaWVkIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSBvZiB0aGVcbiAqIHRlc3Qgb2JqZWN0LiBgd2hlcmVgIHJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIHByZWRpY2F0ZXMgcmV0dXJuIHRydWUsIGZhbHNlXG4gKiBvdGhlcndpc2UuXG4gKlxuICogYHdoZXJlYCBpcyB3ZWxsIHN1aXRlZCB0byBkZWNsYXJhdGl2ZWx5IGV4cHJlc3NpbmcgY29uc3RyYWludHMgZm9yIG90aGVyXG4gKiBmdW5jdGlvbnMgc3VjaCBhcyBbYGZpbHRlcmBdKCNmaWx0ZXIpIGFuZCBbYGZpbmRgXSgjZmluZCkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtTdHJpbmc6ICgqIC0+IEJvb2xlYW4pfSAtPiB7U3RyaW5nOiAqfSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gc3BlY1xuICogQHBhcmFtIHtPYmplY3R9IHRlc3RPYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gcHJlZCA6OiBPYmplY3QgLT4gQm9vbGVhblxuICogICAgICB2YXIgcHJlZCA9IFIud2hlcmUoe1xuICogICAgICAgIGE6IFIuZXF1YWxzKCdmb28nKSxcbiAqICAgICAgICBiOiBSLmNvbXBsZW1lbnQoUi5lcXVhbHMoJ2JhcicpKSxcbiAqICAgICAgICB4OiBSLmd0KFIuX18sIDEwKSxcbiAqICAgICAgICB5OiBSLmx0KFIuX18sIDIwKVxuICogICAgICB9KTtcbiAqXG4gKiAgICAgIHByZWQoe2E6ICdmb28nLCBiOiAneHh4JywgeDogMTEsIHk6IDE5fSk7IC8vPT4gdHJ1ZVxuICogICAgICBwcmVkKHthOiAneHh4JywgYjogJ3h4eCcsIHg6IDExLCB5OiAxOX0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIHByZWQoe2E6ICdmb28nLCBiOiAnYmFyJywgeDogMTEsIHk6IDE5fSk7IC8vPT4gZmFsc2VcbiAqICAgICAgcHJlZCh7YTogJ2ZvbycsIGI6ICd4eHgnLCB4OiAxMCwgeTogMTl9KTsgLy89PiBmYWxzZVxuICogICAgICBwcmVkKHthOiAnZm9vJywgYjogJ3h4eCcsIHg6IDExLCB5OiAyMH0pOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB3aGVyZShzcGVjLCB0ZXN0T2JqKSB7XG4gIGZvciAodmFyIHByb3AgaW4gc3BlYykge1xuICAgIGlmIChfaGFzKHByb3AsIHNwZWMpICYmICFzcGVjW3Byb3BdKHRlc3RPYmpbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcbnZhciB3aGVyZSA9IHJlcXVpcmUoJy4vd2hlcmUnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgc3BlYyBvYmplY3QgYW5kIGEgdGVzdCBvYmplY3Q7IHJldHVybnMgdHJ1ZSBpZiB0aGUgdGVzdCBzYXRpc2ZpZXNcbiAqIHRoZSBzcGVjLCBmYWxzZSBvdGhlcndpc2UuIEFuIG9iamVjdCBzYXRpc2ZpZXMgdGhlIHNwZWMgaWYsIGZvciBlYWNoIG9mIHRoZVxuICogc3BlYydzIG93biBwcm9wZXJ0aWVzLCBhY2Nlc3NpbmcgdGhhdCBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0IGdpdmVzIHRoZSBzYW1lXG4gKiB2YWx1ZSAoaW4gW2BSLmVxdWFsc2BdKCNlcXVhbHMpIHRlcm1zKSBhcyBhY2Nlc3NpbmcgdGhhdCBwcm9wZXJ0eSBvZiB0aGVcbiAqIHNwZWMuXG4gKlxuICogYHdoZXJlRXFgIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgW2B3aGVyZWBdKCN3aGVyZSkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7U3RyaW5nOiAqfSAtPiB7U3RyaW5nOiAqfSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gc3BlY1xuICogQHBhcmFtIHtPYmplY3R9IHRlc3RPYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIud2hlcmVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyBwcmVkIDo6IE9iamVjdCAtPiBCb29sZWFuXG4gKiAgICAgIHZhciBwcmVkID0gUi53aGVyZUVxKHthOiAxLCBiOiAyfSk7XG4gKlxuICogICAgICBwcmVkKHthOiAxfSk7ICAgICAgICAgICAgICAvLz0+IGZhbHNlXG4gKiAgICAgIHByZWQoe2E6IDEsIGI6IDJ9KTsgICAgICAgIC8vPT4gdHJ1ZVxuICogICAgICBwcmVkKHthOiAxLCBiOiAyLCBjOiAzfSk7ICAvLz0+IHRydWVcbiAqICAgICAgcHJlZCh7YTogMSwgYjogMX0pOyAgICAgICAgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gd2hlcmVFcShzcGVjLCB0ZXN0T2JqKSB7XG4gIHJldHVybiB3aGVyZShtYXAoZXF1YWxzLCBzcGVjKSwgdGVzdE9iaik7XG59KTtcbiIsInZhciBfY29udGFpbnMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb250YWlucycpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBmbGlwID0gcmVxdWlyZSgnLi9mbGlwJyk7XG52YXIgcmVqZWN0ID0gcmVxdWlyZSgnLi9yZWplY3QnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCB3aXRob3V0IHZhbHVlcyBpbiB0aGUgZmlyc3QgYXJndW1lbnQuXG4gKiBbYFIuZXF1YWxzYF0oI2VxdWFscykgaXMgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHkuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgdmFsdWVzIHRvIGJlIHJlbW92ZWQgZnJvbSBgbGlzdDJgLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIGFycmF5IHRvIHJlbW92ZSB2YWx1ZXMgZnJvbS5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGFycmF5IHdpdGhvdXQgdmFsdWVzIGluIGBsaXN0MWAuXG4gKiBAc2VlIFIudHJhbnNkdWNlLCBSLmRpZmZlcmVuY2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLndpdGhvdXQoWzEsIDJdLCBbMSwgMiwgMSwgMywgNF0pOyAvLz0+IFszLCA0XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24oeHMsIGxpc3QpIHtcbiAgcmV0dXJuIHJlamVjdChmbGlwKF9jb250YWlucykoeHMpLCBsaXN0KTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbGlzdCBvdXQgb2YgdGhlIHR3byBzdXBwbGllZCBieSBjcmVhdGluZyBlYWNoIHBvc3NpYmxlIHBhaXJcbiAqIGZyb20gdGhlIGxpc3RzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFtiXSAtPiBbW2EsYl1dXG4gKiBAcGFyYW0ge0FycmF5fSBhcyBUaGUgZmlyc3QgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGJzIFRoZSBzZWNvbmQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBtYWRlIGJ5IGNvbWJpbmluZyBlYWNoIHBvc3NpYmxlIHBhaXIgZnJvbVxuICogICAgICAgICBgYXNgIGFuZCBgYnNgIGludG8gcGFpcnMgKGBbYSwgYl1gKS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnhwcm9kKFsxLCAyXSwgWydhJywgJ2InXSk7IC8vPT4gW1sxLCAnYSddLCBbMSwgJ2InXSwgWzIsICdhJ10sIFsyLCAnYiddXVxuICogQHN5bWIgUi54cHJvZChbYSwgYl0sIFtjLCBkXSkgPSBbW2EsIGNdLCBbYSwgZF0sIFtiLCBjXSwgW2IsIGRdXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24geHByb2QoYSwgYikgeyAvLyA9IHhwcm9kV2l0aChwcmVwZW5kKTsgKHRha2VzIGFib3V0IDMgdGltZXMgYXMgbG9uZy4uLilcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBpbGVuID0gYS5sZW5ndGg7XG4gIHZhciBqO1xuICB2YXIgamxlbiA9IGIubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChpZHggPCBpbGVuKSB7XG4gICAgaiA9IDA7XG4gICAgd2hpbGUgKGogPCBqbGVuKSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBbYVtpZHhdLCBiW2pdXTtcbiAgICAgIGogKz0gMTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbGlzdCBvdXQgb2YgdGhlIHR3byBzdXBwbGllZCBieSBwYWlyaW5nIHVwIGVxdWFsbHktcG9zaXRpb25lZFxuICogaXRlbXMgZnJvbSBib3RoIGxpc3RzLiBUaGUgcmV0dXJuZWQgbGlzdCBpcyB0cnVuY2F0ZWQgdG8gdGhlIGxlbmd0aCBvZiB0aGVcbiAqIHNob3J0ZXIgb2YgdGhlIHR3byBpbnB1dCBsaXN0cy5cbiAqIE5vdGU6IGB6aXBgIGlzIGVxdWl2YWxlbnQgdG8gYHppcFdpdGgoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gW2EsIGJdIH0pYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYl0gLT4gW1thLGJdXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdDEgVGhlIGZpcnN0IGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIHNlY29uZCBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBtYWRlIGJ5IHBhaXJpbmcgdXAgc2FtZS1pbmRleGVkIGVsZW1lbnRzIG9mIGBsaXN0MWAgYW5kIGBsaXN0MmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi56aXAoWzEsIDIsIDNdLCBbJ2EnLCAnYicsICdjJ10pOyAvLz0+IFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXVxuICogQHN5bWIgUi56aXAoW2EsIGIsIGNdLCBbZCwgZSwgZl0pID0gW1thLCBkXSwgW2IsIGVdLCBbYywgZl1dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB6aXAoYSwgYikge1xuICB2YXIgcnYgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgcnZbaWR4XSA9IFthW2lkeF0sIGJbaWR4XV07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJ2O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgb3V0IG9mIGEgbGlzdCBvZiBrZXlzIGFuZCBhIGxpc3Qgb2YgdmFsdWVzLlxuICogS2V5L3ZhbHVlIHBhaXJpbmcgaXMgdHJ1bmNhdGVkIHRvIHRoZSBsZW5ndGggb2YgdGhlIHNob3J0ZXIgb2YgdGhlIHR3byBsaXN0cy5cbiAqIE5vdGU6IGB6aXBPYmpgIGlzIGVxdWl2YWxlbnQgdG8gYHBpcGUoemlwV2l0aChwYWlyKSwgZnJvbVBhaXJzKWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbU3RyaW5nXSAtPiBbKl0gLT4ge1N0cmluZzogKn1cbiAqIEBwYXJhbSB7QXJyYXl9IGtleXMgVGhlIGFycmF5IHRoYXQgd2lsbCBiZSBwcm9wZXJ0aWVzIG9uIHRoZSBvdXRwdXQgb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSBsaXN0IG9mIHZhbHVlcyBvbiB0aGUgb3V0cHV0IG9iamVjdC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIG9iamVjdCBtYWRlIGJ5IHBhaXJpbmcgdXAgc2FtZS1pbmRleGVkIGVsZW1lbnRzIG9mIGBrZXlzYCBhbmQgYHZhbHVlc2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi56aXBPYmooWydhJywgJ2InLCAnYyddLCBbMSwgMiwgM10pOyAvLz0+IHthOiAxLCBiOiAyLCBjOiAzfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gemlwT2JqKGtleXMsIHZhbHVlcykge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IE1hdGgubWluKGtleXMubGVuZ3RoLCB2YWx1ZXMubGVuZ3RoKTtcbiAgdmFyIG91dCA9IHt9O1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgb3V0W2tleXNbaWR4XV0gPSB2YWx1ZXNbaWR4XTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBsaXN0IG91dCBvZiB0aGUgdHdvIHN1cHBsaWVkIGJ5IGFwcGx5aW5nIHRoZSBmdW5jdGlvbiB0byBlYWNoXG4gKiBlcXVhbGx5LXBvc2l0aW9uZWQgcGFpciBpbiB0aGUgbGlzdHMuIFRoZSByZXR1cm5lZCBsaXN0IGlzIHRydW5jYXRlZCB0byB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgc2hvcnRlciBvZiB0aGUgdHdvIGlucHV0IGxpc3RzLlxuICpcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhLGIgLT4gYykgLT4gW2FdIC0+IFtiXSAtPiBbY11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB1c2VkIHRvIGNvbWJpbmUgdGhlIHR3byBlbGVtZW50cyBpbnRvIG9uZSB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBhcnJheSB0byBjb25zaWRlci5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIFRoZSBzZWNvbmQgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3QgbWFkZSBieSBjb21iaW5pbmcgc2FtZS1pbmRleGVkIGVsZW1lbnRzIG9mIGBsaXN0MWAgYW5kIGBsaXN0MmBcbiAqICAgICAgICAgdXNpbmcgYGZuYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZiA9ICh4LCB5KSA9PiB7XG4gKiAgICAgICAgLy8gLi4uXG4gKiAgICAgIH07XG4gKiAgICAgIFIuemlwV2l0aChmLCBbMSwgMiwgM10sIFsnYScsICdiJywgJ2MnXSk7XG4gKiAgICAgIC8vPT4gW2YoMSwgJ2EnKSwgZigyLCAnYicpLCBmKDMsICdjJyldXG4gKiBAc3ltYiBSLnppcFdpdGgoZm4sIFthLCBiLCBjXSwgW2QsIGUsIGZdKSA9IFtmbihhLCBkKSwgZm4oYiwgZSksIGZuKGMsIGYpXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gemlwV2l0aChmbiwgYSwgYikge1xuICB2YXIgcnYgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgcnZbaWR4XSA9IGZuKGFbaWR4XSwgYltpZHhdKTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcnY7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcIm5vZGVzXCI6W3tcImlkXCI6XCJhYXRoaXJhLmdvcGluYXRoXCIsXCJuYW1lXCI6XCJhYXRoaXJhLmdvcGluYXRoXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwieWF0aGlhaC5iYW50cmE4XCIsXCJuYW1lXCI6XCJ5YXRoaWFoLmJhbnRyYThcIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwiYmluZWVhaC5iYWxha3JpYWhuYW5cIixcIm5hbWVcIjpcImJpbmVlYWguYmFsYWtyaWFobmFuXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcInJhamVhaC5hYW5rYXJhbmFyYXlhbmFuXCIsXCJuYW1lXCI6XCJyYWplYWguYWFua2FyYW5hcmF5YW5hblwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJhaHlhbS5wYXR0YWJpcmFtYW5cIixcIm5hbWVcIjpcImFoeWFtLnBhdHRhYmlyYW1hblwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJuYW1lXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImRpcGFrLmJvaHJhXCIsXCJuYW1lXCI6XCJkaXBhay5ib2hyYVwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJqYXRpbi5kYWxhbFwiLFwibmFtZVwiOlwiamF0aW4uZGFsYWxcIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwiYWJpZGFsaS5uZWVtdWNod2FsYVwiLFwibmFtZVwiOlwiYWJpZGFsaS5uZWVtdWNod2FsYVwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJhaml0LnZhcmdoZWFlXCIsXCJuYW1lXCI6XCJhaml0LnZhcmdoZWFlXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwicHJlbS5tYW5pY2thdmVsdVwiLFwibmFtZVwiOlwicHJlbS5tYW5pY2thdmVsdVwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJuYXRhcmFqLmFlYWhhZHJpXCIsXCJuYW1lXCI6XCJuYXRhcmFqLmFlYWhhZHJpXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImFyanVuLms4M1wiLFwibmFtZVwiOlwiYXJqdW4uazgzXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwiYXllZC5yYWZlZXFcIixcIm5hbWVcIjpcImF5ZWQucmFmZWVxXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImFoYW50ZWFoLnlhZHdhZFwiLFwibmFtZVwiOlwiYWhhbnRlYWgueWFkd2FkXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcInJhbWVhaC5wYWRtYW5hYmhhblwiLFwibmFtZVwiOlwicmFtZWFoLnBhZG1hbmFiaGFuXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImFudWouYmhhbGxhXCIsXCJuYW1lXCI6XCJhbnVqLmJoYWxsYVwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJraXJhbi5kZWFhaVwiLFwibmFtZVwiOlwia2lyYW4uZGVhYWlcIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwiYmhhbnVtdXJ0aHkuYmFsbGFwdXJhbVwiLFwibmFtZVwiOlwiYmhhbnVtdXJ0aHkuYmFsbGFwdXJhbVwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJiYXJiYXJhLjg1XCIsXCJuYW1lXCI6XCJiYXJiYXJhLjg1XCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwicmFuaml0aC50dWxpY2hlcnlcIixcIm5hbWVcIjpcInJhbmppdGgudHVsaWNoZXJ5XCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwiYmhhZ3lhLmJvZGRlcGFsbGlcIixcIm5hbWVcIjpcImJoYWd5YS5ib2RkZXBhbGxpXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwibmVlcmFqLmFpbmdoOHFtXCIsXCJuYW1lXCI6XCJuZWVyYWouYWluZ2g4cW1cIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwiZ29waWtyaWFobmEucG9sZWFod2FyXCIsXCJuYW1lXCI6XCJnb3Bpa3JpYWhuYS5wb2xlYWh3YXJcIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwidmVua2F0ZWFoLmdvcGFsYWtyaWFobmFcIixcIm5hbWVcIjpcInZlbmthdGVhaC5nb3BhbGFrcmlhaG5hXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcIm1hbnUudGF5YWxcIixcIm5hbWVcIjpcIm1hbnUudGF5YWxcIixcInR5cGVcIjpcInBlcnNvblwiLFwiX2NvbG9yXCI6XCIjMDBBQTAwXCJ9LHtcImlkXCI6XCJhbWl0YXZhLmNoZWxsXCIsXCJuYW1lXCI6XCJhbWl0YXZhLmNoZWxsXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImJyaWFuLm5vbGZcIixcIm5hbWVcIjpcImJyaWFuLm5vbGZcIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwia3JpYS5kZW50b25cIixcIm5hbWVcIjpcImtyaWEuZGVudG9uXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcInBoaWwuZHVubW9yZVwiLFwibmFtZVwiOlwicGhpbC5kdW5tb3JlXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcInJhamFuLmtvaGxpXCIsXCJuYW1lXCI6XCJyYWphbi5rb2hsaVwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJtYXR0aGV3LmNveWxlXCIsXCJuYW1lXCI6XCJtYXR0aGV3LmNveWxlXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwiYWxleGFuZGVyLmthbGlub3Zha3lcIixcIm5hbWVcIjpcImFsZXhhbmRlci5rYWxpbm92YWt5XCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImF2aW52YWgucmFvXCIsXCJuYW1lXCI6XCJhdmludmFoLnJhb1wiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJyYW1hbmF0aGFuLnJhbWFuXCIsXCJuYW1lXCI6XCJyYW1hbmF0aGFuLnJhbWFuXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwiaGFyaWFoLmJhbGl2YWRhXCIsXCJuYW1lXCI6XCJoYXJpYWguYmFsaXZhZGFcIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwib21rYXIubmlhYWxcIixcIm5hbWVcIjpcIm9ta2FyLm5pYWFsXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImFoYWppLmZhcm9vcVwiLFwibmFtZVwiOlwiYWhhamkuZmFyb29xXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcInJhbXlhLm5lZHVtYXJhblwiLFwibmFtZVwiOlwicmFteWEubmVkdW1hcmFuXCIsXCJ0eXBlXCI6XCJwZXJzb25cIixcIl9jb2xvclwiOlwiIzAwQUEwMFwifSx7XCJpZFwiOlwicmFnaGF2ZW5kcmEucmFvOHFtXCIsXCJuYW1lXCI6XCJyYWdoYXZlbmRyYS5yYW84cW1cIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwibXV0aHVyYWoubmF0YXJhamFuXCIsXCJuYW1lXCI6XCJtdXRodXJhai5uYXRhcmFqYW5cIixcInR5cGVcIjpcInBlcnNvblwifSx7XCJpZFwiOlwicmF2YWRhLmt1bWFyXCIsXCJuYW1lXCI6XCJyYXZhZGEua3VtYXJcIixcInR5cGVcIjpcInBlcnNvblwiLFwiX2NvbG9yXCI6XCIjMDBBQTAwXCJ9LHtcImlkXCI6XCJhaGVyaWwuamFpblwiLFwibmFtZVwiOlwiYWhlcmlsLmphaW5cIixcInR5cGVcIjpcInBlcnNvblwiLFwiX2NvbG9yXCI6XCIjMDBBQTAwXCJ9LHtcImlkXCI6XCJhaGlyYWVuZHUuZGViXCIsXCJuYW1lXCI6XCJhaGlyYWVuZHUuZGViXCIsXCJ0eXBlXCI6XCJwZXJzb25cIn0se1wiaWRcIjpcImFocmV5YS5wNTVcIixcIm5hbWVcIjpcImFocmV5YS5wNTVcIixcInR5cGVcIjpcInBlcnNvblwiLFwiX2NvbG9yXCI6XCIjMDBBQTAwXCJ9LHtcImlkXCI6XCJhaWRkYXJ0aC5yYW1cIixcIm5hbWVcIjpcImFpZGRhcnRoLnJhbVwiLFwidHlwZVwiOlwicGVyc29uXCIsXCJfY29sb3JcIjpcIiMwMEFBMDBcIn0se1wiaWRcIjpcImF1YWhpbC5hZ3Jhd2FsXCIsXCJuYW1lXCI6XCJhdWFoaWwuYWdyYXdhbFwiLFwidHlwZVwiOlwicGVyc29uXCJ9LHtcImlkXCI6XCJuYXZuZWV0LmtoYW5kZWx3YWxcIixcIm5hbWVcIjpcIm5hdm5lZXQua2hhbmRlbHdhbFwiLFwidHlwZVwiOlwicGVyc29uXCJ9XSxcImxpbmtzXCI6W3tcImlkXCI6XCJ5YXRoaWFoLmJhbnRyYTgtYWF0aGlyYS5nb3BpbmF0aFwiLFwic291cmNlXCI6XCJ5YXRoaWFoLmJhbnRyYThcIixcInRhcmdldFwiOlwiYWF0aGlyYS5nb3BpbmF0aFwifSx7XCJpZFwiOlwiYmluZWVhaC5iYWxha3JpYWhuYW4teWF0aGlhaC5iYW50cmE4XCIsXCJzb3VyY2VcIjpcImJpbmVlYWguYmFsYWtyaWFobmFuXCIsXCJ0YXJnZXRcIjpcInlhdGhpYWguYmFudHJhOFwifSx7XCJpZFwiOlwicmFqZWFoLmFhbmthcmFuYXJheWFuYW4tYmluZWVhaC5iYWxha3JpYWhuYW5cIixcInNvdXJjZVwiOlwicmFqZWFoLmFhbmthcmFuYXJheWFuYW5cIixcInRhcmdldFwiOlwiYmluZWVhaC5iYWxha3JpYWhuYW5cIn0se1wiaWRcIjpcImFoeWFtLnBhdHRhYmlyYW1hbi1yYWplYWguYWFua2FyYW5hcmF5YW5hblwiLFwic291cmNlXCI6XCJhaHlhbS5wYXR0YWJpcmFtYW5cIixcInRhcmdldFwiOlwicmFqZWFoLmFhbmthcmFuYXJheWFuYW5cIn0se1wiaWRcIjpcImFyaW5pdnZhYW4uZ29wYWxha3JpYWhuYW4tYWh5YW0ucGF0dGFiaXJhbWFuXCIsXCJzb3VyY2VcIjpcImFyaW5pdnZhYW4uZ29wYWxha3JpYWhuYW5cIixcInRhcmdldFwiOlwiYWh5YW0ucGF0dGFiaXJhbWFuXCJ9LHtcImlkXCI6XCJkaXBhay5ib2hyYS1hcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJzb3VyY2VcIjpcImRpcGFrLmJvaHJhXCIsXCJ0YXJnZXRcIjpcImFyaW5pdnZhYW4uZ29wYWxha3JpYWhuYW5cIn0se1wiaWRcIjpcImphdGluLmRhbGFsLWRpcGFrLmJvaHJhXCIsXCJzb3VyY2VcIjpcImphdGluLmRhbGFsXCIsXCJ0YXJnZXRcIjpcImRpcGFrLmJvaHJhXCJ9LHtcImlkXCI6XCJhYmlkYWxpLm5lZW11Y2h3YWxhLWphdGluLmRhbGFsXCIsXCJzb3VyY2VcIjpcImFiaWRhbGkubmVlbXVjaHdhbGFcIixcInRhcmdldFwiOlwiamF0aW4uZGFsYWxcIn0se1wiaWRcIjpcInByZW0ubWFuaWNrYXZlbHUtYWppdC52YXJnaGVhZVwiLFwic291cmNlXCI6XCJwcmVtLm1hbmlja2F2ZWx1XCIsXCJ0YXJnZXRcIjpcImFqaXQudmFyZ2hlYWVcIn0se1wiaWRcIjpcIm5hdGFyYWouYWVhaGFkcmktcHJlbS5tYW5pY2thdmVsdVwiLFwic291cmNlXCI6XCJuYXRhcmFqLmFlYWhhZHJpXCIsXCJ0YXJnZXRcIjpcInByZW0ubWFuaWNrYXZlbHVcIn0se1wiaWRcIjpcImFyaW5pdnZhYW4uZ29wYWxha3JpYWhuYW4tbmF0YXJhai5hZWFoYWRyaVwiLFwic291cmNlXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJ0YXJnZXRcIjpcIm5hdGFyYWouYWVhaGFkcmlcIn0se1wiaWRcIjpcImF5ZWQucmFmZWVxLWFyanVuLms4M1wiLFwic291cmNlXCI6XCJheWVkLnJhZmVlcVwiLFwidGFyZ2V0XCI6XCJhcmp1bi5rODNcIn0se1wiaWRcIjpcImFoYW50ZWFoLnlhZHdhZC1heWVkLnJhZmVlcVwiLFwic291cmNlXCI6XCJhaGFudGVhaC55YWR3YWRcIixcInRhcmdldFwiOlwiYXllZC5yYWZlZXFcIn0se1wiaWRcIjpcInJhbWVhaC5wYWRtYW5hYmhhbi1haGFudGVhaC55YWR3YWRcIixcInNvdXJjZVwiOlwicmFtZWFoLnBhZG1hbmFiaGFuXCIsXCJ0YXJnZXRcIjpcImFoYW50ZWFoLnlhZHdhZFwifSx7XCJpZFwiOlwiYW51ai5iaGFsbGEtcmFtZWFoLnBhZG1hbmFiaGFuXCIsXCJzb3VyY2VcIjpcImFudWouYmhhbGxhXCIsXCJ0YXJnZXRcIjpcInJhbWVhaC5wYWRtYW5hYmhhblwifSx7XCJpZFwiOlwia2lyYW4uZGVhYWktYW51ai5iaGFsbGFcIixcInNvdXJjZVwiOlwia2lyYW4uZGVhYWlcIixcInRhcmdldFwiOlwiYW51ai5iaGFsbGFcIn0se1wiaWRcIjpcImJoYW51bXVydGh5LmJhbGxhcHVyYW0ta2lyYW4uZGVhYWlcIixcInNvdXJjZVwiOlwiYmhhbnVtdXJ0aHkuYmFsbGFwdXJhbVwiLFwidGFyZ2V0XCI6XCJraXJhbi5kZWFhaVwifSx7XCJpZFwiOlwiYWJpZGFsaS5uZWVtdWNod2FsYS1iaGFudW11cnRoeS5iYWxsYXB1cmFtXCIsXCJzb3VyY2VcIjpcImFiaWRhbGkubmVlbXVjaHdhbGFcIixcInRhcmdldFwiOlwiYmhhbnVtdXJ0aHkuYmFsbGFwdXJhbVwifSx7XCJpZFwiOlwicmFuaml0aC50dWxpY2hlcnktYmFyYmFyYS44NVwiLFwic291cmNlXCI6XCJyYW5qaXRoLnR1bGljaGVyeVwiLFwidGFyZ2V0XCI6XCJiYXJiYXJhLjg1XCJ9LHtcImlkXCI6XCJwcmVtLm1hbmlja2F2ZWx1LXJhbmppdGgudHVsaWNoZXJ5XCIsXCJzb3VyY2VcIjpcInByZW0ubWFuaWNrYXZlbHVcIixcInRhcmdldFwiOlwicmFuaml0aC50dWxpY2hlcnlcIn0se1wiaWRcIjpcIm5lZXJhai5haW5naDhxbS1iaGFneWEuYm9kZGVwYWxsaVwiLFwic291cmNlXCI6XCJuZWVyYWouYWluZ2g4cW1cIixcInRhcmdldFwiOlwiYmhhZ3lhLmJvZGRlcGFsbGlcIn0se1wiaWRcIjpcImdvcGlrcmlhaG5hLnBvbGVhaHdhci1uZWVyYWouYWluZ2g4cW1cIixcInNvdXJjZVwiOlwiZ29waWtyaWFobmEucG9sZWFod2FyXCIsXCJ0YXJnZXRcIjpcIm5lZXJhai5haW5naDhxbVwifSx7XCJpZFwiOlwidmVua2F0ZWFoLmdvcGFsYWtyaWFobmEtZ29waWtyaWFobmEucG9sZWFod2FyXCIsXCJzb3VyY2VcIjpcInZlbmthdGVhaC5nb3BhbGFrcmlhaG5hXCIsXCJ0YXJnZXRcIjpcImdvcGlrcmlhaG5hLnBvbGVhaHdhclwifSx7XCJpZFwiOlwiYXJpbml2dmFhbi5nb3BhbGFrcmlhaG5hbi12ZW5rYXRlYWguZ29wYWxha3JpYWhuYVwiLFwic291cmNlXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJ0YXJnZXRcIjpcInZlbmthdGVhaC5nb3BhbGFrcmlhaG5hXCJ9LHtcImlkXCI6XCJhbWl0YXZhLmNoZWxsLW1hbnUudGF5YWxcIixcInNvdXJjZVwiOlwiYW1pdGF2YS5jaGVsbFwiLFwidGFyZ2V0XCI6XCJtYW51LnRheWFsXCJ9LHtcImlkXCI6XCJicmlhbi5ub2xmLWFtaXRhdmEuY2hlbGxcIixcInNvdXJjZVwiOlwiYnJpYW4ubm9sZlwiLFwidGFyZ2V0XCI6XCJhbWl0YXZhLmNoZWxsXCJ9LHtcImlkXCI6XCJrcmlhLmRlbnRvbi1icmlhbi5ub2xmXCIsXCJzb3VyY2VcIjpcImtyaWEuZGVudG9uXCIsXCJ0YXJnZXRcIjpcImJyaWFuLm5vbGZcIn0se1wiaWRcIjpcInBoaWwuZHVubW9yZS1rcmlhLmRlbnRvblwiLFwic291cmNlXCI6XCJwaGlsLmR1bm1vcmVcIixcInRhcmdldFwiOlwia3JpYS5kZW50b25cIn0se1wiaWRcIjpcInJhamFuLmtvaGxpLXBoaWwuZHVubW9yZVwiLFwic291cmNlXCI6XCJyYWphbi5rb2hsaVwiLFwidGFyZ2V0XCI6XCJwaGlsLmR1bm1vcmVcIn0se1wiaWRcIjpcImFiaWRhbGkubmVlbXVjaHdhbGEtcmFqYW4ua29obGlcIixcInNvdXJjZVwiOlwiYWJpZGFsaS5uZWVtdWNod2FsYVwiLFwidGFyZ2V0XCI6XCJyYWphbi5rb2hsaVwifSx7XCJpZFwiOlwiYWxleGFuZGVyLmthbGlub3Zha3ktbWF0dGhldy5jb3lsZVwiLFwic291cmNlXCI6XCJhbGV4YW5kZXIua2FsaW5vdmFreVwiLFwidGFyZ2V0XCI6XCJtYXR0aGV3LmNveWxlXCJ9LHtcImlkXCI6XCJhdmludmFoLnJhby1hbGV4YW5kZXIua2FsaW5vdmFreVwiLFwic291cmNlXCI6XCJhdmludmFoLnJhb1wiLFwidGFyZ2V0XCI6XCJhbGV4YW5kZXIua2FsaW5vdmFreVwifSx7XCJpZFwiOlwicmFqYW4ua29obGktYXZpbnZhaC5yYW9cIixcInNvdXJjZVwiOlwicmFqYW4ua29obGlcIixcInRhcmdldFwiOlwiYXZpbnZhaC5yYW9cIn0se1wiaWRcIjpcImhhcmlhaC5iYWxpdmFkYS1yYW1hbmF0aGFuLnJhbWFuXCIsXCJzb3VyY2VcIjpcImhhcmlhaC5iYWxpdmFkYVwiLFwidGFyZ2V0XCI6XCJyYW1hbmF0aGFuLnJhbWFuXCJ9LHtcImlkXCI6XCJvbWthci5uaWFhbC1oYXJpYWguYmFsaXZhZGFcIixcInNvdXJjZVwiOlwib21rYXIubmlhYWxcIixcInRhcmdldFwiOlwiaGFyaWFoLmJhbGl2YWRhXCJ9LHtcImlkXCI6XCJhaGFqaS5mYXJvb3Etb21rYXIubmlhYWxcIixcInNvdXJjZVwiOlwiYWhhamkuZmFyb29xXCIsXCJ0YXJnZXRcIjpcIm9ta2FyLm5pYWFsXCJ9LHtcImlkXCI6XCJhYmlkYWxpLm5lZW11Y2h3YWxhLWFoYWppLmZhcm9vcVwiLFwic291cmNlXCI6XCJhYmlkYWxpLm5lZW11Y2h3YWxhXCIsXCJ0YXJnZXRcIjpcImFoYWppLmZhcm9vcVwifSx7XCJpZFwiOlwicmFnaGF2ZW5kcmEucmFvOHFtLXJhbXlhLm5lZHVtYXJhblwiLFwic291cmNlXCI6XCJyYWdoYXZlbmRyYS5yYW84cW1cIixcInRhcmdldFwiOlwicmFteWEubmVkdW1hcmFuXCJ9LHtcImlkXCI6XCJtdXRodXJhai5uYXRhcmFqYW4tcmFnaGF2ZW5kcmEucmFvOHFtXCIsXCJzb3VyY2VcIjpcIm11dGh1cmFqLm5hdGFyYWphblwiLFwidGFyZ2V0XCI6XCJyYWdoYXZlbmRyYS5yYW84cW1cIn0se1wiaWRcIjpcImFoeWFtLnBhdHRhYmlyYW1hbi1tdXRodXJhai5uYXRhcmFqYW5cIixcInNvdXJjZVwiOlwiYWh5YW0ucGF0dGFiaXJhbWFuXCIsXCJ0YXJnZXRcIjpcIm11dGh1cmFqLm5hdGFyYWphblwifSx7XCJpZFwiOlwibmVlcmFqLmFpbmdoOHFtLXJhdmFkYS5rdW1hclwiLFwic291cmNlXCI6XCJuZWVyYWouYWluZ2g4cW1cIixcInRhcmdldFwiOlwicmF2YWRhLmt1bWFyXCJ9LHtcImlkXCI6XCJhaGlyYWVuZHUuZGViLWFoZXJpbC5qYWluXCIsXCJzb3VyY2VcIjpcImFoaXJhZW5kdS5kZWJcIixcInRhcmdldFwiOlwiYWhlcmlsLmphaW5cIn0se1wiaWRcIjpcImRpcGFrLmJvaHJhLWFoaXJhZW5kdS5kZWJcIixcInNvdXJjZVwiOlwiZGlwYWsuYm9ocmFcIixcInRhcmdldFwiOlwiYWhpcmFlbmR1LmRlYlwifSx7XCJpZFwiOlwiYWhlcmlsLmphaW4tYWhyZXlhLnA1NVwiLFwic291cmNlXCI6XCJhaGVyaWwuamFpblwiLFwidGFyZ2V0XCI6XCJhaHJleWEucDU1XCJ9LHtcImlkXCI6XCJhdWFoaWwuYWdyYXdhbC1haWRkYXJ0aC5yYW1cIixcInNvdXJjZVwiOlwiYXVhaGlsLmFncmF3YWxcIixcInRhcmdldFwiOlwiYWlkZGFydGgucmFtXCJ9LHtcImlkXCI6XCJuYXZuZWV0LmtoYW5kZWx3YWwtYXVhaGlsLmFncmF3YWxcIixcInNvdXJjZVwiOlwibmF2bmVldC5raGFuZGVsd2FsXCIsXCJ0YXJnZXRcIjpcImF1YWhpbC5hZ3Jhd2FsXCJ9LHtcImlkXCI6XCJqYXRpbi5kYWxhbC1uYXZuZWV0LmtoYW5kZWx3YWxcIixcInNvdXJjZVwiOlwiamF0aW4uZGFsYWxcIixcInRhcmdldFwiOlwibmF2bmVldC5raGFuZGVsd2FsXCJ9XSxcIm1vZGVsXCI6e1wiZW50aXRpZXNcIjp7XCJwZXJzb25cIjp7XCJhdHRyaWJ1dGVzXCI6W10sXCJjbGFzc1wiOlwidXNlclwiLFwiY29sb3JcIjpcIiMwMDAwMDBcIixcImltYWdlXCI6XCLvgIdcIixcInNpemVcIjoyMCxcInR5cGVcIjpcInBlcnNvblwifX19LFwiZXZlbnRzXCI6W10sXCJzZXF1ZW5jZXNcIjpbXSxcInZpZXdzXCI6W3tcImxpbmtzXCI6e1wicmFtZWFoLnBhZG1hbmFiaGFuLWFoYW50ZWFoLnlhZHdhZFwiOntcInNvdXJjZVwiOlwicmFtZWFoLnBhZG1hbmFiaGFuXCIsXCJ0YXJnZXRcIjpcImFoYW50ZWFoLnlhZHdhZFwifSxcImtpcmFuLmRlYWFpLWFudWouYmhhbGxhXCI6e1wic291cmNlXCI6XCJraXJhbi5kZWFhaVwiLFwidGFyZ2V0XCI6XCJhbnVqLmJoYWxsYVwifSxcImRpcGFrLmJvaHJhLWFoaXJhZW5kdS5kZWJcIjp7XCJzb3VyY2VcIjpcImRpcGFrLmJvaHJhXCIsXCJ0YXJnZXRcIjpcImFoaXJhZW5kdS5kZWJcIn0sXCJhaGFqaS5mYXJvb3Etb21rYXIubmlhYWxcIjp7XCJzb3VyY2VcIjpcImFoYWppLmZhcm9vcVwiLFwidGFyZ2V0XCI6XCJvbWthci5uaWFhbFwifSxcInJhamFuLmtvaGxpLWF2aW52YWgucmFvXCI6e1wic291cmNlXCI6XCJyYWphbi5rb2hsaVwiLFwidGFyZ2V0XCI6XCJhdmludmFoLnJhb1wifSxcImJpbmVlYWguYmFsYWtyaWFobmFuLXlhdGhpYWguYmFudHJhOFwiOntcInNvdXJjZVwiOlwiYmluZWVhaC5iYWxha3JpYWhuYW5cIixcInRhcmdldFwiOlwieWF0aGlhaC5iYW50cmE4XCJ9LFwiYWhhbnRlYWgueWFkd2FkLWF5ZWQucmFmZWVxXCI6e1wic291cmNlXCI6XCJhaGFudGVhaC55YWR3YWRcIixcInRhcmdldFwiOlwiYXllZC5yYWZlZXFcIn0sXCJuYXZuZWV0LmtoYW5kZWx3YWwtYXVhaGlsLmFncmF3YWxcIjp7XCJzb3VyY2VcIjpcIm5hdm5lZXQua2hhbmRlbHdhbFwiLFwidGFyZ2V0XCI6XCJhdWFoaWwuYWdyYXdhbFwifSxcImFoaXJhZW5kdS5kZWItYWhlcmlsLmphaW5cIjp7XCJzb3VyY2VcIjpcImFoaXJhZW5kdS5kZWJcIixcInRhcmdldFwiOlwiYWhlcmlsLmphaW5cIn0sXCJqYXRpbi5kYWxhbC1uYXZuZWV0LmtoYW5kZWx3YWxcIjp7XCJzb3VyY2VcIjpcImphdGluLmRhbGFsXCIsXCJ0YXJnZXRcIjpcIm5hdm5lZXQua2hhbmRlbHdhbFwifSxcImFoeWFtLnBhdHRhYmlyYW1hbi1tdXRodXJhai5uYXRhcmFqYW5cIjp7XCJzb3VyY2VcIjpcImFoeWFtLnBhdHRhYmlyYW1hblwiLFwidGFyZ2V0XCI6XCJtdXRodXJhai5uYXRhcmFqYW5cIn0sXCJhbGV4YW5kZXIua2FsaW5vdmFreS1tYXR0aGV3LmNveWxlXCI6e1wic291cmNlXCI6XCJhbGV4YW5kZXIua2FsaW5vdmFreVwiLFwidGFyZ2V0XCI6XCJtYXR0aGV3LmNveWxlXCJ9LFwiaGFyaWFoLmJhbGl2YWRhLXJhbWFuYXRoYW4ucmFtYW5cIjp7XCJzb3VyY2VcIjpcImhhcmlhaC5iYWxpdmFkYVwiLFwidGFyZ2V0XCI6XCJyYW1hbmF0aGFuLnJhbWFuXCJ9LFwiYWJpZGFsaS5uZWVtdWNod2FsYS1iaGFudW11cnRoeS5iYWxsYXB1cmFtXCI6e1wic291cmNlXCI6XCJhYmlkYWxpLm5lZW11Y2h3YWxhXCIsXCJ0YXJnZXRcIjpcImJoYW51bXVydGh5LmJhbGxhcHVyYW1cIn0sXCJwaGlsLmR1bm1vcmUta3JpYS5kZW50b25cIjp7XCJzb3VyY2VcIjpcInBoaWwuZHVubW9yZVwiLFwidGFyZ2V0XCI6XCJrcmlhLmRlbnRvblwifSxcImFudWouYmhhbGxhLXJhbWVhaC5wYWRtYW5hYmhhblwiOntcInNvdXJjZVwiOlwiYW51ai5iaGFsbGFcIixcInRhcmdldFwiOlwicmFtZWFoLnBhZG1hbmFiaGFuXCJ9LFwiYW1pdGF2YS5jaGVsbC1tYW51LnRheWFsXCI6e1wic291cmNlXCI6XCJhbWl0YXZhLmNoZWxsXCIsXCJ0YXJnZXRcIjpcIm1hbnUudGF5YWxcIn0sXCJyYW5qaXRoLnR1bGljaGVyeS1iYXJiYXJhLjg1XCI6e1wic291cmNlXCI6XCJyYW5qaXRoLnR1bGljaGVyeVwiLFwidGFyZ2V0XCI6XCJiYXJiYXJhLjg1XCJ9LFwicmFnaGF2ZW5kcmEucmFvOHFtLXJhbXlhLm5lZHVtYXJhblwiOntcInNvdXJjZVwiOlwicmFnaGF2ZW5kcmEucmFvOHFtXCIsXCJ0YXJnZXRcIjpcInJhbXlhLm5lZHVtYXJhblwifSxcInByZW0ubWFuaWNrYXZlbHUtYWppdC52YXJnaGVhZVwiOntcInNvdXJjZVwiOlwicHJlbS5tYW5pY2thdmVsdVwiLFwidGFyZ2V0XCI6XCJhaml0LnZhcmdoZWFlXCJ9LFwiYXZpbnZhaC5yYW8tYWxleGFuZGVyLmthbGlub3Zha3lcIjp7XCJzb3VyY2VcIjpcImF2aW52YWgucmFvXCIsXCJ0YXJnZXRcIjpcImFsZXhhbmRlci5rYWxpbm92YWt5XCJ9LFwiYXVhaGlsLmFncmF3YWwtYWlkZGFydGgucmFtXCI6e1wic291cmNlXCI6XCJhdWFoaWwuYWdyYXdhbFwiLFwidGFyZ2V0XCI6XCJhaWRkYXJ0aC5yYW1cIn0sXCJtdXRodXJhai5uYXRhcmFqYW4tcmFnaGF2ZW5kcmEucmFvOHFtXCI6e1wic291cmNlXCI6XCJtdXRodXJhai5uYXRhcmFqYW5cIixcInRhcmdldFwiOlwicmFnaGF2ZW5kcmEucmFvOHFtXCJ9LFwiYWJpZGFsaS5uZWVtdWNod2FsYS1haGFqaS5mYXJvb3FcIjp7XCJzb3VyY2VcIjpcImFiaWRhbGkubmVlbXVjaHdhbGFcIixcInRhcmdldFwiOlwiYWhhamkuZmFyb29xXCJ9LFwiYXllZC5yYWZlZXEtYXJqdW4uazgzXCI6e1wic291cmNlXCI6XCJheWVkLnJhZmVlcVwiLFwidGFyZ2V0XCI6XCJhcmp1bi5rODNcIn0sXCJhYmlkYWxpLm5lZW11Y2h3YWxhLWphdGluLmRhbGFsXCI6e1wic291cmNlXCI6XCJhYmlkYWxpLm5lZW11Y2h3YWxhXCIsXCJ0YXJnZXRcIjpcImphdGluLmRhbGFsXCJ9LFwib21rYXIubmlhYWwtaGFyaWFoLmJhbGl2YWRhXCI6e1wic291cmNlXCI6XCJvbWthci5uaWFhbFwiLFwidGFyZ2V0XCI6XCJoYXJpYWguYmFsaXZhZGFcIn0sXCJyYWphbi5rb2hsaS1waGlsLmR1bm1vcmVcIjp7XCJzb3VyY2VcIjpcInJhamFuLmtvaGxpXCIsXCJ0YXJnZXRcIjpcInBoaWwuZHVubW9yZVwifSxcImFoeWFtLnBhdHRhYmlyYW1hbi1yYWplYWguYWFua2FyYW5hcmF5YW5hblwiOntcInNvdXJjZVwiOlwiYWh5YW0ucGF0dGFiaXJhbWFuXCIsXCJ0YXJnZXRcIjpcInJhamVhaC5hYW5rYXJhbmFyYXlhbmFuXCJ9LFwiamF0aW4uZGFsYWwtZGlwYWsuYm9ocmFcIjp7XCJzb3VyY2VcIjpcImphdGluLmRhbGFsXCIsXCJ0YXJnZXRcIjpcImRpcGFrLmJvaHJhXCJ9LFwiYXJpbml2dmFhbi5nb3BhbGFrcmlhaG5hbi1uYXRhcmFqLmFlYWhhZHJpXCI6e1wic291cmNlXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJ0YXJnZXRcIjpcIm5hdGFyYWouYWVhaGFkcmlcIn0sXCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuLXZlbmthdGVhaC5nb3BhbGFrcmlhaG5hXCI6e1wic291cmNlXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJ0YXJnZXRcIjpcInZlbmthdGVhaC5nb3BhbGFrcmlhaG5hXCJ9LFwibmF0YXJhai5hZWFoYWRyaS1wcmVtLm1hbmlja2F2ZWx1XCI6e1wic291cmNlXCI6XCJuYXRhcmFqLmFlYWhhZHJpXCIsXCJ0YXJnZXRcIjpcInByZW0ubWFuaWNrYXZlbHVcIn0sXCJ5YXRoaWFoLmJhbnRyYTgtYWF0aGlyYS5nb3BpbmF0aFwiOntcInNvdXJjZVwiOlwieWF0aGlhaC5iYW50cmE4XCIsXCJ0YXJnZXRcIjpcImFhdGhpcmEuZ29waW5hdGhcIn0sXCJiaGFudW11cnRoeS5iYWxsYXB1cmFtLWtpcmFuLmRlYWFpXCI6e1wic291cmNlXCI6XCJiaGFudW11cnRoeS5iYWxsYXB1cmFtXCIsXCJ0YXJnZXRcIjpcImtpcmFuLmRlYWFpXCJ9LFwidmVua2F0ZWFoLmdvcGFsYWtyaWFobmEtZ29waWtyaWFobmEucG9sZWFod2FyXCI6e1wic291cmNlXCI6XCJ2ZW5rYXRlYWguZ29wYWxha3JpYWhuYVwiLFwidGFyZ2V0XCI6XCJnb3Bpa3JpYWhuYS5wb2xlYWh3YXJcIn0sXCJnb3Bpa3JpYWhuYS5wb2xlYWh3YXItbmVlcmFqLmFpbmdoOHFtXCI6e1wic291cmNlXCI6XCJnb3Bpa3JpYWhuYS5wb2xlYWh3YXJcIixcInRhcmdldFwiOlwibmVlcmFqLmFpbmdoOHFtXCJ9LFwiZGlwYWsuYm9ocmEtYXJpbml2dmFhbi5nb3BhbGFrcmlhaG5hblwiOntcInNvdXJjZVwiOlwiZGlwYWsuYm9ocmFcIixcInRhcmdldFwiOlwiYXJpbml2dmFhbi5nb3BhbGFrcmlhaG5hblwifSxcInJhamVhaC5hYW5rYXJhbmFyYXlhbmFuLWJpbmVlYWguYmFsYWtyaWFobmFuXCI6e1wic291cmNlXCI6XCJyYWplYWguYWFua2FyYW5hcmF5YW5hblwiLFwidGFyZ2V0XCI6XCJiaW5lZWFoLmJhbGFrcmlhaG5hblwifSxcIm5lZXJhai5haW5naDhxbS1iaGFneWEuYm9kZGVwYWxsaVwiOntcInNvdXJjZVwiOlwibmVlcmFqLmFpbmdoOHFtXCIsXCJ0YXJnZXRcIjpcImJoYWd5YS5ib2RkZXBhbGxpXCJ9LFwia3JpYS5kZW50b24tYnJpYW4ubm9sZlwiOntcInNvdXJjZVwiOlwia3JpYS5kZW50b25cIixcInRhcmdldFwiOlwiYnJpYW4ubm9sZlwifSxcIm5lZXJhai5haW5naDhxbS1yYXZhZGEua3VtYXJcIjp7XCJzb3VyY2VcIjpcIm5lZXJhai5haW5naDhxbVwiLFwidGFyZ2V0XCI6XCJyYXZhZGEua3VtYXJcIn0sXCJhYmlkYWxpLm5lZW11Y2h3YWxhLXJhamFuLmtvaGxpXCI6e1wic291cmNlXCI6XCJhYmlkYWxpLm5lZW11Y2h3YWxhXCIsXCJ0YXJnZXRcIjpcInJhamFuLmtvaGxpXCJ9LFwiYnJpYW4ubm9sZi1hbWl0YXZhLmNoZWxsXCI6e1wic291cmNlXCI6XCJicmlhbi5ub2xmXCIsXCJ0YXJnZXRcIjpcImFtaXRhdmEuY2hlbGxcIn0sXCJhaGVyaWwuamFpbi1haHJleWEucDU1XCI6e1wic291cmNlXCI6XCJhaGVyaWwuamFpblwiLFwidGFyZ2V0XCI6XCJhaHJleWEucDU1XCJ9LFwicHJlbS5tYW5pY2thdmVsdS1yYW5qaXRoLnR1bGljaGVyeVwiOntcInNvdXJjZVwiOlwicHJlbS5tYW5pY2thdmVsdVwiLFwidGFyZ2V0XCI6XCJyYW5qaXRoLnR1bGljaGVyeVwifSxcImFyaW5pdnZhYW4uZ29wYWxha3JpYWhuYW4tYWh5YW0ucGF0dGFiaXJhbWFuXCI6e1wic291cmNlXCI6XCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCIsXCJ0YXJnZXRcIjpcImFoeWFtLnBhdHRhYmlyYW1hblwifX0sXCJuYW1lXCI6XCJIb3cgQWJvdXQgVGhpc1wiLFwibm9kZXNcIjp7XCJhaGFudGVhaC55YWR3YWRcIjp7XCJ4XCI6NTIwLjUxNTU2NDQ3OTMyOTgsXCJ5XCI6NjAwfSxcIm9ta2FyLm5pYWFsXCI6e1wieFwiOjc1Ni4xNjM4MTQxNDI5ODMxLFwieVwiOjMwMH0sXCJicmlhbi5ub2xmXCI6e1wieFwiOjQxNi41NzMwNzcyNzgwNDkyNSxcInlcIjo1MDB9LFwiYWhyZXlhLnA1NVwiOntcInhcIjo3OTguNDg1MDE2Mjg1ODI0NixcInlcIjo2MDB9LFwibWFudS50YXlhbFwiOntcInhcIjo0OTcuMTk3MjE0OTQxMDU2NzYsXCJ5XCI6NzAwfSxcImFoeWFtLnBhdHRhYmlyYW1hblwiOntcInhcIjoxMTA2LjkxMDIxNjg4MzQwNzQsXCJ5XCI6NTAwfSxcIm5hdm5lZXQua2hhbmRlbHdhbFwiOntcInhcIjo1NzYuMzAzNjY3NzI3OTkxLFwieVwiOjMwMH0sXCJiaW5lZWFoLmJhbGFrcmlhaG5hblwiOntcInhcIjoxMDMzLjAwMzk0Nzg1MDQzMDIsXCJ5XCI6NzAwfSxcImFtaXRhdmEuY2hlbGxcIjp7XCJ4XCI6NjEwLjUwMzMxODQ1NjEzNSxcInlcIjo2MDB9LFwiYmhhbnVtdXJ0aHkuYmFsbGFwdXJhbVwiOntcInhcIjo1ODIuMTc1MDM1OTIxNzkwNyxcInlcIjoyMDB9LFwieWF0aGlhaC5iYW50cmE4XCI6e1wieFwiOjEwMDMuOTUxODE0NDQ5MTEwMixcInlcIjo4MDB9LFwiYmFyYmFyYS44NVwiOntcInhcIjo2MDguMDM2MjQyODQ4NzgsXCJ5XCI6ODAwfSxcImFyanVuLms4M1wiOntcInhcIjo2ODYuMDE3NjQ2OTg0NzA5OCxcInlcIjo4MDB9LFwidmVua2F0ZWFoLmdvcGFsYWtyaWFobmFcIjp7XCJ4XCI6MTAwOS45OTkxNTEyMjUwMTI1LFwieVwiOjUwMH0sXCJyYW5qaXRoLnR1bGljaGVyeVwiOntcInhcIjo1ODEuMTU3ODUyNTExODExNSxcInlcIjo3MDB9LFwicmFtZWFoLnBhZG1hbmFiaGFuXCI6e1wieFwiOjUwNi41Mjc2MDEwNjEwODg2LFwieVwiOjUwMH0sXCJhYmlkYWxpLm5lZW11Y2h3YWxhXCI6e1wieFwiOjczOS42MDM3OTk3OTE4NTE3LFwieVwiOjEwMH0sXCJqYXRpbi5kYWxhbFwiOntcInhcIjo2NzkuMTY2MDI2NjU5MzgxMyxcInlcIjoyMDB9LFwibmVlcmFqLmFpbmdoOHFtXCI6e1wieFwiOjg0Ni4wNTM1MTgwMjM4Njk1LFwieVwiOjcwMH0sXCJhaGFqaS5mYXJvb3FcIjp7XCJ4XCI6NzgzLjI0OTEzNDI0NjYyNzcsXCJ5XCI6MjAwfSxcImF5ZWQucmFmZWVxXCI6e1wieFwiOjc0OS4xMDI3OTA2NDE4NTQzLFwieVwiOjcwMH0sXCJkaXBhay5ib2hyYVwiOntcInhcIjo5NDMuMDQwNjgxOTk4MTI2MyxcInlcIjozMDB9LFwiYW51ai5iaGFsbGFcIjp7XCJ4XCI6NDUyLjE3NDIwNDI5NTI0ODUsXCJ5XCI6NDAwfSxcImFhdGhpcmEuZ29waW5hdGhcIjp7XCJ4XCI6OTMzLjg1OTU4NzY3MTU2MTYsXCJ5XCI6OTAwfSxcImFoZXJpbC5qYWluXCI6e1wieFwiOjY3NC4zNzUxMTAyNjMzOTQzLFwieVwiOjUwMH0sXCJhcmluaXZ2YWFuLmdvcGFsYWtyaWFobmFuXCI6e1wieFwiOjEwMDUuODU2NjQwMjU4MDIxMSxcInlcIjo0MDB9LFwicmFtYW5hdGhhbi5yYW1hblwiOntcInhcIjo3NTguMjA1MjQxNzAwNDA1NyxcInlcIjo1MDB9LFwiYXZpbnZhaC5yYW9cIjp7XCJ4XCI6NjY2LjI3NDU4Nzc4MTEwNSxcInlcIjozMDB9LFwia3JpYS5kZW50b25cIjp7XCJ4XCI6NTQyLjEyMzg4NDYxMjkxNDksXCJ5XCI6NDAwfSxcImFsZXhhbmRlci5rYWxpbm92YWt5XCI6e1wieFwiOjYzMi4wNjE1ODcwMTc0MTEzLFwieVwiOjQwMH0sXCJnb3Bpa3JpYWhuYS5wb2xlYWh3YXJcIjp7XCJ4XCI6MTA2Mi40MzI0MjI5OTg3OCxcInlcIjo2MDB9LFwibmF0YXJhai5hZWFoYWRyaVwiOntcInhcIjo4NDIuMTM2MDM0MTgwMzk5NSxcInlcIjo1MDB9LFwiYmhhZ3lhLmJvZGRlcGFsbGlcIjp7XCJ4XCI6NzYzLjk5NTg0Mjc2OTM5MjEsXCJ5XCI6ODAwfSxcInJhamFuLmtvaGxpXCI6e1wieFwiOjg4MC4yMzQxOTcxMzMzNTk5LFwieVwiOjIwMH0sXCJyYWplYWguYWFua2FyYW5hcmF5YW5hblwiOntcInhcIjo4ODIuNDU4NjEzMjgwNDg4NixcInlcIjo2MDB9LFwiYWppdC52YXJnaGVhZVwiOntcInhcIjo2NjUuMTA4NDY2NTkwNjk3LFwieVwiOjcwMH0sXCJraXJhbi5kZWFhaVwiOntcInhcIjo0ODYuMzUwMzQ1ODE4Njk3OCxcInlcIjozMDB9LFwicmFteWEubmVkdW1hcmFuXCI6e1wieFwiOjkxOS45NzEzOTg5MTIwMTYsXCJ5XCI6ODAwfSxcImhhcmlhaC5iYWxpdmFkYVwiOntcInhcIjo5MDEuOTMwMjAyNTI3ODAwMSxcInlcIjo0MDB9LFwibXV0aHVyYWoubmF0YXJhamFuXCI6e1wieFwiOjk3Mi40NTI1MzMyMTgxOTgsXCJ5XCI6NjAwfSxcImF1YWhpbC5hZ3Jhd2FsXCI6e1wieFwiOjcyMS45OTg5MzQ3MzEwNzA3LFwieVwiOjQwMH0sXCJyYXZhZGEua3VtYXJcIjp7XCJ4XCI6ODQxLjk3NjY2ODExMTk0NTMsXCJ5XCI6ODAwfSxcInJhZ2hhdmVuZHJhLnJhbzhxbVwiOntcInhcIjo5NDMuMDIzMjI5NDY5NDQ3OSxcInlcIjo3MDB9LFwiYWlkZGFydGgucmFtXCI6e1wieFwiOjkyNi4xMzAzMzQ1NzI5OTg4LFwieVwiOjUwMH0sXCJhaGlyYWVuZHUuZGViXCI6e1wieFwiOjgxMS45OTI4NTQ4ODEwNzQ5LFwieVwiOjQwMH0sXCJwcmVtLm1hbmlja2F2ZWx1XCI6e1wieFwiOjcwNy40OTY3NTk0MTA4OTE5LFwieVwiOjYwMH0sXCJtYXR0aGV3LmNveWxlXCI6e1wieFwiOjU5MC40NDg3ODc1MjY0NDMyLFwieVwiOjUwMH0sXCJwaGlsLmR1bm1vcmVcIjp7XCJ4XCI6ODQ2LjA0NzIzNDY1MjM5OSxcInlcIjozMDB9fSxcInVzZXJTdGF0ZVwiOntcImF1dG9Db25uZWN0aXZpdHlcIjpcImluXCIsXCJhdXRvU2NhbGVcIjpcImxpbmVhclwiLFwiYWxwaGFUYXJnZXRcIjowLFwiYmlkaXJlY3Rpb25hbExpbmtzXCI6dHJ1ZSxcImNhc2NhZGluZ0NvbGxhcHNlXCI6ZmFsc2UsXCJjdXJyZW50Tm9kZVwiOm51bGwsXCJmaWx0ZXJzXCI6W3tcImF0dHJpYnV0ZXNcIjpbXSxcInR5cGVzXCI6e319XSxcImZvcmNlQ2hhcmdlU3RyZW5ndGhcIjowLjEsXCJmb3JjZUdyYXZpdHlYXCI6MC4xLFwiZm9yY2VHcmF2aXR5WVwiOjAuNSxcImZvcmNlTGlua0Rpc3RhbmNlXCI6MjAsXCJmb3JjZUxpbmtTdHJlbmd0aFwiOjAuNSxcImZvcmNlVmVsb2NpdHlEZWNheVwiOjAuOSxcImdyYXZpdHlQb2ludHNcIjp7fSxcImxldmVsRmlsdGVyXCI6LTEsXCJsaW5rVHlwZVwiOlwicGF0aFwiLFwibm9kZVNpemluZ0F1dG9tYXRpY1wiOnRydWUsXCJyZW5kZXJPbkV2ZXJ5VGlja1wiOnRydWUsXCJydW5TaW11bGF0aW9uXCI6dHJ1ZSxcInNjYWxlXCI6MyxcInNlcGFyYXRpb25EaXN0YW5jZVwiOjMwLFwic2hvd0xpbmtMYWJlbHNcIjpmYWxzZSxcInNob3dOb2RlTGFiZWxzXCI6dHJ1ZSxcInRyZWVNb2RlXCI6dHJ1ZSxcInRyYXZlcnNlRGVwdGhcIjozfX1dfSIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgeyBJQ29uc3RhbnRzIH0gZnJvbSBcIi4vSW50ZXJmYWNlcy9Db25zdGFudHNcIjtcblxuY29uc3Qgc2lkZUxlbmd0aCA9IDYwMDtcblxuY29uc3QgY29uc3RhbnRzOiBJQ29uc3RhbnRzID0ge1xuICBiYXNlQ29sb3I6IFwiIzAwMDAwMFwiLFxuICBjYW52YXNDb250ZXh0OiBcIjJkXCIsXG4gIGNlbnRlcjogc2lkZUxlbmd0aCAvIDIsXG4gIGZlbmNlUmFkaXVzOiBzaWRlTGVuZ3RoICogNSAvIDEyLFxuICBmb250Q29sb3I6IFwiIzg4ODg4OFwiLFxuICBsaW5lV2lkdGg6IDUsXG4gIG1pZGRsZUNpcmNsZUNvbG9yOiBcIiMwMDU1MDBcIixcbiAgbWlkZGxlQ2lyY2xlUmFkaXVzOiBzaWRlTGVuZ3RoIC8gNixcbiAgb3V0ZXJDaXJjbGVDb2xvcjogXCIjMDA5OTAwXCIsXG4gIG91dGVyQ2lyY2xlUmFkaXVzOiBzaWRlTGVuZ3RoIC8gMTAsXG4gIHNpZGVMZW5ndGgsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKGNvbnN0YW50cyk7XG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IElDaXJjbGUsIElEcmF3aW5nLCBJTGluZWFyRXF1YXRpb24sIElQb2ludCB9IGZyb20gXCIuL0ludGVyZmFjZXMvaW5kZXhcIjtcblxuZnVuY3Rpb24gX2RyYXdDaXJjbGUoYzogSFRNTENhbnZhc0VsZW1lbnQsIGRyYXdpbmc6IElEcmF3aW5nLCBjaXI6IElDaXJjbGUpOiB2b2lkIHtcbiAgY29uc3QgY29udGV4dCA9IGMuZ2V0Q29udGV4dChjb25zdGFudHMuY2FudmFzQ29udGV4dCkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0LmFyYyhjaXIuY2VudGVyLngsIGNpci5jZW50ZXIueSwgY2lyLnJhZGl1cyAtIGNvbnN0YW50cy5saW5lV2lkdGgsIDAsIDIgKiBNYXRoLlBJKTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBjb25zdGFudHMuYmFzZUNvbG9yO1xuICBpZiAoZHJhd2luZykge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZHJhd2luZy5jb2xvcjtcbiAgfVxuICBjb250ZXh0LmZpbGwoKTtcbiAgY29udGV4dC5saW5lV2lkdGggPSBjb25zdGFudHMubGluZVdpZHRoO1xuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29uc3RhbnRzLmJhc2VDb2xvcjtcbiAgY29udGV4dC5zdHJva2UoKTtcbiAgY29udGV4dC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gY29uc3RhbnRzLmZvbnRDb2xvcjtcbiAgY29udGV4dC5maWxsVGV4dChjaXIubmFtZSwgY2lyLmNlbnRlci54LCBjaXIuY2VudGVyLnkpO1xuXG59XG5cbmZ1bmN0aW9uIF9kcmF3TGluZShjOiBIVE1MQ2FudmFzRWxlbWVudCwgZHJhd2luZzogSURyYXdpbmcsIHBvaW50MTogSVBvaW50LCBwb2ludDI6IElQb2ludCApOiB2b2lkIHtcbiAgY29uc3QgY29udGV4dCA9IGMuZ2V0Q29udGV4dChjb25zdGFudHMuY2FudmFzQ29udGV4dCkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0LmxpbmVXaWR0aCA9IGNvbnN0YW50cy5saW5lV2lkdGg7XG4gIGNvbnRleHQubW92ZVRvKHBvaW50MS54LCBwb2ludDEueSk7XG4gIGNvbnRleHQubGluZVRvKHBvaW50Mi54LCBwb2ludDIueSk7XG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb25zdGFudHMuYmFzZUNvbG9yO1xuICBpZiAoZHJhd2luZykge1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBkcmF3aW5nLmNvbG9yO1xuICB9XG4gIGNvbnRleHQuc3Ryb2tlKCk7XG59XG5cbmZ1bmN0aW9uIF9jb25uZWN0Q2lyY2xlcyhjOiBIVE1MQ2FudmFzRWxlbWVudCwgY2lyY2xlMTogSUNpcmNsZSwgY2lyY2xlMjogSUNpcmNsZSwgZHJhd2luZzogSURyYXdpbmcgKTogdm9pZCB7XG4gIGxpbmUoYywgZHJhd2luZywgY2lyY2xlMS5jZW50ZXIsIGNpcmNsZTIuY2VudGVyKTtcbn1cblxuY29uc3QgY2lyY2xlID0gY3VycnkoX2RyYXdDaXJjbGUpO1xuY29uc3QgbGluZSA9IGN1cnJ5KF9kcmF3TGluZSk7XG5jb25zdCBjb25uZWN0Q2lyY2xlcyA9IGN1cnJ5KF9jb25uZWN0Q2lyY2xlcyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikuY2xlYXJSZWN0KDAsIDAsIGNvbnN0YW50cy5zaWRlTGVuZ3RoLCBjb25zdGFudHMuc2lkZUxlbmd0aCk7XG59XG5cbmV4cG9ydCB7XG4gIGNpcmNsZSxcbiAgY29ubmVjdENpcmNsZXMsXG4gIGxpbmUsXG59O1xuIiwiaW1wb3J0IHsgY3VycnksIG1lcmdlLCByYW5nZSB9IGZyb20gXCJyYW1kYVwiO1xuXG5pbXBvcnQge1xuICBJQ2lyY2xlLFxuICBJRGltZW5zaW9ucyxcbiAgSVBvaW50LFxuICBJUG9sYXIsXG59IGZyb20gXCIuL0ludGVyZmFjZXMvaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZGVMZW5ndGgobnVtYmVyT2ZTaWRlczogbnVtYmVyLCByYWRpdXM6IG51bWJlciApOiBudW1iZXIge1xuICBjb25zdCBleHRlcmlvckFuZ2xlID0gMzYwIC8gbnVtYmVyT2ZTaWRlcztcbiAgY29uc3QgaW50ZXJpb3JBbmdsZSA9IDE4MCAtIGV4dGVyaW9yQW5nbGU7XG4gIGNvbnN0IHRyaWFuZ2xlQmFzZUFuZ2xlID0gaW50ZXJpb3JBbmdsZSAvIDI7XG4gIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gY29udmVydERlZ3JlZXNUb1JhZGlhbnModHJpYW5nbGVCYXNlQW5nbGUpO1xuICBjb25zdCBoYWxmU2lkZSA9IHJhZGl1cyAvIE1hdGgudGFuKGFuZ2xlSW5SYWRpYW5zKTtcbiAgcmV0dXJuIDIgKiBoYWxmU2lkZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUNpcmNsZVBvaW50cyhkaW1lbnNpb25zOiBJRGltZW5zaW9ucywgY2lyY2xlczogSUNpcmNsZVtdKTogSUNpcmNsZVtdIHtcbiAgY29uc3QgY2VudGVyID0ge1xuICAgIHg6IGRpbWVuc2lvbnMueCAvIDIsXG4gICAgeTogZGltZW5zaW9ucy55IC8gMixcbiAgfTtcbiAgcmV0dXJuIGNpcmNsZXMubWFwKChjaXJjbGUpID0+XG4gICAgbWVyZ2UoY2lyY2xlLCB7IGNlbnRlcjogeyB4OiBjaXJjbGUuY2VudGVyLnggKyBjZW50ZXIueCwgeTogY2lyY2xlLmNlbnRlci55ICsgY2VudGVyLnkgfSB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGVncmVlc1RvUmFkaWFucyhhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGFuZ2xlICogMiAqIE1hdGguUEkgLyAzNjA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJ0ZXNpYW5Db29yZGluYXRlcyhwb2xhcjogSVBvbGFyKTogSVBvaW50IHtcbiAgY29uc3QgcmFkaWFucyA9IGNvbnZlcnREZWdyZWVzVG9SYWRpYW5zKHBvbGFyLnRoZXRhKTtcbiAgY29uc3QgeCA9IHBvbGFyLnIgKiBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgY29uc3QgeSA9IHBvbGFyLnIgKiBNYXRoLnNpbihyYWRpYW5zKTtcbiAgcmV0dXJuIHsgeCwgeSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPbkNlbnRlcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICByZXR1cm4gKGNpcjogSUNpcmNsZSkgPT5cbiAgICBNYXRoLnBvdyhjaXIuY2VudGVyLnggLSB4LCAyKSArIE1hdGgucG93KGNpci5jZW50ZXIueSAtIHksIDIpIDwgTWF0aC5wb3coY2lyLnJhZGl1cywgMik7XG59XG4iLCJpbXBvcnQgeyBjbG9uZSwgbWVyZ2UgfSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB7IElEM05vZGUsIElMaW5rLCBJTGlua0Zyb21XZWIsIElMaW5rTWFwLCBJVHdpZ2xldCwgSVR3aWdsZXRGcm9tV2ViIH0gZnJvbSBcIi4vSW50ZXJmYWNlcy9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtZWRUd2lnbGV0KHdlYlR3aWdsZXQ6IElUd2lnbGV0RnJvbVdlYik6IElUd2lnbGV0IHtcbiAgY29uc3QgYWxsTm9kZXNPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogSUQzTm9kZSB9ID0ge307XG4gIC8vIEFkZCBhbmQgc3luYyBleGlzdGluZyBub2Rlcy5cbiAgd2ViVHdpZ2xldC5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgYWxsTm9kZXNPYmplY3Rbbm9kZS5pZF0gPSBub2RlO1xuICB9KTtcblxuICAvLyBDbGVhciBvdXIgYWxsTGlua3NPYmplY3QgYmVjYXVzZSB3ZSBoYXZlIG5ldyBMaW5rcy5cbiAgY29uc3QgYWxsTGlua3NPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogSUxpbmsgfSA9IHt9O1xuICBjb25zdCBsaW5rU291cmNlTWFwOiBJTGlua01hcCA9IHt9O1xuICBjb25zdCBsaW5rVGFyZ2V0TWFwOiBJTGlua01hcCA9IHt9O1xuXG4gIHdlYlR3aWdsZXQubGlua3MuZm9yRWFjaCgobGluazogSUxpbmtGcm9tV2ViKSA9PiB7XG4gICAgY29uc3QgbmV3TGluazogSUxpbmsgPSB7XG4gICAgICBpZDogbGluay5pZCxcbiAgICAgIHNvdXJjZTogYWxsTm9kZXNPYmplY3RbbGluay5zb3VyY2VdLFxuICAgICAgdGFyZ2V0OiBhbGxOb2Rlc09iamVjdFtsaW5rLnRhcmdldF0sXG4gICAgfTtcbiAgICBhbGxMaW5rc09iamVjdFtsaW5rLmlkXSA9IG5ld0xpbms7XG5cbiAgICBpZiAobmV3TGluay5zb3VyY2UgJiYgbmV3TGluay50YXJnZXQpIHtcbiAgICAgIGlmICghbGlua1NvdXJjZU1hcFtuZXdMaW5rLnNvdXJjZS5pZF0pIHtcbiAgICAgICAgbGlua1NvdXJjZU1hcFtuZXdMaW5rLnNvdXJjZS5pZF0gPSBbbmV3TGluay5pZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rU291cmNlTWFwW25ld0xpbmsuc291cmNlLmlkXS5wdXNoKG5ld0xpbmsuaWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxpbmtUYXJnZXRNYXBbbmV3TGluay50YXJnZXQuaWRdKSB7XG4gICAgICAgIGxpbmtUYXJnZXRNYXBbbmV3TGluay50YXJnZXQuaWRdID0gW25ld0xpbmsuaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlua1RhcmdldE1hcFtuZXdMaW5rLnRhcmdldC5pZF0ucHVzaChuZXdMaW5rLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0xpbms7XG4gIH0pO1xuXG4gIGNvbnN0IHR3aWdsZXQ6IElUd2lnbGV0ID0ge1xuICAgIGxpbmtzOiBhbGxMaW5rc09iamVjdCxcbiAgICBub2RlczogYWxsTm9kZXNPYmplY3QsXG4gICAgc291cmNlTWFwOiBsaW5rU291cmNlTWFwLFxuICAgIHRhcmdldE1hcDogbGlua1RhcmdldE1hcCxcbiAgfTtcbiAgc2V0RGVwdGhzKHR3aWdsZXQpO1xuICByZXR1cm4gdHdpZ2xldDtcbn1cblxuZnVuY3Rpb24gc2V0RGVwdGhzKHR3aWdsZXQ6IElUd2lnbGV0KSB7XG4gIGxldCBjdXJyZW50TGF5ZXIgPSBSZWZsZWN0Lm93bktleXModHdpZ2xldC5ub2RlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobm9kZSkgPT4gdHdpZ2xldC5zb3VyY2VNYXBbbm9kZV0gJiYgIXR3aWdsZXQudGFyZ2V0TWFwW25vZGVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChub2RlSWQpID0+IHR3aWdsZXQubm9kZXNbbm9kZUlkXSk7XG4gIGxldCBuZXh0TGF5ZXI6IElEM05vZGVbXSA9IFtdO1xuICBsZXQgbGF5ZXIgPSAwO1xuICB3aGlsZSAoY3VycmVudExheWVyLmxlbmd0aCkge1xuICAgIGNvbnN0IG5vZGUgPSBjdXJyZW50TGF5ZXIuc2hpZnQoKTtcbiAgICBpZiAobm9kZSAmJiAhbm9kZS5kZXB0aCkge1xuICAgICAgbm9kZS5kZXB0aCA9IGxheWVyO1xuICAgICAgKHR3aWdsZXQuc291cmNlTWFwW25vZGUuaWRdIHx8IFtdKVxuICAgICAgLmZvckVhY2goKGxpbmtJZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0d2lnbGV0LmxpbmtzW2xpbmtJZF0udGFyZ2V0O1xuICAgICAgICBuZXh0TGF5ZXIucHVzaCh0YXJnZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50TGF5ZXIubGVuZ3RoID09PSAwICYmIG5leHRMYXllci5sZW5ndGggPiAwKSB7XG4gICAgICBsYXllciArPSAxO1xuICAgICAgY3VycmVudExheWVyID0gbmV4dExheWVyLm1hcCgobikgPT4gbik7XG4gICAgICBuZXh0TGF5ZXIgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlLCByYW5nZSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0ICogYXMgRHJhdyBmcm9tIFwiLi9kcmF3aW5nXCI7XG5pbXBvcnQgeyBnZXRDYXJ0ZXNpYW5Db29yZGluYXRlcywgaXNPbkNlbnRlciB9IGZyb20gXCIuL2dlb21ldHJ5XCI7XG5pbXBvcnQgeyBJQ2lyY2xlLCBJQ29uc3RhbnRzLCBJRDNOb2RlLCBJUG9sYXIsIElUd2lnbGV0IH0gZnJvbSBcIi4vSW50ZXJmYWNlcy9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0ZXJDaXJjbGVzKGNvbnN0YW50czogSUNvbnN0YW50cywgdHdpZ2xldDogSVR3aWdsZXQsIHNvdXJjZT86IHN0cmluZyk6IElDaXJjbGVbXSB7XG4gIGNvbnN0IG91dGVyTm9kZXMgPSBnZXRPdXRlck5vZGVzKHR3aWdsZXQsIHNvdXJjZSk7XG4gIGNvbnN0IGNpcmNsZU9mQ2lyY2xlcyA9XG4gICAgZ2V0Q2lyY2xlSW5BQ2lyY2xlKG91dGVyTm9kZXMubGVuZ3RoLCBjb25zdGFudHMuZmVuY2VSYWRpdXMsIGNvbnN0YW50cy5vdXRlckNpcmNsZVJhZGl1cyk7XG4gIHJldHVybiBjaXJjbGVPZkNpcmNsZXNcbiAgLm1hcCgoY2lyY2xlLCBpbmRleCkgPT4gbWVyZ2UoY2lyY2xlLCB7IG5hbWU6IG91dGVyTm9kZXNbaW5kZXhdLm5hbWUsIGlkOiBvdXRlck5vZGVzW2luZGV4XS5pZCB9KSlcbiAgLm1hcCgoY2lyY2xlKSA9PiBtZXJnZShcbiAgICBjaXJjbGUsXG4gICAge1xuICAgICAgY2VudGVyOiB7XG4gICAgICAgIHg6IGNpcmNsZS5jZW50ZXIueCArIGNvbnN0YW50cy5jZW50ZXIsXG4gICAgICAgIHk6IGNpcmNsZS5jZW50ZXIueSArIGNvbnN0YW50cy5jZW50ZXIsXG4gICAgICB9LFxuICAgIH0sXG4gICkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoXG4gICAgY29uc3RhbnRzOiBJQ29uc3RhbnRzLFxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgdHdpZ2xldDogSVR3aWdsZXQsXG4gICAgcm9vdENpcmNsZXM6IElDaXJjbGVbXSxcbiAgICBjZW50ZXJDaXJjbGU/OiBJQ2lyY2xlKSB7XG4gIGNvbnN0IGxpc3RlbmVyID0gY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBfaGFuZGxlcihtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgY2xpY2tlZENpcmNsZSA9IHJvb3RDaXJjbGVzLmZpbHRlcihpc09uQ2VudGVyKG1vdXNlRXZlbnQueCwgbW91c2VFdmVudC55KSlbMF07XG4gICAgaWYgKGNsaWNrZWRDaXJjbGUpIHtcbiAgICAgIGhhbmRsZU91dHNpZGVDaXJjbGVDbGljayhjb25zdGFudHMsIGNhbnZhcywgX2hhbmRsZXIsIHR3aWdsZXQsIGNsaWNrZWRDaXJjbGUpO1xuICAgIH0gZWxzZSBpZiAoY2VudGVyQ2lyY2xlICYmIGlzT25DZW50ZXIobW91c2VFdmVudC54LCBtb3VzZUV2ZW50LnkpKGNlbnRlckNpcmNsZSkpIHtcbiAgICAgIGNvbnN0IGxpbmtJZCA9IHR3aWdsZXQudGFyZ2V0TWFwW2NlbnRlckNpcmNsZS5pZF0gPyB0d2lnbGV0LnRhcmdldE1hcFtjZW50ZXJDaXJjbGUuaWRdWzBdIDogdW5kZWZpbmVkO1xuICAgICAgRHJhdy5jbGVhckNhbnZhcyhjYW52YXMpO1xuICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfaGFuZGxlcik7XG4gICAgICBpZiAobGlua0lkKSB7XG4gICAgICAgIGdvT25lTGV2ZWxVcChjb25zdGFudHMsIGNhbnZhcywgdHdpZ2xldCwgbGlua0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG91dGVyQ2lyY2xlcyA9IGdldE91dGVyQ2lyY2xlcyhjb25zdGFudHMsIHR3aWdsZXQpO1xuICAgICAgICBpZiAob3V0ZXJDaXJjbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGRyYXdTZXRPZkNpcmNsZXMoY29uc3RhbnRzLCBjYW52YXMsIHR3aWdsZXQsIG91dGVyQ2lyY2xlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhd0Jhc2VMZXZlbChjb25zdGFudHMsIGNhbnZhcywgdHdpZ2xldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0Jhc2VMZXZlbChjb25zdGFudHM6IElDb25zdGFudHMsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHR3aWdsZXQ6IElUd2lnbGV0KSB7XG4gIGNvbnN0IGNoaWxkQ2lyY2xlcyA9IGdldE91dGVyQ2lyY2xlcyhjb25zdGFudHMsIHR3aWdsZXQpO1xuICBjaGlsZENpcmNsZXMuZm9yRWFjaChEcmF3LmNpcmNsZShjYW52YXMsIHsgY29sb3I6IFwiIzAwODgwMFwiIH0pKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoY29uc3RhbnRzLCBjYW52YXMsIHR3aWdsZXQsIGNoaWxkQ2lyY2xlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3U2V0T2ZDaXJjbGVzKFxuICAgIGNvbnN0YW50czogSUNvbnN0YW50cyxcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHR3aWdsZXQ6IElUd2lnbGV0LFxuICAgIGNlbnRlckNpcmNsZTogSUNpcmNsZSkge1xuICBjb25zdCBjaGlsZENpcmNsZXMgPSBnZXRPdXRlckNpcmNsZXMoY29uc3RhbnRzLCB0d2lnbGV0LCBjZW50ZXJDaXJjbGUuaWQpO1xuICBpZiAoY2hpbGRDaXJjbGVzLmxlbmd0aCA+IDApIHtcbiAgICBEcmF3LmNsZWFyQ2FudmFzKGNhbnZhcyk7XG4gICAgY2hpbGRDaXJjbGVzLmZvckVhY2goRHJhdy5jaXJjbGUoY2FudmFzLCB7IGNvbG9yOiBcIiMwMDg4MDBcIiB9KSk7XG4gICAgY29uc3QgbmV3Q2VudGVyID0gbWVyZ2UoXG4gICAgICBjZW50ZXJDaXJjbGUsXG4gICAgICB7IGNlbnRlcjogeyB4OiBjb25zdGFudHMuY2VudGVyLCB5OiBjb25zdGFudHMuY2VudGVyIH0sIHJhZGl1czogY29uc3RhbnRzLm1pZGRsZUNpcmNsZVJhZGl1cyB9LFxuICAgICk7XG4gICAgRHJhdy5jaXJjbGUoY2FudmFzLCB7IGNvbG9yOiBcIiMwMDQ0MDBcIiB9LCBuZXdDZW50ZXIpO1xuICAgIGNoaWxkQ2lyY2xlcy5mb3JFYWNoKERyYXcuY29ubmVjdENpcmNsZXMoY2FudmFzLCBuZXdDZW50ZXIpKTtcbiAgICBhZGRFdmVudExpc3RlbmVycyhjb25zdGFudHMsIGNhbnZhcywgdHdpZ2xldCwgY2hpbGRDaXJjbGVzLCBuZXdDZW50ZXIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0T3V0ZXJOb2Rlcyh0d2lnbGV0OiBJVHdpZ2xldCwgc291cmNlPzogc3RyaW5nKTogSUQzTm9kZVtdIHtcbiAgbGV0IG91dGVyTm9kZXM6IElEM05vZGVbXTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIGlmICh0d2lnbGV0LnNvdXJjZU1hcFtzb3VyY2VdKSB7XG4gICAgICBjb25zdCBsaW5rSWRzID0gdHdpZ2xldC5zb3VyY2VNYXBbc291cmNlXTtcbiAgICAgIG91dGVyTm9kZXMgPSBsaW5rSWRzLnJlZHVjZSgoYXJyYXksIGlkKSA9PiB7XG4gICAgICAgIGFycmF5LnB1c2godHdpZ2xldC5saW5rc1tpZF0udGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgfSwgW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG91dGVyTm9kZXMgPSBSZWZsZWN0Lm93bktleXModHdpZ2xldC5ub2RlcylcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGtleSkgPT4gdHdpZ2xldC5ub2Rlc1trZXldKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoY2lyKSA9PiBjaXIuZGVwdGggPT09IDApO1xuICB9XG4gIHJldHVybiBvdXRlck5vZGVzO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVJbkFDaXJjbGUobnVtYmVyT2ZDaXJjbGVzOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBsaXR0bGVSYWRpdXM6IG51bWJlcik6IElDaXJjbGVbXSB7XG4gIGNvbnN0IGRlZ3JlZXNCZXR3ZWVuQ2lyY2xlID0gMzYwIC8gbnVtYmVyT2ZDaXJjbGVzO1xuICBjb25zdCByYWRpdXNGcm9tQ2VudGVyID0gcmFkaXVzIC0gbGl0dGxlUmFkaXVzO1xuICByZXR1cm4gcmFuZ2UoMCwgbnVtYmVyT2ZDaXJjbGVzKVxuICAubWFwKChpbnRlcnZhbCkgPT4ge1xuICAgIGNvbnN0IHBvbGFyOiBJUG9sYXIgPSB7IHI6IHJhZGl1c0Zyb21DZW50ZXIsIHRoZXRhOiBpbnRlcnZhbCAqIGRlZ3JlZXNCZXR3ZWVuQ2lyY2xlICsgZGVncmVlc0JldHdlZW5DaXJjbGUgLyAyIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlcjogZ2V0Q2FydGVzaWFuQ29vcmRpbmF0ZXMoIHBvbGFyICksXG4gICAgICByYWRpdXM6IGxpdHRsZVJhZGl1cyxcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3V0c2lkZUNpcmNsZUNsaWNrKFxuICAgIGNvbnN0YW50czogSUNvbnN0YW50cyxcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIGhhbmRsZXJGbjogKHRoaXM6IEhUTUxDYW52YXNFbGVtZW50LCBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkLFxuICAgIHR3aWdsZXQ6IElUd2lnbGV0LFxuICAgIGNsaWNrZWRDaXJjbGU6IElDaXJjbGUpIHtcbiAgY29uc3QgbmVlZFRvUmVtb3ZlID0gZHJhd1NldE9mQ2lyY2xlcyhjb25zdGFudHMsIGNhbnZhcywgdHdpZ2xldCwgY2xpY2tlZENpcmNsZSk7XG4gIGlmIChuZWVkVG9SZW1vdmUpIHtcbiAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZXJGbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ29PbmVMZXZlbFVwKGNvbnN0YW50czogSUNvbnN0YW50cywgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgdHdpZ2xldDogSVR3aWdsZXQsIGxpbmtJZDogc3RyaW5nKSB7XG4gIGNvbnN0IG5vZGUgPSB0d2lnbGV0LmxpbmtzW2xpbmtJZF0uc291cmNlO1xuICBjb25zdCBuZXdDZW50ZXIgPVxuICAgIG1lcmdlKFxuICAgICAgbm9kZSxcbiAgICAgIHsgY2VudGVyOiB7IHg6IGNvbnN0YW50cy5jZW50ZXIsIHk6IGNvbnN0YW50cy5jZW50ZXIgfSwgcmFkaXVzOiBjb25zdGFudHMubWlkZGxlQ2lyY2xlUmFkaXVzIH0sXG4gICAgKTtcbiAgY29uc3QgY2hpbGRDaXJjbGVzID0gZ2V0T3V0ZXJDaXJjbGVzKGNvbnN0YW50cywgdHdpZ2xldCwgbmV3Q2VudGVyLmlkKTtcbiAgY2hpbGRDaXJjbGVzLmZvckVhY2goRHJhdy5jaXJjbGUoY2FudmFzLCB7IGNvbG9yOiBcIiMwMDg4MDBcIiB9KSk7XG4gIERyYXcuY2lyY2xlKGNhbnZhcywgeyBjb2xvcjogXCIjMDA0NDAwXCIgfSwgbmV3Q2VudGVyKTtcbiAgY2hpbGRDaXJjbGVzLmZvckVhY2goRHJhdy5jb25uZWN0Q2lyY2xlcyhjYW52YXMsIG5ld0NlbnRlcikpO1xuICBhZGRFdmVudExpc3RlbmVycyhjb25zdGFudHMsIGNhbnZhcywgdHdpZ2xldCwgY2hpbGRDaXJjbGVzLCBuZXdDZW50ZXIpO1xufVxuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9FbWFpbHMuanNvblwiO1xuaW1wb3J0ICogYXMgVHdpZ2xldCBmcm9tIFwiLi9oYW5kbGVUd2lnbGV0XCI7XG5pbXBvcnQgeyBJVHdpZ2xldEZyb21XZWIgfSBmcm9tIFwiLi9JbnRlcmZhY2VzL2luZGV4XCI7XG5pbXBvcnQgeyBkcmF3QmFzZUxldmVsLCBkcmF3U2V0T2ZDaXJjbGVzLCBnZXRPdXRlckNpcmNsZXMgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgY29uc3QgdHdpZ2xldCA9IFR3aWdsZXQuZ2V0VHJhbnNmb3JtZWRUd2lnbGV0KGRhdGEgYXMgSVR3aWdsZXRGcm9tV2ViKTtcbiAgY29uc3Qgb3V0ZXJDaXJjbGVzID0gZ2V0T3V0ZXJDaXJjbGVzKGNvbnN0YW50cywgdHdpZ2xldCk7XG4gIGlmIChvdXRlckNpcmNsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgZHJhd1NldE9mQ2lyY2xlcyhjb25zdGFudHMsIGNhbnZhcywgdHdpZ2xldCwgb3V0ZXJDaXJjbGVzWzBdKTtcbiAgfSBlbHNlIHtcbiAgICBkcmF3QmFzZUxldmVsKGNvbnN0YW50cywgY2FudmFzLCB0d2lnbGV0KTtcbiAgfVxufVxuXG5tYWluKCk7XG4iXX0=
