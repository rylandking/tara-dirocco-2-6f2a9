const VideoEmbed = ({ videoUrl, videoTitle }) => {
    console.log(videoUrl);

    return (
        <div className="justify-center">
            <iframe width="560" height="315" src={videoUrl} title={videoTitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoEmbed