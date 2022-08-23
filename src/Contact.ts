class Contact {
  public id:number
  constructor(public name:string, public address:string, 
    public phones:string[]){
      this.id = 0
    }
}

export default Contact