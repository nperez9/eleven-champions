import { Request, Response } from 'express'
import { successResponse } from '../../utils';


export const postConfigEndpoint = async (req: Request, res: Response): Promise<void> => {
  setTimeout(() => {
    successResponse(res, {
      success: true,
      message: 'created config!'
    }, 200)
  }, 400);
}