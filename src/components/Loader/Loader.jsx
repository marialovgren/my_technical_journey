import FadeLoader from "react-spinners/FadeLoader"

const Loader = () => {
    return (
        <div id="initial-loader">
			<FadeLoader color="orange" size={50} />
		</div>
    )
}

export default Loader