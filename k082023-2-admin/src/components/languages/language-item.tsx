import styled from "styled-components";

import { Colors } from "@/themes";

const ItemContainer = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.WHITE};
    border: none;
    padding: 5px;
    cursor: pointer;

    &.active-language {
      background: ${Colors.GREEN};
    }

    &:hover {
      background: ${Colors.GREEN};
    }

    img {
      width: 15px;
      height: 15px;
    }

    span {
      color: ${Colors.BLACK};
      display: inline-block;
      padding-left: 5px;
    }
  }
`;

const LanguageItem = ({
  onChangeLanguage,
  name,
  icon,
  className
}: any) => {
  return (
    <ItemContainer>
      <button className={className} onClick={onChangeLanguage}>
        <img src={icon} alt="symbol" />
        <span>{name}</span>
      </button>
    </ItemContainer>
  );
};

export default LanguageItem;
