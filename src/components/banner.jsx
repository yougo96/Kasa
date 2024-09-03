import { useState } from 'react'
import './banner.scss'

export function Banner({ children, src, height }) {

    const [count, setCount] = useState(0)
    const changeCount = (e) => {
        if (e.target.dataset.action == "next") {
            if (count >= Object.keys(src).length -1) {
                setCount(0)
                return
            }
            setCount(count + 1)
            return
        } else if (e.target.dataset.action == "prev") {
            if (count <= 0) {
                setCount(Object.keys(src).length -1)
                return
            }
            setCount(count - 1)
            return
        }        
    }

  return (
    <div className="banner" style={{ height }}>

      {src && Array.isArray(src) ? (

        <>
        
        <div className='banner-Carousel' style={{transform: `translateX(${count * -100}%)`}}>        
          {src.map((data, index) => (
              <img key={"carousel"+index} loading="lazy" src={data} alt="" style={{transform: `translateX(${100 * index}%)`}}/>
          ))}
        </div>

        { src.length > 1 ? 
          <>
          <button className="banner-btn" data-action="prev" onClick={changeCount}><i className="bi bi-chevron-left"></i></button>
          <button className="banner-btn" data-action="next" onClick={changeCount}><i className="bi bi-chevron-right"></i></button>
          </>
          : null
        }
        
        <div className="banner-count">
            <span>{count + 1}</span>
            <span>/</span>
            <span>{Object.keys(src).length}</span>
        </div>
        </>

      ) : (
        <img src={src} alt="" />
      )}
      
      {children && (
        <>
          <div className="banner-filter" />
          <h1>{children}</h1>
        </>
      )}
    </div>
  )
}