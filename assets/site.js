
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.gallery-grid figure').forEach(x=>x.classList.toggle('hidden',f!=='all'&&x.dataset.cat!==f));}));
document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));}));
const quoteForm=document.querySelector('.quote-form');
if(quoteForm){quoteForm.addEventListener('submit',event=>{event.preventDefault();if(!quoteForm.reportValidity())return;const data=new FormData(quoteForm);const subject=`Quote request - ${data.get('service')||'Home improvement'} - ${data.get('postcode')||''}`.trim();const body=[
`Name: ${data.get('name')||''}`,
`Phone: ${data.get('phone')||''}`,
`Email: ${data.get('email')||''}`,
`Postcode: ${data.get('postcode')||''}`,
`Service: ${data.get('service')||''}`,
`Preferred contact: ${data.get('preferred-contact')||''}`,
'',
'Project details:',
data.get('message')||'',
'',
'If you have photos, please attach them before sending or use WhatsApp: https://wa.me/447946611561'
].join('\n');const status=quoteForm.querySelector('.form-status');if(status){status.hidden=false;status.textContent='Your email app should open now. Please attach any helpful photos before sending.';}window.location.href=`mailto:rachjkha@hotmail.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
