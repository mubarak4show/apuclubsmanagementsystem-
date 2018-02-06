var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res),
      locals = res.locals;

  //Set locals
  locals.section = 'clubsandsocieties';

  //Load Clubs
  view.query('clubs', keystone.list('Club').model().find());

  // Render view
  view.render('clubs');
}
