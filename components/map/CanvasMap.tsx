import { useRef, useState } from "react";

const CanvasMap = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coordinates, setCoordinates] = useState<{x: number, y: number}[]>([]);
  const [PlaceInArray, SetPlaceInArray] = useState(0);
  

  const handleClick = (event : any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = (canvasRef.current).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(`Clicked at coordinates: (${x}, ${y})`);

    setCoordinates(prevCoordinates => [...prevCoordinates, {x, y}]);


    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
  }


  return (
    <>
          <canvas
        ref={canvasRef}
        width={500}
        height={400}
        onClick={handleClick}
        className="border-2 border-red-500"
      />

      <div>
        <h2>Coordinates</h2>
        <ul>
          {coordinates.map((coordinate, index) => (
            <li key={index}>
              {`(${coordinate.x}, ${coordinate.y})`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CanvasMap;