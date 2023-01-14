import userData from "./data.json";
import GridItem from "./GridItem";

export default function Grid(props) {
  const userInfo = userData.map((data) => {
    return (
      <GridItem
        key={data.title}
        title={data.title}
        current={data.timeframes[props.time].current}
        prev={data.timeframes[props.time].previous}
        bgColor={data.color}
      />
    );
  });
  return <div className="grid-component">{userInfo}</div>;
}
