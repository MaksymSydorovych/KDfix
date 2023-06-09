export function productList(item) {
	const productListContainer = document.querySelector(".product-list");
	productListContainer.innerHTML = "";
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const _id = params.get("_id");
	item.forEach(function (product) {
		productListContainer.innerHTML += `<div class="card product-list__card" style="width: 12rem;">
            <li class="product-list__item">
                <a href="./edit.html?id=${product.id}" class="product-list__link">
                <img src="${product.img}" alt="${product.title}" class="product-list__img">
                    ${product.title}    
                </a>
            </li></div>
        `;
	});
}
