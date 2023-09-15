import React from "react";
// import video from '../assets/video/movie.mp4';
const Video = () => {
    return (
        <div>
            <video width={320} height={240} controls>
                <source src='https://www.w3schools.com/tags/movie.mp4' type="video/mp4" />
            </video>

        </div>
    )
}

export default Video;