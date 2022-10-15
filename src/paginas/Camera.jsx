import { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const [cameraSRC, setImage] = useState("");
  return(
    <>
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            setImage(getScreenshot());
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
    <img alt = "imagen" src = {cameraSRC} />
    </>
  );
};
export default WebcamCapture;