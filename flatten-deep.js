const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/flatten-deep');
const kTakam = require('k-takam/question/flatten-deep');
const RyotaHirano = require('RyotaHirano/question/flatten-deep');

suite.add('sugarshin', () => {
  sugarshin([
    [2, [3, 5], ''],
    [4, 5, [7, 8], [[[' ']]], [undefined, [[{}]]]],
    [1, [[4, false]], true, null]
  ]);
})
.add('k-takam', () => {
  kTakam([
    [2, [3, 5], ''],
    [4, 5, [7, 8], [[[' ']]], [undefined, [[{}]]]],
    [1, [[4, false]], true, null]
  ]);
})
.add('RyotaHirano', () => {
  RyotaHirano([
    [2, [3, 5], ''],
    [4, 5, [7, 8], [[[' ']]], [undefined, [[{}]]]],
    [1, [[4, false]], true, null]
  ]);
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
