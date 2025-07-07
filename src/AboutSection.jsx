import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, PlusCircle, Target, Home } from "lucide-react";
const images = [
  "/CA-WEbsite-1.png",
  "/CA-WEbsite-2.png",
  "/CA-WEbsite-4.png",
  "/CA-WEbsite-3.png",

];
const features = [
  {
    icon: <CheckCircle size={40} />,
    title: "Nurturing Every Child’s Potential",
  },
  {
    icon: <PlusCircle size={40} />,
    title: "Dedicated and Experienced Faculty",
  },
  {
    icon: <Target size={40} />,
    title: "A Blend of Tradition and Modern Learning",
  },
  {
    icon: <Home size={40} />,
    title: "Safe and Supportive Learning Environment",
  },
];
const events = [
  {
    date: "15 Dec",
    time: "9AM-5PM",
    location: "Rokeya Hall",
    icon: "https://htmldemo.zcubethemes.com/scholary/img/icon/event-icon-01.png",
    title:
      "Join us for a day of insightful talks and workshops designed to inspire future leaders in various fields.",
  },
  {
    date: "16 Dec",
    time: "8AM-5PM",
    location: "Science Building",
    icon: "https://htmldemo.zcubethemes.com/scholary/img/icon/event-icon-02.png",
    title:
      "Explore cutting-edge innovations and technologies through interactive displays and expert-led discussions.",
  },
  {
    date: "18 Dec",
    time: "7AM-5PM",
    location: "Auditorium",
    icon: "https://htmldemo.zcubethemes.com/scholary/img/icon/event-icon-03.png",
    title:
      "Attend engaging seminars and networking sessions focused on personal and professional development.",
  },
  {
    date: "19 Dec",
    time: "11AM-5PM",
    location: "Main Campus Grounds",
    icon: "https://htmldemo.zcubethemes.com/scholary/img/icon/event-icon-04.png",
    title:
      "Participate in outdoor exhibitions and hands-on activities that promote creativity and teamwork.",
  },
  {
    date: "20 Dec",
    time: "10AM-5PM",
    location: "Innovation Lab",
    icon: "https://htmldemo.zcubethemes.com/scholary/img/icon/event-icon-05.png",
    title:
      "Discover the latest research and innovations from our faculty and student-led projects.",
  },
  {
    date: "21 Dec",
    time: "9AM-5PM",
    location: "Rokeya Hall",
    icon: "https://htmldemo.zcubethemes.com/scholary/img/icon/event-icon-06.png",
    title:
      "Wrap up the week with an exciting event featuring guest speakers and award presentations.",
  },
];
 
const AboutSection=()=>{
   const[currentIndex,setCurrentIndex]=useState(0);
   useEffect(()=>{
    const intervalId=setInterval(()=>{
        setCurrentIndex((prevIndex)=>
        prevIndex===images.length-1?0:prevIndex+1)
    },4000)
    return()=>clearInterval(intervalId);
   },[])
   const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
    <div
      className="relative h-[30vh] md:h-[80vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Colonel’s Academy</h1>
        <p className="text-lg md:text-xl font-medium">
          Empowering students to become lifelong learners and leaders.
        </p>
      </div>
      </div>
      {/* <motion.section
      className="bg-gray-50 py-20 px-6 md:px-32 text-center"
      initial={{ opacity: 0, y: 100 }}        // Start hidden and below
      animate={{ opacity: 1, y: 0 }}          // Animate to visible and in place
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} // Smooth effect
    > */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0a2e57] mb-10 text-center mt-10">
        About Us
      </h2>
      <p className="text-lg md:text-xl text-[#0a2e57] leading-relaxed mb-8 px-10">
        Established in 1995, Colonel’s Academy, Mhow, is a premier co-educational English medium senior secondary institution affiliated
        with the Central Board of Secondary Education (CBSE). Nestled within a sprawling 4.75-acre lush green campus, the academy offers
        a serene and stimulating environment that nurtures joyful and effective learning.
      </p>
      <p className="text-lg md:text-xl text-[#0a2e57] leading-relaxed  px-10" >
        Founded under the visionary leadership of Mrs. Keran Bahadur and the Late Colonel Fateh Jang Bahadur, and governed by the Colonel’s
        Educational and Cultural Society (CECS), the academy is dedicated to fostering lifelong learners grounded in strong values,
        academic excellence, and a sense of social responsibility. At Colonel’s Academy, education transcends the mere transmission of
        information—it is a transformative journey that ignites ethical awareness, creativity, and a lifelong passion for discovery.
      </p>
    {/* </motion.section> */}
     <div>
      {/* Feature Grid */}
      <section className="relative min-h-[300px] md:h-[50vh] text-white py-10 px-4 bg-cover bg-center bg-no-repeat">
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/CA-WEbsite-1.png')" }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-40" />
      <div className="relative z-10 text-white px-4 py-6 sm:px-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="border-white/40 p-4 sm:p-6 rounded-md flex flex-col items-center justify-center gap-3"
            >
              <div className="bg-white text-blue-900 p-3 rounded-full">
                {item.icon}
              </div>
              <p className="text-base sm:text-lg font-medium border border-white/40 px-4 py-3 rounded-md">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

{/* Stats Section */}
      <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-20 mt-16">
  <div className="grid grid-cols-1 md:grid-cols-5 items-start gap-8">
    {/* Left Heading */}
    <div className="md:col-span-1 text-left mb-6 md:mb-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
        Our Achievement
        <br />
        Milestones
      </h2>
    </div>

    {/* Right Stats */}
    <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
      {[
        { number: "120+", label: "Qualified Faculty & Staff" },
        { number: "20+", label: "National & Regional Awards" },
        { number: "10k+", label: "Students Successfully Educated" },
        { number: "900+", label: "Parent & Community Testimonials" },
      ].map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            {stat.number}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      </div>
      <section
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center bg-color-blue-500"
      style={{
        backgroundImage: `url('/explorecampus.png')`, // replace with your public image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       {/* <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      > */}
        
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Explore Our Campus
        </h2>
        {!showVideo && (
        <button
          onClick={() => setShowVideo(true)}
          className="bg-white text-black rounded-full p-4 shadow-lg"
        >
          ▶ Play
        </button>
      )}

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[60%]">
            <video controls autoPlay className="w-full rounded">
              <source src="/Har Ghar Tiranga_final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✕
            </button>
            </div>
        </div>
      )}
      </div>
      {/* </motion.div> */}
    </section>
     <section className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-2/3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-0 px-4 sm:px-8 md:px-20 lg:px-32 ">
              Latest News
            </h2>
          </div>
          <div className="md:w-1/3 text-right hidden md:block">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View More
            </a>
          </div>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
  {events.map((event, index) => (
    <div key={index} className="flex items-start gap-5">
      <div className="shrink-0">
        <img
          src={event.icon}
          alt="event-icon"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-1">
          <strong>{event.date}</strong>{" "}
          <span className="ml-2">{event.time}</span> · {event.location}
        </div>
        <h3 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl font-semibold text-gray-800 hover:text-blue-600 transition">
          <a href="/single-event">{event.title}</a>
        </h3>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>

    </div>
   
    
  );
};

export default AboutSection;
