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
        platform: "phone",
        label: "Phone",
        value: "+880 1535-798573",
        url: "tel:+8801535798573",
        icon: "phone", // নতুন যোগ করা হলো
        action: "Call",
    },
    {
        id: 3,
        platform: "github",
        label: "GitHub",
        value: "/JI-REDOY",
        url: "https://github.com/JI-REDOY",
        icon: "github",
        action: "Visit",
    },
    {
        id: 4,
        platform: "linkedin",
        label: "LinkedIn",
        value: "/in/ji-redoy",
        url: "https://linkedin.com/in/ji-redoy",
        icon: "linkedin",
        action: "Connect",
    },
    // {
    //     id: 5,
    //     platform: "twitter",
    //     label: "Twitter (X)",
    //     value: "@JI_REDOY", // আপনার ইউজারনেম দিন
    //     url: "https://twitter.com/JI_REDOY", // আপনার লিংক দিন
    //     icon: "twitter", // নতুন যোগ করা হলো
    //     action: "Follow",
    // },
    {
        id: 6,
        platform: "facebook",
        label: "Facebook",
        value: "/ji.redoy.25",
        url: "https://www.facebook.com/ji.redoy.25",
        icon: "facebook",
        action: "Follow",
    },
    {
        id: 7,
        platform: "whatsapp",
        label: "WhatsApp",
        value: "+880 1535-798573",
        url: "https://wa.me/8801535798573",
        icon: "whatsapp",
        action: "Message",
    },
];