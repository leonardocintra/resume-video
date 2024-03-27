"use server";

export async function registerUserAction(prevStage: any, formData: FormData) {
  const fields = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  };

  return {
    ...prevStage,
    data: fields,
  };
}
