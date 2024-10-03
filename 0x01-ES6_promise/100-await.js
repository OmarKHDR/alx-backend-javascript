import { uploadPhoto, createUser } from './utlis';

export default async function asyncUploadUser() {
  try {
    const photoRes = await uploadPhoto()
      .catch(() => { throw Error(); });
    const userRes = await createUser()
      .catch(() => { throw Error(); });
    return {
      photo: photoRes,
      user: userRes,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
