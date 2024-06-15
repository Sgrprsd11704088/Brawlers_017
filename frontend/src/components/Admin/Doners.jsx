import CustomTable from "./components/CustomTable";

const Doners = ({ columns, data }) => {
  return (
    <>
      <h1>Doners</h1>

      <div className="mt-3">
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Doners;
