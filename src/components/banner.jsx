export function Banner ({children, src})   {
   
    return (
        <div className="banner">
            <img src={src} alt="" />
            {children &&
                <>
                <div className="banner-filter"></div>
                <h1>{children}</h1>
                </>
            }
        </div>
    )
}