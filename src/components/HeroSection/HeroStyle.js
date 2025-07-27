import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.card_light} 0%, ${({ theme }) => theme.bg} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  min-height: 100vh;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, ${({ theme }) => theme.primary}20 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${({ theme }) => theme.primary}15 0%, transparent 50%);
    z-index: -1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  
  @media (max-width: 960px) {
    padding-right: 0;
    align-items: center;
    text-align: center;
  }
`;

export const ProfileSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 960px) {
    margin-bottom: 40px;
  }
`;

export const AnimatedText = styled.div`
  animation: slideInLeft 1s ease-out;
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => theme.primary}30 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

export const FloatingCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 20px;
  padding: 25px;
  margin: 30px 0;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border: 1px solid ${({ theme }) => theme.primary}20;
  animation: slideInUp 1s ease-out 0.5s both;
  
  h3 {
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SkillBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primary}15;
  border: 1px solid ${({ theme }) => theme.primary}30;
  border-radius: 25px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary}25;
    transform: translateY(-2px);
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 50px ${({ theme }) => theme.primary}40;
  transition: all 0.3s ease-in-out;
  animation: slideInRight 1s ease-out;
  
  &:hover {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 0 60px ${({ theme }) => theme.primary}60;
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 10px;
  
  span:first-child {
    font-size: 40px;
    margin-right: 10px;
  }
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin: 20px 0;
  
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, #ff6b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary + 95};
  max-width: 600px;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const TechIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const TechIcon = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 16px;
  animation: slideInUp 1s ease-out 0.8s both;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 8px;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease-in-out;
  padding: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
  
  &:nth-child(1):hover { color: #0077B5; } /* LinkedIn */
  &:nth-child(2):hover { color: #333; } /* GitHub */
  &:nth-child(3):hover { color: #1DA1F2; } /* Twitter */
  &:nth-child(4):hover { color: #EA4335; } /* Email */
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    margin-top: 30px;
    color: ${({ theme }) => theme.white};
    border-radius: 25px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s ease-in-out !important;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primary}CC 100%);
    box-shadow: 0 10px 30px ${({ theme }) => theme.primary}40;
    position: relative;
    overflow: hidden;
    animation: slideInUp 1s ease-out 1s both;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px ${({ theme }) => theme.primary}60;
        
        &::before {
            left: 100%;
        }
    }    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;