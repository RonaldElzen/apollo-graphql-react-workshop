class BooksDataSource {
  constructor() {
    this.baseURL = "";
  }

  getBooks() {
    return [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        isbn: "9780439064873",
        price: "19.37",
        id: 0,
        description: "Harry Potter part 2",
        reviews: [
          {
            name: "John Doe",
            description: "Meh",
            stars: 2,
          },
          {
            name: "Jane Doe",
            description: "Awesome!",
            stars: 5,
          },
        ],
        stock: [
          {
            warehouse: "Groningen",
            amount: 10,
          },
          {
            warehouse: "Amsterdam",
            amount: 5,
          },
        ],
      },
      {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        isbn: "9781407132082",
        id: 1,
        price: "10",
        description: "The first book in the Hunger Games trilogy.",
        reviews: [
          {
            name: "John Doe",
            description: "Nice!",
            stars: 4,
          },
          {
            name: "Jane Doe",
            description: "Not my thing.",
            stars: 1,
          },
        ],
        stock: [
          {
            warehouse: "Groningen",
            amount: 8,
          },
          {
            warehouse: "Amsterdam",
            amount: 7,
          },
        ],
      },
    ];
  }
}

module.exports = {
  BooksDataSource,
};
