import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Tesseract from 'tesseract.js';
import styles from "./image-to-card.module.scss";
import exampleImg from './images/example.GIF';

const fileTypes = ["JPG", "PNG", "GIF"];

const ImageToCardComponent = ({ setCardSetEntity, cardSetEntity }) => {
  const [file, setFile] = useState(null);

  // This function loand file from input => reads data from img => recognizes symbols =>
  // splited it by line => set data to cardSet
  const handleChange = (file) => {
    setFile(file);
    Tesseract.recognize(file, 'eng+rus').then(({ data: { text } }) => {
      const arr = text.split(/\r?\n/);
      const result = arr.reduce((prev, cur, idx) => {
        const splitted = cur.split("-");
        return {
          ...prev,
          [idx]: {
            frontSide: splitted[0],
            backSide: splitted[1],
            hint: splitted[2]
          }
        }
      }, {})

      setCardSetEntity({
        ...cardSetEntity,
        flashCardArray: result
      })
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Импортироть набор карточек как изображение</h1>
      </div>
      <div className={styles.content}>
        <p>Импортируемое вам изображение должно быть в формате "JPG", "PNG", "GIF" и иметь следующий вид:</p>
        <div className={styles.imgContainer}>
          <img src={exampleImg} alt="There is no" />
        </div>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      </div>
    </div>
  );
}

export default ImageToCardComponent;