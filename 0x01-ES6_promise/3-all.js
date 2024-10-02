import { uploadPhoto, createUser } from './utlis';

export default function handleProfileSignup() {
  async function hi() {
    try {
      const body = await uploadPhoto()
        .then((res) => res.body);
      const { firstName, lastName } = await createUser();
      console.log(body, firstName, lastName);
    } catch (err) {
      console.log('Signup system offline');
    }
  }
  hi();
}
