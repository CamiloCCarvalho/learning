<p align="center">
 <a href="w3">
  <img src="https://user-images.githubusercontent.com/106208340/197929811-a365caa9-e697-4e72-81e0-314f8167e5b7.png">
 </a>
</p>

<h1 align="center"> CSS PROPERTIES </h1>

 <p align="justify">Uma breve lista de propriedades CSS, com seus possiveis pares de valores e uma breve descrição de como modificam os elementos</p>
 <p align="right">Em desenvolvimento :warning:</p> 
 <br>


## PROPRIEDADES DE FONTE:
propriedade|valores|descrição
| -------- | -------- | -------- |
font-size:| *px, em, rem, pt, %*;|Controla o tamanho da fonte
font-weight:| *0 à 1000*;|(Depende da fonte) Controla o peso da fonte
font-style:| *normal, italic, oblique*;|Modifica o estilo básico da fonte
font-family:| *serif, sans-serif, monospace, custom*;|Controla a família da fonte


## PROPRIEDADES DE TEXTO:
propriedade|valores|descrição
| -------- | -------- | -------- |
text-align:|*left, center, right, justify;*|Controla o alinhamento do texto
text-transform:|*capitalize, uppercase, lowercase, none;*|Controla a capitalização do texto
text-indent:|*px, em, rem, %;*|Controla o tamanho da indentação que é colocada antes de uma linha de texto em um bloco
letter-spacing:|*px, rem, em, %, pt;*|Controla o espaçamento entre uma letra e outra de um bloco de texto
line-height:|*pt, px, rem, em, sem unidade de medida;*|Controla a altura das linhas de um conjunto de texto

## PROPRIEDADES DE COR:
propriedade|valores|descrição
| -------- | -------- | -------- |
color:|*#ff00ff;*|Hexadecimal #RRGGBB
color:|*f0f;*|Hexadecimal shorthand #RGB
color:|*rgb(255, 0, 255);*| Valor RGB de 0 a 255 rgb(R, G, B)
color:|*#ff00ff00;*|Hexadecimal com opacidade (alpha) #RRGGBBAA
color:|*rgba(255, 0, 255, 0.0);*|Valor RGB com opacidade

## PROPRIEDADES DE BACKGROUND (PLANO DE FUNDO):
propriedade|valores|descrição
| -------- | -------- | -------- |
background-color:|*hexadecimal, nome, rgb, rgba;*|Controla a cor de fundo
background-image:|*url(caminho/doArquivo.formato);*|Coloca uma imagem como plano de fundo
background-size:|*x y, x/y, cover, contain, %, px, rem, em;*|Controla o tamanho do plano de fundo. usa-se 2 valores ou apenas x que sera proporcional em y
background-repeat:|*repeat, no-repeat;*|Controla se a imagem de fundo vai ser sofrer repetição
background-position:|*top right bottom left, top 10px, left 2rem, right 2%;*|Controla a posição do plano de fundo

## PROPRIEDADE BORDER:
propriedade|valores|descrição
| -------- | -------- | -------- |
border:|*espessura estilo cor;*|Coloca borda em todo elemento
border-top:|*espessura estilo cor;*| Coloca borda na extremidade superior do elemento
border-right:|*espessura estilo cor;*|Coloca borda na extremidade direita do elemento
border-bottom:|*espessura estilo cor;*|Coloca uma borda na extremidade inferior do elemento
border-left:|*espessura estilo cor;*|Coloca uma borda na extremidade esquerda do elemento

## PROPRIDADE DE ALINHAMENTO DE ELEMENTOS:
propriedade|valores|descrição
| -------- | -------- | -------- |
vertical-align:|*baseline, top,. middle, bottom;*|Alinha verticalmente os elementos que são inline ou inline-block

## PRORIEDADES WIDTH E HEIGHT (ALTURA E LARGURA):
propriedade|valores|descrição
| -------- | -------- | -------- |
width:|*px, rem, em, %;*|Controla a largura do elemento
min-width:|*px, rem, em, %;*|Controla a largura mínima que um elemento pode ter
max-width:|*px, rem, em, %;*|Controla a largura máxima que um elemento pode ter
 | | 
height:|*px, rem, em, %;*|Controla a altura de um elemento
min-height:|*px, rem, em, %;*|Controla a altura mínima que um elemento pode ter
max-height:|*px, rem, em, %;*|Controla a altura máxima que um elemento pode ter

## PROPRIEDADE BOX-SIZING (BOX-MODEL = TIPO DE CAIXA QUE ENVOLVE O ELEMENTO):
propriedade|valores|descrição
| -------- | -------- | -------- |
box-sizing:|*border-box, content-box;*|Define qual caixa do box-model será usada como referência para colocar propriedades de tamanho

## PROPRIEDADE OVERFLOW:
propriedade|valores|descrição
| -------- | -------- | -------- |
overflow:|*visible, hidden, scroll, auto;*|Controla o comportamento dos elementos internos que "vazam" do espaço
overflow-x:|*visible, hidden, scroll, auto;*|Controla o comportamento dos elementos internos que "vazam" do espaço horizontal definido pela tag mãe
overflow-y:|*visible, hidden, scroll, auto;*|Controla o comportamento dos elementos internos que "vazam" do espaço vertical definido pela tag mãe
