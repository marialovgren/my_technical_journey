

const SkillItem = ({id, skillsImg, skillsType}) => {
    return (
        <div key={id}>
            <div className="flex justify-center h-20">
                <img 
                    src={skillsImg} 
                    className="object-scale-down w-5/6" 
                />
            </div> 
                            
            <div className="flex justify-center font-light text-xs mt-2">
                <h2>{skillsType}</h2>
            </div>
        </div>
    )
}

export default SkillItem