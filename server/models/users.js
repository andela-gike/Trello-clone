import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

/**
 * User Schema
 */
const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: { type: Date, default: Date.now },
});

/**
 * Methods
 */
UserSchema.methods = {

  /**
   * Encrypt password
   * @param {String} password
   * @return {String} hashedpassword
   * @api public
   */
  encryptPassword: (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  },

  /**
   * Authenticate - check if the passwords are the same
   * @param {String} user
   * @param {String} password
   * @return {String} a validated password
   * @api public
   */
  authenticate: (user, password) => {
    return bcrypt.compareSync(password, user.password);
  }
};

export default mongoose.model('User', UserSchema);

