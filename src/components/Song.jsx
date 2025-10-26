import React, { Component } from "react";
import PropTypes from "prop-types";

function formatDuration(totalSeconds = 0) {
  const m = Math.floor(totalSeconds / 60);
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

class Song extends Component {
  render() {
    const { title, artist, album, duration, coverUrl } = this.props;
    return (
      <article className="song" role="listitem">
        <figure className="song__cover" aria-hidden="true">
          {coverUrl ? <img src={coverUrl} alt="" /> : <span>♪</span>}
        </figure>

        <div className="song__meta">
          <h3 className="song__title">{title}</h3>
          <p className="song__artist">{artist}</p>
          {album && <p className="song__album">{album}</p>}
        </div>

        <div className="song__duration" aria-label="Duración">
          {formatDuration(duration)}
        </div>

        <button className="song__save" type="button" disabled>Guardar</button>
      </article>
    );
  }
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string,
  duration: PropTypes.number,
  coverUrl: PropTypes.string
};

export default Song;
