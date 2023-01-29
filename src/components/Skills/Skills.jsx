import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import classNames from 'classnames'
import Loader from '../Loader/Loader'
import SkillItem from './SkillItem'
import Heading from '../Heading/Heading'

const Skills = ({bgColor}) => {
    const lightBeige = bgColor === "lightBeige"
    const white = bgColor === "white"

    const { skillsIcons, isSkillsLoading } = useContext(Context)

    if (isSkillsLoading) {
        return <Loader />
    }

    return (
        <div 
            className={classNames("w-full pt-10", {
                'bg-lightBeige' : lightBeige,
                'bg-white' : white
            })}
        >
            <div className="flex justify-center">
                <Heading
                    size="1"
                    headingColor="blue"
                    thin="MY"
                    bold="SKILLS"
                />
            </div>

            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-8 mx-10 my-6 lg:mx-20 justify-center ">
                {skillsIcons.map((item) => {
                const {id, skillsImg, skillsType} = item
                    return <SkillItem 
                        id={id}
                        skillsImg={skillsImg}
                        skillsType={skillsType}
                    />
                })}
            </div>
        </div>
    )
}

export default Skills