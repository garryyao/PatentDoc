import React from 'react'
import {ClaimsType} from './Types'
import {textFromNode, sortSeq} from './Utils'
let classNames = require('classnames')

class PatentClaims extends React.Component {

  render() {
    const claims = this.props.claims
    const items = sortSeq(claims.claim.concat(claims['claim-statement']))
    return <div id="claims" className="card card-light">
      <div className="card-header justify-content-between">
        <h4 className="card-title">{'claims'}</h4>
        <span className="icon icon-claim pr-1"/>
      </div>
      <div className="card-block">
        {/*<h4>{textFromeNode(claims['claim-statement'])}</h4>*/}
        <ol className="list-unstyled">
          {items.map(claim => {
            return <li key={claim._seq} className="card-text py-1">{textFromNode(
              claim['claim-text'] || claim
            )}</li>
          })}
        </ol>
      </div>
    </div>
  }
}

PatentClaims.propTypes = {
  claims: ClaimsType
}
export default PatentClaims
