const endpoint ='https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
const poetrys = [];
const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => poetrys.push(...data));

function findMatches(wordToMatch,poetrys){
    return poetrys.filter(poet => {
        const regex = new RegExp(wordToMatch,'gi');
        //RegExp()构造函数接受两个参数一个是模式字符串一个是匹配模式的标记的字符串
        //g表示全局 i表示不区分字母大小写 global  ignoreCase
        const author = poet.detail_author.join('');
        return poet.detail_text.match(regex) || poet.title.match(regex) || author.match(regex);
    });
}

function displayMatches(){
    const matcher = findMatches(this.value,poetrys);
    const regex = new RegExp(this.value,'gi');
    const html = matcher.map(poet => {
        const text = poet.detail_text.replace(regex,`<span class="hl">${this.value}</span>`);
        const title = poet.title.replace(regex,`<span class="hl">${this.value}</span>`);
        return`
            <li>
                <span class="poet">${text}</span>
                <span class="title">${title} - ${poet.detail_author}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}
function deleteContent(){
    const html = '<li>输入诗句，找一首诗</li>'
    if(!this.value){
        suggestions.innerHTML = html;
    }
}

search.addEventListener('change',displayMatches);
search.addEventListener('keyup',displayMatches);
search.addEventListener('keyup',deleteContent);
