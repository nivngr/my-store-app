import * as React from 'react';
import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination';
import ProductItem from './ProductItem.jsx';
import ControlPanel from './ControlPanel.jsx';

const ProductList = ({ productsArray, changeCurrentProduct, removeProduct ,setIsInsertingNewProduct, handleInsertingNewProduct, sortProductList }) => {

  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(productsArray.length / itemsPerPage);
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const products = productsArray.map( (product) => {
    return (
      <ProductItem product={ product } 
                   changeCurrentProduct={ changeCurrentProduct } 
                   removeProduct={ removeProduct } 
                   setIsInsertingNewProduct={ setIsInsertingNewProduct } />
    )
  });

  return (
    <div>
      <ControlPanel handleInsertingNewProduct={ handleInsertingNewProduct } sortProductList={ sortProductList }/>
      <List sx={{ width: '100%', maxWidth: 750, minWidth: 750, bgcolor: '#1a1a1a', borderRadius: 5, marginBottom: 5 }}
      component="nav">
        { products.slice((page - 1) * itemsPerPage, page * itemsPerPage) }
      </List>
      <Pagination count={numberOfPages} page={page} onChange={handleChange} showFirstButton showLastButton color='primary' defaultPage={1} />
    </div>
  );
}

export default ProductList