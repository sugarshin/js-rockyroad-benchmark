const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/ascending-sort-by-id');
const kTakam = require('k-takam/question/ascending-sort-by-id');
const RyotaHirano = require('RyotaHirano/question/ascending-sort-by-id');

suite.add('sugarshin', () => {
  sugarshin([
    {
      id: 2,
      name: 'other'
    },
    {
      id: 10,
      name: 'other'
    },
    {
      id: 4,
      name: 'other'
    }
  ]);
})
.add('k-takam', () => {
  kTakam([
    {
      id: 2,
      name: 'other'
    },
    {
      id: 10,
      name: 'other'
    },
    {
      id: 4,
      name: 'other'
    }
  ]);
})
.add('RyotaHirano', () => {
  RyotaHirano([
    {
      id: 2,
      name: 'other'
    },
    {
      id: 10,
      name: 'other'
    },
    {
      id: 4,
      name: 'other'
    }
  ]);
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
