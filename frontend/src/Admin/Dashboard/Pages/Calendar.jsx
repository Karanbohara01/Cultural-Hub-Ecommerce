
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AdminSidebar from "../Components/Sidebar.jsx";
import AdminHeader from "../Components/Header.jsx";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: new Date(),
        end: new Date(),
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    // const fetchEvents = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8787/admin/event/getAll');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch events');
    //         }
    //         const data = await response.json();
    //         setEvents(data);
    //     } catch (error) {
    //         console.error('Error fetching events:', error.message);
    //     }
    // };

    const fetchEvents = async () => {
        try {
            // Check if access token exists in localStorage
            const accessToken = localStorage.getItem('accessToken');

            // If access token exists, include it in the request headers
            const headers = {};
            if (accessToken) {
                headers['Authorization'] = `Bearer ${accessToken}`;
            }

            // Fetch events with authorization header
            const response = await fetch('http://localhost:8787/admin/event/getAll', {
                headers: headers,
            });

            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }

            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error.message);
        }
    };


    const addEvent = async () => {
        try {
            const response = await fetch('http://localhost:8787/admin/event/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: newEvent.title,
                    start: new Date(newEvent.start),
                    end: new Date(newEvent.end),
                }),

            });
            alert('Event Added Successfully')

            if (!response.ok) {
                throw new Error(`Failed to add event. Status code: ${response.status}`);
            }

            const createdEvent = await response.json();
            setEvents([...events, createdEvent]);

            // Show a success message (you can use a toast library here if needed)

            // Clear the form
            setNewEvent({
                title: '',
                start: new Date(),
                end: new Date(),
            });

        } catch (error) {
            console.error('Error adding event:', error.message);

            // Show an error message (you can use a toast library here if needed)

        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    };

    return (
        <div>
            <AdminHeader />
            <div>
                <AdminSidebar />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: '500px', marginLeft: 270, marginBottom: 400 }}>
                    <div>
                        <center style={{ color: "darkred", marginTop: 100, marginBottom: 20 }}>
                            <h1 style={{ color: "orange" }}>Event Calendar</h1>
                        </center>
                        <label style={{ marginLeft: 30, marginRight: 10, fontWeight: "bold" }}>Title:</label>
                        <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} />
                        <label style={{ marginLeft: 30, fontWeight: "bold", marginRight: 30 }}>
                            Start Date and Time:
                        </label>
                        <input
                            style={{ fontWeight: "bold" }}
                            type="datetime-local"
                            name="start"
                            value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                            onChange={handleInputChange}
                        />
                        <label style={{ marginRight: 70, fontWeight: "bold" }}>End Date and Time:</label>
                        <input
                            style={{ fontWeight: "bold" }}
                            type="datetime-local"
                            name="end"
                            value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                            onChange={handleInputChange}
                        />
                        <button style={{ fontWeight: "bold", marginLeft: 30 }} onClick={addEvent}>
                            Add Event
                        </button>
                    </div>
                    {/* Render the Calendar */}
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ margin: '20px' }}
                        onSelectEvent={(event) => {
                            // Handle event click
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyCalendar;
