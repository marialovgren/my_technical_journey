/**
 * Hook that fetches data from Contentful
 */

import { useState, useEffect } from "react"

const SPACE_ID = import.meta.env.VITE_SPACE_ID
const DELIVERY_TOKEN = import.meta.env.VITE_DELIVERY_TOKEN

const useContentful = (query) => {
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}?access_token=${DELIVERY_TOKEN}`
        ,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${DELIVERY_TOKEN}`
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