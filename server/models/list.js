import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * List Schema
 */
const ListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  created: { type: Date, default: Date.now },
});

const Lists = mongoose.model('Lists', ListSchema);

export default Lists;
