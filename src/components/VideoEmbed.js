const VideoEmbed = ({videoURl, videoTitle}) => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4XgfhvTDEy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed