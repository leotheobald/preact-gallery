import { h, Component, render } from 'preact';
import 'preact/devtools';

// components used
//import HeaderTitle from './HeaderTitle';
//import Slideshow from './Slideshow';
import Formbasic from './Formbasic';

// style class declarations
import classNames from 'classnames/bind';
import styles from '../styles/themeStyle.scss';

const cx = classNames.bind(styles);

class App extends Component {
  render () {
    return (
      <main className={cx('page-wrapper')}>
        {/* <Slideshow content={`http://localhost:8080/src/components/Slideshow/slides.json`} cycleSpeed={2000} /> */}
        
        <Formbasic />

      </main>
    )
  };
};

export default App;
