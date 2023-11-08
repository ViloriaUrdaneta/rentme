import React from 'react';
import Image from 'next/image';
import carImage from '../../public/imagen-auto.jpg'

function Card() {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                    src={carImage} 
                    alt='auto' 
                    width={150} 
                    height={150}          
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Título de la Tarjeta</div>
                    <p className="text-gray-700 text-base">
                    Contenido de la tarjeta. Puedes agregar más detalles aquí.
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag1</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag2</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag3</span>
                </div>
            </div>
        </div>
    )
}

export default Card;
