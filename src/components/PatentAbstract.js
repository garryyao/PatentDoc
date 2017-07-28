import React from 'react'
import {AbstractType} from './Types'
import {textFromNode} from './Utils'
let sortBy = require('lodash.sortby')
let classNames = require('classnames')

class PatentAbstract extends React.Component {

  render() {
    const abstract = this.props.abstract

    return <div id="abstracts" className="card card-light">
        <div className="card-header justify-content-between">
          <h4 className="card-title">{'abstract'}</h4>
          <span className="icon icon-abstract pr-1"/>
        </div>

        <div className="card-block">
          <p className="card-text">
            {textFromNode(abstract.p)}
          </p>
        </div>
      </div>
  }
}

PatentAbstract.propTypes = {
  abstract: AbstractType
}
export default PatentAbstract
