const inputs = document.querySelectorAll('.control input');

function ChangeAttributes(){
    const unit = this.dataset.sizing || '';
    // 颜色选择框没有颜色
    // html5 增加了data-属性，在input标签中增加data-XXX=''，然后用this.dataset.XXX拿到该属性的值。
    document.documentElement.style.setProperty(`--${this.name}`,this.value+ unit);
    // document.documentElement 是根元素
    document.getElementById(`code-${this.name}`).innerText = this.value + unit;
}

inputs.forEach(input => input.addEventListener('change',ChangeAttributes));
inputs.forEach(input => input.addEventListener('mousemove',ChangeAttributes));