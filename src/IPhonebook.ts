import Contact from "./Contact";

interface IPhonebook {
  size:number
  add(contact:Contact):number
  addPhone(id:number, phone:string):void
  getContactByID(id:number):Contact|undefined
  getContactByName(name:string):Contact[]|undefined
  remove(id:number):Contact|undefined
}

export default IPhonebook