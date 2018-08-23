import React, { Component } from 'react';
// maybe needs a change
import { fetchOneGrade, updateDoggy, deleteDog, updateGrades } from '../services/api';
import UpdateGrades from './UpdateGrades';
// import DeleteButton from './Deletebutton';
import UpdateDog from './UpdateDog';



class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dogs, dog, dogGrade } = props;
    this.state = {
      id: dog.id,
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
      dogs_id: dog.id,

      leash_training: false,
      leave_it: false,
      potty_training: false,
      quiet: false,
      sit: false,
      stay: false,
    }

    // this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }



  // handle change
  handleChange(e) {

  }
  // handle submit

  // handle delete 
  // handleDeleteClick() {
  //   deleteDog()
  //     .then(res => {
  //       this.fetchOneDog();
  //     })
  // }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        {/* <UpdateGrades />
        <DeleteButton dogs={this.state.dogs} handleDeleteClick={this.handleDeleteClick} /> */}
        <img src={this.state.picture} alt={'🐾 Sorry, No Image 🐾'} height="200" width="200" className="pupperPic" />
        <h2>{this.state.name}</h2>

        {/* set up props insead of state since it already is called from state from app.jsx */}
        <p>Owner: {this.props.dog.owner}</p>
        <p>Breed: {this.props.dog.breed}</p>
        <p>Size: {this.props.dog.size}</p>
        <p>Age: {this.props.dog.age}</p>
        <p>Id: {this.props.dog.id}</p>
        <p>Leash Training: {this.state.leash_training ? "True" : "False"}</p>
        <p>Leave It: {this.state.leave_it ? "True" : "False"}</p>
        <p>Potty Training: {this.state.potty_training ? "True" : "False"}</p>
        <p>Quiet: {this.state.quiet ? "True" : "False"}</p>
        <p>Sit: {this.state.sit ? "True" : "False"}</p>
        <p>Stay: {this.state.stay ? "True" : "False"}</p>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            const dogState = this.state;
            this.props.editDog(dogState)
          }} >
          Edit Dog
            </button>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            const dogState = this.state;
            this.props.newGrade(dogState)
          }} >
          New Gradebook

        <button onClick={(ev) => {
          ev.preventDefault();
          const dog = this.dog;
          this.props.handleDeleteDog(dog);
        }} >

          </button>
        {/* <button DeleteAlert > delete</button> */}
        {/* <button className="confirm"
        onClick={ev => this.onClick(ev)}> confirm </button> */}

        
          {/* confirm </button>
          Delete Button  */}
</button>

      </div>



      // render pup profile
      // render forms (update)
      // render forms (gradebook)
    );
  }

}


export default PupProfile;
