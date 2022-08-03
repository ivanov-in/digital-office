export async function login() {
  const data = {
    LoginData: "ivanovin",
    Password: "5D34Fhv*O",
  };

  await fetch("https://auth.dev.ltdo.xyz/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log(res);
    return res.data;
  });
}
