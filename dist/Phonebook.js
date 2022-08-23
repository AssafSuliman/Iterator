"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phonebook {
    constructor() {
        this.contacts = [];
        this.root = null;
        this.tempArray = [];
        this.currentContact;
        this.lastIndex = 0;
        this.index = -1;
        this.lastId = 0;
    }
    get size() {
        return this.contacts.length;
    }
    add(contact) {
        this.lastId++;
        contact.id = this.lastId;
        this.contacts.push(contact);
        if (!this.root) {
            this.root = contact;
        }
        else {
            this.insertToBST(contact, this.root);
        }
        return this.lastId;
    }
    addPhone(id, phone) {
        var _a;
        (_a = this.contacts.find(contact => contact.id === id)) === null || _a === void 0 ? void 0 : _a.phones.push(phone);
    }
    get(idOrName) {
        if (typeof idOrName != 'string') {
            return this.contacts.find(contact => contact.id === idOrName);
        }
        else {
            let returnedContacts = [];
            for (let contact of this.contacts) {
                if (contact.name === idOrName) {
                    returnedContacts.push(contact);
                }
            }
            if (returnedContacts.length === 0)
                return undefined;
            return returnedContacts;
        }
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
    insertToBST(contact, root) {
        if (contact.name >= root.name) {
            if (root.rightNode != undefined) {
                this.insertToBST(contact, root.rightNode);
            }
            else {
                root.rightNode = contact;
            }
        }
        else if (contact.name < root.name) {
            if (root.leftNode != undefined) {
                this.insertToBST(contact, root.leftNode);
            }
            else {
                root.leftNode = contact;
            }
        }
    }
    pushToArray(node, tempArray) {
        if (node === null) {
            return;
        }
        this.pushToArray(node.leftNode, tempArray);
        tempArray.push(node);
        this.pushToArray(node.rightNode, tempArray);
    }
    next() {
        if (this.index === -1) {
            this.pushToArray(this.root, this.tempArray);
        }
        this.index++;
        if (this.index === this.contacts.length) {
            return { done: true, value: this.contacts[this.index] };
        }
        return {
            done: false,
            value: this.tempArray[this.index]
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
const createPhonebook = () => {
    return new Phonebook();
};
exports.default = createPhonebook;
/* if(this.index === -1) {
  console.log(this.contacts[0]);
  
  this.currentContact = this.contacts[0]}
this.index++
if(this.index === this.contacts.length){
  return {done:true, value:this.contacts[this.index]}
}
for(let contact of this.contacts){
  if(contact.name === this.currentContact?.name
    && contact != this.currentContact){
    this.currentContact = contact
    return {
      done:false,
      value:this.currentContact
    }
  }
  if(contact.name.charAt(0) >= this.currentContact.name.charAt(0)
    && this.tempContact.name.charAt(0) > contact.name.charAt(0)){
      this.tempContact = contact
  }
}
this.currentContact = this.tempContact */
/* this.currentContact = this.tempArray[0]
    
    for(let i = 1; i < this.tempArray.length; i++){
      if(this.currentContact.name > this.tempArray[i].name){
        this.currentContact = this.tempArray[i]
        this.lastIndex = i
      }
    }
    this.tempArray.splice(this.lastIndex, 1)
    this.lastIndex = 0  */
/*  this.tempArray = [...this.contacts]
   this.tempArray.sort((a, b):number => {
     if(a.name > b.name) return 1
     else if(a.name < b.name) return -1
     return 0
   }) */ 
