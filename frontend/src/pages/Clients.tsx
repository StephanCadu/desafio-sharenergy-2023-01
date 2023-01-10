import React, { FunctionComponent } from "react";
import Nav from "../components/Nav";

interface ClientsProps {}
 
const Clients: FunctionComponent<ClientsProps> = () => {
  return (
    <div className="mainContainer">
      <Nav />
    </div>
  );
}
 
export default Clients;