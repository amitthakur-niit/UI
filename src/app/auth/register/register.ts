

export interface Register {
    password : String;
	firstName : String;
	lastName : String;
	dateOfBirth : Date;
    email : String;
    forgetPasswordA : String;
    forgetPasswordQ : String;
    userId:BigInteger;
}

export interface RegisterResponse{
    email : String;
    userId:BigInteger;
    message:String;
}