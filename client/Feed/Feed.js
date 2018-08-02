Template.Feed.events({
	"submit form": function(evento, template) { //template onde ocorre o evento
		evento.preventDefault();
		var textoDoFormulario = evento.target.texto.value
		console.log(textoDoFormulario);
		Posts.insert({
			texto: textoDoFormulario 
		});
		evento.target.texto.value = ""; 
	}
});

Template.Feed.helpers({
	posts: function() {
		var postsDoCollection = Posts.find().fetch();
		return postsDoCollection;
	}
});