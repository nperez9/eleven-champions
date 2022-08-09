import { Router } from 'express';

import { privateRoute } from '../../middlewares';
import { userEditEndpoint } from './users-edit.endpoint';
import { userInfoEndpoint } from './users-info.endpoint';

const userRouter = Router();

userRouter.get('/', privateRoute, userInfoEndpoint);
userRouter.patch('/', privateRoute, userEditEndpoint);

export default userRouter;
