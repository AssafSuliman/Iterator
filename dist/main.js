"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Phonebook_1 = __importDefault(require("./Phonebook"));
const Contact_1 = __importDefault(require("./Contact"));
const ahihudBook = (0, Phonebook_1.default)();
const id1 = ahihudBook.add(new Contact_1.default('Moshe', 'Rosh-hanikra', ['052-663214']));
const id2 = ahihudBook.add(new Contact_1.default('Moshe', 'Ashkelon', ['03-2244456']));
const id3 = ahihudBook.add(new Contact_1.default('Rahamim', 'Bat-yam', ['02-444567']));
const id4 = ahihudBook.add(new Contact_1.default('Yigal', 'Jersualem', ['04-45467222']));
const id5 = ahihudBook.add(new Contact_1.default('Rahamim', 'Givataiym', ['08-4779963']));
const id6 = ahihudBook.add(new Contact_1.default('Shalom', 'Nahariya', ['055-7779333']));
const id7 = ahihudBook.add(new Contact_1.default('Nir', 'Akko', ['08-6369451']));
const id8 = ahihudBook.add(new Contact_1.default('Beni', 'Karmiel', ['01-633258']));
const id9 = ahihudBook.add(new Contact_1.default('Sami', 'Tel-aviv', ['01-44477']));
console.log(id1, id2, id3);
console.log(ahihudBook.size);
