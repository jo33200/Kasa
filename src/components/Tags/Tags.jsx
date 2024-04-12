import './Tags.scss'

function Tags({tag}) {
    return (
        <div className='tag-container'>
            <span className='tag'>{tag}</span>
        </div>
    )
}

export default Tags