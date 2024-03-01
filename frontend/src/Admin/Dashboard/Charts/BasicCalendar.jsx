// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "./Calendar.css";

const MyCalendar = ({
                        // eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
                        initialDate = new Date(),
                        // eslint-disable-next-line react/prop-types
                        additionalStyles,
                    }) => {
    const [date, setDate] = useState(initialDate);

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    return (
        <div   className={`  calendar ${additionalStyles}`}>
            <Calendar
                    onChange={handleDateChange}
                    value={date}
                    className="rounded p-3 border"
                />

        </div>
    );
};

export default MyCalendar;
