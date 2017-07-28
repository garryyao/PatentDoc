import React from 'react'
import {NavItemsType} from './Types'
import scroll from '../utils/SmoothScroll'

class NavBar extends React.Component {

  render() {
    return <nav id="navbar-top" className="navbar navbar-light bg-faded sticky-top">
      <a className="navbar-brand" href="#">
        <span className="icon icon-patent align-middle pr-1"/>
        <span className="hidden-sm-down">Patent Details</span>
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
