"use client"

import YouTube from "react-youtube"

export default function VideoPlayer({youtubeId}){
    const option = {
        width: '699',
        height: '393'
    }
    return(
        <div className="border-2 border-color-accent">
            <YouTube 
            videoId={youtubeId} 
            onReady={(event) => event.target.pauseVideo}
            opts={option}
            iframeClassName="max-w-full"
            />
        </div>
    )
}