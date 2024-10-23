import { useState, useEffect } from "react";
import axios from "axios";
import editimg from "../images/edit.png"; // Ensure this image path is correct
import delimg from "../images/delete.png"; // Ensure this image path is correct
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [bookData, setBookData] = useState([]);
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:3000/books"; // Update the API endpoint to 'books'
        axios.get(api).then((res) => {
            console.log(res.data);
            setBookData(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteBook = (id) => {
        let api = `http://localhost:3000/books/${id}`; // Update the API endpoint for deleting books
        axios.delete(api).then((res) => {
            message.error("Book record successfully deleted!!!");
            loadData(); // Reload data after deletion
        });
    };

    const editBook = (id) => {
        navigate(`/editrec/${id}`); // Navigate to the edit record page
    };

    const bookList = bookData.map((book) => {
        return (
            <tr key={book.id}> {/* Use book.id as the key */}
                <td>{book.bookNo}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.genre}</td>
                <td>
                    <a href="#" onClick={() => editBook(book.id)}>
                        <img src={editimg} width="30" height="30" alt="Edit" />
                    </a>
                    <a href="#" onClick={() => deleteBook(book.id)}>
                        <img src={delimg} width="30" height="30" alt="Delete" />
                    </a>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Update Book Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>Book No</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.length > 0 ? bookList : <tr><td colSpan="6">No records found.</td></tr>}
                </tbody>
            </table>
        </>
    );
};

export default Update;
