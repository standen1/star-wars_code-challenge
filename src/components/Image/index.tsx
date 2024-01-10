import NextImage from "next/image";

type ImageProps = {
  className: string;
  imageClassName?: string;
  src: string;
  alt: string;
};

const Image = ({ className, imageClassName, src, alt }: ImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <NextImage className={imageClassName} src={src} alt={alt} fill={true} />
    </div>
  );
};

export default Image;
