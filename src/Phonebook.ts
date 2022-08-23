import IPhonebook from "./IPhonebook";
import Contact from "./Contact";

class Phonebook implements IPhonebook {
  public contacts:Contact[]
  public root:Contact | null
  public index:number
  public lastId:number
  public tempSortedArray:Contact[]
  public lastIndex:number
  
  constructor(){
    this.contacts = []
    this.root = null
    this.tempSortedArray = []
    this.lastIndex = 0
    this.index = -1
    this.lastId = 0
  }
  get size ():number {
    return this.contacts.length
  }
  add(contact:Contact):number{
    this.lastId++
    contact.id = this.lastId
    this.contacts.push(contact)
    if(!this.root){
      this.root = contact
    }
    else {
      this.insertToBST(contact, this.root)
    }
    return this.lastId
  }
  addPhone(id:number, phone:string):void{
    this.contacts.find(contact => contact.id === id)?.phones.push(phone)
  }
  
  get(idOrName: number | string): any {
    if(typeof idOrName != 'string'){
      return this.contacts.find(contact => contact.id === idOrName)
    }
    else {
      let returnedContacts:Contact[] = []
      for(let contact of this.contacts){
        if(contact.name === idOrName){
          returnedContacts.push(contact)
        }
      }
      if(returnedContacts.length === 0) return undefined
      return returnedContacts
    }
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

  insertToBST (contact:Contact, root:Contact):void  {
    if(contact.name >= root.name){
        if(root.rightNode != undefined){
            this.insertToBST(contact, root.rightNode)
        }
        else{
            root.rightNode = contact
        }
    }
    else if(contact.name < root.name){
        if(root.leftNode != undefined){
            this.insertToBST(contact, root.leftNode)
        }
        else{
            root.leftNode = contact
        }
    }
  }

  pushToArray (node:Contact|null, tempArray:Contact[]):void  {
    if(node === null){
        return
    }
    this.pushToArray(node.leftNode, tempArray)
    tempArray.push(node)
    this.pushToArray(node.rightNode, tempArray)
}

  next():{done:boolean, value:Contact} {
    if(this.index === -1){
      this.pushToArray(this.root, this.tempSortedArray)
    }
    
    this.index++
    if(this.index === this.contacts.length){
      this.tempSortedArray = []
      return {done:true, value:this.contacts[this.index]}
    }
    
    return {
      done:false,
      value:this.tempSortedArray[this.index]
    }
  } 

  [Symbol.iterator]() {
    return this
  }
}

const createPhonebook = ():IPhonebook => {
  return new Phonebook()
}

export default createPhonebook



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