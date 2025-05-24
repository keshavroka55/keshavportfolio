"use client"
import type { FC } from "react"
import type { ResumeEntry } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ResumeSectionProps {
  education: ResumeEntry[]
  experience: ResumeEntry[]
  certificates: ResumeEntry[]
}

const ResumeSection: FC<ResumeSectionProps> = ({ education, experience, certificates }) => {
  const renderEntries = (entries: ResumeEntry[]) => (
    <div className="space-y-4">
      {entries.map((entry) => (
        <Card key={entry.id} className="relative group border-secondary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{entry.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-700">{entry.organization}</div>
            <div className="text-gray-500 text-sm">{entry.duration}</div>
            {entry.description && <p className="mt-2 text-gray-600">{entry.description}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <section id="resume" className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Resume</h2>

      <Tabs defaultValue="education" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 bg-primary/10">
          <TabsTrigger value="education" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
            Education
          </TabsTrigger>
          <TabsTrigger value="experience" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
            Experience
          </TabsTrigger>
          <TabsTrigger value="certificates" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
            Certificates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="education">{renderEntries(education)}</TabsContent>
        <TabsContent value="experience">{renderEntries(experience)}</TabsContent>
        <TabsContent value="certificates">{renderEntries(certificates)}</TabsContent>
      </Tabs>
    </section>
  )
}

export default ResumeSection
