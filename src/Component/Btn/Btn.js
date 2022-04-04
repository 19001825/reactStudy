const btn = props => {
    return (
        <button onClick={() => {props.callBack(props.val)}}>{props.val}</button>
    )
}

export default btn