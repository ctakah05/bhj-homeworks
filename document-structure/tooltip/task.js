//tooltip_active
const tip = document.querySelectorAll('.has-tooltip')
let newEl = document.createElement('div');
newEl.classList.add('tooltip', 'tooltip_active')
for (let i=0;i<tip.length;i++){
    tip[i].addEventListener('click', (e) => {
        e.preventDefault();
        let attr = tip[i].getAttribute('title');
        newEl.textContent = attr;
        tip[i].appendChild(newEl)
        return false;
    })
}