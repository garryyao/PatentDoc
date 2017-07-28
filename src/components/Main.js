import React from 'react';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
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
        loading: false,
        pantentData: data['patent-document'] || data
      })
    }).catch(err => {
      this.setState({
        loading: false,
        pantentaData: err
      })
    })
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
  }

  render() {
    let doc = this.state.pantentData
    return <div>
      <Loading show={this.state.loading} color="#0275d8" showSpinner={false} />
      {doc? (
          doc instanceof Error ?
           <div>`Problem retrieving patent data with error: ${doc.message}`</div> :
           <PatentDoc document={doc}/>)
          : null
        }
      </div>
  }
}