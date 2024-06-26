import { useState } from "react";

function ProductForm() {
  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      name: newName,
      image: newImage,
      price: newPrice,
      description: newDescription,
    }

    alert(JSON.stringify(newData))

    setNewName("");
    setNewImage("");
    setNewPrice("");
    setNewDescription("");
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={newName}
            onChange={(event) => {setNewName(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={newImage}
            onChange={(event) => {setNewImage(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={newPrice}
            onChange={(event) => {setNewPrice(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={newDescription}
            onChange={(event) => {setNewDescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
