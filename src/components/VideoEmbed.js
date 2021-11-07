const VideoEmbed = ({ annotationPrefix, videoId, videoTitle }) => {
    console.log(videoUrl);

    return (
        <div className="flex justify-center my-5" data-sb-field-path={annotationPrefix}>
            <iframe width="560" height="315" src={videoId} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed