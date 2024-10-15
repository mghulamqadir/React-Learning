import React from 'react'

const Hero = ({ title = "Become a React Dev", subtitle = "Find the React job that fits your skills and needs" }) => {
    // const props.title = "Ali" // this will not be updated
    {/* Props are read only components. we can access the props as like get the objects(props.propertyName,...). Also we can destruct the elements {propertyName, ...} */ }
    return (
        <section className="bg-indigo-700 py-20 mb-4">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                    <h1
                        className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                    >
                        {/*  */}
                        {title}
                    </h1>
                    <p className="my-4 text-xl text-white">
                        {/*  */}
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero