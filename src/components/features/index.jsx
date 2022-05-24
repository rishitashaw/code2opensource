export const Feature = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none text-white">
                        What we
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            &nbsp; Provide ?
                        </span>

                    </h5>
                    <p className="mb-6 text-indigo-400">
                        We provide a global community or a platform where one would acually work on their desored skills, where there would be no rigorous rules on convincing required to conduct events and actual work would take place. A place where we build stuff, we let people build stuff and contribute in their own little way. Where we are free to conduct events and independently improve on our skills of leadership.
                    </p>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12  mr-6
                              tracking-wide  shadow-md 
                             bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </button>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-indigo-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5 text-indigo-400">Mentorship <br /> Sessions</h6>
                        <p className="text-sm text-gray-300">
                            We store your inventory closer<br /> to your customers using our<br /> vast geographical strong reach.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold text-indigo-400 leading-5">Hands on <br /> Projects</h6>
                        <p className="text-sm text-gray-300">
                            Single dashboard to manage & reconcile<br /> all your online and offline orders.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold text-indigo-400 leading-5">Blogs on lastest tech</h6>
                        <p className="text-sm text-gray-300">
                            Ensure 8-16% reduction in cost<br /> structure with strictly following<br /> industry optimized processes.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};