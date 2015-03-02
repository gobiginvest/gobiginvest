/*global define, describe, it, beforeEach */

define([
    'jquery',
    'underscore',
    'backbone',
    'apps/mainLayout/location/locationItemView'
], function ($, _, Backbone, LocationItemView) {
    'use strict';

    describe('Location view', function () {
        describe('in location itemView', function () {
            beforeEach(function () {
                var model = new Backbone.Model({
                    name: 'Item 1',
                    location: 'Washington',
                    imageSource: 'images/default.jpg'
                });

                this.view = new LocationItemView({model: model});
                this.view.render();
            });
            it('Calling render() should return the view object', function () {
                this.view.should.equal(this.view);
            });
            it('Calling render() should render location', function () {
                expect(this.view.$('h6').text()).to.match(/Washington/);
            });

        });
    });
});