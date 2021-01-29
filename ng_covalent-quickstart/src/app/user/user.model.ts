import { required, compare, maxLength, minLength, password, alpha } from '@rxweb/reactive-form-validators';

export class User {
    private _firstName = '';
    private _lastName = '';

    fullName: string;

    @required()
    @alpha()
    @maxLength({value: 10 })
    @minLength({value: 5 })
    set firstName(value: string) {
        this._firstName = value;
        this.setFullName();
    }

    get firstName(): string {
        return this._firstName;
    }

    @required()
    @alpha()
    @maxLength({value: 20 })
    @minLength({value: 5 })
    set lastName(value: string) {
        this._lastName = value;
        this.setFullName();
    }

    get lastName(): string {
       return this._lastName;
    }

    @required()
    @alpha()
    @maxLength({value: 20 })
    @minLength({value: 5 })
    userName: string;

    @required()
    @minLength({value: 5 })
    password: string;

    @compare({fieldName: 'password'})
    @required()
    confirmPassword: string;

    setFullName() {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
}
