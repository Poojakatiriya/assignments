import React, { useState } from 'react';

function PackingList({ items, onAddItem, onTogglePacked, onDeleteItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === '') return;
    onAddItem(newItem.trim());
    setNewItem('');
  };

  return (
    <div className="packing-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id} className={item.isPacked ? 'packed' : ''}>
            <span onClick={() => onTogglePacked(item.id)}>
              {item.isPacked ? '✔️ ' : '☐ '}
              {item.isPacked ? <s>{item.name}</s> : item.name}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
