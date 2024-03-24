# Blog React + axios

Esse Projeto é uma aplicação com o intuito de estudar mais profundamente o React-router-dom e o axios, fazendo assim uma aplicação com crud completa, com todas as requisições sendo utilizadas, porém pelo fato da API ser da JSONplaceholder e ser publica, nenhum dos dados são alterados.
##
![image](https://github.com/DevKayoS/blog_axios/assets/157029608/c3c65f45-4bad-42b2-8963-573cbdfcf80a)

Essa é a rota principal do projeto, na qual fica a home e todos os posts do blog, na qual é feita uma requisição get usando axios. 
##
![image](https://github.com/DevKayoS/blog_axios/assets/157029608/e0ce8369-a12f-4b97-b008-ca9f2a178375)

Ao clicar em "Ler Mais" é encaminhado para a rota onde é possivel visualizar somente aquele post selecionado, na qual é puxado pelo id do post. Na qual está sendo representada na imagem acima

##
![image](https://github.com/DevKayoS/blog_axios/assets/157029608/421d44b2-3d32-403d-9093-da2ac55aa114)

Nessa rota é feita a criação de novos posts no blog.

##
![image](https://github.com/DevKayoS/blog_axios/assets/157029608/56a2862b-c3cd-4c47-832c-defdbb4f8757)
Nessa página temos a rota da parte administrativa onde é possível excluir um post ou editar um post.

##
![image](https://github.com/DevKayoS/blog_axios/assets/157029608/34c28e5e-7993-41fb-9058-7ee48f0a25f7)
Ao clicar em "Editar post" na página de gerenciamento é encaminhado para essa rota onde é puxado o título do post selecionado e o conteúdo do post, na qual é possivel atualizar um post especifico.

##
### Tecnologias usadas:
  * React;
  * Typescript;
  * Axios;
  * API do JSONPlaceholder;
  * React-router-dom;
  * Tailwindcss.

