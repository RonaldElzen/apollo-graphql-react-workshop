import React from "react";
import { Book } from "../../models/Book";
import "./style.scss";

interface Props {
  books: Book[];
}

function BooksPage({ books }: Props) {
  const mapBookitems = () => {
    return books.map((bookItem: Book) => {
      return (
        <div className="book-item" key={bookItem.isbn}>
          <h3>{bookItem.title}</h3>
          <ul>
            <li>{bookItem.description}</li>
            <li>{bookItem.price}</li>
            <li>{bookItem.isbn}</li>
          </ul>
        </div>
      );
    });
  };

  return <div className="book-items">{mapBookitems()}</div>;
}

export default BooksPage;
