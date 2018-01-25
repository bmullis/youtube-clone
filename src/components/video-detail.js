import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className="col-md-8"><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details list-group-item">
        <div><h3>{video.snippet.title}</h3></div>
        <div><p>{video.snippet.description}</p></div>
      </div>
    </div>
  );
}

export default VideoDetail;
