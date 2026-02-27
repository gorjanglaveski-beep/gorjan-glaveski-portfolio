import type { StaticImageData } from 'next/image'
import project1 from '@/assets/project1.jpg'
import project2 from '@/assets/project2.jpg'
import project3 from '@/assets/project3.jpg'
import project4 from '@/assets/project4.jpg'

export interface Project {
  id: string
  title: string
  category: string
  image: StaticImageData
  description: string
  year: string
  tags: string[]
  images: StaticImageData[]
}

export const projects: Project[] = [
  {
    id: 'igaming-platform-ui',
    title: 'iGaming Platform UI',
    category: 'UI/UX Design',
    image: project1,
    description: 'Full casino platform redesign for Rhino Entertainment — desktop and mobile.',
    year: '2023',
    tags: ['Figma', 'UI Design', 'UX Research', 'Design System', 'iGaming'],
    images: [project1, project3],
  },
  {
    id: 'brand-identity-system',
    title: 'Brand Identity System',
    category: 'Graphic Design',
    image: project2,
    description: 'Logo, typography, and full brand system for a hospitality client.',
    year: '2022',
    tags: ['Illustrator', 'Brand Design', 'Logo', 'Typography', 'Print'],
    images: [project2, project4],
  },
  {
    id: 'sports-betting-app',
    title: 'Sports Betting App',
    category: 'Mobile UI/UX',
    image: project3,
    description: 'End-to-end mobile app UX for a sports betting platform.',
    year: '2023',
    tags: ['Figma', 'Mobile Design', 'Prototyping', 'User Research', 'Usability Testing'],
    images: [project3, project1],
  },
  {
    id: 'social-media-campaign',
    title: 'Social Media Campaign',
    category: 'Digital Design',
    image: project4,
    description: 'Multi-platform social media campaign assets for a luxury brand.',
    year: '2022',
    tags: ['Photoshop', 'After Effects', 'Social Media', 'Motion Design', 'Branding'],
    images: [project4, project2],
  },
]

export const projectsMap: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.id, p])
)
