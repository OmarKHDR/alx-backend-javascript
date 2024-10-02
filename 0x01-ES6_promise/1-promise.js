export default function getFullResponseFromAPI(success) {
  let prom;
  if (success) {
    prom = Promise.resolve({ status: 200, body: 'Success' });
  } else {
    prom = Promise.reject(new Error('The fake API is not working currently'));
  }
  return prom;
}
