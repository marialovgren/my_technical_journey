import Card from "../Card/Card"

import Loader from '../Loader/Loader'
import Grid from "../Grid/Grid"
import Heading from "../Heading/Heading"

const Projects = ({projectCards, isProjectCardsLoading, bgColor, borderColor, tagColor}) => {
    

    if (isProjectCardsLoading) {
        return <Loader />
    }

    return (
        <div className={`bg-${bgColor}`}>
            <div className="flex justify-center my-6 md:my-8">
                <Heading
                    size="1"
                    headingColor="blue"
                    thin="MY"
                    bold="PROJECTS"
                />
            </div>

            <Grid>
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
                        borderColor={borderColor}
                        tagColor={tagColor}
                        key={id}
                    /> 
                })}
            </Grid>
        </div>
    )
}

export default Projects