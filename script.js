const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(quoteForm);
  const name = String(data.get("name") || "").trim();
  const jobType = String(data.get("jobType") || "").trim();

  formNote.textContent = `Thanks${name ? `, ${name}` : ""}. Your ${jobType.toLowerCase()} estimate is ready to review by phone.`;
});
