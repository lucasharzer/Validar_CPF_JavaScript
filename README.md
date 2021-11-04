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

CPF Válido:

<span>
    <img src="https://user-images.githubusercontent.com/85804895/140376413-d08aad0e-6b85-4026-a547-c859c1529d69.gif", width=900>
</span>
