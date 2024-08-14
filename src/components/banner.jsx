/**
 * Renders a banner component with an image and optional text content.
 *   @param {ReactNode} props.children - The content to be displayed within the banner.
 *   @param {string|string[]} src - The URL(s) of the image(s) to be displayed.
 *   @param {string} height - The height of the banner.
 */
import { useState } from 'react'

export function Banner({ children, src, height }) {

    const [count, setCount] = useState(0)
    const changeCount = (e) => {

        // console.log(e.target.dataset)

        if (e.target.dataset.action == "next") {
            if (count >= Object.keys(src).length -1) {
                setCount(0)
                return
            }
            setCount(count + 1)
        } else if (e.target.dataset.action == "prev") {
            if (count <= 0) {
                setCount(Object.keys(src).length -1)
                return
            }
            setCount(count - 1)
        }        

        console.log(count)
    }

  return (
    <div className="banner" style={{ height }}>

      {src && Array.isArray(src) ? (

        <>
        <button className="banner-btn" data-action="prev" onClick={changeCount}>&lsaquo;</button>
        <img src={src[count]} alt="" />
        <button className="banner-btn" data-action="next" onClick={changeCount}>&rsaquo;</button>
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