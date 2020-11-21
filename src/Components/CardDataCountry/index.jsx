import React, { memo } from 'react'

//Images
import Covid from '../../Images/bacteria.png'
import Recuperados from '../../Images/recuperados.png'
import Activos from '../../Images/activos.png'
import Hoy from '../../Images/hoy.png'
import MuerteHoy from '../../Images/muerteHoy.png'
import MuerteTotal from '../../Images/muerteTotal.png'
import Test from '../../Images/test.png'
import { CardItems } from './CardItems'


export const Card = memo(({countrySelect}) => {

  return(
    <>
      <h1 className="text-center animate-opacity">
        {countrySelect.country === '' 
          ? <span className="text-muted"><i>Ciudad no identificada</i></span> 
          : countrySelect.country 
        }
      </h1>
      <div className="row d-flex justify-content-around animate-opacity">

        <CardItems 
          classStyle="casos-totales"
          text="Totales"
          image={Covid}
          digit={countrySelect.cases}
        />

        <CardItems 
          classStyle="casos-activos"
          text="Activos"
          image={Activos}
          digit={countrySelect.active}
        />

        <CardItems 
          classStyle="total-muertes"
          text="Muertes"
          image={MuerteTotal}
          digit={countrySelect.deaths}
        />

        <CardItems 
          classStyle="casos-hoy"
          text="Casos de hoy"
          image={Hoy}
          digit={countrySelect.todayCases}
        />

        <CardItems 
          classStyle="muertes-hoy"
          text="Muertes de hoy"
          image={MuerteHoy}
          digit={countrySelect.todayDeaths}
        />

        <CardItems 
          classStyle="recuperados"
          text="Recuperados"
          image={Recuperados}
          digit={countrySelect.recovered}
        />

        {countrySelect.totalTests !==0 &&
          <CardItems 
            classStyle="pruebas"
            text="Total de pruebas"
            image={Test}
            digit={countrySelect.totalTests}
          />
        }

      </div>
    </>
  )
})