const filterButtons = document.querySelectorAll(".filter-btn");
        const packageCards = document.querySelectorAll(".package-card");
        filterButtons.forEach(function (button) {
            button.addEventListener("click", function (event) {
                // Stop link from opening another page
                event.preventDefault();
                filterButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });
                this.classList.add("active");
                const selectedCategory = this.getAttribute("data-filter");

                packageCards.forEach(function (card) {

                    const cardCategory = card.getAttribute("data-category");

                    if (selectedCategory === "all") {

                        card.style.display = "block";

                    }
                    else if (cardCategory === selectedCategory) {

                        card.style.display = "block";

                    }

                    else {

                        card.style.display = "none";

                    }

                });

            });

        });