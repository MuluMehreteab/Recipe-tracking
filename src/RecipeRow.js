import React from "react";

function RecipeRow({ recipe, index, handleDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>{              <img
                src={recipe.photo}
                alt={recipe.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />}</td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
       <td>
        <button name="delete" onClick={() => handleDelete(index)}>Delete</button>
      </td>
    </tr>
  );
}

export default RecipeRow;

