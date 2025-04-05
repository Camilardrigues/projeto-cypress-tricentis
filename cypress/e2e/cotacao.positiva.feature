#utf-8
#language:pt

Funcionalidade: Cotação de seguro no portal Tricentis
    
    Cenário: Usuário preenche o formulário completo e envia a cotação com sucesso    
        Dado que o usuário acessa o portal Tricentis
        E clico no botão Automobile
        E valido o acesso à página Automobile
        Quando preenche corretamente os dados do veículo
        E preenche corretamente os dados do segurado
        E preenche corretamente os dados do produto
        E seleciona uma opção de preço
        E preenche os dados finais para envio
        E envia a cotação
        Então uma mensagem de confirmação de envio deve ser exibida