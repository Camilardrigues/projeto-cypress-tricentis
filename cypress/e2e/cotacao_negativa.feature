#utf-8
# language: pt

Funcionalidade: Envio de cotação inválida

  Cenário: Tentativa de envio da cotação sem preencher o e-mail
    Dado que o usuário acessa o portal Tricentis
    E clico no botão Automobile
    E valido o acesso à página Automobile
    Quando preenche corretamente os dados do veículo
    E preenche corretamente os dados do segurado
    E preenche corretamente os dados do produto
    E seleciona uma opção de preço
    E preenche os dados finais para envio com e-mail vazio
    Então o sistema deve exibir uma mensagem de erro
