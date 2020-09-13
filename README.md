# Safra Pix Rewards

Com a chegada de novas regulamentações do Banco Central de "Open Banking" e Pagamentos Instantâneos (PIX) nossa solução é desenvolver o Safrapix Rewards como forma de diferenciar dos demais concorrentes no setor e criar uma forma de fidelizar clientes e fazerem com que mantenham a Chave principal e acesso do PIX ao Safra. A ideia principal do produto é gerar cashbacks para os clientes e também na visão do empreendedor, fazer com que o cliente também possa utilizar o cashback nas maquininhas de cartão do Safrapay.

## Começando

Para rodar esse projeto é necessário que se faça o clone desse repositório na IDE de sua preferência e no terminal, dentro do diretório principal, executar o comando npm install ou npm i. Este comando instala um pacote e quaisquer pacotes dos quais o projeto dependa. 

### pré-requisito e instalação

instalação do Nodejs® e do NPM
https://treehouse.github.io/installation-guides/windows/node-windows.html#:~:text=To%20see%20if%20Node%20is,10.35%20.

Instalação do Ionic com o comando abaixo
npm install -g @ionic/cli

Instalação do Typescript com o comando abaixo
npm install -g typescript

## Deployment

Como se trata de um projeto criado com ferramenta multiplataforma, o deployment da solução depende então da versão escolhida para produção.
No caso de optar-se por um aplicativo mobile para o sistema operacional Android, os comandos abaixo podem ser úteis para geração, assinatura e fechamento do pacote antes de enviá-lo a loja de aplicativos. São eles:

ionic cordova build --release android (para criação da APK final)

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore suachave.keystore app-release-unsigned.apk suachave (Para assinatura do arquivo APK gerado)

zipalign -v 4 app-release-unsigned.apk nomeFinalArquivo.apk (Para otimização de arquivos de aplicativos Android (APK))


## Authors

* **Logan Carvalho** 

* **Esdras Vasconcelos** 

* **André Oliveira** 

* **Victor Dity** 

* **Janaina Silveira** 

## Licenciamento

Este projeto está licenciado sob a Licença MIT 


