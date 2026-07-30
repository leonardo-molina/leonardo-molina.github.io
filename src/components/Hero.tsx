'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowUpRight, FileText, Github, Linkedin, Cpu, Activity, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 border-b border-[rgba(255,255,255,0.05)] bg-grid-pattern">
      {/* Subtle radial ambient spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2F6B4F]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1210] border border-[rgba(120,150,130,0.18)] text-xs font-mono text-[#8CC6A0]">
            <span className="w-2 h-2 rounded-full bg-[#5EA87B] animate-pulse" />
            <span>{profileData.university} • {profileData.degree}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6F5] leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F6F5] via-[#5EA87B] to-[#8CC6A0]">Intelligent Systems.</span>
          </h1>

          <p className="text-lg text-[#A2ADA6] max-w-2xl leading-relaxed font-normal">
            {profileData.bio}
          </p>

          {/* Action Control Panel */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-[#2F6B4F] hover:bg-[#5EA87B] text-[#F4F6F5] font-medium text-sm transition-all duration-200 shadow-lg shadow-[#2F6B4F]/20 flex items-center gap-2 border border-[#8CC6A0]/30"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0C1210] hover:bg-[#131A17] text-[#F4F6F5] font-medium text-sm transition-all duration-200 border border-[rgba(120,150,130,0.2)] flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#5EA87B]" />
              <span>Resume</span>
            </a>

            <div className="flex items-center gap-2 ml-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#0C1210] hover:bg-[#131A17] text-[#A2ADA6] hover:text-[#F4F6F5] transition-colors border border-[rgba(120,150,130,0.15)]"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#0C1210] hover:bg-[#131A17] text-[#A2ADA6] hover:text-[#F4F6F5] transition-colors border border-[rgba(120,150,130,0.15)]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Robotics Telemetry Box */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-[#0C1210] border border-[rgba(120,150,130,0.2)] shadow-2xl space-y-6 relative overflow-hidden group">
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#5EA87B]" />
                <span className="text-xs font-mono tracking-wider text-[#7E8882] uppercase">// SYSTEM TELEMETRY</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#2F6B4F]/20 text-[#8CC6A0] border border-[#2F6B4F]/40">
                {profileData.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#131A17] border border-[rgba(120,150,130,0.1)]">
                <span className="text-[#7E8882] block text-[10px]">PRIMARY STACK</span>
                <span className="text-[#F4F6F5] font-semibold mt-1 block">C++, ROS 2, Python</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A17] border border-[rgba(120,150,130,0.1)]">
                <span className="text-[#7E8882] block text-[10px]">HARDWARE FOCUS</span>
                <span className="text-[#F4F6F5] font-semibold mt-1 block">STM32, RPi, Sensors</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A17] border border-[rgba(120,150,130,0.1)]">
                <span className="text-[#7E8882] block text-[10px]">DEGREE</span>
                <span className="text-[#F4F6F5] font-semibold mt-1 block">Multidisciplinary Eng.</span>
              </div>
              <div className="p-3 rounded-lg bg-[#131A17] border border-[rgba(120,150,130,0.1)]">
                <span className="text-[#7E8882] block text-[10px]">GPA</span>
                <span className="text-[#8CC6A0] font-semibold mt-1 block">{profileData.gpa}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#7E8882]">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#5EA87B]" /> Real-time Control
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8CC6A0]" /> Kinematics & SLAM
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
