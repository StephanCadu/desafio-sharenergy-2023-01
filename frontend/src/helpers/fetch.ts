import { IUser } from "../interfaces";

const usersURL = (pages: number): string => `https://randomuser.me/api/?page=${pages}&results=10&seed=abc&inc=picture,name,email,login,dob`;
const dogsURL = 'https://random.dog/woof.json';

export const fetchUsers = async (pages: number): Promise<IUser[]> => {
  const users = await fetch(usersURL(pages)).then((data) => data.json()).then(({ results }) => results);
  return users;
}

export const fetchDog = async (): Promise<string> => {
  const dog = await fetch(dogsURL).then((data) => data.json());
  console.log(dog);
  
  return dog.url;
}