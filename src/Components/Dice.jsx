import React, { useState } from 'react';
import './Dice.css';
import img1 from './images/dice-1.png';
import img2 from './images/dice-2.png';
import img3 from './images/dice-3.png';
import img4 from './images/dice-4.png';
import img5 from './images/dice-5.webp';
import img6 from './images/dice-6.jpeg';

const Dice = () => {
  const [diceImage1, setDiceImage1] = useState(img1);
  const [diceImage2, setDiceImage2] = useState(img1);

  const changeDice1 = () => {
    const diceArr = [img1, img2, img3, img4, img5, img6];
    setDiceImage1(diceArr[Math.floor(Math.random() * diceArr.length)]);
  };

  const changeDice2 = () => {
    const diceArr = [img1, img2, img3, img4, img5, img6];
    setDiceImage2(diceArr[Math.floor(Math.random() * diceArr.length)]);
  };

  return (
    <div>
      <img src={diceImage1} alt="" onClick={changeDice1} className="dice"/>
      <img src={diceImage2} alt="" onClick={changeDice2} className="dice" />
    </div>
  );
};

export default Dice;
