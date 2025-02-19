import { uploadPhoto, createUser } from './utlis';

export default async function handleProfileSignup() {
  const name = await createUser();
  const photo = await uploadPhoto();
  console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
}
