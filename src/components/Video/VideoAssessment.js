import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoAssessment = () => {
  const [videoId, setVideoId] = useState("wcKvp7txOfY");
  // manages count
  const [count, setCount] = useState(0);
  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const nextVideoFunction = () => {
    //  videoIds array which contains the video ids in an array
    const videoIds = [
      "acP8Ptv0MXw",
      "YyPtn4UUrj0",
      "9FeHHQBDlTM",
      "3xgkMdxfTUQ",
      "ErV2V9kdmXI",
      "a12ImJ9NbwM",
      "HmcjRgqD020",
      "a-AYw_U_Z1M",
      "fcr67N2g5vM",
    ];
    if (count === videoIds.length) {
      // route to knowledge test page
      alert("finished");
    } else {
      setVideoId(videoIds[count]);
    }
    setCount(count + 1);
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={options} onEnd={nextVideoFunction} />
    </div>
  );
};

export default VideoAssessment;
