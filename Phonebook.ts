import IPhonebook from "./IPhonebook";
import Contact from "./Contact";

class Phonebook implements IPhonebook {
  public contacts:Contact[]
  public lastId:number
  constructor(){
    this.contacts = []
    this.lastId = 0
  }
  get size ():number {
    return this.contacts.length
  }
  add(contact:Contact):number{
    this.lastId++
    contact.id = this.lastId
    this.contacts.push(contact)
    return this.lastId
  }
  addPhone(id:number, phone:string):void{
    this.contacts.find(contact => contact.id === id)?.phones.push(phone)
  }
  getContactByID(id:number):Contact | undefined{
    return this.contacts.find(contact => contact.id === id)
  }
  getContactByName(name: string): Contact[] | undefined {
    let returnedContacts:Contact[] = []
    for(let contact of this.contacts){
      if(contact.name === name){
        returnedContacts.push(contact)
      }
    }
    if(returnedContacts.length === 0) return undefined
    return returnedContacts
  }

  remove(id:number):Contact | undefined{
    let contact:Contact | undefined = undefined
    for(let index:number = 0; index < this.contacts.length; index++){
      if(this.contacts[index].id === id){
        contact = this.contacts.splice(index, 1)[0]
        break
      }
    }
    return contact
  }

  [Symbol.iterator]() {
    return this
  }
}