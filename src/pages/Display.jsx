import { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css"; 

const Display = () => {
  const [bookData, setBookData] = useState([]); // Change state to hold book data

  const loadData = () => {
    let url = "http://localhost:3000/books"; // Update the endpoint to 'books'
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setBookData(res.data); // Set book data in state
      })
      .catch((error) => {
        console.error("There was an error fetching the book data!", error);
      });
  };

  useEffect(() => {
    loadData(); // Load book data on component mount
  }, []);

  return (
    <div className="container">
      <h1 className="title">Book Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Book Number</th>
            <th>Author</th>
            <th>Price</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.bookNo}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
