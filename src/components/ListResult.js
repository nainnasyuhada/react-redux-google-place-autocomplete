import "../App.css";
import { List } from "antd";
import { useState, useEffect } from "react";
import { EnvironmentTwoTone } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";
import Map from "./Map";

const ContainerHeight = 400;

const ListResult = (props) => {
  const [places, setPlaces] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setPlaces(props.data.predictions);
  }, []);


  const appendData = () => {};

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  const selectLocation = (value) => {
    // to find geocode
    setSelectedLocation(value);
    setShowMap(true);
  };

  return (
    <div>
      <List>
        <VirtualList
          data={places}
          height={ContainerHeight}
          onScroll={onScroll}
          className="SearchList"
        >
          {(item) => (
            <List.Item
              key={item.place_id}
              onClick={selectLocation(item.description)}
            >
              <List.Item.Meta
                avatar={<EnvironmentTwoTone style={{ fontSize: "24px" }} />}
                title={item.description}
                description={item.structured_formatting.secondary_text}
              />
            </List.Item>
          )}
        </VirtualList>
      </List>

      {!showMap ? null :  <Map data={selectedLocation} /> }
    </div>
  );
};

export default ListResult;
