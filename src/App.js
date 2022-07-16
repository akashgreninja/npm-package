import React, { useRef, useState} from "react";
import './App.css';

function App() {
  const filePickerRef = useRef();

  const ImageHandler = () => {
    filePickerRef.current.click();
  };
  const [image, setimage] = useState()
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const changeHandle=(e)=>{
    if (e.target.files && e.target.files.length===1){
      const pickedfile = e.target.files[0];
      setimage(pickedfile);
      console.log(image)
      let reader = new FileReader();
      reader.onloadend = function() {
        console.log(reader.result)
    }
    reader.readAsDataURL(pickedfile);
  
    } 

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept='.jpg,.png,.jpeg' onChange={changeHandle}     style={{ display: "none" }}  ref={filePickerRef}/>
      <button type="button" onClick={ImageHandler}>
          Pick image
        </button>
    </form>
  );
}

export default App;
