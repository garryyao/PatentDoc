import React from 'react'
import PatentDocType from './Types'
import PropTypes from 'prop-types'
import {textFromNode, safeJoin} from '../utils/Utils'
let sortBy = require('lodash.sortby')
let classNames = require('classnames')

const partyPriorities = ['inventors', 'assignees','agents']
class PatentBasic extends React.Component {

  render() {
    const doc = this.props.document
    const rawParties = doc['bibliographic-data']['parties']
    // all listed parties in a row
    const parties = sortBy(Object.keys(rawParties), prop => {
      let priority = partyPriorities.indexOf(prop)
      return priority === -1? 10: priority
    }).filter(
      prop => prop !== '_seq'
    ).map(prop => {

      const propSingular = prop.replace(/s$/, '')
      let contacts = rawParties[prop][propSingular]
      contacts = (Array.isArray(contacts) ? contacts : [contacts])

      return {
        _seq: rawParties[prop]['_seq'],
        type: propSingular,
        typePlural: prop,
        contacts: sortBy(contacts, '_seq')
      }
    })

    console.assert(parties.length, 5, 'Unexpected number of parties on patent')

    return <div className={classNames('card card-patent-basic', {'sticky-top': this.props.sticky})}>

      {/* Patent title block */}
      <div className="card-block card-inverse bg-primary">
        <h2 className="card-title">{doc['-ucid']}</h2>
        <h4 className="card-subtitle">
          <span className="icon-barcode mr-2 align-middle"></span>
          <span>No. {doc['-doc-number']}</span>
        </h4>
      </div>
      <div className="py-2 hidden-sm-up" />

      {/* Patent parties*/}
      {parties.map(function(party) {


        return <div key={party._seq} className="card-block card-block-compact d-flex flex-row flex-lg-column justify-content-start">
          <div className="card-title-block header d-flex flex-row justify-content-between">
            <h5 className="card-title">
              {party.typePlural}
            </h5>
            <span className={'icon icon-' + party.type} title={party.typePlural} />
          </div>
          <ul className="list-group list-group-flush">
            {party.contacts.map(contact => {
              const addressbook = contact['addressbook']
              const displayName = addressbook['name']
                ? textFromNode(addressbook['name'])
                : safeJoin(textFromNode(addressbook['first-name']), textFromNode(addressbook['last-name']))(' ')
              const address = addressbook.address
              let displayAddress = ''
              if (address) {
                displayAddress = safeJoin(textFromNode(address.city), textFromNode(address.country))(',')
              }

              return <li key={contact._seq} className="list-group-item justify-content-between">
                <span className="display-name">{displayName}</span>
                <span className="address">{displayAddress}</span>
              </li>
            })}
          </ul>
        </div>
      })}
      <div className="py-2 hidden-sm-up"/>
    </div>
  }
}

PatentBasic.propTypes = {
  optionalSticky: PropTypes.bool,
  document: PatentDocType
}
export default PatentBasic
