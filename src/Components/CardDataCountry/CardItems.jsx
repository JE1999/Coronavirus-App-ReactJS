import React, { memo } from 'react';

export const CardItems = memo((props) => {
  return (
    <div className={`col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i ${props.classStyle}`}>
        <h5 className="text-center text-white">{props.text}</h5>
        <div className="row d-flex align-items-center">
            <div className="col-3 text-center">
                <img src={props.image} className="img-fluid" width="50" alt={`Logo ${props.text}`} />
            </div>
            <div className="col-9 text-center">
                <h2 className="text-white m-0">                        
                    {new Intl.NumberFormat('en-US').format(props.digit)}
                </h2>
            </div>
        </div>
    </div>
  );
})
