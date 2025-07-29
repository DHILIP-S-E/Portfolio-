import React, { useState, useEffect } from 'react';
import ParticleBackground from '../ParticleBackground';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton, TechIconsContainer, TechIcon, FloatingCard, GlowOrb, AnimatedText, SkillBadge, ProfileSection, ContentSection } from './HeroStyle';
import Typewriter from 'typewriter-effect';
import { loadMarkdownFile } from '../../utils/contentLoader';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaRocket, FaBrain, FaCode } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPython, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiKubernetes, SiDocker } from 'react-icons/si';

const HeroSection = () => {
    const [bio, setBio] = useState(null);
    const [resume, setResume] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const aboutContent = await loadMarkdownFile('/content/about/index.md');
            setBio(aboutContent.frontmatter);

            const resumeContent = await loadMarkdownFile('/content/resume/index.md');
            setResume(resumeContent.frontmatter);
        };
        fetchContent();
    }, []);

    if (!bio || !resume) {
        return (
            <HeroContainer>
                <div style={{color: 'white', fontSize: '24px', textAlign: 'center'}}>
                    Loading portfolio...
                </div>
            </HeroContainer>
        );
    }

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <ParticleBackground />
                    <GlowOrb style={{top: '20%', left: '10%'}} />
                    <GlowOrb style={{top: '60%', right: '15%'}} />
                    <GlowOrb style={{bottom: '20%', left: '70%'}} />
                </HeroBg>
                
                <HeroInnerContainer>
                    <ContentSection>
                        <AnimatedText>
                            <Title>
                                <span>👋</span> Hello, I'm <br />
                                <Span>{bio.name}</Span>
                            </Title>
                            
                            <TextLoop>
                                <FaRocket style={{marginRight: '10px'}} />
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: bio?.roles || ['Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            
                            <SubTitle>
                                <FaBrain style={{marginRight: '8px'}} />
                                {bio.description}
                            </SubTitle>
                        </AnimatedText>
                        
                        <FloatingCard>
                            <h3><FaCode /> Tech Stack</h3>
                            <TechIconsContainer>
                                <SkillBadge><SiTensorflow /> TensorFlow</SkillBadge>
                                <SkillBadge><SiPytorch /> PyTorch</SkillBadge>
                                <SkillBadge><SiPython /> Python</SkillBadge>
                                <SkillBadge><SiAmazonaws /> AWS</SkillBadge>
                                <SkillBadge><SiMicrosoftazure /> Azure</SkillBadge>
                                <SkillBadge><SiGooglecloud /> GCP</SkillBadge>
                                <SkillBadge><SiKubernetes /> K8s</SkillBadge>
                                <SkillBadge><SiDocker /> Docker</SkillBadge>
                            </TechIconsContainer>
                        </FloatingCard>
                        
                        <SocialMediaIcons>
                            <SocialMediaIcon href="https://linkedin.com" target="_blank">
                                <FaLinkedin />
                            </SocialMediaIcon>
                            <SocialMediaIcon href="https://github.com" target="_blank">
                                <FaGithub />
                            </SocialMediaIcon>
                            <SocialMediaIcon href="https://twitter.com" target="_blank">
                                <FaTwitter />
                            </SocialMediaIcon>
                            <SocialMediaIcon href="mailto:contact@example.com">
                                <FaEnvelope />
                            </SocialMediaIcon>
                        </SocialMediaIcons>
                        
                        <ResumeButton href={resume.resume_file} target='display'>
                            📄 {resume.button_text}
                        </ResumeButton>
                    </ContentSection>

                    <ProfileSection>
                        <Img src={"/Hero Image.jpg.jpeg"} alt="hero-image" />
                    </ProfileSection>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection
