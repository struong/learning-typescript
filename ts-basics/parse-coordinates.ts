interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// unknown is any where you have to cast it before you use it (like a safe any)
// arg2? means it's optional, it could be null
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 == "object") {
    // arg1 is defined as unknown, need to use the as keyword to cast it
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 == "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));
