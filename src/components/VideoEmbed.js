const VideoEmbed = ({ annotationPrefix, videoId, videoTitle }) => {

    return (
        <div className="flex justify-center my-5 w-full h-0 relative" data-sb-field-path={annotationPrefix}>
            <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed