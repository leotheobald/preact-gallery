import { h, Component } from 'preact';

import styles from './_Viewer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Viewer = ({ mediaType, url, loading, title }) => {
  return (
    <div className={cx('viewer')}>

      {(
        mediaType === 'image' ? (
          <img onClick={() => window.open(url)} src={url} alt="space" />
        ) : (
        <div className={cx('iframe-wrapper')}>
          <iframe alt={title} src={url} frameBorder="0" allow="encrypted-media" allowFullScreen />
        </div>
        )
      )}

    </div>
  )
}

export default Viewer;
