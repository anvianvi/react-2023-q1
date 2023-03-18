import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
// @ts-ignore

export async function getContacts(query) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {// @ts-ignore

    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  // @ts-ignore

  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {// @ts-ignore

  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };// @ts-ignore

  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}
// @ts-ignore

export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");// @ts-ignore

  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}
// @ts-ignore

export async function updateContact(id, updates) {// @ts-ignore

  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");// @ts-ignore

  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}
// @ts-ignore

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");// @ts-ignore

  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {// @ts-ignore

    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}
// @ts-ignore

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};
// @ts-ignore

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }
// @ts-ignore

  if (fakeCache[key]) {
    return;
  }
// @ts-ignore

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}