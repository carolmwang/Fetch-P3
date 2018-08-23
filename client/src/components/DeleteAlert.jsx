// import React, { Component } from 'react';
// import { deleteDog } from '../services/api';

// class DeleteAlert extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             byeDoggy: '',
//             messageBox: "pageHide"
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     handleChange(e) {
//         this.setState({
//             byeDoggy: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         deleteDog(dog)
//             .then(data => fetchDogs(dog))
//             .then(data => {
//                 this.setState({
//                     currentView: 'All Dogs',
//                     dogs: data.dogs,
//                 })
            
            


//     render() {
//         return (
//             <main>
//                 <form
//                     onSubmit={this.handleSubmit}>
//                     <input
//                         name="byedoggy"
//                         value={this.state.byeDoggy}
//                         onChange={this.handleChange}
//                     />
//                     <button
//                         type="confirm">

//                     </button>
//                         </form>
//             </main>
//                 )
//             }
        

// export default DeleteAlert;