import './about.scss'
import ChoiceBar from '../../components/ChoiceBar/ChoiceBar'
import Banner from '../../components/Banner/Banner'
import imgAbout from '../../assets/Image-source2.png';


function About() {

    return (
        <div className="about">
            <Banner imgSrc={imgAbout} altText='vue de montagnes'></Banner>
            <ChoiceBar choice="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
            <ChoiceBar choice="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme." />
            <ChoiceBar choice="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme." />
            <ChoiceBar choice="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    )
}

export default About