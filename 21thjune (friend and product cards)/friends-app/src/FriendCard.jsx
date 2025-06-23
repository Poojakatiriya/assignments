import React from 'react';
import './App.css';

const FriendCard = ({ name, image, hobby, quote, contact }) => {
  return (
    <div className="friend-card">
      <img src={image} alt={name} />
      <div className="friend-info">
        <h2>{name}</h2>
        <p><strong>Hobby:</strong> {hobby}</p>
        <p>"{quote}"</p>
        <p className="contact">📧 {contact}</p>
      </div>
    </div>
  );
};

export default FriendCard;
