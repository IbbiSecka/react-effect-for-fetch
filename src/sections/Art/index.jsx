import { useEffect, useState } from "react"

function ArtsSection() {

const [artWorks, setArtWorks] = useState([])
useEffect(() => {
  fetch("https://boolean-uk-api-server.fly.dev/art")
    .then(res => res.json())
    .then(data => setArtWorks(data))
    .catch((error) => console.error("Not fetched", error));
}, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artWorks.map((art) => (
            <li key={art.id}>
              <div className="frame">
                <img
                  src={`https://boolean-uk-api-server.fly.dev/${art.imageURL}`}
                  alt={art.title}
                />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <ul>               
                {art.publicationHistory.map((history, index) => (
                  <li key={index}>{history}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection
