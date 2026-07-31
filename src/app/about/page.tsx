import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      
      {/* 1. BIOGRAPHY & HEADSHOT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left Column: Text (Takes up 7 out of 12 columns on large screens) */}
        <div className="lg:col-span-7">
          <div className="text-xs font-mono text-[#F4F6F5] tracking-widest mb-4">
            // BIOGRAPHY
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F6F5] mb-6">
            Engineering with Purpose.
          </h1>
          <div className="space-y-6 text-[#A2ADA6] text-lg leading-relaxed">
            <p>
              I'm a Mechatronics Engineering Technology student at Texas A&M University 
              pursuing a minor in Embedded Systems Integration. My interests are in robotics, 
              embedded systems, control systems, autonomous systems, and industrial automation.
            </p>
            <p>
              I enjoy building projects that bring together software and hardware—from autonomous 
              robots and embedded controllers to mechanical design and automation tools. I'm especially 
              interested in understanding how individual components work together to create reliable, 
              real-world engineering systems.
            </p>
          </div>
        </div>

        {/* Right Column: Integrated Headshot (Takes up 5 out of 12 columns) */}
        <div className="lg:col-span-5 relative group">
          {/* Decorative wireframe offset box */}
          <div className="absolute inset-0 border border-[#5EA87B]/30 translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />
          
          <div className="relative rounded-xl overflow-hidden border border-[rgba(120,150,130,0.2)] bg-[#0C1210]">
            {/* Color grading overlay that fades on hover */}
            <div className="absolute inset-0 bg-[#2F6B4F]/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
            
            <Image
              src="/headshot.jpg"
              alt="Leonardo Molina"
              width={600}
              height={700}
              className="w-full h-auto object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>

      </div>

      {/* 2. TIMELINE SECTION */}
      <div className="max-w-3xl">
        <div className="text-xs font-mono text-[#F4F6F5] tracking-widest mb-10">
          // ACADEMIC_&_INDUSTRY_TIMELINE
        </div>
        
        <div className="space-y-10 border-l border-[rgba(120,150,130,0.15)] ml-2 pl-6">
          
          {/* Tex-Tube Steel */}
          <div className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-[#5EA87B]" />
            <div className="text-xs font-mono text-[#A2ADA6] mb-1">May 2026 – August 2026</div>
            <h3 className="text-lg font-medium text-[#F4F6F5]">Project Engineering Intern @ Tex-Tube Steel</h3>
            <div className="text-sm text-[#7E8882] mt-1">Houston, TX</div>
          </div>

          {/* SOMTECH Robotics */}
          <div className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-[#5EA87B]" />
            <div className="text-xs font-mono text-[#A2ADA6] mb-1">September 2024 – Present</div>
            <h3 className="text-lg font-medium text-[#F4F6F5]">Mechanical Lead / End Effector Lead @ SOMTECH Robotics</h3>
            <div className="text-sm text-[#7E8882] mt-1">College Station, TX</div>
          </div>

          {/* Texas A&M at Qatar */}
          <div className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full border border-[#5EA87B] bg-[#050806]" />
            <div className="text-xs font-mono text-[#A2ADA6] mb-1">May 2023 – July 2023</div>
            <h3 className="text-lg font-medium text-[#F4F6F5]">AI/ML Research Intern @ Texas A&M University at Qatar</h3>
            <div className="text-sm text-[#7E8882] mt-1">Al Rayyan, Qatar</div>
          </div>

        </div>
      </div>

    </div>
  );
}
