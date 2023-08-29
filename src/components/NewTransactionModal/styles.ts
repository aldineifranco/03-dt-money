import styled from 'styled-components';
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) =>
    theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 8px;
      padding: 1rem;
      border: 0;
      background-color: ${({ theme }) =>
        theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};

      &::placeholder {
        color: ${({ theme }) =>
          theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border-radius: 8px;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      background-color: ${({ theme }) =>
        theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      border: 0;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${({ theme }) =>
          theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};
  line-height: 0;
`;

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background-color: ${({ theme }) =>
    theme["gray-700"]};
  color: ${({ theme }) => theme["gray-300"]};
  border: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    color: ${({ theme, variant }) =>
      variant === "income"
        ? theme["green-300"]
        : theme["red-300"]};
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme["gray-600"]};
  }
`;

