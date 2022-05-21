function playing(event){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    //模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号
    //选择属性名为 data-key 属性值为 event.keyCode的 DOM元素
    key.classList.add('playing');
}
function remove(event){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.remove('playing');
}

window.addEventListener('keydown',playing);
window.addEventListener('keyup',remove);