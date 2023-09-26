# PicPixel - APP
Aplicação desenvolvida em Next.js com o propósito de aprofundar os conhecimentos em processamento de imagens **pixel to pixel** E **edge/line detection**, aplicando de forma prática os conceitos aprendidos na aula de processamento de imagens.

![alt text](public/cover.png)


## Documentação da Aplicação :weight_lifting:
Este repositório contém a implementação do PicPixel uma aplicação construída em:

- Next.js - latest

- Node.js - 18
- NPM - 9.8.1

## Instalação e configuração :computer:
- Faça o clone deste repositório: `git clone`
- Certifique-se de ter o Node.js 18 e NPM 9.8.1 instalados em sua máquina.
- Copie o arquivo **.env.example** para **.env** na raiz do projeto e defina as variáveis de ambiente necessárias para o seu ambiente.
- Execute `npm install` na pasta raiz do projeto para criar instalar as dependências.
- Por fim, execute `npm run dev` para subir a aplicação em modo de desenvolvimento.

## Funcionalidades 👩‍💻

- [ ] **FILTRO** blur/
Remove detalhes finos e suaviza a imagem. Isso é útil para reduzir o ruído ou criar uma aparência mais suave.

- [ ] **FILTRO** sharpen/
Aumenta o contraste entre os pixels adjacentes, realçando detalhes e tornando a imagem mais nítida.

- [ ] **FILTRO** edge-enhancement/: Realça as bordas na imagem, tornando-as mais visíveis. Isso é frequentemente usado em detecção de bordas.

- [ ] **FILTRO** contrast/: Ajusta o brilho e o contraste da imagem para torná-la mais clara ou mais escura.

- [ ] **FILTRO** sepia/: Converte a imagem para tons sépia, criando uma aparência envelhecida.

- [ ] **FILTRO** invert/: Inverte as cores da imagem, tornando os tons claros escuros e vice-versa.

- [ ] **FILTRO** grayscale/: Converte a imagem para tons de cinza, removendo a informação de cor.

- [ ] **FILTRO** motion-blur/: Cria um efeito de desfoque que simula o movimento.

- [ ] **FILTRO** distortion/: Aplica distorções geométricas ou de lente à imagem para efeitos especiais.

- [ ] **FILTRO** vignette/: Escurece as bordas da imagem, criando um efeito de sombreamento ao redor do centro.

- [ ] **FILTRO** texture/: Aplica texturas a uma imagem para criar um efeito de superfície diferente.

- [ ] **FILTRO** mosaic/(Mosaic): Divide a imagem em blocos ou pixels grandes, criando uma aparência de mosaico.

- [ ] **FILTRO** edge-detection/: Realça as bordas na imagem, destacando as mudanças abruptas de intensidade de cor.

- [ ] **FILTRO** histogram/: Melhora o contraste da imagem ajustando o histograma.

- [ ] **OPERAÇÃO** resizing/: Altera o tamanho da imagem, tornando-a maior ou menor.

- [ ] **OPERAÇÃO** rotation/: Gira a imagem em ângulos diferentes.

## RFs (Requisitos funcionais)

<!-- - [ ] Deve ser possível fazer upload de várias imagens; -->
- [ ] Deve ser possível subir uma imagem para fazer a edição;
- [ ] Deve ser possível aplicar um ou mais filtros em uma imagem;
- [ ] Deve ser possível aplicar um ou mais filtros em uma imagem;
- [ ] Deve ser possível baixar uma imagem editada;

## RNs (Regras de negócio)

## RNFs (Requisitos não-funcionais)
- [ ] Os imagens precisam estar persistidos no local-storage;# picpixel
