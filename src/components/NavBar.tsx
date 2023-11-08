import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className='w-full bg-slate-50 shadow-md h-14 fixed top-0 left-0 right-0 z-10 h-22'>
                <div className='justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 mt-3.5'>
                    <h1 className='text-2xl text-orange-700 font-bold'>RentMe</h1>
                    <button className='shadow-md rounded-full border border-inherit h-11 w-96'>¿Cuándo? | ¿Dónde?</button>
                    <button className='shadow-md rounded-full border border-inherit h-8 w-40'>Inicio sesión</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
