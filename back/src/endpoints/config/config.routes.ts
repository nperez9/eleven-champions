import { Router } from 'express';

import { deleteConfigEndpoint } from './delete-config.endpoint';
import { getConfigEndpoint } from './get-config.endpoints';
import { postConfigEndpoint } from './post-config.endpoint';
import { putConfigEndpoint } from './put-config.endpoint';

const configRouter = Router();

configRouter.get('/', getConfigEndpoint);
configRouter.post('/', postConfigEndpoint);
configRouter.put('/:id', putConfigEndpoint);
configRouter.delete('/:id', deleteConfigEndpoint);

export default configRouter;
