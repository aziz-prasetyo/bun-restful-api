import {Elysia} from "elysia";

const app = new Elysia().get("/", () => "Hello, Bun Developer! I am gonna build RESTful APIs 😎").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
