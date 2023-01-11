import axios from 'axios';
import { IClient } from '../interfaces';

export const getClients = async (): Promise<IClient[]> => {
  const clients = await axios.get('http://localhost:3001/clients');
  return clients.data;
}