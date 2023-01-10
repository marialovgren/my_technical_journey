import { useContext } from "react"
import { Context } from "../../context/ContextProvider"
import Loader from "../Loader/Loader"

const Hero = () => {
    const { hero, isHeroLoading } = useContext(Context)

    if (isHeroLoading) {
        return <Loader />
    }

    const { heroTitle, heroSubTitle, heroImage } = hero

    return (
        <div className="flex flex-col items-center w-full bg-lightBeige py-6 md:flex-row md:flex-row-reverse justify-center md:justify-around">
            <div className="w-40 md:w-64">
                <img src={heroImage} />
            </div>

            <div className="text-blue mt-7">
                <h1 className="text-4xl">{heroTitle}</h1>
                <h2 className="text-xl font-extralight">{heroSubTitle}</h2>
            </div>
        </div>
    )
}

export default Hero