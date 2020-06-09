import React, { useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = (props) => {
    const [exerciseData, setExerciseData] = useState({
        username: '',
        description: '',
        duration: 0,
    });
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);
    
    const { username, description, duration } = exerciseData;

    useEffect(() => {
        setUsers(['test user'])
        setExerciseData({...exerciseData, username: 'test user!'});
        console.log('efect')
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target

        setExerciseData({...exerciseData, [name]: value})
    }

    const handleDateChange = date => {
        setDate(date)
    }

    const onSubmit = (e) => {

        const exercise = {
            username,
            description,
            duration,
            date
        }

        console.log(exercise);

        // window.location = '/';
    }

    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form >
        <div className="form-group"> 
          <label>Username: </label>
          <select 
              name='username'
              required
              className="form-control"
              value={username}
              onChange={handleChange}>
              {
                users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              name='description'
              required
              className="form-control"
              value={description}
              onChange={handleChange}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              name='duration'
              type="text" 
              className="form-control"
              value={duration}
              onChange={handleChange}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="form-group">
          <button onClick={onSubmit} type='button' className="btn btn-primary">Create Exercise Log</button>
        </div>
      </form>
    </div>
    )
}

export default CreateExercise;