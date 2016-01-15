module objects {
    export class Student extends Person {
        // Private Var
        private _studentNumber: number;
        //Constructor
        constructor(name: string, studentNumber: number) {
            super(name);
            this._studentNumber = studentNumber;
        }

        public studies(): void {
            console.log(this._name + " is studying");
        }
    }


}
