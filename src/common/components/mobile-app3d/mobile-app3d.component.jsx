import React, { Suspense } from "react";
import SpinnerLoaderComponent from "../spinner-loader/spinner-loader.component";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
const SPLINE_URL = "https://prod.spline.design/r6xOu7erAOZchYCR/scene.splinecode";

const MobileApp3dComponent = () => {
  return (
    <Suspense fallback={<SpinnerLoaderComponent/>}>
      <Spline scene={SPLINE_URL} />
    </Suspense>
  );
};

export default MobileApp3dComponent;