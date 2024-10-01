function ArtList() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <div>
      {artworks.map((art) => (
        <ArtItem key={art.id} art={art} />
      ))}
    </div>
  );
}
