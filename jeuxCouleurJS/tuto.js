/*const personne = {
  nom:'boussengui',
  email: 'jacquesboussengui@gmail.com',
  age:23,
  taille:156,
  couleur: 'noir',     
 blogs:['les bases du js',
 'les bases du react',
 'les bases du html et css'
 ],
 login:()=>{
  console.log('utilisateur connecté');
 },
 logout: ()=>{
  console.log('utilisateur déconnecté');
 },
 afficherLesBlogs:function(){
   this.blogs.forEach((blog) =>{
   console.log(blog);
   });
 }
};

//un array des objets

const blogs = [
 {
 id: 1,
 titre: 'les bases du js', 
 contenu: 'tout savoir sur les bases du js', 
 like: 10
},
{
 id: 2,
 titre: 'les bases du reactjs', 
 contenu: 'tout savoir sur les bases du reactjs', 
 like: 15
},
{
 id: 3,
 titre: 'les bases du html et css', 
 contenu: 'tout savoir sur les bases du html et css', 
 like: 8
},
];

blogs.forEach((blog)=> {
 console.log(blog.id, blog.titre, blog.contenu , blog.like ,'ont aimer');
})*/
 
// jouer avec des classes css en js les couleures changent en intervalles de temps methode à retenir
const p = document.querySelector("p");
const mesClasses = ["error","succes","attention","ajout"];
let index = 0

changeClasse = () =>{
 
  if(index > mesClasses.length-1)
    index =0;
    p.setAttribute('class','')

  p.classList.add(mesClasses[index])
   index++;
}
setInterval(changeClasse, 2000)

 //une autre méthode à retenir elle cherche un mot dans un paragraph puis mets du style une fois trouver

const list_para = document.querySelectorAll('p');
list_para.forEach((p)=>{
  if(p.innerText.includes("erreur")){
    p.classList.add("error")

  }
  if(p.innerText.includes("succes")){
    p.classList.add("succes")

  }
  if(p.innerText.includes("attention")){
    p.classList.add("attention")

  }
});















