"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="rounded-md bg-blue-500 py-2 hover:shadow-sm disabled:opacity-70"
      type="submit"
      // {...props}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
