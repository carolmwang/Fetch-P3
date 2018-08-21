import React, { Component } from 'react';
import DogsIndex from './components/DogsIndex';
import UpdateDog from './components/UpdateDog';
import PupProfile from './components/PupProfile';
import UpdateGrades from './components/UpdateGrades';


import {
  fetchDogs, 
  fetchOneDog,
  updateDoggy,
  editDogGrade,
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      selectedDog: '',
      currentView: 'All Dogs',
    }


  }

  componentDidMount() {
    fetchDogs()
    .then(data => this.setState({dogs: data.dogs}));
  };

  // select one dog & set state
  fetchOne(id) {
    fetchOneDog(id)
    .then(data => this.setState({
      selectedDog: data.dog,
      currentView: 'Pup Profile'
    }))
  };

  // create dog function
  createDog() {
    saveNewDog(dog)
    .then(data => fetchDogs())
    .then(data => {
      this.setState({
        currentView: 'Dog Index',
        dogs: data.dogs
      });
    });

  }
  // edit dog function
  updateDoggy(dog) {
    updateDoggy(dog)
    .then(data => fetchOneDog())
    .then(data => {
      this.setState({
        dog : data.dog
      });
    })
  };

  // delete dog function

  // edit dog grade function
  editDogGrades(id) {
    editDogGrade(id)
    .then(data => this.fetchOne(id))
    .then(data => {
      this.setState({
        currentView: 'Pup Profile',
        selectedDog: data.dog
      })
    })
  }

  // select grade function
  // create grade function? tbd

  // delete dog function

  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    // const { dogs, selectedDog } = this.state;

    switch(currentView) {
      case 'All Dogs':
      return <DogsIndex dogs={this.state.dogs} oneDog = {this.fetchOne}/>
      break;
      case 'Pup Profile':
      return <PupProfile selectedDog={this.selectedDog} />;
      break;
      // case 'Gradebook':
      // return <Gradebook />
      // break;
    }
  }

  handleLinkClick(link) {
    this.setState({ currentView: link });
  }

  render() {
    // const links = [
    //   'All Dogs',
    //   'Pup Profile'
    // ]
    return (
      <div className="App">
        {this.determineWhichToRender()}
      </div>
    );
  }
}

export default App;
