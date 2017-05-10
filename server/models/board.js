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
  isClosed: {
    type: Boolean
  },
  created: { type: Date, default: Date.now },
  isStarredBoard: {
    type: Boolean,
    default: false
  }
});

const Board = mongoose.model('Board', BoardSchema);

export default Board;
