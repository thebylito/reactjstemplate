import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'production') {
  const noop = () => undefined;
  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
  };
} else {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin()) // <-- sweet
    .connect(); // let's connect!

  console.tron = tron;
  console.tron.clear();
}
