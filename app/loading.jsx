import { MantineProvider, Loader } from "@mantine/core";

import React from "react";

const Loading = () => {
  return (
    <MantineProvider>
      <div className="h-screen flex items-center justify-center">
        <Loader color="white"></Loader>
      </div>
    </MantineProvider>
  );
};

export default Loading;
