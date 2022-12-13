/* eslint-disable no-undef */
import React, { useState } from 'react'
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import {
  imgWifi,
  imgAirCond,
  imgParking,
  imgKitchen,
  imgPet,
  imgPool,
  imgTv,
} from '../../styleAux/fontAwesoneIcon';

import "../../styles/products/productsMap.css";

const containerStyle = {
  borderRadius: "10px",
  width: "90%",
  height: "400px"
}

function Map(product) {
  
  const center = {
    lat: parseFloat(product.latitud),  lng: parseFloat(product.longitud)  
  };

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if(marker === activeMarker){
      return;
    } 
    setActiveMarker(marker);
  };

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyAhXsWTDv3xCT9_SOLJAnlAy5WHFcFZUTc'
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle= {containerStyle}
        zoom={18}
        center={center}
      >
        <Marker
          position={center}
          onClick={ handleActiveMarker }
        >
          {activeMarker && (
          <InfoWindow
            onCloseClick={ ()=> setActiveMarker(null)} 
            position={center}
          >
            <div className='divStyle'>
              {
              product.name ? 
              <h3>{product.name}</h3>:
              <div>
                <h3>{product.nombre}</h3>
                <hr /><br />
              </div>
              }
              {
              product.caracteristica ?
                <div className='listImageCard__characteristics__icons'>
                  {product.caracteristica.airConditioning && imgAirCond}
                  {product.caracteristica.freeParking && imgParking}
                  {product.caracteristica.kitchen && imgKitchen}
                  {product.caracteristica.petsAllowed && imgPet}
                  {product.caracteristica.pool && imgPool}
                  {product.caracteristica.tv && imgTv}
                  {product.caracteristica.wifi && imgWifi}          
                </div> : 
                <div>
                  <p> {product.paginaWeb}
                  </p>
                </div>
             
              }
              {
                product.domicilio ?
                <p>{product.domicilio}</p> :
                <p>{product.direccion}</p>
              }
              <p>{product.ciudad.city}, {product.ciudad.pais.pais}</p>
            </div>
          </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </LoadScript>
  )
}
export default React.memo(Map)