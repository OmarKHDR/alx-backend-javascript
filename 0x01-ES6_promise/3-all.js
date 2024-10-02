import { uploadPhoto, createUser } from './utlis';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;
  async function name() {
    body = await uploadPhoto().then((res) => res.body);
    firstName = await createUser().then((res) => res.firstName);
    lastName = await createUser().then((res) => res.lastName);
    console.log(body, firstName, lastName);
  }
  name();
}
