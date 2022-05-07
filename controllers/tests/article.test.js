const supertest = require('supertest');
const app = require('../../index.js');
describe('Test articles mature response', () => {
  it('should return mature articles only', async () => {
    const response = await supertest(app).get('api/articles/mature');
    expect(response.statusCode).toEqual(200);
    expect(response.articles.length).toBeLessThan(11);
  });

})