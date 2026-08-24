### NODE MODULES

• onde ficam de fato as pastas e arquivos das Libs

## PUBLIC

• onde ficam os arquivos e pastas publicas que sobem para produção

## SRC (SOURCE)

• onde fica o codigo fonte

## SOBRE AS PASTAS NO SRC

• criar uma pasta COMPONENTS
• dentro dela criar a pasta com nome do componente
• então criar um arquivo index.js
*• Por padrão o JS também procura numa pasta o arquivo index.js para executar ou importar igual acontece com html*

## EXPORTS

*• PROCURAR USAR EXPORT SEM DEFAULT, isso permite segurar os nomes, e renomear com "as" se necessario*
*• Sempre que for usado um EXPORT sem DEFAULT no IMPORT devemos usar as {itemImport} sem as chaves é apenas para export default*

## O RETURN DOS COMPONENTES

• Só pode ser devolvido no *return* um unico component, por isso abraçar com <Div> quando precisa
• **POREM MELHOR IMPORTAR FRAGMENT**
• *import React, {Fragment} from 'react';*
• **USANDO FRAGMENT**
• *<Fragment>seu Component aqui dentro</Fragment>*

## PROPS

• Para entender as props e o uso delas no REACT, precisamos entender dois tipos de funções:

• FUNÇÕES PURAS:
    - São funções que recebe os parametros e não altera eles dentro de sí propria.
    - exemplo:
        function sum(a, b){
            return a + b
        }
Note que no exemplo acima a função gera um resultado porem não altera o valor original de A e B.


• FUNÇÕES IMPURAS:
    - São funções que recebem paramentros e conseguem alterar os valores deles dentro da propria função;
    - exemplo:
        function result(account, amount) {
            account -= amount
            return account
        }
Ja no exemplo acima note que a função recebe um valor de ACCOUNT e dentro dela ela muda o valor original de account onde agora se ele for chamado denovo nessa função tem um valor diferente do original recebido na primeira vez. 

**NO REACT EXISTE UMA REGRA ONDE AS PROPS SEMPRE DEVEM MANTER OS VALORES ORIGINAIS, VOCÊ PODE USA-LOS DENTRO DOS COMPONENTES POREM NÃO PODE ALTERA-LOS**



