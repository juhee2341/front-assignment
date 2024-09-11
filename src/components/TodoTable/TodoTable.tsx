import { Table } from "@radix-ui/themes";
import { Todo } from "@type/todoList";

type TodoTableProps = {
  todoList: Todo[];
};

/**
 * 테이블 컴포넌트
 * @param {Object} TodoTableProps
 * @property {Todo[]} todoList - 표기 할 데이터 (헤더 부분 제외)
 */
export const TodoTable = ({ todoList }: TodoTableProps) => {
  return (
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
  );
};
