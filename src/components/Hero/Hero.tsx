import { useContext } from "react"
import { Context } from "../../context/ContextProvider"
import Loader from "../Loader/Loader"
import Heading from "../Heading/Heading"

const Hero = () => {
    const { hero, isHeroLoading } = useContext(Context)

    if (isHeroLoading) {
        return <Loader />
    }

    const { heroImage } = hero

    return (
        <div className="flex flex-col items-center w-full bg-lightBeige py-6 md:flex-row md:flex-row-reverse justify-center md:justify-around">
            <div className="w-40 md:w-64">
                <img src={heroImage} />
            </div>

            <div className="text-blue mt-7">
                <Heading
                    size="2"
                    headingColor="blue"
                    thin="MARIA"
                    bold="LÖVGREN"
                />
                <Heading
                    size="5"
                    headingColor="blue"
                    thin="FRONT END DEVELOPER"
                />
                
            </div>
        </div>
    )
}

export default Hero