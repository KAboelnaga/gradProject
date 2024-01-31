import React, { useState, useEffect } from 'react';
import '../Styles/upload.css';

const Upload = ({ darkMode }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];
    const inputFiles = document.querySelectorAll(".dropzone-area input[type='file']");
    
    if (inputFiles.length > 0) {
      const inputElement = inputFiles[0];
      const dropZoneElement = inputElement.closest(".dropzone-area");

      inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
          updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
        }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("dropzone--over");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
          dropZoneElement.classList.remove("dropzone--over");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("dropzone--over");
      });

      dropzoneBox.addEventListener("reset", (e) => {
        let dropzoneFileMessage = dropZoneElement.querySelector(".message");
        dropzoneFileMessage.innerHTML = `No Files Selected`;
      });

      dropzoneBox.addEventListener("submit", (e) => {
        e.preventDefault();
        const myField = document.getElementById("upload-file");
        console.log(myField.files[0]);
      });
    }
  }, []); // Empty dependency array to run once after the initial render

  const handleImageUpload = async () => {
    if (uploadedImage) {
      const formData = new FormData();
      formData.append('image_data', uploadedImage);

      try {
        const response = await fetch('http://localhost:5000/', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          const predictedClass = result['Predicted class'];
          setPrediction(predictedClass);
        } else {
          console.error('Error while sending the image to the backend.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('No image selected');
    }
  };
  function handleImageRemove(){
    updateImageSrc("#");
    setUploadedImage(null);
  }
  const handleImageChange = (event) => {
    const fileInput = event.target.files[0];
    setUploadedImage(fileInput);
    setPrediction(null);
    if (fileInput) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageDataUrl = event.target.result;
        updateImageSrc(imageDataUrl);
      };
      reader.onerror = function (error) {
        console.error("Error reading the file:", error);
      };
      reader.readAsDataURL(fileInput);
    }
  };

  function updateImageSrc(src) {
    const uploadedImage = document.getElementById("uploaded-image");
    uploadedImage.src = src;
  }

  const updateDropzoneFileList = (dropzoneElement, file) => {
    let dropzoneFileMessage = dropzoneElement.querySelector(".message");
    dropzoneFileMessage.innerHTML = `
        ${file.name}, ${file.size} bytes
    `;
  };

  return (
    <div style={darkMode}>
      <div id='container'>
        <form className="dropzone-box">
        <h2>Upload Xray for diagnosis</h2>
        <p>
            Attach your xray
        </p>
        <div className="dropzone-area">
            <p className={`${uploadedImage !== null? 'hidden': ''}`}>Click to upload or drag and drop</p>
            <div id='imageContainer'>
            <img id="uploaded-image" src="#" alt="" />
            </div>
            <input type="file" required id="upload-file" name="xray" accept="image/*" onChange={handleImageChange}/>
            <p className="message">No Files Selected</p>
        </div>
        <div className="dropzone-actions">
            <button id='resetButton' type="reset" className={`${darkMode === 'true' ? 'dark' : 'light'}`} onClick={handleImageRemove}>
                Remove
            </button>
            <button id="submit-button" type="submit" className={`${darkMode === 'true' ? 'dark' : 'light'}`} onClick={handleImageUpload}>
                Upload
            </button>
        </div>
        </form>
      </div>
      {prediction !== null && (
        <div>
          <h2>AI Model Prediction:</h2>
          <p>{prediction}</p>
        </div>
      )}
      <div id='uploadSpace'></div>
    </div>
  );
};

export default Upload;
