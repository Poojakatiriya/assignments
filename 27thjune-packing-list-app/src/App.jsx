import React, { useState } from 'react';
import PackingList from './components/PackingList';
import './App.css'; 

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false }
  ]);

  const addItem = (name) => {
    setItems([...items, { id: Date.now(), name, isPacked: false }]);
  };

  const togglePacked = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, isPacked: !item.isPacked } : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <h1>🎒 Packing List</h1>
      <PackingList
        items={items}
        onAddItem={addItem}
        onTogglePacked={togglePacked}
        onDeleteItem={deleteItem}
      />
    </div>
  );
}

export default App;

