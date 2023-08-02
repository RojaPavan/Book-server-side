import Book from "../models/bookModel.js";

// get All Bookd
export const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No items found" });
  }
  return res.status(200).json({ books });
};

// get single book
export const getById = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No items found" });
  }
  return res.status(201).json({ books });
};

// add books to store
export const addBooks = async (req, res, next) => {
  const { name, author, price, description, available, image } = req.body;
  let books;
  try {
    books = new Book({
      name,
      author,
      price,
      description,
      available,
      image,
    });
    await books.save();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(500).json({ message: "Failed to add" });
  }
  return res.status(201).json({ books });
};

// update book
export const editBooks = async (req, res, next) => {
  const { name, author, price, description, available, image } = req.body;

  const id = req.params.id;
  let books;
  try {
    books = await Book.findByIdAndUpdate(id, {
      name,
      author,
      price,
      description,
      available,
      image,
    });
    books = await books.save();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(500).json({ message: "Update Failed" });
  }
  return res.status(201).json({ books });
};

// delete books
export const removeBooks = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "Failed to remove" });
  }
  return res.status(201).json({ message: " Removed Successfully" });
};
