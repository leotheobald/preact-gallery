import { h, Component, render } from 'preact';
import 'preact/devtools';

import Slideshow from './Slideshow';
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

  // // slideshow state and functionality
  // state = {
  //   current: 0,
  //   error: '',
  //   isLoading: true,
  //   slides: [],
  //   content: this.props.content,
  //   title: this.props.content.title,
  //   cat: this.props.content.category,
  //   explanation: this.props.content.explanation,
  //   speed: this.props.cycleSpeed || 3000,
  //   timer: null
  // }


  // modal funnctionality
  openModal() {
    this.setState({ isModalOpen: true })
  }
  closeModal() {
    this.setState({ isModalOpen: false })
  }

  // form functionality
  // save() {
  //   return () => console.log(this.state.firstName, this.state.lastName);
  // }

  render () {
    return (
      <main className={'page-wrapper'}>
        
        <Formbasic />
        <button onClick={() => this.openModal()}>Open modal</button>

        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <Slideshow content={`http://localhost:8080/src/components/Slideshow/slides.json`} cycleSpeed={2000} />
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>

      </main>
    )
  };
};

export default App;
