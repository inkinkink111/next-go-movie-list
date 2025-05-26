import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#1d1c23" highlightColor="#252429">
      <Skeleton height={480} width={"100%"} count={1} borderRadius={16} />
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
