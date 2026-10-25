export interface Project {
    id: number;
    title: string;
    description: string;
    image: string | null;
    tech: string[];
    liveUrl: string | null;
    githubUrl: string | null;
    featured: boolean;
    challenges?: string;    // নতুন যোগ করা হলো
    improvements?: string;  // নতুন যোগ করা হলো
}