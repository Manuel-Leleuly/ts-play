import { API, VIDEO_SOURCE, VIDEO_SOURCE_BASE_URL } from "./Constants";
import Poster from "../assets/media/images/no_poster.png";
import Backdrop from "../assets/media/images/no_backdrop.png";
import { Video } from "./Types";

export const getYear = (releaseDate: string | undefined) => {
  let date: string[] = [];
  if (releaseDate) {
    date = releaseDate.split("-");
    return date[0];
  }
  return "n/a";
};

export const getImage = (
  size: string,
  path: string | null | undefined,
  isHeader: boolean
) => {
  if (path) {
    return `${API.IMAGE_BASE_URL}${size}${path}`;
  }
  return isHeader ? Backdrop : Poster;
};

export const setVideoSource = (
  trailerSite: string | undefined,
  trailerKey: string | undefined
) => {
  if (trailerSite && trailerKey) {
    switch (trailerSite) {
      case VIDEO_SOURCE.YOUTUBE:
        return `${VIDEO_SOURCE_BASE_URL.YOUTUBE}${trailerKey}`;
      case VIDEO_SOURCE.VIMEO:
        return `${VIDEO_SOURCE_BASE_URL.VIMEO}${trailerKey}`;
      default:
        return null;
    }
  }
  return null;
};

export const getVideo = (videos: Video[] | undefined, videoType: string) => {
  if (videos) {
    const trailer = videos.filter((video) => video.type === videoType)[0];
    const trailerKey = trailer && trailer.key;
    const trailerSite = trailer && trailer.site;
    return setVideoSource(trailerSite, trailerKey);
  }
  return null;
};
