var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Club = new keystone.List('Club', {
  autokey: {path: 'slug', from: 'title', unique: true },
  map: {name: 'title'},
  singular: 'Club',
  plural: 'Clubs'
});

Club.add({
  title: {type: String, required: true},
  president: {type: Types.Relationship, ref: 'User'},
  qty: {type: Number},
  image: {type: Types.CloudinaryImage},
  establishedSince: {type: Date},
  publishedDate: {type: Date, default: Date.now},
  content: {
    brief: {type: Types.Html, wysiwyg: true, height: 300},
    extended: {type: Types.Html, wysiwyg: true, height: 300},
  }
});

Club.register();
