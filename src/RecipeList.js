import React from "react";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, deleteRecipe}) {
  const handleDelete = (index) => {
    deleteRecipe(index);
  } 
    
  // TODO: Display the list of recipes using the structure of table that is provided.

  // TODO: Create at least one additional component that is used by this component.
  
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th >Ingredients</th>
            <th >Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              key={index}
              index={index}
              recipe={recipe}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
   </div>
  );
}


export default RecipeList;
