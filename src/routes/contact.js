import Router from 'koa-router';
import { createContact } from '../controllers/contact';
import { getContact } from '../controllers/contact';

const router = new Router({
  prefix: '/api/contacts',
});

router.get('/', createContact);

router.get('/get', getContact);

export default router.routes();
