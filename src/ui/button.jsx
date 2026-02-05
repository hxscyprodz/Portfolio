function PrimaryButton (props) {
    return (
        <button className="bg-blue-500 h-11 px-7 rounded-md cursor-pointer hover:bg-blue-700
            transition-all duration-500 min-w-40 w-full">{props.text}</button>
    )
}

export default PrimaryButton;