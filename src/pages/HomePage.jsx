// import Hero from '../components/Hero'
import useContentful from '../hooks/useContentful'

const query = `
    query {
        knowledge(id: "O73I2xS1RCj1fzAxKO7Ae") {
        type
        }
    }
`

const HomePage = () => {
    let { data, errors } = useContentful(query)

    if (errors) return <span>{errors.map(error => error.message)}</span>

    if (!data) return <span>Loading...</span>

    return (
        <div>
            HomePage
                {data && (
                    <p>{data.knowledge.type}</p>
                )}
            {/* <Hero /> */}
           
        </div>
    )
}

export default HomePage