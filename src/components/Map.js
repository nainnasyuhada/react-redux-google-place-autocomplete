import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useEffect, useState } from "react";
import "../App.css";
import { Spin } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getGeocodes } from "../redux/actions/geocodes";
import data from "../assets/geocodes.json";

const Map = (props) => {

    const [result, setResult] = useState({});
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const dispatch = useDispatch();
    const geocodes = useSelector((state) => state.geocodes.geocodes);

    useEffect(() => {
        dispatch(getGeocodes(props.data));

         /** Data testing from local file using actual result */
        // setResult({ data});

        setResult({geocodes});
        setLatitude(result.data.results[0].geometry.location.lat);
        setLongitude(result.data.results[0].geometry.location.lng);
      }, []);

      console.log(result.data.results[0].geometry.location.lng)

      console.log("latitude: ", latitude, "longitude: ", longitude);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  
  const center = useMemo(() => ({ lat: 3.1319, lng: 101.6841 }), []);

  return (
    <div >
      {!isLoaded ? (
       <Spin tip="Loading..." size="large"/>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
        <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;