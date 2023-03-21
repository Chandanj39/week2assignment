import "./styles.css";
import { createNoise2D } from "simplex-noise";

const dotSize = 10;
const dotSpacing = 3;

const RandomVal = new Array(101)
  .fill(0)
  .map((d, i) => i)
  .filter((d, i) => d % 2 === 0);

const noise = new createNoise2D();

export default function App() {
  return (
    <div className="App">
      {RandomVal.map((val, i) => {
        const xPos = i * (dotSize + dotSpacing) + dotSpacing;
        const yPos =
          (10 - noise(i, 1)) * (window.innerHeight / 11 - dotSize - dotSpacing);
        const dotStyle = {
          position: "absolute",
          left: xPos,
          top: yPos,
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: "red"
        };
        return <div key={i} style={dotStyle} />;
      })}
    </div>
  );
}
