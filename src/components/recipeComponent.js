import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px #aaa;
`;

export const CoverImage = styled.img`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0px;
  object-fit: cover;
`;
export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;
export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;
export const RecipeName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0px;
`;
