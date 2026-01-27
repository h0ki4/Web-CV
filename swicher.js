const toggleBtn = document.querySelector(".header__left .button");
const icon = toggleBtn.querySelector("i");
const body = document.body;

// 1. Восстановление темы при загрузке
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("darkstyle");
  icon.classList.replace("fa-sun", "fa-moon");
}

// 2. Переключение темы по клику
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("darkstyle");

  const isDark = body.classList.contains("darkstyle");

  // переключаем иконку
  icon.classList.replace(
    isDark ? "fa-sun" : "fa-moon",
    isDark ? "fa-moon" : "fa-sun"
  );

  // сохраняем выбор
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
