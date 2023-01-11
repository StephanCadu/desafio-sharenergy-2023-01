import axios from "axios";
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import Nav from "../components/Nav";
import { getClients } from "../helpers/axios";
import { IClient } from "../interfaces";

interface ClientsProps {}

const keys = ['name', 'email', 'phone', 'address', 'cpf'];
 
const Clients: FunctionComponent<ClientsProps> = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [editor, setEditor] = useState<boolean>(false);
  const [client, setClient] = useState<IClient>({
    name: '',
    email: '',
    phone: '',
    address: '',
    cpf: '',
  })

  const fetchClients = async (): Promise<void> => {
    const result = await getClients();
    setClients(result);
  }
  
  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void => {
    setClient((prev) => ({ ...prev, [name]: value }))
  }
  
  const edit = async () => {
    // stopped here
    // await axios.put(`http://localhost:3001/clients/${id}`, client);
    // fetchClients();
  };
  
  const save = async () => {
    await axios.post('http://localhost:3001/clients', client);
    fetchClients();
  };

  useEffect(() => { fetchClients() }, [])

  return (
    <div className="mainContainer">
      <Nav />

      <form className="clientForm" onSubmit={ editor ? edit : save }>
        {
          keys.map((key) => (
            <input
              key={ key }
              name={ key }
              value={ client[key as keyof IClient] }
              onChange={ (e) => handleChange(e) }
              type="text"
              className="clientInput"
              placeholder={ key }
            />
          ))
        }
        <button className={ `${editor ? 'edit' : 'save' } clientButton`}>{ editor ? 'edit' : 'save' }</button>
      </form>

      <section className="clientsContainer">
        {
          clients.map(({ name, phone, address, cpf, email }) => (
            <div className="clientCard" key={ name }>
              <h2 className="text-xl font-bold">{ name }</h2>
              <h2 className="text-left w-4/5"><span className="font-bold">email: </span>{ email }</h2>
              <h2 className="text-left w-4/5"><span className="font-bold">phone: </span>{ phone }</h2>
              <h2 className="text-left w-4/5"><span className="font-bold">address: </span>{ address }</h2>
              <h2 className="text-left w-4/5"><span className="font-bold">cpf: </span>{ cpf }</h2>
              <div className="flex w-1/2 items-center justify-around">
                <button>🔧</button>
                <button>🚫</button>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  );
}
 
export default Clients;