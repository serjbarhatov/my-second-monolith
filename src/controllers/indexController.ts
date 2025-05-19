import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Client} from '../../prisma/types.js';
import { getData } from '../utils/ajax.js';
const prisma: PrismaClient = new PrismaClient();


/**
 * Function to get all people
 * @returns A promise that resolves to a list of clients.
 */
async function getClients(): Promise<Client[]> {
  return await prisma.client.findMany();
}

export const getIndex = async (req: Request, res: Response): Promise<void> => {
  const article: Article = await getData('https://articles-zxjs.onrender.com/articles/1');
  // const clients: Client[] = await getClients();
  // console.log(clients);
  res.render('index', { clients: articles });
};
