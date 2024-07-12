const request = require('supertest');
const app = require('../src/app');

describe('Card API', () => {
    it('should create a new card', async () => {
        const res = await request(app)
            .post('/api/cards')
            .send({
                text: 'Sample Text',
                images: [],
                videos: []
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });
    
    it('should get all cards', async () => {
        const res = await request(app).get('/api/cards');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
    
    it('should update a card', async () => {
        const card = await request(app)
            .post('/api/cards')
            .send({
                text: 'Sample Text',
                images: [],
                videos: []
            });

        const res = await request(app)
            .put(`/api/cards/${card.body._id}`)
            .send({
                text: 'Updated Text',
                images: [],
                videos: []
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.text).toBe('Updated Text');
    });
    
    it('should delete a card', async () => {
        const card = await request(app)
            .post('/api/cards')
            .send({
                text: 'Sample Text',
                images: [],
                videos: []
            });

        const res = await request(app)
            .delete(`/api/cards/${card.body._id}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Card removed');
    });
});
