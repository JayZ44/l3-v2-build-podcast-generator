import React from "react";

export const ImageUpload = () => {
  return (
    <div>
      <input
        type="file"
        accept=".pdf,.doc,.docx,image/*" // Accepts PDFs, Word docs, and all images
        onChange={(event) => {
          const file = event.target.files[0];
        }}
      />
    </div>
  );
};
