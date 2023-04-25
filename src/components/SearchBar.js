import "../App.css";
import { Input, AutoComplete } from "antd";
import { useState, useEffect } from "react";
import { getPlaces } from "../redux/actions/places";
import Header from "./Header";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import ListResult from "./ListResult";
import data from "../assets/places.json";
import Error from "./Error";
import { CloseCircleFilled } from "@ant-design/icons";

const { Search } = Input;
const { Option } = AutoComplete;

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    /** Data testing from local file using actual result */
    // setResult({ data});
    // setStatus(data.status);
  }, []);

  const searchLocation = (e) => {
    setKeyword(e);

    // call getPlaces action for API fetching
    dispatch(getPlaces(keyword));

    // set value in state from reducer store
    setStatus(places.status);

    // assign result to autocomplete option list with key and value
    const optionValues = places.predictions.map((description) => (
      <Option key={description.description} value={description.description}>
        {description}
      </Option>
    ));

    setOptions(optionValues);
    setShowResult(true);
  };

  const selectLocation = (value) => {
    // to find geocode
    setSelectedLocation(value);
    setShowMap(true);
  };

  const onFieldClear = () => {
    setShowResult(false);
    setKeyword(null);
  };

  return (
    <div className="App">
      <Header />

      {/* Using Input & List Component fron AntDesign */}
       {/* <Search
        allowClear={{ clearIcon: <CloseCircleFilled onClick={onFieldClear} /> }}
        className="SearchBar"
        enterButton
        onChange={(event) => searchLocation(event.target.value)}
        placeholder="Enter a location"
      /> 

      {!showResult ? null : status === "OK" ? (
        <ListResult data={places} />
      ) : (
        <Error />
      )}  */}

      {/* Using Autocomplete Component from AntDesign */}
      <AutoComplete
        allowClear={{ clearIcon: <CloseCircleFilled onClick={onFieldClear} /> }}
        options={options}
        className="SearchBar"
        filterOption={true}
        placeholder="Enter a location"
        // onChange={searchLocation}
        onSearch={searchLocation}
        onSelect={selectLocation}
      />

      {!showMap ? null : <Map data={selectedLocation} />}
    </div>
  );
};

export default SearchBar;
