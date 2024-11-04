import { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css"; 

const Display = () => {
  const [bookingData, setBookingData] = useState([]); // Adjust state to hold booking data

  const loadData = () => {
    let url = "http://localhost:3000/"; // Update the endpoint to 'bookings'
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setBookingData(res.data); // Set booking data in state
      })
      .catch((error) => {
        console.error("There was an error fetching the booking data!", error);
      });
  };

  useEffect(() => {
    loadData(); // Load booking data on component mount
  }, []);

  return (
    <div className="container">
      <h1 className="title">Booking Data</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Ticket Type</th>
            <th>Time Slot</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr key={index}>
              <td>{booking.eventName}</td>
              <td>{booking.ticketType}</td>
              <td>{booking.timeSlot}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
