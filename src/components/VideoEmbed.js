const VideoEmbed = ({ annotationPrefix, videoId, videoTitle }) => {

    return (
        <div className="flex justify-center my-5 w-full relative" data-sb-field-path={annotationPrefix}>
            <iframe className="absolute w-full h-full" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed