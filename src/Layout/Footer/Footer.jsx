import { useContext } from 'react'
import { Context } from '../../context/ContextProvider'

/** Components **/
import Loader from '../../components/Loader/Loader'

const Footer = () => {
	const { footerLinks, isFooterLinksLoading } = useContext(Context)
	
	if (isFooterLinksLoading ) {
        return <Loader />
    }
        
    return (
      <div>
		  <div>
			  <h2>CONTACT ME</h2>
		  </div>

		  <div>
			  <ul>
				{footerLinks.map((footerLink) => {
					const { id, footerLinkIcon, footerLinkUrl} = footerLink
					return (
						<li
							key={id}
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