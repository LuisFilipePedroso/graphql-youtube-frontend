import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export const Left = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #55409C;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    font-size: 2.5rem;
    color: #fff;
    letter-spacing: 2px;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: justify;
    color: #fff;
    margin-top: 32px;
    letter-spacing: 1px;
    line-height: 1.4;
  }
  
  @media (max-width: 999px) {
    height: 350px;
    
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 56px 16px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #55409C;
  
  button {
    padding: 0 8px;
    color: #fff;
    height: 100%;
    border: none;
    background: #55409C;
    font-size: 14px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    svg {
      margin-right: 8px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  background-color: transparent;
  padding-left: 16px;
`;

export const ProfileList = styled.div`
  margin: 16px 0;
  
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  width: 100%;
  max-width: 500px;
  height: 120px;
  
  background-color: #fff;
  border-radius: 4px;
  
  padding: 8px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  margin-top: 8px;
  margin-left: 16px;
  max-height: 120px;
  
  h2 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 1.5;
    max-height: 45px;
    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  
  p {
    font-size: 14px;
    color: #6C6C6C;
    margin-top: 8px;
  }
`;

export const ProfileHeader = styled.div`
`;

export const Description = styled.h2`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 1.5;
    max-height: 45px;
    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

export const ProfileBottom = styled.div`
  
  align-self: center;
`;

export const StarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 24px;
    
    border: 1px solid #D3D3D3;
    border-radius: 4px;
`;

export const StarIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0px 8px;
`;

export const StarTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  
  border-left: 1px solid #D3D3D3;
  
  padding: 0px 8px;

  h4 {
    font-weight: 500;
    font-size: 14px;
    color: #6C6C6C;  
  }  
`;

export const SeeMoreButton = styled.a`
  width: 100%;
  height: 24px;
    
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: #55409C;
  color: #fff;
  
  border-radius: 4px;
  border: none;
  
  font-weight: 400;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  
  display: flex;
  justify-content: space-between;
  
  button {
    background: none;
    border: none;
    height: 30px;
    
    display: flex;
    align-items: center;
    
    color: #55409C;
    font-size: 14px;
  
    &:first-child {
    
      svg {
        margin-right: 8px;
      }
    } 
    
    &:nth-child(2) {
      svg {
        margin-left: 8px;
      }
    }
  }
`;
