import { h, component } from 'preact';
import styles from './_HeaderTitle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HeaderTitle = ({ title, copyright }) => {
  return (
    <header className={cx('title-wrapper')}>
      <h1>{title}</h1>
      <h5>Copyright: {copyright}</h5>
    </header>
  )
}

export default HeaderTitle;
