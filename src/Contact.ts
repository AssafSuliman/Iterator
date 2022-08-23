class Contact {
  public id?:number
  constructor(public name:string, public address:string, 
    public phones:string[]){}
}

export default Contact