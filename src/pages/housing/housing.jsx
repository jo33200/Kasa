import Slideshow from '../../components/Slideshow/Slideshow'
import './housing.scss';
import Collapse from '../../components/Collapse/Collapse'
import InfoAppartement from '../../data/housing.json';
import Tags from '../../components/Tags/Tags';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';

function Housing() {

    const { id } = useParams();

    const apartment = InfoAppartement.find((apartment) => apartment.id === id);
    if (!apartment) {
        return <div>Appartement non trouvé</div>;
    }

    const {title, location, description ,equipments, tags} = apartment;

    
    return (
        <div className='housing'>
            <Slideshow />
            <div className='rental-location'>
                <h3>{title}</h3>
                <p>{location}</p> 
                <div className='rental-tags'>
                    {tags.map((tag, index) => <Tags key={index} tag={tag} />)}
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
        </div>
    );
}

export default Housing;