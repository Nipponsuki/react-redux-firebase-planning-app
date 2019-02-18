import styled from "styled-components";
import main from "../../assets/images/main-bgk.jpg";

export const Grid = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Right = styled.div`
	flex; 1;
	background: linear-gradient(to right bottom, rgba(196,198,205,.5), rgba(67,89,92,.5)), url(${main});
	background-size: cover;
	backgroun-position: center center;
	width: 100%;
	overflow-y: auto;


	@media (max-width: 500px) {
	 flex-direction: column;
	 height: 30rem;
	 overflow: auto;
  }

`;
export const Left = styled.div`
	flex; 0 0 20%;
	background: linear-gradient(to right bottom, #C4C6CD,#43595C);
	padding: 1rem 2rem;
	box-shadow: inset -14px 3px 8px -7px rgba(0, 0, 0, .75);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	@media (max-width: 500px) {
	 flex-direction: row;
	 height: auto;
	 box-shadow: none;
	 padding: 0;
  }
`;
