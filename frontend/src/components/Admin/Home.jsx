import ProjectList from "../ProjectList";
import Card from "./components/Card";

const Home = ({ diffContent }) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-5 mb-3 justify-content-evenly">
        {diffContent.map((cont) => {
          return <Card key={cont.id} title={cont.title} amount={cont.amount} />;
        })}
      </div>

      <ProjectList color={"white"} />
    </>
  );
};

export default Home;
