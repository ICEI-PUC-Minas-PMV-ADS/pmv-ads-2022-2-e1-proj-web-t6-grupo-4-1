# 6.	Arquitetura da Solução

Pré-requisitos: Projeto de Interface

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.
 
# 6.1.	Diagrama de componentes
Os componentes que fazem parte da solução são apresentados na Figura que se segue.

![image](https://user-images.githubusercontent.com/109597436/206908477-d76d6059-c021-41f5-a8b2-81b482f72823.png)

A solução implementada conta com os seguintes módulos:
* Navegador - Interface básica do sistema
* Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
* Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.
* Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles:
  * Temas de grupo – Descrição de temas
  * Links de acesso – Onde serão postados as urls de reuniões, grupos formados por aplicativos.
  * Usuários – Onde serão registrados os  usuários.	
  
# 6.2.	Hospedagem
O site utiliza a plataforma do Github como ambiente de hospedagem. O site e mantido no ambiente da URL: https://github.com

A publicação do site no Github é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço:  https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t6-grupo-4-1
 
