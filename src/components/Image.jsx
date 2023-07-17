import noImage from '../assets/image.jpeg';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

function getImage(id) {
  switch(id) {
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    default:
      return noImage;
  }
};

const Image = ({ productId }) => {
  return <img src={getImage(productId)} alt=''/>
}

export default Image