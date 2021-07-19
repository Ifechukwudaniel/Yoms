import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from "./meshUtilities.js";

const FaceWebCam = ({ webcamReference, canvasReference }) => {
  const webcamRef = webcamReference;
  const canvasRef = canvasReference;

  const loadFacemesh = async () => {
    const network = await facemesh.load({
      inputResolution: { width: 500, height: 350 },
      scale: 0.8,
    });
    setInterval(() => detectFace(network), 100);
  };

  const detectFace = async (network) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const faceEstimate = await network.estimateFaces(video);
      //   console.log(faceEstimate);

      //Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(faceEstimate, ctx);
    } else {
      //   console.log("No Face");
      // alert("No Face");
    }
  };

  loadFacemesh();

  return (
    <>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 500,
          height: 340,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 500,
          height: 340,
        }}
      />
    </>
  );
};

export default FaceWebCam;
