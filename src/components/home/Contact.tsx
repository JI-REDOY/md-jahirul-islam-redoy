import React from "react";
import ContactCard from "../shared/ContactCard";
import { contactLinks } from "@/data/contact";

const Contact = () => {
    return (
        <section id="contact" className="container-fitlog py-12 sm:py-16 lg:py-20">

            {/* Header */}
            <div className="mb-10 text-center sm:mb-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                    Get in touch
                </p>
                <h2 className="font-heading mt-3 text-3xl font-bold uppercase text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                    Contact
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
                    Have a project in mind? Let&apos;s talk. Reach out through any of these channels.
                </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                {contactLinks.map((contact) => {
                    return <ContactCard key={contact.id} contact={contact} />;
                })}
            </div>

        </section>
    );
};

export default Contact;