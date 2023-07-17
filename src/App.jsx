import { useState, useEffect } from 'react'
import ProductList from './components/ProductList.jsx';
import productsArray from './products.js';
import './App.css'
import EditPanel from './components/EditPanel.jsx';

function App() {

  const [currentProductArray, setCurrentProductArray] = useState(productsArray);
  const [currentProduct, setCurrentProduct] = useState(currentProductArray[0]);
  const [isInsertingNewProduct, setIsInsertingNewProduct] = useState(false);
  const [rerender, setRerender] = useState(false);

  function handleInsertingNewProduct() {
    setIsInsertingNewProduct(!isInsertingNewProduct);
  };

  function changeCurrentProduct(product) {
    setCurrentProduct(product);
    setRerender(!rerender);
  };

  function updateProduct(id, updatedProduct) {
    setCurrentProductArray(prevProductArray => {
      const index = prevProductArray.findIndex(function(item) {
        return item.id === id;
      });
      const newProductArray = [...prevProductArray];
      newProductArray[index] = updatedProduct;
      console.log(newProductArray);
      return newProductArray;
    })

    setRerender(!rerender);
  };

  function addNewProduct(newProduct) {
    setCurrentProductArray(prevProductArray => {
      const id = currentProductArray.length + 1;
      const newProductArray = [...prevProductArray];
      newProductArray.push(newProduct);
      return newProductArray;
    })
    
    setRerender(!rerender);
  }

  function removeProduct(id) {
    setCurrentProductArray(prevProductArray => {
      const index = prevProductArray.findIndex(function(item) {
        return item.id === id;
      });
      const newProductArray = [...prevProductArray]
      newProductArray.splice(index, 1);
      return newProductArray;
    })

    setRerender(!rerender);
  }

  function sortProductList(sortBy) {
    let sortedProducts = [...currentProductArray]

    if (sortBy == 'name') {
      console.log("sorting by name")
      sortedProducts = currentProductArray.sort(function(product1, product2) {
        let key1 = product1.name.toLowerCase();
        let key2 = product2.name.toLowerCase();
        if (key1 > key2) return 1; 
        if (key1 < key2) return -1;
        return 0;
      });
      console.log(sortedProducts)
    }

    if (sortBy == 'date') {
      sortedProducts = currentProductArray.sort(function(product1, product2) {
        let key1 = product1.creationDate;
        let key2 = product2.creationDate;
        if (key1 > key2) return 1; 
        if (key1 < key2) return -1;
        return 0;
      });
    }

    setCurrentProductArray(sortedProducts);
    setRerender(!rerender);
  }


  return (
    <>
      <div className='header'>
        <h1>My Store</h1>
      </div>
      <div className='main-body-container'>
        <ProductList productsArray={ currentProductArray } 
                     changeCurrentProduct={ changeCurrentProduct } 
                     removeProduct={ removeProduct } 
                     setIsInsertingNewProduct={ setIsInsertingNewProduct }
                     handleInsertingNewProduct={ handleInsertingNewProduct}
                     sortProductList={ sortProductList } />
        <EditPanel product={ currentProduct } 
                   isInsertingNewProduct={ isInsertingNewProduct } 
                   updateProduct={ updateProduct }
                   addNewProduct={ addNewProduct } />
      </div>
      
    </>
  )
}

export default App
