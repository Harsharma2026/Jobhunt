import React from 'react';
import './eresources.css'
import { useState } from 'react';
const CardsInfoLinks = [
    {
        id: "1",
        title: "Computer Science",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/business-man-illustration_1150-59019.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
    {
        id: "2",
        title: "Electrical Engineering",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/business-man-illustration_1150-59019.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
    {
        id: "3",
        title: "Civil Engineering",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/business-man-illustration_1150-59019.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
    {
        id: "4",
        title: "Mechanical Engineering",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/business-man-illustration_1150-59019.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },

];
const CardsInfoLinks1 = [
    {
        title: "DSA",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/3d-student-waking-book-bulb_1150-56185.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
    {
        title: "FullStack Development",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/3d-student-waking-book-bulb_1150-56185.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
    {
        title: "Android Development",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/3d-student-waking-book-bulb_1150-56185.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
    {
        title: "UI/UX",
        subtitle: "Read more",
        description: "fdvfdmvfdkvmfdkvmfdkvmfdkvmfkvmfdkfdmvkfdmvkfdmvfkmvfdkmvkfdm",
        url: "https://img.freepik.com/premium-psd/3d-student-waking-book-bulb_1150-56185.jpg?size=626&ext=jpg&ga=GA1.1.695701732.1683486515&semt=ais"
    },
]
// FAQ
const questions = [
    {
        id: "1",
        question: 'Popular Articles',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
        id: "2",
        question: 'Fix problems & request removals',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
        id: "3",
        question: 'Browse the web',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    {
        id: "4",
        question: 'Search on your phone or tablet',
        answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },

]
const Eresources = () => {

    const data = questions;

    const [value, setValue] = useState('')


    const [isActive, setActive] = useState("0");
    const handleClick = (id) => {
        if (isActive == "0") {
            setActive(id)
            console.log(isActive)
        }
        else {
            setActive("0")
            console.log(isActive)
        }
    }


    return <div>
        {/* navbar starts */}
        <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img
                        src="data:image/jpeg;base64,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"
                        class="h-8 mr-3"
                        alt=""
                    />
                    <span class="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 ">
                        JobHunt
                    </span>
                </a>
                <div class="flex md:order-2">
                    <button
                        type="button"
                        class="text-white bg-black hover:bg-[#7ED957] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                    >
                        Log In
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white   ">
                        <li>
                            <a
                                href="#"
                                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#7ED957] md:p-0 "
                                aria-current="page"
                            >
                                <img
                                    src="https://img.icons8.com/?size=512&id=43699&format=png"
                                    class="flex h-6"
                                    alt="Home"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                            >
                                Learn
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                            >
                                E-Resources
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                            >
                                Find Jobs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ED957] md:p-0 "
                            >
                                Compete
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Cards */}

        <div className='py-16'>
            <h1 class="font-serif text-2xl font-extrabold leading-10 tracking-tight text-center text-black    md:text-2xl text-2xl lg:text-4xl pt-8 pb-4">
                <span class="bg-clip-text text-transparent  bg-gradient-to-b from-gray-900 to-gray-600 ">
                  Gate Courses
                </span>
            </h1>
            <div className=' upper '>
                {CardsInfoLinks.map((items) => (<>

                    <article className="card">
                        <header class="card__thumb">
                            <img src={items.url} />
                        </header>
                        <div class="card__body">
                            {/* <div class="card__category"><a href="#">pet</a></div> */}
                            <h2 class="card__title "><a href="#">{items.title}</a></h2>
                            <div class="card__subtitle">{items.subtitle}</div>
                            <p class="card__description">{items.description}</p>
                        </div>
                    </article>

                </>
                ))}
            </div>
        </div>

        {/* Card 2 */}
        <div>
            <h1 class="font-serif text-2xl font-extrabold leading-10 tracking-tight text-center text-black    md:text-2xl text-2xl lg:text-4xl pt-8 pb-4">
                <span class="bg-clip-text text-transparent  bg-gradient-to-b from-gray-900 to-gray-600 ">
                   Programming Courses
                </span>
            </h1>

            <div className=' upper'>
                {CardsInfoLinks1.map((items) => (<>
                    <article className="card">
                        <header class="card__thumb">
                            <img src={items.url} />
                        </header>
                        <div class="card__body">
                            <h2 class="card__title"><a href="#">{items.title}</a></h2>
                            <div class="card__subtitle">{items.subtitle}</div>
                            <p class="card__description">{items.description}</p>
                        </div>

                    </article>
                </>
                ))}
            </div>
        </div>
        {/* Numbers */}

        <div className='mentors-content pt-16'>
            <div className='items hover:transform hover:-rotate-3 hover:scale-105 transition duration-300'>

                <div className='cptn'>
                    <img src="https://img.freepik.com/free-vector/people-using-search-box-query-engine-giving-result_74855-11000.jpg?w=740&t=st=1689592852~exp=1689593452~hmac=3ee4c81ce8f8d30b7d290166f2cab6a2199d04e3d8cc200872ffaa54c53880b9" alt="" className='img-number' />
                    <h1 class="text-blue-500   text-center text-4xl font-bold  mt-2 ">5000+
                   </h1>
                   <div className='double-wrap'>Search  Results </div>
                    
                </div>
            </div>
            <div className='items hover:transform hover:-rotate-3 hover:scale-105 transition duration-300' style={{borderColor : 'orange'}}>
                <div className='cptn'>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-recap-illustration_23-2149331618.jpg?w=740&t=st=1689593048~exp=1689593648~hmac=5d8f7ec7b2495299d731e7bcbeecc9d0aa934afaff76391ab299b45ca1406475" alt="" className='img-number' />
                    <h1 class="text-orange-500   text-center text-4xl font-bold  mt-2  ">200+
                   </h1>
                   <div className='double-wrap'>Resources Available </div>
                </div>
            </div>
            <div className='items hover:transform hover:-rotate-3 hover:scale-105 transition duration-300 ' style={{borderColor : 'red'}}>
                <div className='cptn'>
                    <img src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-482.jpg?w=740&t=st=1689593184~exp=1689593784~hmac=5cec5004057b435780c66f01f54919475bd74fb3bc4ebe754684c79edd9d7671" alt="" className='img-number' />
                    <h1 class="text-red-500   text-center text-4xl font-bold  mt-2  ">1000+
                   </h1>
                   <div className='double-wrap'>Active Users </div>
                </div>
            </div>

        </div>
        {/* Review's */}
        <div className='py-16 '>
            <h1 class="font-serif italic text-xl font-extrabold leading-10 tracking-tight text-left text-black text-center  sm:leading-none md:text-xl text-xl lg:text-4xl py-8">
                <span class="bg-clip-text text-transparent  bg-gradient-to-r from-rose-400 to-red-500">
                    Resources Reviews
                </span>
            </h1>

            <div className='mobile-crousel'>
                <div className='items-1'>
                    <div className='d-flex'>
                        <div className='icon'>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/1.png" alt="Arundhati Lohakare" width="50" height="50" />
                        </div>
                        <h3 className='h3'>ABC</h3>
                    </div>
                    <p className='para' >
                        dskvslvoksdvlkds
                        fm fdlvmdflvmfdvlmdf
                        fdvdvmfdvkfdmvkfdm
                        vkndvkdnvfdkv
                    </p>
                    <div className='readmore'> Read More</div>

                </div>

                <div className='items-1'>
                    <div className='d-flex'>
                        <div className='icon'>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/2.png" alt="Arundhati Lohakare" width="50" height="50" />
                        </div>
                        <h3 className='h3'>Arun kumar</h3>
                    </div>
                    <p className='para' >
                        dskvslvoksdvlkds
                        fm fdlvmdflvmfdvlmdf
                        fdvdvmfdvkfdmvkfdm
                        vkndvkdnvfdkv
                    </p>
                    <div className='readmore'> Read More</div>
                </div>
                <div className='items-1'>
                    <div className='d-flex'>
                        <div className='icon'>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/1.png" alt="Arundhati Lohakare" width="50" height="50" />
                        </div>
                        <h3 className='h3'>Laxman</h3>
                    </div>
                    <p className='para' >
                        dskvslvoksdvlkds
                        fm fdlvmdflvmfdvlmdf
                        fdvdvmfdvkfdmvkfdm
                        vkndvkdnvfdkv
                    </p>
                    <div className='readmore'> Read More</div>

                </div>
                <div className='items-1'>
                    <div className='d-flex'>
                        <div className='icon'>
                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/1.png" alt="Arundhati Lohakare" width="50" height="50" />
                        </div>
                        <h3 className='h3'>Ravi</h3>
                    </div>
                    <p className='para' >
                        dskvslvoksdvlkds
                        fm fdlvmdflvmfdvlmdf
                        fdvdvmfdvkfdmvkfdm
                        vkndvkdnvfdkv
                    </p>
                    <div className='readmore'> Read More</div>
                </div>
            </div>

        </div>

        {/* Faq */}
        <div className='py-16 px-16 '>

            <div className='align-figure '>
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/mentor/faqs-icon.png" alt="img" className="lazy" />
                <h1 class="font-serif text-2xl font-extrabold leading-10 tracking-tight text-center text-black    md:text-2xl text-2xl lg:text-4xl ">
                    <span class="bg-clip-text text-transparent  bg-gradient-to-b from-gray-900 to-gray-600 ">
                      Frequently Asked Questions
                    </span>
                </h1>
            </div>
            <section className='faq'>
                {data.map(data =>
                    <>
                        <div className="question-wrapper">
                            <div className='question' id={data.id}>
                                <h3>{data.question}</h3>
                                <button onClick={() => handleClick(data.id)}>
                                    <svg className={isActive == data.id ? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
                                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className={isActive == data.id ? 'answer active' : 'answer'}>{data.answer}</div>
                        </div></>)}


            </section>
        </div>


        {/* <!-- Footer--> */}
        <div>
            <section class="bg-black">
                <div class="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
                    <h1 class="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl">
                        <span class="inline md:block">Join Us</span>
                        <span class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
                            {" "}
                            In your
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                                {" "}
                                Journey
                            </span>{" "}
                        </span>
                    </h1>
                    <div class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
                        <button class="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
                            Join Jobhunt
                        </button>
                    </div>
                </div>
            </section>

            <hr class="text-white mx-5" />
            <footer class="bg-black pb-5">
                <div class="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex justify-center text-teal-300 sm:justify-start">
                            <img
                                class="rounded-full"
                                src="https://sahilnetic.xyz/evilcat.png"
                                width="40"
                                height="40"
                                alt=""
                            />
                        </div>
                        <p>
                            <div className="flex justify-center px-4 space-x-7 align-center">
                                <h4>------------------------------</h4>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="GitHub"
                                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                >
                                    <svg
                                        viewBox="0 0 496 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-current"
                                    >
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </a>

                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Twitter"
                                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                >
                                    <svg
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-current"
                                    >
                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Email"
                                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                >
                                    <svg
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-current"
                                    >
                                        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Email"
                                    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                            </div>
                        </p>

                        <p class="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                            T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </div >;
}

export default Eresources;