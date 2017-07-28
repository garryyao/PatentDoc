import 'glyphicon/style.scss';
import 'styles/PatentDoc.scss';

import 'tether';
import 'jquery';
import 'bootstrapjs';
import '../utils/anchor-scroll';

import React from 'react'
import PatentDocType from './Types'
import PatentBasic from './PatentBasic'
import PatentAbstract from './PatentAbstract'
import PatentClaims from './PatentClaims'
import PatentDescription from './PatentDescription'
import PatentCopyright from './PatentCopyright'
import NavBar from './NavBar'

class PatentDoc extends React.Component {
  render() {
    const doc = this.props.document;
    return <div className="container-fluid">
      <div className="row">

        <div className="col-lg-4 hidden-md-down">
          <PatentBasic sticky document={doc} />
        </div>

        <div className="col-lg-8 col">
          <div className="container">

            <div className="row">
              <div className="col hidden-lg-up">
                <PatentBasic document={doc}/>
              </div>
            </div>

            <NavBar navItems={[
              {title: 'abstracts', target: 'abstracts'},
              {title: 'claims', target: 'claims'},
              {title: 'description', target: 'desc'}
            ]}/>

            <div className="row">
              <div className="col">
                <PatentAbstract abstract={doc.abstract}/>
                <PatentClaims claims={doc.claims}/>
                <PatentDescription description={doc.description}/>
                <PatentCopyright copyright={doc.copyright}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
PatentDoc.propTypes = {
  document: PatentDocType
}
export default PatentDoc