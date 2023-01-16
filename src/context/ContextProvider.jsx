import { createContext, useCallback, useEffect, useState, } from "react";
import { client } from "./client";
import { cleanUpAbout, cleanUpSkillsIcons, cleanUpNavLinks, cleanUpLogo, cleanUpHero, getHTMLData, cleanUpFooterLinks } from "./helpers";

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

    /** Skills-icons **/ 
    const [isSkillsLoading, setIsSkillsLoading] = useState(false)
    const [skillsIcons, setSkillsIcons] = useState([])

    const saveSkillsData = useCallback((rawData) => {
        const cleanSkillsData = cleanUpSkillsIcons(rawData)
        setSkillsIcons(cleanSkillsData)
    }, [])

    const getSkillsIcons = useCallback(async () => {
        setIsSkillsLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'knowledge' })
            const responseData = response.items
            if (responseData) {
                saveSkillsData(responseData)
            } else {
                setSkillsIcons([])
            }
            setIsSkillsLoading(false)
        } catch (err) {
            console.log(err)
            setIsSkillsLoading(false)
        }
    }, [saveSkillsData])

    useEffect(() => {
        getSkillsIcons()
    }, [getSkillsIcons])

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

    /** Hero **/
    const [hero, setHero] = useState({})
    const [isHeroLoading, setIsHeroLoading] = useState(false)

    const saveHeroData = useCallback((rawData) => {
        const cleanHeroData = cleanUpHero(rawData)
        setHero(cleanHeroData)
    }, [])

    const getHero = useCallback(async () => {
        setIsHeroLoading(true)
        try {
            const response = await client.getEntry('6zECUglENTjSGovBnY4eHQ')
            if (response) {
                saveHeroData(response)
            } else {
                setHero({})
            }
            setIsHeroLoading(false)
        } catch (err) {
            console.log(err)
            setIsHeroLoading(false)
        }
    }, [saveHeroData])

    useEffect(() => {
        getHero()
    }, [getHero])

    /** Footer-links **/ 
    const [isFooterLinksLoading, setIsFooterLinksLoading] = useState(false)
    const [footerLinks, setFooterLinks] = useState([])

    const saveFooterLinksData = useCallback((rawData) => {
        const cleanFooterLinksData = cleanUpFooterLinks(rawData)
        setFooterLinks(cleanFooterLinksData)
    }, [])

    const getFooterLinks = useCallback(async () => {
        setIsFooterLinksLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'footerLinks' })
            const responseData = response.items
            if (responseData) {
                saveFooterLinksData(responseData)
            } else {
                setFooterLinks([])
            }
            setIsFooterLinksLoading(false)
        } catch (err) {
            console.log(err)
            setIsFooterLinksLoading(false)
        }
    }, [saveFooterLinksData])

    useEffect(() => {
        getFooterLinks()
    }, [getFooterLinks])

    const contextValues = {
        about, 
        isAboutLoading, 
        skillsIcons, 
        isSkillsLoading,
        navLinks,
        isNavLinksLoading,
        logo,
        isLogoLoading,
        hero,
        isHeroLoading,
        footerLinks,
        isFooterLinksLoading
    }

    return (
        <Context.Provider value={contextValues} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider