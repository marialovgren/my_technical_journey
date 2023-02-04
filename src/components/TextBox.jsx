import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const TextBox = ({text}) => {

    return (
        <div className="text-blue font-normal mb-4">
            {documentToReactComponents(text)}
        </div>
    )
}

export default TextBox