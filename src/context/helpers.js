import {marked} from 'marked'
import DOMPurify from 'dompurify'

/** About-section **/ 

// this function formats the data that is from about content so I can style how I want the text to be formatted from Contentful
export const getHTMLData = (rawData) => {
    const htmlString = marked(rawData)
    const sanitizedHTMLString = DOMPurify.sanitize(htmlString)
    return sanitizedHTMLString
}

export const cleanUpAbout = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const aboutTitle = fields.title
    const aboutContent = getHTMLData(fields.description) 
    let cleanAbout = { id, aboutTitle, aboutContent } // New object that only holds the data that I´m interested in to use
    return cleanAbout
}

/** Knowledge-section **/ 
export const cleanUpKnowledgeIcons = (rawData) => {
    const cleanKnowledges = rawData.map((icon) => {
        const { sys, fields } = icon
        const {id} = sys
        const knowledgeType = fields.type
        const knowledgeImg = fields.image.fields.file.url 
        const updatedKnowledgeicon = { id, knowledgeType, knowledgeImg } // New object that only holds the data that I´m interested in to use
        return updatedKnowledgeicon
    })
    return cleanKnowledges
}

/** Navigation **/ 
export const cleanUpNavLinks = (rawData) => {
    const cleanNavlinks = rawData.map((link) => {
        const { sys, fields } = link
        const {id} = sys
        const navLinkTitle = fields.title
        const navLinkUrl = fields.url 
        const updatedNavLink = { id, navLinkTitle, navLinkUrl } // New object that only holds the data that I´m interested in to use
        return updatedNavLink
    })
    return cleanNavlinks
}

/** Logo **/
export const cleanUpLogo = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const img = fields.logo.fields.file.url 
    let cleanLogo = { id, img } // New object that only holds the data that I´m interested in to use
    return cleanLogo
}

/** Hero **/
export const cleanUpHero = (rawData) => {
    const { sys, fields } = rawData
    const {id} = sys
    const heroTitle = fields.title
    const heroSubTitle = fields.subTitle
    const heroImage = fields.image.fields.file.url 
    let cleanHero = { id, heroTitle, heroSubTitle, heroImage } // New object that only holds the data that I´m interested in to use
    return cleanHero
}