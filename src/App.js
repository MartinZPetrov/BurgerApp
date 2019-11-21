import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BuilderBurger from './containers/BuilderBuger/BuilderBurger'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BuilderBurger/>

        </Layout>
      </div>
    )
  }
}

export default App;
