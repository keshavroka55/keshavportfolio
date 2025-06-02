"use client"

import { useState } from "react"
import Header from "@/components/header"
import ProjectGallery from "@/components/project-gallery"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import type { Project, ResumeEntry } from "@/lib/types"

export default function Portfolio() {
  // Profile information
  const profileInfo = {
    username: "@keshavroka",
    name: "Keshav Roka",
    role: "Software Devloper/AI Professinal",
    location: "Kathmandu, Nepal",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5FDNW0wPBSHn1TGi4z1uGPyROLhTT2.png",
    stats: {
      programs: {
        value: "20+",
        label: "programs",
      },
      trained: {
        value: "1k+",
        label: "trained",
      },
      certifications: {
        value: "5+",
        label: "certifications",
      },
    },
    skills: ["Python", "Pandas", "GitHub", "Numpy"],
  }

  // Sample projects data with Vercel deployment URLs
  const [projects] = useState<Project[]>([
    {
      id: "1",
      image: "/bestdemand.jpg?height=400&width=400",
      caption: "Best Demand Visa website redesign",
      deploymentUrl: "https://diliraj-git-master-keshavs-projects-1e792232.vercel.app/",
    },
    // {
    //   id: "2",
      // image: "/bestdemand.jpg?height=400&width=400",
      // caption: "Best Demand Visa website redesign",
      // deploymentUrl: "https://diliraj-git-master-keshavs-projects-1e792232.vercel.app/",
    // },
    // {
    //   id: "3",
    //   image: "/placeholder.svg?height=400&width=400",
    //   caption: "Healthcare dashboard",
    //   deploymentUrl: "https://vercel.com/rojansedhai/healthcare-dashboard",
    // },
    // {
    //   id: "4",
    //   image: "/placeholder.svg?height=400&width=400",
    //   caption: "Travel booking platform",
    //   deploymentUrl: "https://vercel.com/rojansedhai/travel-booking",
    // },
    // {
    //   id: "5",
    //   image: "/placeholder.svg?height=400&width=400",
    //   caption: "Social media analytics tool",
    //   deploymentUrl: "https://vercel.com/rojansedhai/social-analytics",
    // },
    // {
    //   id: "6",
    //   image: "/placeholder.svg?height=400&width=400",
    //   caption: "Fitness tracking application",
    //   deploymentUrl: "https://vercel.com/rojansedhai/fitness-tracker",
    // },
  ])

  // Sample resume data
  const [education] = useState<ResumeEntry[]>([
    // {
    //   id: "edu1",
    //   title: "Master of Computer Science",
    //   organization: "Stanford University",
    //   duration: "2018 - 2020",
    //   description: "Specialized in Artificial Intelligence and Machine Learning",
    // },
    {
      id: "edu2",
      title: "Bachelor of Software Engineering",
      organization: "Universtiy of Bedfordshire",
      duration: "2014 - 2018",
      description: "Major in Computer Science with minor in Mathematics",
    },
  ])

  const [experience] = useState<ResumeEntry[]>([
    // {
    //   id: "exp1",
    //   title: "Senior Software Engineer",
    //   organization: "Google",
    //   duration: "2020 - Present",
    //   description: "Leading development of cloud-based solutions",
    // },
    // {
    //   id: "exp2",
    //   title: "Software Developer",
    //   organization: "Microsoft",
    //   duration: "2018 - 2020",
    //   description: "Worked on Azure cloud services and infrastructure",
    // },
  ])

  const [certificates] = useState<ResumeEntry[]>([
    {
      id: "cert1",
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      duration: "2021",
      description: "Professional certification for AWS architecture",
    },
    // {
    //   id: "cert2",
    //   title: "Google Cloud Professional Developer",
    //   organization: "Google Cloud",
    //   duration: "2020",
    //   description: "Advanced certification for Google Cloud Platform",
    // },
  ])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Header
          username={profileInfo.username}
          name={profileInfo.name}
          role={profileInfo.role}
          location={profileInfo.location}
          profileImage={profileInfo.profileImage}
          stats={profileInfo.stats}
          skills={profileInfo.skills}
        />

        <main className="mt-12 space-y-20">
          <ProjectGallery projects={projects} />

          <ResumeSection education={education} experience={experience} certificates={certificates} />

          <ContactSection />
        </main>
      </div>
    </div>
  )
}
