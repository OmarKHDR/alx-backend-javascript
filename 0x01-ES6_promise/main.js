import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
console.log(handleResponseFromAPI(promise));

const promise2 = Promise.reject();
console.log(handleResponseFromAPI(promise2));
