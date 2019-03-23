import { h, Component } from 'preact';
import classNames from 'classnames/bind';
import styles from './ClockStyle.scss';

const cx = classNames.bind(styles);

export default class Clock extends Component {

  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();
  }

  componentDidMount() {
    // update timer every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render (props, state) {
    
    let time = new Date(state.time).toLocaleTimeString();
    return <span className={cx('ticking-clock')}>{ time }</span>
    
  }
}
