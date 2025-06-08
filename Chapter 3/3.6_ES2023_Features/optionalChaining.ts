const user = { profile: { email: "a@example.com" } };
const email = user.profile?.email ?? "not provided";
