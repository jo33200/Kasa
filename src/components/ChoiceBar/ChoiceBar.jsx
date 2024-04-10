import './ChoiceBar.scss'

function ChoiceBar(props) {
    return (
        <div className="choice-bar">
            <p className="choice-bar__name">{props.choice}</p>
            <div className="choice-bar__arrow">^</div>
        </div>
    )
}

export default ChoiceBar