import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import staractive from '../../images/star-active.png'
import starinactive from '../../images/star-inactive.png'
import './_stars.scss'

const Rating = () => {
    const { id } = useParams();
    const pageData = logements.find((item) => item.id === id);
    const rating = pageData.rating;

    if (rating === "5") {
        return (
            <div className='stars'><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/></div>
        );
    }
    
    if (rating === "4") {
        return (
            <div className='stars'><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={starinactive}/></div>

        );
    }

    if (rating === "3") {
        return (
            <div className='stars'><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/></div>

        );
    }

    if (rating === "2") {
        return (
            <div className='stars'><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/></div>

        );
    }

    if (rating === "1") {
        return (
            <div className='stars'><img className="star" alt="img" src={staractive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/></div>

        );
    }
    
    if (rating === "0") {
        return (
            <div className='stars'><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/><img className="star" alt="img" src={starinactive}/></div>

        );
    }
}

export default Rating;