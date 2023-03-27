export const drop = () => {
    var containers;
    function initDrawersMd() { 
        containers = document.querySelectorAll(".js-container-md");
        setHeights();
        wireUpTriggers();
        window.addEventListener("resize", setHeights);
    }

    function initDrawers() { 
        containers = document.querySelectorAll(".js-container");
        setHeights();
        wireUpTriggers();
        window.addEventListener("resize", setHeights);
    }

    function setHeights() {
        containers.forEach(container => { 
            let content = container.querySelector(".content");
            content.removeAttribute("aria-hidden");
            let heightOfContent = content.getBoundingClientRect().height;
            container.style.setProperty("--containerHeight", `${heightOfContent}px`);
            setTimeout(e => {
                container.classList.add("height-is-set");
                content.setAttribute("aria-hidden", "true");
            }, 0);
        });
    }

    function wireUpTriggers() {
        containers.forEach(container => { 
            let btn = container.querySelector(".trigger");
            // Get content
            let content = container.querySelector(".content");
            btn.addEventListener("click", () => {
                container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
                content.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
            });
        });
    }
    window.addEventListener("load", initDrawers);
}