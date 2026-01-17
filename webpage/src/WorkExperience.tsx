import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography,  Box, CardMedia, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import GlassmorphismCard from './components/GlassmorphismCard';

const MotionTimelineItem = motion(TimelineItem);

const experiences = [
    {
      company: 'GovTech Singapore',
      role: 'Software Engineer Intern',
      duration: 'Jan. 2026 - Current',
      logo: 'https://opengovasia.com/wp-content/uploads/2025/07/GovTechSg-True-Inline-Logo-3-Blue.png',
      responsibilities: [
        'Engineered an application integrating Singpass OpenID Connect (OIDC) to automate user identity extraction.',
        'Traced authentication events and validated OIDC token exchanges using Datadog and Amazon CloudWatch.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg'
      ]
    },
    {
      company: 'GIC Pte. Ltd.',
      role: 'Software Engineer Intern',
      duration: 'May. 2025 - Dec. 2025',
      logo: 'https://www.gic.com.sg/uploads/2021/03/default-demo.jpg',
      responsibilities: [
        'Architected an autonomous agent platform using LangGraph and LangChain to power multi-step, multi-tool LLM research pipelines.',
        'Orchestrated Apache Airflow DAGs integrated with RAG pipelines and LLM APIs, automating portfolio analysis and report generation.',
        'Optimized RAG retrieval accuracy and output reliability by evaluating and implementing advanced chunking strategies and embedding models.',
        'Reduced workflow runtime by 75% by refactoring synchronous code into asynchronous Python, accelerating insight delivery for portfolio teams.',
      ],
      techStack: [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png',
        'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
      ]
    },
    {
      company: 'Voltade',
      role: 'Software Engineer Intern',
      duration: 'Dec. 2024 – Jan. 2025',
      logo: 'https://static.mycareersfuture.gov.sg/images/company/logos/98ad524e538368594017b76b1bbe7ce6/voltade.png',
      responsibilities: [
        'Generated 1,500+ business leads by engineering a discovery engine utilizing Google Custom Search, LLM APIs, and RAG.',
        'Developed and deployed an internal search application to automate the categorization and retrieval of potential SME clients.',
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
        'Engineered efficient data pipelines using Apache Spark to optimize the processing of 10M+ records.',
        'Designed and implemented interactive data visualization dashboards using D3.js, React, and TypeScript to improve data accessibility.',
        'Developed complex GraphQL schemas to extract and aggregate data from ArangoDB and MongoDB.',
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
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
      <Container
        sx={{
          minHeight: '100vh',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.2,
          },
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white',
              marginBottom: 4,
              background: 'linear-gradient(45deg, #00D4FF, #FF6B9D)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 3s ease infinite',
            }}
          >
            Professional Journey
          </Typography>
        </motion.div>
        
        <Timeline position={isMobile ? "right" : "alternate"} sx={{ maxWidth: '1200px', padding: 0 }}>
          {experiences.map((experience, index) => (
            <MotionTimelineItem
              key={index}
              initial={{ opacity: 0, x: isMobile ? 50 : (index % 2 === 0 ? -100 : 100) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TimelineSeparator>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TimelineDot 
                    sx={{ 
                      background: 'linear-gradient(45deg, #00D4FF, #FF6B9D)',
                      width: '20px',
                      height: '20px',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    }} 
                  />
                </motion.div>
                {index !== experiences.length - 1 && (
                  <TimelineConnector 
                    sx={{ 
                      background: 'linear-gradient(45deg, #00D4FF, #FF6B9D)',
                      width: '3px',
                    }} 
                  />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <GlassmorphismCard
                  sx={{
                    textAlign: isMobile ? 'left' : (index % 2 === 0 ? 'left' : 'right'),
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #00D4FF, #FF6B9D, #C770F0)',
                      backgroundSize: '200% 100%',
                      animation: 'gradientShift 3s ease infinite',
                    },
                  }}
                >
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 'bold', 
                        color: 'white',
                        marginBottom: 1,
                      }}
                    >
                      {experience.role}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#00D4FF',
                        fontWeight: '600',
                        marginBottom: 1,
                      }}
                    >
                      {experience.company}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        marginBottom: 2,
                        fontSize: '1rem',
                      }}
                    >
                      {experience.duration}
                    </Typography>
                    <Box 
                      component="ul" 
                      sx={{ 
                        margin: 0, 
                        paddingLeft: '1.5rem',
                        listStyle: 'none',
                        '& li': {
                          position: 'relative',
                          marginBottom: '0.5rem',
                          '&::before': {
                            content: '"▶"',
                            position: 'absolute',
                            left: '-1.5rem',
                            color: '#00D4FF',
                            fontSize: '0.8rem',
                          },
                        },
                      }}
                    >
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.9)',
                              lineHeight: 1.6,
                              fontSize: '0.95rem',
                            }}
                          >
                            {responsibility}
                          </Typography>
                        </motion.li>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        marginTop: 3,
                        justifyContent: isMobile ? 'flex-start' : (index % 2 === 0 ? 'flex-start' : 'flex-end'),
                        flexWrap: 'wrap',
                      }}
                    >
                      {experience.techStack.map((logo, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotateY: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '12px',
                              background: 'rgba(255, 255, 255, 0.4)',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.6)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '8px',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: 'rgba(0, 212, 255, 0.3)',
                                border: '1px solid rgba(0, 212, 255, 0.6)',
                                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.4)',
                              },
                            }}
                          >
                            <CardMedia
                              component="img"
                              sx={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                              }}
                              image={logo}
                              alt="Tech Logo"
                            />
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                </GlassmorphismCard>
              </TimelineContent>
            </MotionTimelineItem>
          ))}
        </Timeline>
      </Container>
    );
  };
  
  export default WorkExperienceSection;