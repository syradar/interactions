const attr = {
  ariaExpanded: "aria-expanded",
} as const;
export function initCardSplittingAccordion() {
  const buttons = [
    ...document.querySelectorAll(".card button"),
  ] as HTMLButtonElement[];

  for (const button of buttons) {
    button.addEventListener("click", handleCardClicked);
  }

  function handleCardClicked(e: MouseEvent) {
    console.log(e);

    const target = e.target as HTMLButtonElement;

    // target.setAttribute("aria-expanded", `${true}`);

    for (const button of buttons) {
      const isTarget = button === target;

      if (isTarget) {
        const ariaExpanded = button.getAttribute(attr.ariaExpanded) ?? "false";
        const isExpanded = ariaExpanded === "true";

        button.setAttribute(attr.ariaExpanded, `${!isExpanded}`);
      } else {
        button.setAttribute(attr.ariaExpanded, "false");
      }
    }
  }
}
// export function initCardSplittingAccordion() {
//   const summaries = document.querySelectorAll("summary");

//   for (const summary of summaries) {
//     summary.addEventListener("click", (event) => {
//       const detailsElement = event.target.parentElement;
//       const contentElement = event.target.nextElementSibling;

//       // Chrome sometimes has a hiccup and gets stuck.
//       if (contentElement.classList.contains("animation")) {
//         // So we make sure to remove those classes manually,
//         contentElement.classList.remove("animation", "collapsing");
//         // ... enforce a reflow so that collapsing may be animated again,
//         void summary.offsetWidth;
//         // ... and fallback to the default behaviour this time.
//         return;
//       }

//       const onAnimationEnd = (cb) =>
//         contentElement.addEventListener("animationend", cb, { once: true });

//       // request an animation frame to force Safari 16 to actually perform the animation
//       requestAnimationFrame(() => contentElement.classList.add("animation"));
//       onAnimationEnd(() => contentElement.classList.remove("animation"));

//       const isDetailsOpen = detailsElement.getAttribute("open") !== null;
//       if (isDetailsOpen) {
//         // prevent default collapsing and delay it until the animation has completed
//         event.preventDefault();
//         contentElement.classList.add("collapsing");
//         onAnimationEnd(() => {
//           detailsElement.removeAttribute("open");
//           contentElement.classList.remove("collapsing");
//         });
//       }
//     });
//   }
// }
