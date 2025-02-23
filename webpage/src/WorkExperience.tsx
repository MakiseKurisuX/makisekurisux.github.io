import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography,  Box, CardMedia } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const experiences = [
    {
      company: 'Voltade',
      role: 'Solutions Engineer Intern',
      duration: 'Dec. 2024 – Jan. 2025',
      logo: 'https://static.mycareersfuture.gov.sg/images/company/logos/98ad524e538368594017b76b1bbe7ce6/voltade.png',
      responsibilities: [
        'Developed a solution for finding the leads of Small - Medium Enterprises using Google Custom Search, DuckDuckGo and OpenAI’s API models.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg'
      ]
    },
    {
      company: 'RAiD, Republic of Singapore Air Force',
      role: 'Data Engineer',
      duration: 'May 2024 – Aug. 2024',
      logo: 'https://rsaf-agile-inno-digital.defence.gov.sg/images/Black_RAiD__Reg_.png',
      responsibilities: [
        'Developed a Pipeline for Data Transfer from Data Source to our Database.',
        'Labeled and performed data analysis to derive insights from the data.',
        'Delivered Data Insights to Superiors and made recommendations on how to better display data.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg'
      ]
    },
    {
      company: 'RAiD, Republic of Singapore Air Force',
      role: 'Innovation Support Assistant',
      duration: 'Jan. 2022 – Aug. 2023',
      logo: 'https://rsaf-agile-inno-digital.defence.gov.sg/images/Black_RAiD__Reg_.png',
      responsibilities: [
        'Developed Full-Stack Telegram Bot using TypeScript, React, Telegram API, and PostgreSQL.',
        'Developed a Telegram Bot using DialogFlow and JavaScript for FAQ purposes.',
        'Built a webpage using React & Material-UI for an internal innovation promotion campaign.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
      ]
    },
    {
      company: 'NCS Group, Singtel',
      role: 'Transformation Office Intern',
      duration: 'Mar. 2021 – Jul. 2021',
      logo: 'https://www.magnolia-cms.com/dam/jcr:166fe371-df03-4fdf-a50a-c081d9bcd0b0/NCS-logo.png',
      responsibilities: [
        'Developed applications using OutSystems to improve internal workflow.',
        'Built pipelines using Microsoft Power Automate to automate workflows, cutting down standup actions by 15%.',
        'Communicated with higher-ups to propose workflow improvements.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
      ]
    },
    {
      company: 'Trustwave, Singtel',
      role: 'Fullstack Software Engineer Intern',
      duration: 'Sep. 2020 – Feb. 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Singtel_logo.svg/2560px-Singtel_logo.svg.png',
      responsibilities: [
        'Awarded Singtel Cyber Security Cadet Scholarship.',
        'Built complex database queries using ArangoDB/MongoDB and integrated them with GraphQL.',
        'Developed dashboards using React, TypeScript, and D3.js for data visualization.',
        'Built pipelines for data transfer using PySpark.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg'
      ]
    },
  ];

  const WorkExperienceSection: React.FC = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container
          sx={{
            minHeight: '100vh', 
            paddingTop: '1rem', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Work Experience
          </Typography>
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Box sx={{
                    padding: '1rem',
                    background: 'linear-gradient(to right, #ffffff, #f1f1f1)',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
                    textAlign: index % 2 === 0 ? 'left' : 'right'
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                      {experience.role} at {experience.company}
                    </Typography>
                    <Typography variant="body2" color="gray" sx={{ marginBottom: '0.5rem' }}>
                      {experience.duration}
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="#444">{responsibility}</Typography>
                        </li>
                      ))}
                    </ul>
                    <Box sx={{
                      display: 'flex',
                      gap: 2,
                      marginTop: 2,
                      justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                    }}>
                      {experience.techStack.map((logo, i) => (
                        <CardMedia
                          key={i}
                          component="img"
                          sx={{ width: 40, height: 40, objectFit: 'contain' }}
                          image={logo}
                          alt="Tech Logo"
                        />
                      ))}
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </motion.div>
    );
  };
  
  export default WorkExperienceSection;