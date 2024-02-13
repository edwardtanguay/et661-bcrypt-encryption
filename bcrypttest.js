import bcrypt from 'bcrypt';

const register = async (password) => {
	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(password, salt);
	console.log('SALT', salt); // random salt that produces a random has each time
	console.log('HASH', hash); // hash is store in database
};

const login = async (password) => {
	// get ash from user record in database
	// const hash = '$2b$12$cuL/y67Fd7jN9tJ8i9Z.pePNDBt70yJQI8xx07l5yyXk70aaTBmYS'; 
	const hash = '$2b$16$5fIuDdcIRnwiYUTm1dB6JOETf45OVfdqIau/qX/X0tXEXg1akir6i';
	const isValid = await bcrypt.compare(password, hash);
	console.log(isValid);
};

register('test111');
// login('test000');
// login('test111');