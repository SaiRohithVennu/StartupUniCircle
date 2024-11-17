import { ProjectCard } from '@/components/project/project-card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Zap, Users } from 'lucide-react';
import { ChatBox } from '@/components/chat/chat-box';
import { ChatToggle } from '@/components/chat/chat-toggle';

const TRENDING_PROJECTS = [
  {
    id: '1',
    name: 'AI-Powered Study Assistant',
    owner: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      department: 'Computer Science'
    },
    description: 'Building an AI assistant to help students organize their study schedules and improve learning efficiency.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  },
  {
    id: '2',
    name: 'Sustainable Campus Initiative',
    owner: {
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      department: 'Environmental Engineering'
    },
    description: 'Developing innovative solutions for campus sustainability, including waste reduction and energy conservation.',
    image: 'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa'
  }
];

const RECENT_PROJECTS = [
  {
    id: '3',
    name: 'Smart Campus Navigation',
    owner: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      department: 'Urban Planning'
    },
    description: 'Creating an interactive campus map with real-time updates and accessibility features.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
  }
];

const RECOMMENDED_PROJECTS = [
  {
    id: '4',
    name: 'Student Mental Health Platform',
    owner: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      department: 'Psychology'
    },
    description: 'Developing a platform to connect students with mental health resources and support networks.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
  }
];

function SectionHeader({ icon: Icon, title, action }: { icon: any, title: string, action?: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <Icon className="w-5 h-5 text-red-600" />
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      {action && (
        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
          {action}
        </Button>
      )}
    </div>
  );
}

function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
      {children}
    </section>
  );
}

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mb-16 md:mb-0 space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Startup Circle</h1>
        <p className="text-lg text-gray-600">Discover innovative projects at University of Cincinnati</p>
      </header>
      
      <Section>
        <SectionHeader icon={TrendingUp} title="Trending Projects" action="View all" />
        <div className="space-y-6">
          {TRENDING_PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader icon={Zap} title="Recently Added" action="View all" />
        <div className="space-y-6">
          {RECENT_PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader icon={Users} title="Recommended for You" action="View all" />
        <div className="space-y-6">
          {RECOMMENDED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Section>

      <ChatBox />
      <ChatToggle />
    </div>
  );
}

export default HomePage;