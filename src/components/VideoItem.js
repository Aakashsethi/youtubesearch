import React from 'react';
import './VideoItems.css';


const VideoItem = ({video, onVideoSelect}) =>{
    return( 
    //refrence for the thumbnail for each individual Items andd pass it to src property
    <div onClick={()=>onVideoSelect(video)} className="video-item item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
        <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    );
}

export default VideoItem;