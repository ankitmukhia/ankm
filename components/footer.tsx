import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex gap-16 items-center justify-center">
      <div className="gradient-circle" />

      <Image
        src="/signature.svg"
        alt="signature"
        className="absolute"
        width={150}
        height={150}
        priority
      />

      <div className="gradient-circle -mt-20" />
    </div>
  );
};
