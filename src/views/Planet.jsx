import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Planet = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}`).then(response => {
            console.log(response.data)
            setPlanet(response.data)
        })
        .catch(err => console.log(err))
    }, [id])

  return (
    <div className='container mt-5'>

      {
        planet?
          <div className='container row'>
            <span className='fw-bolder fs-2 mb-4'>Name: {planet.name}</span>
            <span>Climate: {planet.climate}</span>
            <span>Terrain: {planet.terrain}</span>
            <span>Gravity: {planet.gravity}</span>
            <span>Population: {planet.population}</span>
          </div>:
            <span> Planet not found</span>
      }
    </div>
  )
}

export default Planet