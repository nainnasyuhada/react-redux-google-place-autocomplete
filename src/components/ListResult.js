import "../App.css";
import { List } from "antd";
import { useState, useEffect } from "react";
import { EnvironmentTwoTone } from "@ant-design/icons";
import VirtualList from "rc-virtual-list";

const ContainerHeight = 400;

const ListResult = (props) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(props.data.predictions);
  }, []);

  console.log(places)

  const appendData = () => {};

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
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
            <List.Item key={item.place_id}>
              <List.Item.Meta
                avatar={<EnvironmentTwoTone style={{ fontSize: "24px" }} />}
                title={item.description}
                description={item.structured_formatting.secondary_text}
              />
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default ListResult;
