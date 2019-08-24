const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  studentname: { type: String, required: true },
  points: { type: Number, required: true },
  qrcode: String,
  date: {type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
