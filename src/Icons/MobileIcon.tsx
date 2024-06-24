import { default as image } from "./images/mobile-button-sharp-thin.png";

const MobileIcon = (props: { className?: string }) => {
  return (
    <img src={image.src} alt="Location icon" className={props.className} />
  );
};

export default MobileIcon;
