import express from 'express';

export default class UserRouter extends express.Router {
    constructor() {
        super();

        this.post("/popular")
        this.get('/');
        this.post('/');
        this.put('/:id');
        this.delete('/:id');

    }

}