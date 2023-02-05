import { useContext } from "react"
import { Context } from "../../context/ContextProvider"
import Loader from "../Loader/Loader"
import Heading from "../Heading/Heading"
import TextBox from "../Textbox/TextBox"

const About = () => {
    const { about, isAboutLoading } = useContext(Context)

    if (isAboutLoading) {
        return <Loader />
    }

    const { aboutDescriptionPart1, aboutDescriptionPart2, aboutImage } = about

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

                <TextBox 
                    text={aboutDescriptionPart1}
                />

                <TextBox 
                    text={aboutDescriptionPart2}
                />

            </div>
        </div>
    )
}

export default About