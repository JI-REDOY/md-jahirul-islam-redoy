export interface AboutInfo {
    icon: string;
    label: string;
    value: string;
}

export interface AboutData {
    bio1: string;
    bio2: string;
    info: AboutInfo[];
    resumeUrl: string | null;
    email: string;
}