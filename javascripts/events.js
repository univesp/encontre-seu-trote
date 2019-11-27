$(document).ready(function() {

  //Clona footer na página final
  $("footer").clone().appendTo("#telaD .conteudo");

  // NAVEGAÇÃO

  // Chama segunda página
  function callTelaB() {
    $("#telaA").hide();
    $("nav").hide();
    $("#telaB").css("display", " flex")
  }
  $("#telaA .botao").click(callTelaB)

  //Chama quiz
  function callQuiz() {
    $("#telaB").hide();
    $(".tela-quiz").css("display", " flex");
    $(".navegacao").css("display", " flex");
    $("#tela1").css("display", " flex")
  }
  $("#telaB .botao").click(callQuiz)

  //Chama feedback
  function callFeedback() {
    $(".tela-quiz").hide();
    $(".navegacao").hide();
    $("#telaC").css("display", " flex")
  }

  //Chama tela final
  function callFinal() {
    $("#telaC").hide();
    $("#telaD").css("display", " flex");
    window.scrollTo(0, 0);
  }
  $("#telaC .botao").click(callFinal)

  // Navegação quiz
  let tamanhoQuiz = $(".quiz-wrap").length;
  let quizAtual = 1;
  let atual = "#tela" + quizAtual;

  // Esconde Voltar na primeira questão
  function escondeVoltar() {
    if (quizAtual == 1) {
      $(".navegacao .voltar").css("visibility", "hidden")
    }
  }
  escondeVoltar();
  // troca botão avançar/concluir
  function botaoFinal() {
    if (quizAtual == 10) {
      $(".navegacao .avancar").hide();
      $(".navegacao .concluir").show();
    } else {
      $(".navegacao .avancar").show();
      $(".navegacao .concluir").hide();
    }
  }

  //esconde Avancar
  function escondeAvancar() {
    console.log(atual);
    $("button.avancar").removeClass("animated flash");
    $("button.concluir").removeClass("animated flash");
    if ($(atual).hasClass("sem-avancar")) {
      $("button.avancar").addClass("botao-escondido")
    }
  }
  escondeAvancar()

  //mostra Avancar
  function mostraAvancar() {
    if (quizAtual == 10) {
      $("button.concluir").removeClass("botao-escondido");
      if ($(atual).hasClass("sem-avancar")){
        $("button.concluir").addClass("animated flash")
      }
    } else {
      $("button.avancar").removeClass("botao-escondido");
      if ($(atual).hasClass("sem-avancar")){
        $("button.avancar").addClass("animated flash")
      }
    }
    $(atual).removeClass("sem-avancar");
  }

  // valida preenchimento a cada Input clicado
  $("input").click(checaInput);
  // Habilita Avançar após validação
  function checaInput() {
    if (quizAtual == 9) {
      var lengthChecked = $(atual).find("input:checked").length;
      var todasRespostas = $("#tela9 .item-opiniao").length;
      if (lengthChecked == todasRespostas) {
        mostraAvancar()
      }
    } else {
      var lengthChecked = $(atual).find("input:checked").length;
      if (lengthChecked == 1) {
          mostraAvancar();
        }
      }
    }


  // function checaTela9(){
  //   $("#tela9 .item-opiniao").each(function(){
  //     console.log("um assunto")
  //   })
  // }
  // checaTela9();
  // $(".avancar").click(checaInput);


  //   $("#autoaval_orientada ol li").each(function(){
  //     var lengthChecked = $(this).find("input:checked").length;
  //     if(lengthChecked == 0){
  //       $(this).addClass("form-error");
  //     }
  //   });
  // })

  function voltaQuestao() {
    $("button.avancar").removeClass("botao-escondido");
    let quizAnterior = quizAtual - 1;
    let anterior = "#tela" + quizAnterior;
    $(atual).hide();
    $(anterior).css("display", "flex");
    quizAtual = quizAnterior;
    atual = "#tela" + quizAtual;
    escondeVoltar();
    botaoFinal();
    window.scrollTo(0, 0);
  }

  function avancaQuestao() {
    // mostra Voltar ao sair da primeira questão
    if (quizAtual == 1) {
      $(".navegacao .voltar").css("visibility", "visible")
    }
    let quizProximo = quizAtual + 1;
    let proximo = "#tela" + quizProximo;
    $(atual).hide();
    $(proximo).css("display", "flex");
    quizAtual = quizProximo;
    atual = "#tela" + quizAtual;
    escondeAvancar();
    botaoFinal();
    if (quizAtual == 4) {
      $(atual).ready( sortableAlturas )
    }
    window.scrollTo(0, 0);
  }

  $(".navegacao .voltar").click(voltaQuestao)
  $(".navegacao .avancar").click(avancaQuestao)

  $(".navegacao .concluir").click(calculaResultado);
  $(".navegacao .concluir").click(callFeedback);
  $(".navegacao .concluir").click(montaFeedback)
  //para teste
  $("#executa").click(calculaResultado, callFeedback)
  $("#executa").click(montaFeedback)


  // montaFeedback();


  ///////////////////

  // MONTA RESULTADO
  function montaFeedback() {
    var qtdOds = 0;
    for (var i = 0; i < perfis.length; i++) {
      var perfil = perfis[i];
      var icone = ".iconOds" + perfil;
      var texto = "#textoOds" + perfil;
      $(icone).show();
      $(texto).show();
      qtdOds++;
    }
    var primeiroTexto = "#textoOds" + perfis[0];
    $(primeiroTexto).addClass("primeiro-texto")

    // PARA TESTAR
    // var qtdOds = 2;
    // $("#iconOds1").show();
    // $("#iconOds2").show();
    // $("#iconOds3").show();
    // $("#iconOds4").show();
    // $("#iconOds5").show();
    // $("#iconOds6").show();
    // $("#iconOds7").show();
    // $("#iconOds8").show();
    // $("#iconOds9").show();
    // $("#iconOds10").show();
    // $("#iconOds11").show();
    // $("#iconOds12").show();
    // $("#iconOds13").show();
    // $("#iconOds14").show();
    // $("#iconOds15").show();
    // $("#iconOds16").show();
    // $("#iconOds17").show();

    // ajusta visualização dos itens
    if (qtdOds > 9){
      $(".ods-icon").addClass("odsFeed10")
    } else if (qtdOds > 6) {
      $(".ods-icon").addClass("odsFeed7")
    } else if (qtdOds > 4) {
      $(".ods-icon").addClass("odsFeed5")
    } else if (qtdOds > 2) {
      $(".ods-icon").addClass("odsFeed3")
    } else if (qtdOds > 1) {
      $(".ods-icon").addClass("odsFeed2")
    } else {
      $(".ods-icon").addClass("odsFeed1")
    }
    // ajusta cor do fundo e texto
    if (qtdOds > 1){
      $(".tela-feedback .imagem").addClass("ods0-bg");
      $(".tela-feedback .imagem h3").append("Você se identifica mais com os seguintes ODS")
    } else {
      var corPerfil = "ods" + perfis[0] + "-bg"
      console.log(corPerfil)
      $(".tela-feedback .imagem").addClass(corPerfil)
      $(".tela-feedback .imagem h3").append("Você se identifica mais com o seguinte ODS")
    }


    //EXECUTA FUNÇÃO BASEADO NA VISIBILIDADE DE UM ELEMENTO NA VIEWPORT
    $.fn.isNotInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      // var viewportBottom = viewportTop + $(window).height();
      // detecta visibilidade do elemento depois
      return elementBottom < viewportTop
    };
    // Habilita menu lateral na primeira vez em que o menu inicial sai da tela
    $(window).on('resize scroll', function() {
      if ($(".tela-feedback .imagem").isNotInViewport()) {
        console.log("saiu")
      } else {
        console.log("entrou")
      }
    });




  }






  //////////////////



  // Funcionamento básico sortable
  $(function() {
    $("#sortable").sortable({
      // create: function( event, ui ) {
      //   sortableAlturas()
      // },
      start: function(event, ui) {
        var sortId = "#" + ui.item.attr("id");
        ajustaPlaceholder(sortId)
      },
      update: function(event, ui) {
        sortableAlturas()
      },
      placeholder: "sort-placeholder"
    });
    $("#sortable").disableSelection();
  });

  //Atualiza alturas sortable
  function sortableAlturas() {
    let sortableItems = document.querySelectorAll("#sortable li");
    let sortablePosicao = document.querySelectorAll("#sort-posicao li");
    for (var i = 0; i < sortableItems.length; i++) {
      let novaaltura = sortableItems[i].offsetHeight + "px"
      sortablePosicao[i].style.height = novaaltura;
    }
    console.log('alturas sortable')
  }
  $(window).on('resize orientationchange', function() {
    sortableAlturas();
  });

  function ajustaPlaceholder(sortId) {
    var alturaAtivo = $(sortId).height();
    $(".sort-placeholder").height(alturaAtivo);
  }

  //Funcionamento barra de progresso no input range
  $("input[type=range]").on('input', function(){
    var este = $(this);
    progresso(este);
  } );

  function progresso(este) {
    var val = (este.val() - este.attr('min')) / (este.attr('max') - este.attr('min'));
    var percent = val * 100;

    este.css('background', 'linear-gradient(to right, transparent 0%, transparent 10px, #de1266 10px, #de1266 ' + percent + '%, transparent ' + percent + '%, transparent 100%)')

    este.css('background',
      '-moz-linear-gradient(left center, #de1266 0%, #de1266 ' + percent + '%,  transparent ' + percent + '%,  transparent 100%)');
  }
  // Arredonda valor do range input
  $("input[type=range]").mouseup(function(){
    var este = $(this);
    arredondaValor(este)
  });
  var todosRanges = document.querySelectorAll("input[type=range]");
  for (var i = 0; i < todosRanges.length; i++) {
    todosRanges[i].addEventListener("touchend", function(){
      var este = $(this);
      arredondaValor(este)
    });
  }
  function arredondaValor(este){
    var valor = este.val();
    console.log(valor);
    var valorredondo = Math.round(valor);
    console.log(valorredondo);
    este.val(valorredondo);
    progresso(este);
  }


})
