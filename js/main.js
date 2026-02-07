const WHATSAPP_NUMBER = '5492615070696'
const navToggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list')
const yearEl = document.getElementById('year')
if(yearEl){yearEl.textContent = new Date().getFullYear()}
if(navToggle && navList){
  navToggle.addEventListener('click',()=>{
    const open = navList.classList.toggle('open')
    navToggle.setAttribute('aria-expanded', String(open))
  })
  navList.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    navList.classList.remove('open')
    navToggle.setAttribute('aria-expanded','false')
  }))
}
const form = document.getElementById('contact-form')
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault()
    const data = new FormData(form)
    const nombre = data.get('nombre')?.toString().trim()||''
    const email = data.get('email')?.toString().trim()||''
    const telefono = data.get('telefono')?.toString().trim()||''
    const equipo = data.get('equipo')?.toString().trim()||''
    const servicio = data.get('servicio')?.toString().trim()||''
    const detalle = data.get('detalle')?.toString().trim()||''
    const msg = `Hola, vengo desde la web. Me llamo ${nombre}. Necesito el servicio de ${servicio} para mi ${equipo}. Detalles: ${detalle}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    window.open(url,'_blank','noopener')
  })
}
