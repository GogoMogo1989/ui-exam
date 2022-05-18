const header =`
    <div class="header">
        <h1>New York TImes Best Sellers</h1>
        <button class="material-icons">menu</button>
    </div>
`

let count = 1
function mainComponent(sub, title, text){ 
    return`
    <div class="card">
        <h3>${count++}</h3>
        <h5>${sub}</h5>
        <h1>${title}</h1>
        <p>${text}</p>
        <button>
            <h5>read more</h5>
            <span class="material-symbols-outlined">
                arrow_forward
            </span>
        </button>
    </div>
`
}

function Data(sub, title, text){
    this.sub = sub,
    this.title = title,
    this.text = text
}

window.addEventListener("load", () => {

    let data = books.cards.map(value => {
        return new Data(value.sub, value.title, value.text)
    })

    let content =""

    for(newData of data){
        content += mainComponent(newData.sub, newData.title, newData.text)
    }

    let newMain=`
        <div class="container">${content}</div>
    `

    const root = document.getElementById("root")
    root.insertAdjacentHTML("afterbegin", header)
    root.insertAdjacentHTML("beforeend", newMain)

})