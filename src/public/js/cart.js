const emptyCartBtn = document.getElementById("emptyCart");
emptyCartBtn.addEventListener("click", async (event) => {
  let result = await fetch(`/api/carts/${localStorage.getItem("cartId")}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.reload();
});
