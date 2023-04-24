import "../App.css";
import { Input } from "antd";
import { useState, useEffect } from "react";
import { getPlaces } from "../redux/actions/places";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import ListResult from "./ListResult";
import data from '../assets/data.json'
import Error from "./Error";
import { CloseCircleFilled } from "@ant-design/icons";


const { Search } = Input;

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState({});
  const [status, setStatus] = useState('');
  const [showResult, setShowResult] = useState(false);

  const dispatch = useDispatch();
  const places = useSelector(state => state.places.places);
  const loading = useSelector(state => state.places.loading);
  const error = useSelector(state => state.places.error);

  console.log(showResult, keyword)

useEffect(()=>{
  /** Data testing from local file using actual result */ 
  // setResult({ data});
  // setStatus(data.status);
}, [])

const searchLocation = (e) => {
  setKeyword(e);

  // call getPlaces action for API fetching
  dispatch(getPlaces(keyword));

  // set value in state from reducer store
  setStatus(places.status);
  setResult({ places});
  setShowResult(true);

}

const onFieldClear = () => {
  setShowResult(false);
  setKeyword(null);
};
 

  return (
    <div className="App">
      <Header />
      <Search
        allowClear={{ clearIcon: <CloseCircleFilled onClick={ onFieldClear } /> }}
        className="SearchBar"
        enterButton
        onChange={(event) => searchLocation(event.target.value)}
        placeholder="Enter a location"
      />

      { !showResult ? null :
     status === 'OK' ? <ListResult data={result} /> : <Error/>
   }
    </div>
  );
}



export default SearchBar;
