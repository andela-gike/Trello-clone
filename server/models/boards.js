import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Board Schema
 */
const BoardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
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

