import React, { useState } from 'react'
import './faq.css'
import faqData from './data'
import Star from '../../assets/images/icon-star.svg'
import Plus from '../../assets/images/icon-plus.svg'
import Minus from '../../assets/images/icon-minus.svg'

const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggleQuestion = (index) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }

    const handleKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevents the default action of the key
            toggleQuestion(index);
        }
    }

    return (
        <div className='card_container'>
            <div className='card_container_headline'>
                <img src={Star} alt="star" />
                <h1>FAQs</h1>
            </div>
            <div className='card_container_accordian'>
                {faqData.map((item, index) => (
                    <div className='card_container_accordian_item' key={index}>
                        <div className='card_container_accordian_question'
                            onClick={() => toggleQuestion(index)}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                            tabIndex={0}
                            role="button"
                            aria-expanded={selected === index} >
                            <h2>{item.question}</h2>
                            <img src={selected === index ? Plus : Minus} alt="apen close questiony" />
                        </div>
                        <div className={selected === index ? 'card_container_accordian_answer show' : 'card_container_accordian_answer'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq