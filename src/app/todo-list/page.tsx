import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { ModalDialog } from "@components/ModalDialog";
import {
  Card,
  Flex,
  Heading,
  Table,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Todo } from "@types/todoList";
import { createTodo } from "apis/todo";

async function fetchTotalTodoList() {
  try {
    const response = await fetch("http://localhost:9999/list", {
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      console.error("Network response was not ok:", response.statusText);
      throw new Error("Failed to fetch data");
    }
    const data: Todo[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Page() {
  const todoList = await fetchTotalTodoList();

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
          <Flex>Form Test</Flex>
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
            <Card size="3">
              <Flex direction="row" justify="between">
                <Flex align="center">
                  <Checkbox defaultChecked />
                  <Text as="p" size="2" ml="2">
                    {todoList?.[0].title}
                  </Text>
                </Flex>
                <Flex gap="2">
                  <Button size="small">Update</Button>
                  <Button size="small" variant="dangerous">
                    Delete
                  </Button>
                </Flex>
              </Flex>
              <hr className="border-t border-gray-300 my-4" />
              <Text as="p" size="2" ml="2">
                {todoList?.[0].contents}
              </Text>
            </Card>
          </Flex>
          <Flex direction="column">
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>제목</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>완료여부</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>등록일</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {todoList?.map((data: Todo) => {
                  return (
                    <Table.Row key={data.id}>
                      <Table.RowHeaderCell>{data.title}</Table.RowHeaderCell>
                      <Table.Cell>{data.isDone ? "완료" : "미완료"}</Table.Cell>
                      <Table.Cell>{data.createDt}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Root>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
