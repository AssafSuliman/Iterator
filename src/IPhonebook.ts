import Contact from "./Contact";

interface IPhonebook {
  size:number
  add(contact:Contact):number
  addPhone(id:number, phone:string):void
  get(id:number):Contact|undefined
  get(name:string):Contact[]|undefined
  remove(id:number):Contact|undefined
  next():{done:boolean, value:Contact}
  [Symbol.iterator]():this
}

export default IPhonebook