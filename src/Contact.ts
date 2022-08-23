class Contact {
  public id:number
  constructor(public name:string, public address:string, 
    public phones:string[], public _leftNode:Contact | null = null,
    public _rightNode:Contact | null = null){
      this.id = 0
    }
  get leftNode(){
      return this._leftNode
  }
  get rightNode(){
      return this._rightNode
  }
  set leftNode(left) {
      this._leftNode = left
  }
  set rightNode(right) {
      this._rightNode = right
  }
}

export default Contact