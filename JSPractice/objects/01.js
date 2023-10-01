// Two ways

function UserData(userName,dOB,mail,number,company,role,salary,yearsOfExperience) {
     let userData = {
          personalData: {
               userName: `${userName}`,
               usrDOB: `${dOB}`,
               userMail: `${mail}`,
               userNumber : `${number}`
          },
          profistionalData: {
               userCompany: `${company}`,
               userRole: `${role}`,
               userSalary: `${salary}`,
               userExperience: ` ${yearsOfExperience}`,
               userMailId : `${mail}`
          }
     }
     return userData;
}



let userDetails = UserData("Prathyush", '19/11/2001', 'google@gmail.com', '1234567890', 'X', 'S/W Dev', 10000, 2)
console.log(userDetails.personalData)

