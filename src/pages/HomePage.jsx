/** Components **/
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import PageContentWrapper from "../Layout/Content/PageContentWrapper"


const HomePage = () => {

    return (
        <div className="h-full w-full">
            <PageContentWrapper>
                <Hero />
                <Projects />
            </PageContentWrapper>
        </div>
    )
}

export default HomePage