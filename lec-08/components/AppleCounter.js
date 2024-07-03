// import Button from "./Button"
// import leftArrow from '../images/left-arrow.png';
// import rightArrow from '../images/right-arrow.png';
// import AppleBasket from "./AppleBasket";
// import './AppleCounter.css';

// import {createRoot} from 'react-dom/client';

// const root = createRoot((document.querySelector('#root')))

// const totalAppleCount = 10;
// let rightAppleCount = 0;
// let leftAppleCount = totalAppleCount - rightAppleCount;

// const AppleCounter = () => {
//   const clickLeft = () => {
//     console.log("LEFT");
//     if(rightAppleCount > 0){
//       leftAppleCount++;
//       rightAppleCount--;
//       reRender();
//     }
//   }

//   const clickRight = () => {
//     console.log("RIGHT");
//     if(leftAppleCount > 0){
//       leftAppleCount--;
//       rightAppleCount++;
//       reRender();
//     }
//   }

//   const reRender = () => {
//     root.render(<AppleCounter/>)
//   }

//   return (
//     <>
//       <section>
//       <AppleBasket appleCount={leftAppleCount} basketName={"Basket 1"}/>
//       <Button clickHandler={clickLeft} imageUrl={leftArrow} btnName={"Left Arrow"}/>
//       <Button clickHandler={clickRight} imageUrl={rightArrow} btnName={"Right Arrow"}/>
//       <AppleBasket appleCount={rightAppleCount} basketName={"Basket 2"}/>
//       </section>
//       {/* <p>
//         <button className="render" onClick={reRender}>Re-render</button>
//       </p> */}
//     </>
//   )
// }

// export default AppleCounter






///// how to use 'useState()' //////


import Button from "./Button"
import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import AppleBasket from "./AppleBasket";
import './AppleCounter.css';
import { useState } from "react";


const AppleCounter = () => {
  const totalAppleCount = 10;
  const[rightAppleCount , setRightAppleCount] = useState(0);
  const[leftAppleCount , setLeftAppleCount] = useState(totalAppleCount - rightAppleCount);

  const clickLeft = () => {
    console.log("LEFT");
    if(rightAppleCount > 0){
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  }

  const clickRight = () => {
    console.log("RIGHT");
    if(leftAppleCount > 0){
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  }


  return (
    <>
      <section>
      <AppleBasket appleCount={leftAppleCount} basketName={"Basket 1"}/>
      <Button clickHandler={clickLeft} imageUrl={leftArrow} btnName={"Left Arrow"}/>
      <Button clickHandler={clickRight} imageUrl={rightArrow} btnName={"Right Arrow"}/>
      <AppleBasket appleCount={rightAppleCount} basketName={"Basket 2"}/>
      </section>
    </>
  )
}

export default AppleCounter
