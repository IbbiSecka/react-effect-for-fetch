import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState(null);
  const [favorites, setFavorites] = useState([]);

  
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip)) // Access slip from response
      .catch((error) => console.error("Error fetching advice:", error));
  };

  
  const saveToFavorites = () => {
    if (advice && !favorites.some((fav) => fav.id === advice.id)) {
      setFavorites([...favorites, advice]);
    }
  };

  
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>

      
      <div className="advice-container">
        {advice ? (
          <div className="advice">
            <p>{advice.advice}</p>
            <button onClick={fetchAdvice}>Get New Advice</button>
            <button onClick={saveToFavorites}>Save to Favorites</button>
          </div>
        ) : (
          <p>Loading advice...</p>
        )}
      </div>

     
      <div className="favorites-container">
        <h3>Favorite Advice Slips:</h3>
        <ul className="favorites-list">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <li key={fav.id}>
                <p>{fav.advice}</p>
              </li>
            ))
          ) : (
            <p>No favorites yet.</p>
          )}
        </ul>
      </div>
    </section>
  );

}

export default AdviceSection
