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
                    <h1 className="text-white m-0">Covid-19</h1>
                    <h6 className="text-color">Buscador mundial del Coronavirus <span role="img" aria-label="img">🦠</span></h6>
                
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