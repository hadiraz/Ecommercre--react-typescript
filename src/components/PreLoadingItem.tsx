import React from 'react'
import "../App.css"
const PreLoadingItem = ({className} : {className : string}) => {
  return (
    <div className={`${className} relative aprent`}>
        <span className=' bg-persianGreen w-full h-2 rounded-xl absolute prev-animation z-20'></span>
    </div>
  )
}

export default PreLoadingItem