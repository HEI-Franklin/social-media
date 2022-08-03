import { faker } from '@faker-js/faker';
import fs from 'fs';

const query = `INSERT INTO account
    (first_name, last_name, nickname, birthday, gender, email, profile_pic)
    VALUES\n`;
let data = new String();
data += query;

const accountNumber = 500000;

const generateRandomInteger = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRadomAccount = () => {
    const first_name = faker.name.firstName().replace("'", "''");
    const last_name = faker.name.lastName().replace("'", "''");
    const nickname = faker.name.lastName().replace("'", "''");
    const birthday = `${generateRandomInteger(2022, 1950)}-${generateRandomInteger(12, 1)}-${generateRandomInteger(31, 1)}`;
    const gender = (faker.name.gender(true) === "Male" ? 'M':'F');
    const email = faker.internet.email();
    const profile_pic = faker.name.lastName() + '.png';
    return `('${first_name}','${last_name}','${nickname}','${birthday}','${gender}','${email}','${profile_pic}')`;
}

for(let i = 0; i<=accountNumber; i++){
    data += `${generateRadomAccount()},\n`;
    if(i==accountNumber){
        data += `${generateRadomAccount()};`;
    }
}

try {
  fs.writeFileSync('Mock_500_000_Account.sql', data);
} catch (err) {
  console.error(err);
}