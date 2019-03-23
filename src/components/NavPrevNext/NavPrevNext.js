import { h, Component} from 'preact';

import Styles from './_NavPrevNext.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

const NavPrevNext = ({ onPrev, onNext }) => {
  //console.log('stuff: ', NavPrevNext);
  return (
    <div className={cx('nav-prev-next')}>

      <div className={cx('left', 'end')}>
        <div className={cx('circle')} onClick={onPrev}>
          <span>o</span>
        </div>
      </div>

      <div className={cx('right', 'end')}>
        <div className={cx('circle')} onClick={onNext}>
          <span>o</span>
        </div>
      </div>

    </div>
  )
}

export default NavPrevNext;
