import { useContext } from "react"
import { Context } from "../../context/ContextProvider"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Loader from "../Loader/Loader"
import Heading from "../Heading/Heading"

const About = () => {
    const { about, isAboutLoading } = useContext(Context)

    if (isAboutLoading) {
        return <Loader />
    }

    const { aboutContent, aboutImage } = about

    return (
        <div className="mt-4"> 
            <div className="flex justify-center my-6 md:my-8">
                <Heading
                    size="1"
                    headingColor="blue"
                    thin="ABOUT"
                    bold="ME"
                />
            </div>

            <div className="m-10">
                <div className="w-32 md:w-56">
                    <img 
                    className="float-left mr-4 mb-4 md:mr-8"
                        src={aboutImage}
                    />
                </div>    
                <div className="text-blue font-normal">
                    {documentToReactComponents(aboutContent)}
                </div>
            </div>
        </div>
    )
}

export default About