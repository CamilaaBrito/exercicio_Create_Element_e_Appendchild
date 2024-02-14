const titulo = document.createElement("h1");


titulo.innerText = "Venha conferir as promoções";
titulo.id ="titulo";

const elementSection = document.createElement("section")

elementSection.innerHTML =` <ul>
<li> Bolsa </li>
<li> Bolsa arezzo coleção verão em promoção, não perca a oportunidade!</li>
<li> Por apenas R$ 99,99 </li>

</ul>
`
const elementbody = document.querySelector("body");

elementbody.appendChild(titulo);
elementbody.appendChild(elementSection);



