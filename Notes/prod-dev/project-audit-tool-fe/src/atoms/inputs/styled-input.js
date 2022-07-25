import styled, { css } from 'styled-components';

 const INPUT = styled.input`
        ${props => {
            switch(props.className){
                

                default:
                    return css`
                    width: 200px;
                    border: none;
                    margin: 20px;
                    display: flex;
                    border-bottom: 1px solid black;
                    
                    `;
                    
          
                
            }
            
            
            
     }
   }
`

export default INPUT;