import { useState } from 'react';

function MapKey() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const handleRemoveItem = (id) => {
    // Filter out the item with the matching ID
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
export default MapKey;