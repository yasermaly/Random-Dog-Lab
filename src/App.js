import React from "react";
import "./App.css";
import DogDisplay from "./components/DogDisplay";
import Button from "./components/Button";

function App() {
  const [dog, setDog] = React.useState({});
  // make fetch request and store response
  const handleSubmit = async () => {
    const URL = "https://dog.ceo/api/breeds/image/random";

    let res = await fetch(URL);
    // Parse JSON response into a javascript object
    let json = await res.json();

    setDog(json);
  };

  //This will run on the first render but not on subsquent renders
  React.useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Photo Generator</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      <DogDisplay dog={dog} />
    </div>
  );
}

export default App;
