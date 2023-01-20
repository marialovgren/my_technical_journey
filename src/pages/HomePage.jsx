/** Get data from Contentful **/
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

import { useNavigate } from 'react-router'

/** Components **/
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"
import Button from '../components/Button/Button'
import Skills from '../components/Skills/Skills'
import Intro from '../components/Intro/Intro'


const HomePage = () => {
    const { projectCards, isProjectCardsLoading } = useContext(Context)
    const navigate = useNavigate()

    const slicedProjectCards = projectCards.slice(0, 3)

    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <Hero />
                <Intro />

                {projectCards && <Projects 
                    projectCards={slicedProjectCards}
                    isProjectCardsLoading={isProjectCardsLoading}
                    bgColor="lightBeige"
                    borderColor="white"
                    tagColor="white"
                />}
                <div className="flex justify-center bg-lightBeige">
                    <div className="mx-12 my-6 w-full">
                        <Button
                            label="Check out all my projects"
                            buttonType="lightOrange"
                            size="lg"
                            handleClick={() => navigate('/projects')}
                        />
                    </div>
                </div>
                <Skills />
            </PageContentWrapper>
        </div>
    )
}

export default HomePage