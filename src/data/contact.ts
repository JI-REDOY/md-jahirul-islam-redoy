import { ContactLink } from "@/types/contact.types";

export const contactLinks: ContactLink[] = [
    {
        id: 1,
        platform: "email",
        label: "Email",
        value: "aridoy102536@gmail.com",
        url: "mailto:aridoy102536@gmail.com",
        icon: "mail",
        action: "Send",
    },
    {
        id: 2,
        platform: "github",
        label: "GitHub",
        value: "/JI-REDOY",
        url: "https://github.com/JI-REDOY",
        icon: "github",
        action: "Visit",
    },
    {
        id: 3,
        platform: "linkedin",
        label: "LinkedIn",
        value: "/in/jiredoy",
        url: "https://linkedin.com/in/jiredoy",
        icon: "linkedin",
        action: "Connect",
    },
    {
        id: 4,
        platform: "facebook",
        label: "Facebook",
        value: "/ji.redoy.25",
        url: "https://www.facebook.com/ji.redoy.25",
        icon: "facebook",
        action: "Follow",
    },
    {
        id: 5,
        platform: "whatsapp",
        label: "WhatsApp",
        value: "+880 1535-798573",
        url: "https://wa.me/8801535798573",
        icon: "whatsapp",
        action: "Message",
    },
];