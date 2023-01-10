import React, { FunctionComponent, useState } from "react";
import Nav from "../components/Nav";
import errorcat from '../images/errorcat.png';

interface CatsProps {}
 
const Cats: FunctionComponent<CatsProps> = () => {
  const [status, setStatus] = useState<string>('');

  const catsURL = `https://http.cat/${status}`;

  return (
    <div className="mainContainer">
      <Nav />

      <section className="flex flex-col items-center justify-center h-5/6 w-3/5">
        <h1 className="text-xl min-w-max">Type an HTTP status:</h1>

        <input
          type="number"
          value={ status }
          onChange={ (e) => setStatus(e.target.value) }
          className="dogsInput"
          placeholder="Ex: 201"
        />
      </section>
        
      <img src={ status ? catsURL : errorcat } alt="" className="catImg" />
    </div>
  );
}
 
export default Cats;