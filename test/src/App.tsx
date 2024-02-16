import React, { useState, useEffect } from 'react';
import Table from './Components/Table';
import EditModal from './Components/EditModal';
import FilterHeader from './Components/FilterHeader';
import { Item, Page, PricePlan, Product } from './types';
import initialData from './data.json';
import './Components/style.css'; 

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [editItem, setEditItem] = useState<Item | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const combinedData: Item[] = [
      ...initialData.products.map(item => ({...item, type: 'Product'} as Product)),
      ...initialData.pricePlans.map(item => ({...item, type: 'PricePlan'} as PricePlan)),
      ...initialData.pages.map(item => ({...item, type: 'Page'} as Page)),
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

const filteredData = data.filter(item => {
  const itemName = 'name' in item ? item.name : 'description' in item ? item.description : 'title' in item ? item.title : '';
  const matchesSearch = itemName.toLowerCase().includes(searchQuery.toLowerCase());

  let isActiveMatch = true; 
  if (activeFilter === "active") {
    isActiveMatch = item.active;
  } else if (activeFilter === "notActive") {
    isActiveMatch = !item.active;
  }

  const isTypeMatch = selectedType === '' || item.type === selectedType;

  return matchesSearch && isActiveMatch && isTypeMatch;
});


  return (
    <div className="app">
<FilterHeader
  onSearchChange={setSearchQuery}
  onActiveChange={setActiveFilter} 
  onTypeChange={setSelectedType}
/>

      <Table data={filteredData} onEdit={handleEdit} />
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


