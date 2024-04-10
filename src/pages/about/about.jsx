import './about.scss'
import ChoiceBar from '../../components/ChoiceBar/ChoiceBar'
import Banner from '../../components/Banner/Banner'


function About() {

    return (
        <div className="about">
            <Banner />
            <ChoiceBar choice="Fiabilité" />
            <ChoiceBar choice="Respect" />
            <ChoiceBar choice="Service" />
            <ChoiceBar choice="Sécurité" />
        </div>
    )
}

export default About