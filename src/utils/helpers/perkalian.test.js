import perkalian from "./perkalian"

// TDD => Test driven Development => bikin testnya dulu baru bikin function yg diperluin 
describe("Tolong bikin function perkalian",() =>{
  test("Test apakah 4 * 4 = 16?", () =>{
    const hasil = perkalian(4,4)
    expect(hasil).toBe(16)
  })

  test("Test apakah 2 * 2 = 4?", () =>{
    const hasil = perkalian(2,2)
    expect(hasil).toBe(4)
  })
  
  test("Test apakah 2 * 3 = 6?", () =>{
    const hasil = perkalian(2,3)
    expect(hasil).toBe(6)
  })
})