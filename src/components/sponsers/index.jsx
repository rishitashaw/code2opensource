export const Sponsor = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2 block-shadow bg-gray-900 opacity-75 p-6">

                <div className="relative">
                    <svg
                        className="absolute w-full text-teal-400"
                        fill="currentColor"
                        viewBox="0 0 600 392"
                    >
                        <rect x="0" y="211" width="75" height="181" rx="8" />
                        <rect x="525" y="260" width="75" height="132" rx="8" />
                        <rect x="105" y="83" width="75" height="309" rx="8" />
                        <rect x="210" y="155" width="75" height="237" rx="8" />
                        <rect x="420" y="129" width="75" height="263" rx="8" />
                        <rect x="315" y="0" width="75" height="392" rx="8" />
                    </svg>
                    <svg
                        className="relative w-full text-indigo-700"
                        fill="currentColor"
                        viewBox="0 0 600 392"
                    >
                        <rect x="0" y="311" width="75" height="81" rx="8" />
                        <rect x="525" y="351" width="75" height="41" rx="8" />
                        <rect x="105" y="176" width="75" height="216" rx="8" />
                        <rect x="210" y="237" width="75" height="155" rx="8" />
                        <rect x="420" y="205" width="75" height="187" rx="8" />
                        <rect x="315" y="83" width="75" height="309" rx="8" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-400 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Building trust and enthusiasm among
                            <br className="hidden md:block" />
                            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                                young students
                            </span>
                        </h2>
                        <p className="text-base text-gray-300 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};