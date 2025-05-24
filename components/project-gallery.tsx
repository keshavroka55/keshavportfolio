"use client"

import type { FC } from "react"
import Image from "next/image"
import type { Project } from "@/lib/types"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { X, ExternalLink } from "lucide-react"

interface ProjectGalleryProps {
  projects: Project[]
}

const ProjectGallery: FC<ProjectGalleryProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    if (project.deploymentUrl) {
      // If project has a deployment URL, open it in a new tab
      window.open(project.deploymentUrl, "_blank", "noopener,noreferrer")
    } else {
      // Otherwise, show the lightbox
      setSelectedProject(project)
    }
  }

  return (
    <section id="projects" className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group relative">
            <CardContent className="p-0 relative">
              <div className="cursor-pointer relative" onClick={() => handleProjectClick(project)}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.caption}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />

                {project.deploymentUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-secondary text-white px-3 py-2 rounded-full flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-3">
              <p className="text-sm text-gray-700 truncate">{project.caption}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Lightbox for viewing projects without deployment URLs */}
      {selectedProject && (
        <div className="fixed inset-0 bg-primary bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-white z-10 p-1 rounded-full bg-secondary bg-opacity-80 hover:bg-opacity-100"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.caption}
              width={800}
              height={800}
              className="w-full object-contain max-h-[80vh]"
            />
            <div className="bg-white p-4 mt-2">
              <p className="text-gray-900">{selectedProject.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectGallery
