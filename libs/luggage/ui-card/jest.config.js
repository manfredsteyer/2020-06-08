module.exports = {
  name: 'luggage-ui-card',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/luggage/ui-card',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
