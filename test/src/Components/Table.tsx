import React from 'react';
import { Item } from '../types';
import './style.css'; 

interface TableProps {
  data: Item[];
  onEdit: (item: Item) => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return formattedDate;
};

const Table: React.FC<TableProps> = ({ data, onEdit }) => {
  return (
    <div className="container"> 
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {('name' in item && item.name) || ('description' in item && item.description) || ('title' in item && item.title)}
              </td>
              <td>{item.active ? 'Yes' : 'No'}</td>
              <td>
                {('createdAt' in item && item.createdAt && formatDate(item.createdAt)) || 
                ('updatedAt' in item && item.updatedAt && formatDate(item.updatedAt)) || 
                ('publishedAt' in item && item.publishedAt && formatDate(item.publishedAt))}
              </td>
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;



