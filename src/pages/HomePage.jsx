/** Components **/
import Skills from '../components/Skills/Skills'
import Hero from "../components/Hero/Hero"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"

const HomePage = () => {

    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <Hero />
                <Skills />
            </PageContentWrapper>
        </div>
    )
}

export default HomePage