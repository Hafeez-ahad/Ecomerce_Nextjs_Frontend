import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-black text-yellow-400 h-[100vh] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-yellow-400 inline-block pb-2">
          About Our Platform
        </h2>
        <p className=" text-sm md:text-lg mb-4 leading-relaxed">
          Welcome to our eCommerce platform — your one-stop destination for quality, convenience, and innovation. 
          Whether you're shopping for essentials or discovering unique finds, our mission is to provide an exceptional 
          online shopping experience tailored for today's fast-moving world.
        </p>
        <p className=" text-sm md:text-lg mb-4 leading-relaxed">
          This platform is proudly crafted by <span className="font-semibold text-white">Hafeez</span>, a passionate full-stack developer 
          committed to building scalable, secure, and user-centric digital experiences. Every feature here is designed 
          with performance and usability in mind.
        </p>
        <p className=" text-sm md:text-lg mb-4 leading-relaxed">
          Thank you for visiting. We're always open to collaboration, feedback, and fresh ideas. Let’s build something amazing together!
        </p>
        <div className="mt-6">
          <span className="text-white font-medium">— Hafeez, Developer</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
