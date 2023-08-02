import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Book = mongoose.model("Book", bookSchema); //books

export default Book;
