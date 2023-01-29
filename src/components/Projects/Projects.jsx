import classNames from 'classnames'

import Card from "../Card/Card"
import Loader from '../Loader/Loader'

import Heading from "../Heading/Heading"

const Projects = ({projectCards, isProjectCardsLoading, bgColor, borderColor, tagColor}) => {
    const lightBeige = bgColor === "lightBeige"
    const white = bgColor === "white"
    
    if (isProjectCardsLoading) {
        return <Loader />
    }

    return (
        <div 
            className={classNames({
                'bg-lightBeige' : lightBeige,
                'bg-white' : white
            })}
        >
            <div className="flex justify-center my-6 md:my-8">
                <Heading
                    size="1"
                    headingColor="blue"
                    thin="MY"
                    bold="PROJECTS"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center ">
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
            </div>
        </div>
    )
}

export default Projects