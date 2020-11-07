import { ObjectID } from 'mongodb';
import { getCollection } from '../db';
import { connectToMongoDb } from '../db';

export const contactsCollection = {
  name: 'contacts',

  async insertContact(contact) {
    const client = await connectToMongoDb();
    const collection = getCollection(this.name);
    const result = collection.insertOne(contact);
    client.close();
    return result;
  },

  async getContact(contact) {
    const client = await connectToMongoDb();
    const collection = getCollection(this.name);
    const result = collection.find(contact).toArray();
    client.close;
    return result;
  },

  async getAllContacts() {
    const client = await connectToMongoDb();
    const collection = getCollection(this.name);
    const result = collection.find({}).toArray();
    client.close;
    return result;
  },

  async removeContact(contact) {
    const client = await connectToMongoDb();
    const collection = getCollection(this.name);
    const result = collection.deleteOne({ _id: ObjectID(contact._id) });
    client.close();
    return result;
  },
};
