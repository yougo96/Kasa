export function ProfileBadge ({children})   {
    
    return (
        <div className="profileBadge">
            <p>{children["name"]}</p>
            <img src={children['picture']} alt="" />
       </div>
    )
}