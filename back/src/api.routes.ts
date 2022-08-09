import { Router } from 'express';

import { healthEndpoint } from './endpoints/health.endpoint';
import { privateRoute } from './middlewares';
import userRouter from './endpoints/users/users.routes';
import permissionRouter from './endpoints/permissions/permissions.routes';
import configRouter from './endpoints/config/config.routes';
import authRouter from './endpoints/auth/auth.routes';

const router = Router();

router.get('/health', healthEndpoint);

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/permissions', privateRoute, permissionRouter);
router.use('/config', configRouter);

export default router;