import { contactsCollection } from '../models/contact';

export const createContact = async (ctx) => {
  await contactsCollection.insertContact({ name: 'name' });
};

export const getContact = async (ctx) => {
  console.log(await contactsCollection.getContact({}));
};
