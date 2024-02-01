// // AddComment.js
// import React, { Component } from "react";

// class AddComment extends Component {
//   state = {
//     text: "",
//     rating: 1,
//   };

//   handleTextChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   handleRatingChange = (e) => {
//     this.setState({ rating: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // Qui dovresti effettuare la POST del nuovo commento al tuo backend o API
//     // In un'applicazione del mondo reale, dovresti utilizzare fetch o un'API di terze parti
//     console.log("Nuovo commento:", this.state);
//     // Resetta lo stato del form dopo la submit
//     this.setState({ text: "", rating: 1 });
//   };

//   render() {
//     const { text, rating } = this.state;

//     return (
//       <div>
//         <h4>Aggiungi un commento</h4>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label>Testo del commento:</label>
//             <textarea value={text} onChange={this.handleTextChange} />
//           </div>
//           <div>
//             <label>Voto:</label>
//             <select value={rating} onChange={this.handleRatingChange}>
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={3}>3</option>
//               <option value={4}>4</option>
//               <option value={5}>5</option>
//             </select>
//           </div>
//           <button type="submit">Aggiungi Commento</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddComment;
