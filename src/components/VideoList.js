import React from 'react';
import VideoItem from './VideoItem';
  

const VideoList= ({videos, onVideoSelect}) =>{

    //props.videos
    //inside this functional component take videos array passed from the app component and map over it
    const renderedList = videos.map(video=>{
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
    });
    
    
    return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;