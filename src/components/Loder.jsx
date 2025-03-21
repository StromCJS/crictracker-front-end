import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 dark:bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 dark:border-blue-600 border-solid"></div>
    </div>
  );
}

export default Loader;