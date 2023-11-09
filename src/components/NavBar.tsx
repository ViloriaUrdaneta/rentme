import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className='w-full bg-slate-50 shadow-md fixed top-0 left-0 right-0 z-10 h-22 border border-inherit'>
                <div className='flex justify-around  mt-3.5 '>
                    <h1 className='text-2xl text-orange-700 font-bold'>RentMe</h1>
                    <button className='shadow-md hover:shadow-lg bg-white rounded-full border border-inherit h-11 w-96'>¿Cuándo? | ¿Dónde?</button>
                    <div>
                        <button className='hover:bg-slate-100 rounded-full h-11 w-36 mr-2'>Arrienda tu auto</button>
                        <button className='shadow-md hover:shadow-lg rounded-full border border-inherit h-11 w-36'>Inicio sesión</button>
                    </div>
                </div>
            </nav>
            <div className='w-full flex justify-center bg-slate-50 shadow-md mt-22 fixed left-0 right-0 z-10 h-22 '>
                <div className='justify-center m-6'>
                    <div className='grid grid-flow-col auto-cols-max gap-4 '>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                        <div>
                            <p>
                                marca
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
