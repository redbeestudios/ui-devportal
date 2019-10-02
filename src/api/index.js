import express from 'express';

var router = express.Router();

import users from './users';
import specs from './specs';

router.use(users);
router.use(specs);

export default router;
