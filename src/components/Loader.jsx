import React from "react";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <SyncLoader />
    </div>
  );
};

export default Loader;
