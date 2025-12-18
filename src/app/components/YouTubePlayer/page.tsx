type YouTubePlayerProps = {
  videoId: string;
};

export function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
      }}
    >
    <iframe
    src="https://www.youtube.com/embed/OdWBvKuEYAc"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 0,
    }}
    />
    </div>
  );
}
