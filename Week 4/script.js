const b=document.querySelector('#menu'),n=document.querySelector('#links');
b.addEventListener('click',()=>{
    const open=n.classList.toggle('open');
    b.setAttribute('aria-expanded',open);
});
n.querySelectorAll('a').forEach(
    a=>a.addEventListener('click',()=>{
        n.classList.remove('open');
        b.setAttribute('aria-expanded','false');
    })
);