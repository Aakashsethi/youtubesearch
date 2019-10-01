import React from 'react';
import VideoItem from './VideoItem';
  

const VideoList= ({videos}) =>{

    //props.videos
    //inside this functional component take videos array passed from the app component and map over it
    const renderedList = videos.map(video=>{
        return <VideoItem/>;
    });
    
    
    return <div>{renderedList}</div>;
};
export default VideoList;