import React from 'react'
import {DescType} from './Types'
import {textFromNode, sortSeq} from '../utils/Utils'

class PatentDescription extends React.Component {

  render() {
    const desc = this.props.description
    const headings = desc.heading.map(h => Object.assign({type: 'heading'}, h))
    const paragraphs = desc.p.map(p => Object.assign({type: 'paragraph'}, p))
    const items = sortSeq(headings.concat(paragraphs))

    return <div id="desc" className="card card-light">
      <div className="card-header justify-content-between">
        <h4 className="card-title">{'description'}</h4>
        <span className="icon icon-description pr-1"/>
      </div>
      <div className="card-block">
        {
          items.map(item => {
            return item.type === 'heading' ?
                   <h5 className="pb-2" key={item._seq}>{textFromNode(item)}</h5>
              : <p key={item._seq}>{textFromNode(item)}</p>
          })
        }
      </div>
    </div>
  }
}

PatentDescription.propTypes = {
  description: DescType
}
export default PatentDescription
