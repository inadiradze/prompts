import { Loader } from "@mantine/core";
import "@mantine/core/styles.css";

import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader color="rgba(255, 255, 255, 1)" type="dots" />
    </div>
  );
};

export default Loading;
