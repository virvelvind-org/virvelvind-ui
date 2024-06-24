import { default as image } from "./images/location-dot-sharp-thin.png";

const LocationIcon = (props: { className?: string }) => {
  return (
    <img src={image.src} alt="Location icon" className={props.className} />
  );
};

export default LocationIcon;
