const PodcastSection = ({ annotationPrefix, podcastLink, videoTitle }) => {

    return (
        <div className="w-full sm:w-11/12 lg:w-3/4 mx-auto mt-5 mb-10">
            <div className="w-full h-0 relative" style={{ paddingBottom: '56.25%' }} data-sb-field-path={annotationPrefix}>
                <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default PodcastSection