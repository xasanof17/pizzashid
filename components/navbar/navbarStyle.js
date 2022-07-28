import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
padding: 30px 0;
display: flex;
align-items: center;
@media (max-width:821px){
padding: 20px 0;
}
`;

export const NavContent = styled.nav`
display: flex;
align-items: center;
`;

export const NavLogo = styled.a`
display: flex;
align-items: center;
justify-content: center;
`;

export const NavSmallBtn = styled.button`
display: none;
@media (max-width:821px){
   display: block;
   &.active{
      position: absolute;
      top: 26px;
      right: 20px;
      z-index: 100;
   }
}
`;

export const NavBlock = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
@media (max-width:821px){
   display: none;
   &.active{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
}
`;

export const NavBlockInner = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 70%;
@media (max-width:1024px){
   width: 82%;
}
@media (max-width:920px){
   width: 88%;
}
@media (max-width:860px){
   width: 93%;
}
@media (max-width:821px){
   flex-direction: column;
   width: 100%;
}
`;

export const NavList = styled.ul`
display: flex;
@media (max-width:821px){
   margin: 20px 0;
}
@media (max-width:376px){
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
`;

export const NavItem = styled.li`

`;

export const NavLink = styled.a`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: var(--dark);
padding: 0px 17.5px;
transition: .5s ease;
&:hover, &.active{
   color: var(--mainColor);
}
@media (max-width:376px){
   margin: 10px 0;
   display: inline-block;
   font-size: 22px;
}
`;

export const NavbarBtns = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const NavBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin: 0px 12px;
&:nth-child(1){
  margin-left: 0; 
}
&:nth-last-child(1){
 margin-right: 0;  
}
&.sign-in{
   padding: 10px 25px;
   background: var(--mainColor);
   border-radius: 25px;
   text-transform: uppercase;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: var(--white);
}
`;