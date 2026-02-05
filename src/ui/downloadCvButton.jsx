function DownloadCVButton (props) {
    const { text} = props;
    return (
        <button className="border border-blue-500 py-2 px-7 rounded-md cursor-pointer hover:bg-white
            hover:text-blue-500 hover:border-white transition-all duration-500 min-w-45 w-full
                tooltip tooltip-info" data-tip="CV not available">{text}</button>
    )
}

export default DownloadCVButton;