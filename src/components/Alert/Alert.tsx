"use client";

import { Button } from "@components/Button";
import { AlertDialog, Flex } from "@radix-ui/themes";

type AlertProps = {
  triggerBtnText: string;
  alertText: string;
  okFn?: () => void;
};

export const Alert = ({ triggerBtnText, alertText, okFn }: AlertProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="dangerous">{triggerBtnText}</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{alertText}</AlertDialog.Title>
        <AlertDialog.Description />
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="dangerous">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={okFn}>OK</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
