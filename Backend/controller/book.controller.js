import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

// Search API Endpoint
export const search = async (req, res) => {
  const query = req.params.q;

  if (!query) {
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    const searchResults = await Book.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    res.json(searchResults);
  } catch (error) {
    res.status(500).send("Error searching the database");
  }
};
