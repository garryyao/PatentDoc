import React from 'react';
import PatentDoc from './PatentDoc'
const config = require('config').default;

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pantentData: null
    }
  }
  componentWillMount() {
    fetch(config.apiUrl)
    .then((res) => res.json())
    .then(data => {
      this.setState({
        pantentData: data['patent-document'] || data
      })
    }).catch(err => {
      this.setState({
        pantentaData: err
      })
    })
  }

  render() {
    let doc = this.state.pantentData
    if (doc) {
      if (doc instanceof Error) {
        return <div>`Problem retrieving patent data with error: ${doc.message}`</div>
      } else {
        return <PatentDoc document={doc} />
      }
    }
    return <div>Loading...</div>
  }
}