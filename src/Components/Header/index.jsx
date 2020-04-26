import React from 'react'

//Svg Top
import SvgTop from '../Svg/SvgTop'
//AutoComplete
import AutoComplete from '../AutoComplete/index'

export default function ({country, dataCountry, setCountry, setDataCountry, setPreload}){

    return(
        <>
        
            <div className="color-primary pt-2">
                <span className="text-white mx-3">José Eduardo Álvarez L.</span>
                <div className="container text-center">
                    <h1 className="text-white m-0">Coronavirus</h1>
                    <h6 className="text-color">Buscador mundial del Covid-19</h6>
                
                    <AutoComplete
                        country={country}
                        dataCountry={dataCountry}
                        setCountry={setCountry} 
                        setDataCountry={setDataCountry} 
                        setPreload={setPreload}                
                    />

                </div>
            </div>
          

            <SvgTop/>
        
        </>
    )
}