const contactsPath = require("./db/contactsPath");

const fs = require("fs").promises;
const { v4 } = require("uuid");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  if (!result) return null;
  return result;
};

const addNewContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateById = async (id, { name, email, phone }) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, name, email, phone };
  await updateContacts(contacts);
  return contacts[index];
};

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const deleteContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addNewContact,
  updateById,
  deleteContact,
};