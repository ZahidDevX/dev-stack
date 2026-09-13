import bannerStack from "@assets/images/banner-stack.png";
import { Container } from "@components/layout/Container";
const Hero = () => {
    return (
        <section className="py-14 lg:py-28">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                    <div className="space-y-5 text-center md:text-left">
                        <h1 className="flex flex-col text-3xl lg:text-6xl font-secondary font-extrabold">
                            <span className="text-dark">Build Your Ideal</span>
                            <span className="text-gradient-primary">Development Stack</span>
                        </h1>
                        <p className="text-sm lg:text-base">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>
                        <div className="flex gap-3 mt-10">
                            <button className="btn-accent w-full md:w-fit">Explore Technology</button>
                            <button className="btn-outline w-full md:w-fit">Learn More</button>
                        </div>
                    </div>
                    <div>
                        <img src={bannerStack} alt="" className="block mx-auto" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;