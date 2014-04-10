/*
* GET home page.
 */
exports.mil = function(req, res){
  res.render('flamil', { title: 'Military Bases in Fla' });
};
