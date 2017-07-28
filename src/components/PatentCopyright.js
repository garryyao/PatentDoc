import React from 'react'
import {CopyrightType} from './Types'
import {textFromNode} from './Utils'

class PatentCopyright extends React.Component {

  render() {
    const copyright = this.props.copyright

    return <div className="card-block">
      <hr />
      <div className="copyright">
        <p>{textFromNode(copyright)}</p>
      </div>
    </div>
  }
}

PatentCopyright.propTypes = {
  copyright: CopyrightType
}
export default PatentCopyright
