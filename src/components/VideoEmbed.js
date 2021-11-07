const VideoEmbed = ({ annotationPrefix, videoId, videoTitle }) => {

    return (
        <div className="flex justify-center my-5 w-full relative" data-sb-field-path={annotationPrefix}>
            <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed