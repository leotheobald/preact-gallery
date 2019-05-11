import { h, Component } from 'preact';

import styles from './_ViewerTemplate.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

/** @jsx h */

const ViewerTemplate = ({ viewer, NavPrevNext, HeaderTitle, explanation }) => {
  return (
    <div className={cx('viewer-template')}>
      {HeaderTitle}
      <div className={cx('viewer-wrapper')}>
        {viewer}
        <div className={cx('nav-prev-next-wrapper')}>
          {NavPrevNext}
        </div>
      </div>

      <div className={cx('description')}>
        {explanation}
      </div>
    </div>
  )
}

export default ViewerTemplate;
