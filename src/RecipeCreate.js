import React, { useState } from "react";


function RecipeCreate({ addRecipe }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  // Handles changes in form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData); // Call the addRecipe function with form data
    setFormData({ name: "", cuisine: "", photo: "", ingredients: "", preparation: "" }); // Reset form
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                placeholder="URL"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
