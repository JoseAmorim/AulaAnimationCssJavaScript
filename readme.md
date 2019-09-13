# Formulário animado com JS puro e CSS Animation

# Aula da Rocketseat

## Desafios

- [x] Fazer o formulário aparecer, suavemente, quando a página abrir.
- [x] Fazer os campos aparecerem da esquerda para a direita, suavizando a entrada e fazendos-os entrar em momentos distintos.
- [x] Quando clicar em Login, fazer o formulário sair da tela, indo para baixo.
- [x] Remover formulário do html e não mostrar rolagem enquanto o formulário está saindo da tela.
- [x] Adcionar um efeito diferente de timing para a saída do formulário.
- [x] Fazer o formulário vibrar caso haja campos vazios.
- [x] Criar alguns quadrados animados (que fiquem girando) e que saem de baixo da tela (fora do campo de visão) e vão para cima da tela (que saia do campo de visão também). _Detalhes_: Os quadrados devem ter tamanhos diferentes, sairem em momentos diferentes, terem timing diferente e animação contínua.

## Animation

8 propriedades:

- animation-name: animationname (nome da animação);
- animation-duration: 2s (duração total da animação);
- animation-delay: 3s (duração que a animação levará para começar);
- animation-fill-mode: none (qual será o estilo da animação quando ela começar ou parar);
- animation-play-state: running (utiliza para alterar entre rodando e pausada);
- animation-timing-function: ease (progressão da animação);
- animation-direction: reverse (direção da animação);
- animation-iteration-count: infinite (o número de vezes que a animação será executada);

```
@keyframes animationname {
    0% {

    }

    100% {

    }
}
```

ou

```
@keyframes animationname {
    from {

    }

    to {

    }
}
```

pode-se ter múltiplas animações no mesmo elemento

animation: slide-top 2s, bounce 1s, fade 0.2s;

## Referencias

[CSS Animation Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

[Animation Timing Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

[Site para criar animações](http://animista.net/play/basic/scale-up)

[Site para criar cubic Bézier timming](https://matthewlein.com/tools/ceaser)
