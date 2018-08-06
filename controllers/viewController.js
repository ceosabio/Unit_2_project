module.exports = {
  showAll(req, res) {
    res.render('food/food-index');
  },
  showOne(req, res) {
    res.render('food/food-one');
  },
  showBlankForm(req, res) {
    res.render('food/food-add');
  },
  showEditForm(req, res) {
    res.render('food/food-edit');
  },
  handleCreate(req, res) {
    res.redirect('/food');
  },
  handleUpdate(req, res) {
    res.redirect(`/food/${req.params.id}`);
  },
  handleDestroy(req, res) {
    res.redirect('/food');
  },
  show404(err, req, res, next) {
    console.log({ err });
    res.render('404');
  },
};