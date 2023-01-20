import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import Grid from '../Grid/Grid'
import Loader from '../Loader/Loader'
import SkillItem from './SkillItem'
import Heading from '../Heading/Heading'

const Skills = () => {
    const { skillsIcons, isSkillsLoading } = useContext(Context)

    if (isSkillsLoading) {
        return <Loader />
    }

    return (
        <div className="w-full mt-10">
            <div className="flex justify-center">
                <Heading
                    size="1"
                    headingColor="blue"
                    thin="MY"
                    bold="SKILLS"
                />
            </div>

            <Grid
                sm="4"
                md="8"
                lg="10"
                gap="8"
                otherStyles="mx-10 my-6 lg:mx-20"
            >
                {skillsIcons.map((item) => {
                const {id, skillsImg, skillsType} = item
                    return <SkillItem 
                        id={id}
                        skillsImg={skillsImg}
                        skillsType={skillsType}
                    />
                })}
            </Grid>
        </div>
    )
}

export default Skills