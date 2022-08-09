import { Request, Response } from 'express'
import { successResponse } from '../../utils';


export const putConfigEndpoint = async (req: Request, res: Response): Promise<void> => {
  setTimeout(() => {
    successResponse(res, {
      success: true,
      message: 'modified config!'
    }, 200)
  }, 400);
}