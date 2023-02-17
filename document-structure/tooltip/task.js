/*tooltip_active
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
} */

const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const tooltipActive = document.querySelectorAll('.tooltip_active')[0];
    if (tooltipActive) {
      tooltipActive.classList.remove('tooltip_active');
        if (tooltipActive.textContent == item.title) {
        return false;
        }
    }
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip', 'tooltip_active');
  tooltip.textContent = item.getAttribute('title');

  const coordinates = item.getBoundingClientRect();
  tooltip.style.top = coordinates.bottom + 3 + 'px';
  tooltip.style.left = coordinates.left + 'px';
  document.body.append(tooltip); 
  })
})