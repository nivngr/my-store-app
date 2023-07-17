import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from './Image';
import './ProductItem.css';

const ProductItem = ({ product, changeCurrentProduct, removeProduct, setIsInsertingNewProduct }) => {

  function handleClick() {
    changeCurrentProduct(product);
    setIsInsertingNewProduct(false);
  }

  return (
    <>
    <ListItem alignItems='flex-start' key={product.id}>
      <ListItemButton onClick={() => handleClick()}>
      <Image productId={ product.id }/>
        <ListItemText primary={ <Typography sx={{ fontWeight: 'bold' }}> { product.name + " - " + product.price + "$"} </Typography> } 
                      secondary={ <Typography sx={{ color: 'grey' }}> { product.description } </Typography> } >               
        </ListItemText>
        <Button variant='contained' color='error' size='small' onClick={() => removeProduct(product.id) }>DELETE</Button>
      </ListItemButton>
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  )
}

export default ProductItem