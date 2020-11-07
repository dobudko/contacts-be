import { contactsCollection } from '../models/contact';

export const createContact = async (ctx) => {
  const dataForParse = ctx.request.body;
  const contact = {
    id: dataForParse.id,
    fullName: dataForParse.fullName,
    phone: dataForParse.phone,
  };
  ctx.status = 200;
  ctx.body = await contactsCollection.insertContact(contact);
};

export const getContact = async (ctx) => {
  console.log(await contactsCollection.getContact({}));
};

export const getAllContacts = async (ctx) => {
  ctx.status = 200;
  ctx.body = await contactsCollection.getAllContacts();
};

export const removeContact = async (ctx) => {
  const dataForDelete = ctx.request.body;
  ctx.status = 200;
  ctx.body = await contactsCollection.removeContact(dataForDelete);
};
