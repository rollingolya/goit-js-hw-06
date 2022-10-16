const itemCategoriesRef = document.querySelector("#categories");
const liRef = itemCategoriesRef.querySelectorAll("li.item");
console.log(`Number of categories:`, liRef.length);

const elementWithHeads = document.querySelectorAll("h2");
elementWithHeads.forEach(function(elementWithHead) {
    console.log("Category:", elementWithHead.textContent);

});

liRef.forEach(function(liChildRef) {
    const li2Ref = liChildRef.querySelectorAll("li");
    console.log(`Elements:`, li2Ref.length);
})

