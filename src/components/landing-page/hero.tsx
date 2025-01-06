const HeroSection = () => {
  return (
    <section className="relative h-[430px] flex items-center justify-center text-white">
        <span className="absolute bottom-0 top-0 right-0 left-0 bg-primary/50 z-10">

        </span>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-section.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export default HeroSection;
