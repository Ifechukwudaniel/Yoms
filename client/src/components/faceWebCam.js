import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./meshUtilities.js";

const FaceWebCam = () => {
  const webcamReference = useRef(null);
  const canvasReference = useRef(null);

  const loadFacemesh = async () => {
    const network = await facemesh.load({
      inputResolution: { width: 720, height: 500 },
      scale: 0.8,
    });
    setInterval(() => detectFace(network), 100);
  };

  const detectFace = async (network) => {
    if (
      typeof webcamReference.current !== "undefined" &&
      webcamReference.current !== null &&
      webcamReference.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamReference.current.video;
      const videoWidth = webcamReference.current.video.videoWidth;
      const videoHeight = webcamReference.current.video.videoHeight;

      // Set video width
      webcamReference.current.video.width = videoWidth;
      webcamReference.current.video.height = videoHeight;

      // Set canvas width
      canvasReference.current.width = videoWidth;
      canvasReference.current.height = videoHeight;

      // Make Detections
      const faceEstimate = await network.estimateFaces(video);
      console.log(faceEstimate);

      //Get canvas context
      const ctx = canvasReference.current.getContext("2d");
      drawMesh(faceEstimate, ctx);
    } else {
      console.log("No Face");
      // alert("No Face");
    }
  };

  loadFacemesh();

  return (
    <>
      <Webcam
        ref={webcamReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 720,
          height: 500,
        }}
      />

      <canvas
        ref={canvasReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 720,
          height: 500,
        }}
      />
    </>
  );
};

export default FaceWebCam;
