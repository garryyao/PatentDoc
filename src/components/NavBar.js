import React from 'react'
import {NavItemsType} from './Types'
import scroll from '../utils/SmoothScroll'

class NavBar extends React.Component {

  render() {
    return <nav id="navbar-top" className="navbar navbar-toggleable navbar-light bg-faded sticky-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <a className="navbar-brand" href="#">
        <span className="icon icon-patent align-middle pr-1"/>
        <span>Patent Details</span>
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          {this.props.navItems.map((item, i) => {
            return <li key={i} className="nav-item">
              <a className="scroll nav-link" href={`#${item.target}`} onClick={this.handleClick}>{item.title}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  }

  handleClick(e) {
    scroll(e.target)
    e.preventDefault()
  }

}

NavBar.propTypes = {
  navItems: NavItemsType
}
export default NavBar
