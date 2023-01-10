import { createContext, useCallback, useEffect, useState, } from "react";
import { client } from "./client";
import { cleanUpAbout, cleanUpKnowledgeIcons, cleanUpNavLinks, cleanUpLogo } from "./helpers";

export const Context = createContext({})

const ContextProvider = ({ children }) => {
    /** About-section **/ 
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)

    const saveAboutData = useCallback((rawData) => {
        const cleanAboutData = cleanUpAbout(rawData)
        setAbout(cleanAboutData)
    }, [])

    const getAbout = useCallback(async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntry( '5dLZMMqttuAABZ3URyjcc2')
            if (response) {
                saveAboutData(response)
            } else {
                setAbout({})
            }
            setIsAboutLoading(false)
        } catch (err) {
            console.log(err)
            setIsAboutLoading(false)
        }
    }, [saveAboutData])

    useEffect(() => {
        getAbout()
    }, [getAbout])

    /** Knowledge-section **/ 
    const [isKnowledgeLoading, setIsKnowledgeLoading] = useState(false)
    const [knowledgeIcons, setKnowledgeIcons] = useState([])

    const saveKnowledgeData = useCallback((rawData) => {
        const cleanKnowledgeData = cleanUpKnowledgeIcons(rawData)
        setKnowledgeIcons(cleanKnowledgeData)
    }, [])

    const getKnowledgeIcons = useCallback(async () => {
        setIsKnowledgeLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'knowledge' })
            const responseData = response.items
            if (responseData) {
                saveKnowledgeData(responseData)
            } else {
                setKnowledgeIcons([])
            }
            setIsKnowledgeLoading(false)
        } catch (err) {
            console.log(err)
            setIsKnowledgeLoading(false)
        }
    }, [saveKnowledgeData])

    useEffect(() => {
        getKnowledgeIcons()
    }, [getKnowledgeIcons])

    /** Navigation **/ 
    const [isNavLinksLoading, setIsNavLinksLoading] = useState(false)
    const [navLinks, setNavLinks] = useState([])

    const saveNavLinksData = useCallback((rawData) => {
        const cleanNavLinksData = cleanUpNavLinks(rawData)
        setNavLinks(cleanNavLinksData)
    }, [])

    const getNavLinks = useCallback(async () => {
        setIsNavLinksLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'navigation' })
            const responseData = response.items
            if (responseData) {
                saveNavLinksData(responseData)
            } else {
                setNavLinks([])
            }
            setIsNavLinksLoading(false)
        } catch (err) {
            console.log(err)
            setIsNavLinksLoading(false)
        }
    }, [saveNavLinksData])

    useEffect(() => {
        getNavLinks()
    }, [getNavLinks])


    /** Logo **/
    const [logo, setLogo] = useState({})
    const [isLogoLoading, setIsLogoLoading] = useState(false)

    const saveLogoData = useCallback((rawData) => {
        const cleanLogoData = cleanUpLogo(rawData)
        setLogo(cleanLogoData)
    }, [])

    const getLogo = useCallback(async () => {
        setIsLogoLoading(true)
        try {
            const response = await client.getEntry('5imA0DXdHfNoFRSJzwqsK4')
            console.log("logo", response)
            if (response) {
                saveLogoData(response)
            } else {
                setLogo({})
            }
            setIsLogoLoading(false)
        } catch (err) {
            console.log(err)
            setIsLogoLoading(false)
        }
    }, [saveLogoData])

    useEffect(() => {
        getLogo()
    }, [getLogo])

    const contextValues = {
        about, 
        isAboutLoading, 
        knowledgeIcons, 
        isKnowledgeLoading,
        navLinks,
        isNavLinksLoading,
        logo,
        isLogoLoading
    }

    return (
        <Context.Provider value={contextValues} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider