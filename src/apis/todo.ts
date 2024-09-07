import { Todo } from "@types/todoList";
import { fetchUtil } from "@utils/fetchUtil";

export async function getTotalTodoList(): Promise<Todo[]> {
  return await fetchUtil("/list", {
    method: "GET",
  });
}

export async function createTodo(formData: FormData): Promise<Todo> {
  "use server";
  const title = formData.get("title") as string;
  const contents = formData.get("contents") as string;

  const newTodo: Todo = {
    id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    title,
    contents,
    isDone: false,
    createDt: new Date().toISOString(),
    updateDt: "",
  };

  return await fetchUtil("/list", {
    method: "POST",
    body: JSON.stringify(newTodo),
  });
}

export async function updateTodo(formData: FormData): Promise<Todo> {
  "use server";
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const contents = formData.get("contents") as string;

  const newTodo = {
    title,
    contents,
    updateDt: new Date().toISOString(),
  };

  return await fetchUtil(`/list/${id}`, {
    method: "PATCH",
    body: JSON.stringify(newTodo),
  });
}

export async function deleteTodo(id: string) {
  try {
    const response = await fetchUtil(`/list/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}
