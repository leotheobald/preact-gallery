import { h, render } from 'preact';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
 
document.addEventListener('DOMContentLoaded', event => {
  render(<App />, document.getElementById('root'));
});

registerServiceWorker();
