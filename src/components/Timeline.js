import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'Aug 2021 - Present',
            title: 'Trinity College Dublin – Dublin, Ireland',
            subtitle: 'M.Sc. Interactive Digital Media',
            type: typeSchool,
        },
        {
            id: 1,
            date: 'Oct 2019 – July 2021',
            title: 'JOSH TECHNOLOGY GROUP – Gurgaon, India',
            subtitle: 'Senior Software Developer - 1',
            type: typeWork,
        },
        {
            id: 2,
            date: 'July 2018 – Sep 2019',
            title: 'JOSH TECHNOLOGY GROUP – Gurgaon, India',
            subtitle: 'Software Developer',
            type: typeWork,
        },
        {
            id: 3,
            date: 'Jan 2018 – Jun 2018  ',
            title: 'JOSH TECHNOLOGY GROUP – Gurgaon, India',
            subtitle: 'Software Development Intern',
            type: typeWork,
        },
        {
            id: 4,
            date: 'Aug 2014 - July 2018',
            title: 'YMCA University of Science and Technology – Faridabad, India',
            subtitle: 'Bachelor of Technology, Computer Engineering',
            type: typeSchool,
        },
        {
            id: 5,
            date: 'Apr 2014',
            title: 'Delhi Public School, Sushant Lok – Gurgaon, India',
            subtitle: 'High School',
            type: typeSchool,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                    <VerticalTimelineElement
                        id={item.id}
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#aaa', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                        date={item.date}
                        iconStyle={{ background: '#aaa', border: '#000' }}
                        icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    </VerticalTimelineElement>
                ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
