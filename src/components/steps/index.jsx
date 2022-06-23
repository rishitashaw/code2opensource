export const Step = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-300 uppercase rounded-full bg-teal-accent-400">
                        Make history
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">It's</span>
                    </span>{' '}
                    easy
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                        &nbsp; to get started
                    </span>
                </h2>
                <p className="text-base text-indigo-400 md:text-lg">
                    It is easier than you think
                </p>
            </div>

            <div className="grid gap-10 row-gap-5 md:row-gap-8 lg:grid-cols-3 ">
                <div className="p-5 duration-300 transform bg-gray-900 opacity-75 border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
                    <div className="flex items-center mb-2 p-6 sm:p-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-5xl rounded-full bg-deep-purple-accent-400">
                            1
                        </p>
                        <p className="text-lg font-bold text-indigo-400 leading-5">Step 1</p>
                    </div>
                    <p className="text-sm text-gray-300">
                        Join our community of<br /> developers and designers.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-gray-900 opacity-75 border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
                    <div className="flex items-center mb-2 p-6 sm:p-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 rounded-full bg-deep-purple-accent-400">
                            2
                        </p>
                        <p className="text-lg text-indigo-400 font-bold leading-5">
                            Step 2
                        </p>
                    </div>
                    <p className="text-sm text-gray-300">
                        Be an active member of  <br /> community, events and projects. <br />
                    </p>
                </div>
                <div className="relative p-5 duration-300 transform bg-gray-900 opacity-75 border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
                    <div className="flex items-center mb-2 p-6 sm:p-2">
                        <p className="flex items-center justify-center w-10 h-10 mr-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 rounded-full bg-deep-purple-accent-400">
                            3
                        </p>
                        <p className="text-lg text-indigo-400 font-bold leading-5">Step 3</p>
                    </div>
                    <p className="text-sm text-gray-300">
                        Stand a chance to become<br /> a Mentor based on your<br/> performance and participation!
                    </p>
                    <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
                        <svg
                            className="text-teal-300 w-7 text-5xl"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <polyline
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="6,12 10,16 18,8"
                            />
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    );
};
