const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/invert-key-value');
const kTakam = require('k-takam/question/invert-key-value');
const RyotaHirano = require('RyotaHirano/question/invert-key-value');

suite.add('sugarshin', () => {
  sugarshin({
    value: 0,
    10: 'id',
    total: 100,
    taro: 'name'
  });
})
.add('k-takam', () => {
  kTakam({
    value: 0,
    10: 'id',
    total: 100,
    taro: 'name'
  });
})
.add('RyotaHirano', () => {
  RyotaHirano({
    value: 0,
    10: 'id',
    total: 100,
    taro: 'name'
  });
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
