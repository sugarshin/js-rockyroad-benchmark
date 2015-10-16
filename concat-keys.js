const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/concat-keys');
const kTakam = require('k-takam/question/concat-keys');
const RyotaHirano = require('RyotaHirano/question/concat-keys');

suite.add('sugarshin', () => {
  sugarshin([
    {
      animal: 'dog',
      fruits: {
        red: 'apple',
        yellow: 'banana'
      }
    },
    {
      fruits: 'strawberry'
    },
    {
      animal: 'cat',
      fruits: {
        pink: 'peach'
      },
      color: 'yellow'
    }
  ]);
})
.add('k-takam', () => {
  kTakam([
    {
      animal: 'dog',
      fruits: {
        red: 'apple',
        yellow: 'banana'
      }
    },
    {
      fruits: 'strawberry'
    },
    {
      animal: 'cat',
      fruits: {
        pink: 'peach'
      },
      color: 'yellow'
    }
  ]);
})
.add('RyotaHirano', () => {
  RyotaHirano([
    {
      animal: 'dog',
      fruits: {
        red: 'apple',
        yellow: 'banana'
      }
    },
    {
      fruits: 'strawberry'
    },
    {
      animal: 'cat',
      fruits: {
        pink: 'peach'
      },
      color: 'yellow'
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
