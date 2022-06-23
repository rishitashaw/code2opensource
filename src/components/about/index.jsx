export default function About() {
    return (
        <>
            <section class="px-0 py-12 mx-auto max-w-7xl sm:px-4 relative bg-black">
                <div class="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-indigo-400 border-gradient-to-r from-green-400 via-pink-500 to-purple-500 rounded-none  sm:rounded-lg md:px-10 md:grid-cols-5 lg:gap-0">
                    <div class="col-span-1 md:col-span-2">
                        {/* <img src="https://freesvg.org/img/1542318802.png" class=" ml-0 select-none lg:ml-48 " width="400" alt="Mac App" /> */}
                    </div>
                    <div class="col-span-1 md:col-span-3 text-right p-5 duration-300 transform bg-gray-900 opacity-75 border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
                        <h2 class="mb-3 text-2xl text-white font-normal leading-tight lg:text-3xl">Why be a part of this community?</h2>
                        <p class="mb-6 text-sm font-semibold lg:text-base">Software has always been the common passion to bind us all and we would love to welcome passionate and hardworking individuals willing to make an impact or willing to bring in the true spirit of open source where we help each other grow.
                        </p>
                    </div>

                </div>
            </section>

        </>
    )

}
