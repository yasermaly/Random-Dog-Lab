import React from "react";
import "./App.css";
import DogDisplay from "./components/DogDisplay";
import Button from "./components/Button";

function App() {
  const [dog, setDog] = React.useState(null);
  // make fetch request and store response
  const handleSubmit = async () => {
    const URL = "https://dog.ceo/api/breeds/image/random";

    let res = await fetch(URL);
    // Parse JSON response into a javascript object
    let data = await res.json();

    setDog(data.message);
  };

  return (
    <div className="App">
      <h1>Random Dog Photo Generator</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      <DogDisplay dog={dog} />
    </div>
  );
}

export default App;
