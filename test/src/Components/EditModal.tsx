import React, { useState } from 'react';
import { Item } from '../types';

interface EditModalProps {
  item: Item;
  onSave: (item: Item) => void;
  onClose: () => void;
}

const getItemName = (item: Item): string => {
  if ('name' in item) {
    return item.name;
  } else if ('description' in item) {
    return item.description;
  } else if ('title' in item) {
    return item.title;
  } else {
    return '';
  }
};

const EditModal: React.FC<EditModalProps> = ({ item, onSave, onClose }) => {
  const [editedName, setEditedName] = useState(getItemName(item));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleSave = () => {
    const editedItem = { ...item, name: editedName };
    onSave(editedItem);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <div>
              <label htmlFor="nameInput">Name:</label>
              <input id="nameInput" type="text" value={editedName} onChange={handleChange} />
            </div>
            <button className="save-button" type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
