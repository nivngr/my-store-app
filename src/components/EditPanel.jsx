import { useState, useEffect } from 'react';
import Product from '../Product.js';
import Button from '@mui/material/Button';
import Image from './Image.jsx';
import './EditPanel.css'

const EditPanel = ({ product, isInsertingNewProduct, updateProduct, addNewProduct }) => {

  const title = isInsertingNewProduct ? "Insert new product" : product.name + " Details";
  const nameDefault = isInsertingNewProduct ? "" : product.name;
  const descriptionDefault = isInsertingNewProduct ? "" : product.description;
  const priceDefault = isInsertingNewProduct ? "" : product.price;

  let isNameInvalid = false;

  useEffect(() => {
    setName(nameDefault);
    setDescription(descriptionDefault);
    setPrice(priceDefault);
  }, [product, isInsertingNewProduct]);

  const [name, setName] = useState(nameDefault);
  const [description, setDescription] = useState(descriptionDefault);
  const [price, setPrice] = useState(priceDefault);
  const [rerender, setRerender] = useState(false);

  function createNewProduct() {
    const priceInt = parseInt(price)
    let newProduct = new Product(0, name, description, priceInt, new Date());
    addNewProduct(newProduct);
  }

  function createAndUpdateProduct() {
    const updatedProduct = {...product, name: name, description: description, price: price}
    updateProduct(product.id, updatedProduct);
  }

  function handleSaveClick() {
    isInsertingNewProduct ? createNewProduct() : createAndUpdateProduct();
    setRerender(!rerender);
    console.log(isNameInvalid)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    return false
  }

  return (
    <div className="edit-panel-container">
      <h3>{title}</h3>
      <Image productId={ isInsertingNewProduct ? 0 : product.id } />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="name-input" 
               type="text" 
               value={name} 
               onChange={(event) => {setName(event.target.value)}} 
               required 
               pattern=".{0,30}" />
        <span className="name-error">Name field is required, and must be up to 30 characters</span>

        <label>Description</label>
        <input className="description-input" 
                  type="text" 
                  value={description} 
                  onChange={(event) => {setDescription(event.target.value)}}
                  pattern=".{0,200}" />
        <span className="description-error">Description field can't exceed 200 characters</span>

        <label>Price ($)</label>
        <input className="price-input" 
               type="text" 
               value={price} 
               onChange={(event) => {setPrice(event.target.value)}} 
               required 
               pattern="^[1-9][0-9]*$"/>
        <span className="price-error">Price field is required, and must contain a number larger than 0</span>
        <div className="save-button">
          <Button variant='contained' color='success' size='small' onClick={() => {handleSaveClick()}}>
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditPanel