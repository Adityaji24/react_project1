import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { message } from "antd";
import axios from "axios";

const EditData = () => {
    const { myid } = useParams(); // Get the ID from the URL parameters
    const [bookData, setBookData] = useState({}); // State to hold book data

    // Function to load the book data by ID
    const loadData = () => {
        let api = `http://localhost:3000/books/${myid}`; // Update the API endpoint to 'books'
        axios.get(api).then((res) => {
            console.log(res.data);
            setBookData(res.data); // Set the book data to state
        }).catch((error) => {
            console.error("Error fetching book data:", error);
        });
    };

    useEffect(() => {
        loadData(); // Load book data on component mount
    }, []);

    // Handle input changes
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBookData(values => ({ ...values, [name]: value })); // Update state with new input values
        console.log(bookData);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        let api = `http://localhost:3000/books/${myid}`; // Update API endpoint for book data
        axios.put(api, bookData).then((res) => {
            message.success("Book data successfully updated!!!");
            // Optionally, redirect or reset the form
        }).catch((error) => {
            console.error("Error updating book data:", error);
            message.error("Failed to update book data.");
        });
    };

    return (
        <>
            <h1>Edit Book Records:</h1>
            <form>
                Edit Book No: <input type="text" name="bookNo" 
                    value={bookData.bookNo || ""} onChange={handleInput} />
                <br />
                Edit Book Name: <input type="text" name="bookName" 
                    value={bookData.bookName || ""} onChange={handleInput} />
                <br />
                Edit Author: <input type="text" name="author" 
                    value={bookData.author || ""} onChange={handleInput} />
                <br />
                Edit Price: <input type="number" name="price" 
                    value={bookData.price || ""} onChange={handleInput} />
                <br />
                Edit Genre: <input type="text" name="genre" 
                    value={bookData.genre || ""} onChange={handleInput} />
                <br />
                <button onClick={handleSubmit}>Update!</button>
            </form>
        </>
    );
};

export default EditData;
