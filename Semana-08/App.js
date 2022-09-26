import Titulo from './Components/Semana-08/Exercicio-03/Titulo.js'
import Texto from './Components/Semana-08/Exercicio-03/Texto.js'
import Soma from './Components/Semana-08/Exercicio-05/Soma.js'
import Botao from './Components/Semana-08/Exercicio-06/Botao.js';
import Table from './Components/Semana-08/Desafio/Table.js';
import Table2 from './Components/Semana-08/Tabela/Table.js'
import ListaDeDoces from './Components/Semana-08/Aula-04/ListaDeDoces.js';
import MamaeCompraDoces from './Components/Semana-08/Aula-04/MamaeCompraDoces.js';
import Post from './Components/Semana-08/Exercicio-Contatos/Post.js';

function App() {
  const posts = [
    { 
      id: 1,
      imagemDoPerfil:"https://avatars.githubusercontent.com/u/45580434?v=4",
      nomeDoAutor:"Rosana Rezende",
      dataDoPost:"Hoje",
      fotoDoPost:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCPFEg8fqj0yZXopiY0TOFwt9wJV-r76qWQ&usqp=CAU",
      descricaoDoPost:"Simplesmente a melhor <3",
      curtidoPor:"Cleiton",
      numeroDeCurtidas: 10,
    },
    { 
      id: 2,
      imagemDoPerfil:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOAtwsWWuWW9CofG1mvk5foD37NCYTEnTQqjyScFTKiV5prWBsq9uVQQxA3-nd6Femn4&usqp=CAU",
      nomeDoAutor:"Zé Carioca",
      dataDoPost:"2 semanas",
      fotoDoPost:"https://outraspalavras.net/wp-content/uploads/2019/07/58409574_428224841326816_2971744278422620843_n.jpg",
      descricaoDoPost:"Curtindo com minha galera",
      curtidoPor:"Rosana",
      numeroDeCurtidas: 10,
    }
  ]
   const docesEmCasa = [
     { nome: 'bala de uva', tipo: 'amargo', id: 1 },
     { nome: 'babaloo de uva',tipo: 'ao leite', id: 59 },
     { nome: 'chocolate', tipo: 'ao leite', id: 3 },
     { nome: 'biscoitinho',tipo: 'ao leite',  id: 4 },
   ];
  return (
    <div className="App">
      {

      /* Exercicio 03
      <Titulo />
      <Texto /> */}

      {/* Exercicio 05
      <Soma num1={4} num2={2} /> */}

      {/* Exercicio 06
      <Botao corDeFundo = 'blue' texto="Eu sou um texto"/> */}


       {/* Desafio 01
       <Table2 
        title="Lista de alunos"
        description="Lista com dados pessoais dos alunos do curso de React"
        columns={[
          {
            name: 'Nome',
            prop: 'name'
          },
          {
            name: 'Sobrenome',
            prop: 'lastName'
          },
          {
            name: 'Idade',
            prop: 'age'
          }
        ]}
        data={[
          {
            name: 'João',
            lastName: 'Silva',
            age: 20,
            id: 1
          },
          {
            name: 'Livia',
            lastName: 'Cristina',
            age: 33,
            id: 2
          },
          {
            name: 'André',
            lastName: 'Costa',
            age: 26,
            id: 3
          }
        ]}
      />  */}
    {/* <ListaDeDoces listaDeDoces={docesEmCasa}/>
     <MamaeCompraDoces listaDeDoces={docesEmCasa}/>  */}
    <Post listaDePosts={posts}/>
          
   


    </div>
  );
}

export default App;
