
"use client";
import { Container } from "./container";
import React, { useState } from "react";
import { upCommingEvents, pastEvents } from "../Content/Events";
import Image from "next/image";

interface AccordionProps {
    title: string;
    imageSrc?: string;
    description: string;
    open: boolean;
    onClick: () => void;
}

const EventCollapsible: React.FC<AccordionProps> = ({ title, imageSrc, description, open, onClick }) => {
    return (
        <div className="w-full rounded-2xl border-2 border-[var(--border)] p-6 mt-8">
            <button
                className="w-full flex justify-between items-center text-lg font-medium text-white"
                onClick={onClick}
                aria-expanded={open}
            >
                <span
                    className={`text-2xl ${open ? "font-bold" : "font-light"}`}
                >{title}</span>
                <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="flex gap-6 mt-4 items-start">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={title}
                            className="w-40 h-32 object-cover rounded-xl bg-[#111] aspect-square"
                        />
                    )}
                    <p className="text-[var(--muted-text)] text-base leading-relaxed">{description}</p>
                </div>
            )}
        </div>
    );
};


interface UpcomingEventProps {
    events: Array<{
        title: string;
        date: string;
        description: string;
        link?: string;
        imgUrl?: string;
        time?: string;
        venu?: string;
    }>;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ events }) => {
    return (
        <div className="w-full rounded-2xl border-2 border-[var(--border)] mt-8 ">
            <div className="w-full h-full flex flex-col p-6">
                <div className='flex justify-between items-center'>
                    <div className="text-3xl font-medium">Upcoming Event</div>
                    <div>
                        <a href='/events' className="text-md font-medium transition-transform duration-200 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right transition-transform duration-200 group-hover:rotate-0 rotate-45"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                        </a>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-[var(--border)] my-4" />
                {events.map((event, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 items-center mb-6">
                        {event.imgUrl ? (
                            <Image src={event.imgUrl} alt={event.title} className="w-full md:w-1/2 h-58 bg-white rounded-2xl aspect-square object-cover" />
                        ) : (
                            <div className="w-full md:w-1/2 h-58 bg-white rounded-2xl aspect-square" />
                        )}
                        <div className="flex flex-col gap-4">
                            <div className="text-2xl font-semibold">{event.title}</div>
                            <div className="text-sm font-normal text-[var(--muted-text)]">{event.description}</div>
                            <div>
                                <div className="text-sm font-medium text-[var(--muted-text)]">Date: {event.date}</div>
                                <div className="text-sm font-medium text-[var(--muted-text)]">Time: {event.time}</div>
                                <div className="text-sm font-medium text-[var(--muted-text)]">Location: {event.venu}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const EventSection = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    return (
        <Container>
            <div className="w-full gap-20 flex justify-between items-start mt-10">
                <div className="flex flex-col gap-4 w-1/2 h-full">
                    <div className="text-7xl font-medium">Our Events</div>
                    <div className="w-full h-[2] bg-white/12" />
                    <div className="text-sm font-normal text-[var(--muted-text)]">
                        Over the years we’ve transformed the face of cybersecurity, therby therefore realise regardless thereafter unrestored underestimated variety of various undisputed achievments
                    </div>
                    <UpcomingEvent events={upCommingEvents} />
                </div>
                <div className="flex flex-col justify-between w-1/2 h-full">
                    {pastEvents.map((event, idx) => (
                        <EventCollapsible
                            key={idx}
                            title={event.title}
                            imageSrc={event.imgUrl}
                            description={event.description}
                            open={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default EventSection