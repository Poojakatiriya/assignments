import React from 'react';
import './App.css';
import FriendCard from './FriendCard';
import friends from './FriendsData';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">🤝 My Friends</h1>
      <div className="card-container">
        {friends.map((friend, index) => (
          <FriendCard
            key={index}
            name={friend.name}
            image={friend.image}
            hobby={friend.hobby}
            quote={friend.quote}
            contact={friend.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
