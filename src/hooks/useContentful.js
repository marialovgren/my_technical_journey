/**
 * Hook that fetches data from Contentful
 */

import { useState, useEffect } from "react"

const SPACE_ID = import.meta.env.VITE_SPACE_ID
const CDA_TOKEN = import.meta.env.VITE_CDA_TOKEN

const useContentful = (query) => {
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}?access_token=${CDA_TOKEN}`
        ,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${CDA_TOKEN}`
            },
            body: JSON.stringify({ query }),
        }
        )
        .then((response) => response.json())
        .then(({data, errors}) => {
            if (errors) setErrors(errors)
            if (data) setData(data)
        })
        .catch(error => setErrors([error]))
    }, [query])

    return { data, errors }
}

export default useContentful