import { Component, h } from 'preact';
//import styles from './__Slide.scss';
import classNames from 'classnames/bind';

//const cx = classNames.bind(styles);

const Slide = ({ content, current }) => {
    const classes = classNames({
      'slide': true,
      'active': current
    })
    
    return (
      <div class={classes}>
        <img
          src={content.url}
          title={content.title}
        />
      </div>
    )
  }

  export default Slide;