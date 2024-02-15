// App.tsx

import React, { useState, useEffect } from 'react';
import Table from './Components/Table';
import EditModal from './Components/EditModal';
import { Item } from './types';
import initialData from './data.json';
import '../src/Components/style.css';

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [editItem, setEditItem] = useState<Item | null>(null);

  useEffect(() => {
    const combinedData: Item[] = [
      ...initialData.products,
      ...initialData.pricePlans,
      ...initialData.pages,
    ];
    setData(combinedData);
  }, []);

  const handleEdit = (item: Item) => {
    setEditItem(item);
  };

  const handleSave = (editedItem: Item) => {
    const updatedData = data.map((item) => (item.id === editedItem.id ? editedItem : item));
    setData(updatedData);
    setEditItem(null);
  };

  return (
    <div className="app">
      <Table data={data} onEdit={handleEdit} />
      {editItem && (
        <EditModal
          item={editItem}
          onSave={handleSave}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
};

export default App;

