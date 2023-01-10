import React, { FunctionComponent, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { fetchDog } from "../helpers/fetch";
import errordog from '../images/errordog.png';

interface DogsProps {}
 
const Dogs: FunctionComponent<DogsProps> = () => {
  const [dog, setDog] = useState<string>('');

  const fetch = async (): Promise<void> => {
    const newDog = await fetchDog();
    setDog(newDog);
  }

  useEffect(() => { fetch() }, []);

  return (
    <div  className="mainContainer">
      <Nav />

      <section className="flex flex-col items-center justify-center h-4/5">
        <img src={ dog ? dog : errordog } alt="" className="dogImg" />

        <button className="dogsButton" onClick={ () => fetch() }>refresh</button>
      </section>
    </div>
  );
}
 
export default Dogs;