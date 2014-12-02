Package.describe({
  "summary": "JQuery InputMask for Meteor",
  "version": "3.1.42",
  "git": "https://github.com/BigDSK/meteor-inputmask.git",
  "name": "bigdsk:inputmask"
});

Package.on_use(function(api) {
  api.versonsFrom('0.9.0');
  api.use('jquery', 'client');
  api.add_files('jquery.inputmask/dist/jquery.inputmask.bundle.js', 'client');
});
