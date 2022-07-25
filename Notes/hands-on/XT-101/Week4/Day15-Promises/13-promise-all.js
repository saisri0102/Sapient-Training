/**
 * Promise.all()
If you need to synchronize different promises, Promise.all() helps you define a list of promises, and execute something when they are all resolved
 */
const f1 = fetch('/something.json');
const f2 = fetch('/something2.json');

Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res);
  })
  .catch(err => {
    console.error(err);
  });
