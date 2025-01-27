async function getCategory(){

    const response = await fetch("https://fakestoreapi.com/products/categories",{method:"get"});
    
    return await response.json();
    
}



async function showCategory(){

    const realData=await getCategory();

    //as same as using the loop since there are no details found for each category 
    //each passed parameter to the function is about element of the array realData
    const categoriesWillBeAdded=realData.map(function(category){

        let cat=`<div calss="cat">
           <h1>${category}</h1>
           <a href="cat_product.html?catValue=${category}">its products</a>
        </div>`;
       
       return cat;//teh category will be added to the categories list (categoriesWillBeAdded)
    }).join(''); // to erase the commas ,

 
    document.querySelector(".cont").innerHTML=categoriesWillBeAdded;

}

showCategory();