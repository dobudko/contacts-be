import Router from 'koa-router';
import { createContact } from '../controllers/contact';
import { getAllContacts } from '../controllers/contact';
import { removeContact } from '../controllers/contact';

const router = new Router();

router.post('/addContact', createContact);

router.get('/getAllContacts', getAllContacts);

router.post('/removeContact', removeContact);

export default router.routes();
