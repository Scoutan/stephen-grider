import styles from '../../styles/ImageList.module.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })

  return (
    <div className={styles.image_list}>{images}</div>
  )
}

export default ImageList;