import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Card Schema
 */
const CardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  list: { type: Schema.Types.ObjectId, ref: 'Lists', required: true },
  created: { type: Date, default: Date.now },
});

const Card = mongoose.model('Card', CardSchema);

export default Card;
