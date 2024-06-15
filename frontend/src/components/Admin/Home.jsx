import Card from "./components/Card";

const Home = ({ diffContent }) => {
  return (
    <div className="d-flex flex-wrap gap-5">
      {diffContent.map((cont) => {
        return <Card key={cont.id} title={cont.title} amount={cont.amount} />;
      })}
    </div>
  );
};

export default Home;
