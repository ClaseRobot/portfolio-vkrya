import { NavLink } from 'react-router-dom'

export const SidebarList = ({items}) => {

  return (
    <ul className='sidebar-list'>
      {
        items.map((item, index) => (
          <NavLink key={index} className='sidebar-item' to={item.path}>
            <div className="icon">{item.icon}</div>
            <span>{item.label}</span>
          </NavLink>
        ))
      }
    </ul>
  )
}