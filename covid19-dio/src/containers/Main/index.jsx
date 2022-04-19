import React, { memo, useCallback, useEffect, useState } from 'react'
import Api from '../../Api.js'
import { ContainerStyled } from './style.js'

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
           .then(data => console.log(data))
    })

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

  return (
    <ContainerStyled>
      <div className='mb-2'>

      </div>
    </ContainerStyled>
  )
}

export default memo(Main)
