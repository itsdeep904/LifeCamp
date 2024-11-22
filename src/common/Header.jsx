import React from 'react'

const Header = () => {
  return (
    <>
  <nav className="bg-emerald-950 flex px-8 items-center" style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
  <div className="flex gap-4 items-center ml-auto">
    <img 
      src="https://randomuser.me/api/portraits/men/1.jpg" 
      alt="Profile" 
      className="w-10 h-10 rounded-full object-cover"
    />
    <h4 className="text-xl text-white">Mandeep Kumar</h4>
  </div>
</nav>
    </>
  )
}

export default Header
