import { Avatar } from "../ui";
import img from "@/assets/images/avatar.png";

const AvatarPreview = () => {
  return <Avatar src={img} alt="AH" variant="rounded" size={160} />;
};

export default AvatarPreview;
