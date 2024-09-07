import React from "react";
import { Button } from "@components/Button";
import { Dialog, Flex } from "@radix-ui/themes";
import styles from "./ModalDialog.module.scss";

type ModalDialogProps = {
  triggerBtnText: string;
  title: string;
  contents: React.ReactNode;
  submitButtonText?: string;
  formAction: (formData: FormData) => void;
  initData?: {
    title: string;
    contents: string;
  };
};

/**
 * ModalDialog 컴포넌트
 * @param {Object} ModalDialogProps
 * @property {string} triggerBtnText - ModalDialog 을 trigger 버튼의 텍스트
 * @property {string} title - ModalDialog 제목
 * @property {React.ReactNode} contents - ModalDialog 컨텐츠
 * @property {string} submitButtonText - 하단의 제출 버튼 텍스트 (defualt: Sumbit)
 * @property {(formData: FormData) => void} formAction - 제출 시 동작 할 api 함수
 * @property {Object} initData - 원시 데이터 (업데이트 모달 변경 전 title, contents)
 */
export const ModalDialog = ({
  triggerBtnText,
  title,
  contents,
  submitButtonText = "Submit",
  formAction,
}: ModalDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>{triggerBtnText}</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Flex
          justify="between"
          align="center"
          className={styles.dialogTitleContainer}
        >
          <Dialog.Title className={styles.dialogTitle}>{title}</Dialog.Title>
          <Dialog.Close>
            <Button variant="dangerous" size="small">
              ✕
            </Button>
          </Dialog.Close>
        </Flex>
        <Dialog.Description />
        <form action={formAction}>
          {contents}
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button type="submit">{submitButtonText}</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};
