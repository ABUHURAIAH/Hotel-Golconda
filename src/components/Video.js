import React from 'react';
import video1 from '../first video.mp4'

export default function Video() {
    return (
        <div class="video">
            <video src={video1} controls muted loop ></video>
        </div>
    )
}
