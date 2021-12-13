import styled, { css } from "styled-components";

export const HeadingText = styled.p`
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 1.5rem;
  text-align: ${(props) => props.align};
  color: var(--black);
`;

export const SubHeadingText = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1.1rem;
`;
export const SectionRight = styled.section`
  width: 80vw;
  min-height: 100vh;
`;

export const MainSection = styled.section`
  padding: 2rem;
`;

export const Black = styled.span`
  color: var(--black);
  font-weight: 600;
`;
export const Green = styled.span`
  color: var(--green);
  transition: all 0.1 ease-in-out;
`;
export const Blue = styled.span`
  color: var(--blue);
`;
export const Red = styled.span`
  color: var(--red);
`;

export const LightestGrey = styled.span`
  color: var(--grey-lightest);
  transition: all 0.1 ease-in-out;
`;

export const Error = styled.span`
  display: block;
  font-size: 12px;
  color: red;
`;

export const Star = styled.span`
  color: red;
`;

export const Button = styled.button`
  min-width: auto;
  padding: 0.6rem;
  margin-right: ${(props) => props.right}px;
  margin-bottom: ${(props) => props.bottom}rem;
  margin-top: ${(props) => props.top}px;
  border-radius: 0.4rem;
  border: none;
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  ${(props) =>
    props.primary
      ? css`
          color: #ffffff;
          background: var(--blue);
        `
      : css`
          border: 1.5px solid black;
          color: black;
          background: transparent;
        `}
`;

export const Option = styled.option`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #848484;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 320px;
  background: #ffffff;
  border: 1px solid #8e8e8e;
  border-radius: 10px;
  padding: 20px;
  border-radius: 5px;
  color: black;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 150px;
  }
`;

export const Select = styled.select`
  background: #ffffff;
  border: 1px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 5px;
  height: 50px;
  width: 300px;
  border-radius: 5px;
  padding: 0 10px;
  color: #848484;
  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const FormSection = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: 150px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 60px;
  }
`;
export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  font-family: var(--primary-font);
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  color: #181818;
  margin-bottom: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 5px;
  height: 50px;
  max-width: 300px;
  padding: 0 20px;
  border-radius: 5px;
  color: #848484;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const SubmitButton = styled.input`
  width: 300px;
  height: 76px;
  background: #66bd74;
  border-radius: 20px;
  border: none;
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
  margin-top: 80px;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 18px;
    line-height: 25px;
    width: 250px;
    height: 76px;
  }
`;

export const HeaderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  // min-height: 700px;
`;

export const BannerSection = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const BannerText = styled.p`
  max-width: 560px;
  max-height: 186px;
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 52px;
  line-height: 123%;
  color: #181818;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 8px;
  }
`;

export const Description = styled.p`
  max-width: 710px;
  font-family: var(--primary-font);
  font-weight: normal;
  font-size: 22px;
  line-height: 35px;
  color: #181818;
  margin: 30px 0 60px 0;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    margin: 20px 0 30px 0;
  }
`;

export const VioletText = styled.span`
  background: -webkit-linear-gradient(95.21deg, #766bfe -1.74%, #6321db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const GreyText = styled.div`
  font-family: var(--primary-font);
  font-weight: normal;
  padding: 0;
  margin: 0;
  font-size: 22px;
  line-height: 100.5%;
  text-align: center;
  color: #949494;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Name = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 24px;
  line-height: 137.5%;
  text-align: center;
  color: #181818;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin: 0;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 80%;
    height: 90%;
  }
`;

export const MainBody = styled.div`
  width: 80%;
  margin: 0 auto;
`;
