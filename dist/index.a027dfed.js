let e=document.querySelectorAll(".slider .list .item"),t=document.getElementById("next"),l=document.getElementById("prev"),c=document.querySelectorAll(".thumbnail .item"),n=e.length,i=0,s=null;function a(){i=(i+1)%n,d()}function d(){e[i].classList.add("active"),c[i].classList.add("active");for(let t=0;t<n;t++)t!==i&&(e[t].classList.remove("active"),c[t].classList.remove("active"));s&&clearInterval(s),s=setTimeout(a,1e4)}t.addEventListener("click",a),l.addEventListener("click",function(){i=(i-1+n)%n,d()}),c.forEach((e,t)=>{e.addEventListener("click",()=>{t!==i&&(i=t,d())})}),s=setInterval(a,5e3);
//# sourceMappingURL=index.a027dfed.js.map