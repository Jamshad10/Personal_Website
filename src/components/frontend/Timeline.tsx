import React from 'react';

const Timeline = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                <h3 className="text-3xl font-semibold">Education</h3>
                                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">Vestibulum diam nunc</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <ol className="border-l border-neutral-300">
                                {/* First item */}
                                <li>
                                    <div className="flex-start flex items-center pt-3">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                                        <p className="text-sm text-neutral-500">
                                            2014 to 2017
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                                        <p className="mb-3 text-neutral-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.
                                        </p>
                                    </div>
                                </li>

                                {/* Second item */}
                                <li>
                                    <div className="flex-start flex items-center pt-2">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                                        <p className="text-sm text-neutral-500">
                                            13.09.2021
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
                                        <p className="mb-3 text-neutral-500">
                                            Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.
                                        </p>
                                    </div>
                                </li>

                                {/* Third item */}
                                <li>
                                    <div className="flex-start flex items-center pt-2">
                                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
                                        <p className="text-sm text-neutral-500">
                                            25.11.2021
                                        </p>
                                    </div>
                                    <div className="ml-4 mt-2 pb-5">
                                        <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
                                        <p className="mb-3 text-neutral-500">
                                            Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                                        </p>
                                    </div>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Timeline;