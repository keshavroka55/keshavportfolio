import type { FC } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  username: string
  name: string
  role: string
  location: string
  profileImage: string
  stats: {
    programs: { value: string; label: string }
    trained: { value: string; label: string }
    certifications: { value: string; label: string }
  }
  skills: string[]
}

const Header: FC<HeaderProps> = ({ username, name, role, location, profileImage, stats, skills }) => {
  // Map skills to their appropriate colors
  const getSkillColor = (skill: string) => {
    const colors: Record<string, string> = {
      AWS: "bg-secondary/20 text-secondary hover:bg-secondary/30",
      Terraform: "bg-green-100 text-green-800 hover:bg-green-200",
      GitHub: "bg-primary/20 text-primary-foreground hover:bg-primary/30",
      Training: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    }

    return colors[skill] || "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }

  return (
    <header className="py-8 border-b border-gray-100">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Image */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md flex-shrink-0 mx-auto md:mx-0">
          <Image
            src={profileImage || "/placeholder.svg"}
            alt="Profile picture"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full mb-4">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <h2 className="text-xl font-medium">{username}</h2>
              <a href={`https://instagram.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 bg-secondary hover:bg-secondary/80 text-white border-0"
                >
                  Follow on Instagram
                </Button>
              </a>
            </div>
            {/* Three dots menu removed */}
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-6 mb-4 text-sm">
            <div className="text-center md:text-left">
              <span className="font-semibold">{stats.programs.value}</span>
              <p className="text-gray-500">{stats.programs.label}</p>
            </div>
            <div className="text-center md:text-left">
              <span className="font-semibold">{stats.trained.value}</span>
              <p className="text-gray-500">{stats.trained.label}</p>
            </div>
            <div className="text-center md:text-left">
              <span className="font-semibold">{stats.certifications.value}</span>
              <p className="text-gray-500">{stats.certifications.label}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="text-center md:text-left">
            <h1 className="text-base font-semibold">{name}</h1>
            <p className="text-gray-700">{role}</p>
            <div className="flex items-center justify-center md:justify-start gap-1 text-gray-500 text-sm mt-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className={getSkillColor(skill)}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
