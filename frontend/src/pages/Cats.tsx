import React, { FunctionComponent, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { fetchCat } from "../helpers/fetch";
import errorcat from '../images/errorcat.png';

interface CatsProps {}
 
const Cats: FunctionComponent<CatsProps> = () => {
  const [status, setStatus] = useState<string>('');
  const [cat, setCat] = useState<string>('');

  const fetch = async (): Promise<void> => {
    const result = await fetchCat(status);
    if(!result) setCat(errorcat);
    setCat(result);
  }

  return (
    <div className="mainContainer">
      <Nav />

      <section className="flex flex-col items-center justify-around h-5/6">
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            fetch();
          } }
          className="catsSearch"
        >
          <h1 className="text-xl min-w-max">Type an HTTP status:</h1>

          <div className="w-full h-auto flex items-center justify-center">
            <input
              type="number"
              value={ status }
              onChange={ (e) => setStatus(e.target.value) }
              className="usersFilterInput"
              placeholder="Ex: 201"
            />

            <button className="usersFilterButton">search</button>
          </div>
        </form>

        <img src={ cat } alt="" className="catImg" />
      </section>
    </div>
  );
}
 
export default Cats;