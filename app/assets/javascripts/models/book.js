var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        cover_image: {
            cover_image: {
                url: 'img/placeholder.png'
            }
        },
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});
