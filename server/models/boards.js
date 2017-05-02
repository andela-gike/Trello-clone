import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Board Schema
 */
const BoardSchema = new Schema({
  title: String,
  created: { type: Date, default: Date.now },
});

const Board = mongoose.model('Board', BoardSchema);

export default Board;
