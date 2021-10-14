import React from 'react'

export default function Navbar({filterItem, menuList}) {


    return (
          <div>
        <div className="navbar">
            <h1  style={{color:'purple'}}> Courses Of BS(Computer Science) </h1>
            <div className="btn-group">

                {
                    menuList.map((current)=>{
                        return(
                            <button className="btn-group__item" onClick={()=>filterItem(current)}> {current} </button>
                        )
                    })
                }
            </div>

        </div>
        </div>
    )
}
