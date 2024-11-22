import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-emerald-950 w-full  flex flex-col sm:flex-row items-center justify-center " style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
  <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start">
    <h4 className="text-xl text-white">Privacy Policy</h4>
    <h4 className="text-xl text-white">Terms of Service</h4>
    <h4 className="text-xl text-white">FAQ</h4>
    <h4 className="text-xl text-white">Support</h4>
  </div>
  <h2 className="text-dark font-bold mt-4 sm:mt-0 sm:ml-6">(© 2024 LifeCamp)</h2>
</div>

    </>
  )
}

export default Footer
