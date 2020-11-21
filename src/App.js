import React, { useState, useMemo } from 'react'

//Components
import {Header} from './Components/Header'
import {Card} from './Components/CardDataCountry'
import { ContentGraphics } from './Components/ContentGraphics'
import { World } from './Components/World'
import {Footer} from './Components/Footer'

import { useFetch } from './hooks/useFetch'
import { COUNTRIES } from './Types/api'

function App() {

  const [ country, setCountry ] = useState('')

  const state = useFetch(COUNTRIES) 

  const countrySelect = useMemo(() => state.data.find( search => search.country === country ), [country, state.data])

  const colorize = (...args) => ({
    cyan: `\x1b[36m${args.join(' ')}`,
  })

  console.log(colorize("José Eduardo Álvarez L. | Front-End developer </>").cyan);

  return (
    state.loading
      ? <h1 className="mt-5 pt-5 text-center">Cargando...</h1>
      :
        <div className="animate-opacity">
          <Header 
            country={country}
            dataCountry={state?.data}
            setCountry={setCountry}
            error={state.error}
          />

          <div style={{paddingTop: '125px'}} className="container">
            {countrySelect
              ?
                <>
                  <Card countrySelect={countrySelect} />

                  <ContentGraphics countrySelect={countrySelect} />

                  <World data={state.data} />
                </>
              : <h1 className="text-center">Sin resultados...</h1>

            }
          </div>

          {countrySelect && <Footer />}

        </div>
  )
}

export default App
