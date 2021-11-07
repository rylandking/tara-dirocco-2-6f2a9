const VideoEmbed = ({ annotationPrefix, videoId, videoTitle }) => {

    return (
        <div className="flex justify-center my-5" data-sb-field-path={annotationPrefix}>
            <iframe className="h-full w-11/12" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed