describe('mvIdentity', function(){
    beforeEach(module('app'));

    describe('isAuthenticated', function(){
        it('should return false if the user is not authenticated', inject(function(mvIdentity){
            expect(mvIdentity.isAuthenticated()).to.be.false;
        }))
    });

    describe('isAuthenticated',  function(){
        it('should return true if the user is authenticated', inject(function(mvIdentity){
            mvIdentity.currentUser = {};
            expect(mvIdentity.isAuthenticated()).to.be.true;
        }))
    });

    describe('isAuthorized', function(){
       it('should retrun false if user is not authorized', inject(function(mvIdentity){
           mvIdentity.currentUser = { roles: ['not admin'] };
           expect(mvIdentity.isAuthorized('admin')).to.be.false;
       }))
    });

    describe('isAuthorized', function(){
       it('should retrun true if user is authorized', inject(function(mvIdentity){
           mvIdentity.currentUser = { roles: ['admin'] };
           expect(mvIdentity.isAuthorized('admin')).to.be.true;
       }))
    });
});