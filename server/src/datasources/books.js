class BooksDataSource {
  constructor() {
    this.baseURL = "";
  }

  getBooks() {
    return [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        isbn: "978-0439064873",
        price: "19.37",
        description: "Harry Potter part 2",
        rereviews: [
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
        title: "Jurassic Park",
        author: "Michael Crichton",
      },
    ];
  }
}

module.exports = {
  BooksDataSource,
};
