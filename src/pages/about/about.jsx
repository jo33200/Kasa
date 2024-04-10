import './about.scss'
import ChoiceBar from '../../components/ChoiceBar/ChoiceBar'
import Banner from '../../components/Banner/Banner'
import imgAbout from '../../assets/Image-source2.png';


function About() {

    return (
        <div className="about">
            <Banner imgSrc={imgAbout} altText='vue de montagnes'></Banner>
            <ChoiceBar choice="Fiabilité" />
            <ChoiceBar choice="Respect" />
            <ChoiceBar choice="Service" />
            <ChoiceBar choice="Sécurité" />
        </div>
    )
}

export default About