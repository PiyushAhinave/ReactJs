import Sum from "../components/Sum"

it("should return proper sum",()=>{
    const result = Sum(4,5);
    expect(result).toBe(9);
});