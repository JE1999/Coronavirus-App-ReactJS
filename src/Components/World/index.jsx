import React, { memo } from 'react';
import {TableContent} from '../../Components/Table'

export const World = memo(({data}) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-0">
        Mundial <p className="rotate"><span role="img" aria-label="mundo">🌎</span></p>
      </h1>

      <div className="container mt-4 shadow p-0">
        <TableContent dataCountry={data} />
      </div>
    </div>
  );
})
