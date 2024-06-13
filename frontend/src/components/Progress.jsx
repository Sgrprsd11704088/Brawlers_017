import { useState, useEffect } from "react";
import socket from "../services/socket";

const Progress = ({ projectId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    socket.on("progress", (data) => {
      if (data.projectId === projectId) {
        setProgress((data.currentAmount / data.goalAmount) * 100);
      }
    });

    return () => {
      socket.off("progress");
    };
  }, [projectId]);

  return (
    <div>
      <h2>Progress</h2>
      <progress value={progress} max="100"></progress>
      <p>{progress.toFixed(2)}%</p>
    </div>
  );
};

export default Progress;
