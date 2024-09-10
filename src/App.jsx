/* eslint-disable react/no-children-prop */
import { useState } from "react";
import Partition from "./components/Partition";

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [partitions, setPartitions] = useState([
    { id: 1, direction: null, children: [], color: getRandomColor() },
  ]);

  // Recursive function to split partitions
  const handleSplit = (id, direction) => {
    setPartitions((prevPartitions) => {
      const splitPartition = (partitions) => {
        return partitions.map((partition) => {
          if (partition.id === id) {
            const newPartition = {
              id: Date.now() + Math.random(), // Ensure unique ID
              direction: null,
              children: [],
              color: getRandomColor(),
            };
            return {
              ...partition,
              direction,
              children: [partition, newPartition],
            };
          } else if (partition.children.length > 0) {
            return {
              ...partition,
              children: splitPartition(partition.children),
            };
          }
          return partition;
        });
      };
      return splitPartition(prevPartitions);
    });
  };

  // Recursive function to remove partitions
  const handleRemove = (id) => {
    setPartitions((prevPartitions) => {
      const removePartition = (partitions) => {
        return partitions
          .filter((partition) => partition.id !== id)
          .map((partition) => ({
            ...partition,
            children: removePartition(partition.children),
          }));
      };
      return removePartition(prevPartitions);
    });
  };

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
      {partitions.map((partition) => (
        <Partition
          key={partition.id}
          id={partition.id}
          direction={partition.direction}
          children={partition.children}
          color={partition.color}
          onSplit={handleSplit}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default App;
