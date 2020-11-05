class MoviesDataSource {
  constructor() {
    this.baseURL = "";
  }

  getMovies() {
    return [
      {
        title: "Star Wars: Episode IX - The Rise of Skywalker",
        description: "Latest star wars movie",
        price: "19.37",
        length: "2h 22min",
        genre: "Action",
        id: 0,
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        description: "First Harry Potter movie",
        price: "20",
        length: "2h 32min",
        genre: "Fantasy",
        id: 1,
      },
    ];
  }
}

module.exports = {
  MoviesDataSource,
};
