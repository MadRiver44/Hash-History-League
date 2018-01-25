import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import slug from 'slug' //makes items snake cased

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
// returns a Route component
// for Route to match we use children prop
// if current location matches to.pathname, then ternary
function CustomLink({ to, children }) {
  return (
    <Route
      path={to.pathname}
      children={({ match }) => (
        <li style={{ listStyleType: 'none', fontWeight: match ? 'bold' : 'normal' }}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  )
}

// search: location.search, {/*query parameter*/},
//{item.toUpperCase()} {/*player name links*/}
export default function Sidebar({ title, list, loading, location, match }) {
  return loading === true ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {/* map over list passed in to generate a Custom Link component */}
        {list.map(item => (
          <CustomLink
            key={item}
            to={{
              pathname: `${match.url}/${slug(item)}`,
              search: location.search,
            }}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}
