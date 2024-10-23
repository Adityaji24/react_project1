import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd"; // Import the notification component

const Search = () => {
    const [title, setTitle] = useState(""); // State for the book title input
    const [bookData, setBookData] = useState([]); // State for storing book data
    const [foundBook, setFoundBook] = useState(null); // State for storing the found book
    const [noRecordsFound, setNoRecordsFound] = useState(false); // Flag for showing "No records found"

    // Fetch all books on component mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books`);
                setBookData(response.data); // Set the fetched book data to state
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching book data:", error);
            }
        };

        fetchBooks();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const inputTitle = e.target.value;
        setTitle(inputTitle);

        if (inputTitle.trim() === "") {
            // If input is empty, reset foundBook and noRecordsFound
            setFoundBook(null);
            setNoRecordsFound(false);
            return;
        }

        // Check if the book exists
        const matchedBook = bookData.find((book) =>
            book.title.toLowerCase() === inputTitle.toLowerCase()
        );

        if (matchedBook) {
            setFoundBook(matchedBook); // Set found book
            setNoRecordsFound(false); // Reset no records found flag
            // Show notification for found book
            notification.open({
                message: 'Book Found!',
                description: `You have found: ${matchedBook.title} by ${matchedBook.author}`,
                style: {
                    backgroundColor: '#f6ffed', // Light green background
                    borderColor: '#b7eb8f', // Green border
                },
            });
        } else {
            setFoundBook(null); // Reset found book
            setNoRecordsFound(true); // Set flag to true if no matches are found
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1 style={{ color: "green" }}>Search Book Records!</h1>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Type Book Title..."
                style={{
                    padding: "10px",
                    width: "300px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "20px",
                }}
            />
            <hr size="5" color="green" style={{ margin: "20px 0" }} />

            {/* Show book details if found */}
            {foundBook && (
                <div style={{ margin: "20px", padding: "10px", border: "1px solid green", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
                    <h2 style={{ color: "green" }}>Book Found!</h2>
                    <p><strong>Book No:</strong> {foundBook.bookNo}</p>
                    <p><strong>Title:</strong> {foundBook.title}</p>
                    <p><strong>Author:</strong> {foundBook.author}</p>
                    <p><strong>Price:</strong> {foundBook.price}</p>
                    <p><strong>Genre:</strong> {foundBook.genre}</p>
                </div>
            )}

            {/* Show "No records found" if no matching records are found and input is not empty */}
            {noRecordsFound && title.trim() !== "" && (
                <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>No records found</p>
            )}
        </div>
    );
};

export default Search;
