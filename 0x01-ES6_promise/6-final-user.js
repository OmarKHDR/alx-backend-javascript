import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const sign = signUpUser(firstName, lastName);
  const file = uploadPhoto(filename);
  return Promise.allSettled([sign, file])
    .then((results) => {
      results.map((result, index) => ({
        status: result.status,
        value: index === 0 ? result.value : result.reason,
      }));
    });
}
