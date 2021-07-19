import React, { useRef } from "react";
import FaceWebCam from "../components/faceWebCam";

export default function Login() {
  const webcamReference = useRef(null);
  const canvasReference = useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamReference.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamReference]);

  return (
    <>
      <div class="loginheader">
        <h1 class="logintext">Login With</h1>
        <h1 class="logintext y"> Y</h1>
        <h1 class="logintext o">O</h1>
        <h1 class="logintext o m">M</h1>
        <h1 class="logintext o s">S</h1>
      </div>
      <div class="centercontent">
        <div class="topdiv">
          <FaceWebCam
            webcamReference={webcamReference}
            canvasReference={canvasReference}
          />
        </div>
        <div class="bottomdiv">
          <div class="imageactiondiv">
            <a
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              class="actionbutton w-button"
            >
              Capture Image
            </a>
            <a href="#" class="actionbutton w-button">
              Restart Capture
            </a>
          </div>
          <div class="nextdiv">
            <a href="#" class="actionbutton w-button">
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
