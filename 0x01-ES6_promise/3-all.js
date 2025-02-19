import { uploadPhoto, createUser } from './utlis';

export default async function handleProfileSignup() {
  try {
    const name = await createUser();
    const photo = await uploadPhoto();
    console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
