import CustomTable from "./components/CustomTable";

const Users = ({ columns, data }) => {
  return (
    <>
      <h1>Students</h1>

      <div className="mt-3">
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Users;
