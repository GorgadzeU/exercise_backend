import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/navbar.component';
import ExerciseList from './components/exercise-list/exercise-list.component';
import EditExercise from './components/edit-exercise/edit-exercise.component';
import CreateExercise from './components/create-exercise/create-exercise.component';
import CreateUser from './components/create-user/create-user.component';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id'  component={EditExercise} />
        <Route path='/create'  component={CreateExercise} />
        <Route path='/user'  component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;