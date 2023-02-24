import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";

const PhotoUploader = (props) => {
  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "dmrjwfy5m",
      tags: [tag],
      uploadPreset: "yedazovb",
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === "success") {
          props.setImage(photos.info.secure_url);
        }
      } else {
        console.log(error);
      }
    });
  };
  return (
    <div style={{ color: "white" }} className="Main">
      {!props.image ? (
        <input
          type="button"
          style={{ cursor: "pointer" }}
          value="Choisir une photo"
          onClick={() => beginUpload()}
        />
      ) : (
        <div style={{ color: "black", display: "flex", gap: 36 }}>
          <Button onClick={() => props.setImage(null)}>Supprimer</Button>
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
