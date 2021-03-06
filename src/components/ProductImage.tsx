import React from 'react'
import { CSSProperties, useContext } from "react";
import noImage from '../assets/no-image.jpg'
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface Props {
  img?: string,
  className?: string,
  style?: CSSProperties
}

const ProductImage = ({img, style, className = ''}: Props) => {
  const { product } = useContext(productContext)
  let imgToShow: string;
  if(img){
    imgToShow = img;
  } else if(product.img){
    imgToShow = product.img
  } else {
    imgToShow =  noImage
  }

  return (
    <img style={style} src={imgToShow} alt="Product" className={`${styles.productImg} ${className}`} />
  )
}

export default ProductImage