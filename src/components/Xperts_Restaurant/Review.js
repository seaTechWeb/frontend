import React from "react";


function Review({ name, restaurantName, message, imageLink }) {
    return (
        <>
            <div className="col-md-6" style={{ marginTop: '20px' }}>
                <div className="card">
                    <div className="card-body" style={{height:'260px'}}>
                        <div style={{ display: 'flex', }}>
                            <img src={imageLink
                            } alt="Review" style={{ width: '100px', height: '100px' }} />
                            <div style={{ marginLeft: '20px',height:'100px',alignContent:'center',justifyContent:'center',display:'flex',flexDirection:'column' }}>
                                <p style={{marginBottom:'0px'}}> <b>{name}</b></p>
                                <p>{restaurantName}</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;