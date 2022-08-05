export async function auth(login, password) {
  const res = await fetch("https://auth.dev.ltdo.xyz/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      LoginData: login,
      Password: password,
    }),
  });
  return res;
}
