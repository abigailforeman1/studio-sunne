import Image from "next/legacy/image";
import studioSunneLogo from "../../public/studio-sunne-logo.png";

export default function StudioSunneLogo() {
  return <Image src={studioSunneLogo} layout="responsive" priority={true} />;
}
