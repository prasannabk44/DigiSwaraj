import "./FullWidthImage.scss";
import { Row, Col } from "react-bootstrap";
import React from "react";

export default function FullWidthImage({
  alt,
  src,
  imgClass,
  ...otherProps
}: {
  [key: string]: string;
}) {
  return (
    <div>
      <img alt={alt} src={src} className={imgClass} {...otherProps} />
    </div>
  );
}
