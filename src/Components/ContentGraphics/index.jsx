import React, { memo } from 'react';
//Chart
import { Chart } from '../../Components/Chart'
import SvgChart from '../../Components/Svg/SvgChart'

export const ContentGraphics = memo(({countrySelect}) => {
  return (
    <div className="container mt-5">
        <h1 className="text-center mb-0">Gráfico</h1>
        <div className="text-center">
            <SvgChart/>
        </div>
        <Chart countrySelect={countrySelect} />
    </div>
  );
})
