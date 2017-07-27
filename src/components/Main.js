import React from 'react';

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pantentData: null
    }
  }
  componentWillMount() {
    fetch('//localhost:3000/patent-document')
    .then((res) => res.json())
    .then(data => {
      this.setState({
        pantentData: data
      })
    }).catch(err => {
      this.setState({
        pantentaData: err
      })
    })
  }

  render() {
    let doc = this.state.pantentData
    return <div>Loading...</div>
  }
}