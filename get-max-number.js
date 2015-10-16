const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/get-max-number');
const kTakam = require('k-takam/question/get-max-number');
const RyotaHirano = require('RyotaHirano/question/get-max-number');

suite.add('sugarshin', () => {
  sugarshin([4, 25, 92, 0, 1, 9, 970, 7]);
})
.add('k-takam', () => {
  kTakam([4, 25, 92, 0, 1, 9, 970, 7]);
})
.add('RyotaHirano', () => {
  RyotaHirano([4, 25, 92, 0, 1, 9, 970, 7]);
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
