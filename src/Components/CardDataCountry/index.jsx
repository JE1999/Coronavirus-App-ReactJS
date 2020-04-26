import React from 'react'

//Images
import Covid from '../../Images/bacteria.png'
import Recuperados from '../../Images/recuperados.png'
import Activos from '../../Images/activos.png'
import Hoy from '../../Images/hoy.png'
import MuerteHoy from '../../Images/muerteHoy.png'
import MuerteTotal from '../../Images/muerteTotal.png'
import Test from '../../Images/test.png'


export default function ({countrySelect}){

    return(
        <div style={{paddingTop: '125px'}} className="container-fluid">
              <h1 className="text-center">
                {
                    countrySelect.country === '' 
                        ? <span className="text-muted"><i>Ciudad no identificada</i></span> 
                        : countrySelect.country 
                }
              </h1>
              <div className="row d-flex justify-content-around">
                
                <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i casos-totales">
                  <h2 className="text-center text-white">Totales</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                      <img src={Covid} className="img-fluid" width="50" alt="logo" />
                    </div>
                    <div className="col-6 text-center">
                      <h3 className="text-white m-0">                        
                        {new Intl.NumberFormat('en-US').format(countrySelect.cases)}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i casos-activos">
                  <h2 className="text-center text-white">Activos</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                      <img src={Activos} className="img-fluid" width="50" alt="logo" />
                    </div>
                    <div className="col-6 text-center">
                      <h3 className="text-white m-0">
                        {new Intl.NumberFormat('en-US').format(countrySelect.active)}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i total-muertes">
                  <h2 className="text-center text-white">Muertes</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                      <img src={MuerteTotal} className="img-fluid" width="50" alt="logo" />
                    </div>
                    <div className="col-6 text-center">
                      <h3 className="text-white m-0">
                        {new Intl.NumberFormat('en-US').format(countrySelect.deaths)}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i casos-hoy">
                  <h2 className="text-center text-white">Casos de hoy</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                      <img src={Hoy} className="img-fluid" width="50" alt="logo" />
                    </div>
                    <div className="col-6 text-center">
                      <h3 className="text-white m-0">
                        {new Intl.NumberFormat('en-US').format(countrySelect.todayCases)}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i muertes-hoy">
                  <h2 className="text-center text-white">Muertes de hoy</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                      <img src={MuerteHoy} className="img-fluid" width="50" alt="logo" />
                    </div>
                    <div className="col-6 text-center">
                      <h3 className="text-white m-0">
                        {new Intl.NumberFormat('en-US').format(countrySelect.todayDeaths)}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i recuperados">
                  <h2 className="text-center text-white">Recuperados</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6 text-center">
                      <img src={Recuperados} className="img-fluid" width="50" alt="logo" />
                    </div>
                    <div className="col-6 text-center">
                      <h3 className="text-white m-0">
                        {new Intl.NumberFormat('en-US').format(countrySelect.recovered)}
                      </h3>
                    </div>
                  </div>
                </div>

                {countrySelect.totalTests 
                  ?
                    <div className="col-sm-12 col-md-5 col-lg-3 p-4 m-3 shadow-i pruebas">
                      <h2 className="text-center text-white">Total de pruebas</h2>
                      <div className="row d-flex align-items-center">
                        <div className="col-6 text-center">
                          <img src={Test} className="img-fluid" width="50" alt="logo" />
                        </div>
                        <div className="col-6 text-center">
                          <h3 className="text-white m-0">
                            {new Intl.NumberFormat('en-US').format(countrySelect.totalTests)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  
                  : null
                }

            </div>
        </div>
    )
}