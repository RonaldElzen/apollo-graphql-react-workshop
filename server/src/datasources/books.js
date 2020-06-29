class BooksDataSource {
  constructor() {
    this.baseURL = "";
  }

  getBooks() {
    return [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
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
