import './App.css';
import { Component } from "react";

class App extends Component {
state= {
  content: null,
  author: null
}

async componentDidMount() {
  const url = "https://api.quotable.io/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
}

render() {
  return (
    <div>
      
    </div>
  );
}
}

export default App;
