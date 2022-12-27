import styled from 'styled-components';
// ul {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// p {
//   margin: 0;
// }
export const ProfileInfo = styled.div`
    background-color: #fff;
    border: 1px solid #000;
    margin-right: 1180px;
    box-shadow: 0px 7px 15px -4px #000000;
    width: 270px;
    margin: auto;
    
`;

export const ProfileDescription = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
    padding: 14px;
    margin: auto;
`;
export const ProfileImg = styled.img`
    border-radius: 50%;
    width: 100px;
    margin-bottom: 1px;
    border: 1px solid #000;
    background-color: #f3f6f9;
    align-items: center;
`;
export const ProfileName = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1px;
`;
export const ProfileTag = styled.p`
    color: #808080;
    margin-bottom: -10px;
`;
export const ProfileLocation = styled.p`
    color: #808080;
    margin-bottom: 1px;
`;
export const ProfileStats = styled.ul`
    display: flex;
    gap: 5px;
`;
export const ProfileItems = styled.li`
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    border: 1px solid #000;
    background-color: #f3f6f9;
`;
export const ProfileLabel = styled.span`
    margin-bottom: 4px;
`;
export const ProfileQuantity = styled.span`
    margin-bottom: 4px;
    font-weight: 700;
`;

