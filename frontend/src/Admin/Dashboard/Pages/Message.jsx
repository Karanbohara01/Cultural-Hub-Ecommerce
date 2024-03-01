// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../Components/Header.jsx";
import AdminSidebar from "../Components/Sidebar.jsx";
import DigitalClock from "../Charts/Clock.jsx";

const Message = () => {
    const [messages, setMessages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:8787/user/message/getAll?name=${searchTerm}`);

            if (response.status === 200) {
                setMessages(response.data);
                console.log("Received messages:", response.data);
            } else {
                console.error("Failed to fetch messages");
            }
        } catch (error) {
            console.error("Error fetching messages", error);
        }
    };

    const deleteMessage = async (messageId) => {
        try {
            const response = await axios.delete(`http://localhost:8787/user/message/delete/${messageId}`);

            if (response.status === 200) {
                console.log("Message deleted successfully");
                fetchMessages(); // Fetch the updated messages after deletion
            } else {
                console.error("Failed to delete message");
            }
        } catch (error) {
            console.error("Error deleting message", error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [searchTerm]);

    return (
        <>
            <AdminHeader />
            <div style={{marginLeft:650, marginTop:80,marginBottom:-100 ,display:"flex",alignItems:'center',justifyContent:'right'}} >
                <DigitalClock/>
            </div>
            <div style={{ display: "flex", flexDirection: "column",marginTop:100 }}>
                <div className="container mt-5 ml-50">
                    <AdminSidebar />
                    <h2 className="text-center mb-4" style={{marginLeft:200}} >Messages</h2>
                    <div style={{marginLeft:300}} className="card">
                        <div className="card-body">
                            <h3 className="card-title">Messages</h3>
                            {messages.length > 0 ? (
                                <ul className="list-group">
                                    {messages.map((message) => (
                                        <li key={message.messageId} className="list-group-item">
                                            <strong>Name:</strong> {message.firstName} {message.lastName} |{" "}
                                            <strong>Email:</strong> {message.emailAddress} |{" "}
                                            <strong>Message:</strong> {message.message}
                                            <button
                                                className="btn btn-danger btn-sm ms-2"
                                                onClick={() => deleteMessage(message.messageId)}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted">No messages available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Message;
