import { rectangleformula } from "../utility/general";
function AreaOfrectangle() {
  const length = 5;
  const width = 6;
  const newarea = rectangleformula(length, width);

  return (
    <div>
      <h1>
        {" "}
        Area of rectangle is {newarea} where having length {""} <b>{length}m</b>{" "}
        and width {""}
        <b>{width}m</b>
      </h1>
      <rectangleformula />
    </div>
  );
}
export default AreaOfrectangle;
