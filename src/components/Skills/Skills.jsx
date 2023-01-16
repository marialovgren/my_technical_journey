import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import Loader from '../Loader/Loader'

const Skills = () => {
    const { skillsIcons, isSkillsLoading } = useContext(Context)

    if (isSkillsLoading) {
        return <Loader />
    }

    return (
        <div className="w-full mt-10">
            <div className="flex justify-center text-blue">
                <h2 className="text-5xl font-normal">MY <span className="font-semibold">SKILLS</span></h2>
            </div>

            <div className="grid grid-cols-4 gap-8 mx-10 my-6 md:grid-cols-8 lg:grid-cols-10 lg:mx-20">
                {skillsIcons.map((item) => {
                    const {id, skillsImg, skillsType} = item
                    return (
                        <div key={id} className="w-3/4">
                            <div className="flex justify-center h-20">
                                <img src={skillsImg} className="object-scale-down w-5/6" />
                            </div> 
                            <div className="flex justify-center font-light text-xs mt-2">
                                <h2>{skillsType}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills