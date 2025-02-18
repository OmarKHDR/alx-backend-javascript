export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  return promise.then(() => {
    const res = { status: 200, body: 'Success' };
    return res;
  }).catch(() => new Error());
}
