import avatar from "../../../assets/media/images/Ellipse_1.png";
const Avatar = () => {
  const size = "32px";
  return (
    <img
      src={avatar}
      alt="avatar"
      className="w-8 h-8"
      width={size}
      height={size}
    />
  );
};
export default Avatar;
