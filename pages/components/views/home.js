const home = ()=>{
    return(
        `
        <div class="w-full h-vh p-5 bg-slate-300">
            <div class="z-50 w-full relative h-dvh m-auto shadow-lg bg-slate-50 overflow-hidden">
            <div class="z-40">
                    <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
                        <!-- logo -->
                        <h1 class="w-3/12">
                            <a href="" class="text-3xl">LOGO
                            </a>
                        </h1>

                        <!-- navigation -->
                        <nav class="nav font-semibold text-lg ">
                            <ul class="flex items-center">
                                <li class="p-4 border-b-2 border-teal-400 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer active">
                                <a href="#">Home</a>
                                </li>
                                <li class="p-4 border-b-2 border-teal-400 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer">
                                <a href="#menu">Menu</a>
                                </li>
                                <li class="p-4 border-b-2 border-teal-400 border-opacity-0 hover:border-opacity-100 hover:text-teal-400 duration-200 cursor-pointer">
                                <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <!-- buttons --->
                        <div class="w-3/12 flex justify-end gap-4">
                            <li class="list-none bg-teal-400 p-2 rounded-md hover:bg-white hover:border-2 hover:border-teal-400"><a href="/login">Sign in</a></li>
                            <li class="list-none border-2 p-2 border-teal-400 rounded-md"><a href="/register">Sign up</a></li>
                        </div>
                </header>
                    <section class=" w-2/3 bg-teal-100 mt-40 ml-40 sm:ml-10">
                        <h3 class="text-4xl">Food Place</h3>
                    </section>
                    <section class=" w-2/3 bg-teal-100 mt-10 ml-40 sm:ml-10">
                        <h3 class="text-4xl">Were are here for your plaisir</h3>
                    </section>
                    <section class="z-10 w-2/3 bg-teal-100 mt-10 ml-40 sm:ml-10">
                        <h3 class="z-10 text-4xl">Click here to see menu, <li class="text-xl text-white shadow-lg m-2 p-2 bg-teal-600 hover:bg-teal-500 rounded-lg"><a href="/allmenu">All Menu</a></li></h3>
                    </section>
                </div>
                            <div class="-z-10 absolute w-96 h-96 shadow-lg bg-teal-400 rounded-full -right-20 -top-20 ">
                            </div>

                            <div class="-z-10 absolute w-96 h-96 shadow-lg bg-teal-400 rounded-full -left-20 -bottom-20 ">
                            </div>
                    </div>
                    <section class="z-50 w-full relative h-dvh m-auto mt-5 shadow-lg bg-slate-50 overflow-hidden" id="menu">
                        <div class="flex justify-center">
                        <h3 class="text-3xl text-teal-400 mt-10">Menu</h3>
                        </div>
                    </section>
                    <section class="z-50 w-full relative h-dvh m-auto mt-5 shadow-lg bg-slate-50 overflow-hidden" id="contact">
                        <div class="flex justify-normal">
                        <h3 class="text-3xl text-teal-400 ">Contact Us</h3>
                        </div>
                    </section>
                   
                </div>
                `
            )
}
module.exports = home