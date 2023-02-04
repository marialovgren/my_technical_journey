/** Get data from Contentful **/
import { useContext, useEffect } from 'react'
import { Context } from '../context/ContextProvider'

/** Components **/
import Projects from "../components/Projects/Projects"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"

const ProjectsPage = () => {
    const { projectCards, isProjectCardsLoading } = useContext(Context)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="h-full w-full">
            <PageContentWrapper>

                {projectCards && <Projects 
                    projectCards={projectCards}
                    isProjectCardsLoading={isProjectCardsLoading}
                    bgColor="white"
                    borderColor="lightBeige"
                    tagColor="lightBeige"
                />}
            </PageContentWrapper>
        </div>
    )
}

export default ProjectsPage