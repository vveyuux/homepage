function App() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-background">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">Veerayuth Bussararungsee</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-text sm:text-xl">A Recent Software Engineering Graduate</h2>
                        <p className="mt-4 max-w-xs leading-normal">Seeking for a software engineer position.</p>
                        <nav className="nav hidden lg:block">
                            <ul className="mt-16 w-max">
                                <li>
                                    <a className="group flex items-center py-3 active" href="#about">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-primary transition-all group-hover:w-16 group-hover:bg-secondary group-focus-visible:w-16 group-focus-visible:bg-accent motion-reduce:transition-none"></span>
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary group-focus-visible:text-accent">
                                            About
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center py-3 active" href="#experience">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-primary transition-all group-hover:w-16 group-hover:bg-secondary group-focus-visible:w-16 group-focus-visible:bg-accent motion-reduce:transition-none"></span>
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary group-focus-visible:text-accent">
                                            Experience
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center py-3 active" href="#projects">
                                        <span className="nav-indicator mr-4 h-px w-8 bg-primary transition-all group-hover:w-16 group-hover:bg-secondary group-focus-visible:w-16 group-focus-visible:bg-accent motion-reduce:transition-none"></span>
                                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary group-focus-visible:text-accent">
                                            Projects
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul className="ml-1 mt-8 flex items-center">
                        <li className="mr-5 text-xs shrink-0">
                            <a className="block hover:text-secondary" href="https://github.com/vveyuux" target="_blank" title="Github">
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="h-6 w-6 fill-current text-primary hover:text-secondary transition-colors duration-300 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </header>
                <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                        </div>
                        <div>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis quibusdam facere sed nulla, quas
                                doloribus saepe animi maiores doloremque. Alias aliquam deleniti eius hic nesciunt architecto libero quaerat iste.
                                Accusantium neque non rem itaque maxime porro quasi. Quasi facilis qui impedit enim incidunt quae quos iusto vitae,
                                esse, velit eius autem, sed quam ipsum harum earum in facere voluptas. Ratione, obcaecati placeat deleniti eveniet
                                pariatur suscipit vel. Facere neque sit quas assumenda molestiae beatae officia necessitatibus, veritatis, repudiandae
                                explicabo facilis laudantium dolorem cupiditate, perspiciatis doloribus magnam excepturi modi pariatur! Et quam in,
                                cum necessitatibus beatae iusto nihil temporibus! Sed dolorum unde quasi distinctio veniam sint eum totam doloribus
                                quisquam tempora nemo velit, adipisci fuga libero voluptatibus temporibus, asperiores dicta. Vero voluptatem vel
                                officia nam quo est veniam libero excepturi delectus. Pariatur earum tempore fugit facilis dolorem. Id repellat
                                laboriosam itaque, beatae, explicabo, quam eius iste perferendis quibusdam sequi tempora.
                            </p>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur officiis inventore, voluptate quis quas ex
                                eos itaque voluptates dolorum numquam perferendis ullam! Cupiditate fugiat magni iure ea temporibus explicabo?
                                Asperiores quam nemo ipsa temporibus quibusdam dolore totam libero veniam maiores illum nobis minus iure qui,
                                necessitatibus, accusamus quod dicta. Provident quae tenetur, laborum molestiae praesentium impedit? Perspiciatis,
                                consectetur ducimus. Facere harum molestias officiis? Temporibus id fuga, officiis rerum, voluptas optio esse debitis
                                praesentium enim labore aliquid commodi tempore ipsum quo voluptates perferendis ipsa harum explicabo, aliquam quia.
                                A, non. Nulla repudiandae dignissimos ab earum quas exercitationem deleniti tempora quasi eveniet perferendis quidem
                                voluptas minus libero quisquam eaque eligendi, dolorem aliquam voluptatum mollitia labore quis impedit incidunt
                                laborum? Excepturi, ex!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi hic est odit, rerum provident blanditiis
                                consequatur voluptates illo magnam nulla facere maxime, laudantium neque eius pariatur inventore tempore architecto!
                                Vel deserunt illo modi explicabo quia, harum laudantium fugiat nisi saepe esse nobis distinctio nulla possimus
                                repellat autem eveniet qui mollitia iure voluptas! Quos sed itaque quo nobis facere omnis. Quibusdam, fuga mollitia
                                iste neque velit facilis ducimus. Rerum, maiores magni cum veritatis aliquam assumenda quae, deleniti delectus eveniet
                                nam officia temporibus voluptatum fugiat labore nihil quia beatae doloribus quo?
                            </p>
                        </div>
                    </section>
                    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-text lg:sr-only">Experience</h2>
                        </div>
                        <div>
                            <ol className="group/list">
                                <li className="mb-12">
                                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary sm:col-span-2">
                                            2024 — Present
                                        </header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-primary">
                                                <div>
                                                    <a
                                                        className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-primary focus-visible:text-accent  group/link text-base"
                                                        href=""
                                                    >
                                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            Role Here ·{" "}
                                                            <span className="inline-block">
                                                                Company Here
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                        clip-rule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus mollitia sequi architecto atque
                                                quisquam laboriosam quia nobis ipsa, cum natus? Rerum modi eum velit deleniti tenetur illo. Soluta,
                                                recusandae expedita. Modi itaque hic animi dolor officiis. Tempore voluptatem nihil repellendus atque,
                                                iste ea reprehenderit, tempora dicta ratione, quibusdam libero praesentium aperiam quam expedita fugit
                                                magnam beatae recusandae. Voluptatum, nihil exercitationem?
                                            </p>
                                            <ul className="mt-2 flex flex-wrap">
                                                <li className="mr-1.5 mt-2">
                                                    <div className="flex items-center rounded-full bg-accent/25 px-3 py-1 text-xs font-medium leading-5 text-primary ">
                                                        Tech Stack Here
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <div className="mt-12">
                                <a
                                    className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-secondary focus-visible:text-secondary font-semibold text-primary group/link text-base"
                                    href="/homepage/resume.pdf"
                                    target="_blank"
                                >
                                    <span>
                                        View My{" "}
                                        <span className="inline-block">
                                            CV
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary lg:sr-only">Projects</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                <li className="mb-12">
                                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3>
                                                <a
                                                    className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-primary focus-visible:text-accent  group/link text-base"
                                                    href=""
                                                    target="_blank"
                                                >
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span>
                                                        Project Name Here{" "}
                                                        <span className="inline-block">
                                                            Some App{" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta obcaecati perferendis velit
                                                voluptate vero non dignissimos natus atque corporis, facere inventore eius magnam mollitia
                                                praesentium, officiis saepe autem tenetur!
                                            </p>
                                        </div>
                                        <img alt="Build a Spotify Connected App Newline course marketing card" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color:"transparent"}} src="https://cdn.dribbble.com/userupload/13724940/file/original-9a4b6018922813e5e94c866ea6b37f55.png?resize=1024x1121&vertical=center&amp;w=640&amp;q=75" />
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-12"></div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
