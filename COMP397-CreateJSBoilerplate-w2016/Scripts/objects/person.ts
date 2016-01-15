module objects {
    export class Person {

        protected _name: string;

        //Constructor
        constructor(name: string) {
            this._name = name;
        }

        //Public Method
        public speak(): void {
            console.log(this._name + " say hello");
        }

    }

}