import { useEffect, useState } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/IbbiSecka/contact")
      .then((res) => res.json()) 
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching", error));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="user-list">
          {users.length === 0 ? (
            <p>Loading users...</p>
          ) : (
            users.map((user) => (
              <li
                key={user.id}
              >
                <div className="user-profile">
                  <img
                    src={user.profileImage}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="profile-img"
                  />
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <p>Email: {user.email}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
