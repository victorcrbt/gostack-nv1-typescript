import { Request, Response } from 'express';
import createUser from './services/CreateUserService';

export function storeUser(request: Request, response: Response) {
  const { name, email, password, techs } = request.body;
  
  const user = createUser({ name, email, password, techs });
  
  return response.status(201).json(user);
}