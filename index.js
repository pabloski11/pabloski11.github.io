//==================================================
// DOSTOYEVSKI.JS
// PARTE 1
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    //==========================
    // BARRA DE PROGRESO
    //==========================

    const progress = document.createElement("div");

    progress.id = "progressBar";

    Object.assign(progress.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "0%",
        height: "5px",
        background: "#6d3319",
        zIndex: "999999",
        transition: "width .15s linear"
    });

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (window.scrollY / total) * 100;

        progress.style.width = percent + "%";

    });

    //==========================
    // EFECTO MÁQUINA DE ESCRIBIR
    //==========================

    const title = document.querySelector("h1");

    if (title) {

        const original = title.textContent;

        title.textContent = "";

        let i = 0;

        function type() {

            if (i < original.length) {

                title.textContent += original.charAt(i);

                i++;

                setTimeout(type, 80);

            }

        }

        type();

    }

    //==========================
    // OBSERVER
    //==========================

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.25

    });

    document
        .querySelectorAll("h2,h3,p,ul,blockquote,img")
        .forEach(el => {

            el.style.opacity = "0";
            el.style.transform = "translateY(60px)";
            el.style.transition = "all .8s ease";

            observer.observe(el);

        });

    //==========================
    // HACER VISIBLES
    //==========================

    const reveal = () => {

        document.querySelectorAll(".visible").forEach(el => {

            el.style.opacity = "1";

            el.style.transform = "translateY(0px)";

        });

    };

    setInterval(reveal, 16);

    //==========================
    // BOTÓN SUBIR
    //==========================

    const up = document.createElement("button");

    up.innerHTML = "↑";

    Object.assign(up.style, {

        position: "fixed",

        bottom: "25px",

        right: "25px",

        width: "55px",

        height: "55px",

        borderRadius: "50%",

        border: "none",

        background: "#6d3319",

        color: "white",

        fontSize: "24px",

        cursor: "pointer",

        display: "none",

        zIndex: "9999"

    });

    document.body.appendChild(up);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            up.style.display = "block";

        } else {

            up.style.display = "none";

        }

    });

    up.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };
        //==========================
    // PARTÍCULAS DE POLVO
    //==========================

    for (let i = 0; i < 35; i++) {

        const dust = document.createElement("div");

        Object.assign(dust.style, {

            position: "fixed",
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "rgba(255,255,255,.22)",
            left: Math.random() * 100 + "vw",
            top: Math.random() * 100 + "vh",
            pointerEvents: "none",
            zIndex: "999"

        });

        document.body.appendChild(dust);

        let x = Math.random() * 100;
        let y = Math.random() * 100;

        setInterval(() => {

            y -= 0.05;

            if (y < -2) {

                y = 102;
                x = Math.random() * 100;

            }

            dust.style.left = x + "vw";
            dust.style.top = y + "vh";

        }, 20 + Math.random() * 40);

    }

    //==========================
    // ZOOM EN LAS IMÁGENES
    //==========================

    document.querySelectorAll("img").forEach(img => {

        img.style.transition = ".45s ease";

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";
            img.style.boxShadow = "0 20px 40px rgba(0,0,0,.35)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";
            img.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";

        });

    });

    //==========================
    // EFECTO 3D
    //==========================

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mousemove", e => {

            const rect = img.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rx = -(y - rect.height / 2) / 20;
            const ry = (x - rect.width / 2) / 20;

            img.style.transform = `
                perspective(900px)
                rotateX(${rx}deg)
                rotateY(${ry}deg)
                scale(1.05)
            `;

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";

        });

    });

    //==========================
    // RESALTAR PÁRRAFOS
    //==========================

    document.querySelectorAll("p").forEach(p => {

        p.style.transition = ".35s";

        p.addEventListener("mouseenter", () => {

            p.style.background = "rgba(255,255,255,.15)";
            p.style.padding = "10px";
            p.style.borderRadius = "8px";

        });

        p.addEventListener("mouseleave", () => {

            p.style.background = "transparent";
            p.style.padding = "0";

        });

    });

    //==========================
    // EFECTO EN CITAS
    //==========================

    document.querySelectorAll("blockquote").forEach(block => {

        block.style.transition = ".4s";

        block.addEventListener("mouseenter", () => {

            block.style.transform = "scale(1.02)";
            block.style.boxShadow = "0 0 30px rgba(180,120,50,.45)";

        });

        block.addEventListener("mouseleave", () => {

            block.style.transform = "scale(1)";
            block.style.boxShadow = "none";

        });

    });

    //==========================
    // CAMBIO DE COLOR
    //==========================

    window.addEventListener("scroll", () => {

        const h = document.documentElement.scrollHeight - window.innerHeight;

        const p = window.scrollY / h;

        if (p < 0.25)
            document.body.style.backgroundColor = "#efe0b7";

        else if (p < 0.50)
            document.body.style.backgroundColor = "#e6d19f";

        else if (p < 0.75)
            document.body.style.backgroundColor = "#d6bc87";

        else
            document.body.style.backgroundColor = "#c4a36d";

        document.body.style.transition = "background-color 1s";

    });
        //==========================
    // CURSOR TIPO VELA
    //==========================

    const light = document.createElement("div");

    Object.assign(light.style,{

        position:"fixed",
        width:"250px",
        height:"250px",
        borderRadius:"50%",
        pointerEvents:"none",
        background:"radial-gradient(circle, rgba(255,230,180,.18), transparent 70%)",
        transform:"translate(-50%,-50%)",
        zIndex:"999",
        mixBlendMode:"screen"

    });

    document.body.appendChild(light);

    document.addEventListener("mousemove",(e)=>{

        light.style.left=e.clientX+"px";
        light.style.top=e.clientY+"px";

    });

    //==========================
    // TÍTULOS CON BRILLO
    //==========================

    document.querySelectorAll("h1,h2,h3").forEach(title=>{

        title.style.transition=".35s";

        title.addEventListener("mouseenter",()=>{

            title.style.textShadow="0 0 20px rgba(150,90,30,.6)";
            title.style.transform="scale(1.03)";

        });

        title.addEventListener("mouseleave",()=>{

            title.style.textShadow="none";
            title.style.transform="scale(1)";

        });

    });

    //==========================
    // PARALLAX
    //==========================

    window.addEventListener("scroll",()=>{

        const scroll=window.scrollY;

        document.querySelectorAll("img").forEach((img,index)=>{

            img.style.transform=
            `translateY(${scroll*0.03*(index%2===0?1:-1)}px)`;

        });

    });

    //==========================
    // EFECTO LECTURA
    //==========================

    const chapters=document.querySelectorAll("h2,h3");

    window.addEventListener("scroll",()=>{

        const center=window.innerHeight/2;

        chapters.forEach(chapter=>{

            const rect=chapter.getBoundingClientRect();

            if(rect.top<center && rect.bottom>0){

                chapter.style.color="#5A2414";
                chapter.style.transform="scale(1.05)";

            }

            else{

                chapter.style.color="";
                chapter.style.transform="scale(1)";

            }

        });

    });

    //==========================
    // FONDO CON TEXTURA
    //==========================

    const texture=document.createElement("div");

    Object.assign(texture.style,{

        position:"fixed",

        inset:"0",

        pointerEvents:"none",

        opacity:".04",

        backgroundImage:
        "radial-gradient(rgba(0,0,0,.18) 1px, transparent 1px)",

        backgroundSize:"18px 18px",

        zIndex:"0"

    });

    document.body.appendChild(texture);

    //==========================
    // EFECTO DE APARICIÓN
    //==========================

    document.body.animate(

    [

        {

            opacity:0

        },

        {

            opacity:1

        }

    ],

    {

        duration:1800,

        fill:"forwards"

    });

    //==========================
    // EFECTO DE ESCRITURA
    //==========================

    document.querySelectorAll("blockquote").forEach(q=>{

        q.style.borderLeft="5px solid #8b5a2b";

        q.style.paddingLeft="20px";

    });

});
    //==================================================
    // PARTE 4
    // EFECTOS FINALES
    //==================================================

    //=====================================
    // EFECTO NIEBLA
    //=====================================

    const fog = document.createElement("div");

    Object.assign(fog.style, {

        position: "fixed",
        inset: "0",
        pointerEvents: "none",
        background:
        "linear-gradient(180deg, transparent, rgba(255,255,255,.05), transparent)",
        opacity: ".25",
        zIndex: "2"

    });

    document.body.appendChild(fog);

    let fogPos = -100;

    setInterval(() => {

        fogPos += 0.2;

        if (fogPos > 100)
            fogPos = -100;

        fog.style.transform = `translateY(${fogPos}px)`;

    }, 30);

    //=====================================
    // DESTELLOS DE LUZ
    //=====================================

    setInterval(() => {

        const flash = document.createElement("div");

        Object.assign(flash.style, {

            position: "fixed",

            width: "8px",

            height: "8px",

            borderRadius: "50%",

            background: "rgba(255,240,180,.6)",

            left: Math.random()*100+"vw",

            top: Math.random()*100+"vh",

            pointerEvents: "none",

            zIndex: "999"

        });

        document.body.appendChild(flash);

        flash.animate([

            {

                opacity:0,

                transform:"scale(0)"

            },

            {

                opacity:1,

                transform:"scale(3)"

            },

            {

                opacity:0,

                transform:"scale(6)"

            }

        ],{

            duration:2500,

            fill:"forwards"

        });

        setTimeout(()=>{

            flash.remove();

        },2500);

    },800);

    //=====================================
    // EFECTO LIBRO ANTIGUO
    //=====================================

    document.querySelectorAll("img").forEach(img=>{

        img.style.border="8px solid #b08952";

        img.style.borderRadius="6px";

        img.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

    });

    //=====================================
    // TÍTULOS CON APARICIÓN
    //=====================================

    document.querySelectorAll("h2,h3").forEach(title=>{

        title.animate([

            {

                letterSpacing:"0px"

            },

            {

                letterSpacing:"2px"

            },

            {

                letterSpacing:"0px"

            }

        ],{

            duration:4000,

            iterations:Infinity

        });

    });

    //=====================================
    // EFECTO SUAVE AL BAJAR
    //=====================================

    let lastScroll = 0;

    window.addEventListener("scroll",()=>{

        const current = window.scrollY;

        if(current > lastScroll){

            document.body.style.backgroundPositionY = current*0.15+"px";

        }

        lastScroll = current;

    });

    //=====================================
    // MENSAJE FINAL
    //=====================================

    console.log("Dostoyevski.js cargado correctamente.");
//==================================================
// EFECTOS PREMIUM DE SCROLL
//==================================================

window.addEventListener("scroll", () => {

    const elements = document.querySelectorAll("h2,h3,p,ul,blockquote,img");

    elements.forEach(el => {

        const rect = el.getBoundingClientRect();

        const visible = window.innerHeight - rect.top;

        if (visible > 0) {

            let progress = visible / window.innerHeight;

            if (progress > 1) progress = 1;

            el.style.opacity = progress;

            el.style.transform = `
                translateY(${40 - progress * 40}px)
                scale(${0.95 + progress * 0.05})
            `;

        }

    });

});

//==================================================
// EFECTO LIBRO ANTIGUO
//==================================================

document.querySelectorAll("img").forEach(img=>{

    img.style.transition=".5s";

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08) rotate(-1deg)";

        img.style.boxShadow="0 25px 50px rgba(0,0,0,.45)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1) rotate(0deg)";

        img.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";

    });

});

//==================================================
// EFECTO DE BRILLO EN LOS TÍTULOS
//==================================================

document.querySelectorAll("h1,h2,h3").forEach(title=>{

    setInterval(()=>{

        title.animate([

            {
                textShadow:"0 0 0px rgba(255,255,255,0)"
            },

            {
                textShadow:"0 0 20px rgba(180,120,50,.7)"
            },

            {
                textShadow:"0 0 0px rgba(255,255,255,0)"
            }

        ],{

            duration:3500

        });

    },4000);

});

//==================================================
// EFECTO DE APARICIÓN AL HACER SCROLL
//==================================================

const revealObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(80px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0px)"
                }

            ],{

                duration:1000,
                easing:"ease-out",
                fill:"forwards"

            });

        }

    });

},{threshold:.15});

document.querySelectorAll("h2,h3,p,img,blockquote,ul").forEach(el=>{

    revealObserver.observe(el);

});

//==================================================
// FONDO QUE CAMBIA SUAVEMENTE
//==================================================

window.addEventListener("scroll",()=>{

    const max=document.documentElement.scrollHeight-window.innerHeight;

    const p=window.scrollY/max;

    const color1=[241,223,176];
    const color2=[184,155,102];

    const r=Math.round(color1[0]+(color2[0]-color1[0])*p);
    const g=Math.round(color1[1]+(color2[1]-color1[1])*p);
    const b=Math.round(color1[2]+(color2[2]-color1[2])*p);

    document.body.style.background=`rgb(${r},${g},${b})`;

});
