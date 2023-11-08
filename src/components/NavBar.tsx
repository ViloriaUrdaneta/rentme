import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className='w-full bg-slate-50 shadow-md fixed top-0 left-0 right-0 z-10 h-22 border border-inherit'>
                <div className='justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 mt-3.5 '>
                    <h1 className='text-2xl text-orange-700 font-bold'>RentMe</h1>
                    <button className='shadow-md hover:shadow-lg  bg-white rounded-full border border-inherit h-11 w-96'>¿Cuándo? | ¿Dónde?</button>
                    <button className='shadow-md hover:shadow-lg rounded-full border border-inherit h-11 w-36'>Inicio sesión</button>
                </div>
            </nav>
            <div className='w-full bg-slate-50 shadow-md mt-22 fixed left-0 right-0 z-10 h-22'>
                
            </div>
        </div>
    )
}

export default NavBar
