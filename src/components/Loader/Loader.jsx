import FadeLoader from "react-spinners/FadeLoader"

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div>
                <FadeLoader color="orange" size={50} />
            </div>
		</div>
    )
}

export default Loader