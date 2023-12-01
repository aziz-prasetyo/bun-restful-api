import {Elysia} from "elysia";

export const plugin = new Elysia()
  .state({
    country: "Indonesia"
  })
  .get("/form-plugin", () => "Hi, there!")
  .get("/greet", () => "My name is Prasetyo 😊")
