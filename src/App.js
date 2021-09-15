import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return <HttpRequests />;
  }
}

// class HttpRequests extends React.Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">{person.name}</h5>
//               <h6 class="email card-subtitle mb-2">{person.email}</h6>
//               <p class="card-text">
//                 {person.address.suite}
//                 {", "}
//                 {person.address.street}
//                 {", "}
//                 {person.address.city}
//               </p>
//               <a href="#" class="email card-link">
//                 {person.phone}
//               </a>
//               <a href="#" class="email card-link">
//                 {person.website}
//               </a>
//             </div>
//           </div>
//         ))}
//       </ul>
//     );
//   }
// }

// class HttpRequests extends React.Component {
//   state = {
//     name: "",
//   };

//   handleChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name,
//     };

//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form className="form-wrapper" onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

class HttpRequests extends React.Component {
  state = {
    id: "",
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default App;