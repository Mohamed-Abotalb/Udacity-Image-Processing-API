import server from '../app';
import request from 'supertest';

it('should start the server without any error', () => {
    request(server).get('/').expect(200);
});

it('resizing endpoint works without any error', () => {
    request(server).get('/api/images/resize').expect(200);
});
