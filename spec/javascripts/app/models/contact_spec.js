describe("app.models.Contact", function() {

  beforeEach(function(){
    this.aspect = factory.aspect();
    this.contact = new app.models.Contact({
                     person: { name: "aaa" },
                     aspect_memberships: [{id: 42, aspect: this.aspect}]
                   });
  });

  describe("inAspect", function(){
    it("returns true if the contact has been added to the aspect", function(){
      expect(this.contact.inAspect(this.aspect.id)).toBeTruthy();
    });

    it("returns false if the contact hasn't been added to the aspect", function(){
      expect(this.contact.inAspect(this.aspect.id+1)).toBeFalsy();
    });
  });
});
