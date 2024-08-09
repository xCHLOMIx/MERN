import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = { title, load, reps }

        const response = await fetch('http://localhost:4000/workouts/', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(workout)
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            setLoad('')
            setTitle('')
            setReps('')
            setError(null)
            console.log('New workout added!')
        }
    }
    return (
        <form className="create">
            <h3>Add a new Workout</h3>
            { error && <div className="error">{error}</div> }   
            <label htmlFor="title">Exercise Title:</label>
            <input 
            type="text"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            />
            <label htmlFor="load">Load in (kg):</label>
            <input 
            type="number"
            value={load}
            onChange={(e) => {setLoad(e.target.value)}}
            />
            <label htmlFor="reps">Reps:</label>
            <input 
            type="number"
            value={reps}
            onChange={(e) => {setReps(e.target.value)}}
            />
            <button onClick={handleSubmit}>Add workout</button>
        </form>
    );
}
 
export default WorkoutForm;