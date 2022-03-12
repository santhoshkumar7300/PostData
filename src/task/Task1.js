import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

export default function Task() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "scheme1",
      sub_scheme: [
        { sub_id: 1, sub_name: "Test1" },
        { sub_id: 2, sub_name: "Test2" },
      ],
    },
    {
      id: 2,
      name: "scheme2",
      sub_scheme: [
        { sub_id: 3, sub_name: "Test3" },
        { sub_id: 4, sub_name: "Test4" },
      ],
    },
  ]);

  const [handleCheck, setHandleCheck] = useState({
    group: [],
    items: [],
  });

  const groupHandle = (groupData, itemsData) => {
    let filterGroup,
      filterItems = itemsData.map((e) => e.sub_id);
    console.log(filterItems, "------clone");
    if (handleCheck.group.includes(groupData)) {
      filterGroup = handleCheck.group.filter((e) => e !== groupData);
      filterItems = handleCheck.items.filter((e) => !filterItems.includes(e));
      console.log(filterItems);
      setHandleCheck({
        ...handleCheck,
        group: filterGroup,
        items: filterItems,
      });
    } else {
      setHandleCheck({
        ...handleCheck,
        group: [...handleCheck.group, groupData],
        items: [...handleCheck.items, ...itemsData.map((e) => e.sub_id)], // convert array of objects to array of values
      });
    }
    console.log(handleCheck.group);
  };

  const itemsHandle = (itemsData, groups) => {
    let filterItems;
    let refGroupId = groups.sub_scheme.map((e) => e.sub_id);
    console.log(refGroupId, "===refid");

    if (handleCheck.items.includes(itemsData)) {
      let filterGrpId = handleCheck.group;
      filterItems = handleCheck.items.filter((e) => e !== itemsData);
      console.log(filterItems, "=====id");

      // let removeId = refGroupId.filter((e) => filterItems.includes(e));
      // if (removeId.length === 0) {
      //   filterGrpId = handleCheck.group.filter((e) => e !== groups.id);
      // }
      let removeId = refGroupId.some((e) => filterItems.includes(e));
      if (!removeId) {
        filterGrpId = handleCheck.group.filter((e) => e !== groups.id);
      }

      setHandleCheck({
        ...handleCheck,
        group: filterGrpId,
        items: filterItems,
      });
    } else {
      setHandleCheck({
        ...handleCheck,
        items: [...handleCheck.items, itemsData],
      });
    }
    console.log(handleCheck.items);
  };

  console.log(handleCheck);
  return (
    <div className="container mt-5">
      {data.map((groups) => (
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Form.Check
                inline
                id="heading"
                name="heading"
                type={"checkbox"}
                checked={handleCheck.group.includes(groups.id)}
                onChange={(e) => groupHandle(groups.id, groups.sub_scheme)}
              />
              {groups.name}
            </Accordion.Header>
            {groups.sub_scheme.map((MapItems, index) => (
              <Accordion.Body alwaysOpen>
                <Form.Check
                  inline
                  id="value1"
                  name="value1"
                  checked={handleCheck.items.includes(MapItems.sub_id)}
                  onChange={(e) => itemsHandle(MapItems.sub_id, groups)}
                  type={"checkbox"}
                />
                {MapItems.sub_name}
              </Accordion.Body>
            ))}
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}
