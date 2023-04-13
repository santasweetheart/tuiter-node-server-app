import mongoose from 'mongoose';
const schema = mongoose.Schema({
  topic: String,
  userName: String,
  time: String,
  title: String,
  image: String,
  replies: Number,
  retuits: Number,
  handle: String,
  tuit: String,
  likes: Number,
  dislikes: Number,
  liked: Boolean,
}, {collection: 'tuits'});
export default schema;