import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  name: string;
  owner: {
    name: string;
    avatar: string;
    department: string;
  };
  description: string;
  image?: string;
}

export function ProjectCard({ id, name, owner, description, image }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:bg-gray-100">
      <div className="flex flex-col md:flex-row md:items-center">
        {image && (
          <div className="md:w-1/3 md:shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
        )}
        <div className="p-4 md:p-6 flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <Avatar src={owner.avatar} alt={owner.name} size="sm" />
            <div>
              <h3 className="font-medium text-gray-900">{owner.name}</h3>
              <p className="text-sm text-gray-500">{owner.department}</p>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center space-x-4">
            <Link
              to={`/projects/${id}`}
              className="inline-flex items-center justify-center space-x-2 rounded-md bg-red-600 px-4 h-10 text-white hover:bg-red-700 transition-colors"
            >
              <span>View Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center justify-center rounded-md h-10 px-4 border border-gray-300 bg-white hover:bg-gray-50">
              Join Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}