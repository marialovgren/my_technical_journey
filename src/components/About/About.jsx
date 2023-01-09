import { useContext } from "react"
import { Context } from "../../context/ContextProvider"
import Loader from "../Loader/Loader"

const About = () => {
    const { about, isAboutLoading } = useContext(Context)

    if (isAboutLoading) {
        return <Loader />
    }

    const { aboutTitle, aboutContent } = about

    return (
        <div>
            <h1>{aboutTitle}</h1>
            {/* This removes the <p> from the text on the website */}
            <div dangerouslySetInnerHTML={{ __html: aboutContent }} /> 
        </div>
    )
}

export default About