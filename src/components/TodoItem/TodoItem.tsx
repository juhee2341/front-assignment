import { deleteTodo, updateTodo } from "@apis/todo";
import { Alert } from "@components/Alert";
import { Checkbox } from "@components/Checkbox";
import { ModalDialog } from "@components/ModalDialog";
import { Card, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { Todo } from "@types/todoList";

type TodoItem = {
  todoItem: Todo;
};

export const TodoItem = ({ todoItem }: TodoItem) => {
  const handleDeleteTodo = async () => {
    "use server";
    await deleteTodo(todoItem?.id);
  };
  return (
    <Card size="3">
      <Flex direction="row" justify="between">
        <Flex align="center">
          <Checkbox id={todoItem?.id} defaultChecked={todoItem?.isDone} />
          <Text as="p" size="2" ml="2">
            {todoItem?.title}
          </Text>
        </Flex>
        <Flex gap="2">
          <ModalDialog
            triggerBtnText="Update"
            title="Update todo"
            contents={
              <Flex direction="column" gap="3">
                <input type="hidden" name="id" value={todoItem?.id} />
                <TextField.Root
                  name="title"
                  radius="large"
                  defaultValue={todoItem?.title}
                />
                <TextArea
                  name="contents"
                  radius="large"
                  defaultValue={todoItem?.contents}
                />
              </Flex>
            }
            formAction={updateTodo}
            initData={{ title: todoItem?.title, contents: todoItem?.contents }}
          />
          <Alert
            triggerBtnText="Delete"
            alertText="todo를 정말 삭제할까요?"
            okFn={handleDeleteTodo}
          />
        </Flex>
      </Flex>
      <hr className="border-t border-gray-300 my-4" />
      <Text as="p" size="2" ml="2">
        {todoItem?.contents}
      </Text>
    </Card>
  );
};
