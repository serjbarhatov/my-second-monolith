import { Request, Response } from 'express';
import { ArticleResponse } from '../utils/interfaces.js';
import * as Dotenv from 'dotenv';
Dotenv.config({ path: '.env' });
import { getData } from '../utils/ajax.js';

const apiUrl: string = process.env.API_URL;

export const getIndex = async (req: Request, res: Response): Promise<void> => {
  const article: ArticleResponse = await getData(`${apiUrl}/articles/1`);
  res.render('index', { article: article });
};
