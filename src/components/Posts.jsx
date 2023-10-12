//Form for the posts of journal entries
import React, { useState, useEffect } from "react";

function Posts() {
  const [firstName, setFirstName] = useState("first name");
  const [lastName, setLastName] = useState("last name");
  const [text, setText] = useState("Dear diary...");
  const [submittedData, setSubmittedData] = useState([]);
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
        {info.firstName} {info.lastName} 
        <br></br>
        {info.text}
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
    const formData = { firstName: firstName, lastName: lastName, text: text};
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setText("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        <br></br>
        {data.firstName} {data.lastName} 
        <br></br>
        {data.text}
      </div>
    );
  });

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <br></br>
        <input type="text" onChange={handleTextChange} value={text} />
        <button type="submit">Submit</button>
      </form>
      {/* {renderedPosts} */}
      {listOfSubmissions}
    </div>
  );
}

export default Posts;