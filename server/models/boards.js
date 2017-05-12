import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Board Schema
 */
const BoardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  owner: String,
  isClosed: {
    type: Boolean
  },
  created: { type: Date, default: Date.now },
  isStarredBoard: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Board', BoardSchema);

