/*global define, describe, it, beforeEach*/

define([
    'jquery',
    'underscore',
    'backbone',
    'apps/navigation/topBar/topBarView'
], function ($, _, Backbone, TopBarView) {
    'use strict';

    describe('Navigation view', function () {
        describe('in navigation topBarView', function () {
            beforeEach(function () {
                var model = new Backbone.Model({
                    firstName: 'John',
                    imageSource: 'images/profile_default.jpg'
                });

                this.view = new TopBarView({model: model});
                this.view.render();
            });
            it('Calling render() should return the view object', function () {
                this.view.should.equal(this.view);
            });
            it('Calling render() should render firstName', function () {
                expect(this.view.$('li').text()).to.match(/John/);
            });

        });
    });
});