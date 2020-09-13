import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddLink from "./AddLink";
import LinkListings from "./LinkListings";
import "./App.css";

const App = () => {
  const [createdLink, setCreatedLink] = useState({});

  return (

    <div className="App">
      <AddLink setCreatedLink={setCreatedLink} />
      <LinkListings createdLink={createdLink} />
    </div>

  );
};

export default App;
