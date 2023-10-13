//Form for the posts of journal entries
import React, { useState, useEffect } from "react";
import '../index.css';

function Posts() {
  const [firstName, setFirstName] = useState("first name");
  const [lastName, setLastName] = useState("last name");
  const [text, setText] = useState("Dear diary...");
  const [dbjson, setData] = useState([]);

  const getData = async() => {
    const response = await fetch('http://localhost:4000/Posts')
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {getData()}, []);

  const renderedPosts = dbjson.map((info) => (
      <div key={info.id}>
        <br></br>
        <p>{info.FirstName} {info.LastName} </p>
        <p>{info.Text}</p>
      </div>
  ))

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { FirstName: firstName, LastName: lastName, Text: text};
    fetch('http://localhost:4000/Posts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then((response) => response.json())
    .then((info)=> {
      const dataArray = [...dbjson, info];
      setData(dataArray);
    })
    setFirstName("");
    setLastName("");
    setText("");
  }

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <br></br>
        <input type="text" onChange={handleTextChange} value={text} />
        <button type="submit">Submit</button>
      </form>
      {renderedPosts}
    </div>
  );
}

export default Posts;