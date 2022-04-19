import { render, screen, fireEvent,  } from "@testing-library/react";
import Button from "./Button";


describe("Get Render Button", () => {
  it("Apakah ada kata 'Sebuah' di dalam button", () => {
    render(<Button color="#ffff">Ini Sebuah Button</Button>);
    const linkElement = screen.getByText(/Sebuah/i);

    expect(linkElement).toBeInTheDocument
  });

  it("Apakah Button di click", () => {
    const mockCallBack = jest.fn();
    render(<Button onClick={mockCallBack}>Ini Click</Button>)
    fireEvent.click(screen.getByText(/Ini Click/i))
    fireEvent.click(screen.getByText(/Ini Click/i))

    expect(mockCallBack).toBeCalledTimes(2)
  });
});

describe("Mencocokan Sebuah Variable",() =>{
  it("Apakah 2 + 2 = 4", () =>{
    const penjumlahan = 2 + 3
    expect(penjumlahan).toBe(5)
  })
})

// describe("")
