// console.log(emojiList);
const searchEmoji = (e) => {
    let value = e.target.value;
    // console.log(value);
    displayResults(value);
}
const displayResults = (searchQuery = "") => {
    const filteredResult = emojiList.filter(e => {
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }
        if(e.aliases.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
        if(e.tags.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
    })
    // console.log(filteredResult);
    const parent = document.getElementById("search_result_container");
    parent.innerHTML = "";
    filteredResult.forEach((e) => {
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_alisas = document.createElement("td");
        let new_discription = document.createElement("td");
        new_emoji.innerText = e.emoji;
        new_alisas.innerText = e.aliases.join(" ");
        new_discription.innerText = e.description;
        // console.log(new_row);
        // console.log(new_emoji);
        // console.log(new_alisas);
        // console.log(new_discription);
        new_emoji.classList.add("emoji")
        new_alisas.classList.add("alisas")
        new_discription.classList.add("discription")
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_alisas);
        new_row.appendChild(new_discription);
        parent.appendChild(new_row);
    });
};
document.getElementById("search_field").addEventListener("keyup",searchEmoji);
window.onload = () => displayResults();
// let data = document.getElementById('search_result_container');

// emojiList.map((e,i)=>{
//             console.log(e);
// })