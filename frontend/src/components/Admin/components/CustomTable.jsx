import { Table } from "antd";

const CustomTable = ({ columns, data, expand }) => {
  return (
    <Table
      columns={columns}
      expandable={
        expand && {
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
        }
      }
      dataSource={data}
    />
  );
};

export default CustomTable;
