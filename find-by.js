const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const sugarshin = require('sugarshin/question/find-by');
const kTakam = require('k-takam/question/find-by');
const RyotaHirano = require('RyotaHirano/question/find-by');

suite.add('sugarshin', () => {
  sugarshin([
    {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
    {userID: 3, name: 'abebe', tags: ['c']},
    {userID: 0, name: 'abebe', tags: ['c', 'a']},
    {userID: 5, name: 'hoge', tags: []}
  ], {name: 'abebe', userID: 2});
})
.add('k-takam', () => {
  kTakam([
    {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
    {userID: 3, name: 'abebe', tags: ['c']},
    {userID: 0, name: 'abebe', tags: ['c', 'a']},
    {userID: 5, name: 'hoge', tags: []}
  ], {name: 'abebe', userID: 2});
})
.add('RyotaHirano', () => {
  RyotaHirano([
    {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
    {userID: 3, name: 'abebe', tags: ['c']},
    {userID: 0, name: 'abebe', tags: ['c', 'a']},
    {userID: 5, name: 'hoge', tags: []}
  ], {name: 'abebe', userID: 2});
})
.on('cycle', event => {
  console.log(String(event.target));
})
.on('complete', () => {
  console.log(`Fastest is ${suite.filter('fastest').pluck('name')}`);
})
.run({ 'async': true });
