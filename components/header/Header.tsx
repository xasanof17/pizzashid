import React from 'react'
import { HeaderBox, HeaderContent, HeaderText, HeaderTitle, HeaderWrapper } from './headerStyle';

const Header = () => {
   return (
      <>
         <HeaderWrapper>
            <div className="container">
               <HeaderContent>
                  <div className="row">
                  <HeaderBox className="col-12 col-sm-8">
                  <HeaderTitle>We Have The <strong>Best pizza!</strong></HeaderTitle>
                  <HeaderText>Time to enjoy our delicious pizza.</HeaderText>
                  </HeaderBox>
                  </div>
               </HeaderContent>
            </div>
         </HeaderWrapper>
      </>
   )
}

export default Header