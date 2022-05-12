import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Form = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
        clearForm()
    }

    const clearForm = () => {
        setId("")
        setCategory("")
    }

    const handleSelect = (e) => {
        setCategory(e.target.value)
    }

    const handleInput = (e) => {
        setId(e.target.value)
    }


  return (
    <div className='container mt-5'>

        <form onSubmit={handleSubmit}>

            <h1 className='fw-bolder fs-1'>Star Wars API</h1>
            <span>
                Search for: 
                <select name="category" value={category} onChange={handleSelect} className="form-select textinput bg-dark bg-dark mt-3 text-white">
                        <option hidden></option>
                        <option value="people"> People</option>
                        <option value="planet"> Planets</option>
                        <option value="starship"> Starship</option>
                </select>
                ID:
                <input className='textinput bg-dark mt-5 ms-3' type="text" name='id' value={id} onChange={handleInput}/>
                <button className='ms-3 btnn' type='submit'>Search</button>
            </span>
        </form>

    </div>
  )
}

export default Form