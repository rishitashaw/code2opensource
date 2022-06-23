/* eslint-disable jsx-a11y/img-redundant-alt */
import About from "../about";
import { Step } from "../steps";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Work() {
    return (
        <>
            <body class="leading-normal tracking-normal text-indigo-400 p-6 pb-12 bg-cover wavy-2 "
                style={{ backgroundImage: ' url("/header.png") ' }}>
                <div class="h-full">

                    {/* <!--Main--> */}
                    <div class="container pb-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        {/* <!--Left Col--> */}
                        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                            <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                                How we are
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                                    &nbsp; different ?
                                </span>

                            </h1>
                            <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                            We would dive deep in topics of cloud computing,cyber security, blockchain and many more. This will provide you a great platform and mentors to transform your ideas into interesting and out-of-the box projects.
                            </p>
                            <div class="grid grid-cols-2 gap-4 text-white">
                                <div class="...">
                                    <h3 class="text-base font-bold"><i class="fa-solid fa-check"></i> Mentorship</h3>
                                </div>
                                <div class="...">
                                    <h3 class="text-base font-bold"><i class="fa-solid fa-check"></i> Events & Workshops</h3>
                                </div>

                            </div>
                            <div class="grid grid-cols-2 gap-4 text-white">
                                <div class="...">
                                    <h3 class="text-base font-bold"><i class="fa-solid fa-check"></i> Hands-on-projects</h3>
                                </div>
                                <div class="...">

                                    <h3 class="text-base font-bold"><i class="fa-solid fa-check"></i> Chance to become a mentor </h3>
                                </div>

                            </div>


                        </div>

                        {/* <!--Right Col--> */}
                        <div class="w-full xl:w-3/5 p-12 overflow-hidden absolute right-0">
                            <div class="grid image-grid">

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img1" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/6C87/production/_117538772_1f14b5e7-eca7-4e38-8997-b1c8066e7ab1.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcEhNeIUkwiQk8PFhfjqzCt7rWhMY53stGN8oHrPr6ROPSms3C1ThqKJktQneqhRAN0c&usqp=CAU" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img3" src="https://3udno63459u23yboa6366rls-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Mr.Xerty-Feature.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img4" src="https://w0.peakpx.com/wallpaper/329/172/HD-wallpaper-blue-pink-digital-art.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img5" src="https://i.pinimg.com/originals/eb/13/6a/eb136a72ba3edb3d808ecb35a00dcb6c.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img6" src="http://database.az/upload/Image/posts/11-2019/posts-7686-en.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img7" src="https://www.homestratosphere.com/wp-content/uploads/2019/10/Example-of-computer-illustration-digital-art-oct16.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img8" src="https://w0.peakpx.com/wallpaper/608/468/HD-wallpaper-abandoned-ship-artist-artwork-digital-art-deviantart.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            {/* <img class="tile-img tile-img9" src="https://www.homestratosphere.com/wp-content/uploads/2019/10/Example-of-computer-illustration-digital-art-oct16.jpg" alt="Image" /> */}
                                        </a>
                                    </div>
                                </div>

                                <div class="grid-block">
                                    <div class="tile">
                                        <a class="tile-link" href="#">
                                            <img class="tile-img tile-img10" src="https://media.timeout.com/images/105855776/750/422/image.jpg" alt="Image" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                    <div class="flex flex-col items-center justify-center mt-24 pt-12 relative">
                        <Step />

                    </div>
                </div>

            </body>
        </>
    )

}
