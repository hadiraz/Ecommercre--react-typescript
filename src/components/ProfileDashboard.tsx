import React from 'react'
import { Link } from 'react-router-dom'

const ProfileDashboard = () => {
  return (
    <section className='w-full flex justify-center max-w-xl md:max-w-6xl h-full'>
        <div className='grid grid-cols-2 md:grid-cols-3 w-full auto-rows-max gap-3 h-full'>
            <Link to="/profile/orders" className='flex max-h-52 justify-center items-center w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200'>
                <p>Orders</p>
            </Link>
            {/* <Link to="/profile/orders" className='flex max-h-52 justify-center items-center w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200'>
                <p>Profile setting</p>
            </Link>
            <Link to="/profile/settings" className='flex max-h-52 justify-center items-center w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200'>
                <p>Settings</p>
            </Link> */}
        </div>
    </section>
  )
}

export default ProfileDashboard