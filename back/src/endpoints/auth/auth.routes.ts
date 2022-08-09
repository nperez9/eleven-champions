import { Router } from 'express';

import { validateBodyMiddleware } from '../../middlewares';
import { loginUserSchema, registerUserSchema } from '../../validators/user.validator';
import { loginEndpoint } from './login.endpoint';
import { registerEndpoint } from './register.endpoint';

const authRouter = Router();

authRouter.post('/login', validateBodyMiddleware(loginUserSchema), loginEndpoint);
authRouter.post('/register', validateBodyMiddleware(registerUserSchema), registerEndpoint);

export default authRouter;
