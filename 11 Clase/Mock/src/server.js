import express, { json, urlencoded } from 'express';
import faker from '@faker-js/faker';
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const nombres = ['Juan', 'Pedro', 'Maria', 'Luis', 'Carlos'];
const apellidos = ['Perez', 'Gonzalez', 'Lopez', 'Garcia', 'Martinez']; 
const colores = ['rojo', 'azul', 'verde', 'amarillo', "violeta"];


app.get('/test/:q', (req, res) => {
    const arr = [];
    const { q } = req.params;
    for (let i = 0; i < q; i++) {
        
        const obj = {
          nombre: faker.name.firstName(),  
          apellido: faker.name.lastName(),
          color: faker.random.arrayElement(colores),
          coordenadas: {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
            }
        };
        arr.push(obj);
    }
    res.json(arr);
});










const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
    });

server.on('error', (err) => {
    console.error(err);
});


