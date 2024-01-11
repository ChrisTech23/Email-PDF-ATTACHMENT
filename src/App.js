import './App.css';
import React, {useState} from 'react';
const App = () => {
  const [base64, setBase64] = useState("");

  const onChange = (e) => {
    const files = e.target.files;
    const file = file[0];
    getBase64(file)
  }

  const onLoad = (fileString) => {
    setBase64(fileString)
  }

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      onLoad(reader.result)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://hqmb404be7.execute-api.us-east-1.amazonaws.com/sendEmail", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        senderName: "papaburner223@gmail.com",
        senderEmail: "papaburner223@gmail.com",
        message: "HELLO WORLD THIS IS FROM REACT APP P.S LEBRON IS THE GOAT",
        base64Data: base64,
        date: new Date(),
        fileName: "TEST_FILE_NAME"
      })
    })
  }


  return (
     <div className="App">
      <form>
        <input type="file" accept="application/pdf" onChange={onChange}/>
      </form>
       <button onClick={handleSubmit}>SEND TO LAMBDA</button> 
    </div>
  );
};

export default App;
