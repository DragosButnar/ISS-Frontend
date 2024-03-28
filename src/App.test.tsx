import {render, screen, fireEvent, queries} from "@testing-library/react";
import App from "./App.js";


describe("MovieList", () => {
  it("List should have functional CRUD operations", () =>
      {
          const {getByTestId, getByRole, queryByTestId} = render(<App/>)
          // eslint-disable-next-line testing-library/prefer-screen-queries
          const movie4 = getByTestId("listItem_4").textContent
          expect(movie4).toBe("test(2024) in Family")

          // eslint-disable-next-line testing-library/prefer-screen-queries
          let addButton = getByRole("button", {name:"Add"})
          fireEvent.click(addButton)

          // eslint-disable-next-line testing-library/prefer-screen-queries
          const movie5a = getByTestId("listItem_5").textContent
          expect(movie5a).toBe("(0) in ")

          // eslint-disable-next-line testing-library/prefer-screen-queries
          let deleteButton = getByRole("button", {name:"Delete"})
          fireEvent.click(deleteButton)

          // eslint-disable-next-line testing-library/prefer-screen-queries
          const movie5b = queryByTestId("listItem_5")
          expect(movie5b).toBeNull()
      }
  )
})