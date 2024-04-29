import '../styles/textbox.css';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Placeholder = () => {
  // array list of a to z letters and A to Z letters
  const [word, setWord] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "   ",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B",
    "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
  ])
  const [keypress, setKeypress] = useState(0)

  const changeWord = (e, index) => {
    e.preventDefault();
    //focus on the next input
    if (index < word.length - 1)
      document.querySelectorAll('input')[index + 1].focus()
    else {
      console.log("end of the line")
      return (<Stack spacing={2}>
        <Alert severity="success">You have reached the end of the line</Alert>
      </Stack>)
    }
    console.log("clicked")
    let newWord = [...word]
    newWord[index] = "changed"
    setWord(newWord)
  }

  const keyPress = () => {
    setKeypress(keypress + 1)
  }

  return (
    <div className="background">
      <div>
        {keypress}
      </div>
      {word.map((item, index) => {
        return (
          <input
            key={index}
            value={item}
            autoFocus={index === 0}
            onChange={(e) => {
              changeWord(e, index)
              keyPress(e)
            }
            }
          />
        )
      }
      )}
    </div >

  );
}

export default Placeholder;