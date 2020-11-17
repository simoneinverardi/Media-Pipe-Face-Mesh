const facemesh = require('@tensorflow-models/facemesh');

async function main() {
  // Load the MediaPipe facemesh model.
  const model = await facemesh.load();

  // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain an
  // array of detected faces from the MediaPipe graph.
  const predictions = await model.estimateFaces(document.querySelector("video"));

  if (predictions.length > 0) {
    for (let i = 0; i < predictions.length; i++) {
      const keypoints = predictions[i].scaledMesh;

      // Log facial keypoints.
      for (let i = 0; i < keypoints.length; i++) {
        const [x, y, z] = keypoints[i];

        console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
      }
    }
  }
}

main();
