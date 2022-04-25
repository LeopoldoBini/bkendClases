import faker from '@faker-js/faker';
faker.locale = 'es';

export const generateManyUser = (q) => {
    const arr = [];
    for (let i = 0; i < q; i++) {
        const obj = {
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            email: faker.internet.email(),
            website: faker.internet.url(),
            avatar: faker.internet.avatar(),
            image : faker.image.imageUrl(),
        };
        arr.push(obj);
    }
    return arr;
}

export const generateUser = () => {
    const obj = {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        email: faker.internet.email(),
        website: faker.internet.url(),  
        avatar: faker.internet.avatar(),
        image : faker.image.imageUrl(),
    };
    return obj;
}
