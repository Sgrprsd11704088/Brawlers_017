import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description: "Project IDS",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description: "Project IDS",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    description: "Project IDS",
  },
];

const CustomTable = () => {
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      dataSource={data}
    />
  );
};

export default CustomTable;
