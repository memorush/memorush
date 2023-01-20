import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './import-card-data.module.css';

const CARD_SET_JSON_EXAMPLE = {
  "Название набора карточек": {
    1: {
      frontSide: "Hello",
      backSide: "Привет",
      hint: "Английское приветствие"
    },
    2: {
      frontSide: "Bye",
      backSide: "Пока",
      hint: "Как попрощаться по английски"
    },
  }
}

const ImportCardDataComponent = ({ setCardSetEntity, cardSetEntity }) => {

  const [cardSetNameInput, setCardSetNameInput] = useState();

  /**
   * Set text value inside cardSetNameInput from the input field
   */
  const onCardSetNameInputChangeHandler = (e) => {
    setCardSetNameInput(e.target.value);
  }
  //TODO Упростить функцию с точки зрения семантики!
  /**
   * Load json file
   */
  const onFileChangeHandler = (event) => {

    // Inner function
    const onReaderLoad = (event) => {
      var obj = JSON.parse(event.target.result);
      const flashCardArray = findInnerObjectByKey(obj, cardSetNameInput);

      // set card array
      setCardSetEntity({
        ...cardSetEntity,
        flashCardArray: {
          ...flashCardArray
        }
      })
    }

    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  /**
   * This function searches in the obj -> object with key/arg and return this object!
   * @param {*} obj 
   * @param {value from input field - cardSetName} key 
   */
  const findInnerObjectByKey = (obj, key) => {
    const keysArray = Object.keys(obj);
    if (keysArray.find(k => k === key) === undefined && keysArray.length !== 0) {
      keysArray.forEach(kk => {
        if (typeof obj[kk] === 'object')
          findInnerObjectByKey(obj[kk], key)
      })
    }
    return obj[key]
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Импортироть набор карточек как json</h1>
      </div>
      <div className={styles.importCardsDataFormContainer}>
        <p>Импортируемый вами файл должен быть в формате json и обязательно иметь в своем составе следующую структуру:</p>
        <SyntaxHighlighter
          language={"json"}
          wrapLongLines={true}
          showLineNumbers={false}
          useInlineStyles={true}
          style={docco}
        >
          {JSON.stringify(CARD_SET_JSON_EXAMPLE, undefined, 2)}
        </SyntaxHighlighter>
        <p>Остальные поля в импортируемом файле игнорируются! Вложенность не имеет значения.</p>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="cardSetName"
            onChange={onCardSetNameInputChangeHandler}
            placeholder='Введите название набора карточек в вашем json файле'
          />
          <input
            type="file"
            onChange={onFileChangeHandler}
            disabled={cardSetNameInput ? false : true}
          />
        </div>
      </div>
    </div>
  )
}

export default ImportCardDataComponent;