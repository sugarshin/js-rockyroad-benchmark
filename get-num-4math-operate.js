const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/get-num-4math-operate');
const kTakam = require('k-takam/question/get-num-4math-operate');
const RyotaHirano = require('RyotaHirano/question/get-num-4math-operate');

suite.add('sugarshin', () => {
  sugarshin(0, {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [2, 3]
  });
})
.add('k-takam', () => {
  kTakam(0, {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [2, 3]
  });
})
.add('RyotaHirano', () => {
  RyotaHirano(0, {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [2, 3]
  });
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
