import React, { useState } from 'react'

//Components
import Header from './Components/Header'
import CardDataCountry from './Components/CardDataCountry'
import SvgChart from './Components/Svg/SvgChart'
import SvgBottom from './Components/Svg/SvgBottom'
import Table from './Components/Table'

//Chart
import Chart from './Chart'

//Images
import Distancia from './Images/distance.png'


function App() {

  const [ country, setCountry ] = useState('')
  
  const [ dataCountry, setDataCountry ] = useState([])

  const [ preload, setPreload ] = useState(false)

  const countrySelect = dataCountry.find( search => search.country === country )

  const colorize = (...args) => ({
    cyan: `\x1b[36m${args.join(' ')}`,
    bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  })

  console.log(colorize(colorize("José Eduardo Álvarez L. | Front-End developer </>").cyan).bgRed);

  return (
    
    <>
    
      {preload
        ? <p>Cargando...</p>
        :
        <div className="animate-opacity">
          <Header 
            country={country}
            dataCountry={dataCountry}
            setCountry={setCountry} 
            setDataCountry={setDataCountry} 
            setPreload={setPreload}
          />

          {countrySelect
            ?
              <>
              
                <CardDataCountry countrySelect={countrySelect} />

                <div className="container-fluid mt-5">
                  <h1 className="text-center mb-0">Gráfico</h1>
                  <div className="text-center">
                    <SvgChart/>
                  </div>
                  <Chart countrySelect={countrySelect} />
                </div>

                <div className="container-fluid mt-5">
                  <h1 className="text-center mb-0">
                    Mundial <p className="rotate"><span role="img" aria-label="mundo">🌎</span></p>
                  </h1>

                  <div className="container-fluid mt-4 shadow p-0">
                    <Table dataCountry={dataCountry} />
                  </div>
                </div>

                <SvgBottom/>

                <div className="color-primary">
                  <h4 className="m-0 pb-3 text-center text-white">
                    Desarrollado por: José Eduardo Álvarez L. 
                    <img src={Distancia} className="img-fluid" width="40" alt="imagen distancia" />
                  </h4>
                </div>
              
              </>
            : 
              <div style={{paddingTop: '125px'}} className="container">
                <h1 className="text-center">Sin resultados...</h1>
              </div>

          }

        </div>
      }

    </>
  )
}

export default App
