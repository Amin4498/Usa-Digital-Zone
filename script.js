*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial;
}

body{
background:#f5f5f5;
}

/* HEADER */
header{
background:#ff5a00;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
padding:15px;
flex-wrap:wrap;
}

.logo{
font-size:20px;
font-weight:bold;
}

header input{
padding:8px;
border:none;
border-radius:5px;
}

/* NAV */
nav a{
color:white;
margin:0 10px;
text-decoration:none;
font-weight:bold;
}

/* HERO */
.hero{
background:linear-gradient(to right,#ff6a00,#ff9900);
color:white;
text-align:center;
padding:80px 20px;
}

.hero h1{
font-size:40px;
}

.hero button{
margin-top:15px;
padding:10px 25px;
border:none;
background:white;
color:#ff5a00;
border-radius:5px;
}

/* PRODUCTS */
.section{
padding:40px;
text-align:center;
}

.cards{
display:flex;
gap:20px;
flex-wrap:wrap;
justify-content:center;
}

.card{
background:white;
padding:15px;
width:220px;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}

.card img{
width:100%;
border-radius:10px;
}

.card button{
margin-top:10px;
padding:8px;
background:#ff5a00;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
}

/* FOOTER */
footer{
background:#222;
color:white;
text-align:center;
padding:20px;
margin-top:40px;
}
