"use client";

import { useActionState } from "react";

type LoginActionState = {
  errors: string[];
  message: string;
};

const authenticate = (prevState: LoginActionState, formData: FormData) => {
  "use-server";

  return prevState;
};

export default function Page() {
  const [state, formAction] = useActionState(authenticate, {
    errors: [],
    message: "",
  });

  return (
    <form action={formAction}>
      <div className=""></div>
      <label>id</label>
      <input id="id" required></input>
      <label>password</label>
      <input id="password" required></input>
      <button type="submit">sign in</button>
    </form>
  );
}
