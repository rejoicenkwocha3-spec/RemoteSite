import Image from "next/image";

export default function RemoteSiteLogo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/logo.jpg"
      alt="RemoteSite"
      width={size}
      height={size}
      style={{ borderRadius: "8px", objectFit: "contain" }}
      priority
    />
  );
}
