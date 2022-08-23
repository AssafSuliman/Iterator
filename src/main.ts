import createPhonebook from "./Phonebook";
import Contact from "./Contact";

const ahihudBook = createPhonebook()

const id1 = ahihudBook.add(new Contact('Moshe', 'Rosh-hanikra', ['052-663214']))
const id2 = ahihudBook.add(new Contact('Moshe', 'Ashkelon', ['03-2244456']))
const id3 = ahihudBook.add(new Contact('Rahamim', 'Bat-yam', ['02-444567']))
const id4 = ahihudBook.add(new Contact('Yigal', 'Jersualem', ['04-45467222']))
const id5 = ahihudBook.add(new Contact('Rahamim', 'Givataiym', ['08-4779963']))
const id6 = ahihudBook.add(new Contact('Shalom', 'Nahariya', ['055-7779333']))
const id7 = ahihudBook.add(new Contact('Nir', 'Akko', ['08-6369451']))
const id8 = ahihudBook.add(new Contact('Beni', 'Karmiel', ['01-633258']))
const id9 = ahihudBook.add(new Contact('Sami', 'Tel-aviv', ['01-44477']))

console.log(id1,id2,id3);
console.log(ahihudBook.size);

for(const contact of ahihudBook){
  console.log(contact.name);
}



