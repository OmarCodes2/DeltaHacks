import React from 'react'

const Circle = ({classname, children}) => {
    return (
        <div>
            {classname && <div className="circle active">{children}</div>}
            {!classname && <div className="circle">{children}</div>}
        </div>
    )
}
    
export default Circle