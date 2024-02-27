// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ImageDownloader = () => {
    const [url, setUrl] = useState('');
    const [log, setLog] = useState([]);
    const [totalImages, setTotalImages] = useState(0);
    const [completedImages, setCompletedImages] = useState(0);

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const downloadImages = () => {
        // Reset progress counters
        setTotalImages(0);
        setCompletedImages(0);

        // Fetch images from the URL
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Extract image URLs from the response data
                const imageUrls = data.map(item => item.imageUrl);

                // Update the total number of images
                setTotalImages(imageUrls.length);

                // Download each image asynchronously
                imageUrls.forEach(imageUrl => {
                    downloadImage(imageUrl);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const downloadImage = (imageUrl) => {
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                // Save the image to disk or display it in the UI
                // You need to implement this part
                setCompletedImages(prevCount => prevCount + 1);
                setLog(prevLog => [...prevLog, `Downloaded image: ${imageUrl}`]);
            })
            .catch(error => {
                console.error('Error downloading image:', error);
                setLog(prevLog => [...prevLog, `Error downloading image: ${imageUrl}`]);
            });
    };

    return (
        <div>
            <input type="text" value={url} onChange={handleUrlChange} />
            <button onClick={downloadImages}>Download Images</button>
            <div>
                <p>Total Images: {totalImages}</p>
                <p>Completed Images: {completedImages}</p>
            </div>
            <div>
                <h3>Log:</h3>
                <ul>
                    {log.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImageDownloader;
