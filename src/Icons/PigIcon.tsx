import { default as image } from "./images/pig-sharp-thin.png";

const PigIcon = (props: { className?: string }) => {
  return (
    <img src={image.src} alt="Location icon" className={props.className} />
  );
};

export default PigIcon;
