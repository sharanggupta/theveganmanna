import axios from "axios";

describe("Stripe Test", () => {
  test("Create Payment Intents", async () => {
    const res = await axios.post("http://localhost:3000/api/payment_intents", {
      amount: 100 * 100,
    });

    expect(res.status).toEqual(200);
    expect(res.data).toBeTruthy();
  });
});
