/* ==========================================
   FOOTER
========================================== */

footer{
    background:#0f172a;
    color:#fff;
    padding:70px 40px 25px;
}

.footer-content{
    max-width:1200px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:40px;
}

.footer-content h3{
    margin-bottom:18px;
    font-size:24px;
}

.footer-content p{
    color:#cbd5e1;
    line-height:1.8;
}

.footer-content a{
    display:block;
    color:#cbd5e1;
    margin-bottom:10px;
    text-decoration:none;
    transition:.3s;
}

.footer-content a:hover{
    color:#60a5fa;
}

footer hr{
    margin:40px 0 20px;
    border:none;
    border-top:1px solid rgba(255,255,255,.15);
}

footer .copyright{
    text-align:center;
    color:#cbd5e1;
    font-size:14px;
}

/* ==========================================
   ANIMATIONS
========================================== */

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.hero,
.ai-section,
.results,
.tips,
.faq{
    animation:fadeUp .8s ease;
}

/* ==========================================
   SCROLLBAR
========================================== */

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-track{
    background:#edf2f7;
}

::-webkit-scrollbar-thumb{
    background:#2563eb;
    border-radius:20px;
}

::-webkit-scrollbar-thumb:hover{
    background:#1d4ed8;
}

/* ==========================================
   RESPONSIVE - TABLET
========================================== */

@media (max-width:992px){

    .navbar{
        flex-direction:column;
        gap:18px;
        padding:20px;
    }

    .nav-links{
        flex-wrap:wrap;
        justify-content:center;
        gap:18px;
    }

    .hero h1{
        font-size:40px;
    }

    .hero p{
        font-size:17px;
    }

    .ai-card{
        padding:30px;
    }

}

/* ==========================================
   RESPONSIVE - MOBILE
========================================== */

@media (max-width:768px){

    .hero{
        padding:70px 20px;
    }

    .hero h1{
        font-size:32px;
    }

    .hero p{
        font-size:16px;
    }

    .navbar{
        flex-direction:column;
        gap:15px;
    }

    .nav-links{
        flex-wrap:wrap;
        justify-content:center;
        gap:14px;
    }

    .results-grid,
    .tips-grid{
        grid-template-columns:1fr;
    }

    .ai-card{
        padding:25px;
    }

    .footer-content{
        text-align:center;
    }

    footer{
        padding:60px 20px 20px;
    }

}

/* ==========================================
   SMALL DEVICES
========================================== */

@media (max-width:480px){

    .logo{
        font-size:22px;
    }

    .logo span{
        font-size:24px;
    }

    .hero h1{
        font-size:28px;
    }

    .hero p{
        font-size:15px;
    }

    .results h2,
    .tips h2,
    .faq h2{
        font-size:28px;
    }

    .ai-card button{
        font-size:16px;
    }

}

/* ==========================================
   UTILITY CLASSES
========================================== */

.text-center{
    text-align:center;
}

.mt-1{margin-top:10px;}
.mt-2{margin-top:20px;}
.mt-3{margin-top:30px;}

.mb-1{margin-bottom:10px;}
.mb-2{margin-bottom:20px;}
.mb-3{margin-bottom:30px;}

.hidden{
    display:none;
}

.fade-in{
    animation:fadeUp .6s ease;
}