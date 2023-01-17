import Card from "../Card/Card"
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import Loader from '../Loader/Loader'

const Projects = () => {
    const { projectCards, isProjectCardsLoading } = useContext(Context)

    if (isProjectCardsLoading) {
        return <Loader />
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center ">
            {projectCards.map(project => {
                const {id, projectTitle, projectImg, projectDescription, pageUrl, repoUrl, projectTags} = project
                return <Card 
                    image={projectImg} 
                    tags={projectTags}
                    title={projectTitle}
                    description={projectDescription}
                    btnOne={pageUrl}
                    btnOneTitle="Visit page"
                    btnTwo={repoUrl}
                    btnTwoTitle="Visit repo"
                    key={id}
                /> 
            })}
        </div>
    )
}

export default Projects