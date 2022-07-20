function AppNav(props) {

  return (
    <nav>
      {props.navItems.map((item) => (
        <a key={item.label} onClick={()=>props.handleNavClick(item.value)}>{item.label}</a>
      ))}
    </nav>
  )
}

export default AppNav;

