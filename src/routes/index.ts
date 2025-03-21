import Express, { Router } from 'express';
import { getClient, getClients } from '../controllers/clientsController.ts';
import { getIndex } from '../controllers/indexController.ts';
const router: Router = Express.Router();

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json('hi');
//   next();
// });
router.get('/', getIndex);
router.get('/clients', getClients);
router.get('/clients/:id', getClient);

export default router;
