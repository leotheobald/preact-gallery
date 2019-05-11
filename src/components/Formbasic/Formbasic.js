import { Component, h } from 'preact';
import linkstate from 'linkstate';

import styles from '../../styles/themeStyle.scss';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

/** @jsx h */

class Formbasic extends Component {

  componentDidMount() {
    this.setState({ loading: true });
  
    setTimeout(() => {
      this.setState({ loading: false, firstName: 'Foo', lastName: 'Bar' });
    }, 100);
  }

  save() {
    return () => console.log(this.state.firstName, this.state.lastName);
  }

  render(props, state) {

    if (state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div class="basicform">
        <div>
          <h3>First Name</h3>
          {/* // linkstate updates `state.firstName` every time the user types in
          // this input */}
          <input type="text" value={state.firstName} onInput={linkstate(this, 'firstName')} />
        </div>
        <div>
          <h3>Last Name</h3>
          <input type="text" value={state.lastName} onInput={linkstate(this, 'lastName')} />
        </div>

        <div>
          
          <select name="choice">
            <option value="books">Books</option>
            <option value="html">HTML</option>
            <option value="css" onChange={this.save()}>CSS</option>
            <option value="php">PHP</option>
            <option value="js">JavaScript</option>
          </select>

          {/* {['clientName', 'siteName', 'segmentName'].map(key => (
            <select key={key}>
              {this.state.data.map(({ [key]: value }) => <option key={value}>{value}</option>)}
            </select>
          ))} */}
        </div>

        <div>
          <br/>
          <input type="button" value="Submit" onClick={this.save()} />
        </div>

      </div>
    )
  }
}

export default Formbasic;
