import React, { useState } from "react";
import { uploadFile } from "react-s3";

window.Buffer = window.Buffer || require("buffer").Buffer;

const FormImages = ({ administrationForm, setAdministrationForm }) => {
  const [title, setTitle] = useState([]);
  const [imageAws, setImageAws] = useState([]);

  const config = {
    bucketName: process.env.REACT_APP_S3_BUCKET,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  };

  const handleChangeT = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeI = (e) => {
    uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data);
        setImageAws(data.location)
      })
      .catch((err) => console.error(err));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setAdministrationForm({
      ...administrationForm,
      images: [...administrationForm.images, { title: title, url: imageAws }],
    });
  };

  const handleDelete = (e) => {
    const deleteImage = administrationForm.images.filter(
      (data, index) => index.toString() !== e.target.id
    );
    setAdministrationForm({ ...administrationForm, images: deleteImage });
  };

  return (
    <>
      <p className="generalContainer__divInput__p">
        En la foto que se quiere para la portada, ponerle "principal" de título
      </p>
      <form className="generalContainer" onSubmit={(e) => handleUpload(e)}>
        <div className="generalContainer__divInput">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChangeT}
            required
          />
        </div>
        <div className="generalContainer__divInput">
          <label htmlFor="image">Subir imágenes</label>
          <input type="file" id="image" name="image" multiple onChange={handleChangeI} required />
        </div>
        <button className="imageBtn">Cargar imagen</button>
      </form>
      <div className="generalImagesContainer">
        {administrationForm.images.map((image, index) => {
          return (
            <div className="imagesDiv" key={index.toString()}>
              <h4 className="imagesDiv__h4">{image.title}</h4>
              <img key={index.toString()} src={image.url} alt={image.title}></img>
              <button className="imagesDiv__btn" id={index} onClick={(e) => handleDelete(e)}>
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FormImages;
