/*
* GET home page.
 */

exports.me = function(req, res){
  res.render('about', { title: 'About JS' });
};
