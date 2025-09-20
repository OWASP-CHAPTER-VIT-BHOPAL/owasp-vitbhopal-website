import React from 'react'
import MemberCard from './memberCard'

interface Member {
    image: string;
    name: string;
    position?: string;
    alt?: string;
    href?: string;
}

interface MembersSectionProps {
    title: string;
    members: Member[];
}

const MembersSection: React.FC<MembersSectionProps> = ({ title, members }) => {
    return (
        <div className='my-16'>
            <h2 className='text-4xl font-medium'>{title}</h2>
            <div className='w-full border-2 my-4 border-dashed border-white/12' />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-7 mt-8 ml-6 md:ml-12">
                {members.map((member, index) => (
                    <MemberCard
                        key={index}
                        image={member.image}
                        name={member.name}
                        position={member.position}
                        alt={member.alt}
                        href={member.href}
                    />
                ))}
            </div>
        </div>
    )
}

export default MembersSection