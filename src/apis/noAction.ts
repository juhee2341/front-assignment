import { fetchUtil } from "@utils/fetchUtil";

// 만약 checkbox 서버 함수를 분리한다면.
export async function updateTodoStatus(id: string, isDone: boolean) {
  const updateData = {
    isDone,
    updateDt: new Date().toISOString(),
  };

  return await fetchUtil(`/list/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
  });
}
