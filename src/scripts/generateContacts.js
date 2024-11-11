import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContact = createFakeContact();

  for (let i = 0; i < number; i += 1) {
    contacts.push(newContact);
  }
  //   console.log(contacts);

  await writeContacts(contacts);
  console.log(contacts);
};

generateContacts(5);
