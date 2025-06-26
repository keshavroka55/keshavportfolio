import type { FC } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <div className="space-y-4">
            <a
              href="mailto:keshavrokaya1244@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors"
            >
              <Mail className="h-5 w-5" />
              keshavrokaya1244@example.com
            </a>
            <a
              href="https://www.linkedin.com/in/keshav-roka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              linkedin.com/keshav/
            </a>
            <a
              href="https://github.com/keshavroka55"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-secondary transition-colors"
            >
              <Github className="h-5 w-5" />
              github.com/keshav
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
