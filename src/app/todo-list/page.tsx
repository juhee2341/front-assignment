import { ModalDialog } from "@components/ModalDialog";
import { TodoTable } from "@components/TodoTable";
import {
  Card,
  Flex,
  Heading,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { createTodo, getTotalTodoList } from "@apis/todo";
import { TodoItem } from "@components/TodoItem/TodoItem";

export default async function Page() {
  const todoList = await getTotalTodoList();
  return (
    <Flex align="center" gap="6">
      <Flex flexShrink="0" gap="6" direction="column" width="640px">
        <Card size="4">
          <Heading as="h3" size="6" trim="start" mb="2">
            Todo List
          </Heading>
          <Text as="p" size="2" mb="5" color="gray">
            Todo List를 작성해보자.
          </Text>
          <Flex gap="3" mb="5" justify="end">
            <ModalDialog
              triggerBtnText="Create"
              title="Create todo"
              contents={
                <Flex direction="column" gap="3">
                  <TextField.Root
                    name="title"
                    radius="large"
                    placeholder="일정 제목을 입력해주세요."
                  />
                  <TextArea
                    name="contents"
                    radius="large"
                    placeholder="일정 내용을 입력해주세요."
                  />
                </Flex>
              }
              formAction={createTodo}
            />
          </Flex>
          <Flex direction="column">
            <TodoItem todoItem={todoList?.[0]} />
          </Flex>
          <Flex direction="column">
            <TodoTable todoList={todoList} />
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
