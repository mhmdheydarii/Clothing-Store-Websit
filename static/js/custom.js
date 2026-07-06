function formatPriceInToman(element) {
    let rawPrice = parseFloat(element.innerText);
    let formatter = new Intl.NumberFormat('fa-IR');
    let formattedPrice = formatter.format(rawPrice);
    element.innerText = `${formattedPrice} تومان`;
}

document.addEventListener("DOMContentLoaded", function () {
    let priceElements = document.querySelectorAll('.formatted-price');
    priceElements.forEach(element => formatPriceInToman(element));
});

function changePage(page_number) {
    let current_url_params = new URLSearchParams(window.location.search)
    current_url_params.set("page", page_number)
    let new_url = window.location.pathname + "?" + current_url_params.toString()
    window.location.href = new_url
}

// تامبنیل گالری
document.querySelectorAll("[data-img]").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("gallery-main-img").src = img.dataset.img;
        document.querySelectorAll("[data-img]").forEach(i => i.classList.remove("active"));
        img.classList.add("active");
    });
});

// تب‌ها
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        document.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add("active");
    });
});
