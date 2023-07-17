import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Select from 'react-select';
import './ControlPanel.css'

const ControlPanel = ({ handleInsertingNewProduct, sortProductList }) => {

  const [sortBy, setSortBy] = useState("");
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    sortProductList(sortBy);
  }, [sortBy]);

  return (
    <div className="control-panel-container">
      <div>
        <Button variant='contained' color='success' size='small' onClick={() => handleInsertingNewProduct()}>Add</Button>
      </div>

      <input type="text" 
              onChange={(event) => setSearchWord(event.target.value)}
              placeholder="search" />
      <div className='sort-container'>
        <label>Sort by:</label>
        <select onChange={(event) => setSortBy(event.target.value)}>
          <option value="name">Name</option>
          <option value="date">Recently Added</option>
        </select>
      </div>
    </div>
  )
}

export default ControlPanel