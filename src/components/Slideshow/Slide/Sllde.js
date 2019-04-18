import { Component, h } from 'preact';
import styles from './_Slide.scss';
import classNames from 'classnames/bind';

//const cx = classNames.bind(styles);

const Slide = ({ content, current }) => {

    const classes = classNames({
      'slide': true,
      'active': current
    })
    
    return (
      <div class={classes}>
        <h1>{content.title}</h1>
        <p>{content.date}</p>
        <img
          src={content.url}
          title={content.title}
        />
      </div>
    )
  }

  export default Slide;
  