function PrimaryButton (props) {
    return (
        <button className="bg-blue-500 py-2 px-7 rounded-md cursor-pointer hover:bg-blue-700">{props.text}</button>
    )
}

export default PrimaryButton;