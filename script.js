const questions = document.querySelectorAll(".whole-question");
let sign = document.querySelector(".plus")
questions.forEach(question => {
  question.addEventListener("click", function() {
      question.classList.toggle("active");
  });
});
