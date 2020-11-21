import React, { memo } from 'react';
import SvgBottom from '../../Components/Svg/SvgBottom'
import Distancia from '../../Images/distance.png'

export const Footer = memo(() => {
  return (
    <>
        <SvgBottom/>
        <div className="color-primary">
            <h4 className="m-0 pb-3 text-center text-white">
                Desarrollado por: José Eduardo Álvarez L. 
                <img src={Distancia} className="img-fluid" width="40" alt="imagen distancia" />
            </h4>
        </div>
    </>
  );
})