import {Elysia} from "elysia";

const app = new Elysia()
  .get("/", () => "Hello, Bun Developer! I am gonna build RESTful APIs 😎")
  .get("/posts/:id", ({ params: { id } }) => {
    return {
      id: id,
      title: "Something cool about Bun!"
    }
  })
  .get("/tracks", () => {
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
  .post("/posts", ({ body, set }) => {
    set.status = 201

    return body
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
