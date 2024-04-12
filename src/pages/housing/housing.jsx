import Slideshow from '../../components/Slideshow/Slideshow'
import './housing.scss';
import Collapse from '../../components/Collapse/Collapse'
import InfoAppartement from '../../data/housing.json';
import Tags from '../../components/Tags/Tags';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import StarsActive from '../../assets/star-active.svg'
import StarsInactive from '../../assets/star-inactive.svg'

function Housing() {

    const { id } = useParams();

    const apartment = InfoAppartement.find((apartment) => apartment.id === id);
    if (!apartment) {
        return <div>Appartement non trouvé</div>;
    }

    const {title, location, description ,equipments, tags, host, rating} = apartment;

    const {name, picture} = host;

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img 
            key={index} 
            src={index < rating ? StarsActive : StarsInactive} 
            alt={index < rating ? 'Active star' : 'Inactive star'} 
        />
    ));
    
    const nameWords = name.split(' ');

    return (
        <div className='housing'>
            <Slideshow />
            <div className='rental-location'>
                <div className='rental-informations'>
                    <h3>{title}</h3>
                    <p>{location}</p> 
                    <div className='rental-tags'>
                    {tags.map((tag, index) => <Tags key={index} tag={tag} />)}
                    </div>
                </div>    
                <div className='host-informations'>
                    <div className='host'>
                    <div className='host-name'>
                        {nameWords.map((word, index) => (
                        <Fragment key={index}>
                            {word}
                            <br />
                        </Fragment>
                        ))} 
                    </div>
                        <img src={picture} alt={name} className='picture' />
                    </div>
                    <div className='host-rating'>
                        {stars}
                    </div>
                </div>
                
            </div>
                <div className='info-container'>
                <Collapse choice="Description" text={description} />
                <Collapse choice="Équipements" text={equipments.map((equipment, index) => (
                        <Fragment key={index}>
                            {equipment}
                            <br />
                        </Fragment>
                    ))} />
                </div>
             
        </div>
    );
}

export default Housing;