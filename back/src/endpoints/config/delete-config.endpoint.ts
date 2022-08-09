import { Request, Response } from 'express'
import { successResponse } from '../../utils';

export const deleteConfigEndpoint = async (req: Request, res: Response): Promise<void> => {
  setTimeout(() => {
    successResponse(res, {
      success: true,
      message: 'deleted config!'
    }, 200)
  }, 400);
}