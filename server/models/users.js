import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

/**
 * User Schema
 */
const UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  hashedPassword: String,
  created: { type: Date, default: Date.now },
});

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */
  authenticate: (plainText) => {
    if (!plainText || !this.hashedPassword) {
      return false;
    }
    return bcrypt.compareSync(plainText, this.hashedPassword);
  },

  /**
   * Encrypt password
   * @param {String} password
   * @return {String}
   * @api public
   */
  encryptPassword: (password) => {
    if (!password) {
      return '';
    }
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }
};

const User = mongoose.model('User', UserSchema);

export default User;

