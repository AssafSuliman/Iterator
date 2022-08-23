"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phonebook {
    constructor() {
        this.contacts = [];
        this.lastId = 0;
    }
    get size() {
        return this.contacts.length;
    }
    add(contact) {
        this.lastId++;
        contact.id = this.lastId;
        this.contacts.push(contact);
        return this.lastId;
    }
    addPhone(id, phone) {
        var _a;
        (_a = this.contacts.find(contact => contact.id === id)) === null || _a === void 0 ? void 0 : _a.phones.push(phone);
    }
    getContactByID(id) {
        return this.contacts.find(contact => contact.id === id);
    }
    getContactByName(name) {
        let returnedContacts = [];
        for (let contact of this.contacts) {
            if (contact.name === name) {
                returnedContacts.push(contact);
            }
        }
        if (returnedContacts.length === 0)
            return undefined;
        return returnedContacts;
    }
    remove(id) {
        let contact = undefined;
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].id === id) {
                contact = this.contacts.splice(index, 1)[0];
                break;
            }
        }
        return contact;
    }
    [Symbol.iterator]() {
        return this;
    }
}
const createPhonebook = () => {
    return new Phonebook();
};
exports.default = createPhonebook;
