import { Component, h } from 'preact';
import styles from '../../styles/themeStyle.scss';
import classNames from 'classnames/bind';
import Slide from './Slide';

const cx = classNames.bind(styles);

/** @jsx h */

class Slideshow extends Component {
    
  state = {
    current: 0,
    error: '',
    isLoading: true,
    slides: [],
    content: this.props.content,
    title: this.props.content.title,
    cat: this.props.content.category,
    explanation: this.props.content.explanation,
    speed: this.props.cycleSpeed || 3000,
    timer: null
  }

  startRotation = () => {
    this.interval = setInterval(this.next, this.state.speed)
  }

  stopRotation = () => {
    clearInterval(this.interval)
    
    this.setState({
      time: null
    })
  }

  next = () => {
    const current = this.state.current
    let nextSlide = current + 1
    
    if (nextSlide > this.state.slides.length - 1) {
      nextSlide = 0
    }
    
    this.setState({
      current: nextSlide
    })
  }

  prev = () => {
    const current = this.state.current
    let previousSlide = current - 1
    
    if (previousSlide < 0) {
      previousSlide = this.state.slides.length - 1;
    }
    
    this.setState({
      current: previousSlide
    })
  }

  isActive = (slide) => {
    return this.state.current === slide
  }

  componentDidMount () {
    if (this.state.isLoading) {
      fetch(this.props.content)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            isLoading: false,
            slides: data.slides
          })
        })
        .catch((error) => { 
          this.setState({
            error: error.message
          })
        })
    }
    
    this.startRotation()
  }

  componentWillUnmount () {
    this.stopRotation()
  }
  
  render (props, { error, isLoading, slides }) {
    const generateSlides = (
      slides.map((slide, i) => (
          <Slide content={slide} current={this.isActive(i)} key={i} />
        )
      )
    )
    
    const displaySlides = (
      <div className={cx('slideshow__container')}
        onMouseEnter={this.stopRotation}
        onMouseLeave={this.startRotation}>

        {generateSlides}
      </div>
    )
    
    return (
      <div className={cx('slideshow')}>
        {!isLoading ? displaySlides : (<h1 className={cx('error')}>Error {error}</h1>)}
        <p>Images above are from <a href="https://www.unsplash.com/" target="_blank">unsplash</a></p>
      </div>
    )
  }
}

export default Slideshow;
