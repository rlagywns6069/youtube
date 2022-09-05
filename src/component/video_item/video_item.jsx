import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
          />
          <div className={styles.metadata}>
            <div className={styles.title}>{video.snippet.title}</div>
            <div className={styles.channel}>{video.snippet.channelTitle}</div>
          </div>
        </div>
      </li>
    );
  }
);
export default VideoItem;
