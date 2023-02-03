import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'

/** Components **/
import Loader from '../../components/Loader/Loader'
import Heading from '../../components/Heading/Heading'

const Footer = () => {
	const { footerLinks, isFooterLinksLoading } = useContext(Context)
	
	if (isFooterLinksLoading ) {
        return <Loader />
    }
        
    return (
      <div className="bg-blue w-full p-10 text-lightBeige">
		  <div className="flex justify-center">
                <Heading
                    size="1"
                    headingColor="lightBeige"
                    thin="CONTACT"
                    bold="ME"
                />
            </div>

		  <div>
			  <ul className="flex flex-row justify-center mt-6">
				{footerLinks.map((footerLink) => {
					const { id, footerLinkIcon, footerLinkUrl} = footerLink
					return (
						<li
							key={id}
							className="mx-4 text-5xl md:mx-20"
						>
							<a href={footerLinkUrl}>
								<ion-icon name={footerLinkIcon}></ion-icon> 
							</a>
						</li>
					)
				})}
			  </ul>
		  </div>
	  </div>
    )
}

export default Footer