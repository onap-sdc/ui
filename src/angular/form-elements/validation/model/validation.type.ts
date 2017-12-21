import {ValidationControl} from "./validation-control.model";
import {ValidationGroup} from "./validation-group.model";

export interface IValidation {
    // reset validation
    reset(): void;

    // validates the input value and sets errors and isValid (returns isValid)
    validate(value: any): boolean;
}

export enum ValidatorTypes {
    CUSTOM = "custom",
    REQUIRED = "required",
    REGEX = "regex",
    MANUAL = "manual"
}

export interface IValidator {
    type: ValidatorTypes;
    name?: string;
    message?: string;
    stop?: boolean;

    // regex validator
    patterns?: RegExp[];

    // custom validator
    callback?: (value: any) => string|string[]|null;

    // manual validator
    isError?: boolean;
}

export interface IValidationErrorsDict {
    [key: string]: string[];
}
