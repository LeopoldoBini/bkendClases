import fs from 'fs';
import faker from '@faker-js/faker';

faker.locale = 'es';

let str = "Nombre,Apellido,Email,Trabajo,Direccion\r\n";

for(let i=1 ; i<=100 ; i++){
    str += `${faker.name.firstName()},${faker.name.lastName()},${faker.internet.email()},${faker.name.jobTitle()},${faker.address.streetAddress()}\r\n`
}

fs.writeFileSync('./data.csv', str);