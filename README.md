# Validação de CPF em JavaScript


# Regras para validação

- Deve ter 11 números
- Os 9 primeiros são números base e os outros 2 são números verificadores
- O resultado do primeiro cálculo deve ser igual ao primeiro verificador
- O resultado do segundo cálculo deve ser igual ao segundo verificador

# Cálculos

1° = multiplicar os valores do cpf até o último numero base por 10 na ordem decrescente até o número 2, o resultado multiplica por 10, o resultado divide por 11 e verificar se o resto é igual ao primeiro verificador.

2° = multiplicar os valores do cpf até o primeiro verificador por 11 na ordem decrescente até o número 2, o resultado multiplica por 10, o resultado divide por 11 e verificar se o resto é igual ao segundo verificador.

# Como rodar a aplicação

Abrir com Live Server ou o comando:
```bash
index.html
```

# Resultado

- CPF Válido:

<span>
    <img src="https://user-images.githubusercontent.com/85804895/140376413-d08aad0e-6b85-4026-a547-c859c1529d69.gif", width=900>
</span>

- CPF Inválido:

<span>
    <img src="https://user-images.githubusercontent.com/85804895/140376774-c8598f5e-ad67-4b4e-a816-4d8d9f7a2758.gif", width=900>
</span>

- Não informar CPF:

<span>
    <img src="https://user-images.githubusercontent.com/85804895/140376949-84d12c26-b9b1-4109-9915-b9d5176914f2.gif", width=900>
</span>

- Link para ver as regras para validação de CPF:

<span>
    <img src="https://user-images.githubusercontent.com/85804895/140377323-3f338820-0fe4-4f2c-a3e0-6e357d57f7b5.gif", width=900>
</span>

- Site: 
https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/

