import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState();

  useEffect( () => {
    axios.get(`https://swapi.dev/api/people/${id}`).then(response => {
      console.log(response.data)
      setCharacter(response.data)
    })
    .catch(err => console.log(err))
  }, [id])

  return (
    <div className='container mt-5'>

      {
        character?
          <div className='container row'>
            <span className='fw-bolder fs-2 mb-4'>Name: {character.name}</span> 
            <span>Height: {character.height} cm</span>
            <span>Mass: {character.mass} kg</span>
            <span>Gender: {character.gender}</span>
            <span>Birth Year: {character.birth_year}</span>
          </div>:
            <span> Character not found</span>
      }
    </div>
  )
}

export default Character