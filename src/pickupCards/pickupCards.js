const fill = document.querySelectorAll('.reversed');
const empties = document.querySelectorAll('.empty-slot-logo');

console.log(fill)

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragstop', dragStop);

function dragStart() {
    console.log('start')
}
function dragStop() {
    console.log('stop')
}