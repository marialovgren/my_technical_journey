/** Components **/
import Experiences from '../components/Experiences/Experiences'
import PageContentWrapper from "../Layout/Content/PageContentWrapper"
import About from '../components/About/About'

const AboutPage = () => {
    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <About />

                <Experiences 
                    bgColor="lightBeige"
                />
            </PageContentWrapper>
        </div>
    )
}

export default AboutPage