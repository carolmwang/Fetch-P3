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
//             .then(() => resp.json())
//             .then(() => this.setState({
//                     doggyVisability: "Alert Display"
//                 })
//         }
        


//         render() {
//             return (
//                 <main>
//                     <form
//                         onSubmit={this.handleSubmit}>
//                         <input
//                             name="byedoggy"
//                             value={this.state.messag}
//                             onChange={this.handleChange}
//                         />

//                         <button onClick={(ev) => {
//                             ev.preventDefault();
//                             const dog = this.state;
//                             this.props.handleDeleteDog(dog)
//                           }} >

                          
//                         <button
//                             type="confirm">
//                             confirm</button>
//                     </form>
//                     <div className={this.state.doggyVisability}>
//                     </div>

//                 </main>
//             )
//         }

//     }
//         export default DeleteAlert