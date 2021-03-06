import * as Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

interface ReduxInterface extends Reactotron.Reactotron {
  createStore?: (rootReducer: any, middleware: any) => {}
}

export const reactotron: ReduxInterface = Reactotron.default
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .use(Reactotron.storybook())
