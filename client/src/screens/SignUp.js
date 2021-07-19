import React from "react";
import FaceWebCam from "../components/faceWebCam";

export default function SignUp() {
  return (
    <>
      <div class="loginheader">
        <h1 class="logintext">SignUp To </h1>
        <h1 class="logintext y"> Y</h1>
        <h1 class="logintext o">O</h1>
        <h1 class="logintext o m">M</h1>
        <h1 class="logintext o s">S</h1>
      </div>
      <div class="centercontent">
        <div class="topdiv">
          <FaceWebCam />
        </div>
        <div class="bottomdiv">
          <div class="imageactiondiv">
            <img
              src="/images/ImageItem.png"
              loading="lazy"
              alt=""
              class="imageitem"
            />
            <img
              src="/images/ImageItem.png"
              loading="lazy"
              alt=""
              class="imageitem"
            />
            <img
              src="/images/ImageItem.png"
              loading="lazy"
              alt=""
              class="imageitem"
            />
            <img
              src="/images/ImageItem.png"
              loading="lazy"
              alt=""
              class="imageitem"
            />
          </div>
          <div class="nextdiv">
            <a href="#" class="actionbutton w-button">
              Restart Capture
            </a>
            <a href="#" class="actionbutton w-button">
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
