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
        <div className="mt-4"> 
            <div>
                <a href={cvPDF} download="MyCV" target='_blank'>
                    <Button
                        label="Download my PDF"
                        buttonType="blue"
                    />
                </a>
            </div>
        </div>
    )
}

export default CV