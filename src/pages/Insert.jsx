import axios from "axios";
import { useState } from "react";
import { message } from 'antd'; // Import Ant Design message
import './Insert.css'; // Import your custom CSS

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    }

    const handleSubmit = () => {
        let api = "http://localhost:3000/books"; // Change the endpoint to 'books'
        axios.post(api, input)
            .then((res) => {
                console.log(res);
                message.success("Book data successfully saved!"); // Ant Design success message
                setInput({}); // Clear input fields after submission
            })
            .catch((error) => {
                console.error("There was an error saving the book data!", error);
                message.error("Failed to save book data."); // Ant Design error message
            });
    }

    return (
        <div className="insert-container">
            <h1>Insert Book Record</h1>
            <form className="insert-form">
                <label>
                    Enter Book Name:
                    <input type="text" name="title" value={input.title || ''} onChange={handleInput} required />
                </label>
                <label>
                    Enter Book Number:
                    <input type="text" name="bookNo" value={input.bookNo || ''} onChange={handleInput} required />
                </label>
                <label>
                    Enter Author Name:
                    <input type="text" name="author" value={input.author || ''} onChange={handleInput} required />
                </label>
                <label>
                    Enter Price:
                    <input type="number" name="price" value={input.price || ''} onChange={handleInput} required />
                </label>
                <label>
                    Enter Genre:
                    <input type="text" name="genre" value={input.genre || ''} onChange={handleInput} required />
                </label>
                <button type="button" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    );
}

export default Insert;
