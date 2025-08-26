export const scrollToSection = (e: React.MouseEvent, selector: string) => {
e.preventDefault();
const target = document.querySelector(selector);
if (target) {
  target.scrollIntoView({ behavior: "smooth" });
}
};