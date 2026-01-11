import generateUsers, { decrypt } from "../utils.js";

export default (app) => {
  const users = generateUsers();

  // BEGIN (write your solution here)
  app.get("/sessions/new", (req, res) => {
    res.view("src/views/sessions/new", { error: null });
  });

  app.post("/sessions", (req, res) => {
    const { username, password } = req.body;
    const hashed = decrypt(password);

    const user = users.find(
        (u) => u.username === username && u.password === hashed
    );

    if (!user) {
      return res.view("src/views/sessions/new", {
        error: "Wrong username or password",
      });
    }

    req.session.userId = user.id;
    res.redirect("/");
  });

  app.post("/sessions/delete", (req, res) => {
    req.session = null;
    res.redirect("/");
  });
  // END
};
