const request = require('supertest');
const {Rentals, Rental} = require('../../models/rental');
const {User} = require('../../models/user');
const mongoose = require('mongoose');

describe('/api/returns', () => {
  let server;
  let customerId;

  beforeEach( async () => {
     server = require('../../index'); 

     customerId = mongoose.Types.ObjectId();
     movieId = mongoose.Types.ObjectId();
     const rental = new Rental({
      customer: {
        _id: customerId,  
        name: '12345',
        phone: '12345',

      },
      movie: {
        _id: movieId,
        title: '12345',
        dailyRentalRate: 2
      }
     });

     await rental.save();
  });

  afterEach(async () => { 
    await server.close(); 
    await Rental.remove({});
  });

  it('should return 401 if client is not logged in', async () => {
    const rest = await request(server)
      .post('/api/returns')
      .send({customerId, movieId}); 

      expect(res.status).toBe(401);
  });

  it('should return 400 if customerId is not provided', async () => {
    const token = new User().generateAuthToken();
    
    const rest = await request(server)
      .post('/api/returns')
      .set('x-auth-token', token)
      .send({movieId}); 

      expect(res.status).toBe(400);
  });

  it('should return 400 if movieId is not provided', async () => {
    const token = new User().generateAuthToken();
    
    const rest = await request(server)
      .post('/api/returns')
      .set('x-auth-token', token)
      .send({ customerId }); 

      expect(res.status).toBe(400);
  });
});