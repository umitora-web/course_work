import React from 'react'
import styled from "styled-components";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '400px'
}

const center = {
    lat: 50.4903769677649,
    lng: 30.74062911509908,
}

const Contact = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:    "AIzaSyAAsR9qnK0tfMgt2qQoTXVi1Iqdqs9O3Ic",
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return (
        <ContactsContainer>
            <div className="left">
                <h1>Електронна пошта</h1>
                <p>mil.gov@gmail.com</p>
                <h1>Номер телефону</h1>
                <p>+380688635426</p>
                <h1>Адреса</h1>
                <p>м. Київ , вул. Миру 131, буд. 16, метро Арсенальна</p>
            </div>
            <div className="right">
                {isLoaded ? <div className="modal__map">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        zoom={17}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </div>
                : <></>
                }
            </div>
        </ContactsContainer>
    );
}

const ContactsContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start; 
  flex-wrap: wrap; 

  .left,
  .right {
    box-sizing: border-box;
  }

  .left {
    flex: 1; 
    max-width: 400px; 
    p {
      cursor: pointer;
    }
  }

  .right {
    flex: 1; 
    max-width: 1000px; 
    width: 100%;
  }

  
  @media (max-width: 1024px) {
    .left,
    .right {
        padding-left:40px;
      // Allow the content to stack on top of each other in a column layout
      max-width: none;
      width: auto; 
    }

    .right {
      order: -1;
    }
  }

  
  @media (max-width: 768px) {
    padding: 20px; 
    flex-direction:column;
    .left,
    .right {
      width: 100%;
    }
  }
`;
export default React.memo(Contact);