export interface Project {
  id: string
  image: string
  caption: string
  deploymentUrl?: string // Added deploymentUrl field
}

export interface ResumeEntry {
  id: string
  title: string
  organization: string
  duration: string
  description: string
}

export interface ProfileInfo {
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
