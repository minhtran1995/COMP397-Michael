var objects;
(function (objects) {
    var Person = (function () {
        //Constructor
        function Person(name) {
            this._name = name;
        }
        //Public Method
        Person.prototype.speak = function () {
            console.log(this._name + " say hello");
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map