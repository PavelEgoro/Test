import React from 'react';

interface FilterHeaderProps {
    onSearchChange: (query: string) => void;
    onActiveChange: (value: string) => void;
    onTypeChange: (type: string) => void; 
  }

  
  
  const FilterHeader: React.FC<FilterHeaderProps> = ({ onSearchChange, onActiveChange, onTypeChange }) => (
    <div className="filter-header">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select onChange={(e) => onActiveChange(e.target.value)} defaultValue="">
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="notActive">Not Active</option>
      </select>
      <select onChange={(e) => onTypeChange(e.target.value)} defaultValue="">
        <option value="">All Types</option>
        <option value="Product">Product</option>
        <option value="PricePlan">Price Plan</option>
        <option value="Page">Page</option>
      </select>
    </div>
);



export default FilterHeader;
