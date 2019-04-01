import { h, Component, render } from 'preact';
import 'preact/devtools';

//import Slideshow from './Slideshow';
import Formbasic from './Formbasic';
import Modal from './Modal';

// style class declarations
import classNames from 'classnames/bind';
import styles from '../styles/themeStyle.scss';

const cx = classNames.bind(styles);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render () {
    return (
      <main className={cx('page-wrapper')}>

        {/* <Slideshow content={`http://localhost:8080/src/components/Slideshow/slides.json`} cycleSpeed={2000} /> */}
        
        <Formbasic />
        <button onClick={() => this.openModal()}>Open modal</button>

        <Modal />

      </main>
    )
  };
};

export default App;
