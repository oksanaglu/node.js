const { program } = require("commander");
const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addNewContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "update":
      const updateContact = await contactsOperations.updateById(id, {
        name,
        email,
        phone,
      });
      if (!updateContact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(updateContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.deleteContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
(async () => {
  await invokeAction(argv);
})();