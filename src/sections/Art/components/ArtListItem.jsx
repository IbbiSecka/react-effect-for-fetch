function ArtItem({ art }) {
  const { title, artist, imageURL, publicationHistory } = art;

  return (
    <div className="art-item">
      <img
        src={`https://boolean-uk-api-server.fly.dev/${imageURL}`}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{artist}</p>
      <ul>
        {publicationHistory.map((pub, index) => (
          <li key={index}>{pub}</li>
        ))}
      </ul>
    </div>
  );
}
