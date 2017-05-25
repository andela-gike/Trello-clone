// import the moongoose helper utilities
import 'babel-polyfill';
import { should } from 'chai';
import utils from '../utils';
// import our User mongoose model
import User from '../../models/users';

describe('Users: models', () => {
  describe('#create()', () => {
    it('should create a new User', (done) => {
      // Create a User object to pass to User.create()
      const user = {
        fullname: 'Barack',
        email: 'barackobama@gmail.com',
        username: 'obaback',
        password: '0987654321',
        created: Date.now,
      };
      console.log(User, '>>>>>>>>');
      User.save(user, (err, createNewUser) => {
        // Confirm that that an error does not exist
        should.not.exist(err);
        // verify that the returned user is what we expect
        createNewUser.fullname.should.equal('Barack');
        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});
