import React from 'react'

export default function MenuCard({menuData}) {
     
   
    return (
        <>

            <section className="main-card--cointainer">


                {menuData.map((currentElement,index) => {
                    const {name,description,couseno}= currentElement
                    return (
                        <>
                            <div className="card-container" >
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{index+1}</span>

                                        <h6 className="card-title"> {name}</h6>
                                        <span className="card-author subtle" style={{ color: 'rebeccapurple' }}>{description}</span>
                                        <span className="card-description subtle" style={{ color: 'red' }}>  {couseno} </span>
                                    </div>
                                </div>

                            </div>

                        </>
                    )
                })
                }



            </section>
        </>
    )
}
