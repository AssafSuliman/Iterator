"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(name, address, phones, _leftNode = null, _rightNode = null) {
        this.name = name;
        this.address = address;
        this.phones = phones;
        this._leftNode = _leftNode;
        this._rightNode = _rightNode;
        this.id = 0;
    }
    get leftNode() {
        return this._leftNode;
    }
    get rightNode() {
        return this._rightNode;
    }
    set leftNode(left) {
        this._leftNode = left;
    }
    set rightNode(right) {
        this._rightNode = right;
    }
}
exports.default = Contact;
