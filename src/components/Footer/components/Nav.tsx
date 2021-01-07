import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xb67d7a6644d9e191cac4da2b88d6817351c7ff62"
      >
        Contract
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/tomochain?q=iniswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/IniSwap">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/IniSwap">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/iniswap">
        Medium
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  &:hover {
    color: ${(props) => props.theme.color.primary.main};
  }
`

export default Nav
