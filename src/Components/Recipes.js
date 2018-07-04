import React from "react";

const Recipes = props => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {props.recipes.map(recipe => {
            return (
              <div key={recipe.title}  className="col-md-4" style={{ marginBottom:"2rem"}}>
                <div className="recipe__box">
                  <img
                    className="recipe__box-img"
                    src={recipe.image_url}
                    alt={recipe.title}
                  />
                  <div className="recipe__text">
                    <h5 className="recipe__title">{recipe.title}</h5>
                    <p className="recipe__subtitle">Publisher: <span>
                    {recipe.publisher}</span>
                    </p>
                  </div>
                  <button type="button" className="btn btn-info">View Recipe</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
