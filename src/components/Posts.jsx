//Form for the posts of journal entries
import React, { useState, useEffect } from "react";

function Post() {
  const [firstName, setFirstName] = useState("first name");
  const [lastName, setLastName] = useState("last name");
  const [text, setText] = useState("Dear diary...");
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const url = "http://localhost:4000/Posts";
      try{
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
      } catch(error){
        console.error("Error occured", error);
        return null;
      }
    }
    fetchPost();
  }, []);

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
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <br></br>
        <input type="text" onChange={handleTextChange} value={text} />
        <button type="submit">Submit</button>
      </form>
      {listOfSubmissions}
    </div>
  );
}

export default Post;