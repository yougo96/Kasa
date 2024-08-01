export function Banner ({children, src, height})   {
   
    return (
        <div className="banner" style={{height: height}}>
            {src &&
                <img src={src} alt="" />
            }            
            {children &&
                <>
                <div className="banner-filter"></div>
                <h1>{children}</h1>
                </>
            }
        </div>
    )
}