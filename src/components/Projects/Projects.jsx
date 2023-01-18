import Card from "../Card/Card"
import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'
import Loader from '../Loader/Loader'
import Grid from "../Grid/Grid"

const Projects = () => {
    const { projectCards, isProjectCardsLoading } = useContext(Context)

    if (isProjectCardsLoading) {
        return <Loader />
    }

    return (
        <Grid
            sm="1"
            md="2"
            lg="3"
            width="full"
            justify="center"
        >
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
        </Grid>
    )
}

export default Projects