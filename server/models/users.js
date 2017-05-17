import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const Schema = mongoose.Schema;

const secret = process.env.SECRET || 'tHERTHRFBREHBVEHJBEHVBERHBRE';
const expires = moment().add(1, 'days').valueOf();

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
  },

  generateToken: (user) => {
    const payload = {
      userid: user.id,
      username: user.username,
    };
    const token = jwt.sign(payload, secret, { expiresIn: expires });
    return token;
  }
};

export default mongoose.model('User', UserSchema);
