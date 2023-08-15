const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

document.querySelector('.search').addEventListener('submit', (event)=>{
  event.preventDefault();
})