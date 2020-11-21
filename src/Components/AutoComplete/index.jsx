import React, { memo } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const AutocompleteInput = memo(({country, dataCountry, setCountry}) => {
    return (    
        <Autocomplete
            freeSolo
            disableClearable
            options={dataCountry.map((option) => option.country)}
            inputValue={country}
            onChange={(e,v) => setCountry(v)}
            renderInput={(params) => (
                <TextField
                    onChange={({ target }) => setCountry(target.value)}
                    {...params}
                    placeholder="Buscar..."
                    className="bg-white shadow p-3 roundedd"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}
        />
    )
})
