import { Component, h } from 'preact';
import classNames from 'classnames/bind';
//const cx = classNames.bind(styles);

import linkstate from 'linkstate';

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
      <div>
        <h1> hello World </h1>

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
          <br/>
          <input type="button" value="Submit" onClick={this.save()} />
        </div>

      </div>
    )
  }
}

export default Formbasic;
