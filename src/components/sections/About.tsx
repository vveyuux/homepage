import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">
                    I began learning to code when I received a scholarship for a computer engineering major. After about 2-3 months of coding, I
                    discovered a deep love for solving logical problems, which is why I chose computer engineering as my field of study.
                </p>
                <p className="mb-4">
                    I have always been curious about new technologies, and I get very excited when I understand how they work and their benefits.
                    Whenever my instructor teaches me something new, I actively use that knowledge without waiting for assignments.
                </p>
                <p className="mb-4">
                    During my internship at{" "}
                    <a href="https://scbtechx.io/th/home/" target="_blank">
                        <span className="font-bold hover:text-primary transition-colors duration-200 ease-in-out">SCB TechX</span>
                    </a>
                    , I learned a lot and experienced what real software engineering work is like. I was assigned to develop frontend work and add new
                    features to the backend of the{" "}
                    <span className="font-bold hover:text-primary transition-colors duration-200 ease-in-out">Clocking Web App</span>, a system that
                    helps employees record their work conveniently. Additionally, I worked on the frontend and backend logic of dashboard features of
                    the <span className="font-bold hover:text-primary transition-colors duration-200 ease-in-out">Overtime Web App</span> which is a
                    system that allows employees to request to work over normal working hours. The tasks were challenging, but I tackled them with
                    enthusiasm and completed the job that my advisor gave me. Seeing my work deployed and used by the company was a rewarding
                    experience.
                </p>
                <p>
                    As a recent software engineering graduate, I am passionate about coding and problem-solving. I enjoy working with new technologies
                    and finding innovative ways to apply them to my projects. My enthusiasm for learning and applying new concepts motivates me to
                    take on challenges and deliver effective software solutions.
                </p>
            </div>
        </section>
    );
};

export default About;
