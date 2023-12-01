import {Elysia} from "elysia";

const app = new Elysia()
  .state({
    version: "1.0.0",
    employees: 1,
    user: {
      id: 1,
      email: "johndoe@example.com"
    }
  })
  .decorate("getDate", () => Date.now())
  .get("/", () => "Hello, Bun Developer! I am gonna build RESTful APIs 😎")
  .get("/posts/:id", ({ params: { id } }) => {
    return {
      id: id,
      title: "Something cool about Bun!"
    }
  })
  .get("/tracks", ({ store, getDate }) => {
    // return new Response(JSON.stringify({
    //   "tracks": [
    //     "Monkey Dancing",
    //     "Joji",
    //     "Pinkguy"
    //   ]
    // }), {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // samething like here:
    console.log(store)
    console.log(getDate())

    return {
      "tracks": [
        "Monkey Dancing",
        "Joji",
        "Pinkguy",
        "A new song"
      ]
    }
  })
  .get("/tracks/*", () => "This is track route!")
  .post("/posts", ({ body, set, store }) => {
    console.log(store)
    set.status = 201

    return body
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
