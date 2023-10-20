import React from 'react';
import ReactDOM from 'react-dom';
import './MyFormStyle.css';

function MyForm() {
	return (
		<>
			<h1> My Form </h1>
			<form id = "my-form">
				<label for = "fname"> FirstName: <sup>*</sup> </label>
				<input id = "fname" type = "text" name = "FirstName" required/>
				<br/><br/>

				<label for = "lname"> Last Name: <sup>*</sup> </label>
<input id = "lname" type = "text" name = "LastName" required/>
				<br/><br/>

				<label for = "dateofbirth"> Date of Birth: <sup>*</sup> </label>
				<input id = "dateofbirth" type = "date" name = "DateOfBirth" required/>
				<br/><br/>

				<fieldset>
					<legend> Choose your gender: <sup>*</sup> </legend>
					<label for = "male"> Male </label>
					<input id = "male" type = "radio" name = "Gender" required/>
					<br/><br/>

					<label for = "female"> Female </label>
					<input id = "female" type = "radio" name = "Gender" required/>
<br/><br/>

					<label for = "other"> Others </label>
					<input id = "other" type = "radio" name = "Gender" required/>
					<br/><br/>
				</fieldset>

				<label for = "email"> Email Address: <sup>*</sup> </label>
				<input id = "email" type = "email" name = "Email" required/>
				<br/><br/>

				<label for = "phone"> Mobile Number: <sup>*</sup> </label>
				<input id = "phone" type = "tel" name = "Mobile" required/>
				<br/><br/>

				<label for = "adhar"> Upload your Adhar Card: <sup>*</sup> </label>
				<input id = "adhar" type = "file" name = "Adhar" required/>
				<br/><br/>

<input type = "submit"/>


			</form>

		</>
	);
}

export default MyForm;