import Image from "next/image";

export const CornerImage = ({ className }: { className: string }) => (
  <Image
    src="/corner-decoration2.png"
    alt="decoration"
    width="48"
    height="48"
    className={className}
    priority
  />
);