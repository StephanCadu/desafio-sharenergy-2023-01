import React, { FunctionComponent } from "react";
import Nav from "../components/Nav";


interface DogsProps {}
 
const Dogs: FunctionComponent<DogsProps> = () => {
  return (
    <div>
      <Nav />
    </div>
  );
}
 
export default Dogs;