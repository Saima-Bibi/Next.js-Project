'use client'
import React, { useRef, useState } from 'react';

export default function UploadBox() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); 
    }
  };

  return (
    <>
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white border-2 border-dashed border-red-700 rounded-2xl w-80 max-w-md h-30 flex flex-col items-center justify-center space-y-3 p-4">
      
    
    
     
        <p className="text-sm text-gray-500 font-medium">{fileName === null  ?  'Select Document Folder To Translate': fileName} </p>
     
        
     
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
         webkitdirectory=""
          directory=""
      />

      <button
        onClick={handleButtonClick}
        className="bg-red-600 text-white text-sm px-4 py-1 rounded-xl hover:bg-red-700 transition"
      >
        Choose Folder
      </button>
      
    </div>
    </>
  );
}
