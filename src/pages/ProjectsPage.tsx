/** Get data from Contentful **/
import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

/** Components **/
import Projects from "../components/Projects/Projects"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"

const ProjectsPage = () => {
    const { projectCards, isProjectCardsLoading } = useContext(Context)

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