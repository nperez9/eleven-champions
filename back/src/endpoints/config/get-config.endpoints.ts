import { Request, Response } from 'express'
import { successResponse } from '../../utils';


export const getConfigEndpoint = async (req: Request, res: Response): Promise<void> => {
  setTimeout(() => {
    successResponse(res, {
      title: 'Home',
      description: 'This is description',
    }, 200)
  }, 400);
}