document.body.style.backgroundColor='#efcfa0';

var DivTitle = document.createElement('div');
DivTitle.id = 'DivTitle';
document.body.appendChild(DivTitle);

var title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Account Profile';
DivTitle.appendChild(title); 

var Profileform = document.createElement('form');
Profileform.className = 'profile-form';
document.body.appendChild(Profileform);

var NameLabel = document.createElement('label');
NameLabel.className = 'profile-label';
NameLabel.textContent = 'Name: Walid Nader';
Profileform.appendChild(NameLabel);

var PhoneLabel = document.createElement('label');
PhoneLabel.className = 'profile-label';
PhoneLabel.textContent = 'Phone Number: 01098485366';
Profileform.appendChild(PhoneLabel);

var AddressLabel = document.createElement('label');
AddressLabel.className = 'profile-label';
AddressLabel.textContent = 'Address: 116g st hadayk el ahram'; 
Profileform.appendChild(AddressLabel);

var DateOfBirthLabel = document.createElement('label');
DateOfBirthLabel.className = 'profile-label';
DateOfBirthLabel.textContent = 'Date Of Birth: 11/12/1997'; 
Profileform.appendChild(DateOfBirthLabel);

var GenderLabel = document.createElement('label');
GenderLabel.className = 'profile-label';
GenderLabel.textContent = 'Gender: Male'; 
Profileform.appendChild(GenderLabel);
