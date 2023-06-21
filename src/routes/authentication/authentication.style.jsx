import styled from "styled-components";

const breakpointTablet = "786px";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
  width: 90vw;
  @media (max-width: ${breakpointTablet}) {
    flex-direction: column;
  }
`;

/* $breakpoint-tablet: 768px;
.authentication-container{
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    width: 90vw;


    @media (max-width: $breakpoint-tablet) {
        flex-direction:column;
      }
}
 */
