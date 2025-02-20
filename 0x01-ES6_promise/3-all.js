import { uploadPhoto, createUser } from './utlis';

export default function handleProfileSignup() {
  async function hello() {
    try {
      const name = await createUser();
      const photo = await uploadPhoto();
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    } catch (err) {
      console.log('Signup system offline');
    }
  }
  hello();
}
