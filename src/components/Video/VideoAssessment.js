import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import YouTube from "react-youtube";

/* 

Don't worry about the code changes in here, anything new you see we'll cover tomorrow


*/

const VideoAssessment = () => {
  const [videoStatus, setVideoStatus] = useState(false);
  // manages count
  const [count, setCount] = useState(0);
  const options = {
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  // this will allow for us to change paths and such
  const router = useHistory();

  // this will run at end of video and update the video Status state which will undisable the next button
  const nextVideoFunction = () => {
    setVideoStatus(true);

    // Don't worry about the commented out code below

    /* //  videoIds array which contains the video ids in an array
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
    setCount(count + 1); */
  };

  return (
    <div>
      <YouTube videoId="wcKvp7txOfY" opts={options} onEnd={nextVideoFunction} />
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => router.push("/test")}
        disabled={videoStatus === false}
      >
        Go to first assessment
      </Button>
    </div>
  );
};

export default VideoAssessment;
