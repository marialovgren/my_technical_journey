/** Get data from Contentful **/
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

/** Components **/
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"


const HomePage = () => {
    const { projectCards, isProjectCardsLoading } = useContext(Context)

    const slicedProjectCards = projectCards.slice(0, 3)

    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <Hero />
                {projectCards && <Projects 
                    projectCards={slicedProjectCards}
                    isProjectCardsLoading={isProjectCardsLoading}
                    bgColor="lightBeige"
                    borderColor="white"
                
                />}
                
            </PageContentWrapper>
        </div>
    )
}

export default HomePage