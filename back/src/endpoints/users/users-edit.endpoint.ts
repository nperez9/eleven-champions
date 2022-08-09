import { NextFunction, Response } from 'express';

import { CustomRequest, Roles, User } from '../../interfaces';
import UserModel from '../../models/user.model';
import { errorResponse, successResponse } from '../../utils';
import { ERROR } from '../../constants';

export interface IBodyParams {
  name: string;
  email: string;
  role: string;
}

export const userEditEndpoint =
async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.data.user;
    const user = await UserModel.findById(id);
    const parsedData = req.body as IBodyParams;

    if (!user) {
      return errorResponse(res, 404, ERROR.INVALID_USER);
    }

    if (parsedData.email) {
      user.email = parsedData.email;
    }
    if (parsedData.name) {
      user.name = parsedData.name;
    }
    if (parsedData.role) {
      user.role = (parsedData.role === Roles.ADMIN) ? Roles.ADMIN : Roles.USER;
    }

    const result = await user.save();
    successResponse(res, result);
  } catch (e) {
    next(e);
  }
};