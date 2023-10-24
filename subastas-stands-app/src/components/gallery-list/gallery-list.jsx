import React from "react";
import ListItem from "./gallery-list-item";


function GalleyList ({ gallery, title }) {


    return (
        <>
            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        { title }
                    </h2>
                    <div className="px-6 py-12 sm:px-6 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-6 text-gray-600">
                            Al hacer clic en cada imagen, el sistema pedirá autorización para abrir tu cámara, y al ver los artes a través de ella, cobrarán vida. Con lo que podrás tomar foto o video y subirla a tus redes.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-4 grid-flow-row  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {
                                gallery.map(item =>{
                                    return (
                                        <ListItem item={ item } />
                                    )

                                } 
                                )
                            } 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleyList;