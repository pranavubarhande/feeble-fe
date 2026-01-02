import { motion } from 'framer-motion';

const Bird = ({ x, y, birdSrc, size = "small", delay = 0 }: { x: string; y: string; birdSrc: string; size?: "small" | "medium" | "large"; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 100, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={size === "large" ? "absolute z-20" : "absolute z-10"}
    style={{ left: x, top: y }}
  >
    <div className="relative">
      {/* Bird SVG */}
      <img
        src={birdSrc}
        alt="Flying bird"
        className={size === "small" ? "w-4 h-4 md:w-6 md:h-6" : size === "medium" ? "w-8 h-8 md:w-10 md:h-10" : "w-12 h-12 md:w-16 md:h-16"}
      />
    </div>
  </motion.div>
);

const CrossingBird = ({ delay = 0, startX, endX, startY, endY, rotate = 0, birdSrc, size = "large" }: { delay?: number; startX: string; endX: string; startY: string; endY: string; rotate?: number; birdSrc: string; size?: "small" | "medium" | "large" }) => (
  <motion.div
    initial={{ x: startX, y: startY, opacity: 0, rotate }}
    animate={{
      x: endX,
      y: endY,
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 2.5,
      delay,
      ease: "linear"
    }}
    className={size === "large" ? "absolute z-20" : "absolute z-10"}
  >
    <div className="relative">
      {/* Bird SVG */}
      <img
        src={birdSrc}
        alt="Crossing bird"
        className={size === "small" ? "w-4 h-4 md:w-6 md:h-6" : size === "medium" ? "w-8 h-8 md:w-10 md:h-10" : "w-12 h-12 md:w-16 md:h-16"}
      />
      {/* Chat Bubble Icon */}
      <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1 shadow-lg">
        <div className="flex gap-0.5">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#E5F2FF] overflow-hidden font-sans text-slate-900">

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/80 backdrop-blur-md rounded-full px-8 py-3 flex items-center justify-between z-50 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/landing-page/app-icon.svg" alt="Coup App Icon" className="w-6 h-6" />

          <span className="text-xl font-bold tracking-tight">coup.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="text-[#8C97A8] transition-colors">How it Works</a>
          <a href="#" className="text-[#8C97A8] transition-colors">Pricing</a>
          <a href="#" className="text-[#8C97A8] transition-colors">Use Case</a>
          <a href="#" className="text-[#8C97A8] transition-colors">FAQ</a>
        </div>

        <button className="bg-[#007AFF] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all">
          Contact Sales
        </button>
      </nav>

      {/* Hero Content */}
      <main className="relative pt-44 flex flex-col items-center text-center px-6 z-20">
        <div className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-sm border border-slate-100 mb-8">
          <div className="bg-[#006FE8] rounded-full p-1 flex gap-0.5">
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
          </div>
          <span className="text-xs font-bold text-[#006FE8] tracking-wide">#1 iMessage Automation Tool</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-8">
          <span className="text-[#007AFF]">iMessage</span> Automation <br />
          for Teams and AI <br /> Workflows.
        </h1>

        <p className="text-slate-500 max-w-xl text-lg leading-relaxed mb-10">
          Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="bg-[#007AFF] text-white px-10 py-4 rounded-[50px] font-bold text-lg hover:bg-[#007AFF] transition-all shadow-lg">
            Get Started
          </button>
          <button className="flex items-center gap-2 bg-transparent text-slate-900 px-8 py-4 rounded-[50px] font-bold text-lg hover:bg-slate-200 transition-all border border-[#6C788F]">
            <img src="/landing-page/apple.svg" alt="Apple" className="w-5 h-5" />
            <span>Download the Mac app</span>
          </button>
        </div>
      </main>

      {/* Animated Birds Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Birds around main hero area - smaller birds */}
        <Bird x="20%" y="25vh" birdSrc="/landing-page/bird1.svg" size="medium" delay={0} />
        <Bird x="30%" y="30vh" birdSrc="/landing-page/bird1.svg" size="medium" delay={0.2} />
        <Bird x="70%" y="28vh" birdSrc="/landing-page/bird1.svg" size="medium" delay={0.4} />
        <Bird x="72%" y="40vh" birdSrc="/landing-page/bird1.svg" size="medium" delay={0.6} />

        {/* Birds around cloud area - larger birds */}
        <Bird x="17%" y="90vh" birdSrc="/landing-page/bird2.svg" size="large" delay={0.8} />
        <Bird x="35%" y="80vh" birdSrc="/landing-page/bird3.svg" size="large" delay={1} />
        <Bird x="65%" y="90vh" birdSrc="/landing-page/bird4.svg" size="large" delay={1.2} />
        <Bird x="85%" y="80vh" birdSrc="/landing-page/bird5.svg" size="large" delay={1.4} />

        {/* Crossing Birds - Simultaneous diagonal flights (faster speed) */}
        <CrossingBird
          delay={2}
          startX="-10vw"
          endX="110vw"
          startY="100vh"
          endY="20vh"
          rotate={20}
          birdSrc="/landing-page/bird1.svg"
          size="large"
        />
        <CrossingBird
          delay={2}
          startX="110vw"
          endX="-10vw"
          startY="100vh"
          endY="20vh"
          rotate={-20}
          birdSrc="/landing-page/bird2.svg"
          size="large"
        />
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-lg font-medium">Scroll to learn more</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ↓
        </motion.div>
      </div>

      {/* Stylized Cloud Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 flex items-end justify-around z-10 pointer-events-none"
      >
        <img
          src="/landing-page/cloud.svg"
          alt="Cloud"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;