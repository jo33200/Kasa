import './ChoiceBar.scss'
import ArrowAbout from '../../assets/arrow_about.svg'

function ChoiceBar(props) {
    return (
        <div className="choice-bar">
            <p className="choice-bar__name">{props.choice}</p>
            <img src={ArrowAbout} alt="flèche de selection" />
        </div>
    )
}

export default ChoiceBar