import React from "react";
import styled from "styled-components";

export const Links = ({ links }) => {
  return (
    <Links.Container>
      {links.map(link => {
        return (
          <Links.Link key={link.alt}>
            <Links.Image src={link.image} alt={link.alt} />
            <a href={link.link} target="_blank">
              <button type="button" class="btn">
                {link.text}
              </button>
            </a>
          </Links.Link>
        );
      })}
    </Links.Container>
  );
};

Links.Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Links.Link = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  align-items: center;
  padding: 10px 10px;

  @media only screen and (max-width: 766px) {
    padding: 10px 15%;
  }
`;

Links.Image = styled.img`
  width: 50%;
  max-width: 130px;
  margin-right: 35px;
`;

export default Links;
