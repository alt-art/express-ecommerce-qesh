import { RequestHandler } from 'express';

import * as UserService from '../service/UserService';

export const createUser: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserService.createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser: RequestHandler = (req, res) => {
  const { user } = res.locals;
  try {
    UserService.deleteUser(user.id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
