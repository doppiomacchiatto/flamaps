/*
* GET home page.
 */
exports.flcen = function(req, res){
  res.render('flacensus', { title: '2010 Florida Census' });
};
