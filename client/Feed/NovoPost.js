Template.NovoPost.events({
    "submit form": function(evento, template) { //template onde ocorre o evento
        evento.preventDefault();
        var textoDoFormulario = evento.target.texto.value;

        Meteor.call("inserirPost", textoDoFormulario);

        evento.target.texto.value = "";
    }
});