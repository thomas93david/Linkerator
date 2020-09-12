// import React, { useState, useEffect } from "react";
// import { Card, Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SearchBar.css";
// import axios from "axios";

// const SearchBar = () => {
//   const [query, setQuery] = useState("hi");
//   const [allLinksData, setAllLinksData] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     getLinks();
//   }, [query]);

//   //import Links from routes/links
//   async function getLinks() {
//     try {
//       const { data } = await axios.get("/routes/links");
//       setAllLinksData(data.allLinks);
//       // return data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   const updateSearch = (event) => {
//     setInput(event.target.value);
//     console.log(input);
//   };

//   const getInput = (event) => {
//     event.preventDefault();
//     setQuery(input);
//   };

//   return (
//     <div className="link-search">
//       <Card
//         style={{
//           color: "black",
//           backgroundColor: "#00fff0",
//           width: "600px",
//         }}
//       >
//         <Card.Title
//           style={{
//             fontSize: "36px",
//             paddingTop: "9px",
//           }}
//         >
//           <h1>Linkerator</h1>
//         </Card.Title>
//         <Card.Img
//           style={{ padding: "18px" }}
//           src="https://picsum.photos/600/150"
//         />
//         <Card.Body>
//           <form onSubmit={getInput} className="search-form">
//             <input
//               className="search-bar"
//               type="text"
//               placeholder="enter keywords..."
//               value={input}
//               onChange={updateSearch}
//             />
//           </form>
//           <button className="search-button" type="submit">
//             {" "}
//             Search
//           </button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default SearchBar;
