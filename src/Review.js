import React, { useState } from 'react'
import reviews from "./data";

export default function Review() {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = reviews[index];

    const checkNumber = (number) => {
        if(number > reviews.length-1){
            return 0
        }
        else if(number < 0){
            return reviews.length-1
        }
        return number
    }

    function handlePrev(){
        setIndex((index) => {
           let newIndex = index - 1;
           return checkNumber(newIndex);
        })
    }

    function handleNext(){
        setIndex((index) => {
           let newIndex = index + 1;
           return checkNumber(newIndex);
        })
    }
  return (
    <>
        <article className='singleReview'>
            <div className='image'>
                <img src={image}/>
            </div>
            <h3 className='name'>{name}</h3>
            <h3 className='job'>{job}</h3>
            <p className='text'>{text}</p>
            <div className='Buttons'>
                <button className='btn prevBtn' onClick={handlePrev}>&#8656;</button>
                <button className='btn nextBtn' onClick={handleNext}>&#8658;</button>
            </div>
        </article>
    </>
  );
}
