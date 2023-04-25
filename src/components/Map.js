import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "../App.css";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getGeocodes } from "../redux/actions/geocodes";
import data from "../assets/geocodes.json";
import Error from "./Error";

const Map = (props) => {
  const [result, setResult] = useState({});
  const [status, setStatus] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const dispatch = useDispatch();
  const geocodes = useSelector((state) => state.geocodes.geocodes);

  useEffect(() => {
    dispatch(getGeocodes(props.data));

    /** Data testing from local file using actual result */
    // setResult(data);
   
    setResult( geocodes );
    setLatitude(result.results[0].geometry.location.lat);
    setLongitude(result.results[0].geometry.location.lng);
    setStatus(result.status);
    
  }, [result]);

 


  const center = { lat: latitude, lng: longitude };

  return (
    <div>
      {!isLoaded ? (
        <Spin tip="Loading..." size="large" />
      ) : status === "OK" ? (
        <GoogleMap
          mapContainerStyle={{
            width: "50%",
            height: "500px",
            position: "relative",
            margin: "auto",
          }}
          center={center}
          zoom={13}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
       <Error/>
      )}
    </div>
  );
};

export default Map;