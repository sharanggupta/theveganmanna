import React, { useState, useEffect } from "react";
import { Avatar, Spin } from "antd";
import { Storage } from "aws-amplify";

const ListImage = ({ image }: { image: string }) => {
  const [url, setUrl] = useState(null);

  const fetchImage = async () => {
    const signedUrl: any = await Storage.get(image);
    setUrl(signedUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return url ? <Avatar src={url} /> : <Spin />;
};

export default ListImage;
