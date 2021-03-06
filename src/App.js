import React, { Component } from "react";
import "./App.css";

import Form from "./Components/Form";
import Recipes from "./Components/Recipes"

const API_KEY = "28c3e3e7abb77a041e9376534cfc6572";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=25`
    );

    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
  };
  
  componentDidMount = () => {
    const json = localStorage.getItem("recipes")
    const recipes =  JSON.parse(json);
    this.setState({
      recipes: recipes
    })
  }

   componentDidUpdate= () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lorenzo's Recipes</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
