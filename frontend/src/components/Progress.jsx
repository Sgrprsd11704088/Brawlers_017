const Progress = ({ goalAmount, currentAmount }) => {
  return (
    <div>
      <h2>Progress</h2>
      <progress value={(currentAmount / goalAmount) * 100} max="100"></progress>
      <p>{Math.floor((currentAmount / goalAmount) * 100)}%</p>
    </div>
  );
};

export default Progress;
