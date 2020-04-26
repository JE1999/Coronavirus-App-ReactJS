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

  const [ country, setCountry ] = useState('World')
  
  const [ dataCountry, setDataCountry ] = useState([])

  const [ preload, setPreload ] = useState(false)

  const countrySelect = dataCountry.find( search => search.country === country )

  console.log(countrySelect)

  return (
    
    <>
    
      {preload
        ? <p>Cargando...</p>
        :
        <>
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
                    Tabla Mundial <span role="img" aria-label="mundo">🌎</span>
                  </h1>

                  <div className="container-fluid shadow p-0">
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

        </>
      }

    </>
  )
}

export default App
