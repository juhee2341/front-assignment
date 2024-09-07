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
};

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
