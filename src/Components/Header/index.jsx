import React, { memo } from 'react'

//Svg Top
import SvgTop from '../Svg/SvgTop'
//AutoComplete
import {AutocompleteInput} from '../AutoComplete/index'

export const Header = memo(({country, dataCountry, setCountry, error}) => {
    return(
        <>
            <div className="color-primary pt-2">
                <span className="text-white mx-3">José Eduardo Álvarez L.</span>
                <div className="container text-center">
                    <h1 className="text-white m-0">Covid-19</h1>
                    <h6 className="text-color">Buscador mundial del Coronavirus <span role="img" aria-label="img">🦠</span></h6>
                
                    <div className="mx-auto text-center col-sm-12 col-md-8 col-lg-6 mt-3">

                        <h6 className="m-0 text-color">Buscar algun país...</h6>
                        {error
                            ?   <h2 className="m-0 bg-danger pt-2 text-white roundedd shadow">
                                    Ha ocurrido un error :(
                                </h2>
                            :   <AutocompleteInput
                                    country={country}
                                    dataCountry={dataCountry}
                                    setCountry={setCountry} 
                                />
                        }
                    </div>
                </div>
            </div>
          

            <SvgTop/>
        </>
    )
})