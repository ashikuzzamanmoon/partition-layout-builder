/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import "react-resizable/css/styles.css";

const Partition = ({
  id,
  direction,
  children = [],
  color,
  onSplit,
  onRemove,
}) => {
  const isLeaf = children.length === 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "H" ? "row" : "column",
        width: "100%",
        height: "100%",
        position: "relative",
        border: "1px solid #000",
      }}
    >
      {isLeaf ? (
        <div
          style={{
            backgroundColor: color,
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <button
              onClick={() => onSplit(id, "H")}
              style={{ marginRight: 10 }}
            >
              H
            </button>
            <button
              onClick={() => onSplit(id, "V")}
              style={{ marginRight: 10 }}
            >
              V
            </button>
            <button onClick={() => onRemove(id)}>Remove</button>
          </div>
        </div>
      ) : (
        children.map((child) => (
          <div
            key={child.id}
            style={{
              flexGrow: 1,
              flexBasis: 0,
              display: "flex",
            }}
          >
            <Partition
              id={child.id}
              direction={child.direction}
              children={child.children}
              color={child.color}
              onSplit={onSplit}
              onRemove={onRemove}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Partition;
