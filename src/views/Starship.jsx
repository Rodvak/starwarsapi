import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Starship = () => {
  const {id} = useParams();
  const [starship, setStarship] = useState();

  useEffect( () => {
    axios.get(`https://swapi.dev/api/starships/${id}`).then(response => {
      console.log(response.data)
      setStarship(response.data)
    })
    .catch(err => console.log(err))
  }, [id])

  return (
    <div className='container mt-5'>

      {
        starship?
          <div className='container row'>
            <span className='fw-bolder fs-2 mb-4'>Name: {starship.name}</span>
            <span>Model: {starship.model}</span>
            <span>Manufacturer: {starship.manufacturer}</span>
            <span>Hyperdrive Rating: {starship.hyperdrive_rating}</span>
            <span>Crew: {starship.crew}</span>
          </div>:
            <span> Starship not found</span>
      }
    </div>
  )
}

export default Starship