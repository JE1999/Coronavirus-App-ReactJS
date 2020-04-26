import React, { useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FreeSolo({country, dataCountry, setCountry, setDataCountry, setPreload}) {

    useEffect(() => {

        const getData = async () =>{

            try {
                setPreload(true)
                const request = await axios.get("https://coronavirus-19-api.herokuapp.com/countries")
                setDataCountry(request.data)
                setCountry("World")
                
            } catch (error) {
                console.log(error.response)
                setCountry("")

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ha ocurrido un error al conectar con la base de datos!',
                })

            }

        }

        getData()
        setPreload(false)


    },[setPreload, setDataCountry, setCountry])

    return (
        <div className="mx-auto text-center col-sm-12 col-md-8 col-lg-6 mt-3">

            <p className="m-0 text-color">Buscar algun país...</p>
            
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
        </div>
    )
}
