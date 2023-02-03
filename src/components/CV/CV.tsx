import { useContext } from "react"
import { Context } from "../../context/ContextProvider"
import Loader from "../Loader/Loader"
import Button from "../Button/Button"

const CV = () => {
    const { cv, isCvLoading } = useContext(Context)
    
    if (isCvLoading) {
        return <Loader />
    }

    const { cvPDF } = cv

    return (
        <a href={cvPDF} download="MyCV" target='_blank'>
            <Button
                label="Download my CV"
                buttonType="blue"
            />
        </a>
    )
}

export default CV