// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "./Clock.css"

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const formatDigit = (digit) => {
        return digit < 10 ? `0${digit}` : digit;
    };

    const hours = formatDigit(time.getHours());
    const minutes = formatDigit(time.getMinutes());
    const seconds = formatDigit(time.getSeconds());

    return (
        <div >
            <center><p style={{fontWeight:'bold'}}>Time Now</p></center>

            <h1>
                {hours}:{minutes}:{seconds}
            </h1>
        </div>
    );
};

export default DigitalClock;
