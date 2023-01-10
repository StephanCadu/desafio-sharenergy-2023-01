import React, { FunctionComponent } from "react";
import Nav from "../components/Nav";

interface CatsProps {}
 
const Cats: FunctionComponent<CatsProps> = () => {
  return (
    <div>
      <Nav />
    </div>
  );
}
 
export default Cats;