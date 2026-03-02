import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
export default function FacialExpression() {
  const videoRef = useRef();
  const [expression, setExpression] = useState("");

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  const detectMood = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    let mostProbableExpression = 0;
    let _expression = "";

    if (!detections || detections.length === 0) {
      setExpression(_expression);
      return;
    }

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpression) {
        mostProbableExpression = detections[0].expressions[expression];
        _expression = expression;
      }
    }

    setExpression(_expression);
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="border-3 rounded-2xl w-80"
      />
      <button
        onClick={detectMood}
        className="bg-[#0c5555] text-[#f4f4f5] px-3 py-1 w-full rounded-md border-[#8ffff1] border-2 cursor-pointer active:scale-95 transition-all"
      >
        Detect Mood
      </button>
      <p>Your mood: {expression || null}</p>
    </div>
  );
}
