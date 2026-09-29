export interface Project {
    id: number;
    title: string;
    description: string;
    image: string | null;
    tech: string[];
    liveUrl: string | null;
    githubUrl: string | null;
    featured: boolean;
}