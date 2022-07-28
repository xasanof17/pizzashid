import React, { useState } from 'react'
import Image from 'next/image'
import { NavbarWrapper, NavContent, NavLogo, NavBlock, NavList, NavItem, NavLink, NavBlockInner, NavbarBtns, NavBtn, NavSmallBtn } from './navbarStyle.js'
import images from '../../constants/images'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'


const links = [
   { id: 1, name: 'Home', },
   { id: 2, name: 'Menu', },
   { id: 3, name: 'Delivery', },
   { id: 4, name: 'About', },
   { id: 5, name: 'Blog', },
]

const navbar = () => {
   const [active, setActive] = useState(false)
   const addActive = () => {
      setActive(prev => !prev)
   }

   return (
      <>
         <NavbarWrapper>
            <div className="container">
               <NavContent>
                  <NavLogo><Image src={images.logo} width={145} height={40} /></NavLogo>
                  <NavSmallBtn className={active ? 'ml-auto active' : 'ml-auto'} onClick={addActive}>
                     {active ? (
                        <MdOutlineClose fontSize={27} />
                     ) : (
                        <AiOutlineMenu fontSize={27} />
                     )}
                  </NavSmallBtn>
                  <NavBlock className={active ? 'active' : ''}>
                     <NavBlockInner>
                        <NavList>
                           {links.map(({ id, name, }) => (
                              <NavItem key={id}>
                                 <NavLink onClick={addActive}>{name}</NavLink>
                              </NavItem>
                           ))}
                        </NavList>
                        <NavbarBtns>
                           <NavBtn>
                              <AiOutlineSearch fontSize={24} />
                           </NavBtn>
                           <NavBtn>
                              <FiShoppingCart fontSize={24} />
                           </NavBtn>
                           <NavBtn className="sign-in">
                              SIGN IN
                           </NavBtn>
                        </NavbarBtns>
                     </NavBlockInner>
                  </NavBlock>
               </NavContent>
            </div>
         </NavbarWrapper>
      </>
   )
}

export default navbar
